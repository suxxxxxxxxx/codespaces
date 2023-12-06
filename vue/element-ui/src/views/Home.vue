<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span>选课系统</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        欢迎{{ }}
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>个人详情</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
        </el-container>
    </div>
</template>

<script>
export default {


}
</script>

<style lang="less" scoped>
.common-layout {
    height: 100vh;

    .el-container {
        height: 100%;

        .el-header {
            background: #409EFF;
            color: #fff;
            font-size: 30px;
            line-height: 80px;
            display:flex ;
            justify-content: space-between;
            align-items: center;

            .el-dropdown-link {
                cursor: pointer;
                color: var(--el-color-primary);
                display: flex;
                align-items: center;
            }
        }

        .el-aside {
            background: #fff;
        }

        .el-main {
            background: #fff;
        }
    }
}
</style>