const crypto = require("crypto");

function decryptDatabase(value, password) {
    try {
        let algorithm = "aes256";
        let key = hashPassword(password);
        let decipher = crypto.createDecipher(algorithm, key);
        let decrypted =
            decipher.update(value[1], "hex", "utf8") + decipher.final("utf8");
        return JSON.parse(decrypted);
    } catch (error) {
        return false;
    }
};

function hashPassword(password) {
    if (password.length == 32) return password;
    return crypto
        .createHash("sha256")
        .update(password)
        .digest("base64")
        .substr(0, 32);
};

module.exports = {
    decryptDatabase,
    hashPassword
};