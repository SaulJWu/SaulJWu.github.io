(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{574:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[a("code",[s._v("Java")]),s._v(" 集合可分为"),a("code",[s._v("Collection")]),s._v(" 和"),a("code",[s._v("Map")]),s._v(" 两种体系:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Collection")]),s._v("接口：单列数据，定义了存取一组对象的方法的集合\n"),a("ul",[a("li",[a("code",[s._v("List")]),s._v("：元素有序、可重复的集合\n"),a("ul",[a("li",[a("code",[s._v("ArrayList")]),s._v("、"),a("code",[s._v("LinkedList")]),s._v("、"),a("code",[s._v("Vector")])])])]),s._v(" "),a("li",[a("code",[s._v("Set")]),s._v("：元素无序、不可重复的集合\n"),a("ul",[a("li",[a("code",[s._v("HashSet")]),s._v("、"),a("code",[s._v("LinkedHashSet")]),s._v("、"),a("code",[s._v("TreeSet")])])])])])]),s._v(" "),a("li",[a("code",[s._v("Map")]),s._v("接口：双列数据，保存具有映射关系“"),a("code",[s._v("key-value对")]),s._v("”的集合，也称为"),a("strong",[s._v("键值对")]),s._v("。\n"),a("ul",[a("li",[a("code",[s._v("HashMap")]),s._v("、"),a("code",[s._v("LinkedHashMap")]),s._v("、"),a("code",[s._v("TreeMap")]),s._v("、"),a("code",[s._v("Hashtable")]),s._v("、"),a("code",[s._v("Properties")])])])])]),s._v(" "),a("p",[a("strong",[s._v("现在我们开始学习List接口的实现类"),a("code",[s._v("ArrayList")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("ul",[a("li",[s._v("ArrayList是List 接口的典型实现类、主要实现类")]),s._v(" "),a("li",[s._v("本质上，ArrayList是对象引用的一个”变长”数组，"),a("code",[s._v("Object[] elementData")]),s._v("，也就是动态的数组。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224234807.png",alt:"image-20201224234807501"}})]),s._v(" "),a("blockquote",[a("p",[s._v("ArrayList的JDK1.8之前与之后的实现区别？")])]),s._v(" "),a("ul",[a("li",[s._v("JDK1.7：ArrayList像饿汉式，直接创建一个初始容量为10的数组")]),s._v(" "),a("li",[s._v("JDK1.8：ArrayList像懒汉式，一开始创建一个长度为0的数组，当添加第一个元素时再创建一个始容量为10的数组")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("Arrays.asList(...)")]),s._v(" 方法返回的List 集合，既不是ArrayList实例，也不是Vector 实例。"),a("code",[s._v("Arrays.asList(...)")]),s._v("  返回值是一个固定长度的List 集合")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224234939.png",alt:"image-20201224234939047"}})]),s._v(" "),a("h2",{attrs:{id:"jdk7源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk7源码分析"}},[s._v("#")]),s._v(" JDK7源码分析")]),s._v(" "),a("p",[s._v("在jdk7时，空参实例化方式：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("空参实例化时，底层是创建了长度是10的"),a("code",[s._v("Object[] elementData")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"添加元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加元素"}},[s._v("#")]),s._v(" 添加元素")]),s._v(" "),a("p",[s._v("添加元素时，在添加之前先确认容量是否够，不够就扩容，库容调用"),a("code",[s._v("ensureCapacityInternal(size + 1)")]),s._v("方法，"),a("code",[s._v("size")]),s._v("是原来的容量，调用"),a("code",[s._v("grow")]),s._v("方法，默认情况下，容量扩容为原来的"),a("strong",[s._v("1.5倍")]),s._v("，特殊情况会将容量设置为要添加元素的容量，极端情况，容量设置为整型最大值，如果容量还不够就报超出内存异常"),a("code",[s._v("OutOfmemoryError()")]),s._v("。")]),s._v(" "),a("p",[s._v("扩容完以后，将原来数组中的元素拷贝过去。")]),s._v(" "),a("p",[a("strong",[s._v("结论：建议开发中使用带参的构造器："),a("code",[s._v("ArrayList list = new ArrayList(int initialCapacity)")]),s._v("，直接设置容量空间，避免扩容，效率会更高。")])]),s._v(" "),a("h2",{attrs:{id:"jkd8源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jkd8源码分析"}},[s._v("#")]),s._v(" JKD8源码分析")]),s._v(" "),a("p",[s._v("先看空参构造器：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("空参实例化时，底层"),a("code",[s._v("Object[] elementData")]),s._v("初始化为"),a("code",[s._v("{}")]),s._v("，并没有创建长度为10的数组，")]),s._v(" "),a("h3",{attrs:{id:"添加元素-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加元素-2"}},[s._v("#")]),s._v(" 添加元素")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ensureCapacityInternal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Increments modCount!!")]),s._v("\n    elementData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("添加元素时，第一次调用时，底层才创建了长度为10的数组，集合的索引指向这个元素，后续的添加和库容操作与JDK7无异。")]),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[a("strong",[s._v("jdk7中的ArrayList的对象的创建类似于单例的饿汉式，实例化时先创建数组，有元素进来集合时就用索引指向元素。")])]),s._v(" "),a("p",[a("strong",[s._v("而JKD8中的ArrayList的对象的创建类似于单例的懒汉式，实例化时不创建数组，延迟了数组的创建，节省内存。等有元素进来集合时才创建数组，并将索引指向元素。")])]),s._v(" "),a("h2",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[s._v("#")]),s._v(" 面试题")]),s._v(" "),a("p",[s._v("下面输出结果是？")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),s._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("输出结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[1, 2]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这道题考的是按索引删除还是对象删除。")]),s._v(" "),a("p",[s._v("这里remove是调用"),a("code",[s._v("Object remove(int index)")]),s._v("方法，而不是"),a("code",[s._v("boolean remove(Object obj)")]),s._v(" 方法。")]),s._v(" "),a("p",[s._v("如果想要按Object删除，要传一个对象进去")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);