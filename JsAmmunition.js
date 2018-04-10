//开头加上分好，避免js合并后相互影
;(function (window, undefined) {
    //一、定义全局数据
    var version = 'v1.0.0', author = 'hank';
    //二、功能模块,demo无实际用处
    var Func = (function () {
        var func1;
        func1 = function (html) {
            console.log('func1');
        };
        return {
            func1: func1
        };
    })();
    //数组功能模块
    var arrays = {
        arrayEqual: function (arr1, arr2) {
            if (arr1 === arr2) {
                return true;
            }
            if (arr1.length != arr2.length) {
                return false;
            }
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        }
    };
    //css功能模块
    var cssClasses = {
        hasClass: function (htmlElement, classNameString) {
            return (new RegExp('(\\s|^)' + classNameString + '(\\s|$)')).test(htmlElement.className);
        },
        addClass: function (htmlElement, classNameString) {
            if (!this.hasClass(htmlElement, classNameString)) {
                htmlElement.className += ' ' + classNameString;
            }
        },
        removeClass: function (htmlElement, classNameString) {
            if (this.hasClass(htmlElement, classNameString)) {
                var reg = new RegExp('(\\s|^)' + classNameString + '(\\s|$)');
                htmlElement.className = htmlElement.className.replace(reg, ' ');
            }
        }
    };
    //cookie功能模块
    var cookies = {
        setCookie: function (name, value, expires) {
            var date = new Date();
            date.setDate(date.getDate() + expires);
            document.cookie = name + '=' + value + ';expires= ' + expires;
        },
        getCookie: function (name) {
            var cookies = document.cookie.replace(/\s/g, "").split(';');
            for (var i = 0; i < cookies.length; i++) {
                var tempArr = cookies[i].split("=");
                if (tempArr[0] == name) {
                    return decodeURIComponent(tempArr[1]);
                }
            }
        },
        removeCookie: function (name) {
            this.setCookie(name, '1', -1);
        }
    };

    var devices = {
        getOS: function () {
            var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
            if (/iphone/i.test(userAgent) || /ipod/i.test(userAgent) || /ipod/i.test(userAgent)) {
                return 'ios';
            }
            if (/android/i.test(userAgent)) {
                return 'android';
            }
            return 'Unkown';
        },
        getExplore: function () {
            var ua = navigator.userAgent.toLowerCase(), result = 'Unkown';
            if (/msie/i.test(ua)) {
                result = 'ie';
            } else if (/edge/i.test(ua)) {
                result = 'edge';
            } else if (/firefox/i.test(ua)) {
                result = 'firefox';
            } else if (/chrome/i.test(ua)) {
                result = 'chrome';
            } else if (/safari/i.test(ua)) {
                result = 'safari';
            }
            return result;
        }
    };
    var keys = {
        keysMap: {
            8: 'Backspace',
            9: 'Tab',
            13: 'Enter',
            16: 'Shift',
            17: 'Ctrl',
            18: 'Alt',
            19: 'Pause',
            20: 'Caps Lock',
            27: 'Escape',
            32: 'Space',
            33: 'Page Up',
            34: 'Page Down',
            35: 'End',
            36: 'Home',
            37: 'Left',
            38: 'Up',
            39: 'Right',
            40: 'Down',
            42: 'Print Screen',
            45: 'Insert',
            46: 'Delete',

            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',

            65: 'A',
            66: 'B',
            67: 'C',
            68: 'D',
            69: 'E',
            70: 'F',
            71: 'G',
            72: 'H',
            73: 'I',
            74: 'J',
            75: 'K',
            76: 'L',
            77: 'M',
            78: 'N',
            79: 'O',
            80: 'P',
            81: 'Q',
            82: 'R',
            83: 'S',
            84: 'T',
            85: 'U',
            86: 'V',
            87: 'W',
            88: 'X',
            89: 'Y',
            90: 'Z',

            91: 'Windows',
            93: 'Right Click',

            96: 'Numpad 0',
            97: 'Numpad 1',
            98: 'Numpad 2',
            99: 'Numpad 3',
            100: 'Numpad 4',
            101: 'Numpad 5',
            102: 'Numpad 6',
            103: 'Numpad 7',
            104: 'Numpad 8',
            105: 'Numpad 9',
            106: 'Numpad *',
            107: 'Numpad +',
            109: 'Numpad -',
            110: 'Numpad .',
            111: 'Numpad /',

            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',

            144: 'Num Lock',
            145: 'Scroll Lock',
            182: 'My Computer',
            183: 'My Calculator',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: '\''
        },
        getKeyName: function (keycode) {
            if (this.keysMap[keycode]) {
                return this.keysMap[keycode];
            } else {
                return 'Unkown key key Code:' + keycode;
            }
        }
    };
    var objects = {
        isEmptyObject: function (obj) {
            if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
                return false;
            }
            return !Object.keys(obj).length;
        },
        deepCloneObject: function (target) {
            var copy;
            if (null == target || "object" != typeof target) {
                return target;
            }
            if (target instanceof Date) {
                copy = new Date();
                copy.setTime(target.getTime());
                return copy;
            }
            if (target instanceof Array) {
                copy = [];
                for (var i = 0, len = target.length; i < len; i++) {
                    copy[i] = this.deepCloneObject(target[i]);
                }
                return copy;
            }
            if (target instanceof Object) {
                copy = {};
                for (var attr in target) {
                    if (target.hasOwnProperty(attr)) {
                        copy[attr] = this.deepCloneObject(target[attr])
                    }
                }
                return copy;
            }

            throw new Error("Unable to copy target! Its type isn't supported.")
        }
    };

    var randoms = {
        randomNumber: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        randomColor: function () {
            return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
        }
    };

    var times = {
        timePass: function (startTime) {
            var currentTime = Date.parse(new Date()),
                passTime = currentTime - startTime,
                year = parseInt(passTime / (1000 * 60 * 60 * 24 * 365)),
                month = parseInt(passTime / (1000 * 60 * 60 * 24 * 30)),
                day = parseInt(passTime / (1000 * 60 * 60 * 24)),
                hour = parseInt(passTime / (1000 * 60 * 60)),
                minute = parseInt(passTime / (1000 * 60));
            if (year) {
                return year + '年前';
            }
            if (month) {
                return month + '个月前';
            }
            if (day) {
                return day + '天前';
            }
            if (hour) {
                return hour + '小时前';
            }
            if (minute) {
                return minute + '分钟前';
            } else {
                return '刚刚';
            }
        },
        timeRemain: function (endTime) {
            var currentDate = new Date(),
                endDate = new Date(endTime),
                remainTime = endTime - currentDate.getTime(),
                year = 0,
                month = 0,
                day = 0,
                hour = 0,
                minute = 0,
                second = 0;
            if (t > 0) {
                year = Math.floor(t / 1000 / 60 / 60 / 24 / 365);
                month = Math.floor(t / 1000 / 60 / 60 / 24 / 30);
                day = Math.floor(t / 1000 / 60 / 60 / 24);
                hour = Math.floor(t / 1000 / 60 / 60 % 24);
                minute = Math.floor(t / 1000 / 60 % 60);
                second = Math.floor(t / 1000 % 60);
            }
            return year + '年' + month + '月' + day + '天' + hour + '小时' + minute + '分钟' + second + '秒';
        },
        isSameDay: function (date1, date2) {
            if (!date2) {
                date2 = new Date();
            }
            var date1_year = date1.getFullYear(),
                date1_month = date1.getMonth() + 1,
                date1_day = date1.getDate();
            var date2_year = date2.getFullYear(),
                date2_month = date2.getMonth() + 1,
                date2_day = date2.getDate();
            return date1_year === date2_year && date1_month === date2_month && date1_day === date2_day;
        }
    };
    var urls = {
        parseQuery: function (url) {
            if (url == null) {
                url = window.location.href;
            }
            var search;
            if (url[0] === '?') {
                search = url.substr(1);
            } else {
                search = url.substring(url.lastIndexOf('?') + 1);
            }
            if (search === '') {
                return {};
            }
            search = search.split('&');
            var query = {};
            for (var i = 0; i < search.length; i++) {
                var pair = search[i].split('=');
                query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
            }
            return query;
        },
        strinfyQuery: function (obj) {
            if (!obj) {
                return '';
            }
            var pairs = [];
            for (var key in obj) {
                var value = obj[key];
                if (value instanceof Array) {
                    for (var i = 0; i < value.length; i++) {
                        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                    }
                    continue;
                }
                pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
            return pairs.join('&');
        }
    };

    var supports = {
        isSupportWebP: function () {
            return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }
    };
    var regexps = {
        isEmail: function (str) {
            return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
        },
        isIdCard: function (str) {
            return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
        },
        isPhoneNumber: function (str) {
            return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
        },
        isUrl: function (str) {
            return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
        }
    };
    var domsRequestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
    })();
    var doms = {
        windowResize: function (down, up) {
            var clientHeight = window.innerHeight;
            down = typeof down === 'function' ? down : function () {

            };
            up = typeof up === 'function' ? up : function () {

            };
            window.addEventListener('resize', function () {
                var height = window.innerHeight;
                if (height == clientHeight) {
                    down();
                }
                if (height < clientHeight) {
                    up();
                }
            });
        },
        getScrollTop: function () {
            return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        },
        setScrollTop: function (value) {
            window.scrollTo(0, value);
            return value;
        },
        scrollTo: function (to, duration) {
            if (duration < 0) {
                this.setScrollTop(to);
                return;
            }

            var diff = to - this.getScrollTop();
            if (diff == 0) {
                return;
            }
            var step = diff / duration * 10;
            requestAnimationFrame(function () {
                if (Math.abs(step) > Math.abs(diff)) {
                    this.setScrollTop(this.getScrollTop() + diff);
                    return;
                }
                this.setScrollTop(this.getScrollTop() + step);
                if (diff > 0 && this.getScrollTop() >= to || diff < 0 && this.getScrollTop() <= to) {
                    return;
                }
                scrollTo(to, duration - 16);
            })
        },
        getOffset: function (htmlElement) {
            var pos = {
                left: 0,
                top: 0
            };
            while (htmlElement) {
                pos.left += htmlElement.offsetLeft;
                post.top += htmlElement.offsetTop;
                htmlElement = htmlElement.parent;
            }
            return pos;
        }
    };
    return {
        JsAmmunition: {
            version: version,
            author: author,
            arrays: arrays,
            cssClasses: cssClasses,
            cookies: cookies,
            devices: devices,
            keys: keys,
            objects: objects,
            randoms: randoms,
            times: times,
            urls: urls,
            supports: supports,
            regexps: regexps,
            doms: doms
        }
    }
})(window);