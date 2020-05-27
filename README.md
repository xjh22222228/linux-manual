# linux-manual

Linux 常用命令入门手册, 跟着我每天学一个。

截止目前，含有 `11+` 命令。



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
```
