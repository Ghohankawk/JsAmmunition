# JsAmmunition
 
打造属于自己的前端js工具包，就好像，《来自深渊》里面的黎明卿的弹药包一样，有自己的js弹药包

> 目的：高效率完成前端业务代码，不要到处都是复制粘贴

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`等常用函数，为避免不同项目多次复制粘贴的麻烦。
## 安装使用

1. 直接下载JsAmmunition.min.js用于线上环境（暂不提供压缩版本）
2. 直接下载JsAmmunition.js用于开发环境看源码

### 浏览器:
``` html
  引入
  <script src="JsAmmunition.min.js"></script>
  使用
  <script>
      var OS = JsAmmunition.devices.getOS()
  </script>
```
## API文档


| 模块分类 | 对象 | 方法名|作用|
| :------------:|:---------------:|:-----:|:-----:|
| 数组功能模块 | arrays | arrayEqual | 判断两个数组是否相等  |
| cssClass功能模块 | cssClasses | hasClass | 判断元素是否有某个class  |
|  |  | addClass | 为元素添加class   |
|  |  | removeClass | 为元素移除class    |
| cookie功能模块 | cookies | setCookie | 添加Cookie   |
|  |  | getCookie | 根据name删除Cookie      |
|  |  | removeCookie | 为元素移除class    |
| 设备功能模块 | devices | getOS | 获取操作系统类型   |
|  |  | getExplore | 获取浏览器类型和      |
| 按键功能模块 | keys | getKeyName | 根据keycode获得键名    |
| 对象功能模块 | objects | isEmptyObject | 判断Object是否为空    |
|  |  | deepCloneObject | 深拷贝，支持常见类型      |
| 随机功能模块 | randoms | randomNumber | 生成指定范围随机数     |
|  |  | randomColor | 随机生成颜色     |
| 时间功能模块 | times | timePass | startTime距现在的已过时间     |
|  |  | timeRemain | 距endTime的剩余时间     |
|  |  | isSameDay | 判断是否为同一天     |
| url功能模块 | urls | parseQuery | 参数转对象     |
|  |  | strinfyQuery | 对象序列化     |
| 支持功能模块 | supports | isSupportWebP | 判断浏览器是否支持webP格式图片     |
| 正则功能模块 | regexps | isEmail | 判断是否为邮箱地址      |
|  |  | isIdCard | 判断是否为身份证号     |
|  |  | isPhoneNumber | 判断是否为手机号      |
|  |  | isUrl | 判断是否为URL地址     |
| 帧动画功能模块 | domsRequestAnimFrame | 无 |返回帧对象       |
| dom树功能模块 | doms | windowResize |H5软键盘缩回、弹起回调（第一个是缩起，第二个是弹起）       |
|  |  | getScrollTop | 获取滚动条距顶部的距离     |
|  |  | setScrollTop | 设置滚动条距顶部的距离     |
|  |  | scrollTo | 在duration时间内，滚动条平滑滚动到to指定位置     |
|  |  | getOffset | 获取一个元素的距离文档(document)的位置，类似jQ中的offset()     |
