function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}
function b() {
  setTimeout(() => {
    console.log("b");
  }, 500);
}
a()
  .then(() => {})
  .catch(() => {});
