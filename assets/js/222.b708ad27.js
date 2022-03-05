(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{712:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("我使用vuepress搭建了一个静态博客，挂在了Github pages上面。")]),s._v(" "),a("ul",[a("li",[s._v("现在的部署方式")])]),s._v(" "),a("p",[s._v("使用sh部署脚本部署，把代码提交到这github平台的仓库分支。")]),s._v(" "),a("ul",[a("li",[s._v("Github Actions 自动部署")])]),s._v(" "),a("p",[a("strong",[s._v("只需要一次操作就可以同时把源码、部署代码一次性提交到平台呢")])]),s._v(" "),a("h2",{attrs:{id:"实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[s._v("#")]),s._v(" 实现方式")]),s._v(" "),a("p",[s._v("在了解GitHub Actions最近（2019.12）刚正式发布了之后，尝试使用它发现能够满足我的需求。"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html?20191227113947#comment-last",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Actions 入门教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("首先，需要获取token，后面会用到。获取方法：github获取token"),a("a",{attrs:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("、coding获取token"),a("a",{attrs:{href:"https://dev.tencent.com/help/doc/account/access-token",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("然后，将这token同时储存到github仓库的"),a("code",[s._v("Settings/Secrets")]),s._v("里面。变量名可以随便取，但是注意要和后面的"),a("code",[s._v("ci.yml")]),s._v("文件内的变量名一致，这里取的是"),a("code",[s._v("ACCESS_TOKEN")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"生成github-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成github-token"}},[s._v("#")]),s._v(" 生成github token")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在任何页面的右上角，单击您的个人资料照片，然后单击 "),a("strong",[s._v("Settings（设置）")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/userbar-account-settings.png",alt:"用户栏中的 Settings 图标"}})])]),s._v(" "),a("li",[a("p",[s._v("在左侧边栏中，单击 "),a("strong",[s._v("Developer settings")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/developer-settings.png",alt:"开发者设置"}})])]),s._v(" "),a("li",[a("p",[s._v("在左侧边栏中，单击 "),a("strong",[s._v("Personal access tokens（个人访问令牌）")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/personal_access_tokens_tab.png",alt:"个人访问令牌"}})])]),s._v(" "),a("li",[a("p",[s._v("单击 "),a("strong",[s._v("Generate new token（生成新令牌）")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/generate_new_token.png",alt:"生成新令牌按钮"}})])]),s._v(" "),a("li",[a("p",[s._v("给令牌一个描述性名称。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/token_description.png",alt:"令牌说明字段"}})])]),s._v(" "),a("li",[a("p",[s._v("选择要授予此令牌的作用域或权限。 要使用令牌从命令行访问仓库，请选择 "),a("strong",[s._v("repo（仓库）")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/token_scopes.gif",alt:"选择令牌作用域"}})])]),s._v(" "),a("li",[a("p",[s._v("单击 "),a("strong",[s._v("Generate token（生成令牌）")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/generate_token.png",alt:"生成令牌按钮"}})])]),s._v(" "),a("li",[a("p",[s._v("单击 将令牌复制到剪贴板。 出于安全原因，离开此页面后，您将无法再次看到令牌。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://docs.github.com/assets/images/help/settings/personal_access_tokens.png",alt:"Newly created token"}})]),s._v(" "),a("p",[a("strong",[s._v("警告：")]),s._v(" 像对待密码一样对待您的令牌，确保其机密性。 使用 API 时，应将令牌用作环境变量，而不是将其硬编码到程序中。")])])]),s._v(" "),a("h2",{attrs:{id:"添加token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加token"}},[s._v("#")]),s._v(" 添加TOKEN")]),s._v(" "),a("ol",[a("li",[s._v("打开github项目setting")]),s._v(" "),a("li",[s._v("Secrets")]),s._v(" "),a("li",[s._v("New repository secret")]),s._v(" "),a("li",[s._v("NAME设置为ACCESS_TOKEN")]),s._v(" "),a("li",[s._v("Value填上刚才获取的token")])]),s._v(" "),a("h2",{attrs:{id:"设置actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置actions"}},[s._v("#")]),s._v(" 设置ACTIONS")]),s._v(" "),a("p",[s._v("github actions有2中设置方式，第一种是直接从网页设置，第二种直接在本地新建，然后push到github，")]),s._v(" "),a("h3",{attrs:{id:"网页设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页设置"}},[s._v("#")]),s._v(" 网页设置")]),s._v(" "),a("ol",[a("li",[s._v("点击github actions")]),s._v(" "),a("li",[s._v("新建一个actions")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117105240.png",alt:"image-20201117105233114"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("名字为ci.yml")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CI\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#on: [push]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在master分支发生push事件时触发。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作流")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行在虚拟机环境ubuntu-latest")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("strategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matrix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("10.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用的动作。格式：userName/repoName。作用：检出仓库，获取源码。 官方actions库：https://github.com/actions")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Use Node.js $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" matrix.node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤2")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作用：安装nodejs")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" matrix.node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" run deploy.sh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤3 （同时部署到github和coding）")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("GITHUB_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# toKen私密变量")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CODING_TOKEN: ${{ secrets.CODING_TOKEN }}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&&")]),s._v(" npm run deploy\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build and Deploy "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤3 （只提交到github可以使用这个步骤）")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作用：将项目构建和部署到github。 https://github.com/JamesIves/github-pages-deploy-action")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# toKen私密变量")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BASE_BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要部署的文件夹所在的分支.")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署到的分支")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要部署的文件夹.")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_SCRIPT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&&")]),s._v(" npm run build "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&&")]),s._v(" cd docs/.vuepress/dist  "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&&")]),s._v(" cd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署前要执行的命令（记得cd进入某个目录后，后面要cd -退回开始的目录）")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("因为网页设置好了之后，云端代码需要pull到本地")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("拉到本地后，我们随意写一个新的文章，然后push到master。")]),s._v(" "),a("blockquote",[a("p",[s._v("本地方法雷同，这里不做展开。")])]),s._v(" "),a("h2",{attrs:{id:"验证是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证是否成功"}},[s._v("#")]),s._v(" 验证是否成功")]),s._v(" "),a("p",[s._v("打开自己github 的 actions，就可以查看了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117112658.png",alt:"image-20201117112452885"}})]),s._v(" "),a("h2",{attrs:{id:"一键部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键部署"}},[s._v("#")]),s._v(" 一键部署")]),s._v(" "),a("p",[s._v("经过上面的设置，我们在项目的根目录新建一个sh，一键提交代码到master，之后只需要双击运行这个sh文件就可以了。")]),s._v(" "),a("p",[s._v("这种部署又分两种，第一种是本地编译打包部署(以前的打包方式)，第二种是推送源码，自动触发云端部署。")]),s._v(" "),a("ul",[a("li",[s._v("本地编译部署打包(以前的打包方式)")])]),s._v(" "),a("p",[s._v("deploy.sh")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy to github")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'blog.xugaoyi.com' > CNAME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GITHUB_TOKEN")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git@github.com:SaulJWu/SaulJWu.github.io.git")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("githubUrl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git@github.com:SaulJWu/SaulJWu.github.io.git\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'来自github action的自动部署'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("githubUrl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://SaulJWu:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_TOKEN}")]),s._v("@github.com/SaulJWu/SaulJWu.github.io.git\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SaulJWu"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SaulJWu@outlook.com"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${msg}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$githubUrl")]),s._v(" master:gh-pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到github")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# # deploy to coding")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.xugaoyi.com\\nxugaoyi.com' > CNAME  # 自定义域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   codingUrl=git@git.dev.tencent.com:xugaoyi/xugaoyi.git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# else")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   codingUrl=https://xugaoyi:${CODING_TOKEN}@git.dev.tencent.com/xugaoyi/xugaoyi.git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git add -A")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# git commit -m "${msg}"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f $codingUrl master # 推送到coding")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf docs/.vuepress/dist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("ul",[a("li",[s._v("自动触发云端部署")])]),s._v(" "),a("p",[s._v("pushCode.sh")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'push'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这里注意，自己确实是在master分支下运行这个sh脚本文件。现在我比较推荐自动触发云端部署，我只要push云端就能自动帮我编译打包。")]),s._v(" "),a("p",[s._v("似乎以前的打包方式和现在的打包方式有点相同，都是需要运行sh文件，其实不一样，以前的打包方式，只会打包编译后的文件到github，然而源码缺没有打包上去。")]),s._v(" "),a("p",[s._v("现在我们的只需要短短几行代码，就可以将源代码和编译后的文件，分别打包到不同分支了，以后我去到哪一个地方我只需"),a("code",[s._v("git pull")]),s._v("下来，然后就可以开始写文章了，这才是真正实现了云笔记的功能。")]),s._v(" "),a("p",[s._v("再配合"),a("a",{attrs:{href:"https://sauljwu.github.io/pages/2f886b/#%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[s._v("Typora+PicGo图床"),a("OutboundLink")],1),s._v("，就爽歪歪了，那么现在写笔记的流程是这样：")]),s._v(" "),a("ol",[a("li",[s._v("把项目克隆到本地")]),s._v(" "),a("li",[s._v("用typora写好文章，其中图床自动上传")]),s._v(" "),a("li",[s._v("写完后双击运行pushCode.sh")])]),s._v(" "),a("p",[s._v("就可以了")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),a("p",[s._v("当然也可以在package.json，配置好，直接运行脚本")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117131313.png",alt:"image-20201117131313470"}})]),s._v(" "),a("p",[s._v("如果win10系统，不支持sh文件运行，请把vscode设置为默认是bash.exe运行")])]),s._v(" "),a("blockquote",[a("p",[s._v("成功视图")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117124407.png",alt:"image-20201117124407232"}})]),s._v(" "),a("ul",[a("li",[s._v("gh-pages分支")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117124418.png",alt:"image-20201117124418673"}})]),s._v(" "),a("ul",[a("li",[s._v("mast 源代码分支")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117124450.png",alt:"image-20201117124450065"}})]),s._v(" "),a("h2",{attrs:{id:"设置网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置网站"}},[s._v("#")]),s._v(" 设置网站")]),s._v(" "),a("p",[s._v("因为我们生成的静态文件都在gh-pages文件，那么把设置为访问地址就可以了。")]),s._v(" "),a("p",[s._v("sttings -> github pages 切换 source 成 gh-pages branch 点击访问地址。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117113252.png",alt:"image-20201117113252857"}})]),s._v(" "),a("p",[s._v("这时候访问自己的博客就行了")]),s._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://xugaoyi.com/pages/6b9d359ec5aa5019/#%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Actions 实现自动部署静态博客 | Evan's blog"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/6844904144201842696#heading-3",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress + GitHub Actions 自动化构建文档博客"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/other/github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 GitHub Actions 自动部署博客 | vuepress-theme-reco"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[s._v("#")]),s._v(" TODO")]),s._v(" "),a("ol",[a("li",[s._v("改善页面目录结构")]),s._v(" "),a("li",[s._v("部署到"),a("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("coding pages"),a("OutboundLink")],1),s._v("上")]),s._v(" "),a("li",[s._v("百度收录")]),s._v(" "),a("li",[s._v("不蒜子统计")]),s._v(" "),a("li",[s._v("博客SEO优化")])])])}),[],!1,null,null,null);t.default=e.exports}}]);