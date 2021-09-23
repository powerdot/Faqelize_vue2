
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { exit } = require("process");
const readline = require('readline');

console.log("BUILD ARGS", process.argv[2])

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
};

(async () => {
    switch (process.argv[2]) {
        case 'build':
            let algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
            let password = await askQuestion("Enter the password: ")
            let key = crypto.createHash('sha256').update(password).digest('base64').substr(0, 32);
            let text = fs.readFileSync(path.resolve(__dirname, "public/database.json"), "utf8");
            let cipher = crypto.createCipher(algorithm, key);
            let encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
            fs.writeFileSync(path.resolve(__dirname, "public/database_encrypted.json"), `["encrypted","${encrypted}"]`, "utf8");
            break;

        case 'clean':
            if (fs.existsSync(path.resolve(__dirname, "docs/database.json"))) {
                fs.unlinkSync(path.resolve(__dirname, "docs/database.json"));
            }
            break;

        default:
            console.log("Invalid command");
            exit(1);
            break;
    }

    console.log("BUILD SCRIPT DONE")

    exit(0);
})()
