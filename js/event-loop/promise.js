function A() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('A');
            resolve();
        }, 1000);
    });
}

function B() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('B');
            resolve();
        }, 500);
    });
}

function C() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('C');
            resolve();
        }, 100);
    });
}

A().then(() => {
    return B();
}).then(() => {
    return C();
});
//then默认的promise会失效
