function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Profile failed");
            resolve("Profile Loaded");
        }, 2000);
    });
}
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Posts failed");
            resolve("Posts Loaded");
        }, 1500);
    });
}
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Messages failed");
            resolve("Messages Loaded");
        }, 1000);
    });
}

(async function () {
    const start = Date.now();
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
    const duration = Date.now() - start;

    results.forEach((r, idx) => {
        if (r.status === "fulfilled") {
            console.log(`Module ${idx + 1} succeeded:`, r.value);
        } else {
            console.log(`Module ${idx + 1} failed:`, r.reason);
        }
    });

    console.log("Total time (ms):", duration);
})();
