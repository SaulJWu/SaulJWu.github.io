#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io git@github.com:SaulJWu/SaulJWu.github.io.git
# git push -f git@github.com:SaulJWu/SaulJWu.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:SaulJWu/SaulJWu.github.io.git main:gh-pages

cd -
rm -rf docs/.vuepress/dist


echo " CTRL+C break command bash ..." # 组合键 CTRL+C 终止命令!