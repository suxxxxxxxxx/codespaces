function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('a')
            resolve()
        },1000)
    })
}
function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('b')
            reject()
        },1500)
    })
}

function c(){
    console.log('c')
}
Promise.allSettled([a(), b()])
    .then(c)
    .catch((err) => {
        console.log(err)
    });