(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{572:function(t,a,s){"use strict";s.r(a);var e=s(15),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[s("code",[t._v("Java")]),t._v(" 集合可分为"),s("code",[t._v("Collection")]),t._v(" 和"),s("code",[t._v("Map")]),t._v(" 两种体系:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Collection")]),t._v("接口：单列数据，定义了存取一组对象的方法的集合\n"),s("ul",[s("li",[s("code",[t._v("List")]),t._v("：元素有序、可重复的集合\n"),s("ul",[s("li",[s("code",[t._v("ArrayList")]),t._v("、"),s("code",[t._v("LinkedList")]),t._v("、"),s("code",[t._v("Vector")])])])]),t._v(" "),s("li",[s("code",[t._v("Set")]),t._v("：元素无序、不可重复的集合\n"),s("ul",[s("li",[s("code",[t._v("HashSet")]),t._v("、"),s("code",[t._v("LinkedHashSet")]),t._v("、"),s("code",[t._v("TreeSet")])])])])])]),t._v(" "),s("li",[s("code",[t._v("Map")]),t._v("接口：双列数据，保存具有映射关系“"),s("code",[t._v("key-value对")]),t._v("”的集合，也称为"),s("strong",[t._v("键值对")]),t._v("。\n"),s("ul",[s("li",[s("code",[t._v("HashMap")]),t._v("、"),s("code",[t._v("LinkedHashMap")]),t._v("、"),s("code",[t._v("TreeMap")]),t._v("、"),s("code",[t._v("Hashtable")]),t._v("、"),s("code",[t._v("Properties")])])])])]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[s("code",[t._v("Collection")]),t._v(" 接口是"),s("code",[t._v("List")]),t._v("、"),s("code",[t._v("Set")]),t._v(" 和"),s("code",[t._v("Queue")]),t._v(" 的父接口，该接口里定义的方法既可用于操作"),s("code",[t._v("Set")]),t._v(" 集合，也可用于操作"),s("code",[t._v("List")]),t._v(" 和"),s("code",[t._v("Queue")]),t._v(" 集合。")]),t._v(" "),s("p",[t._v("JDK不提供此接口的任何直接实现，而是提供更具体的子接口(如："),s("code",[t._v("Set")]),t._v("和"),s("code",[t._v("List")]),t._v(")实现。")]),t._v(" "),s("p",[t._v("在Java5 之前，Java 集合会丢失容器中所有对象的数据类型，把所有对象都当成Object 类型处理；从JDK 5.0 增加了泛型以后，Java 集合可以记住容器中对象的数据类型。")]),t._v(" "),s("h2",{attrs:{id:"接口方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口方法"}},[t._v("#")]),t._v(" 接口方法")]),t._v(" "),s("ul",[s("li",[t._v("1、添加\n"),s("ul",[s("li",[s("code",[t._v("add(Object obj)")]),t._v("：将obj对象添加到集合中。")]),t._v(" "),s("li",[s("code",[t._v("addAll(Collection coll)")]),t._v("：将另一个集合中的元素添加到当前的集合中。")])])]),t._v(" "),s("li",[t._v("2、获取有效元素的个数\n"),s("ul",[s("li",[s("code",[t._v("int size()")])])])]),t._v(" "),s("li",[t._v("3、清空集合\n"),s("ul",[s("li",[s("code",[t._v("void clear()")])])])]),t._v(" "),s("li",[t._v("4、是否是空集合\n"),s("ul",[s("li",[s("code",[t._v("boolean isEmpty()")])])])]),t._v(" "),s("li",[t._v("5、是否包含某个元素\n"),s("ul",[s("li",[s("code",[t._v("boolean contains(Object obj)")]),t._v("：**是通过调用元素的"),s("code",[t._v("equals")]),t._v("方法来判断是否是同一个对象。并不是比较内存地址，而是判断是否有相同数据的对象。**如果是自定义类并没有重写"),s("code",[t._v("equals")]),t._v("方法，那么还是比较内存地址。会一直调用对象所在类的"),s("code",[t._v("equals")]),t._v("方法，直到找到一个相同的才会返回。")]),t._v(" "),s("li",[s("code",[t._v("boolean containsAll(Collection c)")]),t._v("：也是调用元素的"),s("code",[t._v("equals")]),t._v("方法来比较的。拿两个集合的元素挨个比较。与"),s("code",[t._v("contains")]),t._v("方法不同的是，必须全部包含才返回"),s("code",[t._v("true")]),t._v("，否则返回"),s("code",[t._v("false")]),t._v("。")])])]),t._v(" "),s("li",[t._v("6、删除\n"),s("ul",[s("li",[s("code",[t._v("boolean remove(Object obj)")]),t._v(" ：通过元素的"),s("code",[t._v("equals")]),t._v("方法判断是否是要删除的那个元素。只会删除找到的第一个元素。")]),t._v(" "),s("li",[s("code",[t._v("boolean removeAll(Collection coll)")]),t._v("：也是调用元素的"),s("code",[t._v("equals")]),t._v("方法，然后取当前集合的差集")])])]),t._v(" "),s("li",[t._v("7、取两个集合的交集\n"),s("ul",[s("li",[s("code",[t._v("boolean retainAll(Collection c)")]),t._v("：也是调用元素的"),s("code",[t._v("equals")]),t._v("方法，获取两个集合的交集，"),s("strong",[t._v("把交集的结果存在当前集合中，不影响形参集合c")])])])]),t._v(" "),s("li",[t._v("8、集合是否相等\n"),s("ul",[s("li",[s("code",[t._v("boolean equals(Object obj)")]),t._v("：也是调用元素的"),s("code",[t._v("equals")]),t._v("方法，如果"),s("code",[t._v("new")]),t._v("的是有序的集合，例如"),s("code",[t._v("ArrayList")]),t._v("，还要顺序相同才会返回"),s("code",[t._v("true")]),t._v("。")])])]),t._v(" "),s("li",[t._v("9、转成对象数组\n"),s("ul",[s("li",[s("code",[t._v("Object[] toArray()")]),t._v(" "),s("ul",[s("li",[t._v("将数组转成集合："),s("code",[t._v("Arrays.asList(T[] a)")]),t._v(" "),s("ul",[s("li",[t._v("注意：如果a不能是基本数据类，如果是基本数据类型，它会判断为一个对象，会将数组作为一个对象存进去，而不是将数组中每个元素存进去。")])])])])])])]),t._v(" "),s("li",[t._v("10、获取集合对象的哈希值\n"),s("ul",[s("li",[s("code",[t._v("hashCode()")])])])]),t._v(" "),s("li",[t._v("11、遍历\n"),s("ul",[s("li",[s("code",[t._v("iterator()")]),t._v("：返回迭代器对象，用于集合遍历")])])])]),t._v(" "),s("h2",{attrs:{id:"iterator迭代器接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterator迭代器接口"}},[t._v("#")]),t._v(" "),s("code",[t._v("Iterator")]),t._v("迭代器接口")]),t._v(" "),s("h3",{attrs:{id:"概述-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("blockquote",[s("p",[t._v("​\t使用"),s("code",[t._v("Iterator")]),t._v("接口遍历集合元素")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Iterator")]),t._v("对象称为迭代器(设计模式的一种)，主要用于遍历"),s("code",[t._v("Collection")]),t._v(" 集合中的元素。")]),t._v(" "),s("li",[s("strong",[t._v("GOF给迭代器模式的定义为：提供一种方法访问一个容器("),s("code",[t._v("container")]),t._v(")对象中各个元素，而又不需暴露该对象的内部细节。迭代器模式，就是为容器而生。类似于“公交车上的售票员”、“火车上的乘务员”、“空姐”。")])]),t._v(" "),s("li",[s("code",[t._v("Collection")]),t._v("接口继承了"),s("code",[t._v("java.lang.Iterable")]),t._v("接口，该接口有一个"),s("code",[t._v("iterator()")]),t._v("方法，那么所有实现了"),s("code",[t._v("Collection")]),t._v("接口的集合类都有一个"),s("code",[t._v("iterator()")]),t._v("方法，用以返回一个实现了"),s("code",[t._v("Iterator")]),t._v("接口的对象。")]),t._v(" "),s("li",[s("code",[t._v("Iterator")]),t._v(" 仅用于遍历集合，"),s("code",[t._v("Iterator")]),t._v("本身并不提供承装对象的能力。如果需要创建"),s("code",[t._v("Iterator")]),t._v(" 对象，则必须有一个被迭代的集合。")]),t._v(" "),s("li",[s("strong",[t._v("集合对象每次调用"),s("code",[t._v("iterator()")]),t._v("方法都得到一个全新的迭代器对象，默认游标都在集合的第一个元素之前。")])])]),t._v(" "),s("h3",{attrs:{id:"iterator接口的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterator接口的方法"}},[t._v("#")]),t._v(" "),s("code",[t._v("Iterator")]),t._v("接口的方法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224190331.png",alt:"image-20201224190331573"}})]),t._v(" "),s("h3",{attrs:{id:"迭代器的执行原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代器的执行原理"}},[t._v("#")]),t._v(" 迭代器的执行原理")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224190414.png",alt:"image-20201224190414315"}})]),t._v(" "),s("p",[t._v("说明：假设当前集合有6个元素，当返回"),s("code",[t._v("iterator")]),t._v("对象时，指针就放第一个元素之前，而"),s("code",[t._v("iterator.next()")]),t._v("会将指针下移。"),s("strong",[t._v("在调用"),s("code",[t._v("iterator.next()")]),t._v("方法之前必须要调用"),s("code",[t._v("iterator.hasNext()")]),t._v("进行检测。若不调用，且下一条记录无效，直接调用"),s("code",[t._v("iterator.next()")]),t._v("会抛出"),s("code",[t._v("NoSuchElementException")]),t._v("异常。")])]),t._v(" "),s("p",[t._v("注意："),s("code",[t._v("Iterator")]),t._v("对象不是一个容器，只是一个迭代器，它不装任何东西，只是用来遍历的。")]),t._v(" "),s("h3",{attrs:{id:"remove-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-方法"}},[t._v("#")]),t._v(" "),s("code",[t._v("remove()")]),t._v("方法")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Iterator")]),t._v("接口"),s("code",[t._v("remove()")]),t._v("方法")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224191031.png",alt:"image-20201224191031200"}})]),t._v(" "),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("Iterator")]),t._v("可以删除集合的元素，但是是遍历过程中通过迭代器对象的"),s("code",[t._v("remove")]),t._v("方法，不是集合对象的"),s("code",[t._v("remove")]),t._v("方法。")])]),t._v(" "),s("li",[t._v("如果还未调用"),s("code",[t._v("next()")]),t._v("或在上一次调用"),s("code",[t._v("next()")]),t._v("方法之后已经调用了"),s("code",[t._v("remove")]),t._v("方法，再调用"),s("code",[t._v("remove")]),t._v("都会报"),s("code",[t._v("IllegalStateException")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"foreach循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach循环"}},[t._v("#")]),t._v(" "),s("code",[t._v("foreach")]),t._v("循环")]),t._v(" "),s("blockquote",[s("p",[t._v("使用"),s("code",[t._v("foreach")]),t._v("循环遍历集合元素")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Java 5.0 提供了"),s("code",[t._v("foreach")]),t._v("循环迭代访问"),s("code",[t._v("Collection")]),t._v("和数组。")]),t._v(" "),s("ul",[s("li",[t._v("所以又称为"),s("strong",[t._v("增强for循环")]),t._v("，原来的for循环称为"),s("strong",[t._v("普通for循环。")])])])]),t._v(" "),s("li",[s("p",[t._v("遍历操作不需获取"),s("code",[t._v("Collection")]),t._v("或数组的长度，无需使用索引访问元素。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("遍历集合的底层调用"),s("code",[t._v("Iterator")]),t._v("完成操作。")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("foreach")]),t._v("还可以用来遍历数组。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224191427.png",alt:"image-20201224191427620"}})])]),t._v(" "),s("h3",{attrs:{id:"练习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),s("p",[t._v("判断输出结果为何？")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CollectionTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str[i] = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("输出结果：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("s = java\ns = java\ns = java\ns = java\ns = java\nstr[i] = null\nstr[i] = null\nstr[i] = null\nstr[i] = null\nstr[i] = null\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("为什么？")]),t._v(" "),s("p",[s("strong",[t._v("因为增强for循环是每次新建一个引用s，当你在增强for循环内对引用s重新赋值时，只会改变引用s的值，原来数组中的值并不会改变。如果想要改变原来数组中的值，请用普通for循环。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);