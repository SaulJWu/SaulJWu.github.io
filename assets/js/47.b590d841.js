(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{658:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[t("strong",[s._v("面向对象的三大特征：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("封装 ("),t("code",[s._v("Encapsulation")]),s._v(")")])]),s._v(" "),t("li",[t("p",[s._v("继承 ("),t("code",[s._v("Inheritance")]),s._v(")")])]),s._v(" "),t("li",[t("p",[s._v("多态 ("),t("code",[s._v("Polymorphism")]),s._v(")")])])]),s._v(" "),t("p",[s._v("接下来我们学习继承。")]),s._v(" "),t("h2",{attrs:{id:"什么是继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是继承"}},[s._v("#")]),s._v(" 什么是继承？")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("extends")]),s._v("关键字来继承另一个类")]),s._v(" "),t("blockquote",[t("p",[s._v("语法格式")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Subclass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("Subclass：新建的类（正式名称叫作继承类或者子类）")]),s._v(" "),t("li",[s._v("extends：关键字")]),s._v(" "),t("li",[s._v("SuperClass：原始类（正式名称叫作基类、超类或父类）")])]),s._v(" "),t("h2",{attrs:{id:"为什么要有继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有继承"}},[s._v("#")]),s._v(" 为什么要有继承？")]),s._v(" "),t("p",[s._v("多个类中存在相同属性和行为时，将这些内容抽取到单独一个类中，那么多个类无需再定义这些属性和行为，只要继承那个类即可。")]),s._v(" "),t("p",[s._v("此处的多个类称为子类(派生类)，单独的这个类称为父类(基类或超类)。可以理解为:“子类is a 父类”。")]),s._v(" "),t("p",[s._v("在创建了一个类之后，即使另一个新类与其具有相似的功能，你还是得重新创建一个新类。但我们若能利用现成的数据类型，对其进行“克隆”，再根据情况进行添加和修改，情况就显得理想多了。“继承”正是针对这个目标而设计的。但继承并不完全等价于克隆。在继承过程中，若原始类（正式名称叫作基类、超类或父类）发生了变化，修改过的“克隆”类（正式名称叫作继承类或者子类）也会反映出这种变化。")]),s._v(" "),t("p",[t("strong",[s._v("作用：")])]),s._v(" "),t("ul",[t("li",[s._v("继承的出现减少了代码冗余，提高了代码的复用性")]),s._v(" "),t("li",[s._v("继承的出现，更有利于功能的扩展。")]),s._v(" "),t("li",[s._v("继承的出现让类与类之间产生了关系，提供了多态的前提。")])]),s._v(" "),t("h2",{attrs:{id:"如何使用继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用继承"}},[s._v("#")]),s._v(" 如何使用继承？")]),s._v(" "),t("ul",[t("li",[s._v("子类继承了父类，就继承了父类的方法和属性")]),s._v(" "),t("li",[s._v("在子类中，可以使用父类中定义的方法和属性，也可以创建新的属性和方法。")]),s._v(" "),t("li",[s._v("使用格式："),t("code",[s._v("对象.属性")]),s._v("或者"),t("code",[s._v("对象.方法")])]),s._v(" "),t("li",[s._v("在Java 中，继承的关键字用的是“extends”，即子类不是父类的子集，而是对父类的“扩展”。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//省略setter和getter")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//新的属性")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" score"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//新的方法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Study")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"学习..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//省略setter和getter")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      stu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//继承了父类的属性和方法，可以直接使用。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ul",[t("li",[s._v("子类不能直接"),t("code",[s._v("访问/调用")]),s._v("父类中私有的("),t("code",[s._v("private")]),s._v(")的成员变量和方法。虽然不能访问，但是还是可以继承父类中的所有成员变量和方法。")])]),s._v(" "),t("h2",{attrs:{id:"是一个-与-像是一个-的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是一个-与-像是一个-的关系"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://lingcoder.github.io/OnJava8/#/book/01-What-is-an-Object?id=quot%E6%98%AF%E4%B8%80%E4%B8%AAquot%E4%B8%8Equot%E5%83%8F%E6%98%AF%E4%B8%80%E4%B8%AAquot%E7%9A%84%E5%85%B3%E7%B3%BB",target:"_blank",rel:"noopener noreferrer"}},[s._v('"是一个"与"像是一个"的关系'),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v('对于继承可能会引发争论：继承应该只覆盖基类的方法(不应该添加基类中没有的方法)吗？如果这样的话，基类和派生类就是相同的类型了，因为它们具有相同的接口。这会造成，你可以用一个派生类对象完全替代基类对象，这叫作"纯粹替代"，也经常被称作"替代原则"。在某种意义上，这是一种处理继承的理想方式。我们经常把这种基类和派生类的关系称为是一个（'),t("code",[s._v("is-a")]),s._v('）关系，因为可以说"圆是一个形状"。判断是否继承，就看在你的类之间有无这种 is-a 关系。')]),s._v(" "),t("p",[s._v("有时你在派生类添加了新的接口元素，从而扩展接口。虽然新类型仍然可以替代基类，但是这种替代不完美，原因在于基类无法访问新添加的方法。这种关系称为像是一个("),t("code",[s._v("is-like-a")]),s._v(")关系。新类型不但拥有旧类型的接口，而且包含其他方法，所以不能说新旧类型完全相同")])]),s._v(" "),t("h2",{attrs:{id:"什么时候该使用继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么时候该使用继承"}},[s._v("#")]),s._v(" 什么时候该使用继承？")]),s._v(" "),t("p",[s._v("利用"),t("code",[s._v("is-a")]),s._v("判断， 该不该使用继承关系。")]),s._v(" "),t("p",[s._v("比如学生是人，那么Student 可以继承 Person。")]),s._v(" "),t("p",[s._v("比如dog is a Animal，那么可以使用继承关系。")]),s._v(" "),t("p",[s._v("比如储蓄卡是一种银行卡，那么可以使用继承关系。")]),s._v(" "),t("p",[s._v("比如cat is dog？那么就不应该使用继承关系。")]),s._v(" "),t("p",[s._v("当然，不单只考虑"),t("code",[s._v("is-a")]),s._v("来判断，还要根据实际业务场景来判断，具体问题具体分析，我上面说是"),t("strong",[s._v("可以继承")]),s._v("，而不是一定要继承，要分清楚。")]),s._v(" "),t("blockquote",[t("p",[s._v("Java只支持单继承和多层继承，不允许多重继承")])]),s._v(" "),t("p",[s._v("一个子类只能有一个父类。")]),s._v(" "),t("p",[s._v("一个父类可以派生出多个子类。")]),s._v(" "),t("h2",{attrs:{id:"单继承与多层继承举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单继承与多层继承举例"}},[s._v("#")]),s._v(" 单继承与多层继承举例")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201211143536.png",alt:"image-20201211143536292"}})]),s._v(" "),t("p",[s._v("多层继承，后面继承的类拥有前面所有继承的属性和方法。")]),s._v(" "),t("h2",{attrs:{id:"单继承结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单继承结构"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://lingcoder.github.io/OnJava8/#/book/01-What-is-an-Object?id=%E5%8D%95%E7%BB%A7%E6%89%BF%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[s._v("单继承结构"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("strong",[s._v("所有的类都直接或间接继承"),t("code",[s._v("Object")]),s._v("类")])]),s._v(" "),t("p",[s._v("如果没有显式声明一个类的父类的话，则此类直接继承"),t("code",[s._v("object")]),s._v("类")]),s._v(" "),t("blockquote",[t("p",[s._v("自从 C++ 引入以来，一个 OOP 问题变得尤为突出：是否所有的类都应该默认从一个基类继承呢？这个答案在 Java 中是肯定的（实际上，除 C++ 以外的几乎所有OOP语言中也是这样）。在 Java 中，这个最终基类的名字就是 "),t("code",[s._v("Object")]),s._v("。")]),s._v(" "),t("p",[s._v("Java 的单继承结构有很多好处。由于所有对象都具有一个公共接口，因此它们最终都属于同一个基类。相反的，对于 C++ 所使用的多继承的方案则是不保证所有的对象都属于同一个基类。从向后兼容的角度看，多继承的方案更符合 C 的模型，而且受限较少。")]),s._v(" "),t("p",[s._v("对于完全面向对象编程，我们必须要构建自己的层次结构，以提供与其他 OOP 语言同样的便利。我们经常会使用到新的类库和不兼容的接口。为了整合它们而花费大气力（有可能还要用上多继承）以获得 C++ 样的“灵活性”值得吗？如果从零开始，Java 这样的替代方案会是更好的选择。")]),s._v(" "),t("p",[s._v("另外，单继承的结构使得垃圾收集器的实现更为容易。这也是 Java 在 C++ 基础上的根本改进之一。")]),s._v(" "),t("p",[s._v("由于运行期的类型信息会存在于所有对象中，所以我们永远不会遇到判断不了对象类型的情况。这对于系统级操作尤其重要，例如"),t("a",{attrs:{href:"https://lingcoder.github.io/OnJava8/#/book/01-What-is-an-Object?id=%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[s._v("异常处理"),t("OutboundLink")],1),s._v("。同时，这也让我们的编程具有更大的灵活性。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);