
# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:SaulJWu/SaulJWu.github.io.git main

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist