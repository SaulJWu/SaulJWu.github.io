(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{542:function(v,_,t){"use strict";t.r(_);var e=t(15),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("blockquote",[t("p",[v._v("在Java类中使用super来调用父类中的指定操作：")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("super")]),v._v("可用于访问父类中定义的属性")]),v._v(" "),t("li",[t("code",[v._v("super")]),v._v("可用于调用父类中定义的成员方法")]),v._v(" "),t("li",[t("code",[v._v("super")]),v._v("可用于在子类构造器中调用父类的构造器")])]),v._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[v._v("#")]),v._v(" 使用")]),v._v(" "),t("blockquote",[t("p",[v._v("super的使用")])]),v._v(" "),t("ul",[t("li",[v._v("可以在子类的方法或构造器中，通过使用"),t("code",[v._v("super.属性")]),v._v("或"),t("code",[v._v("super.方法")]),v._v("的方法是，显式调用父类中声明的属性或方法。但是通常情况下，我们习惯省略"),t("code",[v._v("super")])]),v._v(" "),t("li",[v._v("特殊情况：当子类和父类定义同名的属性时，我们想要在子类中调用父类中声明的属性，则必须显式的使用"),t("code",[v._v("super.属性")]),v._v("的方式，表明调用的是父类中声明的属性。")])]),v._v(" "),t("h2",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[v._v("#")]),v._v(" 注意")]),v._v(" "),t("ul",[t("li",[v._v("尤其当子父类出现同名成员时，可以用"),t("code",[v._v("super")]),v._v("表明调用的是父类中的成员")]),v._v(" "),t("li",[t("strong",[t("code",[v._v("super")]),v._v("的追溯不仅限于直接父类")]),v._v("，当在子类中调用继承的属性或者方法时，会自动从父类中寻找相应的属性或方法，如果父类没有，就会继续向父类的父类寻找，除非不存在这个方法，那么肯定能找到。")]),v._v(" "),t("li",[t("code",[v._v("super")]),v._v("和"),t("code",[v._v("this")]),v._v("的用法相像，"),t("code",[v._v("this")]),v._v("代表本类对象的引用，"),t("code",[v._v("super")]),v._v("代表父类的内存空间的标识")])]),v._v(" "),t("h2",{attrs:{id:"底层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#底层"}},[v._v("#")]),v._v(" 底层")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("super")]),v._v("调用父类的构造器")])]),v._v(" "),t("ul",[t("li",[v._v("我们可以在子类的构造器显式的使用"),t("code",[v._v("super(参数列表)")]),v._v("的方式，调用父类中声明的指定的构造器。")]),v._v(" "),t("li",[v._v("子类中所有的构造器"),t("strong",[v._v("默认")]),v._v("都会访问父类中"),t("strong",[v._v("空参数")]),v._v("的构造器")]),v._v(" "),t("li",[v._v("当父类中没有空参数的构造器时，子类的构造器必须通过"),t("code",[v._v("this(参数列表)")]),v._v("或者"),t("code",[v._v("super(参数列表)")]),v._v("语句指定调用本类或者父类中相应的构造器。同时，只能”二选一”，且必须放在构造器的首行")]),v._v(" "),t("li",[v._v("在类的多个构造器中，至少有一个类的构造器使用了"),t("code",[v._v("super(参数列表)")]),v._v("调用父类中的构造器。")]),v._v(" "),t("li",[v._v("如果子类构造器中既未显式调用父类或本类的构造器，且父类中又没有无参的构造器，则编译出错")])]),v._v(" "),t("blockquote",[t("p",[v._v("this和super的区别")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("No")]),v._v(" "),t("th",[v._v("区别点")]),v._v(" "),t("th",[t("code",[v._v("this")])]),v._v(" "),t("th",[t("code",[v._v("super")])])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("访问属性")]),v._v(" "),t("td",[v._v("访问本类中的属性，如果本类中没有此属性则从父类中继续查找")]),v._v(" "),t("td",[v._v("直接访问父类中的属性")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("调用方法")]),v._v(" "),t("td",[v._v("访问本类中的方法，如果本类中没有此方法则从父类中继续查找")]),v._v(" "),t("td",[v._v("直接访问父类中的方法")])]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("调用构造器")]),v._v(" "),t("td",[v._v("调用本类构造器，必须放在构造器的首行")]),v._v(" "),t("td",[v._v("调用父类构造器，必须放在子类构造器的首行")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);