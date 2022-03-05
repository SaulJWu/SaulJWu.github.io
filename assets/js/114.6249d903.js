(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{549:function(t,a,s){"use strict";s.r(a);var r=s(20),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("Reader")]),t._v("是带编码转换器的"),s("code",[t._v("InputStream")]),t._v("，它把"),s("code",[t._v("byte")]),t._v("转换为"),s("code",[t._v("char")]),t._v("，而"),s("code",[t._v("Writer")]),t._v("就是带编码转换器的"),s("code",[t._v("OutputStream")]),t._v("，它把"),s("code",[t._v("char")]),t._v("转换为"),s("code",[t._v("byte")]),t._v("并输出。")]),t._v(" "),s("p",[s("code",[t._v("Writer")]),t._v("和"),s("code",[t._v("OutputStream")]),t._v("的区别如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("OutputStream")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Writer")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("字节流，以"),s("code",[t._v("byte")]),t._v("为单位")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("字符流，以"),s("code",[t._v("char")]),t._v("为单位")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("写入字节（0~255）："),s("code",[t._v("void write(int b)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("写入字符（0~65535）："),s("code",[t._v("void write(int c)")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("写入字节数组："),s("code",[t._v("void write(byte[] b)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("写入字符数组："),s("code",[t._v("void write(char[] c)")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("无对应方法")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("写入String："),s("code",[t._v("void write(String s)")])])])])]),t._v(" "),s("p",[s("code",[t._v("Writer")]),t._v("是所有字符输出流的超类，它提供的方法主要有：")]),t._v(" "),s("ul",[s("li",[t._v("写入一个字符（0~65535）："),s("code",[t._v("void write(int c)")]),t._v("；")]),t._v(" "),s("li",[t._v("写入字符数组的所有字符："),s("code",[t._v("void write(char[] c)")]),t._v("；")]),t._v(" "),s("li",[t._v("写入String表示的所有字符："),s("code",[t._v("void write(String s)")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"filewriter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filewriter"}},[t._v("#")]),t._v(" FileWriter")]),t._v(" "),s("p",[s("code",[t._v("FileWriter")]),t._v("就是向文件中写入字符流的"),s("code",[t._v("Writer")]),t._v("。它的使用方法和"),s("code",[t._v("FileReader")]),t._v("类似：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Writer")]),t._v(" writer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileWriter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readme.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardCharsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UTF_8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'H'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入单个字符")]),t._v("\n    writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toCharArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入char[]")]),t._v("\n    writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入String")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("和FileOutputStream类似，也有几个注意点。")]),t._v(" "),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[t._v("定义文件路径时，注意：可以用“/”或者“\\”。")]),t._v(" "),s("li",[t._v("在写入一个文件时，如果使用构造器FileWriter(file)，"),s("strong",[t._v("如果目录下有同名文件将被覆盖。")])]),t._v(" "),s("li",[t._v("如果使用构造器FileWriter(file,true)`，"),s("strong",[t._v("如果目录下的同名文件不会被覆盖，在文件内容末尾追加内容。")])])]),t._v(" "),s("h2",{attrs:{id:"chararraywriter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chararraywriter"}},[t._v("#")]),t._v(" CharArrayWriter")]),t._v(" "),s("p",[s("code",[t._v("CharArrayWriter")]),t._v("可以在内存中创建一个"),s("code",[t._v("Writer")]),t._v("，它的作用实际上是构造一个缓冲区，可以写入"),s("code",[t._v("char")]),t._v("，最后得到写入的"),s("code",[t._v("char[]")]),t._v("数组，这和"),s("code",[t._v("ByteArrayOutputStream")]),t._v("非常类似：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharArrayWriter")]),t._v(" writer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharArrayWriter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("66")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("67")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toCharArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { 'A', 'B', 'C' }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"stringwriter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stringwriter"}},[t._v("#")]),t._v(" StringWriter")]),t._v(" "),s("p",[s("code",[t._v("StringWriter")]),t._v("也是一个基于内存的"),s("code",[t._v("Writer")]),t._v("，它和"),s("code",[t._v("CharArrayWriter")]),t._v("类似。实际上，"),s("code",[t._v("StringWriter")]),t._v("在内部维护了一个"),s("code",[t._v("StringBuffer")]),t._v("，并对外提供了"),s("code",[t._v("Writer")]),t._v("接口。")]),t._v(" "),s("h2",{attrs:{id:"outputstreamwriter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputstreamwriter"}},[t._v("#")]),t._v(" OutputStreamWriter")]),t._v(" "),s("p",[t._v("除了"),s("code",[t._v("CharArrayWriter")]),t._v("和"),s("code",[t._v("StringWriter")]),t._v("外，普通的Writer实际上是基于"),s("code",[t._v("OutputStream")]),t._v("构造的，它接收"),s("code",[t._v("char")]),t._v("，然后在内部自动转换成一个或多个"),s("code",[t._v("byte")]),t._v("，并写入"),s("code",[t._v("OutputStream")]),t._v("。因此，"),s("code",[t._v("OutputStreamWriter")]),t._v("就是一个将任意的"),s("code",[t._v("OutputStream")]),t._v("转换为"),s("code",[t._v("Writer")]),t._v("的转换器：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Writer")]),t._v(" writer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OutputStreamWriter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readme.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("上述代码实际上就是"),s("code",[t._v("FileWriter")]),t._v("的一种实现方式。这和上一节的"),s("code",[t._v("InputStreamReader")]),t._v("是一样的。也称之为转换流。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20210107210705.png",alt:"image-20210107210705766"}})]),t._v(" "),s("h2",{attrs:{id:"bufferedwriter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bufferedwriter"}},[t._v("#")]),t._v(" BufferedWriter")]),t._v(" "),s("p",[t._v("BufferedWriter是一个缓冲流，它的读写效率是比FileWriter快的，一般开发中我们都使用缓冲流。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[s("code",[t._v("Writer")]),t._v("定义了所有字符输出流的超类：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("FileWriter")]),t._v("实现了文件字符流输出；")]),t._v(" "),s("li",[s("code",[t._v("CharArrayWriter")]),t._v("和"),s("code",[t._v("StringWriter")]),t._v("在内存中模拟一个字符流输出。")])]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("try (resource)")]),t._v("保证"),s("code",[t._v("Writer")]),t._v("正确关闭。")]),t._v(" "),s("p",[s("code",[t._v("Writer")]),t._v("是基于"),s("code",[t._v("OutputStream")]),t._v("构造的，可以通过"),s("code",[t._v("OutputStreamWriter")]),t._v("将"),s("code",[t._v("OutputStream")]),t._v("转换为"),s("code",[t._v("Writer")]),t._v("，转换时需要指定编码。")])])}),[],!1,null,null,null);a.default=e.exports}}]);