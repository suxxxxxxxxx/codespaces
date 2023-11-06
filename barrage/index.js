//历史弹幕
let data =[
    {value:'今天你听妈妈的话了嘛',color:'red',fontSize:22 ,time:5},
    {value:'不听不听就要恋爱',color:'green',fontSize:30,time:10},
    {value:'周董我男神',color:'#00a1f5',fontSize:26,time:15},
]
CanvasBarrage.prototype.render = function(){
    //清楚画布
    this.clear();
    this.renderBarrage();//弹幕绘制在画布上
    if(this.isPaused){//播放状态
        requestAnimationFrame(this.render.bind(this))
    }
} 


CanvasBarrage.prototype.clear = function(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
}


CanvasBarrage.prototype.renderBarrage = function(){
    //拿到视频播放的当前时间
    let time = this.video.currentTime;

    //遍历所有的弹幕，每一个barrage都是Barrage的实例
    this.barrages.forEach(function(barrage){
        if(time >= barrage.time&&!barrage.flag){
            //判断当前弹幕是否初始化
            if(!barrage.isInit){
                barrage.init();
                barrage.isInit = true;
            }
            //控制弹幕左移
            barrage.x -= barrage.speed;
            barrage.renderEach();//渲染每一条弹幕
            if(barrage.x < -barrage.width){//弹幕移出屏幕
                barrage.flag = true;
            }
        }
    })
}
CanvasBarrage.prototype.add = function(obj){

    this.barrages.push(new Barrage(obj,this));//实例化barrage
}
//整理弹幕数据
function CanvasBarrage(canvas,video,opts = {}){
    if(!canvas || !video) return;

    this.video = video;
    this.canvas = canvas;
    //设置canvas的宽高和video一致
    this.canvas.width = video.width;
    this.canvas.height = video.height;
    //获取画布
    this.ctx = canvas.getContext('2d');
    //初始化弹幕
    let defOpts = {
        color:'#e91e63',
        speed:1.5,
        opacity:0.5,
        fontSize:20,
        data:[]
    }
    Obect.assign(this,defOpts,opts);

    //视频播放，弹幕才出现
    this.isPaused = true;//判断视频播放状态
    //获取到所有的弹幕
    this.barrages = this.data,map(item => new Barrage(item,this));//将每一条弹幕修饰一下
    //移动弹幕
    this.render();
}
//修饰一条弹幕
Barrage.prototype.Init= function(){
    //如果没有传参，就取默认值
    this.color = this.color || this.context.color;
    this.speed = this.speed || this.context.speed;
    this.opacity = this.opacity || this.context.opacity;
    this.fontSize = this.fontSize || this.context.fontSize;
    //计算弹幕的宽度
    let p = document.createElement('p');
    p.style.fontSize = this.fontSize + 'px';
    p.innerHTML = this.value;
    document.body.appendChild(p);
    this.width = p.clientWidth;
    document.body.removeChild(p);
    //弹幕出现的位置
    this.x = this.context.canvas.width;
    this.y = this.context.canvas.height * Math.random();
    if(this.y < this.fontSize){
        this.y = this.fontSize;
    }else if(this.y > this.context.canvas.height - this.fontSize){
        this.y = this.context.canvas.height - this.fontSize;
    }

}
Barrage.prototype.renderEach = function(){
    //这条弹幕绘制在画布上  
    //设置画布文字的字号和字体 
    //设置画布文字颜色
    //绘制文字
    this.context.ctx.font = `${this.fontSize}px Arial`;
    this.context.ctx.fillStyle = this.color;
    this.context.ctx.fillText(this.value,this.x,this.y);

}
function Barrage(obj,context){
    this.value = obj.value;//弹幕内容
    this.time = obj.time;//弹幕出现时间
    this.obj = obj;
    this.context = context;
}
// let canvas = document.getElementById('canvas')
// new CanvasBarrage(canvas,video,{value:'xxx',color:'',time:6})

//发送弹幕
let canvas =document.getElementById('canvas');
let video =document.getElementById('video');  
let $text = document.getElementById('text');
let $btn = document.getElementById('btn');
let $color = document.getElementById('color');
let $range = document.getElementById('range');

// $btn.onclick = function{
//     console.log(123);
// }

//创建整理弹幕的实例对象
let canvasBarrage = new CanvasBarrage(canvas,video,{data});
video.addEventListener('play',function() {
    canvasBarrage.isPaused = false;
    canvasBarrage.render();//处理每一条
})


function send(){    
    //读取文本内容
    let value = $text.value;
    //当前视频播放时间
    let time = video.currentTime;
    let color = $color.value;
    let fontSize = $range.value;
    let obj = {value: value,color:color,fontSize:fontSize,time:time};
    //添加弹幕数据
    canvasBarrage.add(obj);

}
$btn.addEventListener('click',send)
$text.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        send()
    }
})