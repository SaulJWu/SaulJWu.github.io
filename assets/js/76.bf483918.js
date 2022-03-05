(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{568:function(t,i,e){"use strict";e.r(i);var a=e(15),v=Object(a.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"system类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system类"}},[t._v("#")]),t._v(" System类")]),t._v(" "),e("ul",[e("li",[t._v("System类代表系统，系统级的很多属性和控制方法都放置在该类的内部。该类位于"),e("code",[t._v("java.lang")]),t._v("包。")]),t._v(" "),e("li",[t._v("由于该类的构造器是"),e("code",[t._v("private")]),t._v("的，所以无法创建该类的对象，也就是无法实例化该类。其内部的成员变量和成员方法都是"),e("code",[t._v("static")]),t._v("的，所以也可以很方便的进行调用。")]),t._v(" "),e("li",[t._v("成员变量\n"),e("ul",[e("li",[t._v("System类内部包含in、out和err三个成员变量，分别代表标准输入流(键盘输入)，标准输出流(显示器)和标准错误输出流(显示器)")])])]),t._v(" "),e("li",[t._v("成员方法\n"),e("ul",[e("li",[t._v("native long currentTimeMillis()：\n"),e("ul",[e("li",[t._v("该方法的作用是返回当前的计算机时间，时间的表达格式为当前计算机时间和GMT时间(格林威治时间)1970年1月1号0时0分0秒所差的毫秒数。")])])]),t._v(" "),e("li",[t._v("void exit(int status)：\n"),e("ul",[e("li",[t._v("该方法的作用是退出程序。其中status的值为0代表正常退出，非零代表异常退出。使"),e("strong",[t._v("用该方法可以在图形界面编程中实现程序的退出功能等。")])])])]),t._v(" "),e("li",[t._v("void gc()：\n"),e("ul",[e("li",[t._v("该方法的作用是请求系统进行垃圾回收。至于系统是否立刻回收，则取决于系统中垃圾回收算法的实现以及系统执行时的情况。")])])]),t._v(" "),e("li",[t._v("String getProperty(String key)：\n"),e("ul",[e("li",[t._v("该方法的作用是获得系统中属性名为key的属性对应的值。系统中常见的属性名以及属性的作用如下表所示")]),t._v(" "),e("li",[e("img",{attrs:{src:"https://raw.githubusercontent.com/SaulJWu/images/main/20201224000521.png",alt:"image-20201224000520949"}})])])])])])]),t._v(" "),e("h2",{attrs:{id:"math类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math类"}},[t._v("#")]),t._v(" Math类")]),t._v(" "),e("p",[t._v("java.lang.Math提供了一系列静态方法用于科学计算。其方法的参数和返回值类型一般为double型。")]),t._v(" "),e("p",[t._v("Java 的 Math 包含了用于执行基本数学运算的属性和方法，如初等指数、对数、平方根和三角函数。")]),t._v(" "),e("p",[t._v("Math 的方法都被定义为 static 形式，通过 Math 类可以在主函数中直接调用。")]),t._v(" "),e("p",[t._v("这里就不展开说了，直接看API调用就是。")]),t._v(" "),e("h2",{attrs:{id:"biginteger类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#biginteger类"}},[t._v("#")]),t._v(" BigInteger类")]),t._v(" "),e("h3",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),e("ul",[e("li",[t._v("Integer类作为int的包装类，能存储的最大整型值为231-1，Long类也是有限的，最大为263-1。如果要表示再大的整数，不管是基本数据类型还是他们的包装类都无能为力，更不用说进行运算了。")]),t._v(" "),e("li",[t._v("java.math包的BigInteger可以表示"),e("strong",[t._v("不可变的任意精度的整数")]),t._v("。BigInteger 提供所有Java 的基本整数操作符的对应物，并提供java.lang.Math 的所有相关方法。另外，BigInteger 还提供以下运算：模算术、GCD 计算、质数测试、素数生成、位操作以及一些其他操作。")])]),t._v(" "),e("h3",{attrs:{id:"构造器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造器"}},[t._v("#")]),t._v(" 构造器")]),t._v(" "),e("p",[t._v("BigInteger(String val)：根据字符串构建BigInteger对象")]),t._v(" "),e("h3",{attrs:{id:"常用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("public BigInteger abs()")]),t._v("：返回此BigInteger 的绝对值的BigInteger。")]),t._v(" "),e("li",[e("code",[t._v("BigInteger add(BigInteger val)")]),t._v(" ：返回其值为(this + val) 的BigInteger")]),t._v(" "),e("li",[e("code",[t._v("BigInteger subtract(BigInteger val)")]),t._v(" ：返回其值为(this -val) 的BigInteger")]),t._v(" "),e("li",[e("code",[t._v("BigInteger multiply(BigInteger val)")]),t._v("：返回其值为(this * val) 的BigInteger")]),t._v(" "),e("li",[e("code",[t._v("BigInteger divide(BigInteger val)")]),t._v("：返回其值为(this / val) 的BigInteger。整数相除只保留整数部分。")]),t._v(" "),e("li",[e("code",[t._v("BigInteger remainder(BigInteger val)")]),t._v(" ：返回其值为(this % val) 的BigInteger。")]),t._v(" "),e("li",[e("code",[t._v("BigInteger[] divideAndRemainder(BigInteger val)")]),t._v("：返回包含(this / val) 后跟(this % val) 的两个BigInteger 的数组。")]),t._v(" "),e("li",[e("code",[t._v("BigInteger pow(int exponent)")]),t._v(" ：返回其值为(thisexponent) 的BigInteger。")])]),t._v(" "),e("h2",{attrs:{id:"bigdecimal类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bigdecimal类"}},[t._v("#")]),t._v(" BigDecimal类")]),t._v(" "),e("h3",{attrs:{id:"概念-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),e("ul",[e("li",[t._v("一般的Float类和Double类可以用来做科学计算或工程计算，但"),e("strong",[t._v("在商业计算中，要求数字精度比较高，故用到"),e("code",[t._v("java.math.BigDecimal")]),t._v("类。")])]),t._v(" "),e("li",[t._v("BigDecimal类支持不可变的、任意精度的有符号十进制定点数。")])]),t._v(" "),e("h3",{attrs:{id:"构造器-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造器-2"}},[t._v("#")]),t._v(" 构造器")]),t._v(" "),e("ul",[e("li",[t._v("public BigDecimal(double val)")]),t._v(" "),e("li",[t._v("public BigDecimal(String val)")])]),t._v(" "),e("h3",{attrs:{id:"常用方法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用方法-2"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),e("ul",[e("li",[t._v("加：public BigDecimal add(BigDecimal augend)")]),t._v(" "),e("li",[t._v("减：public BigDecimal subtract(BigDecimal subtrahend)")]),t._v(" "),e("li",[t._v("乘：public BigDecimal multiply(BigDecimal multiplicand)")]),t._v(" "),e("li",[t._v("除：public BigDecimal divide(BigDecimal divisor, intscale, introundingMode)")])])])}),[],!1,null,null,null);i.default=v.exports}}]);