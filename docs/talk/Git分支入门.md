
<font color=#999AAA >
</font>

@[TOC](Git学习)


<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 前言

<font color=#999AAA >开源社学习的第一个任务：学习Git操作，此为加入开源社区的必备技能。</font>

<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">


# 一、Git是什么？


<font color=#999AAA >Git是目前世界上最先进的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。



# 二、学习步骤
## 1.安装Git
Git 各平台安装包下载地址为：**http://git-scm.com/downloads**

Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。
这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。

配置个人的用户名称和电子邮件地址以及初始化：

    $ git config --global user.name "runoob"
    $ git config --global user.email test@runoob.com
    $ git init

## 2.远程仓库与远程分支
### 1.远程仓库


    git clone


<font color=#999AAA >

```git clone```是对远程仓库的拷贝，可以通过因特网与远程仓库进行通信，可以增加或是获取提交记录。

远程仓库却有一系列强大的特性

<font color=#999AAA >

首先也是最重要的的点, 远程仓库是一个强大的备份。本地仓库也有恢复文件到指定版本的能力, 但所有的信息都是保存在本地的。有了远程仓库以后，即使丢失了本地所有数据, 你仍可以通过远程仓库拿回你丢失的数据。
        
<font color=#999AAA >


还有就是, 远程让代码社交化了! 既然你的项目被托管到别的地方了, 你的朋友可以更容易地为你的项目做贡献(或者拉取最新的变更)

### 2.远程分支

<font color=#999AAA >

```git clone```命令执行后，在我们本地仓库多了一个名为origin/master的分支，这种类型的分支就叫远程分支。

远程分支有一个命名规范 —— 它们的格式是:
```
<remote name>/<branch name>
```
因此，如果你看到一个名为 o/master 的分支，那么这个分支就叫 master，远程仓库的名称就是 o。当你使用真正的 Git 时, 你的远程仓库默认为 origin!

远程分支反映了远程仓库(在你上次和它通信时)的状态。这会有助于你理解本地的工作与公共工作的差别 —— 这是你与别人分享工作成果前至关重要的一步。

远程分支有一个特别的属性，在你检出时自动进入分离 HEAD 状态。Git 这么做是出于不能直接在这些分支上进行操作的原因, 你必须在别的地方完成你的工作, （更新了远程分支之后）再用远程分享你的工作成果。

### 3.从远程仓库获取数据
使用```git fetch```当我们从远程仓库获取数据时, 远程分支也会更新以反映最新的远程仓库。

之后从抓取的更新合并到本地分支可以使用：

```
git cherry-pick o/master
git rebase o/master
git merge o/master
```

实际上，由于先抓取更新再合并到本地分支这个流程很常用，因此 Git 提供了一个专门的命令```git pull```来完成这两个操作,```git pull```就是 fetch 和 merge 的简写,类似的 ```git pull --rebase```就是 fetch 和 rebase 的简写。

```<place>```参数
如果你像如下命令这样为 git fetch 设置 的话：

    git fetch origin foo

Git 会到远程仓库的 ```foo```分支上，然后获取所有本地不存在的提交，放到本地的 ```o/foo```上。

### 4.向远程仓库推送数据
使用```git push```向远程仓库推送本地仓库的数据改变，本地仓库的远程分支也会更新也会更新以反映最新的远程仓库。

当向远程仓库推送数据时，远程仓库如果已经发生变化（可能是团队其他成员提交了代码），使得本地仓库的远程分支和远程仓库不一致,需要先更新本地的远程分支再提交。

远程服务器拒绝直接推送(push)提交到master, 因为策略配置要求 pull requests 来提交更新。

Git 是通过当前检出分支的属性来确定远程仓库以及要 push 的目的地的。这是未指定参数时的行为，我们可以为 push 指定参数，语法是：

    git push <remote> <place>

举个例子：     

    git push origin maste
把这个命令翻译过来就是：

切到本地仓库中的“master”分支，获取所有的提交，再到远程仓库“origin”中找到“master”分支，将远程仓库中没有的提交记录都添加上去，搞定之后告诉我。

我们通过“place”参数来告诉 Git 提交记录来自于 master, 要推送到远程仓库中的 master。它实际就是要同步的两个仓库的位置。

需要注意的是，因为我们通过指定参数告诉了 Git 所有它需要的信息, 所以它就忽略了我们所检出的分支的属性！

你可能想问 —— 如果来源和去向分支的名称不同呢？比如你想把本地的 ```foo```分支推送到远程仓库中的 ```bar```分支。

要同时为源和目的地指定 ```<place>```的话，只需要用冒号```:```将二者连起来就可以了：

    git push origin <source>:<destination>
### 5.远程追踪分支

pull 操作时, 提交记录会被先下载到 o/master 上，之后再合并到本地的 master 分支。隐含的合并目标由这个关联确定的。

push 操作时, 我们把工作从 master 推到远程仓库中的 master 分支(同时会更新远程分支 o/master) 。这个推送的目的地也是由这种关联确定的！

master 和 o/master 的关联关系就是由分支的“remote tracking”属性决定的。master 被设定为跟踪 o/master —— 这意味着为 master 分支指定了推送的目的地以及拉取后合并的目标。

你可能想知道 master 分支上这个属性是怎么被设定的，你并没有用任何命令指定过这个属性呀！好吧, 当你克隆仓库的时候, Git 就自动帮你把这个属性设置好了。

当你克隆时, Git 会为远程仓库中的每个分支在本地仓库中创建一个远程分支（比如 o/master）。然后再创建一个跟踪远程仓库中活动分支的本地分支，默认情况下这个本地分支会被命名为 master。

当然，我们自己也可以指定这个属性，有两种方法设置这个属性
第一种就是通过远程分支检出一个新的分支，执行:

    git checkout -b totallyNotMaster o/master
就可以创建一个名为```totallyNotMaster ```的分支，它跟踪远程分支```o/master```。

另一种设置远程追踪分支的方法就是使用：git branch -u 命令，执行：

    git branch -u o/master foo

这样 foo 就会跟踪 o/master 了。如果当前就在 foo 分支上, 还可以省略 foo。

###  6.git pull操作
git pull 实际上就是 fetch + merge 的缩写, git pull 唯一关注的是提交最终合并到哪里（也就是为 git fetch 所提供的 destination 参数）

以下命令在 Git 中是等效的:

    git pull origin foo 
相当于：

    git fetch origin foo; git merge o/foo

还有...

    git pull origin bar~1:bugFix 
相当于：

    git fetch origin bar~1:bugFix; git merge bugFix


##  三、Git主要命令
###  1.git commit操作
Git 希望提交记录尽可能地轻量，因此在你每次进行提交时，它并不会盲目地复制整个目录。条件允许的情况下，它会将当前版本与仓库中的上一个版本进行对比，并把**所有的差异打包到一起作为一个提交记录**。

###  2.git branch操作
Git 的分支也非常轻量。它们只是简单地指向某个提交纪录 —— 仅此而已。

**早建分支！多用分支！**

这是因为即使创建再多分的支也不会造成储存或内存上的开销，并且按逻辑分解工作到不同的分支要比维护那些特别臃肿的分支简单多了。

在将分支和提交记录结合起来后，我们会看到两者如何协作。现在只要记住使用分支其实就相当于在说：“**我想基于这个提交以及它所有的父提交进行新的工作。**”

###  3.分支合并操作
第一种

    git merge

```git merge```在 Git 中合并两个分支时会产生一个特殊的提交记录，它有两个父节点。翻译成自然语言相当于：“我要把这两个父节点本身及它们所有的祖先都包含进来。”

第二种

    git rebase

```git rebase```实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。

Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。

<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">



