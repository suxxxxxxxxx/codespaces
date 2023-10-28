var a = 1
foo()
function foo(a) {
  var a = 2
  function a() {}
  var b = a
  console.log(a); 
}