function stage(name, cb) {
    setTimeout(() => {
        console.log(name);
        cb && cb();
    }, 1000);
}

function pipelineCallbacks() {
    stage("design", () => {
        stage("build", () => {
            stage("test", () => {
                stage("deploy", () => {
                    stage("celebrate", () => {
                        console.log("Pipeline finished (callbacks)");
                    });
                });
            });
        });
    });
}

// cleaner async/await version
function asyncStage(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, 1000);
    });
}

async function pipelineAsync() {
    // async/await makes linear code, easy to read
    await asyncStage("design");
    await asyncStage("build");
    await asyncStage("test");
    await asyncStage("deploy");
    await asyncStage("celebrate");
    console.log("Pipeline finished (async/await)");
}

// Run both to compare
console.log("Running callback version...");
pipelineCallbacks();

setTimeout(() => {
    console.log("Running async/await version...");
    pipelineAsync();
}, 7000);

