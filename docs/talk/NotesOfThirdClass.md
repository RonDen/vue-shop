## SCM: 
+  Source control management
+ or source code management, the management of documents, source code or other data in a computing project.
## Git:
+ 为了取代BitKeeper来管理Linux内核
+ 基于命令行的版本控制工具
+ 通过玩游戏练习 Git 分支操作 https://zhuanlan.zhihu.com/p/134346782
+ 动图展示Git的10大难懂命令 https://zhuanlan.zhihu.com/p/132573100
+ 图解git diff的用法：http://marklodato.github.io/visual-git-guide/index-zh-cn.html
### Git基本操作：
+ git init
+ git add .
+ git commit -m "commit annotation"
+ git log （查看修改目录）
+ git reset HEAD^ （版本回退但是保留上次的修改）
+ git reset --hard 加上gitlog中想回滚那个版本的前几个字母 （版本回退不保留上次的修改）
+ git branch –v （看到所有分支）
+ git branch -vv (若有远程分支可以展示更多更详细的信息)
+ git branch branch_name(创建分支)
+ git checkout –b branch_name (创建一个分支的同时切换到这个新分支)
+ $(master) git checkout dev (切换到dev分支)
+ $(dev) git checkout master  (dev合并master分支)
+ $(master) git merge dev (master合并dev分支)
+ git branch –d branch_name (已合并删除分支)
+ git branch –D branch_name (未合并强制删除分支)
+ git fetch origin master (从远程拉取分支)
+ git stash （接到一个紧急任务需要重新开分支，而当前正在分支上进行的工作还没有完成，并不想提交时，用git stash保存当前工作）
+ git stash pop （弹出之前暂存的内容）
+ git checkout –- 文件 （用暂存区的内容覆盖工作区）
+ git reset HEAD –- 文件（历史区覆盖暂存区）
### Git和其他版本控制系统一个不同之处：有暂存区概念
### Git与GitHub结合命令：
+ git remote –v (查看远程仓库)
+ git fetch origin master (拉取远程分支，但不合并)
+ git pull origin master (拉取远程分支并合并，等于fetch + merge)
+ git push origin master (推送到远程分支)
## 有趣的网站
+ hello github