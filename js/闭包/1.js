var arr = [];

for (var i = 0; i < 10; i++) {
    (function a(j) {
        arr[j] = function() {
        console.log(j);
        }
    })(i)
}
