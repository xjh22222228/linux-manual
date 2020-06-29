# linux-manual

<center>
  <img src="media/poster.jpg" width="210" />
</center>


Linux 常用命令入门手册。

截止目前，含有 `43+` 命令。

注：这里只列出常用命令, 基本上能满足日常工作所需, 如果想要更系统的可能需要翻阅官方手册。



---

# 目录
- 文件管理
  - [head](#head) | [tail](#tail) | [ls](#ls) | [pwd](#pwd) | [wc](#wc) | [find](#find) | [mkdir](#mkdir)
  - [touch](#touch) | [cd](#cd) | [rm](#rm) | [rmdir](#rmdir) | [cp](#cp) | [cat](#cat) | [mv](#mv) | [locate](#locate) | [open](#open)
- 系统管理
  - [top](#top) | [whoami](#whoami) | [nohup](#nohup) | [watch](#watch) | [ping](#ping) | [which](#which) | [last](#last) | [shutdown](#shutdown) | [reboot](#reboot) | [ps](#ps)
  - [uname](#uname) | [ifconfig](#ifconfig) | [who](#who) | [whereis](#whereis) | [kill](#kill) | [chmod](#chmod) | [lsof](#lsof)
- 系统设置
  - [alias](#alias) | [time](#time) | [clear](#clear)
- 压缩、解压
  - [zip](#zip) | [unzip](#unzip)
- 网络
  - [wget](#wget)
- 磁盘
  - [df](#df)
- 鸡助命令
  - [cal](#cal)
- 其他
  - [echo](#echo)


## head
显示某个文件的前十行
```bash
# 查看 README.md 前10行
head README.md
# 或者指定多个文件
head README.md package.json
# 指定行数, 覆盖默认的10行
head -n 100 README.md
```

## tail
显示指定文件的末尾部分
```bash
# 默认为显示末尾10行
tail README.md

# 显示末尾20行
tail -n 20 README.md

# 实时监听README.md文件变化
tail -f README.md

# 根据文件名进行追踪, 如果删除后创建相同的文件名会继续追踪
tail -F README.md

# 显示文件的最后10个字符
tail -c README.md
```

## top
实时查看系统执行中的程序
```bash
# 实时监听进程变化
top

# 显示2条
top -n 2

# 显示指定的进程信息
top -pid 620
```


## ls
显示目录列表
```bash
# 只显示目录列表
ls

# 显示目录列表的详细信息
ls -l

# 显示指定目录
ls ./src

# 显示目录列表详细信息和大小
ls -lh

# 列出所有文件包括隐藏
ls -a
```


## pwd
显示当前工作目录
```bash
# 没有太多有用的参数，用法很简单
pwd
```


## wc
统计文件的行数、字数、字节数, 常见用于统计代码行数
```bash
# 统计字节数
wc -c README.md

# 统计行数
wc -l README.md

# 统计字数
wc -w README.md

# 统计字符数
wc -m README.md
```

## whoami
显示自身的用户名称, 此命令等价于 `id -un`
```bash
xiejiahe@192 golang % whoami
xiejiahe  # 输出
```



## alias
用于简化较长的命令
```bash
# 列出所有已设置的别名
alias

# 删除所有别名
unalias -a

# 设置别名
alias ll='ls -l'
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
wget -c https://www.xiejiahe.com/robots.txt
tail -f wget-log   # 查看后台下载进度
```


## df
显示磁盘信息
```bash
# 显示系统磁盘信息
df

# 格式化大小，以kb以上进行显示
df -h

# 查看全部文件系统信息
df -a
```

## find
指定某个目录下查找文件
```bash
# 在当前目录递归搜索文件名为 README.md 文件
find . -name README.md

# 通过通配符进行查找, 必须用引号括着, 这里查找所有后缀为 .md 文件
find . -name "*.md"
find . -iname "*.md"  # 忽略文件大小写

# 排除文件，只要加 ! , 排除掉所有 .md 后缀的文件
find . ! -name "*.md"

# 根据类型进行过滤搜索
# f 普通文件, l 符号连接
# d 目录, c 字符设备
# b 块设备, s 套接字, p Fifo
find . -type f

# 限定目录递归深度
find . -maxdepth 3  # 最大为3个目录
find . -mindepth 3  # 最小为3个目录

# 可以利用find命令进行代码统计，如下
# 统计所有后缀为 .js 文件，忽略掉 node_modules test dist 相关文件
find . -path "*.js" ! -path "*node_modules*" ! -path "*test*" ! -path "*dist*" | xargs wc -l

# 查找文件大小大于 25k 文件 
find /root -size +25k

# 查找10天前文件 -mtime 修改时间、 -ctime 创建时间、 -atime 访问时间
find /root -mtime +10
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

## touch
创建新的文件
```bash
# 创建一个空文件, 如果文件存在只会修改文件的创建时间
touch README.md
```


## ssh
远程连接服务器工具
```bash
# 简单的连接, 省略了端口号,默认为22
ssh root@192.168.0.0

# 指定端口号连接
ssh -p 23 root@192.168.0.0
```




## nohup
程序以挂起方式运行, 不会影响终端交互

因为程序会以后台的方式运行，所以终端不会输出, 默认情况下会在当前目录生成一个叫 `nohup.out` 文件，里面包含了终端内容。
```bash
# 例如运行一个 node.js 程序
nohup node main.js

# 在当前目录会出现 nohup.out 文件，里面包含了 Hello World
nohuo echo "Hello World"
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
```


## echo
输出字符串或者变量

注: 一般情况下字符串不必加双引号, 如果包含转义字符就必须要加
```bash
# 在终端输出 Hello World
echo "Hello World"
echo Hello World    # 也可以不加双引号
echo "Hello\nWorld" # 必须加双引号, 否则无法转义

# 输出变量, 前面加 $ 符号即可, 如果变量不存在输出为空
echo $say

# 也可以将内容输出到指定文件
echo Hello World > 1.txt
```


## time
测试某条命令执行所需花费时间
```bash
# time 后面跟着要测试的命令
# 输出:  0.02s user 0.01s system 0% cpu 6.233 total
time curl https://github.com/xjh22222228/linux-manual
```


## clear
用于清除当前终端所有信息，本质上只是向后翻了一页，往上滚动还能看到之前的操作信息

注：笔者用得比较多的是 `command + K` 可以完全清除终端所有操作信息。
```bash
clear
```



# rm
删除指定目录或文件

注: 使用此命令需要非常小心, 一但删除无法恢复
```bash
# 删除当前 1.txt 文件
rm 1.txt

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

## cp
拷贝文件或目录

```bash
# 将当前 README.md 文件拷贝到上一层
cp ./README.md ../README.md

# -a 将原文件属性一同拷贝
cp -a ./README.md ../README.md

# -r 拷贝目录
cp -r home ../home

# -i 如果目标文件存在会询问用户是否需要覆盖
cp -i README.md README.md
```



## which
查找某个命令存储在哪个位置, 输出绝对路径, `which` 会在环境变量 `$PATH` 设置的目录里去查找。

注: 可以通过 `echo $PATH` 查看设置的目录. 

```bash
which top  # /usr/bin/top

# 查找pwd发现会找不到，因为 pwd 是bash的内置命令
which pwd
```


## cat
查看指定文件内容

```bash
# 查看 README.md 文件所有内容
cat README.md
cat README.md README2.md  # 或者一次性显示多个文件

# -n 指定显示行号
cat -n README.md
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

# 显示临近3个月, 只能是3个月
cal -3
```


## last
显示用户最近登录信息

```bash
last # root     pts/0        Sun Jun 14 00:12   still logged in    192.0.0.0

# 指定显示条目数
last -n 1
```

## shutdown
将系统关机或重启操作。

```bash
# 立即重启系统
shutdown -r now

# 关机系统
shutdown -h  关机

# 把前一个关机或重启取消掉
shutdown -c 

# 设定一个时间关机, 加 & 可以继续用终端命令
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



## uname
打印系统信息

```bash
# 不带任何参数打印当前操作系统内核名称
uname # Linux  等价于 uname -s

# 打印系统所有信息
uname -a

# -r 打印系统版本 , 如果次版本号都是偶数，说明是一个稳定版
uname -r # 3.10.0-514.26.2.el7.x86_64

# 打印网络节点主机名称
uname -n # Yin.local

# 打印处理器名称
uname -p # i386
```




## ifconfig
配置或显示系统网卡的网络参数

```bash
# 显示所有网络参数信息
ifconfig

# 配置网卡IP地址
ifconfig eth0 192.168.1.111
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



## zip
将目录或文件压缩为 `.zip` 格式

```bash
# 压缩文件
zip README.zip README.md

# 压缩目录需要 -r 递归处理
zip -r temp.zip temp

# 包含系统隐藏文件
zip -r -S temp.zip temp

# 指定压缩效率 1-9
zip -r -9 temp.zip temp 
```


## unzip
解压由 `zip` 压缩的文件，通常是 `.zip`

```bash
# 将 demo.zip 解压到当前目录
unzip demo.zip

# 查看 demo.zip 文件，但不解压
unzip -v demo.zip

# -d 指定将文件压缩到 src 目录下
unzip demo.zip -d src
```



## locate
搜索文件，与 `find` 命令很像，但更快，因为是从数据库里查找, 通常每天会进行数据更新。

```bash
# 搜索 README.md 相关文件
locate README.md

# 忽略大小写
locate -i README.md
```


## kill
杀死一个正在运行中的程序

注：程序进程id可通过 `top` 等命令查看。
```bash
# 杀死 pid 为88 进程
kill 88

# 强制杀死
kill -KILL 88

# 彻底杀死进程
kill -9 88

# 显示信号
kill -l

# 杀死指定用户的所有进程
kill -u nginx
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
列出当前系统打开文件的工具

```bash
## 列表所有打开文件的的列表
lsof

# 查看指定端口被占用情况
lsof -i:8080

# -p 列出指定进程号所打开的文件
lsof -p 6112
```

## ps
查看当前系统进程状态

```bash
# 显示所有进程信息
ps -A

# 显示指定用户进程信息
ps -u root

# 显示所有进程信息包括命令行
ps -ef  # -e 等价于 -A  , 即等价于 ps -Af

# 列出所有正在内存中的进程
ps aux

# 配合 grep 查询指定进程
ps -ef | grep nginx
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





[⬆  回顶部](#)



