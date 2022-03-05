(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{496:function(n,e,a){"use strict";a.r(e);var t=a(20),r=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("MySQL数据库优化\n1.聚簇索引和非聚簇索引的区别\n2.什么叫回表，索引覆盖，索引下推，最左匹配\n3.MVCC (多版本并发控制)  ---  属于事务的东西\n4. IPC 和 MRR")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("Memory 支持 hash索引，innoDB 也叫自适应hash索引，严格来说，innoDB是支持Hash索引，但是人为不可控制。\n\n\n为什么mysql不使用别的索引方式，而是用B+树方式？\n      因为mysql他是一个事务数据库，他需要当sql语句执行时，在尽可能短的时间之内，返回对应的结果。所以B+树可以满足他的需求。\n\n\n\nmysql索引存储在哪里，内存还是磁盘，为什么不放在内存或是磁盘中？\n      MySQL索引是会以文件的形式存储在磁盘中，因为如果放在内存中，磁盘如果宕机，那么在内存就没办法找得到了。\n\n存储引擎是什么？\n      表示不同的数据文件，在磁盘上的存储格式\n\n索引文件的结构\nhash\n二叉树\nB树\nB+树\n   \n为什么要最终选择B+树而不选择其他三个来做索引\n\nhash缺点：\n      1.要使用hash表，就需要设置一个非常好的hash函数，以避免发生hash碰撞或者说hash冲突\n      2.那么hash表他是一个数组+链表的，那么每次进行操作的时候，都需要把数据读到内存中，那如果数据量太大，内存肯定是扛不住的\n      3.还有就是，hash表定位的时候，那他肯定是用key去找value的，那如果是查找的是一个范围的话，因为他本身是一个无序的，那么他只能挨个匹配，所以这个效率就会变得很低了。\n（为什么Memory 用hash呢？ 因为Memory 他本身就是在内存里面放着，他正好是匹配了这样的一个数据结构嘛）\n")])])]),a("hr"),n._v(" "),a("p",[n._v("PS：在innoDB里面，数据和索引是合在一起的。  意味着，在存储索引的时候，数据和索引是绑定在一起的。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("聚簇索引和非聚簇索引的区别  （也叫聚集索引和非聚集索引）\n\n聚簇索引：不是单独的索引类型，而是一种数据存储方式，指的是数据行跟相邻的键值紧凑的存储在一起\n    说人话：\n\t索引和数据是绑定在一起的，所以存储的时候必须要有个Key，一般是主键或者非空的唯一索引，如果都没有，mysql就会生成一个六个字节的row_id，用户是不可见的。\n\t只要用了innoDB，他一定是聚簇索引。\n\t（每次在进行数据的查找的时候，我能够根据主键直接能够定位到数据的，这种组织方式叫聚簇索引）\n\n       优点：\n\t1.可以把相关数据保存在一起\n\t2.数据访问更快，因为索引和数据保存在同一个树中\n\t3.使用索引覆盖扫描的查询可以直接使用叶节点中的主键值\n\n       缺点：\n\t1.聚簇数据最大限度地提高了IO密集型应用的性能，如果数据全部在内存，那么聚簇索引就没什么优势了。\n\t2.插入速度严重依赖于插入顺序，按照主键的顺序插入是最快的方式\n\t3.更新聚簇索引列的代价很高，因为会强制将每个被更新的行移动到新的位置\n\t4.基于聚簇索引的表在插入新行，或者主键被更新导致需要移动行的时候，可能面临页分裂的问题。\n\t5.聚簇索引可能导致全表扫描变慢，尤其是行比较稀疏，或者由于页分裂导致数据存储不连续的时候。\n\n\n非聚簇索引：数据文件跟索引文件分开存放\n    说人话：\n\t索引和数据是分开的，索引归索引，数据归数据。分成了两个对应的文件。\n\tMyISM则是非聚簇索引，根节点存储的并不是数据，而是能够指向数据的地址。\n")])])]),a("p",[n._v("PS：一开始mysql只支持myISAM,后来才出现的innoDB， 两者的区别包括：\n1.索引的区别，一个是聚簇，一个是非聚簇\n2.innoDB支持事务，MyISAM不支持事务。\n3.MyISAM只支持表锁，InnoDB支持行锁和表锁")]),n._v(" "),a("p",[n._v("在mysql中，索引由mysql自动创建。在创建的时候，他会给唯一且非空的键创建索引。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("（回表）\n如果现在既有主键也有非空唯一键，那么必定是以主键来建索引，而非空唯一键，则是另外的在建一个索引，会单独的再开辟一个B+树，但是我的数据在存放的时候，就不再是存放一整行记录，\n而是存放主键。也叫二级索引\n例：\nselect * from table where name = 'zhangsan'\n那么他会先以这个name去找他的B+树，找到根节点，拿到主键，再依照主键去查询主键所在的B+树，再读取整行记录并返回数据。（这整一个过程就叫回表）")]),n._v(" "),a("p",[n._v("回表：如果创建索引的键是其他字段，那么在叶子节点中存储的是该记录的主键，然后再通过主键索引找到对应的记录\n人话：当我在查询辅助索引（二级索引）的时候，需要先根据二级索引查询到主键，然后再根据主键去主键的B+树里进行实际数据值的查找 ，这个过程就叫回表。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("（索引覆盖）“ Using  index”\n例：这两者有什么区别呢？")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1  select id from table where name = 'zhangsan'\n2  select * from table where name = 'zhangsan' \n")])])]),a("p",[n._v("答案： 1语句的执行速度比 2语句快，在需求是只需要拿到ID的时候，1语句查询二级索引的时候，查询到结果既可以返回，但如果使用了*，那么他就必须要进行回表操作，也就是拿到\n主键然后去主键所在的B+树里面进行实际数据查找，所以，速度自然是慢的。\n那么这个不需要进行回表操作的过程，就叫做索引覆盖。")]),n._v(" "),a("p",[n._v("索引覆盖的基本介绍：\n1.如果一个索引包含所有需要查询的字段的值，我们称之为覆盖索引\n2.不是所有类型的索引都可以称为覆盖索引，覆盖索引必须要存储索引列的值\n3.不同的存储实现覆盖索引的方式不同，不是所有的引擎都支持覆盖索引，memory不支持覆盖索引")]),n._v(" "),a("p",[n._v("覆盖索引的优势：\n1.索引条目通常远小于数据行大小，如果只需要读取索引，那么MySQL就会极大的减少数据访问量\n2.因为索引是按照列值顺序存储的，所以对于IO密集型的范围查询会比随机从磁盘读取每一行数据的IO要少得多\n3.一些存储引擎如MYISAM在内存中只缓存索引，数据则依赖于操作系统缓存，因此要访问数据需要一次系统调用，这可能会导致严重的性能问题。\n4.由于INNODB的聚簇索引，所以覆盖索引对INNODB表特别有用。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("（最左匹配）\n例：假设有这么一张表\nid           name           age           gender           hiredate           job\n但是现在发现，日常主要查询条件是，where name=? and age=?\n所以为了查询快速及方便，我可以给name 和 age 添加一个索引 → （name,age）\n那么这种索引，就是联合索引。")]),n._v(" "),a("p",[n._v("联合索引（组合索引）：如果索引列包含的是多个列，那么这种就称之为联合索引（组合索引）\nPS：联合索引中有个概念，就是最左匹配。")]),n._v(" "),a("p",[n._v("最左匹配：在包含多个列的查询过程中，会先查第一个列，在查第二个列。如上列所示，会先查name再查age，查不到name,那么age也是无法被查询出来。")]),n._v(" "),a("p",[n._v("问题：如果写的是  where age=? and name=?    该条语句是否会执行联合索引")]),n._v(" "),a("p",[n._v("答案：会执行，因为在mysql中，他有着自己的server，分为连接器，分析器，优化器，执行器。所以在sql执行时，优化器会帮你优化，选择正确的顺序来执行。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("（谓词下推）\t\n例：\nselect  t1.name,t2.name  from  t1  join  t2  on  t1.id  =  t2.id;\n可以有几种执行方式，哪一种更好。\n1.先将两个表按照id字段进行拼接，完成之后再取出name.\n2.把所有需要的列都拿出来，然后再拼接")]),n._v(" "),a("p",[n._v("2方法更好，比如 t1表里有100条数据， t2表里有200条数据，如果使用第一种方法，那么就等于把两个表数据合在一起，也就成了300条，然后再进行处理。\n而第二种方法，则是t1表需要的几条数据拿出来，然后再把t2表需要的几条拿出阿来，再进行处理。")]),n._v(" "),a("p",[n._v("这种处理方式，就叫做谓词下推。")]),n._v(" "),a("p",[n._v("谓词下推概念：")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("（索引下推 ， 也叫ICP） “Using  index  condition”\n例： 现在创建了一个联合索引，在不使用索引下推的情况：\n是先根据name列的值把所有符合的数据都拉取到sever层，在server层对age做过滤\n使用索引下推：\n根据name,age两个字段把满足要求的数据拉取到server层，取出对应的数据")]),n._v(" "),a("p",[n._v("如果在执行计划，也就是导入sql的时候，显示着using  index  condition   代表着使用了索引下推。")]),n._v(" "),a("p",[n._v("索引下推概念：")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("MRR（多范围查询）：")]),n._v(" "),a("p",[n._v("比如在回表操作的时候，我们是根据name先去查找的，然而在name这个二级索引的B+树上，就是根据name来排序的，那么就有可能导致叶节点上的id排序并不一定是有顺序的，\n有可能是无序的。那么查找出来的ID列表就会是一个无序的，然后再根据这个ID列表去主键B+树查找的时候，就会有可能不断地进行匹配，相当于从根节点不断地进行遍历，也就变成了随机查找。")]),n._v(" "),a("p",[n._v("那么当返回的id之后，先将这些id进行排序，当排序完成之后再去主键B+树查找，这个就是MRR。\n而因为每次取出的都是主键的值，所以这个排序在内存里并不会浪费太多的空间，也不会浪费多少时间。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("MVCC (多版本并发控制)：\n问题：\n为什么可重复读不会发生不可重复读异常，而读已提交却会发生不可重复读异常？这其实就跟MVCC有关。")]),n._v(" "),a("p",[n._v("问题2：\n如果说现在有A,B两个线程，A线程现在对X数据进行更改操作，那么，X数据就会被加锁。现在B线程要读取X数据，那么是否可以读到，读到的数据又是什么？")]),n._v(" "),a("p",[n._v("答案：\n可以读到，涉及到两个名词，一致性非锁定读和一致性锁定读，而mysql中使用的就是一致性非锁定读。所以B线程可以继续读取X数据，但是读取的，是X数据的历史快照。")]),n._v(" "),a("p",[n._v("这个操作，就由MVCC来控制，那么MySQL中，是使用undo log来实现的MVCC。在X数据加锁之前，会在undo log里面记录一条日志，这个日志保存的就是之前的一条历史记录。\n所以当X数据加锁之后，B线程会读到undo log里面之前的数据里面的一个状态。")]),n._v(" "),a("p",[n._v("回到问题1 ，为什么不可重复读异常只有读已提交会触发，而可重复读却不会呢？\n原因是：\n在undo log里面，他有可能会存在X数据的很多个版本的历史数据，在读已提交里面，默认读的是最新的，已经持久化的数据（历史版本）。\n而在可重复读里面，他默认读取的，是当前事务，也就是加锁之前，最新的，已经持久化的数据（历史版本）。")]),n._v(" "),a("p",[n._v("比如：现在依然是A，B两个线程对X数据进行操作，A进行修改，B进行查询。如果现在是读已提交，那么就会有这么一种情况：\nX数据上锁之前会记录一个版本号为V1，但是现在，修改操作完成了，但是锁还没有释放，这个时候事务提交，那么就会出现新的版本号为V2，当B来查询的时候，就会把这个V2读取\n可如果是可重复读，那么B就只会读取X数据加锁之前的最新的版本号，也就是V1.")]),n._v(" "),a("p",[n._v("问题1答案：\n所以这就是为什么可重复读不会发生不可重复读这个异常，这也就是MVCC。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("mysql隔离级别（不同的隔离级别可能导致不同的并发异常）："),a("br"),n._v("\n读未提交 -----  最低级别，可能会发生脏读，不可重复读，幻读\n读已提交 -----  是Oracle和别的数据库默认隔离级别，可能会发生不可重复读，幻读\n可重复读 -----  是MySQL默认的隔离级别，可能会发生幻读\n串行化    -----  最高级别，基本不会发生异常")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("索引的分裂和合并：\n例：在B+树的叶子节点里，有这么一个块，里面的索引排序是3，5，9，10。\n问题1：\n因为这个是有序的排序，现在我要插入一条索引为6的数据，可是这个块只能存放四条数据，现在已经满了，不给插入那就破坏了有序这个结构。怎么办呢？")]),n._v(" "),a("p",[n._v("答案：\n当发生这样一种情况的时候，就会触发一个页分裂的操作。")]),n._v(" "),a("p",[n._v("什么是页分裂？\n页分裂就是把需要插入数据的这个块等分，3，5分为一个块，9，10又会分为另一个块。但是这样分裂完之后，他还会把指向这个叶节点的非叶子节点的索引进行更改，对应的索引重新指向这两个块\n这个过程就是页分裂。")]),n._v(" "),a("p",[n._v("合并：\n假如说，现在3，5，9，10这个块称为A块，11，12，16，18称为B块 ，现在，A块里面的9，10被删掉了，B块的11，12也被删掉了。\n那么，就会造成A块和B块都有一半的空间被浪费，所以这个时候，就会触发另一个操作，也就是叶子的合并操作。")]),n._v(" "),a("p",[n._v("可是无论是合并也好，页分裂也好，都是会比较麻烦的，因为在进行这两个操作的时候，那就会需要加锁。一加锁，又会触发一个机制，那就是FIC，全称fast index creation，是一种机制，主要作用是用来加快整体索引维护的一个东西，\n原来的时候，我们需要先创建一张临时表，然后更改数据，更改完成之后，再把临时表改名。但是有了FIC就不需要这样了。")]),n._v(" "),a("p",[n._v("留一个点：   FIC？？？")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("索引的优点：\n1.大大减少了服务器需要扫描的数据量\n2.帮助服务器避免排序和临时表\n3.将随机IO变成顺序IO")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("索引的用处：\n1.快速查找匹配WHERE子句的行\n2.如果给每一个字段都建索引，所以有可能在一个sql语句里面，可能会用很多个索引，这个时候mysql优化器会选择最优的索引来进行查找。\n3.如果表具有多列索引，则优化器可以使用索引的任何最左前缀来查找行。\n4.当有表连接的时候，从其他表检索行数据\n5.查找特定索引列min或max值\n6.如果排序或分组时在可用索引的最左前缀上完成的，则对表进行排序和分组。\n7.在某些情况下，可以优化查询以检索值而无需查询数据行")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("索引的分类：\n1.主键索引 ：   如果你在创建索引的时候是使用主键来作为Key的，那么就是主键索引，主键索引不允许出现空值")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("2.唯一索引：   主键以外的一个唯一键来创建的索引，称之为唯一索引，唯一索引允许出现空值。\n\n3.普通索引：   当你给一个列创建索引，这个列既不是唯一列也不是主键列，那么就称之为普通索引\n\n4.全文索引：   \n\n5.组合索引：   当创建索引时，Key不再是只有一个列，而是多个列，那么，就是组合索引。\n")])])]),a("hr"),n._v(" "),a("p",[n._v("索引匹配方式：\n1.全值匹配， 意思是搜索的所有的值都是准确匹配上的，如：select * from table where name = 'zhangsan' and age = 24;")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("2.匹配最左， 也就是最左匹配原则，先匹配name才会去匹配age。\n\n3.匹配列前缀， 也就是可以匹配某一个列的值的开头部分，也就是平常的like语句。   select * from table where name like 'zhang%'\n    但是要注意！！！如果是  select * from table where name like '%san'  ，那么就不符合这个原则，就不会使用到索引了！\n\n4.匹配范围值， 可以查找某一个范围的数据，如： select * from table where name > 'zhangsan'\n\n5.精准匹配某一列并范围匹配另一列，可以查询第一列的全部和第二列的部分。栗子： select * from table where name = 'zhangsan' and age >20 ;\n    注意！！  如果是这样  select * from table where name = 'zhangsan' and age >20  and  pos = 'xxx'；他也会使用索引，但是！他会只使用name 和age来匹配，而pos 是不参与匹配的，\n\t也就是说，如果你在联合索引里要去匹配多个列，那么不要在中间使用范围匹配，否则他会把后面的数据查询给阻断掉。  \n\n6.  只访问索引的查询， 查询的时候只需要访问索引，不需要访问数据行，本质上就是索引覆盖。栗子：select  name,age,pos  from table where name = 'zhangsan' and age = 20  and  pos = 'xxx';\n\t也就是，我不需要再进行回表操作，只需要访问到索引下面，直接拉取name , age 和 pos 的值即可。这也是索引覆盖的概念。\n")])])]),a("hr"),n._v(" "),a("p",[n._v("哈希索引：\n1.基于哈希表实现的，只有精确匹配索引所有列的查询才有效。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("2.在MySQL中，只有memory的存储引擎显示支持哈希索引\n\n3.哈希索引自身只需要存储对应的hash值，所有索引的结构十分紧凑，所以也就导致他的查询速度非常快。\n")])])]),a("p",[n._v("哈希索引的限制：\n1.哈希索引只包含哈希值和行指针，而不存储字段值，所以不能使用索引中的值来避免读取行。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("2.哈希索引数据并不是按照索引值顺序存储的，所以无法进行排序。\n\n3.哈希索引不支持部分列匹配查找，哈希索引是使用索引列的全部内容来计算哈希值\n\n4.哈希索引支持等值比较查询，也不支持任何范围查询。\n\n5.访问哈希索引的数据非常快，除非有很多哈希冲突，当出现哈希冲突的时候，存储引擎必须遍历链表中的所有行指针，逐行进行比较，直到找到所有符合条件的行。\n\n6.哈希冲突比较多的话，维护的代价就会变得很高。 \t\n")])])]),a("p",[n._v("案例：什么情况下可以使用哈希索引，也就是memory存储引擎？")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("如果，当前表需要存储大量的url，并且要根据URL来进行搜索查找，就可以使用哈希索引。因为如果使用B+树来存储，存储的内容就会非常大。\n       所以可以使用哈希索引，做一个短地址映射，而不是直接存放数据。也可以使用CRC32做哈希，然后进行存储。\n")])])]),a("p",[n._v("注意！！！\nCRC32（数据循环冗余校验）：作用是将数据生成为一个10位的一个整数值。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("组合索引注意事项：\n当包含多个列作为索引，需要注意的是，正确的顺序依赖于该索引的查询，同时需要考虑如何更好的满足排序和分组的需要")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("在组合索引中，如果使用了or,不管你是否符合最左匹配原则，都不走索引，但是也有特殊情况，如：  \n")])])]),a("p",[n._v("特殊情况：如果一个表中，只有a,b,c三个字段，并且，把a,b,c建成了组合索引，那么这个时候，最左匹配原则就会失效。不管你怎么写，都会走索引，但是究竟走的是a,还是b,还是c，就不一定了。\n栗子：\nselect *  from table where b=2 and c=3 ,  走的是abc")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("select *  from table where  a=1 and  b>2 and c=3  ,只走a的索引\n\nselect *  from table where a-1 and b like '%2'  and c=3  ,只走a的索引\n\nselect *  from table where a-1 and b like '2%'  and c=3  ，还是只走a\n\nselect *  from table where b like '%2'  and c=3 ， 走abc\n\nselect *  from table where c=3  ， 走abc\n")])])]),a("h2",{attrs:{id:"​"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#​"}},[n._v("#")]),n._v(" ​")]),n._v(" "),a("p",[n._v("在MySQL中，有这么一个列，叫做  Cardinality， 也叫索引基数，使用的是Hyperlog log 这个算法来计算的\n1. 这个值是表式这个索引估算值的个数，既基数。（需要注意的是这个值并不是特别准确的，每执行下命令，这个值可能都会不同）\n2. MyISAM存储引擎与InnoDB存储引擎在NULL上对于Cardinality的计算方式不同\n3. 这个值越大在做表连接的时候，就越有机会选择这个索引。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("Cardinality会为我们优化SQL语句的执行效率，提供重要的参考依据。\n")])])]),a("p",[n._v("PS：在redis，ES中都有使用这个")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("在执行计划中，extra的意思是：包含额外的信息：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("Using filesort :说明mysql无法利用索引进行排序，只能利用排序算法进行排序，会消耗额外的位置。\n\nUsing temporary: 建立临时表来保存中间结果，查询完成之后把临时表删除。\n\nUsing index： 表示当前查询时使用了索引覆盖。\n\nUsing where：使用了where进行条件过滤\n\nUsing join buffer：使用连接缓存，情况没有模拟出来.\n\nimpossible where : where语句的结果总是false。\n")])])]),a("hr"),n._v(" "),a("p",[n._v("索引的选择性：\n索引的选择性是指不重复的索引值和数据表记录总数的比值，范围从1/#T到1之间。\n索引的选择性越高，那么查询的效率就越高，因为选择性更高的索引可以让MySQL在查找的时候过滤更多的行。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("优化小细节（工作中可能会用到的）：\n1.当使用索引列进行查询的时候尽量不要使用表达式，把计算放到业务层而不是数据库层。  表达式栗子：  select abc_id from abc where abc_id+= 4\n如果使用了上面栗子的这种表达式，就会使得abc_id这个主键索引失效，从而优化器会 将表中所有行都一一比对，变成类似全表扫描。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("2.尽量使用主键索引，而不是其他索引，因为主键索引不会触发回表查询。\n\n3.使用前缀索引，有时候需要索引很长的字符串，那么这会让索引变得很大然后速度就会很慢，使用某个列开始的部分字符串来作为索引。这样大大的节约索引空间，从而提高索引效率。\n\t但这会降低索引的选择性。一般情况下，某个列的前缀的选择性也是足够高的，足以满足查询的性能，但是对应BLOB,TEXT,VARCHAR类型的列，必须要使用前缀索引，\n\t因为MySQL不允许索引这些列的完整长度，使用该方法的诀窍在于要选择足够长的前缀以保证较高的选择性，但是也不能过长。\n\n注意！！！ 前缀索引是一种能使索引更小更快的有效方法，但是也有缺点，那就是MySQL无法使用前缀索引做order by 和 group by 查询。\n\n       栗子：可以看到在下图中，列中的数据长度不一，有的非常长，而有的又很短，如果全部都完整储存，那么就会导致索引太大而浪费空间。\n\t\t\t\n\t\t\t图片1\t\n\n\t所以我们可以可以截取部分字符串来作为索引，可是该截取多长的部分来作为索引？这个就需要如同下图一样，做一个测试，当选择某一个长度作为截取，发现返回的数值开始不再改变，那么就选择这个长度来截取。\n\n\t\t\t图片2\t\n\n\t然后我们就可以使用语句来创建这个前缀索引： alter table citydemo add index idx_city ( city (7) );\n\n\n4.使用索引扫描来排序 (公司中用的非常多)：\n\tmysql有两种方式可以生成有序的结果，通过排序操作或者按照索引顺序扫描，如果explain的type列的值为index，则说明mysql使用了索引扫描来做排序（不要和extra列的Using index搞混了，那个是使用了覆盖索引查询）。\n\t扫描索引本身是很快的，因为只需要从一条索引记录移动到紧接着的下一条记录，但如果索引不能覆盖查询所需的全部列，那就不得不扫描一条索引记录就回表查询一次对应的整行，这基本上都是随机IO，因此按索引顺序读取数据的速度通常要比顺序地全表扫描慢，尤其是在IO密集型的工作负载时。\n\n\tmysql可以使用同一个索引既满足排序，又用于查找行，因此，如果可能，设计索引时应该尽可能地同时满足这两种任务，这样是最好的。\n\t只有当索引的列顺序和order by子句的顺序完全一致，并且所有列的排序方向（倒序或升序，创建索引时可以指定ASC或DESC）都一样时，mysql才能使用索引来对结果做排序，如果查询需要关联多张表，则只有当order by子句引用的字段全部为第一个表时，才能使用索引做排序，order by子句和查找型查询的限制是一样的，需要满足索引的最左前缀的要求，否则mysql都需要执行排序操作，而无法使用索引排序。\n\t\n使用栗子来说明：\n\t\n\t假设现在表里有五个列 ，id为主键索引，a,b,c为组合索引，z为普通索引。\n\n\t现在有以下SQL，是否会执行索引扫描来进行排序：\n\t\texplain select a,b  from table  where a =1 order by b,c   |    会使用索引扫描来排序，因为整体使用的是组合索引。\n\n\t\texplain select a,b  from table  where a =1 order by b     |    依然会走组合索引。\n\n\t\texplain select a,b  from table  where a =1 order by c     |    不符合组合索引规则，在Extra中会多出一个 Using filesort，表明没有走索引扫描来排序，而是使用的别的方式。\n\n\t\texplain select a,b  from table  where a >1 order by a,b     |      因为前面变成了范围查询，所以也不走索引扫描来排序\n\n\t\texplain select a,b  from table  where a =1 order by b  desc, z asc     |       不走索引，因为一个是desc，而另一个是asc，必须两者统一才可以走索引扫描来排序。\n")])])]),a("p",[n._v("​\t\t\t\n5.union all , in , or 都能够使用索引，但是推荐使用in。  （为什么？）...")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('        栗子：\n\texplain select * from table where table_id =1 union all select * from table where table_id =2      ;\n\n\texplain select * from table where table_id  in ( 1，2)       ；\n\n\texplain select * from table where table_id =1 or  table_id=2      ;\n\n\n\t以上三条sql都会走索引，但是为什么推荐使用 In 呢。\n\n\t1.union all的执行是分两步，所以效率肯定是不如 in  和  or 的\n\n\t2，or 的使用条件比较苛刻，必须是单例索引才有效，组合索引是无效的，是不会走索引的。\n\t\n\t所以说推荐使用  in  。\n\n6.范维列可以用到索引，\n\t范围的条件是：< , <= , > , >= ，between\n\n\t范围列可以用到索引，但是范围列后面的列无法用到索引，索引最多用于一个范围列  \n\n7.强制类型转换会导致全表扫描。\n\n       栗子：\n\texplain select * from table where name = "zhansan"    ,走索引\n\n\texplain select * from table where name = 123  ， 填写类型不对会导致触发强制类型转换，把123转换成字符串，然后全表扫描。\n\n8.更新十分频繁，数据区分度不高的字段上不宜建立索引。\n\t1.更新会变更B+树，更新频繁的字段建立索引会大大降低数据库性能。\n\n\t2.类似于性别这类区分不大的属性，建立索引是没有意义的，因为并不能有效地过滤数据。     例如  ：   性别列，因为只有男/女两个选项\n\n\t3.一般区分度在80%以上的时候就可以建立索引，区分度可以使用 count( distinct(列名)） /  count(*) 来计算。\n\n9.创建索引的列，不允许为null，可能会得到不符合预期的结果。\n\n10.当需要进行表连接的时候，最好不要超过三张表，因为需要 join 的字段，数据类型必须一致 （阿里禁止：  使用join连接不得超过三张表）\n\n11.能使用Limit    ，  就尽量使用limit\n\n12.单表索引建议控制在5个以内\n\n13.单索引字段数不允许超过5个（组合索引）\n\n14.创建索引的时候应该避免一下错误概念：\n\t1.索引越多越好\n\n\t2。过早优化，在不了解系统的情况下进行优化\n')])])]),a("hr"),n._v(" "),a("p",[n._v('索引监控：\nshow  status  like  " Handler_read% ";')]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("参数解释：\n\t1.Handler_read_first：读取索引第一个条目的次数。\n\n\t2.Handler_read_key：通过index获取数据的次数。\n\n\t3.Handler_read_last：读取索引最后一个条目的次数.\n\n\t4.Handler_read_next：通过索引读取下一条数据的次数。\n\n\t5.Handler_read_prev：通过索引读取上一条数据的次数。\n\n\t6.Handler_read_rnd：从固定位置读取数据的次数.\n\n\t7.Handler_read_rnd_next：从数据节点读取下一条数据的次数。\n")])])]),a("hr"),n._v(" "),a("p",[n._v("PS:数据库优化要慎重，有两种方式，一种基于CBO(基于成本)，一种是RBO(基于规则)，而现在一般都是CBO，优化规则非常复杂，里面有非常多的条件来判断并最终选择。")])])}),[],!1,null,null,null);e.default=r.exports}}]);