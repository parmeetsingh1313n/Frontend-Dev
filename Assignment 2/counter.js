let cnt = 0;

function increment() {
    cnt++;
    console.log("Count:", cnt);

    function logInner() {
        console.log("Inner count:", cnt);
    }

    logInner();
}

function decrement() {
    cnt--;
    console.log("Count:", cnt);
}

increment();
increment();
decrement();