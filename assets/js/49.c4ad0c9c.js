(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{540:function(v,_,t){"use strict";t.r(_);var e=t(15),d=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("blockquote",[t("p",[v._v("四种访问权限修饰符")])]),v._v(" "),t("p",[v._v("Java权限修饰符"),t("code",[v._v("public")]),v._v("、"),t("code",[v._v("protected")]),v._v("、"),t("code",[v._v("default")]),v._v("(默认)、"),t("code",[v._v("private")]),v._v("置于类的成员定义前，用来限定对象对该类成员的访问权限。")]),v._v(" "),t("p",[v._v("权限从小到大排列： "),t("code",[v._v("private")]),v._v("、"),t("code",[v._v("default")]),v._v("(默认)、"),t("code",[v._v("protected")]),v._v("、"),t("code",[v._v("public")]),v._v("。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("修饰符")]),v._v(" "),t("th",[v._v("类内部")]),v._v(" "),t("th",[v._v("同一个包")]),v._v(" "),t("th",[v._v("不同包")]),v._v(" "),t("th",[v._v("同一个工程")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("private")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("default(缺省)")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("protected")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("public")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")]),v._v(" "),t("td",[v._v("yes")])])])]),v._v(" "),t("p",[v._v("Java 有三个显式关键字来设置类中的访问权限："),t("code",[v._v("public")]),v._v("（公开），"),t("code",[v._v("private")]),v._v("（私有）和"),t("code",[v._v("protected")]),v._v("（受保护）。这些访问修饰符决定了谁能使用它们修饰的方法、变量或类。")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("public")]),v._v("（公开）表示任何人都可以访问和使用该元素；")]),v._v(" "),t("li",[t("code",[v._v("private")]),v._v("（私有）除了类本身和类内部的方法，外界无法直接访问该元素。"),t("code",[v._v("private")]),v._v(" 是类和调用者之间的屏障。任何试图访问私有成员的行为都会报编译时错误；")]),v._v(" "),t("li",[t("code",[v._v("protected")]),v._v("（受保护）类似于 "),t("code",[v._v("private")]),v._v("，区别是子类（下一节就会引入继承的概念）可以访问 "),t("code",[v._v("protected")]),v._v(" 的成员，但不能访问 "),t("code",[v._v("private")]),v._v(" 成员；")]),v._v(" "),t("li",[t("code",[v._v("default")]),v._v("（默认）如果你不使用前面的三者，默认就是 "),t("code",[v._v("default")]),v._v(" 访问权限。"),t("code",[v._v("default")]),v._v(" 被称为包访问，因为该权限下的资源可以被同一包（库组件）中其他类的成员访问。")])]),v._v(" "),t("blockquote",[t("p",[v._v("使用访问控制的原因有以下两点：")])]),v._v(" "),t("ol",[t("li",[v._v("让应用程序员不要触摸他们不应该触摸的部分。（请注意，这也是一个哲学决策。部分编程语言认为如果程序员有需要，则应该让他们访问细节部分。）；")]),v._v(" "),t("li",[v._v("使类库的创建者（研发程序员）在不影响后者使用的情况下完善更新工具库。例如，我们开发了一个功能简单的工具类，后来发现可以通过优化代码来提高执行速度。假如工具类的接口和实现部分明确分开并受到保护，那我们就可以轻松地完成改造。")])]),v._v(" "),t("p",[v._v("从实际开发来说，我们一般使用public和private。")])])}),[],!1,null,null,null);_.default=d.exports}}]);