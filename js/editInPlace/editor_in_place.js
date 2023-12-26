/*
    *@func 就地编辑
    *@param {id: string, parent: string, value: string}
*/

class EditorInPlace {
    constructor(id, parent, value) {
        this.id = id;
        this.value = value || '这个家伙很懒，什么都没留下';
        this.parentElement = parent;
        this.createElements(); // 动态装载html节点
    }

    createElements() {
        this.containerElement = document.createElement('div'); // 创建容器节点

        this.containerElement.id = this.id; // 设置容器节点的id

        // 签名文字部分
        this.staticElement = document.createElement('span'); // 创建静态节点
        this.staticElement.innerText = this.value; // 设置静态节点的文本
        this.containerElement.appendChild(this.staticElement); // 将静态节点添加到容器节点中

        // 输入框
        this.inputElement = document.createElement('input'); // 创建输入框节点
        this.inputElement.type = 'text'; // 设置输入框类型
        this.inputElement.value = this.value;
        this.containerElement.appendChild(this.inputElement); // 将输入框添加到容器节点中

        // save 确认
        this.saveButton = document.createElement('button');
        this.saveButton.type = 'button';
        this.saveButton.innerText = '保存';
        this.containerElement.appendChild(this.saveButton);

        // cancel 取消
        this.cancelButton = document.createElement('button');
        this.cancelButton.type = 'button';
        this.cancelButton.innerText = '取消';
        this.containerElement.appendChild(this.cancelButton);

        this.parentElement.appendChild(this.containerElement); // 将容器添加到父元素中
        this.convertToText(); // 切换到文本状态
    }

    convertToText() {//切换到文本状态
        this.staticElement.style.display = 'inline';
        this.inputElement.style.display = 'none'; // 修复隐藏输入框
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none';
    }

    convertToEdit() {//切换到编辑状态
        this.staticElement.style.display = 'none';
        this.inputElement.style.display = 'inline'; // 修复显示输入框
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';
    }

    attachEvents() {//绑定事件
        var that = this;
        this.staticElement.addEventListener('click', this.convertToEdit.bind(this));//绑定点击事件
        this.cancelButton.addEventListener('click', this.convertToText.bind(this));//绑定取消事件
        this.saveButton.addEventListener('click', function () {
            var value = that.inputElement.value;//获取输入框的值
            that.staticElement.innerText = value;//设置静态节点的文本
            that.convertToText();//切换到文本状态
        });//绑定保存事件
    }
}

// 使用示例
new EditorInPlace('editme', document.querySelector('.root'));

EditorInPlace.prototype = {
    createElements: function () {
        this.containerElement = document.createElement('div'); // 创建容器节点

        this.containerElement.id = this.id; // 设置容器节点的id

        // 签名文字部分
        this.staticElement = document.createElement('span'); // 创建静态节点
        this.staticElement.innerText = this.value; // 设置静态节点的文本
        this.containerElement.appendChild(this.staticElement); // 将静态节点添加到容器节点中

        // 输入框
        this.inputElement = document.createElement('input'); // 创建输入框节点
        this.inputElement.type = 'text'; // 设置输入框类型
        this.inputElement.value = this.value;
        this.containerElement.appendChild(this.inputElement); // 将输入框添加到容器节点中

        // save 确认
        this.saveButton = document.createElement('button');
        this.saveButton.type = 'button';
        this.saveButton.innerText = '保存';
        this.containerElement.appendChild(this.saveButton);

        // cancel 取消
        this.cancelButton = document.createElement('button');
        this.cancelButton.type = 'button';
        this.cancelButton.innerText = '取消';
        this.containerElement.appendChild(this.cancelButton);

        this.parentElement.appendChild(this.containerElement); // 将容器添加到父元素中
        this.convertToText(); // 切换到文本状态
    },
    convertToText: function () {//切换到文本状态
        this.staticElement.style.display = 'inline';
        this.inputElement.style.display = 'none'; // 修复隐藏输入框
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none';
    },
    convertToEdit: function () {//切换到编辑状态
        this.staticElement.style.display = 'none';
        this.inputElement.style.display = 'inline'; // 修复显示输入框
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';
    },
    attachEvents: function () {//绑定事件
        var that = this;
        this.staticElement.addEventListener('click', this.convertToEdit.bind(this));//绑定点击事件
        this.cancelButton.addEventListener('click', this.convertToText.bind(this));//绑定取消事件
        this.saveButton.addEventListener('click', function () {
            var value = that.inputElement.value;//获取输入框的值
            that.staticElement.innerText = value;//设置静态节点的文本
            that.convertToText();//切换到文本状态
        });//绑定保存事件
    }
};

// 使用示例
new EditorInPlace('editme', document.querySelector('.root'));
