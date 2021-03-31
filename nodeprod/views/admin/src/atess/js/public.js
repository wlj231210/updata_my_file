const My_public_fun = {
    /**
    * @removeSpace 去空格
    * value 需要清除空格的字符串
    */
    removeSpace: (value) => {
        return value.replace(/\s+/g, "")
    },
    /**
    * @dedupe 数组去重
    * array 数组
    */
    dedupe: (array) => {
        return Array.from(new Set(array))
    },
    /**
    * @dedupe 对象去重
    * obj 对象
    */
    dedupeObject: (obj) => {
        let uniques = [];
        let stringify = {};
        for (let i = 0; i < obj.length; i++) {
            let keys = Object.keys(obj[i]);
            keys.sort(function (a, b) {
                return (Number(a) - Number(b));
            });
            let str = '';
            for (let j = 0; j < keys.length; j++) {
                str += JSON.stringify(keys[j]);
                str += JSON.stringify(obj[i][keys[j]]);
            }
            if (!stringify.hasOwnProperty(str)) {
                uniques.push(obj[i]);
                stringify[str] = true;
            }
        }
        uniques = uniques;
        return uniques;
    },
    /**
    * @getProperty 获取&设置元素属性
    * el html元素
    * name html元素属性名称
    * val html元素属性名称的值
    */
    getProperty: (el, name, val) => {
        const prefix = 'data-'
        name = prefix + name
        if (val) {
            return el.setAttribute(name, val)
        } else {
            return el.getAttribute(name)
        }
    },
    /**
    * @hasClass 判断是否已存在class
    * el html元素
    * className html class名称
    */
    hasClass: (el, className) => {
        let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
        return reg.test(el.className)
    },
    /**
     * @addClass 添加class
    * el html元素
    * className html class名称
    */
    addClass: (el, className) => {
        if (this.hasClass(el, className)) {
            return
        }
        let newClass = el.className.split(' ')
        newClass.push(className)
        el.className = newClass.join(' ')
    },
    /**
    * @getHost 获取域名主机
    * url 当前页面地址
    * className html class名称
    */
    getHost: (url) => {
        let host = "null";
        if (typeof url == "undefined" || null == url) {
            url = window.location.href;
        }
        let regex = /^\w+\:\/\/([^\/]*).*/;
        let match = url.match(regex);
        if (typeof match != "undefined" && null != match) {
            host = match[1];
        }
        return host;
    },
    /**
    * @getHost 获取域名主机
    * url 当前页面地址
    * className html class名称
    */
    getHost: (url) => {
        let host = "null";
        if (typeof url == "undefined" || null == url) {
            url = window.location.href;
        }
        let regex = /^\w+\:\/\/([^\/]*).*/;
        let match = url.match(regex);
        if (typeof match != "undefined" && null != match) {
            host = match[1];
        }
        return host;
    },
    /**
    * @cutstr 截取字符串长度多余用....代替
    * str 字符串
    * len 需要长度
    */
    cutstr: (str, len) => {
        let temp;
        let icount = 0;
        let patrn = /[^\x00-\xff]/;
        let strre = "";
        for (let i = 0; i < str.length; i++) {
            if (icount < len - 1) {
                temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                    icount = icount + 1;
                } else {
                    icount = icount + 2;
                }
                strre += temp;
            } else {
                break
            }
        }
        return strre + "...";
    },
    /**@throttle
    * 节流函数--规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
    * fun 监控的函数
    * delay 触发时间
    */
    throttle:(fun, delay) => {
        let last, deferTimer
        return function (args) {
            let that = this
            let _args = arguments
            let now = +new Date()
            if (last && now < last + delay) {
                clearTimeout(deferTimer)
                deferTimer = setTimeout(function () {
                    last = now
                    fun.apply(that, _args)
                }, delay)
            } else {
                last = now
                fun.apply(that, _args)
            }
        }
    }
}
export default My_public_fun;

    // 验证
    // const My_RegExp = {};
    // 移动端适配方案
//     (function (doc, win) {
//         var docEl = doc.documentElement,
//             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//             recalc = function () {
//                 var clientWidth = docEl.clientWidth;
//                 var fontSize = 20;
//                 docEl.style.fontSize = fontSize + 'px';
//                 var docStyles = getComputedStyle(docEl);
//                 var realFontSize = parseFloat(docStyles.fontSize);
//                 var scale = realFontSize / fontSize;
//                 console.log("realFontSize: " + realFontSize + ", scale: " + scale);
//                 fontSize = clientWidth / 667 * 20;
//                 if (isIphoneX()) fontSize = 19;
//                 fontSize = fontSize / scale;
//                 docEl.style.fontSize = fontSize + 'px';
//             };
//         // Abort if browser does not support addEventListener
//         if (!doc.addEventListener) return;
//         win.addEventListener(resizeEvt, recalc, false);
//         doc.addEventListener('DOMContentLoaded', recalc, false);

//         // iphoneX判断
//         function isIphoneX() {
//             return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
//         }

//     })(document, window);

// (!function (d) {
//     var c = d.document;
//     var a = c.documentElement;
//     var b = d.devicePixelRatio;
//     var f;

//     function e() {
//         var h = a.getBoundingClientRect().width, g;
//         if (b === 1) {
//             h = 720
//         }
//         if (h > 720) h = 720;//设置基准值的极限值
//         g = h / 7.2;
//         a.style.fontSize = g + "px"
//     }

//     if (b > 2) {
//         b = 3
//     } else {
//         if (b > 1) {
//             b = 2
//         } else {
//             b = 1
//         }
//     }
//     a.setAttribute("data-dpr", b);
//     d.addEventListener("resize", function () {
//         clearTimeout(f);
//         f = setTimeout(e, 200)
//     }, false);
//     e()
// }(window);