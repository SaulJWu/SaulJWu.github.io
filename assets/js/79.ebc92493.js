(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{484:function(t,a,n){"use strict";n.r(a);var s=n(20),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"学习目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[t._v("#")]),t._v(" 学习目标")]),t._v(" "),n("ul",[n("li",[t._v("注解("),n("code",[t._v("Annotation")]),t._v(")概述")]),t._v(" "),n("li",[t._v("常见的"),n("code",[t._v("Annotation")]),t._v("示例")]),t._v(" "),n("li",[t._v("自定义"),n("code",[t._v("Annotation")])]),t._v(" "),n("li",[t._v("JDK中的元注解")]),t._v(" "),n("li",[t._v("利用反射获取注解信息（在反射部分涉及）")]),t._v(" "),n("li",[t._v("JDK 8中注解的新特性")])]),t._v(" "),n("h2",{attrs:{id:"注解-annotation-概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注解-annotation-概述"}},[t._v("#")]),t._v(" 注解("),n("code",[t._v("Annotation")]),t._v(")概述")]),t._v(" "),n("ul",[n("li",[t._v("从JDK 5.0 开始, Java 增加了对元数据("),n("code",[t._v("MetaData")]),t._v(") 的支持, 也就是"),n("code",[t._v("Annotation")]),t._v("(注解)")]),t._v(" "),n("li",[n("code",[t._v("Annotation")]),t._v(" 其实就是代码里的"),n("strong",[t._v("特殊标记")]),t._v(", 这些标记可以在编译, 类加载, 运行时被读取, 并执行相应的处理。\n"),n("ul",[n("li",[t._v("通过使用"),n("code",[t._v("Annotation")]),t._v(", 程序员可以在不改变原有逻辑的情况下, 在源文件中嵌入一些补充信息。")]),t._v(" "),n("li",[t._v("代码分析工具、开发工具和部署工具可以通过这些补充信息进行验证或者进行部署。")])])]),t._v(" "),n("li",[n("code",[t._v("Annotation")]),t._v(" 可以像修饰符一样被使用, 可用于修饰包,类, 构造器, 方法, 成员变量, 参数, 局部变量的声明, 这些信息被保存在"),n("code",[t._v("Annotation")]),t._v(" 的"),n("code",[t._v("name=value")]),t._v(" 对中。")]),t._v(" "),n("li",[t._v("在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在"),n("code",[t._v("JavaEE")]),t._v("/"),n("code",[t._v("Android")]),t._v("中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替"),n("code",[t._v("JavaEE")]),t._v("旧版中所遗留的繁冗代码和"),n("code",[t._v("XML")]),t._v("配置等。")]),t._v(" "),n("li",[t._v("未来的开发模式都是基于注解的，"),n("code",[t._v("JPA")]),t._v("是基于注解的，"),n("code",[t._v("Spring2.5")]),t._v("以上都是基于注解的，"),n("code",[t._v("Hibernate3.x")]),t._v("以后也是基于注解的，现在的"),n("code",[t._v("Struts2")]),t._v("有一部分也是基于注解的了，注解是一种趋势，一定程度上可以说："),n("strong",[t._v("框架= 注解+ 反射+ 设计模式")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"常见的annotation示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的annotation示例"}},[t._v("#")]),t._v(" 常见的"),n("code",[t._v("Annotation")]),t._v("示例")]),t._v(" "),n("ul",[n("li",[t._v("使用"),n("code",[t._v("Annotation")]),t._v(" 时要在其前面增加@ 符号, 并把该"),n("code",[t._v("Annotation")]),t._v(" 当成一个修饰符使用。用于修饰它支持的程序元素")])]),t._v(" "),n("h3",{attrs:{id:"示例一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例一"}},[t._v("#")]),t._v(" 示例一")]),t._v(" "),n("blockquote",[n("p",[t._v("示例一：生成文档相关的注解")])]),t._v(" "),n("ul",[n("li",[t._v("@author标明开发该类模块的作者，多个作者之间使用,分割")]),t._v(" "),n("li",[t._v("@version标明该类模块的版本")]),t._v(" "),n("li",[t._v("@see参考转向，也就是相关主题")]),t._v(" "),n("li",[t._v("@since从哪个版本开始增加的")]),t._v(" "),n("li",[t._v("@param对方法中某参数的说明，如果没有参数就不能写")]),t._v(" "),n("li",[t._v("@return对方法返回值的说明，如果方法的返回值类型是void就不能写")]),t._v(" "),n("li",[t._v("@exception对方法可能抛出的异常进行说明，如果方法没有用throws显式抛出的异常就不能写")])]),t._v(" "),n("p",[n("strong",[t._v("注意：")])]),t._v(" "),n("ul",[n("li",[t._v("@param@return和@exception这三个标记都是只用于方法的。")]),t._v(" "),n("li",[t._v("@param的格式要求：@param形参名形参类型形参说明")]),t._v(" "),n("li",[t._v("@return的格式要求：@return返回值类型返回值说明")]),t._v(" "),n("li",[t._v("@exception的格式要求：@exception异常类型异常说明")]),t._v(" "),n("li",[t._v("@param和@exception可以并列多个")])]),t._v(" "),n("h3",{attrs:{id:"示例二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例二"}},[t._v("#")]),t._v(" 示例二")]),t._v(" "),n("blockquote",[n("p",[t._v("示例二：在编译时进行格式检查(JDK内置的三个基本注解)")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("@Override")]),t._v(": 限定重写父类方法, 该注解只能用于方法")]),t._v(" "),n("li",[n("code",[t._v("@Deprecated")]),t._v(": 用于表示所修饰的元素(类, 方法等)已过时。通常是因为所修饰的结构危险或存在更好的选择")]),t._v(" "),n("li",[n("code",[t._v("@SuppressWarnings")]),t._v(": 抑制编译器警告")])]),t._v(" "),n("h3",{attrs:{id:"示例三"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例三"}},[t._v("#")]),t._v(" 示例三")]),t._v(" "),n("blockquote",[n("p",[t._v("跟踪代码依赖性，实现替代配置文件功能")])]),t._v(" "),n("p",[t._v("Servlet3.0提供了注解(annotation),使得不再需要在web.xml文件中进行Servlet的部署。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224010548.png",alt:"image-20201224010548260"}})]),t._v(" "),n("h3",{attrs:{id:"示例四"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例四"}},[t._v("#")]),t._v(" 示例四")]),t._v(" "),n("blockquote",[n("p",[t._v("spring框架中关于“事务”的管理")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224010621.png",alt:"image-20201224010621852"}})]),t._v(" "),n("h2",{attrs:{id:"自定义annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义annotation"}},[t._v("#")]),t._v(" 自定义Annotation")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("1、定义新的"),n("code",[t._v("Annotation")]),t._v("类型使用"),n("code",[t._v("@interface")]),t._v("关键字")]),t._v(" "),n("ul",[n("li",[t._v("自定义注解自动继承了"),n("code",[t._v("java.lang.annotation.Annotation")]),t._v("接口")])]),t._v(" "),n("p",[t._v("2、"),n("code",[t._v("Annotation")]),t._v("的成员变量在"),n("code",[t._v("Annotation")]),t._v("定义中以无参数方法的形式来声明。其方法名和返回值定义了该成员的名字和类型。我们称为配置参数。")]),t._v(" "),n("ul",[n("li",[t._v("类型只能是八种基本数据类型、"),n("code",[t._v("String类型")]),t._v("、"),n("code",[t._v("Class类型")]),t._v("、"),n("code",[t._v("enum类型")]),t._v("、"),n("code",[t._v("Annotation类型")]),t._v("、"),n("strong",[t._v("以上所有类型的数组")]),t._v("。")])])]),t._v(" "),n("li",[n("p",[t._v("3、可以在定义"),n("code",[t._v("Annotation")]),t._v("的成员变量时为其指定初始值,指定成员变量的初始值可使用"),n("code",[t._v("default关键字")])]),t._v(" "),n("ul",[n("li",[t._v("如果只有一个参数成员，建议使用"),n("code",[t._v("参数名为value")])]),t._v(" "),n("li",[t._v("如果定义的注解含有配置参数，那么使用时必须指定参数值，除非它有默认值。格式是"),n("code",[t._v("参数名=参数值")]),t._v("，如果只有一个参数成员，且名称为"),n("code",[t._v("value")]),t._v("，可以省略"),n("code",[t._v("value=")])])])]),t._v(" "),n("li",[n("p",[t._v("4、没有成员定义的"),n("code",[t._v("Annotation")]),t._v("称为"),n("strong",[t._v("标记")]),t._v("；包含成员变量的"),n("code",[t._v("Annotation")]),t._v("称为元数据"),n("code",[t._v("Annotation")])])])]),t._v(" "),n("p",[t._v("**注意：**自定义注解必须配上注解的信息处理流程才有意义。")]),t._v(" "),n("blockquote",[n("p",[t._v("实例")])]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAnnoation")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@MyAnnoation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" clazz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Annotation")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" clazz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAnnotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAnnoation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAnnoation")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAnnoation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" info "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info = "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("info = test\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h2",{attrs:{id:"jdk中的元注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk中的元注解"}},[t._v("#")]),t._v(" JDK中的元注解")]),t._v(" "),n("ul",[n("li",[t._v("JDK 的"),n("code",[t._v("元Annotation")]),t._v(" 用于修饰其他"),n("code",[t._v("Annotation")]),t._v(" 定义")]),t._v(" "),n("li",[t._v("JDK5.0提供了4个标准的"),n("code",[t._v("meta-annotation")]),t._v("类型，分别是：\n"),n("ul",[n("li",[n("code",[t._v("Retention")])]),t._v(" "),n("li",[n("code",[t._v("Target")])]),t._v(" "),n("li",[n("code",[t._v("Documented")])]),t._v(" "),n("li",[n("code",[t._v("Inherited")])])])])]),t._v(" "),n("h3",{attrs:{id:"retention"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#retention"}},[t._v("#")]),t._v(" "),n("code",[t._v("@Retention")])]),t._v(" "),n("p",[t._v("只能用于修饰一个"),n("code",[t._v("Annotation")]),t._v(" 定义, 用于指定该"),n("code",[t._v("Annotation")]),t._v(" 的生命周期, "),n("code",[t._v("@Rentention")]),t._v("包含一个"),n("code",[t._v("RetentionPolicy")]),t._v("类型的成员变量, 使用"),n("code",[t._v("@Rentention")]),t._v("时必须为该"),n("code",[t._v("value")]),t._v(" 成员变量指定值:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("RetentionPolicy.SOURCE")]),t._v(":在源文件中有效（即源文件保留），编译器直接丢弃这种策略的注释")]),t._v(" "),n("li",[n("code",[t._v("RetentionPolicy.CLASS")]),t._v(":在class文件中有效（即class保留），当运行Java 程序时, JVM 不会保留注解。这是"),n("strong",[t._v("默认值")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("RetentionPolicy.RUNTIME")]),t._v(":在运行时有效（即运行时保留），当运行Java 程序时, JVM 会保留注释。程序可以通过反射获取该注释。")])]),t._v(" "),n("h3",{attrs:{id:"target"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[t._v("#")]),t._v(" "),n("code",[t._v("@Target")])]),t._v(" "),n("p",[t._v("用于修饰"),n("code",[t._v("Annotation")]),t._v(" 定义, 用于指定被修饰的"),n("code",[t._v("Annotation")]),t._v(" 能用于修饰哪些程序元素。"),n("code",[t._v("@Target")]),t._v(" 也包含一个名为"),n("code",[t._v("value")]),t._v("的成员变量")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224013218.png",alt:"image-20201224013218064"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224013350.png",alt:"image-20201224013350437"}})]),t._v(" "),n("h3",{attrs:{id:"documented"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#documented"}},[t._v("#")]),t._v(" "),n("code",[t._v("@Documented")])]),t._v(" "),n("p",[t._v("用于指定被该元Annotation 修饰的Annotation 类将被javadoc工具提取成文档。默认情况下，javadoc是不包括注解的。")]),t._v(" "),n("p",[n("strong",[t._v("定义为Documented的注解必须设置Retention值为RUNTIME")])]),t._v(" "),n("h3",{attrs:{id:"inherited"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inherited"}},[t._v("#")]),t._v(" "),n("code",[t._v("@Inherited")])]),t._v(" "),n("ul",[n("li",[t._v("被它修饰的"),n("code",[t._v("Annotation")]),t._v(" 将具有继承性。")]),t._v(" "),n("li",[t._v("如果某个类使用了被"),n("code",[t._v("@Inherited")]),t._v(" 修饰的"),n("code",[t._v("Annotation")]),t._v(", 则其子类将自动具有该注解。\n"),n("ul",[n("li",[t._v("比如：如果把标有"),n("code",[t._v("@Inherited")]),t._v("注解的自定义的注解标注在类级别上，子类则可以继承父类类级别的注解")]),t._v(" "),n("li",[t._v("实际应用中，使用较少")])])])]),t._v(" "),n("h3",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),n("p",[t._v("自定义注解注释通常都指明"),n("code",[t._v("@Retention")]),t._v("和"),n("code",[t._v("@Target")])]),t._v(" "),n("h2",{attrs:{id:"利用反射获取注解信息-在反射部分涉及"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用反射获取注解信息-在反射部分涉及"}},[t._v("#")]),t._v(" 利用反射获取注解信息（在反射部分涉及）")]),t._v(" "),n("ul",[n("li",[t._v("JDK 5.0 在"),n("code",[t._v("java.lang.reflect")]),t._v("包下新增了"),n("code",[t._v("AnnotatedElement")]),t._v("接口, 该接口代表程序中可以接受注解的程序元素")]),t._v(" "),n("li",[t._v("当一个"),n("code",[t._v("Annotation")]),t._v(" 类型被定义为运行时"),n("code",[t._v("Annotation")]),t._v(" 后, 该注解才是运行时可见, 当"),n("code",[t._v("class")]),t._v(" 文件被载入时保存在"),n("code",[t._v("class")]),t._v(" 文件中的"),n("code",[t._v("Annotation")]),t._v(" 才会被虚拟机读取")]),t._v(" "),n("li",[t._v("程序可以调用"),n("code",[t._v("AnnotatedElement")]),t._v("对象的如下方法来访问"),n("code",[t._v("Annotation")]),t._v(" 信息")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224013938.png",alt:"image-20201224013938152"}})]),t._v(" "),n("h2",{attrs:{id:"jdk-8中注解的新特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk-8中注解的新特性"}},[t._v("#")]),t._v(" JDK 8中注解的新特性")]),t._v(" "),n("p",[t._v("Java 8对注解处理提供了两点改进："),n("strong",[t._v("可重复的注解")]),t._v("及可用于"),n("strong",[t._v("类型的注解")]),t._v("。此外，反射也得到了加强，在Java8中能够得到方法参数的名称。这会简化标注在方法参数上的注解。")]),t._v(" "),n("h3",{attrs:{id:"repeatable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#repeatable"}},[t._v("#")]),t._v(" "),n("code",[t._v("@Repeatable")])]),t._v(" "),n("ul",[n("li",[t._v("在类名上声明，成员值为"),n("code",[t._v("类名.class")])]),t._v(" "),n("li",[t._v("新类名的"),n("code",[t._v("@Target")]),t._v("和"),n("code",[t._v("@retention")]),t._v("、"),n("code",[t._v("@Inherited")]),t._v("等元注解都要与以前保持一致")])]),t._v(" "),n("p",[n("strong",[t._v("可重复的注解"),n("code",[t._v("@Repeatable")]),t._v("示例：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224014112.png",alt:"image-20201224014112554"}})]),t._v(" "),n("h3",{attrs:{id:"类型的注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型的注解"}},[t._v("#")]),t._v(" 类型的注解")]),t._v(" "),n("p",[t._v("JDK1.8之后，关于元注解"),n("code",[t._v("@Target")]),t._v("的参数类型"),n("code",[t._v("ElementType")]),t._v("枚举值多了两个：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("TYPE_PARAMETER")])]),t._v(" "),n("li",[n("code",[t._v("TYPE_USE")])])]),t._v(" "),n("p",[t._v("在Java8之前，注解只能是在声明的地方所使用，Java8开始，注解可以应用在任何地方。")]),t._v(" "),n("p",[n("strong",[t._v("说明：")])]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("ElementType.TYPE_PARAMETER")]),t._v("表示该注解能写在类型变量的声明语句中（如：泛型声明）。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("ElementType.TYPE_USE")]),t._v("表示该注解能写在使用类型的任何语句中。")])])]),t._v(" "),n("p",[n("code",[t._v("ElementType.TYPE_PARAMETER")]),t._v("示例")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224014847.png",alt:"image-20201224014847787"}})]),t._v(" "),n("p",[n("code",[t._v("ElementType.TYPE_USE")]),t._v("示例")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224014928.png",alt:"image-20201224014928702"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);