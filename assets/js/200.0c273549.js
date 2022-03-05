(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{694:function(s,n,a){"use strict";a.r(n);var e=a(15),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("文档参考："),a("a",{attrs:{href:"https://kubesphere.com.cn/docs/installing-on-linux/introduction/multioverview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("多节点安装 (kubesphere.com.cn)"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_1、准备环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、准备环境"}},[s._v("#")]),s._v(" 1、准备环境")]),s._v(" "),a("h3",{attrs:{id:"确保三台机能ping通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确保三台机能ping通"}},[s._v("#")]),s._v(" 确保三台机能ping通")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.23\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.24\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.25\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"确保三个节点都能相互访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确保三个节点都能相互访问"}},[s._v("#")]),s._v(" 确保三个节点都能相互访问")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.23\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.24\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.25\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"确保三个节点都能ping通外网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确保三个节点都能ping通外网"}},[s._v("#")]),s._v(" 确保三个节点都能ping通外网")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" www.qq.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装工具"}},[s._v("#")]),s._v(" 安装工具")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker这里就不展开说明")]),s._v("\ndocker -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# socat")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" socat\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# conntrack")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" conntrack\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"时间同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间同步"}},[s._v("#")]),s._v(" 时间同步")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间同步")]),s._v("\ntimedatectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/SaulJWu/blog-images/raw/master/images/20210812192216.png",alt:"image-20210812192209092"}})]),s._v(" "),a("p",[s._v("发现时间跟我们的不一样")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到上海")]),s._v("\ntimedatectl set-timezone Asia/Shanghai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("再次查看，发现本地时间已经切换到中国时间，并且三台机器的时间都是一样的。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" chrony\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装完后，查看一下时间同步服务器列表")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("chronyc -n sources -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看本机时间统统同步状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("chronyc tracking\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("核查本地时间")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("timedatectl status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以看到三个机器是一样的了，如果要用到集群中某个机器为准点为时间机器，需要修改配置")]),s._v(" "),a("h2",{attrs:{id:"_2、下载pubkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、下载pubkey"}},[s._v("#")]),s._v(" 2、下载pubkey")]),s._v(" "),a("p",[a("strong",[s._v("三台机器都能相互ping通后，接下来在master操作")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sfL https://get-kk.kubesphere.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1.1.1 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("返回：")]),s._v(" "),a("blockquote",[a("p",[s._v("Downloading kubekey v1.1.1 from https://github.com/kubesphere/kubekey/releases/download/v1.1.1/kubekey-v1.1.1-linux-amd64.tar.gz ...")]),s._v(" "),a("p",[s._v("Kubekey v1.1.1 Download Complete!")])]),s._v(" "),a("p",[s._v("为 "),a("code",[s._v("kk")]),s._v(" 添加可执行权限：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chmod +x kk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、创建集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建集群"}},[s._v("#")]),s._v(" 3、创建集群")]),s._v(" "),a("h3",{attrs:{id:"_3-1、创建示例配件文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、创建示例配件文件"}},[s._v("#")]),s._v(" 3.1、创建示例配件文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./kk create config --with-kubernetes v1.19.8 --with-kubesphere v3.1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("会在当前文件夹生成"),a("code",[s._v("config.sample.yaml")])]),s._v(" "),a("h3",{attrs:{id:"_3-2、配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、配置文件"}},[s._v("#")]),s._v(" 3.2、配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" config-sample.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("apiVersion: kubekey.kubesphere.io/v1alpha1\nkind: Cluster\nmetadata:\n  name: sample\nspec:\n  hosts:\n  - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name: k8s-node1, address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.4, internalAddress: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.101, user: root, password: vagrant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name: k8s-node2, address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.5, internalAddress: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.102, user: root, password: vagrant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name: k8s-node3, address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".2.6, internalAddress: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.103, user: root, password: vagrant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  roleGroups:\n    etcd:\n    - k8s-node1\n    master: \n    - k8s-node1\n    worker:\n    - k8s-node1\n    - k8s-node2\n    - k8s-node3\n  controlPlaneEndpoint:\n    domain: lb.kubesphere.local\n    address: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6443")]),s._v("\n  kubernetes:\n    version: v1.19.8\n    imageRepo: kubesphere\n    clusterName: cluster.local\n  network:\n    plugin: calico\n    kubePodsCIDR: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.233")]),s._v(".64.0/18\n    kubeServiceCIDR: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.233")]),s._v(".0.0/18\n  registry:\n    registryMirrors: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    insecureRegistries: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  addons: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n\n---\napiVersion: installer.kubesphere.io/v1alpha1\nkind: ClusterConfiguration\nmetadata:\n  name: ks-installer\n  namespace: kubesphere-system\n  labels:\n    version: v3.1.1\nspec:\n  persistence:\n    storageClass: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("       \n  authentication:\n    jwtSecret: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  zone: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  local_registry: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("        \n  etcd:\n    monitoring: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("      \n    endpointIps: localhost  \n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2379")]),s._v("             \n    tlsEnable: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  common:\n    redis:\n      enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    redisVolumSize: 2Gi \n    openldap:\n      enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    openldapVolumeSize: 2Gi  \n    minioVolumeSize: 20Gi\n    monitoring:\n      endpoint: http://prometheus-operated.kubesphere-monitoring-system.svc:9090\n    es:  \n      elasticsearchMasterVolumeSize: 4Gi   \n      elasticsearchDataVolumeSize: 20Gi   \n      logMaxAge: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("          \n      elkPrefix: logstash\n      basicAuth:\n        enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        username: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n        password: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n      externalElasticsearchUrl: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n      externalElasticsearchPort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  \n  console:\n    enableMultiLogin: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30880")]),s._v("\n  alerting:       \n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# thanosruler:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   replicas: 1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   resources: {}")]),s._v("\n  auditing:    \n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  devops:           \n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    jenkinsMemoryLim: 2Gi     \n    jenkinsMemoryReq: 1500Mi \n    jenkinsVolumeSize: 8Gi   \n    jenkinsJavaOpts_Xms: 512m  \n    jenkinsJavaOpts_Xmx: 512m\n    jenkinsJavaOpts_MaxRAM: 2g\n  events:          \n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    ruler:\n      enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  logging:         \n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    logsidecar:\n      enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  metrics_server:             \n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  monitoring:\n    storageClass: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    prometheusMemoryRequest: 400Mi  \n    prometheusVolumeSize: 20Gi  \n  multicluster:\n    clusterRole: none \n  network:\n    networkpolicy:\n      enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    ippool:\n      type: none\n    topology:\n      type: none\n  openpitrix:\n    store:\n      enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  servicemesh:    \n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("  \n  kubeedge:\n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    cloudCore:\n      nodeSelector: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-role.kubernetes.io/worker"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      tolerations: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      cloudhubPort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10000"')]),s._v("\n      cloudhubQuicPort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10001"')]),s._v("\n      cloudhubHttpsPort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10002"')]),s._v("\n      cloudstreamPort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10003"')]),s._v("\n      tunnelPort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10004"')]),s._v("\n      cloudHub:\n        advertiseAddress: \n          - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("           \n        nodeLimit: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),s._v("\n      service:\n        cloudhubNodePort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30000"')]),s._v("\n        cloudhubQuicNodePort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30001"')]),s._v("\n        cloudhubHttpsNodePort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30002"')]),s._v("\n        cloudstreamNodePort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30003"')]),s._v("\n        tunnelNodePort: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30004"')]),s._v("\n    edgeWatcher:\n      nodeSelector: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-role.kubernetes.io/worker"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      tolerations: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      edgeWatcherAgent:\n        nodeSelector: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-role.kubernetes.io/worker"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        tolerations: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br")])]),a("h3",{attrs:{id:"_3-3、开始安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、开始安装"}},[s._v("#")]),s._v(" 3.3、开始安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./kk create cluster -f config-sample.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后弹出输入"),a("code",[s._v("yes")]),s._v("，接下来耐心等待就OK。")]),s._v(" "),a("p",[s._v("整个安装过程可能需要 10 到 20 分钟，具体取决于您的计算机和网络环境。")]),s._v(" "),a("h2",{attrs:{id:"_4、验证安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、验证安装"}},[s._v("#")]),s._v(" 4、验证安装")]),s._v(" "),a("p",[s._v("安装完成后，您会看到如下内容：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#####################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###              Welcome to KubeSphere!           ###")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#####################################################")]),s._v("\n\nConsole: http://192.168.0.2:30880\nAccount: admin\nPassword: P@88w0rd\n\nNOTES：\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". After you log into the console, please check the\n     monitoring status of "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" components "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n     the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cluster Management"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" If any "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" is not\n     ready, please "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v(" patiently "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" all components\n     are up and running.\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". Please change the default password after login.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#####################################################")]),s._v("\nhttps://kubesphere.io             20xx-xx-xx xx:xx:xx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#####################################################")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("现在，您可以通过 "),a("code",[s._v("<NodeIP:30880")]),s._v(" 使用默认帐户和密码 ("),a("code",[s._v("admin/P@88w0rd")]),s._v(") 访问 KubeSphere 的 Web 控制台。")])])}),[],!1,null,null,null);n.default=t.exports}}]);