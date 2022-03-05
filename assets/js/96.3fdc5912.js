(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{587:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[a("code",[t._v("Java")]),t._v(" 集合可分为"),a("code",[t._v("Collection")]),t._v(" 和"),a("code",[t._v("Map")]),t._v(" 两种体系:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Collection")]),t._v("接口：单列数据，定义了存取一组对象的方法的集合\n"),a("ul",[a("li",[a("code",[t._v("List")]),t._v("：元素有序、可重复的集合\n"),a("ul",[a("li",[a("code",[t._v("ArrayList")]),t._v("、"),a("code",[t._v("LinkedList")]),t._v("、"),a("code",[t._v("Vector")])])])]),t._v(" "),a("li",[a("code",[t._v("Set")]),t._v("：元素无序、不可重复的集合\n"),a("ul",[a("li",[a("code",[t._v("HashSet")]),t._v("、"),a("code",[t._v("LinkedHashSet")]),t._v("、"),a("code",[t._v("TreeSet")])])])])])]),t._v(" "),a("li",[a("code",[t._v("Map")]),t._v("接口：双列数据，保存具有映射关系“"),a("code",[t._v("key-value对")]),t._v("”的集合，也称为"),a("strong",[t._v("键值对")]),t._v("。\n"),a("ul",[a("li",[a("code",[t._v("HashMap")]),t._v("、"),a("code",[t._v("LinkedHashMap")]),t._v("、"),a("code",[t._v("TreeMap")]),t._v("、"),a("code",[t._v("Hashtable")]),t._v("、"),a("code",[t._v("Properties")])])])])]),t._v(" "),a("p",[t._v("我们已经学完了所有集合的体系，接下来学习"),a("code",[t._v("Collections")]),t._v("工具类。")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("ul",[a("li",[t._v("Collections 是一个操作Set、List和Map 等集合的工具类。")]),t._v(" "),a("li",[t._v("Collections 中提供了"),a("strong",[t._v("一系列静态的方法")]),t._v("对集合元素进行排序、查询和修改等操作，还提供了对集合对象设置不可变、对集合对象实现同步控制等方法。")])]),t._v(" "),a("h2",{attrs:{id:"排序操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序操作"}},[t._v("#")]),t._v(" 排序操作")]),t._v(" "),a("p",[t._v("下面是Collections 排序操作的常用方法（均为"),a("code",[t._v("static")]),t._v("方法）：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("reverse(List)")]),t._v("：反转List 中元素的顺序")]),t._v(" "),a("li",[a("code",[t._v("shuffle(List)")]),t._v("：对List集合元素进行随机排序")]),t._v(" "),a("li",[a("code",[t._v("sort(List)")]),t._v("：根据元素的自然顺序对指定List 集合元素按升序排序")]),t._v(" "),a("li",[a("code",[t._v("sort(List，Comparator)")]),t._v("：根据指定的Comparator 产生的顺序对List 集合元素进行排序")]),t._v(" "),a("li",[a("code",[t._v("swap(List，int，int)")]),t._v("：将指定list 集合中的i处元素和j 处元素进行交换操作数组的")])]),t._v(" "),a("h2",{attrs:{id:"查找、替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找、替换"}},[t._v("#")]),t._v(" 查找、替换")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Object max(Collection)")]),t._v("：根据元素的自然顺序，返回给定集合中的最大元素")]),t._v(" "),a("li",[a("code",[t._v("Object max(Collection，Comparator)")]),t._v("：根据Comparator 指定的顺序，返回给定集合中的最大元素")]),t._v(" "),a("li",[a("code",[t._v("Object min(Collection)")]),t._v("：根据元素的自然顺序，返回给定集合中的最小元素")]),t._v(" "),a("li",[a("code",[t._v("Object min(Collection，Comparator)")]),t._v("：根据Comparator 指定的顺序，返回给定集合中的最小元素")]),t._v(" "),a("li",[a("code",[t._v("int frequency(Collection，Object)")]),t._v("：返回指定集合中指定元素的出现次数")]),t._v(" "),a("li",[a("code",[t._v("void copy(List dest,List src)")]),t._v("：将src中的内容复制到dest中，\n"),a("ul",[a("li",[t._v("dest的size要大于等于src的size，否则报"),a("code",[t._v("IndexOutOfBoundsException")]),t._v("。")]),t._v(" "),a("li",[t._v("如果要dest的size要跟src的size一样，可以使用"),a("code",[t._v("List dest = Arrays.asList(new Object[src.size]);")]),t._v("，然后再拷贝。")])])]),t._v(" "),a("li",[a("code",[t._v("boolean replaceAll(List list，Object oldVal，Object newVal)")]),t._v("：使用新值替换List 对象的所有旧值")])]),t._v(" "),a("h2",{attrs:{id:"同步控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步控制"}},[t._v("#")]),t._v(" 同步控制")]),t._v(" "),a("p",[a("strong",[t._v("Collections常用方法：同步控制")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("Collections 类中提供了多个"),a("code",[t._v("synchronizedXxx()")]),t._v(" 方法，该方法可使将指定集合包装成线程同步的集合，从而可以解决多线程并发访问集合时的线程安全问题。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201227020538.png",alt:"image-20201227020538307"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201227021414.png",alt:"image-20201227021414052"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201227021454.png",alt:"image-20201227021454317"}})]),t._v(" "),a("h2",{attrs:{id:"enumeration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumeration"}},[t._v("#")]),t._v(" Enumeration")]),t._v(" "),a("p",[t._v("Enumeration 接口是Iterator迭代器的“古老版本”")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201227020604.png",alt:"image-20201227020604935"}})]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enumeration")]),t._v(" stringEnum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringTokenizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a-b*c-d-e-g"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stringEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasMoreElements")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stringEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Collection")]),t._v("和"),a("code",[t._v("Collections")]),t._v("的区别？")])]),t._v(" "),a("p",[t._v("一个是存储单列数据的接口，另一个是操作Set、List和Map 等集合的工具类。")])])}),[],!1,null,null,null);s.default=n.exports}}]);