
<p align="center">
  <img src="media/poster.jpg" width="210" />
  <br />
  <b>Linux Manual</b>
  <p align="center">
    <a href="https://github.com/xjh22222228/linux-manual/stargazers"><img src="https://img.shields.io/github/stars/xjh22222228/linux-manual" alt="Stars Badge"/></a>
    <img src="https://img.shields.io/github/license/xjh22222228/linux-manual" />
    <a href="https://hits.dwyl.com/xjh22222228/linux-manual">
      <img src="https://hits.dwyl.com/xjh22222228/linux-manual.svg" />
    </a>
  </p>
</p>
<br /><br />


Linux 常用命令参考手册, 非常适合入门, 基本能满足工作日常使用。

截止目前，含有 `68+` 命令。

注：这里只列出常用命令, 如果想要更系统的可能需要翻阅官方手册。



---

# 目录
- 文件管理
  - [head](#head) | [tail](#tail) | [ls](#ls) | [pwd](#pwd) | [wc](#wc) | [find](#find) | [mkdir](#mkdir) | [chattr](#chattr) | [more](#more) | [paste](#paste) | [stat](#stat) | [grep](#grep)
  - [touch](#touch) | [cd](#cd) | [rm](#rm) | [rmdir](#rmdir) | [cp](#cp) | [cat](#cat) | [mv](#mv) | [locate](#locate) | [open](#open) | [source](#source) | [tree](#tree) | [md5sum](#md5sum)
- 系统管理
  - [top](#top) | [whoami](#whoami) | [nohup](#nohup) | [watch](#watch) | [ping](#ping) | [which](#which) | [last](#last) | [shutdown](#shutdown) | [reboot](#reboot) | [ps](#ps) | [uptime](#uptime) | [crontab](#crontab) | [su](#su)
  - [uname](#uname) | [ifconfig](#ifconfig) | [who](#who) | [whereis](#whereis) | [kill](#kill) | [chmod](#chmod) | [lsof](#lsof) | [netstat](#netstat) | [w](#w) | [chown](#chown) | [systemctl](#systemctl)
- 系统设置
  - [alias](#alias) | [time](#time) | [clear](#clear)
- 压缩、解压
  - [zip](#zip) | [unzip](#unzip) | [gzip](#gzip) | [bzip2](#bzip2)
- 网络
  - [wget](#wget) | [curl](#curl) | [scp](#scp)
- 磁盘
  - [df](#df) | [du](#du)
- 鸡助命令
  - [cal](#cal)
- 其他
  - [echo](#echo) | [date](#date) | [man](#man) | [sleep](#sleep) | [yum](#yum) | [history](#history) | [xargs](#xargs)


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

# 借助 find 和 xargs 实现代码统计
find . ! -path "*node_modules*" -path "*.js*" | xargs wc -l
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
显示系统磁盘信息

```bash
# 显示系统磁盘信息
df

# 格式化大小，以kb以上进行显示
df -h

# 查看全部文件系统信息
df -a
```


## du
显示文件或目录所占用的磁盘空间

```bash
# 查看指定文件所占用磁盘空间
du README.md

# 查看指定目录所占用磁盘空间, 输出的最后一行是累计总大小
du src

# -h 以K，M，G为单位，提高信息的可读性。
du -h src  # 20K    src

# -s 只显示总大小，列出最后累计的值
du -s src
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

# 打印系统环境变量，如果变量不存在输出为空
echo $PATH

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

# 打印多个命令
which ls vi
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
last # root     pts/0        183.58.247.64    Sun Jan  5 13:57 - 14:28  (00:30)

# 指定显示条目数
last -n 1
```

## shutdown
将系统关机或重启操作。

```bash
# 立即重启系统
shutdown -r now

# 关闭系统并切断电源
shutdown -h  关机  # 实际上是调用 init 0

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
## 打印所有打开文件的的列表
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



## curl
`curl` 是一个非常强大的网络传输工具, 利用URL规则在命令行下工作的文件传输工具。

```bash
# 查看网页内容
curl https://github.com/xjh22222228/linux-manual

# 下载文件到本地
curl https://github.com/xjh22222228/linux-manual -O
curl https://github.com/xjh22222228/linux-manual -O --progress # 显示下载进度条

# -I 或 -head 显示HTTP响应报文
curl https://github.com/xjh22222228/linux-manual -I

# -H 设置请求头
curl -H 'Content-Type: application/json' -H 'Content-Type: application/json' https://github.com/xjh22222228/linux-manual

# 通过POST请求发送JSON数据, -X 指明是否哪种HTTP请求, -d 实体内容
curl -H "Content-type: application/json" -X POST -d '{"age":"18"}' https://github.com/xjh22222228/linux-manual

# 发送时携带 cookie
curl https://github.com/xjh22222228/linux-manual --cookie "age=18;name=xjh"

# -v 查看整个传输过程
curl https://github.com/xjh22222228/linux-manual -v

# -F(--form) 利用POST上传文件, file 是字段名, =@ 必须存在
curl https://example.com/upload -F "file=@/home/demo.png"
```


## date
显示或设置系统时间日期

格式化符号
- `%%`    百分号
- `%a`    当地缩写的工作日名称（例如，Sun）
- `%A`    当地完整的工作日名称（例如，Sunday）
- `%b`    当地缩写的月份名称（例如，Jan）
- `%B`    当地完整的月份名称（例如，January）
- `%c`    当地的日期和时间（例如，Thu Mar  3 23:05:25 2005）
- `%C`    世纪，和%Y类似，但是省略后两位（例如，20）
- `%d`    一月中的一天（例如，01）
- `%D`    日期，等价于%m/%d/%y
- `%e`    一月中的一天，格式使用空格填充，等价于%_d
- `%F`    完整的日期；等价于%+4Y-%m-%d
- `%g`    ISO标准计数周的年份的最后两位数字
- `%G`    ISO标准计数周的年份，通常只对%V有用
- `%h`    等价于%b
- `%H`    小时，范围（00..23）
- `%I`    小时，范围（00..23）
- `%j`    一年中的一天，范围（001..366）
- `%k`    小时，使用空格填充，范围（0..23），等价于%_H
- `%l`    小时，使用空格填充，范围（1..12），等价于%_I
- `%m`    月，范围（01..12）
- `%M`    分钟，范围（00..59）
- `%n`    换行符
- `%N`    纳秒，范围（000000000..000000000）
- `%p`    用于表示当地的AM或PM，如果未知则为空白
- `%P`    类似于%p，但用小写表示
- `%q`    季度，范围（1..4）
- `%r`    当地以12小时表示的时钟时间（例如，11:11:04 PM）
- `%R`    24小时每分钟；等价于%H:%M
- `%s`    自协调世界时1970年01月01日00时00分以来的秒数
- `%S`    秒数，范围（00..60）
- `%t`    水平制表符
- `%T`    时间；等价于%H:%M:%S
- `%u`    一周中的一天（1..7），1代表星期一
- `%U`    一年中的第几周，周日作为一周的起始（00..53）
- `%V`    ISO标准计数周，该方法将周一作为一周的起始（01..53）
- `%w`    一周中的一天（0..6），0代表星期天
- `%W`    一年中的第几周，周一作为一周的起始（00..53）
- `%x`    当地的日期表示（例如，12/31/99）
- `%X`    当地的时间表示（例如，23:13:48）
- `%y`    年份后两位数字，范围（00..99）
- `%Y`    年份
- `%z`    +hhmm格式的数值化时区格式（例如，-0400）
- `%:z`   +hh:mm格式的数值化时区格式（例如，-04:00）
- `%::z`  +hh:mm:ss格式的数值化时区格式（例如，-04:00:00）
- `%:::z` 数值化时区格式，相比上一个格式增加':'以显示必要的精度（例如，-04，+05:30）
- `%Z`    时区缩写（如EDT）
- `-`     (连字符) 不要填充相应的字段。
- `_`     (下划线) 使用空格填充相应的字段。
- `0`     (数字0) 使用数字0填充相应的字段。
- `+`     用数字0填充，未来年份大于4位数字则在前面加上'+'号。
- `^`     允许的情况下使用大写。
- `#`     允许的情况下将默认的大写转换为小写，默认的小写转换为大写。


```bash
# 显示当前时间
date

# 格式化当前时间
date +"%Y-%m-%d %H:%M.%S" # 2020-07-01 00:00.00

# 设置系统时间
date -s  # 设置当前时间, 须root
date -s "2020-07-01 00:00:00" # 设置全部时间
```


## netstat
查看网络系统状态信息

参数说明：

- a或--all 显示所有连线中的Socket。
- A<网络类型>或--<网络类型> 列出该网络类型连线中的相关地址。
- c或--continuous 持续列出网络状态。
- C或--cache 显示路由器配置的快取信息。
- e或--extend 显示网络其他相关信息。
- F或--fib 显示FIB。
- g或--groups 显示多重广播功能群组组员名单。
- h或--help 在线帮助。
- i或--interfaces 显示网络界面信息表单。
- l或--listening 显示监控中的服务器的Socket。
- M或--masquerade 显示伪装的网络连线。
- n或--numeric 直接使用IP地址，而不通过域名服务器。
- N或--netlink或--symbolic 显示网络硬件外围设备的符号连接名称。
- o或--timers 显示计时器。
- p或--programs 显示正在使用Socket的程序识别码和程序名称。
- r或--route 显示Routing Table。
- s或--statistics 显示网络工作信息统计表。
- t或--tcp 显示TCP传输协议的连线状况。
- u或--udp 显示UDP传输协议的连线状况。
- v或--verbose 显示指令执行过程。
- V或--version 显示版本信息。
- w或--raw 显示RAW传输协议的连线状况。
- x或--unix 此参数的效果和指定"-A unix"参数相同。
- -ip或--inet 此参数的效果和指定"-A inet"参数相同。

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



## uptime
查看系统负载信息， 此命令非常简单，没有太多的参数。

```bash
# 21:51:53 当前时间
# up 750 days, 13:24  当前系统运行的天数，小时，分钟 （从上次开机起计算）
# 1 user 当前系统登录用户数
# load average: 0.08, 0.07, 0.06    一分钟、5分钟、15分钟平均负载, 这3个值不能大于CPU个数，如果大于了说明系统负载高，性能低。
uptime # 21:51:53 up 750 days, 13:24,  1 user,  load average: 0.08, 0.07, 0.06
```



## chattr
用于修改文件属性

参数:
- a：让文件或目录仅供附加用途
- b：不更新文件或目录的最后存取时间
- c：将文件或目录压缩后存放
- d：将文件或目录排除在倾倒操作之外
- i：不得任意更动文件或目录
- s：保密性删除文件或目录
- S：即时更新文件或目录
- u：预防意外删除

- -R：递归处理，将指令目录下的所有文件及子目录一并处理
- -v<版本编号>：设置文件或目录版本
- -V：显示指令执行过程
- +<属性>：开启文件或目录的该项属性
- -<属性>：关闭文件或目录的该项属性
- =<属性>：指定文件或目录的该项属性

```bash
# 锁定该文件, 防止文件被修改或删除
chattr +i README.md  # chattr -i README.md  解锁

# 可以使用 lsattr 查看赋予的属性
lsattr README.md
```


## gzip
用来压缩文件, 也可以用来解压文件, 格式为 `.gz`, 压缩后原文件将被删除

注意：gzip 不能用于压缩整个目录, 只能用于压缩文件, 如果需要压缩整个目录可以考虑使用 [zip](#zip) 命令。
```bash
# 压缩 README.md 文件, 压缩完成后 README.md 文件会被删除
gzip README.md # README.md.gz

# 递归压缩目录下的所有文件
gzip -r ./logs

# 加 -v 显示压缩执行过程
gzip -rv ./logs

# 压缩 .tar 后缀文件
gzip -r src.tar  # 压缩后为 src.tar.gz

# -d 解压之前gzip压缩后的文件
gzip -d README.md
gzip -dr ./logs # 或者递归解压目录下的所有文件
```


## bzip2
将文件压缩成 `bz2` 格式，也可用于解压 `.bz2`

```bash
# 压缩 README.md 文件
bzip2 README.md     # 不保留源文件 README.md.bz2
bzip2 -k README.md  # -k 保留源文件


# 解压
bzip2 -d README.md.bz2  # 源文件将被删除
bzip2 -dk README.md.bz2  # -k 保留源文件
bzip -dt README.md.bz2 # -t --test 测试解压, 实际不解压，模拟整个解压过程
```

## more
分页查看文件内容, 每次查看一屏, 每屏能显示多少内容取决于终端大小。

快捷键：
- `空格`或`PageUp` - 查看下一屏内容
- `B`或`PageDown` - 查看上一屏内容
- `回车` - 查看下一行内容
- `Q` - 退出

```bash
more README.md

# 从第10行开始显示
more +10 README.md

# 显示查看进度
more -d README.md # --More--(17%)[Press space to continue, 'q' to quit.]
```



## crontab
周期性执行任务, 通常用于定时备份。

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

`* * * * * 命令`
```bash
# 每天18点18分执行 echo `date` > README.md
18 18 * * * echo `date` > README.md

# 每一分钟执行
* * * * */1 echo `date` > README.md
```


## man
查看指令帮助手册


```bash
# 查看 ls 指令帮助手册
man ls

# -a 在所有手册中查找
man -a ls
```


## sleep
将目前动作延迟一段时间, 通常用于脚本当中

时间参数：
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



## source
在当前Shell环境中从指定文件读取和执行命令， 通常用于重新执行环境。

别名 `.` 点符号
```bash
source ~/.bash_profile  # 等价 . ~/.bash_profile
```




## paste
合并N个文件的列，相当于追加文件内容。

```bash
# 1.txt 和 2.txt 合并输出
paste 1.txt 2.txt

# 1.txt 2.txt 合并后保存为 3.txt
paste 1.txt 2.txt > 3.txt
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



## tree
生成目录树结构, 通常用于描述项目结构。

```bash
# 递归当前目录下所有文件并生成目录树
tree
# .
# ├── LICENSE
# ├── README.md
# ├── b.md
# └── media
#     └── poster.jpg


# -I 忽略某些目录
tree -I "node_modules|.git|.svn"

# 只显示目录
tree -d

# 指定要递归的目录层级
tree -L 3
```



## yum
基于RPM的软件包管理器, 特点安装快捷，命令简洁好记。

```bash
# 安装nginx
yum install nginx

# 指定 -y 安装时自动全部 yes
yum -y install nginx

# 查找包
yum search nginx

# 显示所有已安装的包
yum list

# 升级包
yum -y update nginx

# 移除包
yum -y remove nginx

# 清除缓存
yum clean all

# 显示安装包信息
yum info nginx

# 检查可更新的包程序
yum check-update
```




## history
列出当前系统使用过的命令，默认保存1000条


```bash
# 列出当前使用过的命令,
history

# 指定要显示的条数
history 50

# 清空历史命令
history -c
```




## md5sum
计算和校验文件报文摘要

```bash
# 计算文件md5
mmd5sum README.md # d41d8cd98f00b204e9800998ecf8427e  README.md

# 校验文件, 查看文件是否被篡改过
md5sum README.md > README.md5 # 计算文件md5并保存在 README.md5 , 保存的文件名和后缀可以随意命名
md5sum -c README.md5 # -c 从指定的文件读取md5并校验, 会从当前目录寻找 README.md
```



## su
切换当前用户到其他用户身

```bash
# 切换到 admin 身份
su admin

# -c 执行完指令后切换回原身份
su -c ls admin

# 可以通过以下查找当前系统用户列表
cat /etc/passwd
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



## grep
强大的文本搜索工具，被称为Linux命令三剑客。

```bash
# 从 README.md 文件中搜索 linux 关键字
grep "linux" README.md
grep "linux" README.md README2.md # 多个文件搜索

# 输出时高亮显示
grep "linux" README.md --color

# -o 只输出匹配部分
grep -o "linux" README.md --color

# -n 输出到匹配的行数
grep -o "linux" README.md

# -c 输出到匹配次数
grep -c "linux" README.md

# -r 递归目录文件搜索
grep -r "linux" ./src

# 使用正则表达式搜索, 正则表达式语法与大部分编程语言基本上一致
egrep "[0-9]" # 等价于 grep -E "[0-9]" README.md
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











[⬆  回顶部](#)

