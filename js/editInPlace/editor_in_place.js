/*
    *@func 就地编辑
    *@param {id: string, parent: string, value: string}
*/

function EditorInPlace(id, parent, value) {
    this.id = id;
    this.value = value || '这个家伙很懒，什么都没留下';
    this.parentElement = parent;
    this.createElements();//动态装载html节点
}
EditorInPlace.prototype = {
    createElements: function () {
        this.containerElement = document.createElement('div');//创建容器节点
        
        this.containerElement.id = this.id;//设置容器节点的id
        //签名文字部分
        this.staticElement = document.createElement('span');//创建静态节点
        this.staticElement.innerText = this.value;//设置静态节点的文本
        this.containerElement.appendChild(this.staticElement);//将静态节点添加到容器节点中

        //输入框
        this.inputElement = document.createElement('input');//创建输入框节点
        this.inputElement.type = 'text';//设置输入框类型
        this.inputElement.value = this.value; // 修复这一行
        this.containerElement.appendChild(this.inputElement);//将输入框添加到容器节点中
        //save 确认
        this.saveButton = document.createElement('button');
        this.saveButton.type = 'button';
        this.saveButton.innerText = '保存';
        this.containerElement.appendChild(this.saveButton);
        //cancel 取消
        this.cancelButton = document.createElement('button');
        this.cancelButton.type = 'button';
        this.cancelButton.innerText = '取消';
        this.containerElement.appendChild(this.cancelButton);
        this.parentElement.appendChild(this.containerElement); // 将容器添加到父元素中

    }
}
