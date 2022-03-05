(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{630:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"字符类型-char"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符类型-char"}},[s._v("#")]),s._v(" 字符类型：char")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("char")]),s._v("型数据用来表示通常意义上的“字符”")]),s._v(" "),a("li",[s._v("一个字符占用2个字节")]),s._v(" "),a("li",[s._v("java中所有的字符都使用Unicode编码，故一个字符可以存储一个字母，或一个汉字，或其他书面语的一个字符。")])]),s._v(" "),a("h2",{attrs:{id:"表现形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表现形式"}},[s._v("#")]),s._v(" 表现形式")]),s._v(" "),a("p",[s._v("字符型的变量有三种表现形式：")]),s._v(" "),a("ul",[a("li",[s._v("字符常量是用单引号('')括起来的单个字符。")])]),s._v(" "),a("p",[s._v("例如："),a("code",[s._v("char c1 = 'a';")]),s._v(" , "),a("code",[s._v("char c2 = '中';")]),s._v("  , "),a("code",[s._v("char c3 = '9';")])]),s._v(" "),a("ul",[a("li",[s._v("Java中还允许使用转义符"),a("code",[s._v("'\\'")]),s._v("来将气候的字符转变位特殊字符型常量。")])]),s._v(" "),a("p",[s._v("例如："),a("code",[s._v("char c3 = '\\n';")]),s._v(" //"),a("code",[s._v("'\\n'")]),s._v("表示换行符，"),a("code",[s._v("'\\t'")]),s._v("表示制表符。")]),s._v(" "),a("ul",[a("li",[s._v("直接使用"),a("code",[s._v("Unicode值")]),s._v("来表示字符型常量。")])]),s._v(" "),a("p",[s._v("例如： "),a("code",[s._v("'\\uXXXX'")]),s._v("。其中，XXXX代表一个十六进制整数。如："),a("code",[s._v("\\u000a")]),s._v("表示"),a("code",[s._v("\\n")]),s._v("。")]),s._v(" "),a("ul",[a("li",[s._v("char类型是可以进行运算的。因为它都对应有"),a("code",[s._v("Unicode码")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'AB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//换行符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//hello")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//world")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'\\t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//制表符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//hello\t\tworld")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'\\u0043'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// C")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"ascii-码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ascii-码"}},[s._v("#")]),s._v(" ASCII 码")]),s._v(" "),a("ul",[a("li",[s._v("在计算机内部，所有数据都使用"),a("strong",[s._v("二进制")]),s._v("表示。每一个二进制位("),a("code",[s._v("bit")]),s._v(")有"),a("code",[s._v("0")]),s._v("和"),a("code",[s._v("1")]),s._v("两种状态，因此8个二进制位就可以组合出"),a("strong",[s._v("256种")]),s._v("状态，这被称为一个字节("),a("code",[s._v("byte")]),s._v(")。一个字节一共可以用来表示236种不同的状态，每一个状态对应一个符号，就是256个符号，从00000000到11111111.")]),s._v(" "),a("li",[s._v("ASCII码：上个世界60年代，美国制定了一套字符编码，对英语字符与二进制之间的关系，做了统一规定。这被称为ASCII码。ASCII码一共规定了"),a("strong",[s._v("128个")]),s._v('字符的i编码，比如空格"'),a("code",[s._v("SPACE")]),s._v('"是32(二进制00100000)，大写的字母A是65(二进制01000001)。这128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面7位，最前面的1位统一规定为0。')]),s._v(" "),a("li",[s._v("特点：\n"),a("ul",[a("li",[s._v("不能表示所有字符。")]),s._v(" "),a("li",[s._v("现同的编码表示的字符不一样：比如，130在法语编码种代表了"),a("code",[s._v("é")]),s._v("，在希伯来语编码中代表了字母"),a("code",[s._v("Gimel")]),s._v(" ("),a("code",[s._v("ג")]),s._v(")")])])])]),s._v(" "),a("h2",{attrs:{id:"unicdoe编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicdoe编码"}},[s._v("#")]),s._v(" Unicdoe编码")]),s._v(" "),a("ul",[a("li",[s._v("乱码：世界上存在着多种编码方式，同一个二进制数字可以被解释成不同的符号。因此，要想打开一个文本文件，就必须知道它的编码方式，否则用错误的编码方式解读，就会出现乱码。")]),s._v(" "),a("li",[s._v("Unicode：一种编码，将世界上所有的符号都纳入其中。每一个符号都给予一个独一无二的编码，使用Unicode没有乱码的问题。")]),s._v(" "),a("li",[s._v("Unicode的缺点：Unicode只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储；无法区别Unicode和ASCII；计算机无法区分三个字节表示一个符号还是分别表示三个符号。另外，我们知道，英文字母只用了一个字节表示就足够了，如果unicode统一规定，每个符号用三个或四个字节来表示，那么每个英文字母前都必然有二到三个字节是0，这对于存储空间来说是极大的浪费。")])]),s._v(" "),a("h2",{attrs:{id:"utf-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf-8"}},[s._v("#")]),s._v(" UTF-8")]),s._v(" "),a("ul",[a("li",[s._v("UTF-8是在互联网上使用最广的一种Unicode的实现方式。")]),s._v(" "),a("li",[s._v("UTF-8是一种编程的编码方式。它可以使用1-6个字节表示一个符号，根据不同的符号而变化字节长度。")]),s._v(" "),a("li",[s._v("UTF-8的编码规则：\n"),a("ul",[a("li",[s._v("对于单字节的UTF-8编码，该字节的最高位为0，其余7位用来对字符进行编码（等沟通与ASCII码）。")]),s._v(" "),a("li",[s._v('对于多字节的UTF-8编码，如果编码包含n个字符，那么第一个字节的前n位位为1，第一个字节的n+1位位0，该字节的剩余各位用来对字符进行编码。在第一个字节之后的所有的字节，都是最高两位位"10"，其余6位用来对字符进行编码。')])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);