git init//初始化本地文件仓库（让git掌管文件夹）
git status //查看该仓库中的文件状态
git add .//提交所有文件到暂存区
git commit -m '你的注释'//将暂存区代码提交到master区
git push origin master 将文件推送到远程仓库

-git init 
    初始化为带有本地仓库的项目
    -git-learn工作区
    -.git 隐藏文件夹 代码仓库

-先add 再commit
    分几步？
    带业务场景
    网易上班，请写一个vue+langchain聊天功能
    1.py
    2.vue界面
    两个文件 暂存区
    git add 1.py
    git add 2.vue
    git commit -m '' 老板要看的
    一上午 3次

-当我们在写代码时，有可能会改到别人的代码，摸了下鱼，
    git status 当前仓库状态
    对比修改？
    git diff在add之前，再次确认你改了哪些地方
