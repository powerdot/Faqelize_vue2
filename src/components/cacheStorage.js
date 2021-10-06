let uniq_key = `${document.location.hostname}_faqelize_auth`;

const set = async (key, token) => {
    try {
        const cache = await caches.open(uniq_key);
        const responseBody = JSON.stringify({
            'token': token
        });
        const response = new Response(responseBody);
        await cache.put(key, response);
        console.log("Token saved! 🎉");
    } catch (error) {
        // It's up to you how you resolve the error
        console.log("saveToken error:", { error });
    }
};

const get = async (key) => {
    try {
        const cache = await caches.open(uniq_key);
        const response = await cache.match(key);

        if (!response) {
            return null;
        }

        const responseBody = await response.json();
        return responseBody.token;
    } catch (error) {
        // Gotta catch 'em all
        console.log("getToken error:", { error });
    }
};

module.exports = {
    set,
    get
};
