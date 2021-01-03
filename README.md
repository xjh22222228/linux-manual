<p align="center">
  <img src="media/poster.jpg" width="210" />
  <br />
  <b>Linux 常用命令参考手册</b>
  <p align="center">日常运维的最佳拍档 x 111</p>
  <p align="center">一张网页概括，没有晦涩难度的例子！</p>
  <p align="center">
    <a href="https://github.com/xjh22222228/linux-manual/stargazers">
      <img src="https://img.shields.io/github/stars/xjh22222228/linux-manual" alt="Stars"/>
    </a>
    <img alt="Linux" src="https://img.shields.io/static/v1.svg?label=&message=Linux&style=flat-square&color=efdf07">
    <img src="https://img.shields.io/github/license/xjh22222228/linux-manual" />
  </p>
</p>

<br /><br />

---








# 目录
- [文件](#文件)
  - [查看文件内容](#查看文件内容)
    - [head](#head)
    - [tail](#tail)
    - [cat](#cat)
    - [nl](#nl)
    - [more](#more)
  - [创建](#创建)
    - [touch](#touch)
    - [mkdir](#mkdir)
    - [mktemp](#mktemp)
  - [删除](#删除)
    - [rm](#rm)
    - [rmdir](#rmdir)
  - [查找文件](#查找文件)
    - [find](#find)
    - [locate](#locate)
  - [ls](#ls)
  - [pwd](#pwd)
  - [wc](#wc)
  - [chattr](#chattr)
  - [paste](#paste)
  - [stat](#stat)
  - [grep](#grep)
  - [sed](#sed)
  - [cd](#cd)
  - [cp](#cp)
  - [mv](#mv)
  - [open](#open)
  - [source](#source)
  - [tree](#tree)
  - [ln](#ln)
  - [file](#file)
  - [sort](#sort)
  - [uniq](#uniq)
  - [split](#split)
  - [vim](#vim)
- [系统管理](#系统管理)
  - [nohup](#nohup)
  - [watch](#watch)
  - [ping](#ping)
  - [which](#which)
  - [shutdown](#shutdown)
  - [reboot](#reboot)
  - [uptime](#uptime)
  - [crontab](#crontab)
  - [uname](#uname)
  - [ifconfig](#ifconfig)
  - [whereis](#whereis)
  - [chmod](#chmod)
  - [lsof](#lsof)
  - [chown](#chown)
  - [systemctl](#systemctl)
  - [service](#service)
  - [free](#free)
  - [type](#type)
  - [alias](#alias)
  - [time](#time)
  - [jobs](#jobs)
  - [&](#&)
- [系统进程](#系统进程)
  - [ps](#ps)
  - [pstree](#pstree)
  - [top](#top)
  - [netstat](#netstat)
  - [kill](#kill)
  - [killall](#killall)
- [用户管理](#用户管理)
  - [useradd](#useradd)
  - [userdel](#userdel)
  - [passwd](#passwd)
  - [chpasswd](#chpasswd)
  - [chsh](#chsh)
  - [chfn](#chfn)
  - [usermod](#usermod)
  - [users](#users)
  - [who](#who)
  - [w](#w)
  - [last](#last)
  - [su](#su)
  - [whoami](#whoami)
- [环境变量](#环境变量)
  - [printenv](#printenv)
  - [set](#set)
  - [export](#export)
  - [unset](#unset)
- [压缩、解压](#压缩、解压)
  - [zip](#zip)
  - [unzip](#unzip)
  - [gzip](#gzip)
  - [bzip2](#bzip2)
  - [tar](#tar)
- [加解密](#加解密)
  - [md5sum](#md5sum)
  - [base64](#base64)
- [网络](#网络)
  - [ssh](#ssh)
  - [wget](#wget)
  - [curl](#curl)
  - [scp](#scp)
  - [rsync](#rsync)
- [磁盘](#磁盘)
  - [df](#df)
  - [du](#du)
- [包管理](#包管理)
  - [yum](#yum)
  - [apt-get](#apt-get)
- [其他](#其他)
  - [目录名称含义](#目录名称含义)
  - [重定向输入和输出](#重定向输入和输出)
  - [管道](#管道)
  - [echo](#echo)
  - [date](#date)
  - [man](#man)
  - [sleep](#sleep)
  - [history](#history)
  - [xargs](#xargs)
  - [cal](#cal)
  - [expr](#expr)
  - [bc](#bc)
  - [timeout](#timeout)
  - [exit](#exit)
  - [basename](#basename)
  - [read](#read)
  - [tee](#tee)
  - [clear](#clear)
  






# 文件

## 查看文件内容

## head
显示文件的头部内容，默认前10行

```bash
# 显示前10行内容
head README.md

# 或者显示多个文件
head README.md package.json

# -n 指定显示行数
head -n 100 README.md
```




## tail
显示文件的末尾部分，默认后10行

```bash
# 默认显示末尾10行
tail README.md

# -n 指定显示末尾20行
tail -n 20 README.md

# 实时监听README.md文件变化
tail -f README.md

# 根据文件名进行追踪, 如果删除后创建相同的文件名会继续追踪
tail -F README.md

# 显示文件的最后10个字符
tail -c README.md
```






## cat
查看文件全部内容，如果文件太大，头部部分内容会被截掉。

```bash
# 查看 README.md 文件全部内容
cat README.md
cat README.md README2.md  # 多个文件

# -n 每一行显示行号包括空行
cat -n README.md

# -b 只在有内容的行显示行号
cat -b README.md
```





## nl
同样用来打印内容，与 `cat` 命令不同的是打印内容会自动加上行号, 但 `nl` 命令可以对行号做特别的定制，主要针对行号有特别高要求的用户。

- -b: 指定行号指定的方式
  - -b a 无论是否为空行一样列出行号 (等价 `cat -n`)
  - -b t 空行不列出行号, 默认 (等价 `cat -b`)
- -n: 列出行号表示的方法
  - -n ln 行号在萤幕的最左方显示
  - -n rn 行号在自己栏位的最右方显示，且不加 0
  - -n rz 行号在自己栏位的最右方显示，且加 0

```bash
# 打印内容并输出行号, 除了空号
# 等价于 cat -b README.md
nl README.md

# 空行同样打印行号
nl -b a README.md
```










## more
分页查看文件内容, 每次查看一屏, 每屏能显示多少内容取决于终端大小。

与 `cat` 命令不同，`cat` 只能一次显示全部内容，如果内容太多部分会被截取掉。

快捷键：
- `空格` 或 `PageUp` - 查看下一屏内容
- `B` 或 `PageDown` - 查看上一屏内容
- `回车` - 查看下一行内容
- `Q` - 退出

```bash
more README.md

# 从第10行开始显示
more +10 README.md

# 显示查看进度
more -d README.md # --More--(17%)[Press space to continue, 'q' to quit.]
```




## 创建


## touch
创建一个空文件, 如果文件存在只会修改文件的创建时间

```bash
touch README.md
```


## mkdir
创建目录

```bash
# 在当前目录下创建 temp 目录
mkdir temp

# 创建多层目录
mkdir -p temp/temp2/temp3

# 基于权限创建
mkdir -m 777 temp
```



## mktemp
创建临时目录或文件，Linux使用 `/tmp` 目录来存放不需要永久保留的文件，大多数Linux发行版配置了系统在启动时自动删除 `/tmp` 目录的所有文件。

默认情况下， `mktemp` 会在本地目录中创建一个文件，只要指定一个文件名模板就行，模板可以包含任意文本文件名，在文件名末尾加上 **6** 个X就行了。

```bash
# 创建本地临时文件, 会在当前目录下创建一个叫 log.XXXXXX, XXXXXX是一个随机字符码，保证文件名在目录中是唯一的。
mktemp log.XXXXXX  # log.J3awfb

# -t, 在 /tmp 目录创建临时文件, 返回绝对路径地址
mktemp -t log.XXXXXX # /tmp/log.G5g9dX

# -d 创建临时目录, 这样就能用该目录进行任何需要的操作了，比如创建其他的临时文件
mktemp -d dir.XXXXXX
```






## 删除


# rm
删除指定目录或文件

注: 使用此命令需要非常小心, 一但删除无法恢复
```bash
# 删除当前目录下的 1.txt 文件
rm 1.txt

# -i 删除前询问是否真的要删除，因为一旦删除无法恢复
rm -i README.md

# 这条命令比较常用, 强制删除目录或文件
# -r 如果是目录递归删除, -f 强制删除 不发出任何警告
rm -rf ./src
```




## rmdir
删除指定空目录

注：`rmdir` 实际上用得并不多，因为不是很灵活，基本上使用 `rm` 代替
```bash
# 删除当前 temp 空目录, 如果不是空目录会发出警告
rmdir temp

# -p 参数可以删除多层空目录, 发现temp3是空目录删除掉，然后接着往父级找如果还是空目录继续删除...
rmdir -p temp1/temp2/temp3

# -i 删除前询问确认删除
rmdir -i temp
```






## 查找文件


## find
指定某个目录下查找文件

```bash
# 在当前目录递归搜索文件名为 README.md 文件
$ find . -name README.md
# 也可以指定多个目录，比如 src1 src2目录
$ find src1 src2 -name README.md

# 通过通配符进行查找, 必须用引号括着, 这里查找所有后缀为 .md 文件
$ find . -name "*.md"
$ find . -iname "*.md"  # 忽略文件大小写

# 排除文件，只要加 ! , 排除掉所有 .md 后缀的文件
$ find . ! -name "*.md"

# 根据类型进行过滤搜索
# f 普通文件, l 符号连接
# d 目录, c 字符设备
# b 块设备, s 套接字, p Fifo
$ find . -type f

# 限定目录递归深度
$ find . -maxdepth 3  # 最大为3个目录
$ find . -mindepth 3  # 最小为3个目录

# 查找文件大小大于 25k 文件 
$ find /root -size +25k

# 查找10天前文件 -mtime 修改时间、 -ctime 创建时间、 -atime 访问时间
$ find /root -mtime +10
```





## locate
搜索文件，与 `find` 命令很像，但更快，因为是从数据库里查找, 通常每天会进行数据更新。

```bash
# 搜索 README.md 相关文件
locate README.md

# 忽略大小写
locate -i README.md
```










## ls
显示当前目录下的文件和目录，输出的列表是按字母排序 (某些发行版可能不一样)。


| 参数    | 描述              |
| ------ |------------------ |
| -l     | 显示目录列表的详细信息     |
| -h     | 显示文件大小，需要和 -l 参数一起使用     |
| -a     | 列出所有文件，包括隐藏文件     |
| -F     | 显示文件类型     |
| -i     | 查看inode编号, 每个文件都有唯一的编号     |

```bash
# 显示当前目录列表
$ ls

# 列出指定目录下的列表
$ ls ./src

# 显示目录列表的详细信息
$ ls -l

# 显示目录列表详细信息和大小
$ ls -lh

# 列出所有文件包括隐藏文件
$ ls -a

# -F 可以显示类型，用以区分是文件还是目录
# 后缀为 ”/“ 代表是目录，”*“ 为可执行文件，没有则为文件
$ ls -F

# 过滤文件列表, * 代表0个或多个字符， ? 代表一个字符
$ ls javasc*

# -i 查看inode编号, 每一个文件或目录都有一个唯一的编号，这个数字由内核分配给文件系统中的每一个对象
$ ls -i
```





## pwd
显示当前工作目录

```bash
$ pwd
```


## wc
统计文件的行数、字数、字节数, 常见用于统计代码行数

```bash
# 统计字节数
$ wc -c README.md

# 统计行数
$ wc -l README.md

# 统计字数
$ wc -w README.md

# 统计字符数
$ wc -m README.md
```













## chattr
用于修改文件属性, 这项指令可改变存放在ext2文件系统上的文件或目录属性。

| 参数        | 描述              |
| ----------- |------------------ |
| a           | 让文件或目录仅供附加用途     |
| b           | 不更新文件或目录的最后存取时间     |
| c           | 将文件或目录压缩后存放     |
| d           | 将文件或目录排除在倾倒操作之外     |
| i           | 不得任意更动文件或目录     |
| s           | 保密性删除文件或目录     |
| S           | 即时更新文件或目录     |
| u           | 预防意外删除     |
| -R          | 递归处理，将指令目录下的所有文件及子目录一并处理     |
| -v<版本编号> | 设置文件或目录版本     |
| -V          | 显示指令执行过程     |
| +<属性>     | 开启文件或目录的该项属性     |
| -<属性>     | 关闭文件或目录的该项属性     |
| =<属性>     | 指定文件或目录的该项属性     |


```bash
# 锁定该文件, 防止文件被修改或删除
$ chattr +i README.md

# -i 解锁文件
$ chattr -i README.md

# 可以使用 lsattr 查看赋予的属性
$ lsattr README.md
----i--------e-- README.md
```








## paste
合并N个文件的列，相当于追加文件内容。

```bash
# 1.txt 和 2.txt 合并输出
$ paste 1.txt 2.txt

# 1.txt 2.txt 合并后保存为 3.txt
$ paste 1.txt 2.txt > 3.txt
```





## stat
用于显示文件或目录的状态信息

```bash
stat logs
# File: ‘logs/’
# Size: 16384           Blocks: 32         IO Block: 4096   directory
# Device: fd01h/64769d    Inode: 669067      Links: 5
# Access: (0755/drwxr-xr-x)  Uid: (    0/    root)   Gid: (    0/    root)
# Access: 2020-07-07 17:24:23.941816812 +0800
# Modify: 2020-07-12 11:46:55.567707577 +0800
# Change: 2020-07-12 11:46:55.567707577 +0800
# Birth: -
```





## grep
强大的文本搜索工具，被称为Linux命令三剑客之老三。

命令用法：grep [option] pattern file...

| 参数    | 描述              |
| ------ |------------------ |
| -i     | 忽略大小写     |
| -n     | 打印匹配行号     |
| -c     | 打印匹配成功的次数     |
| --color | 高亮打印匹配文本     |
| -o     | 只打印匹配到的内容     |
| -v     | 反向查找     |
| -E     | 正则查找     |
| -w     | 匹配单词     |
| -r     | 从目录下递归搜索     |

```bash
# 从 README.md 文件中搜索 linux 关键字
grep "linux" README.md
grep "linux" README.md README2.md # 多个文件搜索

# 高亮打印匹配文本
grep "linux" README.md --color

# -o 只打印匹配到的内容
grep -o "linux" README.md --color

# -n 打印匹配的行号
grep -n "linux" README.md

# -c 只打印成功匹配的次数
grep -c "linux" README.md

# -r 递归搜索目录文件
grep -r "linux" ./src

# 使用 glob 风格表达式搜索
# 等价于 grep -E "[0-9]" README.md
egrep "[0-9]"
```





## sed
sed(stream editor) 是一种流编辑器，它一次处理一行内容。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”，接着用 sed 命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。

`sed` 主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。

命令格式：`sed options script file...`


**选项**
| 参数         | 描述              |
| ----------- |------------------ |
| -e script   | 在处理输入时，将script中指定的命令添加到已有的命令中     |
| -f file     | 在处理输入时，将file中指定的命令添加到已有的命令中     |
| -n          | 不产生命令输入，使用print命令来完成输出     |
| -i          | 直接编辑文件并保存     |
| -i.bak      | 备份文件并编辑保存     |


来个简单的例子：
```bash
$ cat test.txt
i like apple
i like apple
i like apple
i like apple

$ sed 's/apple/banana/' test.txt
i like banana
i like banana
i like banana
i like banana
```

运行上面例子结果就会马上显示出来。

命令解释: sed 's/要替换的内容/替换后的内容/' 文件名, s(substitute)替代


#### 执行多个命令
如果需要执行多个命令时只要指定 `-e` 选项就可以了:
```bash
# 多个命令使用分号分隔
$ sed 's/apple/banana/; s/i/I/' test.txt
I like banana
I like banana
I like banana
I like banana
```


#### 从文件中读取编辑器命令
当需要执行大量命令时使用 `-e` 选项就有点鸡助了, 这时候可以将命令存储在一个单独文件中，然后在执行时指定 `-f` 选项读取。

```bash
$ cat cmd.sed
s/apple/banana/
s/i/I/

# 执行
$ sed -f cmd.sed test.txt
```



#### 直接编辑
在执行 `sed` 时指定 `-i` 选项可以直接编辑文件并保存。

```bash
$ sed -i 's/apple/banana/' test.txt
```

如果是在 `mac` 上运行会报错：

那是因为 mac 强制要求备份
```bash
sed: 1: "test.txt": undefined label '.txt'
```

```bash
# 指定备份后缀 .bak 执行后将生成一个 test.txt.bak 文件
sed -i '.bak' 's/apple/banana/' test.txt
# 或者指定 -i.bak 选项, 会默认保存备份文件, 不需要指定备份后缀
sed -i.bak 's/apple/banana/' test.txt
```



#### 替换标记
s命令最后有一个可选的 flags `s/pattern/replacement/flags`, 有4种可用的标记：
- 数字(大于0)，表明新文本将替换第几处模式匹配的地方
- g, 全局匹配, 表示会替换所有匹配的文本
- p, 表明原先的内容要先打印出来
- w file, 将替换的结果写入到文件中

**1、数字**:

表明只替换每行中第二次出现的匹配模式。
```bash
$ cat test.txt
i like apple apple
i like apple apple

$ sed 's/apple/banana/2' test.txt
i like banana apple
i like banana apple
```

**2、g**:

在替换时如果不带 `g` 标记只会替换每行中第一次出现匹配模式。
```bash
$ cat test.txt
i like apple apple
i like apple apple

# 没有带 g 标记
$ sed 's/apple/banana/' test.txt
i like banana apple
i like banana apple

# 带 g 标记
$ sed 's/apple/banana/g' test.txt
i like banana banana
i like banana banana
```

**3、p**:
p 替换标记会打印与替换命令中指定的模式匹配的行，通常会与 `-n` 选项一起使用才能发挥更好的作用。

-n 选项会禁止 `sed` 编辑器输出，但p替换标记会输出修改过的行，将两者配合使用的效果就是只输出被替换命令修改过的行。

```bash
$ cat test.txt
i like apple apple
i like apple apple

$ sed -n 's/apple/banana/p' test.txt
i like banana apple
i like banana apple
```


**4、w**:

将命令替换的结果写入到文件中
```bash
$ sed 's/apple/banana/w 1.txt' test.txt
```


#### 替换反斜杠
当遇到需要匹配反斜杠 `/` 时就很麻烦了，需要做转义：

```bash
# 将 /bin/sh 替换为 /bin/bash
$ sed 's/\/bin\/sh/\/bin\/bash/' test.txt
```

如果有大量这种反斜杠可读性就变差了， 还好 sed 提供了感叹号作为字符串分隔符：

```bash
# 感叹号是一个占位符, 代表的是 / 反斜杠
$ sed 's!/bin/sh!/bin/bash!' test.txt
```



#### 使用地址
默认情况下 `sed` 命令会作用于所有行，如果只想作用于某些行，比如第10行到100行，则必须用行寻址（Line Addressing）。

有两种形式的行寻址：
- 以数字形式表示行区间
- 以文本模式来过滤出行

**1、数字方式的行寻址：**

以数字 2 表示只处理第2行
```bash
$ sed '2s/apple/banana/' test.txt
i like apple
i like banana
i like apple
i like apple
i like apple
```

以区间来表示，第2行到3行
```bash
$ sed '2,3s/apple/banana/' test.txt
i like apple
i like banana
i like banana
i like apple
i like apple
```


从某行开始的所有行, 用美元符号 `$` 表示末尾行
```bash
$ sed '2,$s/apple/banana/' test.txt
i like apple
i like banana
i like banana
i like banana
i like banana
```


**2、以文本模式过滤出行**

如果只想作用于 `B` 开头的行, 则可以使用文本模式过滤, 支持正则表达式。

格式: `/pattern/command`
```bash
$ cat README.md
A: Good
B: Bad
A: Good
B: Bad
```

将所有 B 开头的 Bad 改成 Good!
```bash
$ sed '/B/s/Bad/Good!/' test.txt
A: Good
B: Good!
A: Good
B: Good!
```

**3、多个命令使用相同行寻址**

要将多个命令使用相同行寻址可以使用分隔符：
```bash
$ sed '1,$s/Bad/Luck/;1,$s/Good/Nice!/' test.txt
A: Nice!
B: Luck
A: Nice!
B: Luck
```

这只是其中一种办法，更好的办法是使用花括号将多条命令组合在一起：

```bash
$ sed '1,${
s/Bad/Luck/
s/Good/Nice!/
}' test.txt

A: Nice!
B: Luck
A: Nice!
B: Luck
```
只在多个命令使用相同寻址才使用花括号。



#### 删除行
删除行使用 `d` 命令来执行, 使用该命令需要小心，如果不指定行寻址会删除所有行。


只指定 `d` 命令将删除所有行
```bash
$ sed 'd' test.txt
```

上面已经介绍过通过数字方式寻址行，同样适用删除：
```bash
# 只删除第一行
$ sed '1d' test.txt
```

或者通过数字区间
```bash
# 删除1-3行
$ sed '1,3d' test.txt

# 删除第一行以及后面所有行
sed '1,$d' test.txt
```














## cd
进入指定目录

```bash
# 进入当前 src 目录
cd src

# 回到上一次目录
cd -

# 返回上一级目录
cd ..
cd ../../..   # 返回多级

# 进入家目录
cd ~
cd  # 或者不带任何参数

# 将上一个命令的参数作为cd参数使用
cd !$

# 模糊匹配目录，有时目录名很长一个一个敲效率就很低
# * 代表0个或多个字符， ? 代表一个字符
cd javasc*
```







## cp
拷贝文件或目录

```bash
# 将当前 README.md 文件拷贝到上一层
cp ./README.md ../README.md

# -a 将原文件属性一同拷贝, 修改时间、创建时间等
cp -a ./README.md ../README.md

# -r 用于递归拷贝目录
cp -r home ../home

# -i 如果目标文件存在会询问用户是否需要覆盖
cp -i README.md README.md
```










## mv
`mv` 有2个用途：
- 将文件或目录移动到另一个位置
- 将文件或目录重命名

注：实际上 `mv` 是用来移动文件或目录，只不过有类似重命名的功能而已。

```bash
# 将 README.md 重命名为 README-2.md, 如果 README-2.md 存在会直接覆盖。
mv README.md README-2.md

# 将 README.md 移动到上一层目录
mv README.md ../README.md

# -i 交互式操作，如果目标文件存在则进行询问是否覆盖
mv -i README.md ../README.md
```








## open
`open` 命令可在 `linux` / `mac` 具有可视化界面下进行文本编辑、打开应用程序等功能。

```bash
# 在mac下用Finder打开当前目录
open .

# 用默认应用程序打开文件
open README.md

# 用默认编辑器打开文件
open -e README.md

# 如果是一个URL用默认浏览器打开页面
open https://github.com/xjh22222228/linux-manual.git

# 指定某个应用程序打开某个文件, 如果不指定文件默认直接打开程序
open -a /Applications/Google\ Chrome.app README.md
```




## source
在当前Shell环境中从指定文件读取和执行命令， 通常用于重新执行环境。

它有个别名 `.` 点操作符号。

```bash
# 等价 . ~/.bash_profile
source ~/.bash_profile
```

实际上大部分开发者都没搞懂 `source` 命令。 可以把它理解为编程语言中的 `import`, `java/python/js` 都有这个，就是用来导入文件。


下面演示 source 用于 shell 脚本中

util.sh
```bash
#!/bin/bash
getName() {
  echo "Linux"
}
```

main.sh
```bash
#!/bin/bash
# 加载文件
source ./util.sh

# 这样就可以调用 util 文件中的函数了
echo $(getName)
```








## tree
生成目录树结构, 通常用于描述项目结构。

```bash
# 递归当前目录下所有文件并生成目录树
tree
# .
# ├── LICENSE
# ├── README.md
# └── media
#     └── poster.jpg


# -I 忽略某些目录
tree -I "node_modules|.git|.svn"

# 只显示目录
tree -d

# 指定要递归的目录层级
tree -L 3
```





## ln
将某一个文件在另外一个位置建立并产生同步的链接。 当不同的2个目录需要同时引用某一个文件时此命令就派上用场了。

软链接也可以叫符号链接：
- 软链接，以路径的形式存在。类似于Windows操作系统中的快捷方式
- 软链接可以 跨文件系统 ，硬链接不可以
- 软链接可以对一个不存在的文件名进行链接
- 软链接可以对目录进行链接

硬链接：
- 硬链接，以文件副本的形式存在。但不占用实际空间, 从根本上而言就是同一个文件。
- 不允许给目录创建硬链接
- 硬链接只有在同一个文件系统中才能创建



共同点：
- 修改原文件内容创建的链接文件也会同步修改



```bash
# 默认创建硬链接
ln 1.md 2.md

# -s 创建软链接
# 删除 1.md 文件后 2.md 文件将失效
# 但修改 2.md 文件 1.md 会复原
ln -s 1.md 2.md

# -f 强制执行创建
ln -f README.md ./src/a.md
```





## file
查看文件类型, 比如文件、目录、二进制、符号链接等

```bash
# 输出 README.md: ASCII text
file README.md

# index.html: HTML document, UTF-8 Unicode text, with very long lines, with no line terminators
file index.html
```





## sort
将文本内容以行为单位进行排序。


| 参数    | 描述              |
| ------ |------------------ |
| -c     | 检查文件是否已排序，若已经排序则什么都不输出     |
| -r     | 以倒序来排序     |
| -b     | 忽略每行开头的空格     |
| -o     | 将排序结果输出到文件     |
| -u     | 排序并去重，每行都是唯一的     |
| -n     | 按照数值大小排序     |



```bash
# 排序并打印到终端
sort README.md

# 排序并去重将结果输出到 u.md 文件，可以用来替代 uniq 命令
sort -u README.md -o u.md
```








## uniq
`uniq` 命令用于检查或删除文件中重复出现的行内容。

```bash
# 将 1.txt 文件重复内容过滤后输出到 2.txt 文件
uniq 1.txt 2.txt

# -c 在左边显示每行重复次数
uniq -c 1.txt

# -d 只显示重复行内容
uniq -d 1.txt
```

`uniq` 命令有个问题，只能过滤相邻的内容，比如:
```txt
111
111
222
333
222
```

结果: 222 也重复但是不是相邻
```txt
111
222
333
222
```

解决办法是配合使用 `sort` 命令, 原理是先排序为相邻再去重(实际上只用 sort 命令就能解决)：

```bash
sort 1.txt | uniq > 2.txt
```





## split
将一个文件切割成数个文件, 对于大文件来说非常实用。


```bash
# 将 README.md 文件每10行分割成一个文件
split -10 README.md

# -b 按字节分割
split -b 100000 README.md

# 指定分割后的文件名前缀为 READ ，分割后会自动在文件名后随机加上编号
split -b 100000 README.md READ
```




## vim
vi 编辑器是Unix系统最初的编辑器，在GNU项目将vi编辑器移植到开源世界时，他们决定对其做一些改进，开发人员也就将它重命名为 `vi improved`。

`vim`(vi improved) 是 `vi` 的升级版，所以只需要知道 `vim` 即可， 是一个非强大的文本编辑器，学习成本不低，需要长期使用才能记牢每一个指令操作。

这是一份速查表，使用的时候注意区分大小写。

vim 的快捷键指令非常多，只列出一些实用性便于记忆。



**打开文件**

```bash
# 最简单的打开文件方式, 如果文件不存在会开辟一段新的缓冲区域来编辑。
vim README.md

# 打开文件并定位到最后一行
vim + README.md

# 打开文件并定位到某一行, +号后面指定行数
vim +100 README.md

# 打开多个文件
# :bn 切换下一个文件
# :bp 切换上一个文件
# :ls 列出所有已经打开的文件
# :b2 切换到第2个文件, 2是个任意数字
vim 1.txt 2.txt
```





**光标定位插入**

| 快捷键      | 描述              |
| ---------- |----------------- |
| i   | 在当前光标位置插入 |
| I   | 在当前光标行第一个字符插入 |
| a   | 在当前光标后一个字符插入 |
| A   | 光标到当前行最后一个字符插入 |
| H   | 光标到第一行第一个字符 (是以终端大小来计算，不是原文本的第一行) |
| M   | 光标到中间第一行 (是以终端大小来计算) |
| L   | 光标到最后行第一个字符 (是以终端大小来计算) |
| E   | 将光标定位到右边的空格 |
| o   | 在当前光标下一行插入 |
| O   | 在当前光标上一行插入 |
| :n  | 将光标定位到 n 行 |


**撤销**
| 快捷键      | 描述              |
| ---------- |----------------- |
| u   | 撤销上一次编辑内容 |
| U   | 撤销当前光标整行内容 |
| Ctrl + r   | 还原初始文件状态 |
| e!  | 撤销所有修改，恢复打开文件时的状态 |



**删除**
| 快捷键      | 描述              |
| ---------- |----------------- |
| dd   | 删除当前行 |
| dj   | 删除上一行 |
| dk   | 删除下一行 |
| :1,$d   | 删除所有行 |




**拷贝/粘贴**
| 快捷键      | 描述              |
| ---------- |----------------- |
| yy  | 拷贝当前行 |
| p   | 在当前光标粘贴上一次拷贝的内容 |






**搜索**

| 快捷键    | 描述              |
| -------- |----------------- |
| :/text   | 从上往下查找 text，按 `n` 向下搜索, 按 `N` 想前搜索 |
| :?text   | 从下往上查找 text，按 `n` 向下搜索, 按 `N` 想前搜索 |



**替换**

要想匹配 `/` 需要反斜杠进行转义: `\/`

| 快捷键            | 描述              |
| ---------------- |----------------- |
| :s/old/new       | 找到old第一次出现的地方并用new来替换 |
| :s/old/new/g     | 找到所有old出现的地方并用new来替换(当前屏幕) |
| :%s/old/new/g    | 替换整个文件中的所有old |
| :%s/old/new/gc   | 替换整个文件中的所有old，但在每次出现时询问是否替换 |
| :n,ms/old/new/g  | 替换行号n和m之间的所有old |





**退出**

先按 `ESC` 键然后再操作后面的快捷键。

| 快捷键     | 描述              |
| --------- |----------------- |
| :w        | 写入但不退出 |
| :w!       | 强制保存，但不退出 |
| :q!       | 退出但不保存 |
| :wq       | 保存写入内容并退出 |
| :w file   | 将当前文件内容保存到 file 文件中 |
| :qa!      | 退出所有文件并不做保存，比如打开了多个文件 |





**设置**

| 快捷键 | 描述              |
| ----- |----------------- |
| :set ignorecase    | 忽略大小写查找 |
| :set noignorecase  | 不忽略大小写查找 |
| :set hlsearch      | 高亮搜索结果 |
| :set nohlsearch    | 关闭高亮搜索显示 |
| :set hlsearch      | 高亮搜索结果 |
| :set number        | 显示行号 |
| :set nonumber      | 不显示行号 |










---
# 系统管理





## nohup
程序以挂起方式运行。

`nohup` 命令会自动将 STDOUT(标准输出)和STDERR(标准错误)的消息重定向到一个名为 `nohup.out` 文件。

```bash
# 例如运行一个 node.js 程序
nohup node main.js

# 在当前目录会出现 nohup.out 文件，里面包含了 Hello World
nohuo echo "Hello World"
```




## watch
通常用于监听1个命令的运行结果、定时执行命令

```bash
# 每5秒执行一次 tail 命令, 如果不指定-n 默认为2秒
watch -n 5 "tail README.md"

# -d 高亮显示变化内容
watch -n 5 -d "tail README.md"
```





## ping
测试目标地址是否可连接、延迟度

```bash
# 测试 github.com 连通性, 按 ctrl + C 停止 
ping github.com

# ping 5次后断开
ping -c 5 xiejiahe.com

# 每5秒ping 一次
ping -i 5 xiejiahe.com
```




## which
查找某个命令存储在哪个位置, 输出绝对路径, `which` 会在环境变量 `$PATH` 设置的目录里去查找。

注: 可以通过 `echo $PATH` 查看设置的目录。

只有内建命令才会正常打印，判断是否内建命令可以通过 [type](#type) 检查。

```bash
which top  # /usr/bin/top

# 查找pwd发现会找不到，因为 pwd 是shell内置命令
which pwd

# 打印多个命令
which ls vi
```





## shutdown
将系统关机或重启操作。

```bash
# 立即重启系统
shutdown -r now

# 关闭系统并切断电源
shutdown -h now # 立即关机, 实际上调用 init 0

# 把前一个关机或重启取消掉
shutdown -c

# 设定一个时间关机,  "&" 符号表示后台模式，让出CLI
shutdown -h 05:33 &
shutdown +5 "5分钟后关机" # 5分钟后关机，同时送出警告信息给登入用户：
```





## reboot
有点类似 `shutdown` 命令， 用于重新启动系统。

```bash
# 重启系统
reboot

# -f 强制重启
reboot -f

# 用于模拟重新启动系统，不会真实重启，数据会写入 /var/log/wtmp 
reboot -w

# 在重新启动之前关闭所有网络界面
reboot -i
```









## uptime
查看系统负载信息， 此命令非常简单，没有太多的参数。

```bash
# 21:51:53 当前时间
# up 750 days, 13:24  当前系统运行的天数，小时，分钟 （从上次开机起计算）
# 1 user 当前系统登录用户数
# load average: 0.08, 0.07, 0.06    一分钟、5分钟、15分钟平均负载, 这3个值不能大于CPU个数，如果大于了说明系统负载高，性能低。
uptime # 21:51:53 up 750 days, 13:24,  1 user,  load average: 0.08, 0.07, 0.06
```





## crontab
周期性执行任务, 通常用于定时执行作业。

`* * * * *` 分别含义：
```bash
*    *    *    *    *
┬    ┬    ┬    ┬    ┬
│    │    │    │    │
│    │    │    │    │
│    │    │    │    └───── 一周中的某一天 (0 - 7)  0或7代表是星期日
│    │    │    └────────── 月份 (1 - 12)
│    │    └─────────────── 一个月的某一天 (1 - 31)
│    └──────────────────── 小时 (0 - 23)
└───────────────────────── 分钟 (0 - 59)
```

```bash
# 列出该用户设置
crontab -l

# 编辑该用户设置
crontab -e

# 删除该用户设置
crontab -r
```

例子：
```bash
# 每天18点18分执行 echo `date` > README.md
18 18 * * * echo `date` > README.md

# 每一分钟执行
* * * * */1 echo `date` > README.md

# 每个月的第一天中午12点
00 12 1 * * 命令

# 每个月的最后一天就比较麻烦了, 需要配合 date 命令和 if 流程语句来实现
# 这里 if 语句检查明天的日期是不是01，如果是今天就是最后一天
# 每天中午12点检查今天是不是最后一天
00 12 * * * if [ `date +%d -d tomorrow` = 01 ] ; then ; 要执行的命令
```





## uname
打印系统信息

```bash
# 不带任何参数打印当前操作系统内核名称
uname # Linux , 等价于 uname -s

# 打印系统所有信息
uname -a

# -r 打印系统版本 , 如果次版本号都是偶数，说明是一个稳定版
uname -r # 3.10.0-514.26.2.el7.x86_64

# 打印网络节点主机名称
uname -n # Yin.local

# 打印处理器名称
uname -p # i386

# 打印主机的硬件架构名称
uname -m # x86_64
```





## ifconfig
配置或显示系统网卡的网络参数

```bash
# 显示所有网络参数信息
ifconfig

# 配置网卡IP地址
ifconfig eth0 192.168.1.111
```




## whereis
用来定位指令的二进制程序、源代码文件和man手册页等相关文件的路径。

注意：`whereis` 是从数据库里查找的，因此特别快，默认情况下一星期更新一次数据，所以有时会查找删除的数据或者刚建立的数据无法找到问题。
```bash
# 查找 nginx
whereis nginx # nginx: /usr/sbin/nginx /usr/lib64/nginx /etc/nginx /usr/share/nginx /usr/share/man/man8/nginx.8.gz /usr/share/man/man3/nginx.3pm.gz

# -b 指定只查找二进制
where -b nginx # nginx: /usr/sbin/nginx /usr/lib64/nginx /etc/nginx /usr/share/nginx

# -m 指定查找说明文件 man
whereis -m nginx # nginx: /usr/share/man/man8/nginx.8.gz /usr/share/man/man3/nginx.3pm.gz
```











## chmod
修改文件或目录权限

chmod [参数选项] [mode, 八进制或符号表示] files...

- `u` 符号代表当前用户。
- `g` 符号代表和当前用户在同一个组的用户，以下简称组用户。
- `o` 符号代表其他用户。
- `a` 符号代表所有用户。
- `r` 符号代表读权限以及八进制数4。
- `w` 符号代表写权限以及八进制数2。
- `x` 符号代表执行权限以及八进制数1。
- `X` 符号代表如果目标文件是可执行文件或目录，可给其设置可执行权限。
- `s` 符号代表设置权限suid和sgid，使用权限组合u+s设定文件的用户的ID位，g+s设置组用户ID位。
- `t` 符号代表只有目录或文件的所有者才可以删除目录下的文件。
- `+` 符号代表添加目标用户相应的权限。
- `-` 符号代表删除目标用户相应的权限。
- `=` 符号代表添加目标用户相应的权限，删除未提到的权限。


#### 文件权限码
| 权限      | 二进制值 |八进制值 | 描述      |
| -------- |-------- |------- |------------------ |
| ---      | 000     |   0   | 没有任何权限     |
| --x      | 001     |   1   | 只有执行权限     |
| -w-      | 010     |   2   | 只有写入权限    |
| -wx      | 011     |   3   | 有写入和执行权限     |
| r--      | 100     |   4   | 只有读取权限     |
| r-x      | 101     |   5   | 有读取和执行权限     |
| rw-      | 110     |   6   | 有读取和写入权限     |
| rwx      | 111     |   7   | 有全部权限     |





```bash
# README.md 文件设为所有用户可读取
chmod a+r README.md

# -R 递归目录下所有文件
chmod a+r src/

# 也可以用八进制符号表示
# 3个数字分别为 x,y,z 表示User、Group、及Other的权限。
# r=4, w=2, x=1
chmod 777 README.md # 等价于 chmod a=rwx README.md
```






## lsof
全名list open files, 列出当前系统已经被打开的文件。

```bash
## 打印所有打开文件的的列表
lsof

# 查看指定端口被占用情况
lsof -i:8080

# -p 列出指定进程号所打开的文件
lsof -p 6112
```









## chown
用来变更文件或目录的拥有者或所属群组


```bash
# 将 README.md 文件拥有者设为 byroot
chown byroot README.md

# 使用-R递归处理文件
chown -R byroot src/

# 改变所属群组, 拥有者设为 byroot 群组设为 byrootgroup
chown byroot:byrootgroup README.md
```






## systemctl
系统服务管理器指令, 通常用来设置某个服务器默认开机启动或关闭。

命令：`systemctl [command] [unit]`

```bash
# 立即启动服务
systemctl start nginx.service

# 立即停止服务
systemctl stop nginx.service

# 重启服务，stop 后 start
systemctl restart nginx.service

# 重新载入服务, 一般情况下重新载入新的配置
systemctl reload nginx.service

# 下次开机时默认启动服务
systemctl enable nginx.service

# 下次开机时不会启动服务
systemctl disable nginx.service

# 查看某个服务状态信息
systemctl status nginx.service

# 当前服务是否正在运行中
systemctl is-active nginx.service

# 查看服务开机有没有默认启动
systemctl is-enable nginx.service
```






## service
管理操作系统服务的命令, 是Redhat Linux兼容的发行版中用来控制系统服务的实用工具，它以启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。

```bash
# 启动 docker 服务
service docker start

# 查看 docker 状态
service docker status

# 停止 docker 服务
service docker stop

# 重新启动 docker 服务
service docker restart

# 查看所有服务状态
service --status-all
```







## free
显示内存使用情况

选项
- b 字节单位显示
- k KB单位显示
- m MB单位显示
- g GB单位显示
- s<秒> 每S秒监控内存使用情况


解释：
- total 内存总数
- used 已使用内存
- free 空闲内存
- shared 当前已废弃内存
- buff/cache 缓存内存数
- 1204660 可用内存数


```bash
free
# 输出以下, 默认以字节为单位
              total        used        free      shared  buff/cache   available
Mem:        1882192      485312      448424         704      948456     1204660
Swap:             0           0           0

# MB单位显示
free - m

# 10秒执行一次查询
free -s 10
```











## type
`type` 命令有2个作用：

- 用来查找命令的位置，类似 which 命令
- 检测某个命令是内建命令还是外部命令


普及：内建命令和外部命令的区别：内建命令不会衍生出子进程，而外部命令会衍生出一个子进程然后执行命令, 所以内建命令执行效率要高。

```bash
# cd is a shell builtin  表示这是shell内建命令
type cd

# ps is hashed (/usr/bin/ps)  表示这是一个外部命令
type ps
```








## alias
设置命令别名，用于简化较长的命令。

```bash
# 列出所有已设置的别名
alias

# 删除所有别名
unalias -a

# 设置别名
alias ll='ls -l'
```





## time
测试某条命令执行所需花费时间

```bash
# time 后面跟着要测试的命令
# 输出:  0.02s user 0.01s system 0% cpu 6.233 total
time curl https://github.com/xjh22222228/linux-manual
```



## jobs
显示当前运行在后台模式中的所有用户的进程（作业）


| 参数         | 描述              |
| ----------- |------------------ |
| -l          | 打印进程的PID和作业号以及作业命令     |
| -n          | 只列出上次shell发出的通知后改变了状态的作业     |
| -p          | 只列出作业的PID（进程ID）     |
| -r          | 只列出运行中的作业     |
| -s          | 只列出已停止的作业     |


```bash
# 先来启一个后台作业进程, & 符号表示后台运行
sleep 100 &
# 查看后台作业
jobs # 输出：[1]+  Running       sleep 3 &
```

相关命令 [&](#&)




## &
`&` 符号表示后台运行, 只要在命令后面加上 `&` 符号即可。

如果一个命令运行的时间非常长，比如处理文件、HTTP请求时就可以在后台运行，这样就可以让出shell继续执行其他命令。

```bash
# 模拟了休眠100秒并在后台运行
sleep 100 &
```

你可以通过 [jobs](#jobs) 命令来查看后台作业。











---
# 系统进程


## ps
查看当前系统进程状态。

`ps` 命令非常复杂，且参数极多，由于 `ps` 历史问题，参数风格支持了三种 `UNIX`/`BSD`/``GNU` 这里不详细的介绍，感兴趣可以自行了解。


- Unix 风格参数 - 前面加单破折线
- BSD 风格的参数 - 前面不加破折线
- GNU 风格长参数 - 前面加双破折线


#### Unix 风格参数
| 参数         | 描述              |
| ----------- |------------------ |
| -A          | 显示所有进程     |
| -N          | 显示与指定参数不符的所有进程       |
| -a          | 显示除控制进程和无终端进程外的所有进程     |
| -d          | 显示除控制进程外的所有进程     |
| -e          | 显示所有进程       |
| -C cmdlist  | 显示包含在cmdlist列表中的进程       |
| -G grplist  | 显示组ID在grplist列表中的进程       |
| -U userlist | 显示属主的用户ID在userlist列表中的进程       |
| -g grplist  | 显示会话或组ID在grplist列表中的进程       |
| -p pidlist  | 显示PID在pidlist列表中的进程       |
| -s sesslist | 显示会话ID在sesslist列表中的进程       |
| -t ttylist  | 显示终端ID在ttylist列表中的进程       |
| -u userlist | 显示有效用户ID在userlist列表中的进程       |
| -F          | 显示更多额外输出（相对-f参数而言）       |
| -O format   | 显示默认的输出列以及format列表指定的特定列       |
| -M          | 显示进程的安全信息       |
| -c          | 显示进程的额外条调度器信息       |
| -l          | 显示长列表       |
| -o format   | 仅显示由format指定的列表       |
| -y          | 不要显示进程标记（process tag, 表明进程状态的标记）       |
| -Z          | 显示安全标签（security context）信息       |
| -H          | 用层级格式来显示进程（树状，用来显示父进程）       |
| -n namelist | 定义了WCHAN列显示的值       |
| -w          | 采用宽输出模式，不限宽显示       |
| -L          | 显示进程中的线程       |
| -V          | 显示PS命令的版本号       |


```bash
# 显示所有进程信息
ps -A

# 显示指定用户进程信息
ps -u root

# 显示所有进程信息包括命令行
ps -ef  # -e 等价于 -A  , 即等价于 ps -Af

# 这是 BSD 风格参数，列出所有正在内存中的进程
ps aux

# 配合 grep 查询指定进程
ps -ef | grep nginx
```






## pstree
pstree命令以树状图的方式展现进程之间的派生关系。


#### 显示所有进程的所有详细信息
```bash
pstree -a
# 输出信息：
├─AliSecGuard
  ├─assist_daemon
  │   └─7*[{assist_daemon}]
  ├─atd -f
  ├─auditd -n
  │   └─{auditd}
  ├─crond -n
  ├─dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation
  ├─dhclient -H debug010000002015 -1 -q -lf /var/lib/dhclient/dhclient--eth0.lease -pf /var/run/dhclient-eth0.pid eth0
  ├─frps -c ./frps.ini
  │   └─2*[{frps}]
  ├─nginx
  │   └─nginx                   
  ├─ntpd -u ntp:ntp -g
  ├─polkitd --no-debug
  │   └─5*[{polkitd}]
  ├─rsyslogd -n
  │   └─2*[{rsyslogd}]
  ├─sshd -D
  │   └─sshd    
  │       └─bash
  │           └─pstree -a
  ├─systemd-journal
  ├─systemd-logind
  ├─systemd-udevd
  └─tuned -Es /usr/sbin/tuned -l -P
      └─4*[{tuned}]
```


#### 显示当前所有进程的进程号和进程id
```bash
pstree -p
# 输出信息：
systemd(1)─┬─AliSecGuard(9347)─┬─{AliSecGuard}(9348)
           ├─agetty(474)
           ├─agetty(475)
           ├─assist_daemon(1356)─┬─{assist_daemon}(1370)
           │                     ├─{assist_daemon}(1371)
           │                     ├─{assist_daemon}(1372)
           │                     ├─{assist_daemon}(1870)
           │                     ├─{assist_daemon}(1871)
           │                     ├─{assist_daemon}(1872)
           │                     └─{assist_daemon}(1873)
           ├─atd(459)
           ├─auditd(368)───{auditd}(375)
           ├─crond(455)
           ├─dbus-daemon(440)
           ├─dhclient(680)
           ├─nginx(9605)───nginx(9608)
           ├─ntpd(766)
           ├─polkitd(448)─┬─{polkitd}(489)
           │              ├─{polkitd}(490)
           │              ├─{polkitd}(491)
           │              ├─{polkitd}(492)
           │              └─{polkitd}(493)
           ├─rsyslogd(740)─┬─{rsyslogd}(769)
           │               └─{rsyslogd}(770)
           ├─sshd(4007)───sshd(21896)───bash(21898)───pstree(21921)
           ├─systemd-journal(326)
           ├─systemd-logind(445)
           ├─systemd-udevd(350)
           └─tuned(743)─┬─{tuned}(1004)
                        ├─{tuned}(1006)
                        ├─{tuned}(1009)
                        └─{tuned}(1011)
```









## top
实时查看系统执行中的程序, top 命令跟 `ps` 命令相似，但它是实时的。

默认情况下 `top` 命令启动时会按照 `%CPU` 值对进程排序。

| 名称       | 描述              |
| --------- |------------------ |
|  PID      |  进程的ID    |
|  USER     | 进程的优先级     |
|  PR       |  进程的优先级    |
|  NI       |  进程的谦让度值    |
|  VIRT     | 进程占用的虚拟内存总量     |
|  RES      |  进程占用的物理内存总量    |
|  SHR      |  进程和其他进程共享的内存总量    |
|  S        |  进程的状态（D=可中断的休眠状态，R在运行状态，S休眠状态，T跟踪状态或停止状态，Z=僵化状态）    |
|  %CPU     |  进程使用的CPU时间比例    |
|  %MEM     | 进程使用的内存占可用内存的比例     |
|  TIME+    |  自进程启动到目前为止的CPU时间总量    |
|  COMMAND  |  进程所对应的命令行名称，也就是启动的程序名    |


```bash
# 实时监听进程变化
#  PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND                               
#    1 root      20   0  125124   3612   2428 S  0.0  0.2   0:04.88 systemd
top

# 显示2条
top -n 2

# 显示指定的进程信息
top -pid <pid>

# 查看进程所有的线程
top -H -p <pid>
```






## netstat
查看网络系统状态信息

**参数说明：**


| 参数        | 描述              |
| ---------- |------------------- |
| a或--all                 | 显示所有连线中的Socket                |
| A<网络类型>或--<网络类型>   | 列出该网络类型连线中的相关地址          |
| c或--continuous          | 持续列出网络状态                      |
| C或--cache               | 显示路由器配置的快取信息                |
| e或--extend              | 显示网络其他相关信息                   |
| F或--fib                 | 显示FIB                              |
| g或--groups              | 显示多重广播功能群组组员名单             |
| h或--help                | 在线帮助                              |
| i或--interfaces          | 显示网络界面信息表单                    |
| l或--listening           | 显示监控中的服务器的Socket              |
| M或--masquerade          | 显示伪装的网络连线                      |
| n或--numeric             | 直接使用IP地址，而不通过域名服务器        |
| N或--netlink或--symbolic | 显示网络硬件外围设备的符号连接名称       |
| o或--timers              | 显示计时器                            |
| p或--programs            | 显示正在使用Socket的程序识别码和程序名称  |
| r或--route               |  显示Routing Table                   |
| s或--statistics          | 显示网络工作信息统计表                  |
| t或--tcp                 | 显示TCP传输协议的连线状况               |
| u或--udp                 | 显示UDP传输协议的连线状况               |
| v或--verbose             | 显示指令执行过程                       |
| V或--version             | 显示版本信息                          |
| w或--raw                 | 显示RAW传输协议的连线状况               |
| x或--unix                | 此参数的效果和指定"-A unix"参数相同     |
| -ip或--inet              | 此参数的效果和指定"-A inet"参数相同     |


```bash
# 列出所有占用端口
netstat -ntlp

# 显示所有网络状况
netstat -a

# 显示所有tcp网络状况
netstat -at

# 显示所有udp网络状况
netstat -au

# 配合grep命令查看某个端口被占用情况
netstat -ap | grep 8080
```






## kill
结束程序，kill 命令只支持进程id杀死，不支持进程名称。


#### 进程信号
| 信号    | 名称              | 描述              |
| ------ |------------------ | ----------- |
| 1      | HUP     | 挂起     |
| 2      | INT     | 中断     |
| 3      | QUIT    | 结束运行     |
| 9      | KILL    | 无条件终止     |
| 11     | SEGV    | 段错误     |
| 15     | TERM    | 尽可能终止     |
| 17     | STOP    | 无条件停止运行，但不终止     |
| 18     | TSTP    | 停止或暂停，但继续在后台运行     |
| 19     | CONT    | 在STOP或TSTP之后恢复执行     |


注：程序进程 id 可通过 `top` 等命令查看。

```bash
# 杀死 pid 为88 进程，不带参数默认等价 kill -15
kill 88

# 无条件终止进程，以下是等价，可以用进程名称信号
kill -KILL 88
kill -9 88

# 显示信号
kill -l

# 杀死指定用户的所有进程
kill -u nginx
```





## killall
杀死进程，可以杀死多个进程，比 `kill` 要强大, 支持通过进程名称杀死, 还支持通配符。

```bash
# 杀死以tcp进程名称开头的所有进程
killall tcp*
```











---
# 用户管理




## useradd
给系统添加新用户

注：
- 在创建新用户时如果不指定具体的值，就会使用系统那些默认值。
- 在创建新用户时如果未指定密码，需要使用 `passwd` 命令进行更改。



#### useradd 命令行参数
| 参数               | 描述              |
| ----------------- |------------------ |
| -c comment        | 给新用户添加备注     |
| -d home_dir       | 为主目录指定一个名字（如果不想用登录名作为主目录名的话）     |
| -e expire_date    | 用YYYY-MM-DD格式指定一个账户过期的日期     |
| -f inactive_days  | 指定这个账户密码过期后多少天这个账户被禁用；0表示密码已过期就立即禁用，1表示禁用这个功能     |
| -g initial_group  | 指定用户登录组的GID或组名     |
| -G group          | 指定用户除登录组之外所属的一个或多个附加组     |
| -k                | 必须和-m一起使用，将/etc/skel目录的内容复制到用户的HOME目录     |
| -m                | 创建用户的HOME目录     |
| -M                | 不创建用户的HOME目录（当默认设置里要求创建时才使用这个选项）     |
| -n                | 创建一个与用户登录名同名的新租     |
| -r                | 创建系统账户     |
| -p passwd         | 为用户账户指定默认密码 (需要使用openssl把明文进行加密后设置，否则无效)     |
| -s shell          | 指定默认的登录shell     |
| -u uid            | 为账户指定唯一的UID     |




#### 更改默认值参数
| 参数                | 描述              |
| ------------------ |------------------ |
| -b default_home    | 更改默认的创建用户HOME目录的位置     |
| -e expiration_date | 更改默认的心账户的过期日期     |
| -f inactive        | 更改默认的心用户从密码过期到账户被禁用的天数     |
| -g group           | 更改默认的组名称或GID     |
| -s shell           | 更改默认的登录shell     |





```bash
# -D, 查看默认值
useradd -D
# 输出：
GROUP=100                # 新用户会被添加到GID为100的公共组
HOME=/home               # 新用户的HOME目录将位于 /home/loginname
INACTIVE=-1              # 新用户账户密码在过期后不会被禁用
EXPIRE=                  # 新用户账户未被设置过期日期
SHELL=/bin/bash          # 新用户账户将bash shell作为默认shell
SKEL=/etc/skel           # 系统会将/etc/skel目录下的内容复制到用户的HOME目录下
CREATE_MAIL_SPOOL=yes    # 系统为该用户账户在mail目录下创建一个用于接收邮件的文件


# 创建一个 test 用户, -m 创建 /home/test 目录
useradd -m test

# 创建一个用户并设置密码
useradd -m test # 不指定-p，因为需要加密那样很麻烦
passwd test # 通过passwd修改指定用户密码
```

添加新用户后可以执行 `cat /etc/passwd` 查看用户列表。






## userdel
删除用户


```bash
# 删除用户，默认会从 /etc/passwd 文件中删除用户信息，而不会删除系统中属于该账户的任何文件
userdel 用户名

# -r 用来删除用户目录， 之前创建的 /home/用户名 就不存在了, 使用-r参数需要小心，要检查是否有重要文件。
userdel -r 用户名
```






## passwd
修改用户密码, 只有 `root` 用户才有权限修改别人的密码。

使用 `passwd` 一般用于修改单个用户密码，如果想批量修改那么需要 `chpasswd` 命令。

```bash
# 如果不指定用户名，修改的是自己当前用户密码， 回车后输入新密码
passwd

# 修改指定用户密码，比如test用户
passwd test
```




## chpasswd
类似 `passwd` 命令也是用于修改用户密码，但它支持批量修改用户。

`chpasswd` 命令从标准输入自动读取登录名和密码对（由冒号分割）列表，给密码加密。



```bash
# 利用输入重定向从文本中读取
chpasswd < users.txt

# 从标准输入读取
echo 'test:fff33300..a' | chpasswd
```

user.txt 内容：
```txt
test:helloworld0123..
test1:fff33300..
admin:youyouyou00..11
```







## chsh
`chsh` 命令用于修改默认用户登录 shell。

修改后重新启动Shell即可生效（exit/logout），或重新启动系统。

```bash
# 必须使用完整路径，不能使用shell名
chsh -s /bin/zsh
```

查看当前 `Shell`
```bash
echo $SHELL # /bin/zsh
```

列出当前所有已安装的Shell
```bash
$ cat /etc/shells

# /bin/bash
# /bin/csh
# /bin/dash
# /bin/ksh
# /bin/sh
# /bin/tcsh
# /bin/zsh
```




## chfn
主要用于更改账号的个人信息。这些信息保存在 `/etc/passwd` 下。

默认情况下如果不提供参数将进入问答式逐一设置。

| 参数   | 描述              |
| ----- |------------------ |
| -f    | 真实姓名     |
| -h    | 家中电话     |
| -o    | 办公地址     |
| -p    | 办公室电话   |


```bash
# 修改 root 账号信息
chfn root
# Changing finger information for root.
# Name [xiejiahe]: 
# Office [ZhuHai]: 
# Office Phone [13xxxxxxxxx]: 
# Home Phone [13xxxxxxxxx]: 
```

#### 修改真实姓名
```bash
chfn -f root
```






## usermod
`usermod` 命令是用于账号修改工具中最强大的一个，它能用来修改 `/etc/passwd` 文件中的大部分字段。

注意：确保需要修改的用户已下线。

| 参数   | 描述              |
| ----- |------------------ |
| -l    | 修改用户账号的登录名     |
| -p    | 修改账号的密码     |
| -L    | 锁定账号，使用户无法登录     |
| -U    | 解除锁定，使用户能登录     |
| -l    | 修改用户账号的登录名     |
| -d    | 修改用户登录时的目录     |
| -c    | 修改用户备注信息     |
| -s    | 修改用户登录时默认shell     |
| -u    | 修改用户的UID     |


```bash
# 将 root 登录名修改为 root123
usermod -l root root123

# 锁定 test 账号
usermod -L test

# 当用户登录时目录为 /etc 下
usermod -d /etc root

# 修改UID
usermod -u 888 root
```










## users
显示当前登录系统的所有用户的用户列表

```bash
users
# xiejiahe
# root
# admin
```






## who
显示当前所有用户登录信息

```bash
# 显示当前登录系统的用户
who
xiejiahe console  Jun 15 21:38
xiejiahe ttys001  Jun 15 21:44
xiejiahe ttys002  Jun 15 21:44
xiejiahe ttys003  Jun 15 21:44
xiejiahe ttys004  Jun 15 21:44
xiejiahe ttys005  Jun 15 21:44

# 显示登录账号名和总人数
who -q

# 显示上次系统启动时间
who -b  # reboot   ~        Jun 15 21:38
```





## w
查看当前登入系统的用户信息, 有哪些用户正在登陆, 以及他们正在执行的程序。

此命令与 `who` 相似，默认情况下比 `who` 命令输出内容更详细。

```bash
w
# 输出
 22:44:33 up 748 days, 14:16,  1 user,  load average: 0.04, 0.03, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    183.11.111.11    22:40    1.00s  0.03s  0.00s w
```




## last
显示用户最近登录信息

```bash
last # root     pts/0        183.58.247.64    Sun Jan  5 13:57 - 14:28  (00:30)

# 指定显示条目数
last -n 1
```




## su
切换到其他用户。

```bash
# 切换到 admin 身份
su admin

# -c 执行完指令后切换回原身份
su -c ls admin

# 可以通过以下查找当前系统用户列表
cat /etc/passwd
```






## whoami
显示自身的用户名称, 此命令等价于 `id -un`

```bash
% whoami # xiejiahe
```









---
# 环境变量

## printenv
列出全局环境变量, 有个 `env` 命令很像，但 `printenv` 可以打印变量的值。

普及：所有系统环境变量都是大写字母，用于区分普通用户的环境变量。

```bash
# 列出所有全局环境变量
printenv

# 也可以显示指定全局环境变量的值, 等价于 echo $HOME
printenv HOME # /root
```






## set
列出所有全局变量、局部变量和普通用户定义的变量，按照字母顺序对结果进行排序。

注意：所有系统全局变量都是大写，用户定义的环境变量全部采用小写，这是标准规范。

```bash
set
# OPTIND=1
# OSTYPE=linux-gnu
# PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
# PIPESTATUS=([0]="0")
# ...
```





## export
导出环境变量, 可以把一个局部变量导出成全局环境变量

注意：export 只有在当前Shell有效，退出后将失效
```bash
# 先声明一个局部环境变量
my_var='Hello'
# 然后将其导出全局环境变量
export my_var
```




## unset
删除环境变量

注意：unset 只在当前shell删除环境变量，假如环境变量设置在 `~/.bash_profile` 等文件中用户重新启动依然生效。如果是在子进程删除全局环境变量只在子进程有效，不会影响父进程。

```bash
# 删除 HOME 环境变量，前面不需要带 $ 符号
unset HOME
```











---
# 压缩、解压

## zip
归档数据，将目录或文件归档为 `.zip` 格式， zip 不是Linux中的标准归档工具。

```bash
# 归档文件
zip README.zip README.md

# 归档目录需要 -r 递归处理
zip -r temp.zip temp

# -S 包含系统隐藏文件
zip -r -S temp.zip temp

# 指定归档效率 1-9
zip -r -9 temp.zip temp 

# -j 消除文件夹, 这样解压后只有 README.md 文件而不是带有 src 文件夹
zip -j temp.zip src/README.md
```





## unzip
提取 `zip` 归档的文件或目录

```bash
# 将 demo.zip 提取到当前目录下
unzip demo.zip

# 列表 demo.zip 文件内容，但不提取
unzip -v demo.zip

# -d 指定将文件提取到 src 目录下
unzip demo.zip -d src
```





## gzip
GNU 压缩/解压工具，用 Lempel-Ziv编码，格式为 `.gz`, 压缩后原文件将被删除

注意：gzip 不能用于压缩整个目录, 只能用于压缩文件, 如果需要压缩整个目录可以考虑使用 [zip](#zip) 命令。

```bash
# 压缩 README.md 文件, 压缩完成后 README.md 文件会被删除
gzip README.md # README.md.gz

# 递归压缩目录下的所有文件, 每个文件都会被压缩为 .gz 然后删除
gzip -r ./logs

# 加 -v 显示压缩执行过程
gzip -rv ./logs

# 压缩 .tar 后缀文件
gzip -r src.tar  # 压缩后为 src.tar.gz

# -d 解压gzip压缩后的文件，解压后 .gz 文件会被删除
gzip -d README.md.gz
gzip -dr ./logs # 或者递归解压目录下所有 .gz
```


## bzip2
采用 Burrows-Wheeler块排序文本压缩算法和霍夫曼编码，将文件压缩成 `.bz2` 格式，也可用于解压 `.bz2`

```bash
# 压缩 README.md 文件
bzip2 README.md     # 不保留源文件 README.md.bz2
bzip2 -k README.md  # -k 保留源文件


# 解压
bzip2 -d README.md.bz2  # 源文件将被删除
bzip2 -dk README.md.bz2  # -k 保留源文件
bzip -dt README.md.bz2 # -t --test 测试解压, 实际不解压，模拟整个解压过程
```




## tar
归档数据，是Linux中标准归档工具。


| 参数  | 描述              |
| ---- |------------------ |
| -A   | 将一个已有tar归档文件追加到另一个已有tar归档文件     |
| -c   | 创建一个新的tar归档文件     |
| -d   | 检查归档文件和文件系统的不同之处     |
| -r   | 追加文件到已有tar归档文件结尾     |
| -t   | 列出已有tar归档文件的内容     |
| -u   | 将比tar归档文件中已有的同名文件新的文件追加到该tar归档文件中     |
| -x   | 从已有的tar归档文件中提取文件     |
| -f   | 输出结果到文件或设备file     |

```bash
# -c 创建一个归档文件
tar -cvf demo.tar src/

# -x 提取归档文件内容
tar -xvf demo.tar
tar -xvf demo.tar.gz # tar命令是可以提取 gzip 压缩后的文件
```









---
# 加解密


## md5sum
计算和校验文件报文摘要

```bash
# 计算文件md5
mmd5sum README.md # d41d8cd98f00b204e9800998ecf8427e  README.md

# 校验文件, 查看文件是否被篡改过
md5sum README.md > README.md5 # 计算文件md5并保存在 README.md5 , 保存的文件名和后缀可以随意命名
md5sum -c README.md5 # -c 从指定的文件读取md5并校验, 会从当前目录寻找 README.md
```





## base64
base64 编码/解码文件或标准输入输出

```bash
# 编码字符串
printf "hello world"|base64 # aGVsbG8gd29ybGQ=

# 解码字符串
printf aGVsbG8gd29ybGQ=|base64 -d # hello world

# 编码文件, 将结果保存在 decode.txt
base64 README.md > decode.txt

# 从标准输入中读取已经进行base64编码的内容进行解码
base64 -d decode.txt
```









---
# 网络


## ssh
远程连接服务器工具

命令：`ssh [-p port]  [user@]hostname [command]`

```bash
# 最简单的连接方式
ssh root@192.168.0.0

# 指定端口号连接
ssh -p 23 root@192.168.0.0

# 执行远程服务器命令, 比如创建目录
ssh root@192.168.0.0 "mkdir -p /home/test"

# 在远程服务器执行本地脚本
ssh root@192.168.0.0 < shell.sh
```









## wget
用于从网络下载文件到本地

```bash
# 下载某个文件
wget https://www.xiejiahe.com/robots.txt

# 指定下载后文件名
wget -O ro.txt https://www.xiejiahe.com/robots.txt

# 断开续传，一般用于大文件，防止重新下载
wget -c https://www.xiejiahe.com/robots.txt

# 使用后台下载, 对于大文件非常有用
wget -b https://www.xiejiahe.com/robots.txt
tail -f wget-log   # 查看后台下载进度
```





## curl
`curl` 是一个非常强大的网络传输工具, 利用URL规则在命令行下工作的文件传输工具。


| 参数                 | 描述              |
| ------------------- |------------------- |
| -s, --silent        | 不输出错误和进度信息, 只显示正常结果 |
| -o, --output        | 将结果输出到文件中 |
| -O, --remote-name   | 下载文件到本地，并将URL最后部分当做文件名 |
| -L                  | HTTP请求跟随服务器重定向 |
| -I, --head          | 显示HTTP响应报文 |
| -H                  | 设置请求头 |
| -X                  | 指定HTTP请求方法，大写字母 |
| -d                  | HTTP请求实体内容 |
| --cookie            | 指定发送cookie |
| -v                  | 打印整个传输过程 |
| -F, --form          | 上传文件 |
| -u                  | 指定用户名密码授权 |
| --progress          | 显示进度条 |
| -f, --fail          | 连接失败时不显示http错误 |
| --retry             | 请求重试 |


注意：参数不分前后

#### 不传递任何参数只打印HTTP响应内容
```bash
curl https://github.com/xjh22222228/linux-manual
```

#### -s 不输出错误和进度信息, 只显示正常结果
```bash
curl -s https://github.com/xjh22222228/linux-manual
```


#### -o 指定文件名下载到本地，等价于 wget
```bash
# 将响应内容保存到 1.txt 文件
curl https://github.com/xjh22222228/linux-manual -o 1.txt
```


#### -O 下载文件到本地, 并将URL最后部分当做文件名
```bash
# 文件名为 linux-manual
curl https://github.com/xjh22222228/linux-manual -O
```

#### --progress 显示进度条
```bash
curl https://github.com/xjh22222228/linux-manual --progress
```


#### -L HTTP请求跟随服务器重定向
```bash
curl -L https://github.com/xjh22222228/linux-manual
```


#### -I 或 --head 显示HTTP响应报文, 不打印响应内容
```bash
curl -I https://github.com/xjh22222228/linux-manual
```


#### -H 设置请求头
```bash
curl -H 'Content-Type: application/json' -H 'Content-Type: application/json' https://github.com/xjh22222228/linux-manual
```

#### -X 指明HTTP请求方法
```bash
curl -X POST https://github.com/xjh22222228/linux-manual
```

#### -d 要发送的实体内容
```bash
curl -X POST -d '{"key":"value"}' https://github.com/xjh22222228/linux-manual
```

#### --cookie HTTP请求时携带的cookie信息
```bash
curl --cookie "age=18;name=xjh" https://github.com/xjh22222228/linux-manual
```


#### -v 打印整个传输过程
```bash
curl -v https://github.com/xjh22222228/linux-manual
```


#### -F 上传文件，默认以POST方法请求
```bash
# file 是字段名, =@ 必须存在
curl https://example.com/upload -F "file=@/home/demo.png"
```

#### -u 请求授权
```bash
curl -u root:password ftp://demo/README.md
```


#### --retry 请求重试
请求失败时设置重试次数

```bash
curl http://example.com --retry 3
```









## scp
加密的方式在本地主机和远程主机之间复制文件

注：需要有读写权限，否则会无法操作。

```bash
# 从远程主机下载文件到本地
scp root@192.168.0.100:/root/file.zip /home/file.zip

# 从远程主机下载目录到本地，需要 -r 递归
scp -r root@192.168.0.100:/root/dir  /home/dir

# 从本地主机上传文件到远程主机
scp /home/file.zip root@192.168.0.100:/root/file.zip

# # 从本地主机上传目录到远程主机，需要 -r 递归
scp -r /home/dir root@192.168.0.100:/root/dir
```






## rsync
`rsync` 命令是一个远程数据同步工具，可通过LAN/WAN快速同步多台主机间的文件。rsync使用所谓的“rsync算法”来使本地和远程两个主机之间的文件达到同步，这个算法只传送两个文件的不同部分，而不是每次都整份传送，因此速度相当快。

`rsync` 非常强大，可以用来替代 `cp` / `mv` / `scp` 等命令。



| 参数         | 描述              |
| ----------- |------------------- |
| -r          | 递归拷贝子目录 |
| -a          | 递归拷贝子目录，但同步元数据信息，比如修改时间，创建时间，权限等 |
| -n          | 模拟执行结果 |
| -v          | 显示执行过程 |
| -z          | 压缩传输 |
| --exclude   | 排除文件 |
| --include   | 包含文件 |
| --progress  | 显示传输进度信息 |
| --link-dest | 指定增量备份的基准目录 |


source 有没有斜杠影响同步结果：
- 有斜杠 - dst目录下只有 source 文件
- 无斜杠 - dst目录包含source目录

```bash
# 无斜杠, dst 目录下只有 source目录
rsync -r source dst

# 有斜杠, dst 目录下包含 source 所有文件，没有source目录
rsync -r source/ dst
```


#### 本地同步文件
```bash
# -r 表示递归拷贝子目录，将 source 拷贝到 dst 目录下
rsync -r source dst # dst 目录下就有 source

# 可以将多个source 拷贝到指定目录下
rsync -r source1 source2 dst

# -a替代-r, 同步元数据信息，比如修改时间，创建时间，权限等
rsync -a source dst
```


#### 远程同步文件
```bash
# 本地同步到远程, 本地 docs 目录同步到远程 home/docs 下
rsync -rv ~/docs root@192.168.0.0:/home/docs

# 远程同步到本地, 将远程 /home/docs 目录同步到本地 ~/docs 下
rsync -rv root@192.168.0.0:/home/docs ~/docs
```


#### 增量备份
`rsync` 最大的特点就是支持增量备份，所谓增量备份指的是只同步有变动的文件。

`rsync` 默认就是增量备份的，但可以添加 `--link-dest` 参数指定基准目录进行比较，找出有变动的文件。

```bash
# --link-dest 后面跟着基准目录，然后会跟 source 进行一一比较，找出变动的文件进行同步
rsync -a --link-dest compare source dest
```




#### 其他用法
```bash
# 排除文件
rsync -r --exclude=".git" source dst
# 大括号指定多个排除模式
rsync -r --exclude={".git", ".svn"} source dst


# 包含文件
rsync -r --include="src/" source dst
# 大括号指定多个包含模式
rsync -r --include={"src/", "tests/"} source dst
```














---
# 磁盘




## df
查看已挂载的磁盘使用情况。


#### 描述
| 名称        | 描述              |
| ---------- |------------------ |
| Filesystem | 设备的设备位置文件     |
| Size       | 能容纳多少个1024字节大小的块       |
| Used       | 已用了多少个1024字节大小的块       |
| Avail      | 还有多少个1024字节大小的块可用       |
| Use%       | 已用空间所占的比例       |
| Mounted on | 设备挂载到了哪个挂载点上       |



```bash
# 显示每个有数据的已挂载文件系统
# Filesystem     1K-blocks    Used Available Use% Mounted on
# /dev/vda1       41151808 1853208  37185168   5% /
df

# 格式化大小，以kb以上进行显示
df -h

# 查看全部文件系统信息
df -a
```




## du
显示文件或目录所占用的磁盘空间

```bash
# 默认显示当前目录的所有文件、目录、和子目录的磁盘使用情况
du

# 查看指定文件所占用磁盘空间
du README.md

# 查看指定目录所占用磁盘空间, 输出的最后一行是累计总大小
du src

# -h 以K，M，G为单位，提高信息的可读性。
du -h src  # 20K    src

# -s 只显示总大小，列出最后累计的值
du -s src

# 显示当前所有已列出文件总大小
du -c
```











---
# 包管理




## yum
基于RPM的软件包管理器, 特点安装快捷，命令简洁好记。

```bash
# 安装
yum install 包名

# 指定 -y 安装时自动全部 yes
yum -y install 包名

# 查找包
yum search 包名

# 显示所有已安装的包
yum list

# 升级包
yum update 包名

# 只删除软件包而保留配置文件和数据文件
yum remove 包名

# 删除软件和它的所有配置文件
yum erase 包名

# 清除缓存
yum clean all

# 显示安装包信息
yum info 包名

# 检查可更新的包程序
yum check-update
```



## apt-get
`apt-get命令` 是Debian Linux发行版中的APT软件包管理工具。所有基于Debian的发行都使用这个包管理系统。

```bash
# 安装一个docker软件
apt-get install docker

# 卸载软件，保留配置文件
apt-get remove docker

# 卸载软件并删除配置文件
apt-get –purge remove docker

# 更新所有已安装的软件包
apt-get upgrade

# 删除软件备份，主要用来释放空间
apt-get clean
```






---
# 其他



## 目录名称含义

| 目录名        | 描述              |
| ---------- |------------------- |
| /      | 虚拟目录的根目录，通常不会在这里存储文件 |
| /bin   | 二进制目录，存放许多用户级的GNU工具 |
| /boot  | 启动目录，存放启动文件 |
| /dev   | 设备目录，Linux在这里创建设备节点 |
| /etc   | 系统配置文件目录 |
| /home  | 主目录，Linux在这里创建用户目录 |
| /lib   | 库目录，存放系统和应用程序的库文件 |
| /media | 媒体目录，可移动媒体设备的常用挂载点 |
| /mnt   | 挂载目录，另一个可移动媒体设备的常用挂载点 |
| /opt   | 可选目录，常用于存放第三方软件包和数据文件 |
| /proc  | 进程目录，存放现有硬件及当期进程的相关信息 |
| /root  | ROOT用户的主目录 |
| /sbin  | 系统二进制目录，存放许多GNU管理员级工具 |
| /run   | 运行目录，存放系统运作时的运行时数据 |
| /srv   | 服务目录，存放本地服务的相关文件 |
| /sys   | 系统目录，存放系统硬件信息的相关文件 |
| /tmp   | 临时目录，可以在该目录中创建和删除临时工作文件 |
| /usr   | 用户二进制目录，大量用户级的GNU工具和数据文件都存储在这里 |
| /var   | 可变目录，用以存放经常变化的文件，比如日志文件 |







## 重定向输入和输出

#### 输出重定向

将命令输出的内容发送到一个文件中叫做 `输出重定向` 。 使用 `>` 大于号。


下面展示了几个例子
```bash
# 例子一：
echo "Hello World" > log.txt

# 例子二：
ps -ef > ps.txt

# 例子三：
history > a.txt
```

有时不想覆盖文件而是追加内容，比如日志，可以使用 `>>` 2个大于号。

```bash
echo "H" >> log.txt
```



#### 输入重定向
和输出重定向正好相反，将文件的内容定向到命令。

```bash
# 统计input.txt文本行数
wc -l < input.txt # 等价于 wc -l input.txt
```

还有一种叫内联重定向，比较少见，但也挺有用。 使用2个 `<<` 小于号。然后跟着一个开头标记和结尾标记。

```bash
# 统计行数，输出2
wc -l << EOF
第一行
第二行
EOF
```

开头标记必须和结尾标记一致，标记名称可以是任何字符串。

下面这个也是可以的。
```bash
# 输出2
wc -l << Hello
第一行
第二行
Hello
```





## 管道
将一个命令的输出作为另一个命令的输入称为管道。 管道用 `|` 符号表示。


```bash
# 将 ls 输出内容作为 wc 输入
ls | wc

# 执行一个脚本，这没有什么意义，只是一个例子
echo "./bash.sh" | bash
```






## echo
输出字符串或者变量

注: 一般情况下字符串不必加双引号, 如果包含转义字符就必须要加

```bash
# 在终端输出 Hello World
echo "Hello World"
echo Hello World    # 也可以不加双引号
echo "Hello\nWorld" # 必须加双引号, 否则无法转义

# 打印系统环境变量，如果变量不存在输出为空
echo $PATH

# > 输出重定向，将内容输出到文件中
echo Hello World > 1.txt

# -n 不换行, 默认情况下echo 是占一整行
echo -n Hello; echo World

# -e 解析字符, 比如让字体输出颜色
echo -e "\033[1;32m绿色\033[0m"
echo -e "\n换行\n" # 解析 \n 作为换行
```






## date
显示或设置系统时间日期


| 格式化符号   | 描述              |
| ---------- |------------------- |
| %%     | 百分号 |
| %a     | 当地缩写的工作日名称（例如，Sun） |
| %A     | 当地完整的工作日名称（例如，Sunday） |
| %b     | 当地缩写的月份名称（例如，Jan） |
| %B     | 当地完整的月份名称（例如，January） |
| %c     | 当地的日期和时间（例如，Thu Mar  3 23:05:25 2005） |
| %C     | 世纪，和 `%Y` 类似，但是省略后两位（例如，20） |
| %d     | 一月中的一天（例如，01） |
| %D     | 日期，等价于 `%m/%d/%y` |
| %e     | 一月中的一天，格式使用空格填充，等价于 `%_d` |
| %F     | 完整的日期；等价于 `%+4Y-%m-%d` |
| %g     | ISO标准计数周的年份的最后两位数字 |
| %G     | ISO标准计数周的年份，通常只对 `%V` 有用 |
| %h     | 等价于 `%b` |
| %H     | 小时，范围（00..23）24小时制 |
| %I     | 小时，范围（00..12）12小时制 |
| %j     | 一年中的一天，范围（001..366） |
| %k     | 小时，使用空格填充，范围（0..23），等价于 `%_H` |
| %l     | 小时，使用空格填充，范围（1..12），等价于 `%_I` |
| %m     | 月，范围（01..12） |
| %M     | 分钟，范围（00..59） |
| %n     | 换行符 |
| %N     | 纳秒，范围（000000000..000000000） |
| %p     | 用于表示当地的AM或PM，如果未知则为空白 |
| %P     | 类似于 `%p` ，但用小写表示 |
| %q     | 季度，范围（1..4） |
| %r     | 当地以12小时表示的时钟时间（例如，11:11:04 PM） |
| %R     | 24小时每分钟；等价于 `%H:%M` |
| %s     | 自协调世界时1970年01月01日00时00分以来的秒数 |
| %S     | 秒数，范围（00..60） |
| %t     | 水平制表符 |
| %T     | 时间；等价于 `%H:%M:%S` |
| %u     | 一周中的一天（1..7），1代表星期一 |
| %U     | 一年中的第几周，周日作为一周的起始（00..53） |
| %V     | ISO标准计数周，该方法将周一作为一周的起始（01..53） |
| %w     | 一周中的一天（0..6），0代表星期天 |
| %W     | 一年中的第几周，周一作为一周的起始（00..53） |
| %x     | 当地的日期表示（例如，12/31/99） |
| %X     | 当地的时间表示（例如，23:13:48） |
| %y     | 年份后两位数字，范围（00..99） |
| %Y     | 年份 |
| %z     | +hhmm格式的数值化时区格式（例如，-0400） |
| %:z    | +hh:mm格式的数值化时区格式（例如，-04:00） |
| %::z   | +hh:mm:ss格式的数值化时区格式（例如，-04:00:00）  |
| %:::z  | 数值化时区格式，相比上一个格式增加':'以显示必要的精度（例如，-04，+05:30） |  |
| %Z     | 时区缩写（如EDT） |
| -      | (连字符) 不要填充相应的字段。 |
| _      | (下划线) 使用空格填充相应的字段。 |
| 0      | (数字0) 使用数字0填充相应的字段。 |
| +      | 用数字0填充，未来年份大于4位数字则在前面加上'+'号。 |
| ^      | 允许的情况下使用大写。 |
| #      | 允许的情况下将默认的大写转换为小写，默认的小写转换为大写。 |


```bash
# 显示当前时间
date

# 格式化当前时间
date +"%Y-%m-%d %H:%M.%S" # 2020-07-01 00:00.00

# 设置系统时间
date -s  # 设置当前时间, 须root
date -s "2020-07-01 00:00:00" # 设置指定时间
```







## man
查看指令帮助手册

**man 信息说明**

| 名称            | 描述              |
| -------------- |------------------ |
| NAME           | 显示命令名和一段简短的描述     |
| SYNOPSIS       | 命令的语法     |
| CONFI GURATION | 命令配置信息     |
| DESCRIPTION    | 命令的一般性描述    |
| OPTIONS        | 命令选项描述    |
| EXIT STATUS    | 命令的退出状态指示     |
| RETURN VALUE   | 命令的返回值    |
| ERRORS         | 命令的错误消息    |
| ENVIRONMENT    | 描述所使用的环境变量    |
| FILES          | 命令用到的文件    |
| VERSIONS       | 命令的版本信息     |
| CONFORMING TO  | 命令所遵从的标准    |
| NOTES          | 其他有帮助的资料    |
| BUGS           | 提供提交BUG的途径    |
| EXAMPLE        | 展示命令的用法    |
| AUTHORS        | 命令开发人员的信息     |
| COPYRIGHT      | 命令源代码的版权状况     |
| SEE ALSO       | 与该命令类型的其他命令     |



```bash
# 查看 ls 指令帮助手册
man ls

# 可以通过数字来阅读某一部分内容, 比如阅读第一部分
man 1 ls

# -a 在所有手册中查找
man -a ls

# -k, 搜索关键字, 如果忘记了完整的命令可以通过关键字搜索出来，比如 nginx
man -k ngi
```






## sleep
将目前动作延迟一段时间, 通常用于脚本当中

时间参数, 这是可选的，默认s：
- s 秒
- m 分钟
- h 小时
- d 天


```bash
# 5秒后输出 Hello
sleep 5s; echo Hello
```

下面是一段 Shell 脚本， 延迟10秒后再去请求
```bash
#!/bin/bash

sleep 10s

curl https://www.xiejiahe.com/
```






## history
列出当前系统使用过的命令，通常保存在 `~/.bash_history` 文件中，注意的是只有在Shell退出时才写入到文件。

如果是在 `mac` 下运行会有差异。

```bash
# 列出当前使用过的命令
history

# 指定要显示的条数, mac 下不支持
history 50

# 清除历史命令
history -c # 清空历史命令
history -d 编号 # 清除指定编号

# -a 强制写入到 ~/.bash_history 文件中而不用等shell退出才写入
history -a
```

执行历史命令, 在 `mac` 下运行需要回车确认。
```bash
# 指定编号, 例如运行 1001 编号的命令
$ !1001

# 执行历史最后一条命令
$ !!
```





## xargs
给命令传递参数的一个过滤器，也是组合多个命令的一个工具, `将左侧的标准输出放进右侧标准输入`。

此命令可以将多次操作简便为一次操作。

```bash
# 统计代码
find -name "*.js" | xargs wc -l # 等价于 wc -l a.js b.js c.js ...

# 批量下载文件
cat download.txt | xargs wget
```







## cal
显示当前日历

```bash
cal
# 输出
     June 2020        
Su Mo Tu We Th Fr Sa  
    1  2  3  4  5  6  
 7  8  9 10 11 12 13  
14 15 16 17 18 19 20  
21 22 23 24 25 26 27  
28 29 30

# 显示临近3个月, -3 是固定不能更改数字
cal -3

# 打印今天是今年的第几天
cal -j
# 输出：今天日期会高亮显示
       October 2020          
 Su  Mo  Tu  We  Th  Fr  Sa  
                275 276 277  
278 279 280 281 282 283 284  
285 286 287 288 289 290 291  
292 293 294 295 296 297 298  
299 300 301 302 303 304 305

# 打印今年1月-12月份日历
cal -y
```








## expr
执行数学运算，expr 命令比较鸡助，通常在 shell 脚本当中看到。但在shell脚本也不建议用。

expr 后面每个表达式都要有一个空格，否则是不合法。

注：expr 只支持整数运算，这是一个限制。

```bash
# 3
expr 1 + 2
expr 1+2 # 这样是不行的

# 在浮点数计算时会丢失小数， 这里等于 2
expr 5 / 2
```




## bc
bash计算器，用来执行数学运算， 与 `expr` 不同，因为 `expr` 命令不支持浮点数运算，所以可以用 `bc` 命令替代。

bash计算器实际上是一种编程语言，它允许在命令行中输入浮点表达式，然后解释并计算该表达式。最后返回结果。

`bc` 大多数情况下是在 shell 脚本中使用。


```bash
# 敲 bc 然后回车进入交互式， 输入 quit 退出
bc

scale=2  # 保留几位小数，默认是0
5 / 2
# 输出 2.50
```






## timeout
在指定时长范围内执行命令，并在规定时间结束后停止进程。

意思是在规定时间内必须完成，否则停止进程。



```bash
# 模拟超过3秒, 因为sleep阻塞5秒所以在3秒内无法完成，则停止进程
timeout 3 sleep 5

# 比如打包, 1分钟内要打包完成，否则停止进程
timeout 60 npm run build
```





## exit
退出当前登录Shell, 或使用快捷键 `Ctrl + D`。

等价命令 `logout`

```bash
exit
```









## basename
打印目录或者文件的基本名称。

```bash
# 输出：index.html
basename /www/index.html

# 输出：www
basename /www/
```








## read
`read` 命令从标准输入（键盘）或另一个文件描述符中接收输入。 通常用在Shell脚本, 在收到输入后，read命令会将数据存放进一个变量。

```bash
# 最简单用法, data 是自定义变量名，用户输入内容并回车后结束
read data # echo $data  会打印用户输入的内容

# -p 指定提示符
read -p 确认要删除吗？ data

# -t 指定超时（秒）
read -t 5 -p 确认要删除吗？ data

# —s 隐藏用户输入，比如密码，实际上是将文本颜色设置成背景颜色一样
read -s -p "请输入您的密码：" data
```







## tee
tee命令相当于管道的一个T型接头，它将从 `STDIN标准输入` 过来的数据同时发往两处，一处是 `STDOUT` ，另一处是tee命令指定的文件名。

tee 命令通常用于 shell 脚本当中。

```bash
# date内容打印到屏幕上并且重定向输出到 date.txt 文件中
date | tee date.txt

# -a 以追加方式，默认情况下会覆盖输出文件内容
date | tee -a date.txt
```

`tee` 命令只是一个语法糖，如果不用 `tee` 可以这样做：

```bash
# 1、将date结果保存到 var 变量中
var=$(date)
# 2、将结果打印到屏幕上 STDOUT
echo $var
# 3、将结果重定向到文件
echo $var > date.txt
```




## clear
用于清除当前终端所有信息，本质上只是向后翻了一页，往上滚动还能看到之前的操作信息

注：笔者用得比较多的是 `command + K` 可以完全清除终端所有操作信息。
```bash
clear
```








---

## 致谢
部分内容从《Linux命令行与Shell脚本编程大全》和 互联网 进行整理出来， 如有错误，欢迎指正，谢谢！






[⬆  回顶部](#)
