function a(cb) {
    setTimeout(() => {
        console.log('阿臻');
        cb();
    }, 1000);
}

function b() {
    setTimeout(() => {
        console.log('10亩地');
    }, 500);
}
a(b)