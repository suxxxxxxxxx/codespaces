var input = document.getElementById('list-input')
var ul =document.getElementById('list')
//监听用户敲击entry键
// input.onkeyup = function(e){
//     if(e.keyCode==13){
//         //读取到input的值
//         //生成li结构
//         //将input中的值添加到li中
//         var todoList=`
//         <li>
//             <input type="checkbox">
//             <span>${input.value} </span>
//         </li>
//     `
//     //将li添加到ul中
//     ul.insertAdjacentHTML('afterbegin',todoList)
//     input.value=''
//     }
// }
var todoItem=[]
input.onkeyup = function(e){
    if(e.keyCode==13){
        if(input.value!= ''){
            todoItem.push(input.value)
            input.value='';
            makelist()
        }
    }
}
function makelist(){
    //清空ul
    ul.innerHTML = "";
    //循环数组。生成多份li结构，添加到中
    for(var i=0;i<todoItem.length;i++){
        var todoList=`
            <li>
                <input type="checkbox">
                <span>${todoItem[i]} </span>
            </li>`
            ul.insertAdjacentHTML('afterbegin',todoList)
    }
}

ul.addEventListener("change", function (e) {
    if (e.target && e.target.type === "checkbox") {
        var li = e.target.parentNode; // 获取父级 li 元素
        li.classList.toggle("checked"); // 切换 checked 类
    }
});
