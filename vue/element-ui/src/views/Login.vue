<template>
    <div class="login">
        <div class="login-wrap">
            <div class="item">
                <span>账号：</span>
                <input type="text" v-model="account">
            </div>
            <div class="item" >
                <span>密码：</span>
                <input type="text" v-model="password">
            </div>
            <div class="item">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                account: 'admin',
                password: '123'
            }
        },
        methods: {
            login(){
                //获取账号密码 再发起请求传给后端
                // console.log(this.account, this.password);
                if(!this.account || !this.password){
                    alert('账号或密码不能为空');
                    return;
                }
                //用js控制路由跳转
                // this.$router.push(`/home/${this.account}`);
                // this.$router.push({path:'/home', query: {account: this.account}});
                // this.$router.push({name: 'home', params: {account: this.user}});
                //哈希
                // this.$router.push({path: '/home', hash: '#abc'});
            }
        }
    }
</script>

<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aaa;
    .login-wrap{
        width: 400px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px #fff;
        padding: 20px;
        // box-sizing: border-box;
        .item{
            display: flex;
            margin-top: 30px;
            input{
                flex: 1;
                padding: 0 10px;
            }
            button{
                font-size: 26px;
                flex: 1;
                border-radius: 1000px;
                border: none;
                background: rgb(13,178,255);
                color: #fff;
                padding: 5px 0;
                cursor: pointer;
            }
        }
    }
}
</style>