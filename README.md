# linux-manual

Linux 常用命令入门手册, 每天学一个。



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





