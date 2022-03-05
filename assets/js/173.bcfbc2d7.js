(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{664:function(_,v,t){"use strict";t.r(v);var a=t(15),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"什么是elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是elasticsearch"}},[_._v("#")]),_._v(" 什么是Elasticsearch？")]),_._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"elastic.co/cn/what-is/elasticsearch"}},[_._v("Elasticsearch")]),_._v("是一个"),t("strong",[_._v("分布式")]),_._v("的"),t("strong",[_._v("开源搜索")]),_._v("和"),t("strong",[_._v("分析")]),_._v("引擎，适用于所有类型的数据，包括文本、数字、地理空间、结构化和非结构化数据。Elasticsearch在Apache lucenne的基础上开发而成，由Elasticsearch N.V（即现在的Elastic）于2010年首次发布。Elasticsearch以其简单的REST风格API、分布式结构、速度和可拓展性和文明，是Elastic  Stack的核心组件；Elastic Stack是适用于数据采集、充实、存储、分析和可视化的一组开源工具。人们通常将Elastic Stack称为ELK Stack（代指Elasticsearch、Logstash和Kibana），目前 Elastic Stack 包括一系列丰富的轻量型数据采集代理，这些代理统称为 Beats，可用来向 Elasticsearch 发送数据。")])]),_._v(" "),t("p",[_._v("也就是用来做数据检索和分析的，开源的Elasticsearch是目前全文搜索引擎的首选。")]),_._v(" "),t("p",[_._v("Elastic的底层是开源库Lucene。但是，你没法直接用Lucene，必须自己写代码去调用它的接口。Elastic是Lucene的封装，提供了REST API的操作接口，开箱即用。")]),_._v(" "),t("p",[_._v("学习好Elastic建议去官方文档学习，因为资料是最新的。")]),_._v(" "),t("p",[_._v("官方文档：\nhttps://www.elastic.co/guide/index.html")]),_._v(" "),t("h2",{attrs:{id:"elasticsearch-的用途是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-的用途是什么"}},[_._v("#")]),_._v(" Elasticsearch 的用途是什么？")]),_._v(" "),t("p",[_._v("Elasticsearch 在速度和可扩展性方面都表现出色，而且还能够索引多种类型的内容，这意味着其可用于多种用例：")]),_._v(" "),t("ul",[t("li",[_._v("应用程序搜索")]),_._v(" "),t("li",[_._v("网站搜索")]),_._v(" "),t("li",[_._v("企业搜索")]),_._v(" "),t("li",[_._v("日志处理和分析")]),_._v(" "),t("li",[_._v("基础设施指标和容器监测")]),_._v(" "),t("li",[_._v("应用程序性能监测")]),_._v(" "),t("li",[_._v("地理空间数据分析和可视化")]),_._v(" "),t("li",[_._v("安全分析")]),_._v(" "),t("li",[_._v("业务分析")])]),_._v(" "),t("blockquote",[t("p",[_._v("mysql不行吗？")])]),_._v(" "),t("p",[_._v("其实mysql也行，但是术业有专攻，mysql专攻于"),t("strong",[_._v("数据持久化存储")]),_._v("和管"),t("strong",[_._v("理")]),_._v("，也就是CRUD。真正要做海量数的检索和分析，它可以秒级从海量数据中检索出我们想要的数据。而mysql如果单表达到百分级数据，检索是非常慢的。")]),_._v(" "),t("p",[_._v("如果用mysql来做电商商品检索，mysql是承受不了这么大的压力。")]),_._v(" "),t("blockquote",[t("h2",{attrs:{id:"elasticsearch-的工作原理是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-的工作原理是什么"}},[_._v("#")]),_._v(" Elasticsearch 的工作原理是什么？")]),_._v(" "),t("p",[_._v("原始数据会从多个来源（包括日志、系统指标和网络应用程序）输入到 Elasticsearch 中。"),t("em",[_._v("数据采集")]),_._v("指在 Elasticsearch 中进行"),t("em",[_._v("索引")]),_._v("之前解析、标准化并充实这些原始数据的过程。这些数据在 Elasticsearch 中索引完成之后，用户便可针对他们的数据运行复杂的查询，并使用聚合来检索自身数据的复杂汇总。在 Kibana 中，用户可以基于自己的数据创建强大的可视化，分享仪表板，并对 Elastic Stack 进行管理。")])]),_._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[_._v("#")]),_._v(" 基本概念")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201124105120.png",alt:"image-20201124105112926"}})]),_._v(" "),t("p",[_._v("类比到MySQL中")]),_._v(" "),t("ul",[t("li",[_._v("索引类似数据库")]),_._v(" "),t("li",[_._v("类型类似数据表")]),_._v(" "),t("li",[_._v("文档类似数据")]),_._v(" "),t("li",[_._v("属性类似列")])]),_._v(" "),t("h3",{attrs:{id:"_1、index-索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、index-索引"}},[_._v("#")]),_._v(" 1、Index（索引）")]),_._v(" "),t("p",[_._v("动词：相当于MySQL中的insert;")]),_._v(" "),t("p",[_._v("名词：相当于MySQL中的Database；")]),_._v(" "),t("h3",{attrs:{id:"_2、type-类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、type-类型"}},[_._v("#")]),_._v(" 2、Type（类型）")]),_._v(" "),t("p",[_._v("在Index（索引）中，可以定义一个或多个类型。")]),_._v(" "),t("p",[_._v("类似于MySQL中的Table；每一种类型的数据放在一起；")]),_._v(" "),t("h3",{attrs:{id:"_3、document-文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、document-文档"}},[_._v("#")]),_._v(" 3、Document（文档）")]),_._v(" "),t("p",[_._v("保存在某个索引（Index）下，某种类型（Type）的一个数据（Document），文档是JSON格式的，Document就像是MySQL中的某个Table里面的内容；")]),_._v(" "),t("h3",{attrs:{id:"_4、倒排索引机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、倒排索引机制"}},[_._v("#")]),_._v(" 4、倒排索引机制")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("词")]),_._v(" "),t("th",[_._v("记录")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("红海")]),_._v(" "),t("td",[_._v("1,2,3,4,5")])]),_._v(" "),t("tr",[t("td",[_._v("行动")]),_._v(" "),t("td",[_._v("1,2,3")])]),_._v(" "),t("tr",[t("td",[_._v("探索")]),_._v(" "),t("td",[_._v("2,5")])]),_._v(" "),t("tr",[t("td",[_._v("特别")]),_._v(" "),t("td",[_._v("3,5")])]),_._v(" "),t("tr",[t("td",[_._v("记录篇")]),_._v(" "),t("td",[_._v("4")])]),_._v(" "),t("tr",[t("td",[_._v("特工")]),_._v(" "),t("td",[_._v("5")])])])]),_._v(" "),t("p",[_._v("在Elasticsearch保存数据时，首先第一步是"),t("strong",[_._v("分词")]),_._v("。")]),_._v(" "),t("p",[_._v("**分词：**将整句分拆为单词（当然也有可能拆分为红,海,行,动四个字）")]),_._v(" "),t("p",[_._v("保存的记录")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("红海行动")])]),_._v(" "),t("li",[t("p",[_._v("探索红海行动")])]),_._v(" "),t("li",[t("p",[_._v("红海特别行动")])]),_._v(" "),t("li",[t("p",[_._v("红海记录篇")])]),_._v(" "),t("li",[t("p",[_._v("特工红海特别探索")])])]),_._v(" "),t("p",[t("strong",[_._v("检索：")])]),_._v(" "),t("blockquote",[t("p",[_._v("在检索的时候，也会把要搜索的内容分词")])]),_._v(" "),t("p",[_._v("假设检索：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("红海特工行动？")])]),_._v(" "),t("li",[t("p",[_._v("红海行动？")])])]),_._v(" "),t("p",[_._v("只要记录里面，包含一个或多个单词，都会查出来，所以最终返回1,2,3,4,5")]),_._v(" "),t("p",[_._v("但是，哪个才是真正想要的？")]),_._v(" "),t("p",[t("strong",[_._v("相关性得分：")])]),_._v(" "),t("p",[_._v("Elasticsearch，会把搜索的内容分词，去数据库中找，根据命中的词，会得到相关性得分。")]),_._v(" "),t("p",[_._v("可能命中了2/3，也可能是1/4，会根据这个得分倒序返回。")]),_._v(" "),t("blockquote",[t("p",[_._v("如果要用MySQL来解决这种情况，SQL就要写得非常麻烦了，要用多个like。")])]),_._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("p",[_._v("ES可以快速存储、搜索和分析海量数据，ES的数据默认放到内存中进行海量分析和检索，非常快的。当然数据来源都是MySQL，最后还要将MySQL的数据存到ES中。")]),_._v(" "),t("ul",[t("li",[_._v("索引对应于MySQL的数据库")]),_._v(" "),t("li",[_._v("类型对应于MySQL的数据表")]),_._v(" "),t("li",[_._v("文档对应于MySQL的数据")]),_._v(" "),t("li",[_._v("属性对应于MySQL的列")])]),_._v(" "),t("p",[_._v("所有数据都是JSON格式，并且采用倒排索引机制")])])}),[],!1,null,null,null);v.default=s.exports}}]);