(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{660:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。")]),s._v(" "),t("h2",{attrs:{id:"官方文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[s._v("#")]),s._v(" 官方文档")]),s._v(" "),t("blockquote",[t("p",[s._v("https://github.com/alibaba/spring-cloud-alibaba/blob/master/spring-cloud-alibaba-examples/nacos-example/nacos-discovery-example/readme-zh.md")])]),s._v(" "),t("h2",{attrs:{id:"将微服务注册到注册中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将微服务注册到注册中心"}},[s._v("#")]),s._v(" 将微服务注册到注册中心")]),s._v(" "),t("p",[s._v("1.在common模块引入pom")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.alibaba.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-alibaba-nacos-discovery"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2.在应用的 /src/main/resources/application.properties 配置文件中配置 Nacos Server 地址(YML也行)")]),s._v(" "),t("p",[s._v("（事实上，这一步做也行，因为默认就是"),t("code",[s._v("localhost:8848")]),s._v("，如果将来改了再写）")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.discovery.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("127.0.0.1:8848")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3.使用 @EnableDiscoveryClient 注解开启服务注册与发现功能")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableDiscoveryClient")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProviderApplication")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n \t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \t\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProviderApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n \t"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n \t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EchoController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \t\t"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/echo/{string}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PathVariable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \t\t\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"启动-nacos-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-nacos-server"}},[s._v("#")]),s._v(" 启动 Nacos Server")]),s._v(" "),t("ol",[t("li",[s._v("首先需要获取 Nacos Server，支持直接下载和源码构建两种方式。\n"),t("ol",[t("li",[s._v("直接下载："),t("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nacos Server 下载页"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("源码构建：进入 Nacos "),t("a",{attrs:{href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github 项目页面"),t("OutboundLink")],1),s._v("，将代码 git clone 到本地自行编译打包，"),t("a",{attrs:{href:"https://nacos.io/zh-cn/docs/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考此文档"),t("OutboundLink")],1),s._v("。"),t("strong",[s._v("推荐使用源码构建方式以获取最新版本")])])])]),s._v(" "),t("li",[s._v("启动 Server，进入解压后文件夹或编译打包好的文件夹，找到如下相对文件夹 nacos/bin，并对照操作系统实际情况之下如下命令。\n"),t("ol",[t("li",[s._v("Linux/Unix/Mac 操作系统，执行命令 "),t("code",[s._v("sh startup.sh -m standalone")])]),s._v(" "),t("li",[s._v("Windows 操作系统，执行命令 "),t("code",[s._v("cmd startup.cmd")])])])])]),s._v(" "),t("h3",{attrs:{id:"naocs启动失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naocs启动失败"}},[s._v("#")]),s._v(" naocs启动失败")]),s._v(" "),t("blockquote",[t("p",[s._v("参考连接：https://github.com/alibaba/nacos/issues/3607")]),s._v(" "),t("p",[s._v("I find the key of this problem, I found every failed start nacos the exceptions include some SQL exception,then i change application.properties and import SQL to my local database,and problem is resolved.")]),s._v(" "),t("p",[s._v("step 1.\nimport data to your database use nacos-mysql.sql")]),s._v(" "),t("p",[s._v("step 2.\nchange application.properties comments like below")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#*************** Config Module Related Configurations ***************#\n### If user MySQL as datasource:\nspring.datasource.platform=mysql\n\n### Count of DB:\ndb.num=1\n\n### Connect URL of DB:\ndb.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC\ndb.user=nacos\ndb.password=nacos\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("step 3.")]),s._v(" "),t("p",[s._v("start your nacos server with standalone MODE")]),s._v(" "),t("p",[s._v("hope to help someone like this situation.")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/zongtanghu",target:"_blank",rel:"noopener noreferrer"}},[s._v("@zongtanghu"),t("OutboundLink")],1),s._v("\nGive Some Suggest:\nI think "),t("a",{attrs:{href:"https://nacos.io/zh-cn/docs/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nacos"),t("OutboundLink")],1),s._v(" quick start should give our some suggestions about change configuration.")]),s._v(" "),t("p",[s._v("Looking forward to getting better together.")])]),s._v(" "),t("p",[s._v("启动 报错了,网上一搜是缺少数据库.")]),s._v(" "),t("ol",[t("li",[s._v("打开conf文件下的mysql文件,创建数据库nacos")]),s._v(" "),t("li",[s._v("运行sql文件")]),s._v(" "),t("li",[s._v("修改application.properties里的数据库连接，把注释取消掉")])]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#*************** Config Module Related Configurations ***************#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### If use MySQL as datasource:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.datasource.platform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Count of DB:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.num")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Connect URL of DB:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.url.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("jdbc:mysql://192.168.56.10:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("blockquote",[t("p",[s._v("改成独立模式启动")])]),s._v(" "),t("p",[t("code",[s._v("startup.cmd")]),s._v(" file "),t("strong",[s._v('MODE="cluster" change to MODE="standalone"')]),s._v(",Nacos Server can start.")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117140802.png",alt:"image-20201001103148377"}})]),s._v(" "),t("p",[s._v("重新启动naocs，已经成功了。")]),s._v(" "),t("h3",{attrs:{id:"应用启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用启动"}},[s._v("#")]),s._v(" 应用启动")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("增加配置，在 nacos-discovery-provider-example 项目的 /src/main/resources/application.properties 中添加基本配置信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" spring.application.name=service-provider\n server.port=18082\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("启动应用，支持 IDE 直接启动和编译打包后启动。")]),s._v(" "),t("ol",[t("li",[s._v("IDE直接启动：找到 nacos-discovery-provider-example 项目的主类 "),t("code",[s._v("ProviderApplication")]),s._v("，执行 main 方法启动应用。")]),s._v(" "),t("li",[s._v("打包编译后启动：在 nacos-discovery-provider-example 项目中执行 "),t("code",[s._v("mvn clean package")]),s._v(" 将工程编译打包，然后执行 "),t("code",[s._v("java -jar nacos-discovery-provider-example.jar")]),s._v("启动应用。")])])])]),s._v(" "),t("h2",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),t("p",[s._v("从上面naocs启动，就可用看到，naocs的访问地址：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://192.168.137.1:8848/nacos/index.html\n\nhttp://127.0.0.1:8848/nacos\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("两个都可用，一般我用下面那个")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117140802.png",alt:"image-20201001103632756"}})]),s._v(" "),t("p",[s._v("账号密码默认都是nacos")]),s._v(" "),t("p",[s._v("在服务管理-服务列表下，已经发现服务已经注册到注册中心")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117140802.png",alt:"image-20201001103716889"}})]),s._v(" "),t("p",[s._v("同理，其他微服务也可用参照《将微服务注册到注册中心》的第2和第3步即可。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201117140802.png",alt:"image-20201001104846381"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);