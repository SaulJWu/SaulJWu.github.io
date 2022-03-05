(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{734:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("从Java 7开始，提供了"),a("code",[t._v("Files")]),t._v("和"),a("code",[t._v("Paths")]),t._v("这两个工具类，能极大地方便我们读写文件。")]),t._v(" "),a("p",[t._v("在了解这两个工具类之前，我们先了解一下nio。nio是新的IO API，它是非阻塞的，原先之前我们学的IO都是阻塞的，后面网络编程就会体现出来。")]),t._v(" "),a("h2",{attrs:{id:"nio概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nio概述"}},[t._v("#")]),t._v(" NIO概述")]),t._v(" "),a("p",[t._v("Java NIO (New IO，Non-Blocking IO)是从Java 1.4版本开始引入的一套新的IO API，可以替代标准的Java IO API。NIO与原来的IO有同样的作用和目的，但是使用的方式完全不同，NIO支持面向"),a("strong",[t._v("缓冲区")]),t._v("的(IO是"),a("strong",[t._v("面向流")]),t._v("的)、基于通道的IO操作。"),a("strong",[t._v("NIO将以更加高效的方式进行文件的读写操作。")])]),t._v(" "),a("p",[t._v("Java API中提供了两套NIO，一套是针对标准输入输出NIO，另一套就是网络编程NIO。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("java.nio.channels.Channel")]),t._v(" "),a("ul",[a("li",[t._v("|-----FileChannel:处理本地文件")]),t._v(" "),a("li",[t._v("|-----SocketChannel：TCP网络编程的客户端的Channel")]),t._v(" "),a("li",[t._v("|-----ServerSocketChannel:TCP网络编程的服务器端的Channel")])])]),t._v(" "),a("li",[a("p",[t._v("|-----DatagramChannel：UDP网络编程中发送端和接收端的Channel")])])]),t._v(" "),a("p",[t._v("io都是基于流实现的，而nio都是基于Channel实现的。")]),t._v(" "),a("h2",{attrs:{id:"nio-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nio-2"}},[t._v("#")]),t._v(" NIO.2")]),t._v(" "),a("p",[t._v("随着JDK 7 的发布，Java对NIO进行了极大的扩展，增强了对文件处理和文件系统特性的支持，以至于我们称他们为NIO.2。因为NIO 提供的一些功能，NIO已经成为文件处理中越来越重要的部分。")]),t._v(" "),a("p",[t._v("早期的Java只提供了一个File类来访问文件系统，但File类的功能比较有限，所提供的方法性能也不高。而且，"),a("strong",[t._v("大多数方法在出错时仅返回失败，并不会提供异常信息。")])]),t._v(" "),a("p",[t._v("NIO. 2为了弥补这种不足，引入了"),a("code",[t._v("Path接口")]),t._v("，代表一个平台无关的平台路径，描述了目录结构中文件的位置。"),a("strong",[t._v("Path可以看成是File类的升级版本，实际引用的资源也可以不存在。")])]),t._v(" "),a("ul",[a("li",[t._v("以前的IO操作都是这样写的：")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),t._v(" file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("现在Java7 中，我们可以这样写：")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Path")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("同时，NIO.2在"),a("code",[t._v("java.nio.file")]),t._v("包下还提供了"),a("code",[t._v("Files")]),t._v("、"),a("code",[t._v("Paths")]),t._v("工具类，Files包含了大量静态的工具方法来操作文件；Paths则包含了两个返回Path的静态工厂方法。")]),t._v(" "),a("p",[t._v("Paths 类提供的静态get() 方法用来获取Path 对象：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("static Path get(String first, String ... more)")]),t._v(": 用于将多个字符串串连成路径")]),t._v(" "),a("li",[a("code",[t._v("static Path get(URI uri)")]),t._v(": 返回指定uri对应的Path路径")])]),t._v(" "),a("h2",{attrs:{id:"path接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path接口"}},[t._v("#")]),t._v(" Path接口")]),t._v(" "),a("p",[t._v("下面是Path常用接口")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("String toString()")]),t._v("：返回调用Path 对象的字符串表示形式")]),t._v(" "),a("li",[a("code",[t._v("boolean startsWith(String path)")]),t._v(" : 判断是否以path 路径开始")]),t._v(" "),a("li",[a("code",[t._v("boolean endsWith(String path)")]),t._v(" : 判断是否以path 路径结束")]),t._v(" "),a("li",[a("code",[t._v("boolean isAbsolute()")]),t._v(" : 判断是否是绝对路径")]),t._v(" "),a("li",[a("code",[t._v("Path getParent()")]),t._v(" ：返回Path对象包含整个路径，不包含Path 对象指定的文件路径")]),t._v(" "),a("li",[a("code",[t._v("Path getRoot()")]),t._v(" ：返回调用Path 对象的根路径")]),t._v(" "),a("li",[a("code",[t._v("Path getFileName()")]),t._v(": 返回与调用Path 对象关联的文件名")]),t._v(" "),a("li",[a("code",[t._v("int getNameCount()")]),t._v(": 返回Path 根目录后面元素的数量")]),t._v(" "),a("li",[a("code",[t._v("Path getName(int idx)")]),t._v(": 返回指定索引位置idx 的路径名称")]),t._v(" "),a("li",[a("code",[t._v("Path toAbsolutePath()")]),t._v(": 作为绝对路径返回调用Path 对象")]),t._v(" "),a("li",[a("code",[t._v("Path resolve(Path p)")]),t._v(":合并两个路径，返回合并后的路径对应的Path对象")]),t._v(" "),a("li",[a("code",[t._v("File toFile()")]),t._v(": 将Path转化为File类的对象\n"),a("ul",[a("li",[a("code",[t._v("Path toPath()")]),t._v("：File也可以转换为Path类的对象。")])])])]),t._v(" "),a("h2",{attrs:{id:"files类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files类"}},[t._v("#")]),t._v(" Files类")]),t._v(" "),a("p",[t._v("java.nio.file.Files 用于操作文件或目录的工具类。")]),t._v(" "),a("p",[t._v("例如，我们要把一个文件的全部内容读取为一个"),a("code",[t._v("byte[]")]),t._v("，可以这么写：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAllBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果是文本文件，可以把一个文件的全部内容读取为"),a("code",[t._v("String")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认使用UTF-8编码读取:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" content1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可指定编码:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" content2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardCharsets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ISO_8859_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按行读取并返回每行内容:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" lines "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAllLines")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("写入文件也非常方便：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入二进制文件:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入文本并指定编码:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文本内容..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardCharsets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ISO_8859_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按行写入文本:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" lines "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("此外，"),a("code",[t._v("Files")]),t._v("工具类还有"),a("code",[t._v("copy()")]),t._v("、"),a("code",[t._v("delete()")]),t._v("、"),a("code",[t._v("exists()")]),t._v("、"),a("code",[t._v("move()")]),t._v("等快捷方法操作文件和目录。这里就不一一展开去测试了，等后面学到框架时，需要用到时，再来查看API足以。")]),t._v(" "),a("p",[t._v("最后需要特别注意的是，"),a("code",[t._v("Files")]),t._v("提供的读写方法，受内存限制，只能读写小文件，例如配置文件等，不可一次读入几个G的大文件。读写大型文件仍然要使用文件流，每次只读写一部分文件内容。")]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("对于简单的"),a("strong",[t._v("小文件")]),t._v("读写操作，可以使用"),a("code",[t._v("Files")]),t._v("工具类简化代码。")])])}),[],!1,null,null,null);s.default=e.exports}}]);