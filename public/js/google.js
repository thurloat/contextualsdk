window['___jsl'] = window['___jsl'] || {};
window['___jsl']['u'] = 'https:\/\/www-gm-opensocial.googleusercontent.com\/gadgets\/js\/auth-refresh:com.google.gadgets.analytics:core:dynamic-height:google.contentmatch:opensocial-0.9:osapi:setprefs.js?container=gm&amp;nocache=0&amp;debug=0&amp;c=0&amp;v=1674b5c26f02f05f8a3f009dc6e595b7&amp;sv=7&amp;jsload=0';
window['___jsl']['f'] = ['auth-refresh', 'com.google.gadgets.analytics', 'core', 'dynamic-height', 'google.contentmatch', 'opensocial-0.9', 'osapi', 'setprefs'];
window['___jsl']['ms'] = 'https://apis.google.com';
(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({
    "opensocial": {
        "invalidatePath": "//%host%/gadgets/api/rpc",
        "path": "//%host%/api/rpc",
        "domain": "google.com",
        "supportedFields": {
            "person": ["id", "name", "thumbnailUrl", "nickname"],
            "sortOrder": ["name"],
            "mediaItem": ["album_id", "created", "description", "duration", "file_size", "id", "language", "last_updated", "location", "mime_type", "num_comments", "num_views", "num_votes", "rating", "start_time", "tagged_people", "tags", "thumbnail_url", "title", "type", "url"],
            "album": ["id", "thumbnailUrl", "title", "description", "location", "ownerId"],
            "name": ["unstructured", "familyName", "givenName", "additionalName", "honorificPrefix, honorificSuffix"],
            "filterType": ["all", "hasApp"],
            "activityMediaItem": ["type", "mimeType", "url"],
            "activity": ["appId", "body", "bodyId", "externalId", "id", "mediaItems", "postedTime", "priority", "streamFaviconUrl", "streamSourceUrl", "streamTitle", "streamUrl", "templateParams", "title", "url", "userId", "mediaItems", "postedTime"]
        }
    },
    "rpc": {
        "commSwf": "//xpc.googleusercontent.com/gadgets/xpc.swf",
        "passReferrer": "p2c:query",
        "parentRelayUrl": "/rpc_relay.html"
    },
    "osapi.services": {
        "//%host%/gadgets/api/rpc": ["http.get", "http.post", "http.put", "http.delete", "http.head", "cache.invalidate"],
        "//%host%/api/rpc": ["activities.get", "activities.create", "activities.update", "activities.delete", "activities.supportedFields", "appdata.get", "appdata.create", "appdata.update", "appdata.delete", "finance.get", "weather.get", "people.get", "people.supportedFields"],
        "gadgets.rpc": ["container.listMethods"]
    },
    "core.io": {
        "jsonProxyUrl": "//%host%/gadgets/makeRequest",
        "proxyUrl": "//www-gm-opensocial.googleusercontent.com/gadgets/proxy/refresh=%refresh%&container=%container%%rewriteMime%&gadget=%gadget%/%rawurl%"
    }
}); /* [start] feature=gapi-globals */
var gapi = window.gapi || {};
gapi.client = window.gapi && window.gapi.client || {};;

/* [end] feature=gapi-globals */

/* [start] feature=globals */
var gadgets = window.gadgets || {},
    shindig = window.shindig || {},
    osapi = window.osapi = window.osapi || {},
    google = window.google || {};;

/* [end] feature=globals */

/* [start] feature=taming */
var safeJSON = window.safeJSON;
var tamings___ = window.tamings___ || [];
var bridge___;
var caja___ = window.caja___;
var ___ = window.___;;

/* [end] feature=taming */

/* [start] feature=core.config.base */
window['___cfg'] = window['___cfg'] || window['___gcfg'];;
if (!window.gadgets["config"]) {
    gadgets.config = function() {
        var f;
        var h = {};
        var b = {};

        function c(j, l) {
            for (var k in l) {
                if (!l.hasOwnProperty(k)) {
                    continue
                }
                if (typeof j[k] === "object" && typeof l[k] === "object") {
                    c(j[k], l[k])
                } else {
                    j[k] = l[k]
                }
            }
        }
        function i() {
            var j = document.scripts || document.getElementsByTagName("script");
            if (!j || j.length == 0) {
                return null
            }
            var m;
            if (f.u) {
                for (var k = 0; !m && k < j.length; ++k) {
                    var l = j[k];
                    if (l.src && l.src.indexOf(f.u) == 0) {
                        m = l
                    }
                }
            }
            if (!m) {
                m = j[j.length - 1]
            }
            if (!m.src) {
                return null
            }
            return m
        }
        function a(j) {
            var k = "";
            if (j.nodeType == 3 || j.nodeType == 4) {
                k = j.nodeValue
            } else {
                if (j.innerText) {
                    k = j.innerText
                } else {
                    if (j.innerHTML) {
                        k = j.innerHTML
                    } else {
                        if (j.firstChild) {
                            var l = [];
                            for (var m = j.firstChild;
                                 m;
                                 m = m.nextSibling) {
                                l.push(a(m))
                            }
                            k = l.join("")
                        }
                    }
                }
            }
            return k
        }
        function e(k) {
            if (!k) {
                return {}
            }
            var j;
            while (k.charCodeAt(k.length - 1) == 0) {
                k = k.substring(0, k.length - 1)
            }
            try {
                j = (new Function("return (" + k + "\n)"))()
            } catch (l) {}
            if (typeof j === "object") {
                return j
            }
            try {
                j = (new Function("return ({" + k + "\n})"))()
            } catch (l) {}
            return typeof j === "object" ? j : {}
        }
        function g(n) {
            var p = window.___cfg;
            if (p) {
                c(n, p)
            }
            var o = i();
            if (!o) {
                return
            }
            var k = a(o);
            var j = e(k);
            if (f.f && f.f.length == 1) {
                var m = f.f[0];
                if (!j[m]) {
                    var l = {};
                    l[f.f[0]] = j;
                    j = l
                }
            }
            c(n, j)
        }
        function d(o) {
            for (var l in h) {
                if (h.hasOwnProperty(l)) {
                    var n = h[l];
                    for (var m = 0, k = n.length;
                         m < k; ++m) {
                        o(l, n[m])
                    }
                }
            }
        }
        return {
            register: function(l, k, j, m) {
                var n = h[l];
                if (!n) {
                    n = [];
                    h[l] = n
                }
                n.push({
                    validators: k || {},
                    callback: j,
                    callOnUpdate: m
                })
            },
            get: function(j) {
                if (j) {
                    return b[j] || {}
                }
                return b
            },
            init: function(k, j) {
                f = window.___jsl || {};
                c(b, k);
                g(b);
                var l = window.___config || {};
                c(b, l);
                d(function(q, p) {
                    var o = b[q];
                    if (o && !j) {
                        var m = p.validators;
                        for (var n in m) {
                            if (m.hasOwnProperty(n)) {
                                if (!m[n](o[n])) {
                                    throw new Error('Invalid config value "' + o[n] + '" for parameter "' + n + '" in component "' + q + '"')
                                }
                            }
                        }
                    }
                    if (p.callback) {
                        p.callback(b)
                    }
                })
            },
            update: function(k, o) {
                var n = [];
                d(function(p, j) {
                    if (k.hasOwnProperty(p) || (o && b && b[p])) {
                        if (j.callback && j.callOnUpdate) {
                            n.push(j.callback)
                        }
                    }
                });
                b = o ? {} : b || {};
                c(b, k);
                for (var m = 0, l = n.length;
                     m < l; ++m) {
                    n[m](b)
                }
            }
        }
    }()
} else {
    gadgets.config = window.gadgets["config"];
    gadgets.config.register = gadgets.config.register;
    gadgets.config.get = gadgets.config.get;
    gadgets.config.init = gadgets.config.init;
    gadgets.config.update = gadgets.config.update
};;

/* [end] feature=core.config.base */

/* [start] feature=core.log */
gadgets.log = (function() {
    var e = 1;
    var a = 2;
    var f = 3;
    var c = 4;
    var d = function(i) {
        b(e, i)
    };
    gadgets.warn = function(i) {
        b(a, i)
    };
    gadgets.error = function(i) {
        b(f, i)
    };
    gadgets.setLogLevel = function(i) {
        h = i
    };

    function b(k, i) {
        if (k < h || !g) {
            return
        }
        if (k === a && g.warn) {
            g.warn(i)
        } else {
            if (k === f && g.error) {
                try {
                    g.error(i)
                } catch (j) {}
            } else {
                if (g.log) {
                    g.log(i)
                }
            }
        }
    }
    d.INFO = e;
    d.WARNING = a;
    d.NONE = c;
    var h = e;
    var g = window.console ? window.console : window.opera ? window.opera.postError : undefined;
    return d
})();;;

/* [end] feature=core.log */

/* [start] feature=core.config */
(function() {
    gadgets.config.EnumValidator = function(d) {
        var c = [];
        if (arguments.length > 1) {
            for (var b = 0, a;
                 (a = arguments[b]); ++b) {
                c.push(a)
            }
        } else {
            c = d
        }
        return function(f) {
            for (var e = 0, g;
                 (g = c[e]); ++e) {
                if (f === c[e]) {
                    return true
                }
            }
            return false
        }
    };
    gadgets.config.RegExValidator = function(a) {
        return function(b) {
            return a.test(b)
        }
    };
    gadgets.config.ExistsValidator = function(a) {
        return typeof a !== "undefined"
    };
    gadgets.config.NonEmptyStringValidator = function(a) {
        return typeof a === "string" && a.length > 0
    };
    gadgets.config.BooleanValidator = function(a) {
        return typeof a === "boolean"
    };
    gadgets.config.LikeValidator = function(a) {
        return function(c) {
            for (var d in a) {
                if (a.hasOwnProperty(d)) {
                    var b = a[d];
                    if (!b(c[d])) {
                        return false
                    }
                }
            }
            return true
        }
    }
})();;

/* [end] feature=core.config */

/* [start] feature=core.util.base */
gadgets.util = gadgets.util || {};
(function() {
    gadgets.util.makeClosure = function(d, f, e) {
        var c = [];
        for (var b = 2, a = arguments.length;
             b < a; ++b) {
            c.push(arguments[b])
        }
        return function() {
            var g = c.slice();
            for (var k = 0, h = arguments.length;
                 k < h; ++k) {
                g.push(arguments[k])
            }
            return f.apply(d, g)
        }
    };
    gadgets.util.makeEnum = function(b) {
        var c, a, d = {};
        for (c = 0;
             (a = b[c]); ++c) {
            d[a] = a
        }
        return d
    }
})();;

/* [end] feature=core.util.base */

/* [start] feature=core.util.dom */
gadgets.util = gadgets.util || {};
(function() {
    var c = "http://www.w3.org/1999/xhtml";

    function b(f, e) {
        var h = e || {};
        for (var g in h) {
            if (h.hasOwnProperty(g)) {
                f[g] = h[g]
            }
        }
    }
    function d(g, f) {
        var e = ["<", g];
        var i = f || {};
        for (var h in i) {
            if (i.hasOwnProperty(h)) {
                e.push(" ");
                e.push(h);
                e.push('="');
                e.push(gadgets.util.escapeString(i[h]));
                e.push('"')
            }
        }
        e.push("></");
        e.push(g);
        e.push(">");
        return e.join("")
    }
    function a(f) {
        var g = "";
        if (f.nodeType == 3 || f.nodeType == 4) {
            g = f.nodeValue
        } else {
            if (f.innerText) {
                g = f.innerText
            } else {
                if (f.innerHTML) {
                    g = f.innerHTML
                } else {
                    if (f.firstChild) {
                        var e = [];
                        for (var h = f.firstChild;
                             h;
                             h = h.nextSibling) {
                            e.push(a(h))
                        }
                        g = e.join("")
                    }
                }
            }
        }
        return g
    }
    gadgets.util.createElement = function(f) {
        var e;
        if ((!document.body) || document.body.namespaceURI) {
            try {
                e = document.createElementNS(c, f)
            } catch (g) {}
        }
        return e || document.createElement(f)
    };
    gadgets.util.createIframeElement = function(g) {
        var i = gadgets.util.createElement("iframe");
        try {
            var e = d("iframe", g);
            var f = gadgets.util.createElement(e);
            if (f && ((!i) || ((f.tagName == i.tagName) && (f.namespaceURI == i.namespaceURI)))) {
                i = f
            }
        } catch (h) {}
        b(i, g);
        return i
    };
    gadgets.util.getBodyElement = function() {
        if (document.body) {
            return document.body
        }
        try {
            var f = document.getElementsByTagNameNS(c, "body");
            if (f && (f.length == 1)) {
                return f[0]
            }
        } catch (e) {}
        return document.documentElement || document
    };
    gadgets.util.getInnerText = function(e) {
        return a(e)
    }
})();;

/* [end] feature=core.util.dom */

/* [start] feature=core.util.event */
gadgets.util = gadgets.util || {};
(function() {
    gadgets.util.attachBrowserEvent = function(c, b, d, a) {
        if (typeof c.addEventListener != "undefined") {
            c.addEventListener(b, d, a)
        } else {
            if (typeof c.attachEvent != "undefined") {
                c.attachEvent("on" + b, d)
            } else {
                gadgets.warn("cannot attachBrowserEvent: " + b)
            }
        }
    };
    gadgets.util.removeBrowserEvent = function(c, b, d, a) {
        if (c.removeEventListener) {
            c.removeEventListener(b, d, a)
        } else {
            if (c.detachEvent) {
                c.detachEvent("on" + b, d)
            } else {
                gadgets.warn("cannot removeBrowserEvent: " + b)
            }
        }
    }
})();;

/* [end] feature=core.util.event */

/* [start] feature=core.util.onload */
gadgets.util = gadgets.util || {};
(function() {
    var a = [];
    gadgets.util.registerOnLoadHandler = function(b) {
        a.push(b)
    };
    gadgets.util.runOnLoadHandlers = function() {
        for (var c = 0, b = a.length;
             c < b; ++c) {
            a[c]()
        }
    }
})();;

/* [end] feature=core.util.onload */

/* [start] feature=core.util.string */
gadgets.util = gadgets.util || {};
(function() {
    var a = {
        0: false,
        10: true,
        13: true,
        34: true,
        39: true,
        60: true,
        62: true,
        92: true,
        8232: true,
        8233: true,
        65282: true,
        65287: true,
        65308: true,
        65310: true,
        65340: true
    };

    function b(c, d) {
        return String.fromCharCode(d)
    }
    gadgets.util.escape = function(c, g) {
        if (!c) {
            return c
        } else {
            if (typeof c === "string") {
                return gadgets.util.escapeString(c)
            } else {
                if (typeof c === "array") {
                    for (var f = 0, d = c.length;
                         f < d; ++f) {
                        c[f] = gadgets.util.escape(c[f])
                    }
                } else {
                    if (typeof c === "object" && g) {
                        var e = {};
                        for (var h in c) {
                            if (c.hasOwnProperty(h)) {
                                e[gadgets.util.escapeString(h)] = gadgets.util.escape(c[h], true)
                            }
                        }
                        return e
                    }
                }
            }
        }
        return c
    };
    gadgets.util.escapeString = function(g) {
        if (!g) {
            return g
        }
        var d = [],
            f, h;
        for (var e = 0, c = g.length;
             e < c; ++e) {
            f = g.charCodeAt(e);
            h = a[f];
            if (h === true) {
                d.push("&#", f, ";")
            } else {
                if (h !== false) {
                    d.push(g.charAt(e))
                }
            }
        }
        return d.join("")
    };
    gadgets.util.unescapeString = function(c) {
        if (!c) {
            return c
        }
        return c.replace(/&#([0-9]+);/g, b)
    }
})();;

/* [end] feature=core.util.string */

/* [start] feature=core.util.urlparams */
gadgets.util = gadgets.util || {};
(function() {
    var a = null;

    function b(e) {
        var f;
        var c = e.indexOf("?");
        var d = e.indexOf("#");
        if (d === -1) {
            f = e.substr(c + 1)
        } else {
            f = [e.substr(c + 1, d - c - 1), "&", e.substr(d + 1)].join("")
        }
        return f.split("&")
    }
    gadgets.util.getUrlParameters = function(p) {
        var d = typeof p === "undefined";
        if (a !== null && d) {
            return a
        }
        var l = {};
        var f = b(p || document.location.href);
        var n = window.decodeURIComponent ? decodeURIComponent : unescape;
        for (var h = 0, g = f.length;
             h < g; ++h) {
            var m = f[h].indexOf("=");
            if (m === -1) {
                continue
            }
            var c = f[h].substring(0, m);
            var o = f[h].substring(m + 1);
            o = o.replace(/\+/g, " ");
            try {
                l[c] = n(o)
            } catch (k) {}
        }
        if (d) {
            a = l
        }
        return l
    };
    gadgets.util.getUrlParameters()
})();;

/* [end] feature=core.util.urlparams */

/* [start] feature=gapi.util-globals */
gapi.util = window.gapi && window.gapi.util || {};;

/* [end] feature=gapi.util-globals */

/* [start] feature=core.util */
gadgets.util = gadgets.util || {};
(function() {
    var b = {};
    var a = {};

    function c(d) {
        b = d["core.util"] || {}
    }
    if (gadgets.config) {
        gadgets.config.register("core.util", null, c)
    }
    gadgets.util.getFeatureParameters = function(d) {
        return typeof b[d] === "undefined" ? null : b[d]
    };
    gadgets.util.hasFeature = function(d) {
        return typeof b[d] !== "undefined"
    };
    gadgets.util.getServices = function() {
        return a
    }
})();;

/* [end] feature=core.util */

/* [start] feature=gapi.util.getOrigin */
gapi.util.getOrigin = function(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    0 > a.indexOf("://") && (a = window.location.protocol + "//" + a);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    var a = a.substring(0, a.indexOf("://")),
        c = "",
        d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1),
            b = b.substring(0, d);
        if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
    }
    return a + "://" + b + c
};;

/* [end] feature=gapi.util.getOrigin */

/* [start] feature=core.json */
if (window.JSON && window.JSON.parse && window.JSON.stringify) {
    gadgets.json = (function() {
        var a = /___$/;

        function b(d, e) {
            var c = this[d];
            return c
        }
        return {
            parse: function(d) {
                try {
                    return window.JSON.parse(d)
                } catch (c) {
                    return false
                }
            },
            stringify: function(d) {
                var h = window.JSON.stringify;

                function f(e) {
                    return h.call(this, e, b)
                }
                var g = (Array.prototype.toJSON && h([{
                    x: 1
                }]) === '"[{\\"x\\": 1}]"') ? f : h;
                try {
                    return g(d, function(i, e) {
                        return !a.test(i) ? e : void 0
                    })
                } catch (c) {
                    return null
                }
            }
        }
    })()
};;;
if (!(window.JSON && window.JSON.parse && window.JSON.stringify)) {
    gadgets.json = function() {
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        Date.prototype.toJSON = function() {
            return [this.getUTCFullYear(), "-", f(this.getUTCMonth() + 1), "-", f(this.getUTCDate()), "T", f(this.getUTCHours()), ":", f(this.getUTCMinutes()), ":", f(this.getUTCSeconds()), "Z"].join("")
        };
        var m = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };

        function stringify(value) {
            var a, i, k, l, r = /[\"\\\x00-\x1f\x7f-\x9f]/g,
                v;
            switch (typeof value) {
                case "string":
                    return r.test(value) ? '"' + value.replace(r, function(a) {
                        var c = m[a];
                        if (c) {
                            return c
                        }
                        c = a.charCodeAt();
                        return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
                    }) + '"' : '"' + value + '"';
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    a = [];
                    if (typeof value.length === "number" && !value.propertyIsEnumerable("length")) {
                        l = value.length;
                        for (i = 0;
                             i < l;
                             i += 1) {
                            a.push(stringify(value[i]) || "null")
                        }
                        return "[" + a.join(",") + "]"
                    }
                    for (k in value) {
                        if (/___$/.test(k)) {
                            continue
                        }
                        if (value.hasOwnProperty(k)) {
                            if (typeof k === "string") {
                                v = stringify(value[k]);
                                if (v) {
                                    a.push(stringify(k) + ":" + v)
                                }
                            }
                        }
                    }
                    return "{" + a.join(",") + "}"
            }
            return ""
        }
        return {
            stringify: stringify,
            parse: function(text) {
                if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    return eval("(" + text + ")")
                }
                return false
            }
        }
    }()
};;
gadgets.json.flatten = function(c) {
    var d = {};
    if (c === null || c === undefined) {
        return d
    }
    for (var a in c) {
        if (c.hasOwnProperty(a)) {
            var b = c[a];
            if (null === b || undefined === b) {
                continue
            }
            d[a] = (typeof b === "string") ? b : gadgets.json.stringify(b)
        }
    }
    return d
};;

/* [end] feature=core.json */

/* [start] feature=shindig.auth */
shindig.Auth = function() {
    var authToken = null;
    var trusted = null;

    function addParamsToToken(urlParams) {
        var args = authToken.split("&");
        for (var i = 0;
             i < args.length;
             i++) {
            var nameAndValue = args[i].split("=");
            if (nameAndValue.length === 2) {
                var name = nameAndValue[0];
                var value = nameAndValue[1];
                if (value === "$") {
                    value = encodeURIComponent(urlParams[name]);
                    args[i] = name + "=" + value
                }
            }
        }
        authToken = args.join("&")
    }
    function init(configuration) {
        var urlParams = gadgets.util.getUrlParameters();
        var config = configuration["shindig.auth"] || {};
        if (config.authToken) {
            authToken = config.authToken
        } else {
            if (urlParams.st) {
                authToken = urlParams.st
            }
        }
        if (authToken !== null) {
            addParamsToToken(urlParams)
        }
        if (config.trustedJson) {
            trusted = (eval("(" + config.trustedJson + ")"))
        }
    }
    gadgets.config.register("shindig.auth", null, init);
    return {
        getSecurityToken: function() {
            return authToken
        },
        updateSecurityToken: function(newToken) {
            authToken = newToken
        },
        getTrustedData: function() {
            return trusted
        }
    }
};;
shindig.auth = new shindig.Auth();;

/* [end] feature=shindig.auth */

/* [start] feature=rpc */
gadgets.rpctx = gadgets.rpctx || {};
if (!gadgets.rpctx.wpm) {
    gadgets.rpctx.wpm = function() {
        var e, d;
        var c = true;

        function b(h, i, g) {
            if (typeof window.addEventListener != "undefined") {
                window.addEventListener(h, i, g)
            } else {
                if (typeof window.attachEvent != "undefined") {
                    window.attachEvent("on" + h, i)
                }
            }
        }
        function a(h, i, g) {
            if (window.removeEventListener) {
                window.removeEventListener(h, i, g)
            } else {
                if (window.detachEvent) {
                    window.detachEvent("on" + h, i)
                }
            }
        }
        function f(h) {
            var i = gadgets.json.parse(h.data);
            if (!i || !i.f) {
                return
            }
            var g = gadgets.rpc.getTargetOrigin(i.f);
            if (c && (typeof h.origin !== "undefined" ? h.origin !== g : h.domain !== /^.+:\/\/([^:]+).*/.exec(g)[1])) {
                return
            }
            e(i, h.origin)
        }
        return {
            getCode: function() {
                return "wpm"
            },
            isParentVerifiable: function() {
                return true
            },
            init: function(h, i) {
                function g(k) {
                    var j = k && k.rpc || {};
                    if (String(j.disableForceSecure) === "true") {
                        c = false
                    }
                }
                gadgets.config.register("rpc", null, g);
                e = h;
                d = i;
                b("message", f, false);
                d("..", true);
                return true
            },
            setup: function(h, g) {
                d(h, true);
                return true
            },
            call: function(h, k, j) {
                var g = gadgets.rpc.getTargetOrigin(h);
                var i = gadgets.rpc._getTargetWin(h);
                if (g) {
                    window.setTimeout(function() {
                        i.postMessage(gadgets.json.stringify(j), g)
                    }, 0)
                } else {
                    gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
                }
                return true
            }
        }
    }()
};;;
gadgets.rpctx = gadgets.rpctx || {};
if (!gadgets.rpctx.frameElement) {
    gadgets.rpctx.frameElement = function() {
        var e = "__g2c_rpc";
        var b = "__c2g_rpc";
        var d;
        var c;

        function a(g, k, j) {
            try {
                if (k !== "..") {
                    var f = window.frameElement;
                    if (typeof f[e] === "function") {
                        if (typeof f[e][b] !== "function") {
                            f[e][b] = function(l) {
                                d(gadgets.json.parse(l))
                            }
                        }
                        f[e](gadgets.json.stringify(j));
                        return true
                    }
                } else {
                    var i = document.getElementById(g);
                    if (typeof i[e] === "function" && typeof i[e][b] === "function") {
                        i[e][b](gadgets.json.stringify(j));
                        return true
                    }
                }
            } catch (h) {}
            return false
        }
        return {
            getCode: function() {
                return "fe"
            },
            isParentVerifiable: function() {
                return false
            },
            init: function(f, g) {
                d = f;
                c = g;
                return true
            },
            setup: function(j, f) {
                if (j !== "..") {
                    try {
                        var i = document.getElementById(j);
                        i[e] = function(k) {
                            d(gadgets.json.parse(k))
                        }
                    } catch (h) {
                        return false
                    }
                }
                if (j === "..") {
                    c("..", true);
                    var g = function() {
                        window.setTimeout(function() {
                            gadgets.rpc.call(j, gadgets.rpc.ACK)
                        }, 500)
                    };
                    gadgets.util.registerOnLoadHandler(g)
                }
                return true
            },
            call: function(f, h, g) {
                return a(f, h, g)
            }
        }
    }()
};;;;;
gadgets.rpctx = gadgets.rpctx || {};
if (!gadgets.rpctx.nix) {
    gadgets.rpctx.nix = function() {
        var c = "GRPC____NIXVBS_wrapper";
        var d = "GRPC____NIXVBS_get_wrapper";
        var f = "GRPC____NIXVBS_handle_message";
        var b = "GRPC____NIXVBS_create_channel";
        var a = 10;
        var j = 500;
        var i = {};
        var h;
        var g = 0;

        function e() {
            var l = i[".."];
            if (l) {
                return
            }
            if (++g > a) {
                gadgets.warn("Nix transport setup failed, falling back...");
                h("..", false);
                return
            }
            if (!l && window.opener && "GetAuthToken" in window.opener) {
                l = window.opener;
                if (l.GetAuthToken() == gadgets.rpc.getAuthToken("..")) {
                    var k = gadgets.rpc.getAuthToken("..");
                    l.CreateChannel(window[d]("..", k), k);
                    i[".."] = l;
                    window.opener = null;
                    h("..", true);
                    return
                }
            }
            window.setTimeout(function() {
                e()
            }, j)
        }
        return {
            getCode: function() {
                return "nix"
            },
            isParentVerifiable: function() {
                return false
            },
            init: function(l, m) {
                h = m;
                if (typeof window[d] !== "unknown") {
                    window[f] = function(o) {
                        window.setTimeout(function() {
                            l(gadgets.json.parse(o))
                        }, 0)
                    };
                    window[b] = function(o, q, p) {
                        if (gadgets.rpc.getAuthToken(o) === p) {
                            i[o] = q;
                            h(o, true)
                        }
                    };
                    var k = "Class " + c + "\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n " + f + "(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call " + b + "(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction " + d + "(name, auth)\nDim wrap\nSet wrap = New " + c + "\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet " + d + " = wrap\nEnd Function";
                    try {
                        window.execScript(k, "vbscript")
                    } catch (n) {
                        return false
                    }
                }
                return true
            },
            setup: function(o, k) {
                if (o === "..") {
                    e();
                    return true
                }
                try {
                    var m = document.getElementById(o);
                    var n = window[d](o, k);
                    m.contentWindow.opener = n
                } catch (l) {
                    return false
                }
                return true
            },
            call: function(k, n, m) {
                try {
                    if (i[k]) {
                        i[k].SendMessage(gadgets.json.stringify(m))
                    }
                } catch (l) {
                    return false
                }
                return true
            }
        }
    }()
};;;
gadgets.rpctx = gadgets.rpctx || {};
if (!gadgets.rpctx.rmr) {
    gadgets.rpctx.rmr = function() {
        var h = 500;
        var f = 10;
        var i = {};
        var a = gadgets.util.getUrlParameters()["parent"];
        var c;
        var j;

        function l(q, o, p, n) {
            var r = function() {
                document.body.appendChild(q);
                q.src = "about:blank";
                if (n) {
                    q.onload = function() {
                        m(n)
                    }
                }
                q.src = o + "#" + p
            };
            if (document.body) {
                r()
            } else {
                gadgets.util.registerOnLoadHandler(function() {
                    r()
                })
            }
        }
        function d(q) {
            if (typeof i[q] === "object") {
                return
            }
            var r = document.createElement("iframe");
            var o = r.style;
            o.position = "absolute";
            o.top = "0px";
            o.border = "0";
            o.opacity = "0";
            o.width = "10px";
            o.height = "1px";
            r.id = "rmrtransport-" + q;
            r.name = r.id;
            var p = gadgets.rpc.getRelayUrl(q);
            var n = gadgets.rpc.getOrigin(a);
            if (!p) {
                p = n + "/robots.txt"
            }
            i[q] = {
                frame: r,
                receiveWindow: null,
                relayUri: p,
                relayOrigin: n,
                searchCounter: 0,
                width: 10,
                waiting: true,
                queue: [],
                sendId: 0,
                recvId: 0,
                verifySendToken: String(Math.random()),
                verifyRecvToken: null,
                originVerified: false
            };
            if (q !== "..") {
                l(r, p, b(q))
            }
            e(q)
        }
        function e(p) {
            var r = null;
            i[p].searchCounter++;
            try {
                var o = gadgets.rpc._getTargetWin(p);
                if (p === "..") {
                    r = o.frames["rmrtransport-" + gadgets.rpc.RPC_ID]
                } else {
                    r = o.frames["rmrtransport-.."]
                }
            } catch (q) {}
            var n = false;
            if (r) {
                n = g(p, r)
            }
            if (!n) {
                if (i[p].searchCounter > f) {
                    return
                }
                window.setTimeout(function() {
                    e(p)
                }, h)
            }
        }
        function k(o, q, u, t) {
            var p = null;
            if (u !== "..") {
                p = i[".."]
            } else {
                p = i[o]
            }
            if (p) {
                if (q !== gadgets.rpc.ACK) {
                    p.queue.push(t)
                }
                if (p.waiting || (p.queue.length === 0 && !(q === gadgets.rpc.ACK && t && t.ackAlone === true))) {
                    return true
                }
                if (p.queue.length > 0) {
                    p.waiting = true
                }
                var n = p.relayUri + "#" + b(o);
                try {
                    p.frame.contentWindow.location = n;
                    var r = p.width == 10 ? 20 : 10;
                    p.frame.style.width = r + "px";
                    p.width = r
                } catch (s) {
                    return false
                }
            }
            return true
        }
        function b(o) {
            var p = i[o];
            var n = {
                id: p.sendId
            };
            if (p) {
                n.d = Array.prototype.slice.call(p.queue, 0);
                var q = {
                    s: gadgets.rpc.ACK,
                    id: p.recvId
                };
                if (!p.originVerified) {
                    q.sendToken = p.verifySendToken
                }
                if (p.verifyRecvToken) {
                    q.recvToken = p.verifyRecvToken
                }
                n.d.push(q)
            }
            return gadgets.json.stringify(n)
        }
        function m(y) {
            var v = i[y];
            var r = v.receiveWindow.location.hash.substring(1);
            var z = gadgets.json.parse(decodeURIComponent(r)) || {};
            var o = z.d || [];
            var p = false;
            var u = false;
            var w = 0;
            var n = (v.recvId - z.id);
            for (var q = 0;
                 q < o.length; ++q) {
                var t = o[q];
                if (t.s === gadgets.rpc.ACK) {
                    j(y, true);
                    v.verifyRecvToken = t.sendToken;
                    if (!v.originVerified && t.recvToken && String(t.recvToken) == String(v.verifySendToken)) {
                        v.originVerified = true
                    }
                    if (v.waiting) {
                        u = true
                    }
                    v.waiting = false;
                    var s = Math.max(0, t.id - v.sendId);
                    v.queue.splice(0, s);
                    v.sendId = Math.max(v.sendId, t.id || 0);
                    continue
                }
                p = true;
                if (++w <= n) {
                    continue
                }++v.recvId;
                c(t, v.originVerified ? v.relayOrigin : undefined)
            }
            if (p || (u && v.queue.length > 0)) {
                var x = (y === "..") ? gadgets.rpc.RPC_ID : "..";
                k(y, gadgets.rpc.ACK, x, {
                    ackAlone: p
                })
            }
        }
        function g(q, t) {
            var p = i[q];
            try {
                var o = false;
                o = "document" in t;
                if (!o) {
                    return false
                }
                o = typeof t.document == "object";
                if (!o) {
                    return false
                }
                var s = t.location.href;
                if (s === "about:blank") {
                    return false
                }
            } catch (n) {
                return false
            }
            p.receiveWindow = t;

            function r() {
                m(q)
            }
            if (typeof t.attachEvent === "undefined") {
                t.onresize = r
            } else {
                t.attachEvent("onresize", r)
            }
            if (q === "..") {
                l(p.frame, p.relayUri, b(q), q)
            } else {
                m(q)
            }
            return true
        }
        return {
            getCode: function() {
                return "rmr"
            },
            isParentVerifiable: function() {
                return true
            },
            init: function(n, o) {
                c = n;
                j = o;
                return true
            },
            setup: function(p, n) {
                try {
                    d(p)
                } catch (o) {
                    gadgets.warn("Caught exception setting up RMR: " + o);
                    return false
                }
                return true
            },
            call: function(n, p, o) {
                return k(n, o.s, p, o)
            }
        }
    }()
};;;
gadgets.rpctx = gadgets.rpctx || {};
if (!gadgets.rpctx.ifpc) {
    gadgets.rpctx.ifpc = function() {
        var h = [];
        var e = 0;
        var d;
        var a = 2000;
        var g = {};

        function c(m) {
            var k = [];
            for (var n = 0, l = m.length;
                 n < l; ++n) {
                k.push(encodeURIComponent(gadgets.json.stringify(m[n])))
            }
            return k.join("&")
        }
        function b(m) {
            var k;
            for (var j = h.length - 1;
                 j >= 0; --j) {
                var n = h[j];
                try {
                    if (n && (n.recyclable || n.readyState === "complete")) {
                        n.parentNode.removeChild(n);
                        if (window.ActiveXObject) {
                            h[j] = n = null;
                            h.splice(j, 1)
                        } else {
                            n.recyclable = false;
                            k = n;
                            break
                        }
                    }
                } catch (l) {}
            }
            if (!k) {
                k = document.createElement("iframe");
                k.style.border = k.style.width = k.style.height = "0px";
                k.style.visibility = "hidden";
                k.style.position = "absolute";
                k.onload = function() {
                    this.recyclable = true
                };
                h.push(k)
            }
            k.src = m;
            window.setTimeout(function() {
                document.body.appendChild(k)
            }, 0)
        }
        function f(j, l) {
            for (var k = l - 1;
                 k >= 0; --k) {
                if (typeof j[k] === "undefined") {
                    return false
                }
            }
            return true
        }
        return {
            getCode: function() {
                return "ifpc"
            },
            isParentVerifiable: function() {
                return true
            },
            init: function(i, j) {
                d = j;
                d("..", true);
                return true
            },
            setup: function(j, i) {
                d(j, true);
                return true
            },
            call: function(s, r, q) {
                var l = gadgets.rpc.getRelayUrl(s);
                ++e;
                if (!l) {
                    gadgets.warn("No relay file assigned for IFPC");
                    return false
                }
                var i = null,
                    j = [];
                if (q.l) {
                    var o = q.a;
                    i = [l, "#", c([r, e, 1, 0, c([r, q.s, "", "", r].concat(o))])].join("");
                    j.push(i)
                } else {
                    i = [l, "#", s, "&", r, "@", e, "&"].join("");
                    var t = encodeURIComponent(gadgets.json.stringify(q)),
                        n = a - i.length,
                        p = Math.ceil(t.length / n),
                        m = 0,
                        k;
                    while (t.length > 0) {
                        k = t.substring(0, n);
                        t = t.substring(n);
                        j.push([i, p, "&", m, "&", k].join(""));
                        m += 1
                    }
                }
                do {
                    b(j.shift())
                } while (j.length > 0);
                return true
            },
            _receiveMessage: function(i, n) {
                var o = i[1],
                    m = parseInt(i[2], 10),
                    k = parseInt(i[3], 10),
                    l = i[i.length - 1],
                    j = m === 1;
                if (m > 1) {
                    if (!g[o]) {
                        g[o] = []
                    }
                    g[o][k] = l;
                    if (f(g[o], m)) {
                        l = g[o].join("");
                        delete g[o];
                        j = true
                    }
                }
                if (j) {
                    n(gadgets.json.parse(decodeURIComponent(l)))
                }
            }
        }
    }()
};;
if (!window.gadgets || !window.gadgets["rpc"]) {
    gadgets.rpc = function() {
        var M = "__cb";
        var S = "";
        var T = "__ack";
        var f = 500;
        var G = 10;
        var b = "|";
        var u = "callback";
        var g = "origin";
        var r = "referer";
        var s = "legacy__";
        var q = {};
        var W = {};
        var D = {};
        var B = {};
        var z = 0;
        var l = {};
        var m = {};
        var d = {};
        var n = {};
        var E = {};
        var e = null;
        var p = null;
        var A = (window.top !== window.self);
        var v = window.name;
        var J = function() {};
        var P = 0;
        var Y = 1;
        var a = 2;
        var x = window.console;
        var V = x && x.log &&
            function(ae) {
                x.log(ae)
            } ||
            function() {};
        var R = (function() {
            function ae(af) {
                return function() {
                    V(af + ": call ignored")
                }
            }
            return {
                getCode: function() {
                    return "noop"
                },
                isParentVerifiable: function() {
                    return true
                },
                init: ae("init"),
                setup: ae("setup"),
                call: ae("call")
            }
        })();
        if (gadgets.util) {
            d = gadgets.util.getUrlParameters()
        }
        function K() {
            if (d.rpctx == "flash") {
                return gadgets.rpctx.flash
            }
            if (d.rpctx == "rmr") {
                return gadgets.rpctx.rmr
            }
            return typeof window.postMessage === "function" ? gadgets.rpctx.wpm : typeof window.postMessage === "object" ? gadgets.rpctx.wpm : window.ActiveXObject ? (gadgets.rpctx.flash ? gadgets.rpctx.flash : gadgets.rpctx.nix) : navigator.userAgent.indexOf("WebKit") > 0 ? gadgets.rpctx.rmr : navigator.product === "Gecko" ? gadgets.rpctx.frameElement : gadgets.rpctx.ifpc
        }
        function k(aj, ah) {
            if (n[aj]) {
                return
            }
            var af = H;
            if (!ah) {
                af = R
            }
            n[aj] = af;
            var ae = E[aj] || [];
            for (var ag = 0;
                 ag < ae.length; ++ag) {
                var ai = ae[ag];
                ai.t = F(aj);
                af.call(aj, ai.f, ai)
            }
            E[aj] = []
        }
        var I = false,
            U = false;

        function N() {
            if (U) {
                return
            }
            function ae() {
                I = true
            }
            if (typeof window.addEventListener != "undefined") {
                window.addEventListener("unload", ae, false)
            } else {
                if (typeof window.attachEvent != "undefined") {
                    window.attachEvent("onunload", ae)
                }
            }
            U = true
        }
        function j(ae, ai, af, ah, ag) {
            if (!B[ai] || B[ai] !== af) {
                gadgets.error("Invalid auth token. " + B[ai] + " vs " + af);
                J(ai, a)
            }
            ag.onunload = function() {
                if (m[ai] && !I) {
                    J(ai, Y);
                    gadgets.rpc.removeReceiver(ai)
                }
            };
            N();
            ah = gadgets.json.parse(decodeURIComponent(ah))
        }
        function Z(ai, af) {
            if (ai && typeof ai.s === "string" && typeof ai.f === "string" && ai.a instanceof Array) {
                if (B[ai.f]) {
                    if (B[ai.f] !== ai.t) {
                        gadgets.error("Invalid auth token. " + B[ai.f] + " vs " + ai.t);
                        J(ai.f, a)
                    }
                }
                if (ai.s === T) {
                    window.setTimeout(function() {
                        k(ai.f, true)
                    }, 0);
                    return
                }
                if (ai.c) {
                    ai[u] = function(aj) {
                        var ak = ai.g ? s : "";
                        gadgets.rpc.call(ai.f, ak + M, null, ai.c, aj)
                    }
                }
                if (af) {
                    var ag = t(af);
                    ai[g] = af;
                    var ah = ai.r;
                    if (!ah || t(ah) != ag) {
                        ah = af
                    }
                    ai[r] = ah
                }
                var ae = (q[ai.s] || q[S]).apply(ai, ai.a);
                if (ai.c && typeof ae !== "undefined") {
                    gadgets.rpc.call(ai.f, M, null, ai.c, ae)
                }
            }
        }
        function t(ag) {
            if (!ag) {
                return ""
            }
            ag = ((ag.split("#"))[0].split("?"))[0];
            ag = ag.toLowerCase();
            if (ag.indexOf("//") == 0) {
                ag = window.location.protocol + ag
            }
            if (ag.indexOf("://") == -1) {
                ag = window.location.protocol + "//" + ag
            }
            var ah = ag.substring(ag.indexOf("://") + 3);
            var ae = ah.indexOf("/");
            if (ae != -1) {
                ah = ah.substring(0, ae)
            }
            var aj = ag.substring(0, ag.indexOf("://"));
            var ai = "";
            var ak = ah.indexOf(":");
            if (ak != -1) {
                var af = ah.substring(ak + 1);
                ah = ah.substring(0, ak);
                if ((aj === "http" && af !== "80") || (aj === "https" && af !== "443")) {
                    ai = ":" + af
                }
            }
            return aj + "://" + ah + ai
        }
        function C(af, ae) {
            return "/" + af + (ae ? b + ae : "")
        }
        function y(ah) {
            if (ah.charAt(0) == "/") {
                var af = ah.indexOf(b);
                var ag = af > 0 ? ah.substring(1, af) : ah.substring(1);
                var ae = af > 0 ? ah.substring(af + 1) : null;
                return {
                    id: ag,
                    origin: ae
                }
            } else {
                return null
            }
        }
        function ad(ag) {
            if (typeof ag === "undefined" || ag === "..") {
                return window.parent
            }
            var af = y(ag);
            if (af) {
                return window.top.frames[af.id]
            }
            ag = String(ag);
            var ae = window.frames[ag];
            if (ae) {
                return ae
            }
            ae = document.getElementById(ag);
            if (ae && ae.contentWindow) {
                return ae.contentWindow
            }
            return null
        }
        function L(ah) {
            var ag = null;
            var ae = O(ah);
            if (ae) {
                ag = ae
            } else {
                var af = y(ah);
                if (af) {
                    ag = af.origin
                } else {
                    if (ah == "..") {
                        ag = d.parent
                    } else {
                        ag = document.getElementById(ah).src
                    }
                }
            }
            return t(ag)
        }
        var H = K();
        q[S] = function() {
            V("Unknown RPC service: " + this.s)
        };
        q[M] = function(af, ae) {
            var ag = l[af];
            if (ag) {
                delete l[af];
                ag.call(this, ae)
            }
        };

        function X(ag, ae) {
            if (m[ag] === true) {
                return
            }
            if (typeof m[ag] === "undefined") {
                m[ag] = 0
            }
            var af = ad(ag);
            if (ag === ".." || af != null) {
                if (H.setup(ag, ae) === true) {
                    m[ag] = true;
                    return
                }
            }
            if (m[ag] !== true && m[ag]++ < G) {
                window.setTimeout(function() {
                    X(ag, ae)
                }, f)
            } else {
                n[ag] = R;
                m[ag] = true
            }
        }
        function O(af) {
            var ae = W[af];
            if (ae && ae.substring(0, 1) === "/") {
                if (ae.substring(1, 2) === "/") {
                    ae = document.location.protocol + ae
                } else {
                    ae = document.location.protocol + "//" + document.location.host + ae
                }
            }
            return ae
        }
        function ac(af, ae, ag) {
            if (ae && !/http(s)?:\/\/.+/.test(ae)) {
                if (ae.indexOf("//") == 0) {
                    ae = window.location.protocol + ae
                } else {
                    if (ae.charAt(0) == "/") {
                        ae = window.location.protocol + "//" + window.location.host + ae
                    } else {
                        if (ae.indexOf("://") == -1) {
                            ae = window.location.protocol + "//" + ae
                        }
                    }
                }
            }
            W[af] = ae;
            if (typeof ag !== "undefined") {
                D[af] = !! ag
            }
        }
        function F(ae) {
            return B[ae]
        }
        function c(ae, af) {
            af = af || "";
            B[ae] = String(af);
            X(ae, af)
        }
        function ab(af) {
            var ae = af.passReferrer || "";
            var ag = ae.split(":", 2);
            e = ag[0] || "none";
            p = ag[1] || "origin"
        }
        function aa(ae) {
            if (Q(ae)) {
                H = gadgets.rpctx.ifpc;
                H.init(Z, k)
            }
        }
        function Q(ae) {
            return String(ae.useLegacyProtocol) === "true"
        }
        function h(af, ae) {
            function ag(aj) {
                var ai = aj && aj.rpc || {};
                ab(ai);
                var ah = ai.parentRelayUrl || "";
                ah = t(d.parent || ae) + ah;
                ac("..", ah, Q(ai));
                aa(ai);
                c("..", af)
            }
            if (!d.parent && ae) {
                ag({});
                return
            }
            gadgets.config.register("rpc", null, ag)
        }
        function o(af, aj, al) {
            var ai = null;
            if (af.charAt(0) != "/") {
                if (!gadgets.util) {
                    return
                }
                ai = document.getElementById(af);
                if (!ai) {
                    throw new Error("Cannot set up gadgets.rpc receiver with ID: " + af + ", element not found.")
                }
            }
            var ae = ai && ai.src;
            var ag = aj || gadgets.rpc.getOrigin(ae);
            ac(af, ag);
            var ak = gadgets.util.getUrlParameters(ae);
            var ah = al || ak.rpctoken;
            c(af, ah)
        }
        function i(ae, ag, ah) {
            if (ae === "..") {
                var af = ah || d.rpctoken || d.ifpctok || "";
                h(af, ag)
            } else {
                o(ae, ag, ah)
            }
        }
        function w(ag) {
            if (e === "bidir" || (e === "c2p" && ag === "..") || (e === "p2c" && ag !== "..")) {
                var af = window.location.href;
                var ah = "?";
                if (p === "query") {
                    ah = "#"
                } else {
                    if (p === "hash") {
                        return af
                    }
                }
                var ae = af.lastIndexOf(ah);
                ae = ae === -1 ? af.length : ae;
                return af.substring(0, ae)
            }
            return null
        }
        return {
            config: function(ae) {
                if (typeof ae.securityCallback === "function") {
                    J = ae.securityCallback
                }
            },
            register: function(af, ae) {
                if (af === M || af === T) {
                    throw new Error("Cannot overwrite callback/ack service")
                }
                if (af === S) {
                    throw new Error("Cannot overwrite default service: use registerDefault")
                }
                q[af] = ae
            },
            unregister: function(ae) {
                if (ae === M || ae === T) {
                    throw new Error("Cannot delete callback/ack service")
                }
                if (ae === S) {
                    throw new Error("Cannot delete default service: use unregisterDefault")
                }
                delete q[ae]
            },
            registerDefault: function(ae) {
                q[S] = ae
            },
            unregisterDefault: function() {
                delete q[S]
            },
            forceParentVerifiable: function() {
                if (!H.isParentVerifiable()) {
                    H = gadgets.rpctx.ifpc
                }
            },
            call: function(ae, ag, al, aj) {
                ae = ae || "..";
                var ak = "..";
                if (ae === "..") {
                    ak = v
                } else {
                    if (ae.charAt(0) == "/") {
                        ak = C(v, gadgets.rpc.getOrigin(window.location.href))
                    }
                }++z;
                if (al) {
                    l[z] = al
                }
                var ai = {
                    s: ag,
                    f: ak,
                    c: al ? z : 0,
                    a: Array.prototype.slice.call(arguments, 3),
                    t: B[ae],
                    l: !! D[ae]
                };
                var af = w(ae);
                if (af) {
                    ai.r = af
                }
                if (ae !== ".." && y(ae) == null && !document.getElementById(ae)) {
                    return
                }
                var ah = n[ae];
                if (!ah && y(ae) !== null) {
                    ah = H
                }
                if (ag.indexOf(s) === 0) {
                    ah = H;
                    ai.s = ag.substring(s.length);
                    ai.c = ai.c ? ai.c : z
                }
                ai.g = true;
                ai.r = ak;
                if (!ah) {
                    if (!E[ae]) {
                        E[ae] = [ai]
                    } else {
                        E[ae].push(ai)
                    }
                    return
                }
                if (D[ae]) {
                    ah = gadgets.rpctx.ifpc
                }
                if (ah.call(ae, ak, ai) === false) {
                    n[ae] = R;
                    H.call(ae, ak, ai)
                }
            },
            getRelayUrl: O,
            setRelayUrl: ac,
            setAuthToken: c,
            setupReceiver: i,
            getAuthToken: F,
            removeReceiver: function(ae) {
                delete W[ae];
                delete D[ae];
                delete B[ae];
                delete m[ae];
                delete n[ae]
            },
            getRelayChannel: function() {
                return H.getCode()
            },
            receive: function(af, ae) {
                if (af.length > 4) {
                    H._receiveMessage(af, Z)
                } else {
                    j.apply(null, af.concat(ae))
                }
            },
            receiveSameDomain: function(ae) {
                ae.a = Array.prototype.slice.call(ae.a);
                window.setTimeout(function() {
                    Z(ae)
                }, 0)
            },
            getOrigin: t,
            getTargetOrigin: L,
            init: function() {
                if (H.init(Z, k) === false) {
                    H = R
                }
                if (A) {
                    i("..")
                } else {
                    gadgets.config.register("rpc", null, function(af) {
                        var ae = af.rpc || {};
                        ab(ae);
                        aa(ae)
                    })
                }
            },
            _getTargetWin: ad,
            _parseSiblingId: y,
            ACK: T,
            RPC_ID: v || "..",
            SEC_ERROR_LOAD_TIMEOUT: P,
            SEC_ERROR_FRAME_PHISH: Y,
            SEC_ERROR_FORGED_MSG: a
        }
    }();
    gadgets.rpc.init()
} else {
    if (!gadgets.rpc) {
        gadgets.rpc = window.gadgets["rpc"];
        gadgets.rpc.config = gadgets.rpc.config;
        gadgets.rpc.register = gadgets.rpc.register;
        gadgets.rpc.unregister = gadgets.rpc.unregister;
        gadgets.rpc.registerDefault = gadgets.rpc.registerDefault;
        gadgets.rpc.unregisterDefault = gadgets.rpc.unregisterDefault;
        gadgets.rpc.forceParentVerifiable = gadgets.rpc.forceParentVerifiable;
        gadgets.rpc.call = gadgets.rpc.call;
        gadgets.rpc.getRelayUrl = gadgets.rpc.getRelayUrl;
        gadgets.rpc.setRelayUrl = gadgets.rpc.setRelayUrl;
        gadgets.rpc.setAuthToken = gadgets.rpc.setAuthToken;
        gadgets.rpc.setupReceiver = gadgets.rpc.setupReceiver;
        gadgets.rpc.getAuthToken = gadgets.rpc.getAuthToken;
        gadgets.rpc.removeReceiver = gadgets.rpc.removeReceiver;
        gadgets.rpc.getRelayChannel = gadgets.rpc.getRelayChannel;
        gadgets.rpc.receive = gadgets.rpc.receive;
        gadgets.rpc.receiveSameDomain = gadgets.rpc.receiveSameDomain;
        gadgets.rpc.getOrigin = gadgets.rpc.getOrigin;
        gadgets.rpc.getTargetOrigin = gadgets.rpc.getTargetOrigin;
        gadgets.rpc._getTargetWin = gadgets.rpc._getTargetWin;
        gadgets.rpc._parseSiblingId = gadgets.rpc._parseSiblingId
    }
};;;

/* [end] feature=rpc */

/* [start] feature=opensocial-reference */
var opensocial = opensocial || {};
opensocial.requestSendMessage = function(a, d, b, c) {
    return opensocial.Container.get().requestSendMessage(a, d, b, c)
};
opensocial.requestShareApp = function(a, d, b, c) {
    opensocial.Container.get().requestShareApp(a, d, b, c)
};
opensocial.requestCreateActivity = function(c, b, a) {
    if (!c || (!c.getField(opensocial.Activity.Field.TITLE) && !c.getField(opensocial.Activity.Field.TITLE_ID))) {
        if (a) {
            window.setTimeout(function() {
                a(new opensocial.ResponseItem(null, null, opensocial.ResponseItem.Error.BAD_REQUEST, "You must pass in an activity with a title or title id."))
            }, 0)
        }
        return
    }
    opensocial.Container.get().requestCreateActivity(c, b, a)
};
opensocial.CreateActivityPriority = {
    HIGH: "HIGH",
    LOW: "LOW"
};
opensocial.hasPermission = function(a) {
    return opensocial.Container.get().hasPermission(a)
};
opensocial.requestPermission = function(b, c, a) {
    opensocial.Container.get().requestPermission(b, c, a)
};
opensocial.Permission = {
    VIEWER: "viewer"
};
opensocial.getEnvironment = function() {
    return opensocial.Container.get().getEnvironment()
};
opensocial.newDataRequest = function() {
    return opensocial.Container.get().newDataRequest()
};
opensocial.newActivity = function(a) {
    return opensocial.Container.get().newActivity(a)
};
opensocial.newAlbum = function(a) {
    return opensocial.Container.get().newAlbum(a)
};
opensocial.newMediaItem = function(c, a, b) {
    return opensocial.Container.get().newMediaItem(c, a, b)
};
opensocial.newMessage = function(a, b) {
    return opensocial.Container.get().newMessage(a, b)
};
opensocial.EscapeType = {
    HTML_ESCAPE: "htmlEscape",
    NONE: "none"
};
opensocial.newIdSpec = function(a) {
    return opensocial.Container.get().newIdSpec(a)
};
opensocial.newNavigationParameters = function(a) {
    return opensocial.Container.get().newNavigationParameters(a)
};
opensocial.invalidateCache = function() {
    opensocial.Container.get().invalidateCache()
};
Function.prototype.inherits = function(a) {
    function b() {}
    b.prototype = a.prototype;
    this.superClass_ = a.prototype;
    this.prototype = new b();
    this.prototype.constructor = this
};;
opensocial.Activity = function(a) {
    this.fields_ = a
};
opensocial.Activity.Field = {
    TITLE_ID: "titleId",
    TITLE: "title",
    TEMPLATE_PARAMS: "templateParams",
    URL: "url",
    MEDIA_ITEMS: "mediaItems",
    BODY_ID: "bodyId",
    BODY: "body",
    EXTERNAL_ID: "externalId",
    STREAM_TITLE: "streamTitle",
    STREAM_URL: "streamUrl",
    STREAM_SOURCE_URL: "streamSourceUrl",
    STREAM_FAVICON_URL: "streamFaviconUrl",
    PRIORITY: "priority",
    ID: "id",
    USER_ID: "userId",
    APP_ID: "appId",
    POSTED_TIME: "postedTime"
};
opensocial.Activity.prototype.getId = function() {
    return this.getField(opensocial.Activity.Field.ID)
};
opensocial.Activity.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.Activity.prototype.setField = function(a, b) {
    return (this.fields_[a] = b)
};;
opensocial.Address = function(a) {
    this.fields_ = a || {}
};
opensocial.Address.Field = {
    TYPE: "type",
    UNSTRUCTURED_ADDRESS: "unstructuredAddress",
    PO_BOX: "poBox",
    STREET_ADDRESS: "streetAddress",
    EXTENDED_ADDRESS: "extendedAddress",
    REGION: "region",
    LOCALITY: "locality",
    POSTAL_CODE: "postalCode",
    COUNTRY: "country",
    LATITUDE: "latitude",
    LONGITUDE: "longitude"
};
opensocial.Address.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};;
opensocial.Album = function(a) {
    this.fields_ = a || {}
};
opensocial.Album.Field = {
    DESCRIPTION: "description",
    ID: "id",
    LOCATION: "location",
    MEDIA_ITEM_COUNT: "mediaItemCount",
    MEDIA_MIME_TYPE: "mediaMimeType",
    MEDIA_TYPE: "mediaType",
    OWNER_ID: "ownerId",
    THUMBNAIL_URL: "thumbnailUrl",
    TITLE: "title"
};
opensocial.Album.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.Album.prototype.setField = function(a, b) {
    return this.fields_[a] = b
};;
opensocial.BodyType = function(a) {
    this.fields_ = a || {}
};
opensocial.BodyType.Field = {
    BUILD: "build",
    HEIGHT: "height",
    WEIGHT: "weight",
    EYE_COLOR: "eyeColor",
    HAIR_COLOR: "hairColor"
};
opensocial.BodyType.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};;
opensocial.Collection = function(c, b, a) {
    this.array_ = c || [];
    this.offset_ = b || 0;
    this.totalSize_ = a || this.array_.length
};
opensocial.Collection.prototype.getById = function(c) {
    for (var a = 0;
         a < this.size();
         a++) {
        var b = this.array_[a];
        if (b.getId() === c) {
            return b
        }
    }
    return null
};
opensocial.Collection.prototype.size = function() {
    return this.array_.length
};
opensocial.Collection.prototype.each = function(b) {
    for (var a = 0;
         a < this.size();
         a++) {
        b(this.array_[a])
    }
};
opensocial.Collection.prototype.asArray = function() {
    return this.array_
};
opensocial.Collection.prototype.getTotalSize = function() {
    return this.totalSize_
};
opensocial.Collection.prototype.getOffset = function() {
    return this.offset_
};;
opensocial.Container = function() {};
opensocial.Container.container_ = null;
opensocial.Container.setContainer = function(a) {
    opensocial.Container.container_ = a
};
opensocial.Container.get = function() {
    return opensocial.Container.container_
};
opensocial.Container.prototype.getEnvironment = function() {};
opensocial.Container.prototype.requestSendMessage = function(a, d, b, c) {
    gadgets.rpc.call(null, "requestSendMessage", b, a, d, b, c)
};
opensocial.Container.prototype.requestShareApp = function(a, d, b, c) {
    if (b) {
        window.setTimeout(function() {
            b(new opensocial.ResponseItem(null, null, opensocial.ResponseItem.Error.NOT_IMPLEMENTED, null))
        }, 0)
    }
};
opensocial.Container.prototype.requestCreateActivity = function(c, b, a) {
    if (a) {
        window.setTimeout(function() {
            a(new opensocial.ResponseItem(null, null, opensocial.ResponseItem.Error.NOT_IMPLEMENTED, null))
        }, 0)
    }
};
opensocial.Container.prototype.hasPermission = function(a) {
    return false
};
opensocial.Container.prototype.requestPermission = function(b, c, a) {
    if (a) {
        window.setTimeout(function() {
            a(new opensocial.ResponseItem(null, null, opensocial.ResponseItem.Error.NOT_IMPLEMENTED, null))
        }, 0)
    }
};
opensocial.Container.prototype.requestData = function(a, b) {};
opensocial.Container.prototype.newCreateAlbumRequest = function(b, a) {};
opensocial.Container.prototype.newCreateMediaItemRequest = function(a, c, b) {};
opensocial.Container.prototype.newDeleteAlbumRequest = function(a, b) {};
opensocial.Container.prototype.newFetchPersonRequest = function(b, a) {};
opensocial.Container.prototype.newFetchPeopleRequest = function(a, b) {};
opensocial.Container.prototype.newFetchPersonAppDataRequest = function(a, c, b) {};
opensocial.Container.prototype.newUpdatePersonAppDataRequest = function(a, b) {};
opensocial.Container.prototype.newRemovePersonAppDataRequest = function(a) {};
opensocial.Container.prototype.newUpdateAlbumRequest = function(b, c, a) {};
opensocial.Container.prototype.newUpdateMediaItemRequest = function(b, d, c, a) {};
opensocial.Container.prototype.newFetchActivitiesRequest = function(a, b) {};
opensocial.Container.prototype.newFetchAlbumsRequest = function(a, b) {};
opensocial.Container.prototype.newFetchMediaItemsRequest = function(a, b) {};
opensocial.Container.prototype.newFetchMessageCollectionsRequest = function(a, b) {};
opensocial.Container.prototype.newFetchMessagesRequest = function(a, c, b) {};
opensocial.Container.prototype.newCollection = function(c, b, a) {
    return new opensocial.Collection(c, b, a)
};
opensocial.Container.prototype.newPerson = function(a, b, c) {
    return new opensocial.Person(a, b, c)
};
opensocial.Container.prototype.newActivity = function(a) {
    return new opensocial.Activity(a)
};
opensocial.Container.prototype.newAlbum = function(a) {
    return new opensocial.Album(a)
};
opensocial.Container.prototype.newMediaItem = function(c, a, b) {
    return new opensocial.MediaItem(c, a, b)
};
opensocial.Container.prototype.newMessage = function(a, b) {
    return new opensocial.Message(a, b)
};
opensocial.Container.prototype.newIdSpec = function(a) {
    return new opensocial.IdSpec(a)
};
opensocial.Container.prototype.newNavigationParameters = function(a) {
    return new opensocial.NavigationParameters(a)
};
opensocial.Container.prototype.newResponseItem = function(a, c, b, d) {
    return new opensocial.ResponseItem(a, c, b, d)
};
opensocial.Container.prototype.newDataResponse = function(a, b) {
    return new opensocial.DataResponse(a, b)
};
opensocial.Container.prototype.newDataRequest = function() {
    return new opensocial.DataRequest()
};
opensocial.Container.prototype.newEnvironment = function(b, a) {
    return new opensocial.Environment(b, a)
};
opensocial.Container.prototype.invalidateCache = function() {};
opensocial.Container.isArray = function(a) {
    return a instanceof Array
};
opensocial.Container.getField = function(a, b, c) {
    var d = a[b];
    return opensocial.Container.escape(d, c, false)
};
opensocial.Container.escape = function(c, b, a) {
    if (b && b[opensocial.DataRequest.DataRequestFields.ESCAPE_TYPE] == opensocial.EscapeType.NONE) {
        return c
    } else {
        return gadgets.util.escape(c, a)
    }
};;
opensocial.DataRequest = function() {
    this.requestObjects_ = []
};
opensocial.DataRequest.prototype.requestObjects_ = null;
opensocial.DataRequest.prototype.getRequestObjects = function() {
    return this.requestObjects_
};
opensocial.DataRequest.prototype.add = function(b, a) {
    return this.requestObjects_.push({
        key: a,
        request: b
    })
};
opensocial.DataRequest.prototype.send = function(a) {
    var b = a ||
        function() {};
    opensocial.Container.get().requestData(this, b)
};
opensocial.DataRequest.SortOrder = {
    TOP_FRIENDS: "topFriends",
    NAME: "name"
};
opensocial.DataRequest.FilterType = {
    ALL: "all",
    HAS_APP: "hasApp",
    TOP_FRIENDS: "topFriends",
    IS_FRIENDS_WITH: "isFriendsWith"
};
opensocial.DataRequest.PeopleRequestFields = {
    PROFILE_DETAILS: "profileDetail",
    SORT_ORDER: "sortOrder",
    FILTER: "filter",
    FILTER_OPTIONS: "filterOptions",
    FIRST: "first",
    MAX: "max",
    APP_DATA: "appData",
    ESCAPE_TYPE: "escapeType"
};
opensocial.DataRequest.prototype.addDefaultParam = function(c, b, a) {
    c[b] = c[b] || a
};
opensocial.DataRequest.prototype.addDefaultProfileFields = function(b) {
    var a = opensocial.DataRequest.PeopleRequestFields;
    var c = b[a.PROFILE_DETAILS] || [];
    b[a.PROFILE_DETAILS] = c.concat([opensocial.Person.Field.ID, opensocial.Person.Field.NAME, opensocial.Person.Field.THUMBNAIL_URL])
};
opensocial.DataRequest.prototype.asArray = function(a) {
    if (opensocial.Container.isArray(a)) {
        return a
    } else {
        return [a]
    }
};
opensocial.DataRequest.prototype.newCreateAlbumRequest = function(b, a) {
    return opensocial.Container.get().newCreateAlbumRequest(b, a)
};
opensocial.DataRequest.prototype.newCreateMediaItemRequest = function(a, c, b) {
    return opensocial.Container.get().newCreateMediaItemRequest(a, c, b)
};
opensocial.DataRequest.prototype.newDeleteAlbumRequest = function(a, b) {
    return opensocial.Container.get().newDeleteAlbumRequest(a, b)
};
opensocial.DataRequest.prototype.newFetchPersonRequest = function(b, a) {
    a = a || {};
    this.addDefaultProfileFields(a);
    return opensocial.Container.get().newFetchPersonRequest(b, a)
};
opensocial.DataRequest.prototype.newFetchPeopleRequest = function(b, c) {
    c = c || {};
    var a = opensocial.DataRequest.PeopleRequestFields;
    this.addDefaultProfileFields(c);
    this.addDefaultParam(c, a.SORT_ORDER, opensocial.DataRequest.SortOrder.TOP_FRIENDS);
    this.addDefaultParam(c, a.FILTER, opensocial.DataRequest.FilterType.ALL);
    this.addDefaultParam(c, a.FIRST, 0);
    this.addDefaultParam(c, a.MAX, 20);
    return opensocial.Container.get().newFetchPeopleRequest(b, c)
};
opensocial.DataRequest.AlbumRequestFields = {
    FIRST: "first",
    MAX: "max"
};
opensocial.DataRequest.MediaItemRequestFields = {
    FIRST: "first",
    MAX: "max"
};
opensocial.DataRequest.DataRequestFields = {
    ESCAPE_TYPE: "escapeType"
};
opensocial.DataRequest.prototype.newFetchPersonAppDataRequest = function(a, c, b) {
    return opensocial.Container.get().newFetchPersonAppDataRequest(a, this.asArray(c), b)
};
opensocial.DataRequest.prototype.newUpdateAlbumRequest = function(a, b, c) {
    return opensocial.Container.get().newUpdateAlbumRequest(a, b, c)
};
opensocial.DataRequest.prototype.newUpdateMediaItemRequest = function(a, c, b, d) {
    return opensocial.Container.get().newUpdateMediaItemRequest(a, c, b, d)
};
opensocial.DataRequest.prototype.newUpdatePersonAppDataRequest = function(a, b) {
    return opensocial.Container.get().newUpdatePersonAppDataRequest(a, b)
};
opensocial.DataRequest.prototype.newRemovePersonAppDataRequest = function(a) {
    return opensocial.Container.get().newRemovePersonAppDataRequest(a)
};
opensocial.DataRequest.ActivityRequestFields = {
    APP_ID: "appId",
    FIRST: "first",
    MAX: "max"
};
opensocial.DataRequest.prototype.newFetchActivitiesRequest = function(b, c) {
    c = c || {};
    var a = opensocial.DataRequest.ActivityRequestFields;
    this.addDefaultParam(c, a.FIRST, 0);
    this.addDefaultParam(c, a.MAX, 20);
    return opensocial.Container.get().newFetchActivitiesRequest(b, c)
};
opensocial.DataRequest.prototype.newFetchAlbumsRequest = function(b, c) {
    c = c || {};
    var a = opensocial.DataRequest.AlbumRequestFields;
    this.addDefaultParam(c, a.FIRST, 0);
    this.addDefaultParam(c, a.MAX, 20);
    return opensocial.Container.get().newFetchAlbumsRequest(b, c)
};
opensocial.DataRequest.prototype.newFetchMediaItemsRequest = function(b, c, d) {
    d = d || {};
    var a = opensocial.DataRequest.MediaItemRequestFields;
    this.addDefaultParam(d, a.FIRST, 0);
    this.addDefaultParam(d, a.MAX, 20);
    return opensocial.Container.get().newFetchMediaItemsRequest(b, c, d)
};
opensocial.DataRequest.prototype.newFetchMessageCollectionsRequest = function(a, b) {
    b = b || {};
    return opensocial.Container.get().newFetchMessageCollectionsRequest(a, b)
};
opensocial.DataRequest.prototype.newFetchMessagesRequest = function(a, c, b) {
    b = b || {};
    return opensocial.Container.get().newFetchMessagesRequest(a, c, b)
};;
opensocial.DataResponse = function(a, b, c) {
    this.responseItems_ = a;
    this.globalError_ = b;
    this.errorMessage_ = c
};
opensocial.DataResponse.prototype.hadError = function() {
    return !!this.globalError_
};
opensocial.DataResponse.prototype.getErrorMessage = function() {
    return this.errorMessage_
};
opensocial.DataResponse.prototype.get = function(a) {
    return this.responseItems_[a]
};;
opensocial.Email = function(a) {
    this.fields_ = a || {}
};
opensocial.Email.Field = {
    TYPE: "type",
    ADDRESS: "address"
};
opensocial.Email.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};;
opensocial.Enum = function(b, a) {
    this.key = b;
    this.displayValue = a
};
opensocial.Enum.prototype.getKey = function() {
    return gadgets.util.escape(this.key)
};
opensocial.Enum.prototype.getDisplayValue = function() {
    return gadgets.util.escape(this.displayValue)
};
opensocial.Enum.Smoker = {
    NO: "NO",
    YES: "YES",
    SOCIALLY: "SOCIALLY",
    OCCASIONALLY: "OCCASIONALLY",
    REGULARLY: "REGULARLY",
    HEAVILY: "HEAVILY",
    QUITTING: "QUITTING",
    QUIT: "QUIT"
};
opensocial.Enum.Drinker = {
    NO: "NO",
    YES: "YES",
    SOCIALLY: "SOCIALLY",
    OCCASIONALLY: "OCCASIONALLY",
    REGULARLY: "REGULARLY",
    HEAVILY: "HEAVILY",
    QUITTING: "QUITTING",
    QUIT: "QUIT"
};
opensocial.Enum.Gender = {
    MALE: "MALE",
    FEMALE: "FEMALE"
};
opensocial.Enum.LookingFor = {
    DATING: "DATING",
    FRIENDS: "FRIENDS",
    RELATIONSHIP: "RELATIONSHIP",
    NETWORKING: "NETWORKING",
    ACTIVITY_PARTNERS: "ACTIVITY_PARTNERS",
    RANDOM: "RANDOM"
};
opensocial.Enum.Presence = {
    AWAY: "AWAY",
    CHAT: "CHAT",
    DND: "DND",
    OFFLINE: "OFFLINE",
    ONLINE: "ONLINE",
    XA: "XA"
};;
opensocial.Environment = function(b, a) {
    this.domain = b;
    this.supportedFields = a
};
opensocial.Environment.prototype.getDomain = function() {
    return this.domain
};
opensocial.Environment.ObjectType = {
    PERSON: "person",
    ADDRESS: "address",
    BODY_TYPE: "bodyType",
    EMAIL: "email",
    NAME: "name",
    ORGANIZATION: "organization",
    PHONE: "phone",
    URL: "url",
    ACTIVITY: "activity",
    MEDIA_ITEM: "mediaItem",
    MESSAGE: "message",
    MESSAGE_TYPE: "messageType",
    SORT_ORDER: "sortOrder",
    FILTER_TYPE: "filterType"
};
opensocial.Environment.prototype.supportsField = function(a, c) {
    var b = this.supportedFields[a] || [];
    return !!b[c]
};;
opensocial.IdSpec = function(a) {
    this.fields_ = a || {}
};
opensocial.IdSpec.Field = {
    USER_ID: "userId",
    GROUP_ID: "groupId",
    NETWORK_DISTANCE: "networkDistance"
};
opensocial.IdSpec.PersonId = {
    OWNER: "OWNER",
    VIEWER: "VIEWER"
};
opensocial.IdSpec.GroupId = {
    SELF: "SELF",
    FRIENDS: "FRIENDS",
    ALL: "ALL"
};
opensocial.IdSpec.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.IdSpec.prototype.setField = function(a, b) {
    return (this.fields_[a] = b)
};;
opensocial.MediaItem = function(d, b, c) {
    this.fields_ = {};
    if (c) {
        for (var a in c) {
            if (c.hasOwnProperty(a)) {
                this.fields_[a] = c[a]
            }
        }
    }
    this.fields_[opensocial.MediaItem.Field.MIME_TYPE] = d;
    this.fields_[opensocial.MediaItem.Field.URL] = b
};
opensocial.MediaItem.Type = {
    IMAGE: "image",
    VIDEO: "video",
    AUDIO: "audio"
};
opensocial.MediaItem.Field = {
    ALBUM_ID: "albumId",
    CREATED: "created",
    DESCRIPTION: "description",
    DURATION: "duration",
    FILE_SIZE: "fileSize",
    ID: "id",
    LANGUAGE: "language",
    LAST_UPDATED: "lastUpdated",
    LOCATION: "location",
    MIME_TYPE: "mimeType",
    NUM_COMMENTS: "numComments",
    NUM_VIEWS: "numViews",
    NUM_VOTES: "numVotes",
    RATING: "rating",
    START_TIME: "startTime",
    TAGGED_PEOPLE: "taggedPeople",
    TAGS: "tags",
    THUMBNAIL_URL: "thumbnailUrl",
    TITLE: "title",
    TYPE: "type",
    URL: "url"
};
opensocial.MediaItem.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.MediaItem.prototype.setField = function(a, b) {
    return (this.fields_[a] = b)
};;
opensocial.MessageCollection = function(a) {
    this.fields_ = a || {}
};
opensocial.MessageCollection.Field = {
    ID: "id",
    TITLE: "title",
    TOTAL: "total",
    UNREAD: "unread",
    UPDATED: "updated",
    URLS: "urls"
};
opensocial.MessageCollection.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.MessageCollection.prototype.setField = function(a, b) {
    return this.fields_[a] = b
};;
opensocial.Message = function(a, b) {
    if (typeof a == "string") {
        this.fields_ = b || {};
        this.fields_[opensocial.Message.Field.BODY] = a
    } else {
        this.fields_ = a || {}
    }
};
opensocial.Message.Field = {
    APP_URL: "appUrl",
    BODY: "body",
    BODY_ID: "bodyId",
    COLLECTION_IDS: "collectionIds",
    ID: "id",
    PARENT_ID: "parentId",
    RECIPIENTS: "recipients",
    SENDER_ID: "senderId",
    STATUS: "status",
    TIME_SENT: "timeSent",
    TITLE: "title",
    TITLE_ID: "titleId",
    TYPE: "type",
    UPDATED: "updated",
    URLS: "urls"
};
opensocial.Message.Type = {
    EMAIL: "email",
    NOTIFICATION: "notification",
    PRIVATE_MESSAGE: "privateMessage",
    PUBLIC_MESSAGE: "publicMessage"
};
opensocial.Message.Status = {
    NEW: "new",
    DELETED: "deleted",
    FLAGGED: "flagged"
};
opensocial.Message.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.Message.prototype.setField = function(a, b) {
    return (this.fields_[a] = b)
};;
opensocial.Name = function(a) {
    this.fields_ = a || {}
};
opensocial.Name.Field = {
    FAMILY_NAME: "familyName",
    GIVEN_NAME: "givenName",
    ADDITIONAL_NAME: "additionalName",
    HONORIFIC_PREFIX: "honorificPrefix",
    HONORIFIC_SUFFIX: "honorificSuffix",
    UNSTRUCTURED: "unstructured"
};
opensocial.Name.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};;
opensocial.NavigationParameters = function(a) {
    this.fields_ = a || {}
};
opensocial.NavigationParameters.Field = {
    VIEW: "view",
    OWNER: "owner",
    PARAMETERS: "parameters"
};
opensocial.NavigationParameters.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.NavigationParameters.prototype.setField = function(a, b) {
    return (this.fields_[a] = b)
};
opensocial.NavigationParameters.DestinationType = {
    VIEWER_DESTINATION: "viewerDestination",
    RECIPIENT_DESTINATION: "recipientDestination"
};;
opensocial.Organization = function(a) {
    this.fields_ = a || {}
};
opensocial.Organization.Field = {
    NAME: "name",
    TITLE: "title",
    DESCRIPTION: "description",
    FIELD: "field",
    SUB_FIELD: "subField",
    START_DATE: "startDate",
    END_DATE: "endDate",
    SALARY: "salary",
    ADDRESS: "address",
    WEBPAGE: "webpage"
};
opensocial.Organization.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};;
opensocial.Person = function(a, b, c) {
    this.fields_ = a || {};
    this.isOwner_ = b;
    this.isViewer_ = c
};
opensocial.Person.Field = {
    ID: "id",
    NAME: "name",
    NICKNAME: "nickname",
    THUMBNAIL_URL: "thumbnailUrl",
    PROFILE_URL: "profileUrl",
    CURRENT_LOCATION: "currentLocation",
    ADDRESSES: "addresses",
    EMAILS: "emails",
    PHONE_NUMBERS: "phoneNumbers",
    ABOUT_ME: "aboutMe",
    STATUS: "status",
    PROFILE_SONG: "profileSong",
    PROFILE_VIDEO: "profileVideo",
    GENDER: "gender",
    SEXUAL_ORIENTATION: "sexualOrientation",
    RELATIONSHIP_STATUS: "relationshipStatus",
    AGE: "age",
    DATE_OF_BIRTH: "dateOfBirth",
    BODY_TYPE: "bodyType",
    ETHNICITY: "ethnicity",
    SMOKER: "smoker",
    DRINKER: "drinker",
    CHILDREN: "children",
    PETS: "pets",
    LIVING_ARRANGEMENT: "livingArrangement",
    TIME_ZONE: "timeZone",
    LANGUAGES_SPOKEN: "languagesSpoken",
    JOBS: "jobs",
    JOB_INTERESTS: "jobInterests",
    SCHOOLS: "schools",
    INTERESTS: "interests",
    URLS: "urls",
    MUSIC: "music",
    MOVIES: "movies",
    TV_SHOWS: "tvShows",
    BOOKS: "books",
    ACTIVITIES: "activities",
    SPORTS: "sports",
    HEROES: "heroes",
    QUOTES: "quotes",
    CARS: "cars",
    FOOD: "food",
    TURN_ONS: "turnOns",
    TURN_OFFS: "turnOffs",
    TAGS: "tags",
    ROMANCE: "romance",
    SCARED_OF: "scaredOf",
    HAPPIEST_WHEN: "happiestWhen",
    FASHION: "fashion",
    HUMOR: "humor",
    LOOKING_FOR: "lookingFor",
    RELIGION: "religion",
    POLITICAL_VIEWS: "politicalViews",
    HAS_APP: "hasApp",
    NETWORK_PRESENCE: "networkPresence"
};
opensocial.Person.prototype.getId = function() {
    return this.getField(opensocial.Person.Field.ID)
};
var ORDERED_NAME_FIELDS_ = [opensocial.Name.Field.HONORIFIC_PREFIX, opensocial.Name.Field.GIVEN_NAME, opensocial.Name.Field.FAMILY_NAME, opensocial.Name.Field.HONORIFIC_SUFFIX, opensocial.Name.Field.ADDITIONAL_NAME];
opensocial.Person.prototype.getDisplayName = function() {
    var b = this.getField(opensocial.Person.Field.NAME);
    if (b) {
        var e = b.getField(opensocial.Name.Field.UNSTRUCTURED);
        if (e) {
            return e
        }
        var d = "";
        for (var c = 0;
             c < ORDERED_NAME_FIELDS_.length;
             c++) {
            var a = b.getField(ORDERED_NAME_FIELDS_[c]);
            if (a) {
                d += a + " "
            }
        }
        return d.replace(/^\s+|\s+$/g, "")
    }
    return this.getField(opensocial.Person.Field.NICKNAME)
};
opensocial.Person.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};
opensocial.Person.prototype.getAppData = function(a) {};
opensocial.Person.prototype.isViewer = function() {
    return !!this.isViewer_
};
opensocial.Person.prototype.isOwner = function() {
    return !!this.isOwner_
};;
opensocial.Phone = function(a) {
    this.fields_ = a || {}
};
opensocial.Phone.Field = {
    TYPE: "type",
    NUMBER: "number"
};
opensocial.Phone.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};;
opensocial.ResponseItem = function(a, c, b, d) {
    this.originalDataRequest_ = a;
    this.data_ = c;
    this.errorCode_ = b;
    this.errorMessage_ = d
};
opensocial.ResponseItem.prototype.hadError = function() {
    return !!this.errorCode_
};
opensocial.ResponseItem.Error = {
    NOT_IMPLEMENTED: "notImplemented",
    UNAUTHORIZED: "unauthorized",
    FORBIDDEN: "forbidden",
    BAD_REQUEST: "badRequest",
    INTERNAL_ERROR: "internalError",
    LIMIT_EXCEEDED: "limitExceeded"
};
opensocial.ResponseItem.prototype.getErrorCode = function() {
    return this.errorCode_
};
opensocial.ResponseItem.prototype.getErrorMessage = function() {
    return this.errorMessage_
};
opensocial.ResponseItem.prototype.getOriginalDataRequest = function() {
    return this.originalDataRequest_
};
opensocial.ResponseItem.prototype.getData = function() {
    return this.data_
};;
opensocial.Url = function(a) {
    this.fields_ = a || {}
};
opensocial.Url.Field = {
    TYPE: "type",
    LINK_TEXT: "linkText",
    ADDRESS: "address"
};
opensocial.Url.prototype.getField = function(a, b) {
    return opensocial.Container.getField(this.fields_, a, b)
};;

/* [end] feature=opensocial-reference */

/* [start] feature=auth-refresh */
gadgets.rpc.register("update_security_token", function(a) {
    shindig.auth.updateSecurityToken(a)
});;

/* [end] feature=auth-refresh */

/* [start] feature=core.prefs */
(function() {
    var i = null;
    var j = {};
    var f = gadgets.util.escapeString;
    var d = {};
    var h = {};
    var e = "en";
    var b = "US";
    var a = 0;

    function c() {
        var l = gadgets.util.getUrlParameters();
        for (var k in l) {
            if (l.hasOwnProperty(k)) {
                if (k.indexOf("up_") === 0 && k.length > 3) {
                    j[k.substr(3)] = String(l[k])
                } else {
                    if (k === "country") {
                        b = l[k]
                    } else {
                        if (k === "lang") {
                            e = l[k]
                        } else {
                            if (k === "mid") {
                                a = l[k]
                            }
                        }
                    }
                }
            }
        }
    }
    function g() {
        for (var k in h) {
            if (typeof j[k] === "undefined") {
                j[k] = h[k]
            }
        }
    }
    gadgets.Prefs = function() {
        if (!i) {
            c();
            g();
            i = this
        }
        return i
    };
    gadgets.Prefs.setInternal_ = function(n, p) {
        var o = false;
        if (typeof n === "string") {
            if (!j.hasOwnProperty(n) || j[n] !== p) {
                o = true
            }
            j[n] = p
        } else {
            for (var m in n) {
                if (n.hasOwnProperty(m)) {
                    var l = n[m];
                    if (!j.hasOwnProperty(m) || j[m] !== l) {
                        o = true
                    }
                    j[m] = l
                }
            }
        }
        return o
    };
    gadgets.Prefs.setMessages_ = function(k) {
        d = k
    };
    gadgets.Prefs.setDefaultPrefs_ = function(k) {
        h = k
    };
    gadgets.Prefs.prototype.getString = function(k) {
        if (k === ".lang") {
            k = "lang"
        }
        return j[k] ? f(j[k]) : ""
    };
    gadgets.Prefs.prototype.setDontEscape_ = function() {
        f = function(l) {
            return l
        }
    };
    gadgets.Prefs.prototype.getInt = function(k) {
        var l = parseInt(j[k], 10);
        return isNaN(l) ? 0 : l
    };
    gadgets.Prefs.prototype.getFloat = function(k) {
        var l = parseFloat(j[k]);
        return isNaN(l) ? 0 : l
    };
    gadgets.Prefs.prototype.getBool = function(k) {
        var l = j[k];
        if (l) {
            return l === "true" || l === true || !! parseInt(l, 10)
        }
        return false
    };
    gadgets.Prefs.prototype.set = function(k, l) {
        throw new Error("setprefs feature required to make this call.")
    };
    gadgets.Prefs.prototype.getArray = function(n) {
        var o = j[n];
        if (o) {
            var k = o.split("|");
            for (var m = 0, l = k.length;
                 m < l; ++m) {
                k[m] = f(k[m].replace(/%7C/g, "|"))
            }
            return k
        }
        return []
    };
    gadgets.Prefs.prototype.setArray = function(k, l) {
        throw new Error("setprefs feature required to make this call.")
    };
    gadgets.Prefs.prototype.getMsg = function(k) {
        return d[k] || ""
    };
    gadgets.Prefs.prototype.getCountry = function() {
        return b
    };
    gadgets.Prefs.prototype.getLang = function() {
        return e
    };
    gadgets.Prefs.prototype.getModuleId = function() {
        return a
    }
})();;

/* [end] feature=core.prefs */

/* [start] feature=core.io */
gadgets.io = function() {
    var config = {};
    var oauthState;

    function makeXhr() {
        var x;
        var wrapperXhr = window.shindig && window.shindig["xhrwrapper"] && window.shindig["xhrwrapper"]["createXHR"];
        if (wrapperXhr) {
            return wrapperXhr()
        } else {
            if (typeof ActiveXObject != "undefined") {
                x = new ActiveXObject("Msxml2.XMLHTTP");
                if (!x) {
                    x = new ActiveXObject("Microsoft.XMLHTTP")
                }
                return x
            } else {
                if (typeof XMLHttpRequest != "undefined" || window.XMLHttpRequest) {
                    return new window.XMLHttpRequest()
                } else {
                    throw ("no xhr available")
                }
            }
        }
    }
    function hadError(xobj, callback) {
        if (xobj.readyState !== 4) {
            return true
        }
        try {
            if (xobj.status !== 200) {
                var error = ("" + xobj.status);
                if (xobj.responseText) {
                    error = error + " " + xobj.responseText
                }
                callback({
                    errors: [error],
                    rc: xobj.status,
                    text: xobj.responseText
                });
                return true
            }
        } catch (e) {
            callback({
                errors: [e.number + " Error not specified"],
                rc: e.number,
                text: e.description
            });
            return true
        }
        return false
    }
    function processNonProxiedResponse(url, callback, params, xobj) {
        if (hadError(xobj, callback)) {
            return
        }
        var data = {
            body: xobj.responseText
        };
        callback(transformResponseData(params, data))
    }
    var UNPARSEABLE_CRUFT = "throw 1; < don't be evil' >";

    function processResponse(url, callback, params, xobj) {
        if (hadError(xobj, callback)) {
            return
        }
        var txt = xobj.responseText;
        var offset = txt.indexOf(UNPARSEABLE_CRUFT) + UNPARSEABLE_CRUFT.length;
        if (offset < UNPARSEABLE_CRUFT.length) {
            return
        }
        txt = txt.substr(offset);
        var data = eval("(" + txt + ")");
        data = data[url];
        if (data.oauthState) {
            oauthState = data.oauthState
        }
        if (data.st) {
            shindig.auth.updateSecurityToken(data.st)
        }
        callback(transformResponseData(params, data))
    }
    function transformResponseData(params, data) {
        var resp = {
            text: data.body,
            rc: data.rc || 200,
            headers: data.headers,
            oauthApprovalUrl: data.oauthApprovalUrl,
            oauthError: data.oauthError,
            oauthErrorText: data.oauthErrorText,
            errors: []
        };
        if (resp.rc < 200 || resp.rc >= 400) {
            resp.errors = [resp.rc + " Error"]
        } else {
            if (resp.text) {
                if (resp.rc >= 300 && resp.rc < 400) {
                    params.CONTENT_TYPE = "TEXT"
                }
                switch (params.CONTENT_TYPE) {
                    case "JSON":
                    case "FEED":
                        resp.data = gadgets.json.parse(resp.text);
                        if (!resp.data) {
                            resp.errors.push("500 Failed to parse JSON");
                            resp.rc = 500;
                            resp.data = null
                        }
                        break;
                    case "DOM":
                        var dom;
                        if (typeof ActiveXObject != "undefined") {
                            dom = new ActiveXObject("Microsoft.XMLDOM");
                            dom.async = false;
                            dom.validateOnParse = false;
                            dom.resolveExternals = false;
                            if (!dom.loadXML(resp.text)) {
                                resp.errors.push("500 Failed to parse XML");
                                resp.rc = 500
                            } else {
                                resp.data = dom
                            }
                        } else {
                            var parser = new DOMParser();
                            dom = parser.parseFromString(resp.text, "text/xml");
                            if ("parsererror" === dom.documentElement.nodeName) {
                                resp.errors.push("500 Failed to parse XML");
                                resp.rc = 500
                            } else {
                                resp.data = dom
                            }
                        }
                        break;
                    default:
                        resp.data = resp.text;
                        break
                }
            }
        }
        return resp
    }
    function makeXhrRequest(realUrl, proxyUrl, callback, paramData, method, params, processResponseFunction, opt_headers) {
        var xhr = makeXhr();
        if (proxyUrl.indexOf("//") == 0) {
            proxyUrl = document.location.protocol + proxyUrl
        }
        xhr.open(method, proxyUrl, true);
        if (callback) {
            xhr.onreadystatechange = gadgets.util.makeClosure(null, processResponseFunction, realUrl, callback, params, xhr)
        }
        if (paramData !== null) {
            var contentTypeHeader = "Content-Type";
            var contentType = "application/x-www-form-urlencoded";
            if (typeof opt_headers === "string") {
                contentType = opt_headers;
                opt_headers = {}
            }
            var headers = opt_headers || {};
            if (!headers[contentTypeHeader]) {
                headers[contentTypeHeader] = contentType
            }
            for (var headerName in headers) {
                xhr.setRequestHeader(headerName, headers[headerName])
            }
        }
        xhr.send(paramData)
    }
    function respondWithPreload(postData, params, callback) {
        if (gadgets.io.preloaded_ && postData.httpMethod === "GET") {
            for (var i = 0;
                 i < gadgets.io.preloaded_.length;
                 i++) {
                var preload = gadgets.io.preloaded_[i];
                if (preload && (preload.id === postData.url)) {
                    delete gadgets.io.preloaded_[i];
                    if (preload.rc !== 200) {
                        callback({
                            rc: preload.rc,
                            errors: [preload.rc + " Error"]
                        })
                    } else {
                        if (preload.oauthState) {
                            oauthState = preload.oauthState
                        }
                        var resp = {
                            body: preload.body,
                            rc: preload.rc,
                            headers: preload.headers,
                            oauthApprovalUrl: preload.oauthApprovalUrl,
                            oauthError: preload.oauthError,
                            oauthErrorText: preload.oauthErrorText,
                            errors: []
                        };
                        callback(transformResponseData(params, resp))
                    }
                    return true
                }
            }
        }
        return false
    }
    function init(configuration) {
        config = configuration["core.io"] || {}
    }
    gadgets.config.register("core.io", null, init);
    return {
        makeRequest: function(url, callback, opt_params) {
            var params = opt_params || {};
            var httpMethod = params.METHOD || "GET";
            var refreshInterval = params.REFRESH_INTERVAL;
            var auth, st;
            if (params.AUTHORIZATION && params.AUTHORIZATION !== "NONE") {
                auth = params.AUTHORIZATION.toLowerCase();
                st = shindig.auth.getSecurityToken()
            } else {
                if (httpMethod === "GET" && refreshInterval === undefined) {
                    refreshInterval = 3600
                }
            }
            var signOwner = true;
            if (typeof params.OWNER_SIGNED !== "undefined") {
                signOwner = params.OWNER_SIGNED
            }
            var signViewer = true;
            if (typeof params.VIEWER_SIGNED !== "undefined") {
                signViewer = params.VIEWER_SIGNED
            }
            var headers = params.HEADERS || {};
            if (httpMethod === "POST" && !headers["Content-Type"]) {
                headers["Content-Type"] = "application/x-www-form-urlencoded"
            }
            var urlParams = gadgets.util.getUrlParameters();
            var paramData = {
                url: url,
                httpMethod: httpMethod,
                headers: gadgets.io.encodeValues(headers, false),
                postData: params.POST_DATA || "",
                authz: auth || "",
                st: st || "",
                contentType: params.CONTENT_TYPE || "TEXT",
                numEntries: params.NUM_ENTRIES || "3",
                getSummaries: !! params.GET_SUMMARIES,
                signOwner: signOwner,
                signViewer: signViewer,
                gadget: urlParams.url,
                container: urlParams.container || urlParams.synd || "default",
                bypassSpecCache: gadgets.util.getUrlParameters()["nocache"] || "",
                getFullHeaders: !! params.GET_FULL_HEADERS
            };
            if (auth === "oauth" || auth === "signed") {
                if (gadgets.io.oauthReceivedCallbackUrl_) {
                    paramData.OAUTH_RECEIVED_CALLBACK = gadgets.io.oauthReceivedCallbackUrl_;
                    gadgets.io.oauthReceivedCallbackUrl_ = null
                }
                paramData.oauthState = oauthState || "";
                for (var opt in params) {
                    if (params.hasOwnProperty(opt)) {
                        if (opt.indexOf("OAUTH_") === 0) {
                            paramData[opt] = params[opt]
                        }
                    }
                }
            }
            var proxyUrl = config.jsonProxyUrl.replace("%host%", document.location.host);
            if (!respondWithPreload(paramData, params, callback)) {
                if (httpMethod === "GET" && refreshInterval > 0) {
                    var extraparams = "?refresh=" + refreshInterval + "&" + gadgets.io.encodeValues(paramData);
                    makeXhrRequest(url, proxyUrl + extraparams, callback, null, "GET", params, processResponse)
                } else {
                    makeXhrRequest(url, proxyUrl, callback, gadgets.io.encodeValues(paramData), "POST", params, processResponse)
                }
            }
        },
        makeNonProxiedRequest: function(relativeUrl, callback, opt_params, opt_headers) {
            var params = opt_params || {};
            makeXhrRequest(relativeUrl, relativeUrl, callback, params.POST_DATA, params.METHOD, params, processNonProxiedResponse, opt_headers)
        },
        clearOAuthState: function() {
            oauthState = undefined
        },
        encodeValues: function(fields, opt_noEscaping) {
            var escape = !opt_noEscaping;
            var buf = [];
            var first = false;
            for (var i in fields) {
                if (fields.hasOwnProperty(i) && !/___$/.test(i)) {
                    if (!first) {
                        first = true
                    } else {
                        buf.push("&")
                    }
                    buf.push(escape ? encodeURIComponent(String(i)) : i);
                    buf.push("=");
                    buf.push(escape ? encodeURIComponent(String(fields[i])) : fields[i])
                }
            }
            return buf.join("")
        },
        getProxyUrl: function(url, opt_params) {
            var params = opt_params || {};
            var refresh = params.REFRESH_INTERVAL;
            if (refresh === undefined) {
                refresh = "3600"
            }
            var urlParams = gadgets.util.getUrlParameters();
            var rewriteMimeParam = params.rewriteMime ? "&rewriteMime=" + encodeURIComponent(String(params.rewriteMime)) : "";
            var ret = config.proxyUrl.replace("%url%", encodeURIComponent(url)).replace("%host%", document.location.host).replace("%rawurl%", url).replace("%refresh%", encodeURIComponent(String(refresh))).replace("%gadget%", encodeURIComponent(urlParams.url)).replace("%container%", encodeURIComponent(urlParams.container || urlParams.synd || "default")).replace("%rewriteMime%", rewriteMimeParam);
            if (ret.indexOf("//") == 0) {
                ret = window.location.protocol + ret
            }
            return ret
        }
    }
}();
gadgets.io.RequestParameters = gadgets.util.makeEnum(["METHOD", "CONTENT_TYPE", "POST_DATA", "HEADERS", "AUTHORIZATION", "NUM_ENTRIES", "GET_SUMMARIES", "GET_FULL_HEADERS", "REFRESH_INTERVAL", "OAUTH_SERVICE_NAME", "OAUTH_USE_TOKEN", "OAUTH_TOKEN_NAME", "OAUTH_REQUEST_TOKEN", "OAUTH_REQUEST_TOKEN_SECRET", "OAUTH_RECEIVED_CALLBACK"]);
gadgets.io.MethodType = gadgets.util.makeEnum(["GET", "POST", "PUT", "DELETE", "HEAD"]);
gadgets.io.ContentType = gadgets.util.makeEnum(["TEXT", "DOM", "JSON", "FEED"]);
gadgets.io.AuthorizationType = gadgets.util.makeEnum(["NONE", "SIGNED", "OAUTH"]);;

/* [end] feature=core.io */

/* [start] feature=opensocial-base */
window.FieldTranslations = (function() {
    function b(c) {
        if (c) {
            c.key = c.value
        }
    }
    function a(c) {
        if (c) {
            c.address = c.value
        }
    }
    return {
        translateEnumJson: b,
        translateUrlJson: a,
        translateServerPersonToJsPerson: function(l, d) {
            if (l.emails) {
                for (var g = 0;
                     g < l.emails.length;
                     g++) {
                    l.emails[g].address = l.emails[g].value
                }
            }
            if (l.phoneNumbers) {
                for (var c = 0;
                     c < l.phoneNumbers.length;
                     c++) {
                    l.phoneNumbers[c].number = l.phoneNumbers[c].value
                }
            }
            if (l.birthday) {
                l.dateOfBirth = l.birthday
            }
            if (l.utcOffset) {
                l.timeZone = l.utcOffset
            }
            if (l.addresses) {
                for (var f = 0;
                     f < l.addresses.length;
                     f++) {
                    l.addresses[f].unstructuredAddress = l.addresses[f].formatted
                }
            }
            if (l.gender) {
                var h = l.gender == "male" ? "MALE" : (l.gender == "female") ? "FEMALE" : null;
                l.gender = {
                    key: h,
                    displayValue: l.gender
                }
            }
            a(l.profileSong);
            a(l.profileVideo);
            if (l.urls) {
                for (var k = 0;
                     k < l.urls.length;
                     k++) {
                    a(l.urls[k])
                }
            }
            b(l.drinker);
            b(l.lookingFor);
            b(l.networkPresence);
            b(l.smoker);
            if (l.organizations) {
                l.jobs = [];
                l.schools = [];
                for (var e = 0;
                     e < l.organizations.length;
                     e++) {
                    var m = l.organizations[e];
                    if (m.type == "job") {
                        l.jobs.push(m)
                    } else {
                        if (m.type == "school") {
                            l.schools.push(m)
                        }
                    }
                }
            }
            if (l.name) {
                l.name.unstructured = l.name.formatted
            }
            if (l.appData) {
                l.appData = opensocial.Container.escape(l.appData, d, true)
            }
        },
        translateJsPersonFieldsToServerFields: function(c) {
            for (var d = 0;
                 d < c.length;
                 d++) {
                if (c[d] == "dateOfBirth") {
                    c[d] = "birthday"
                } else {
                    if (c[d] == "timeZone") {
                        c[d] = "utcOffset"
                    } else {
                        if (c[d] == "jobs") {
                            c[d] = "organizations"
                        } else {
                            if (c[d] == "schools") {
                                c[d] = "organizations"
                            }
                        }
                    }
                }
            }
            c.push("id");
            c.push("displayName")
        },
        translateIsoStringToDate: function(c) {
            var f = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
            var i = c.match(new RegExp(f));
            var h = 0;
            var e = new Date(i[1], 0, 1);
            if (i[3]) {
                e.setMonth(i[3] - 1)
            }
            if (i[5]) {
                e.setDate(i[5])
            }
            if (i[7]) {
                e.setHours(i[7])
            }
            if (i[8]) {
                e.setMinutes(i[8])
            }
            if (i[10]) {
                e.setSeconds(i[10])
            }
            if (i[12]) {
                e.setMilliseconds(Number("0." + i[12]) * 1000)
            }
            if (i[14]) {
                h = (Number(i[16]) * 60) + Number(i[17]);
                h *= ((i[15] == "-") ? 1 : -1)
            }
            h -= e.getTimezoneOffset();
            var g = (Number(e) + (h * 60 * 1000));
            return new Date(Number(g))
        },
        addAppDataAsProfileFields: function(f) {
            if (f) {
                if (f.appData) {
                    var c = f.appData;
                    if (typeof c === "string") {
                        c = [c]
                    }
                    var e = f.profileDetail || [];
                    for (var d = 0;
                         d < c.length;
                         d++) {
                        if (c[d] === "*") {
                            e.push("appData")
                        } else {
                            e.push("appData." + c[d])
                        }
                    }
                    f.appData = c
                }
            }
        },
        translateStandardArguments: function(d, c) {
            if (d.first) {
                c.startIndex = d.first
            }
            if (d.max) {
                c.count = d.max
            }
            if (d.sortOrder) {
                c.sortBy = d.sortOrder
            }
            if (d.filter) {
                c.filterBy = d.filter
            }
            if (d.filterOp) {
                c.filterOp = d.filterOp
            }
            if (d.filterValue) {
                c.filterValue = d.filterValue
            }
            if (d.fields) {
                c.fields = d.fields
            }
        },
        translateNetworkDistance: function(c, d) {
            if (c.getField("networkDistance")) {
                d.networkDistance = c.getField("networkDistance")
            }
        }
    }
})();;
var JsonMediaItem = function(a) {
    a = a || {};
    opensocial.MediaItem.call(this, a.mimeType, a.url, a)
};
JsonMediaItem.inherits(opensocial.MediaItem);
JsonMediaItem.prototype.toJsonObject = function() {
    return JsonMediaItem.copyFields(this.fields_)
};
JsonMediaItem.copyFields = function(a) {
    var b = {};
    for (var c in a) {
        b[c] = a[c]
    }
    return b
};;
var JsonAlbum = function(a) {
    a = a || {};
    JsonAlbum.constructObject(a, "location", opensocial.Address);
    opensocial.Album.call(this, a)
};
JsonAlbum.inherits(opensocial.Album);
JsonAlbum.prototype.toJsonObject = function() {
    return JsonAlbum.copyFields(this.fields_)
};
JsonAlbum.constructObject = function(c, d, a) {
    var b = c[d];
    if (b) {
        c[d] = new a(b)
    }
};
JsonAlbum.copyFields = function(a) {
    var b = {};
    for (var c in a) {
        b[c] = a[c]
    }
    return b
};;
var JsonActivity = function(a, b) {
    a = a || {};
    if (!b) {
        JsonActivity.constructArrayObject(a, "mediaItems", JsonMediaItem)
    }
    opensocial.Activity.call(this, a)
};
JsonActivity.inherits(opensocial.Activity);
JsonActivity.prototype.toJsonObject = function() {
    var c = JsonActivity.copyFields(this.fields_);
    var d = c.mediaItems || [];
    var a = [];
    for (var b = 0;
         b < d.length;
         b++) {
        a[b] = d[b].toJsonObject()
    }
    c.mediaItems = a;
    return c
};
JsonActivity.constructArrayObject = function(d, e, b) {
    var c = d[e];
    if (c) {
        for (var a = 0;
             a < c.length;
             a++) {
            c[a] = new b(c[a])
        }
    }
};
JsonActivity.copyFields = function(a) {
    var b = {};
    for (var c in a) {
        b[c] = a[c]
    }
    return b
};;
var JsonPerson = function(a) {
    a = a || {};
    JsonPerson.constructObject(a, "bodyType", opensocial.BodyType);
    JsonPerson.constructObject(a, "currentLocation", opensocial.Address);
    JsonPerson.constructObject(a, "name", opensocial.Name);
    JsonPerson.constructObject(a, "profileSong", opensocial.Url);
    JsonPerson.constructObject(a, "profileVideo", opensocial.Url);
    JsonPerson.constructDate(a, "dateOfBirth");
    JsonPerson.constructArrayObject(a, "addresses", opensocial.Address);
    JsonPerson.constructArrayObject(a, "emails", opensocial.Email);
    JsonPerson.constructArrayObject(a, "jobs", opensocial.Organization);
    JsonPerson.constructArrayObject(a, "phoneNumbers", opensocial.Phone);
    JsonPerson.constructArrayObject(a, "schools", opensocial.Organization);
    JsonPerson.constructArrayObject(a, "urls", opensocial.Url);
    JsonPerson.constructEnum(a, "gender");
    JsonPerson.constructEnum(a, "smoker");
    JsonPerson.constructEnum(a, "drinker");
    JsonPerson.constructEnum(a, "networkPresence");
    JsonPerson.constructEnumArray(a, "lookingFor");
    opensocial.Person.call(this, a, a.isOwner, a.isViewer)
};
JsonPerson.inherits(opensocial.Person);
JsonPerson.constructEnum = function(b, c) {
    var a = b[c];
    if (a) {
        b[c] = new opensocial.Enum(a.key, a.displayValue)
    }
};
JsonPerson.constructEnumArray = function(c, d) {
    var b = c[d];
    if (b) {
        for (var a = 0;
             a < b.length;
             a++) {
            b[a] = new opensocial.Enum(b[a].key, b[a].displayValue)
        }
    }
};
JsonPerson.constructObject = function(c, d, a) {
    var b = c[d];
    if (b) {
        c[d] = new a(b)
    }
};
JsonPerson.constructDate = function(b, c) {
    var a = b[c];
    if (a) {
        b[c] = FieldTranslations.translateIsoStringToDate(a)
    }
};
JsonPerson.constructArrayObject = function(d, e, b) {
    var c = d[e];
    if (c) {
        for (var a = 0;
             a < c.length;
             a++) {
            c[a] = new b(c[a])
        }
    }
};
JsonPerson.prototype.getDisplayName = function() {
    return this.getField("displayName")
};
JsonPerson.prototype.getAppData = function(b) {
    var a = this.getField("appData");
    return a && a[b]
};;
var JsonMessageCollection = function(a) {
    a = a || {};
    opensocial.MessageCollection.call(this, a)
};
JsonMessageCollection.inherits(opensocial.MessageCollection);
JsonMessageCollection.prototype.toJsonObject = function() {
    return JsonMessageCollection.copyFields(this.fields_)
};
JsonMessageCollection.copyFields = function(a) {
    var b = {};
    for (var c in a) {
        b[c] = a[c]
    }
    return b
};;
var JsonMessage = function(a, b) {
    b = b || {};
    opensocial.Message.call(this, a, b)
};
JsonMessage.inherits(opensocial.Message);
JsonMessage.prototype.toJsonObject = function() {
    return JsonMessage.copyFields(this.fields_)
};
JsonMessage.copyFields = function(a) {
    var b = {};
    for (var c in a) {
        b[c] = a[c]
    }
    return b
};;

/* [end] feature=opensocial-base */

/* [start] feature=opensocial-jsonrpc */
var JsonRpcContainer = function(c) {
    opensocial.Container.call(this);
    var h = c.path;
    this.path_ = h.replace("%host%", document.location.host);
    var f = c.invalidatePath;
    this.invalidatePath_ = f.replace("%host%", document.location.host);
    var g = c.supportedFields;
    var e = {};
    for (var b in g) {
        if (g.hasOwnProperty(b)) {
            e[b] = {};
            for (var d = 0;
                 d < g[b].length;
                 d++) {
                var a = g[b][d];
                e[b][a] = true
            }
        }
    }
    this.environment_ = new opensocial.Environment(c.domain, e);
    this.useOAuth2 = c.useOAuth2;
    this.securityToken_ = shindig.auth.getSecurityToken();
    gadgets.rpc.register("shindig.requestShareApp_callback", JsonRpcContainer.requestShareAppCallback_)
};
var JsonRpcRequestItem = function(b, a) {
    this.rpc = b;
    this.processData = a ||
        function(c) {
            return c
        };
    this.processResponse = function(c, f, e, d) {
        var g = e ? JsonRpcContainer.translateHttpError(e.code) : null;
        return new opensocial.ResponseItem(c, e ? null : this.processData(f), g, d)
    }
};
(function() {
    var a = {};
    JsonRpcContainer.inherits(opensocial.Container);
    JsonRpcContainer.prototype.getEnvironment = function() {
        return this.environment_
    };
    JsonRpcContainer.prototype.requestShareApp = function(f, h, c, d) {
        var e = "cId_" + Math.random();
        a[e] = c;
        var b = gadgets.util.unescapeString(h.getField(opensocial.Message.Field.BODY));
        if (!b || b.length === 0) {
            var g = gadgets.util.unescapeString(h.getField(opensocial.Message.Field.BODY_ID));
            b = gadgets.Prefs.getMsg(g)
        }
        gadgets.rpc.call("..", "shindig.requestShareApp", null, e, f, b)
    };
    JsonRpcContainer.requestShareAppCallback_ = function(f, g, c, e) {
        callback = a[f];
        if (callback) {
            a[f] = null;
            var d = null;
            if (e) {
                d = {
                    recipientIds: e
                }
            }
            var b = new opensocial.ResponseItem(null, d, c);
            callback(b)
        }
    };
    JsonRpcContainer.prototype.requestCreateActivity = function(e, c, b) {
        b = b ||
            function() {};
        var d = opensocial.newDataRequest();
        var f = opensocial.newIdSpec({
            userId: "VIEWER"
        });
        d.add(this.newCreateActivityRequest(f, e), "key");
        d.send(function(g) {
            b(g.get("key"))
        })
    };
    JsonRpcContainer.prototype.requestData = function(h, m) {
        m = m ||
            function() {};
        var f = h.getRequestObjects();
        var k = f.length;
        if (k === 0) {
            window.setTimeout(function() {
                m(new opensocial.DataResponse({}, true))
            }, 0);
            return
        }
        var n = new Array(k);
        for (var g = 0;
             g < k;
             g++) {
            var l = f[g];
            n[g] = l.request.rpc;
            if (l.key) {
                n[g].id = l.key
            }
        }
        var c = function(y) {
            if (y.errors[0]) {
                JsonRpcContainer.generateErrorResponse(y, f, m);
                return
            }
            y = y.result || y.data;
            var o = false;
            var x = {};
            for (var s = 0;
                 s < y.length;
                 s++) {
                y[y[s].id] = y[s]
            }
            for (var p = 0;
                 p < f.length;
                 p++) {
                var r = f[p];
                var q = y[p];
                if (r.key && q.id !== r.key) {
                    throw "Request key(" + r.key + ") and response id(" + q.id + ") do not match"
                }
                var j = q.result || q.data;
                var v = q.error;
                var u = "";
                if (v) {
                    u = v.message
                }
                var t = r.request.processResponse(r.request, j, v, u);
                o = o || t.hadError();
                if (r.key) {
                    x[r.key] = t
                }
            }
            var w = new opensocial.DataResponse(x, o);
            m(w)
        };
        var i = {
            CONTENT_TYPE: "JSON",
            METHOD: "POST",
            AUTHORIZATION: "SIGNED",
            POST_DATA: gadgets.json.stringify(n)
        };
        var d = {
            "Content-Type": "application/json"
        };
        var b = [this.path_];
        var e = shindig.auth.getSecurityToken();
        if (e) {
            if (this.useOAuth2) {
                d.Authorization = "OAuth2 " + e
            } else {
                b.push("?st=", encodeURIComponent(e))
            }
        }
        this.sendRequest(b.join(""), c, i, d)
    };
    JsonRpcContainer.prototype.sendRequest = function(b, e, d, c) {
        gadgets.io.makeNonProxiedRequest(b, e, d, c)
    };
    JsonRpcContainer.generateErrorResponse = function(b, e, g) {
        var c = JsonRpcContainer.translateHttpError(b.rc || b.result.error || b.data.error) || opensocial.ResponseItem.Error.INTERNAL_ERROR;
        var f = {};
        for (var d = 0;
             d < e.length;
             d++) {
            f[e[d].key] = new opensocial.ResponseItem(e[d].request, null, c)
        }
        g(new opensocial.DataResponse(f, true))
    };
    JsonRpcContainer.translateHttpError = function(b) {
        if (b == 501) {
            return opensocial.ResponseItem.Error.NOT_IMPLEMENTED
        } else {
            if (b == 401) {
                return opensocial.ResponseItem.Error.UNAUTHORIZED
            } else {
                if (b == 403) {
                    return opensocial.ResponseItem.Error.FORBIDDEN
                } else {
                    if (b == 400) {
                        return opensocial.ResponseItem.Error.BAD_REQUEST
                    } else {
                        if (b == 500) {
                            return opensocial.ResponseItem.Error.INTERNAL_ERROR
                        } else {
                            if (b == 404) {
                                return opensocial.ResponseItem.Error.BAD_REQUEST
                            } else {
                                if (b == 417) {
                                    return opensocial.ResponseItem.Error.LIMIT_EXCEEDED
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    JsonRpcContainer.prototype.makeIdSpec = function(b) {
        return opensocial.newIdSpec({
            userId: b
        })
    };
    JsonRpcContainer.prototype.translateIdSpec = function(b) {
        var e = b.getField("userId");
        var d = b.getField("groupId");
        if (!opensocial.Container.isArray(e)) {
            e = [e]
        }
        for (var c = 0;
             c < e.length;
             c++) {
            if (e[c] === "OWNER") {
                e[c] = "@owner"
            } else {
                if (e[c] === "VIEWER") {
                    e[c] = "@viewer"
                }
            }
        }
        if (d === "FRIENDS") {
            d = "@friends"
        } else {
            if (d == "ALL") {
                d = "@all"
            } else {
                if (d === "SELF" || !d) {
                    d = "@self"
                }
            }
        }
        return {
            userId: e,
            groupId: d
        }
    };
    JsonRpcContainer.prototype.newFetchPersonRequest = function(e, d) {
        var b = this.newFetchPeopleRequest(this.makeIdSpec(e), d);
        var c = this;
        return new JsonRpcRequestItem(b.rpc, function(f) {
            return c.createPersonFromJson(f, d)
        })
    };
    JsonRpcContainer.prototype.newFetchPeopleRequest = function(b, d) {
        var e = {
            method: "people.get"
        };
        e.params = this.translateIdSpec(b);
        FieldTranslations.addAppDataAsProfileFields(d);
        FieldTranslations.translateStandardArguments(d, e.params);
        FieldTranslations.translateNetworkDistance(b, e.params);
        if (d.profileDetail) {
            FieldTranslations.translateJsPersonFieldsToServerFields(d.profileDetail);
            e.params.fields = d.profileDetail
        }
        var c = this;
        return new JsonRpcRequestItem(e, function(j) {
            var h;
            if (j.list) {
                h = j.list
            } else {
                h = [j]
            }
            var g = [];
            for (var f = 0;
                 f < h.length;
                 f++) {
                g.push(c.createPersonFromJson(h[f], d))
            }
            return new opensocial.Collection(g, j.startIndex, j.totalResults)
        })
    };
    JsonRpcContainer.prototype.createPersonFromJson = function(b, c) {
        FieldTranslations.translateServerPersonToJsPerson(b, c);
        return new JsonPerson(b)
    };
    JsonRpcContainer.prototype.getFieldsList = function(b) {
        if (this.hasNoKeys(b) || this.isWildcardKey(b[0])) {
            return []
        } else {
            return b
        }
    };
    JsonRpcContainer.prototype.hasNoKeys = function(b) {
        return !b || b.length === 0
    };
    JsonRpcContainer.prototype.isWildcardKey = function(b) {
        return b === "*"
    };
    JsonRpcContainer.prototype.newFetchPersonAppDataRequest = function(b, d, c) {
        var e = {
            method: "appdata.get"
        };
        e.params = this.translateIdSpec(b);
        e.params.appId = "@app";
        e.params.fields = this.getFieldsList(d);
        FieldTranslations.translateNetworkDistance(b, e.params);
        return new JsonRpcRequestItem(e, function(f) {
            return opensocial.Container.escape(f, c, true)
        })
    };
    JsonRpcContainer.prototype.newUpdatePersonAppDataRequest = function(b, c) {
        var d = {
            method: "appdata.update"
        };
        d.params = {
            userId: ["@viewer"],
            groupId: "@self"
        };
        d.params.appId = "@app";
        d.params.data = {};
        d.params.data[b] = c;
        d.params.fields = b;
        return new JsonRpcRequestItem(d)
    };
    JsonRpcContainer.prototype.newRemovePersonAppDataRequest = function(b) {
        var c = {
            method: "appdata.delete"
        };
        c.params = {
            userId: ["@viewer"],
            groupId: "@self"
        };
        c.params.appId = "@app";
        c.params.fields = this.getFieldsList(b);
        return new JsonRpcRequestItem(c)
    };
    JsonRpcContainer.prototype.newFetchActivitiesRequest = function(b, c) {
        var d = {
            method: "activities.get"
        };
        d.params = this.translateIdSpec(b);
        d.params.appId = "@app";
        FieldTranslations.translateStandardArguments(c, d.params);
        FieldTranslations.translateNetworkDistance(b, d.params);
        return new JsonRpcRequestItem(d, function(f) {
            f = f.list;
            var g = [];
            for (var e = 0;
                 e < f.length;
                 e++) {
                g.push(new JsonActivity(f[e]))
            }
            return new opensocial.Collection(g)
        })
    };
    JsonRpcContainer.prototype.newActivity = function(b) {
        return new JsonActivity(b, true)
    };
    JsonRpcContainer.prototype.newAlbum = function(b) {
        return new JsonAlbum(b)
    };
    JsonRpcContainer.prototype.newMediaItem = function(d, b, c) {
        c = c || {};
        c.mimeType = d;
        c.url = b;
        return new JsonMediaItem(c)
    };
    JsonRpcContainer.prototype.newCreateActivityRequest = function(b, c) {
        var d = {
            method: "activities.create"
        };
        d.params = this.translateIdSpec(b);
        d.params.appId = "@app";
        FieldTranslations.translateNetworkDistance(b, d.params);
        d.params.activity = c.toJsonObject();
        return new JsonRpcRequestItem(d)
    };
    JsonRpcContainer.prototype.invalidateCache = function() {
        var g = {
            method: "cache.invalidate"
        };
        var c = {
            invalidationKeys: ["@viewer"]
        };
        g.params = c;
        var e = {
            CONTENT_TYPE: "JSON",
            METHOD: "POST",
            AUTHORIZATION: "SIGNED",
            POST_DATA: gadgets.json.stringify(g)
        };
        var f = {
            "Content-Type": "application/json"
        };
        var b = [this.invalidatePath_];
        var d = shindig.auth.getSecurityToken();
        if (d) {
            if (this.useOAuth2) {
                f.Authorization = "OAuth2 " + d
            } else {
                b.push("?st=", encodeURIComponent(d))
            }
        }
        this.sendRequest(b.join(""), null, e, f)
    }
})();
JsonRpcContainer.prototype.newMessage = function(a, b) {
    return new JsonMessage(a, b)
};
JsonRpcContainer.prototype.newMessageCollection = function(a) {
    return new JsonMessageCollection(a)
};
JsonRpcContainer.prototype.newFetchMessageCollectionsRequest = function(a, b) {
    var c = {
        method: "messages.get"
    };
    c.params = this.translateIdSpec(a);
    return new JsonRpcRequestItem(c, function(e) {
        e = e.list;
        var f = [];
        for (var d = 0;
             d < e.length;
             d++) {
            f.push(new JsonMessageCollection(e[d]))
        }
        return new opensocial.Collection(f)
    })
};
JsonRpcContainer.prototype.newFetchMessagesRequest = function(a, c, b) {
    var d = {
        method: "messages.get"
    };
    d.params = this.translateIdSpec(a);
    d.params.msgCollId = c;
    return new JsonRpcRequestItem(d, function(g) {
        g = g.list;
        var f = [];
        for (var e = 0;
             e < g.length;
             e++) {
            f.push(new JsonMessage(g[e]))
        }
        return new opensocial.Collection(f)
    })
};
JsonRpcContainer.prototype.newCreateAlbumRequest = function(b, a) {
    var c = {
        method: "albums.create"
    };
    c.params = this.translateIdSpec(b);
    c.params.appId = "@app";
    c.params.album = a.toJsonObject();
    return new JsonRpcRequestItem(c)
};
JsonRpcContainer.prototype.newDeleteAlbumRequest = function(a, b) {
    var c = {
        method: "albums.delete"
    };
    c.params = this.translateIdSpec(a);
    c.params.appId = "@app";
    c.params.albumId = b;
    return new JsonRpcRequestItem(c)
};
JsonRpcContainer.prototype.newFetchAlbumsRequest = function(a, b) {
    var c = {
        method: "albums.get"
    };
    c.params = this.translateIdSpec(a);
    c.params.appId = "@app";
    return new JsonRpcRequestItem(c, function(f) {
        f = f.list;
        var d = [];
        for (var e = 0;
             e < f.length;
             e++) {
            d.push(new JsonAlbum(f[e]))
        }
        return new opensocial.Collection(d)
    })
};
JsonRpcContainer.prototype.newCreateMediaItemRequest = function(a, c, b) {
    var d = {
        method: "mediaItems.create"
    };
    d.params = this.translateIdSpec(a);
    d.params.appId = "@app";
    d.params.albumId = c;
    d.params.mediaItem = b.toJsonObject();
    return new JsonRpcRequestItem(d)
};
JsonRpcContainer.prototype.newFetchMediaItemsRequest = function(a, b, c) {
    var d = {
        method: "mediaItems.get"
    };
    d.params = this.translateIdSpec(a);
    d.params.appId = "@app";
    d.params.albumId = b;
    return new JsonRpcRequestItem(d, function(g) {
        g = g.list;
        var f = [];
        for (var e = 0;
             e < g.length;
             e++) {
            f.push(new JsonMediaItem(g[e]))
        }
        return new opensocial.Collection(f)
    })
};;

/* [end] feature=opensocial-jsonrpc */

/* [start] feature=opensocial */

var requiredConfig = {
    "path": gadgets.config.NonEmptyStringValidator,
    "domain": gadgets.config.NonEmptyStringValidator,
    "supportedFields": gadgets.config.ExistsValidator,
    "invalidatePath": gadgets.config.ExistsValidator
};

gadgets.config.register("opensocial", requiredConfig, function(config) {
    var configParams = config["opensocial"];
    opensocial.Container.setContainer(new JsonRpcContainer(configParams));
    if (window['caja']) {
        opensocial.Container.get().enableCaja();
    }
});;

/* [end] feature=opensocial */

/* [start] feature=core.legacy */
var JSON = window.JSON || gadgets.json;
var _IG_Prefs = (function() {
    var a = null;
    var b = function() {
        if (!a) {
            a = new gadgets.Prefs();
            a.setDontEscape_()
        }
        return a
    };
    b._parseURL = gadgets.Prefs.parseUrl;
    return b
})();

function _IG_Fetch_wrapper(b, a) {
    b(a.data ? a.data : "")
}
function _IG_FetchContent(b, g, c) {
    var f = c || {};
    if (f.refreshInterval) {
        f.REFRESH_INTERVAL = f.refreshInterval
    } else {
        f.REFRESH_INTERVAL = 3600
    }
    for (var e in f) {
        var d = f[e];
        delete f[e];
        f[e.toUpperCase()] = d
    }
    var a = gadgets.util.makeClosure(null, _IG_Fetch_wrapper, g);
    gadgets.io.makeRequest(b, a, f)
}
function _IG_FetchXmlContent(b, e, c) {
    var d = c || {};
    if (d.refreshInterval) {
        d.REFRESH_INTERVAL = d.refreshInterval
    } else {
        d.REFRESH_INTERVAL = 3600
    }
    d.CONTENT_TYPE = "DOM";
    var a = gadgets.util.makeClosure(null, _IG_Fetch_wrapper, e);
    gadgets.io.makeRequest(b, a, d)
}
function _IG_FetchFeedAsJSON(b, f, c, a, d) {
    var e = d || {};
    e.CONTENT_TYPE = "FEED";
    e.NUM_ENTRIES = c;
    e.GET_SUMMARIES = a;
    gadgets.io.makeRequest(b, function(j) {
        j.data = j.data || {};
        if (j.errors && j.errors.length > 0) {
            j.data.ErrorMsg = j.errors[0]
        }
        if (j.data.link) {
            j.data.URL = b
        }
        if (j.data.title) {
            j.data.Title = j.data.title
        }
        if (j.data.description) {
            j.data.Description = j.data.description
        }
        if (j.data.link) {
            j.data.Link = j.data.link
        }
        if (j.data.items && j.data.items.length > 0) {
            j.data.Entry = j.data.items;
            for (var h = 0;
                 h < j.data.Entry.length; ++h) {
                var i = j.data.Entry[h];
                i.Title = i.title;
                i.Link = i.link;
                i.Summary = i.summary || i.description;
                i.Date = i.pubDate
            }
        }
        for (var g = 0;
             g < j.data.Entry.length; ++g) {
            var i = j.data.Entry[g];
            i.Date = (i.Date / 1000)
        }
        f(j.data)
    }, e)
}
function _IG_GetCachedUrl(a, b) {
    var c = b || {};
    c.REFRESH_INTERVAL = 3600;
    if (c.refreshInterval) {
        c.REFRESH_INTERVAL = c.refreshInterval
    }
    return gadgets.io.getProxyUrl(a, c)
}
function _IG_GetImageUrl(a, b) {
    return _IG_GetCachedUrl(a, b)
}
function _IG_GetImage(b) {
    var a = document.createElement("img");
    a.src = _IG_GetCachedUrl(b);
    return a
}
function _IG_RegisterOnloadHandler(a) {
    gadgets.util.registerOnLoadHandler(a)
}
function _IG_Callback(b, c) {
    var a = arguments;
    return function() {
        var d = Array.prototype.slice.call(arguments);
        b.apply(null, d.concat(Array.prototype.slice.call(a, 1)))
    }
}
var _args = gadgets.util.getUrlParameters;

function _gel(a) {
    return document.getElementById ? document.getElementById(a) : null
}
function _gelstn(a) {
    if (a === "*" && document.all) {
        return document.all
    }
    return document.getElementsByTagName ? document.getElementsByTagName(a) : []
}
function _gelsbyregex(d, f) {
    var c = _gelstn(d);
    var e = [];
    for (var b = 0, a = c.length;
         b < a; ++b) {
        if (f.test(c[b].id)) {
            e.push(c[b])
        }
    }
    return e
}
function _esc(a) {
    return window.encodeURIComponent ? encodeURIComponent(a) : escape(a)
}
function _unesc(a) {
    return window.decodeURIComponent ? decodeURIComponent(a) : unescape(a)
}
function _hesc(a) {
    return gadgets.util.escapeString(a)
}
function _striptags(a) {
    return a.replace(/<\/?[^>]+>/g, "")
}
function _trim(a) {
    return a.replace(/^\s+|\s+$/g, "")
}
function _toggle(a) {
    a = (typeof a === "string") ? _gel(a) : a;
    if (a !== null) {
        if (a.style.display.length === 0 || a.style.display === "block") {
            a.style.display = "none"
        } else {
            if (a.style.display === "none") {
                a.style.display = "block"
            }
        }
    }
}
var _uid = (function() {
    var a = 0;
    return function() {
        return a++
    }
})();

function _min(d, c) {
    return (d < c ? d : c)
}
function _max(d, c) {
    return (d > c ? d : c)
}
function _exportSymbols(a, c) {
    var m = window;
    var f = a.split(".");
    for (var h = 0, g = f.length;
         h < g;
         h++) {
        var b = f[h];
        m[b] = m[b] || {};
        m = m[b]
    }
    for (var e = 0, d = c.length;
         e < d;
         e += 2) {
        m[c[e]] = c[e + 1]
    }
}
function _IG_AddDOMEventHandler(c, b, a) {
    gadgets.warn("_IG_AddDOMEventHandler not implemented - see SHINDIG-198")
};;

/* [end] feature=core.legacy */

/* [start] feature=core.tracking */
(function() {
    function e(b, c, a) {
        b = {
            msg: b || "",
            line: a || 0,
            jsUrl: 0 == window.location.href.indexOf(c) ? "-top-" : c,
            fullUrl: window.location
        };
        try {
            if (++window._varz_numerrors, gadgets && !(3 < f)) {
                c = {};
                c[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
                var a = encodeURIComponent || escape,
                    d = gadgets.util.getUrlParameters(),
                    e = d.container || d.synd,
                    g = d.gadget || d.url,
                    i = ["/gadgets/evthdlr?t=err&gadget=", a(g), "&container=", a(e), "&jsurl=", a(b.jsUrl), "&line=", a(b.line), "&session=", h, "&count=", f, "&msg=", a(b.msg)];
                gadgets.io.makeNonProxiedRequest(i.join(""), null, c);
                f++
            }
        } catch (j) {}
    }
    window._varz_numerrors = 0;
    var h = (new Date).getTime(),
        f = 0;
    if (-1 == window.location.href.indexOf("&debug=1") && -1 == window.location.href.indexOf("?debug=1")) window.onerror = e
})();;

/* [end] feature=core.tracking */

/* [start] feature=core */
{
    var html4 = {},
        html, html_sanitize;
    html4.atype = {
        'NONE': 0,
        'URI': 1,
        'URI_FRAGMENT': 11,
        'SCRIPT': 2,
        'STYLE': 3,
        'ID': 4,
        'IDREF': 5,
        'IDREFS': 6,
        'GLOBAL_NAME': 7,
        'LOCAL_NAME': 8,
        'CLASSES': 9,
        'FRAME_TARGET': 10
    }, html4.ATTRIBS = {
        '*::class': 9,
        '*::dir': 0,
        '*::id': 4,
        '*::lang': 0,
        '*::onclick': 2,
        '*::ondblclick': 2,
        '*::onkeydown': 2,
        '*::onkeypress': 2,
        '*::onkeyup': 2,
        '*::onload': 2,
        '*::onmousedown': 2,
        '*::onmousemove': 2,
        '*::onmouseout': 2,
        '*::onmouseover': 2,
        '*::onmouseup': 2,
        '*::style': 3,
        '*::title': 0,
        'a::accesskey': 0,
        'a::coords': 0,
        'a::href': 1,
        'a::hreflang': 0,
        'a::name': 7,
        'a::onblur': 2,
        'a::onfocus': 2,
        'a::rel': 0,
        'a::rev': 0,
        'a::shape': 0,
        'a::tabindex': 0,
        'a::target': 10,
        'a::type': 0,
        'area::accesskey': 0,
        'area::alt': 0,
        'area::coords': 0,
        'area::href': 1,
        'area::nohref': 0,
        'area::onblur': 2,
        'area::onfocus': 2,
        'area::shape': 0,
        'area::tabindex': 0,
        'area::target': 10,
        'bdo::dir': 0,
        'blockquote::cite': 1,
        'br::clear': 0,
        'button::accesskey': 0,
        'button::disabled': 0,
        'button::name': 8,
        'button::onblur': 2,
        'button::onfocus': 2,
        'button::tabindex': 0,
        'button::type': 0,
        'button::value': 0,
        'canvas::height': 0,
        'canvas::width': 0,
        'caption::align': 0,
        'col::align': 0,
        'col::char': 0,
        'col::charoff': 0,
        'col::span': 0,
        'col::valign': 0,
        'col::width': 0,
        'colgroup::align': 0,
        'colgroup::char': 0,
        'colgroup::charoff': 0,
        'colgroup::span': 0,
        'colgroup::valign': 0,
        'colgroup::width': 0,
        'del::cite': 1,
        'del::datetime': 0,
        'dir::compact': 0,
        'div::align': 0,
        'dl::compact': 0,
        'font::color': 0,
        'font::face': 0,
        'font::size': 0,
        'form::accept': 0,
        'form::action': 1,
        'form::autocomplete': 0,
        'form::enctype': 0,
        'form::method': 0,
        'form::name': 7,
        'form::onreset': 2,
        'form::onsubmit': 2,
        'form::target': 10,
        'h1::align': 0,
        'h2::align': 0,
        'h3::align': 0,
        'h4::align': 0,
        'h5::align': 0,
        'h6::align': 0,
        'hr::align': 0,
        'hr::noshade': 0,
        'hr::size': 0,
        'hr::width': 0,
        'iframe::align': 0,
        'iframe::frameborder': 0,
        'iframe::height': 0,
        'iframe::marginheight': 0,
        'iframe::marginwidth': 0,
        'iframe::width': 0,
        'img::align': 0,
        'img::alt': 0,
        'img::border': 0,
        'img::height': 0,
        'img::hspace': 0,
        'img::ismap': 0,
        'img::name': 7,
        'img::src': 1,
        'img::usemap': 11,
        'img::vspace': 0,
        'img::width': 0,
        'input::accept': 0,
        'input::accesskey': 0,
        'input::align': 0,
        'input::alt': 0,
        'input::autocomplete': 0,
        'input::checked': 0,
        'input::disabled': 0,
        'input::ismap': 0,
        'input::maxlength': 0,
        'input::name': 8,
        'input::onblur': 2,
        'input::onchange': 2,
        'input::onfocus': 2,
        'input::onselect': 2,
        'input::readonly': 0,
        'input::size': 0,
        'input::src': 1,
        'input::tabindex': 0,
        'input::type': 0,
        'input::usemap': 11,
        'input::value': 0,
        'ins::cite': 1,
        'ins::datetime': 0,
        'label::accesskey': 0,
        'label::for': 5,
        'label::onblur': 2,
        'label::onfocus': 2,
        'legend::accesskey': 0,
        'legend::align': 0,
        'li::type': 0,
        'li::value': 0,
        'map::name': 7,
        'menu::compact': 0,
        'ol::compact': 0,
        'ol::start': 0,
        'ol::type': 0,
        'optgroup::disabled': 0,
        'optgroup::label': 0,
        'option::disabled': 0,
        'option::label': 0,
        'option::selected': 0,
        'option::value': 0,
        'p::align': 0,
        'pre::width': 0,
        'q::cite': 1,
        'select::disabled': 0,
        'select::multiple': 0,
        'select::name': 8,
        'select::onblur': 2,
        'select::onchange': 2,
        'select::onfocus': 2,
        'select::size': 0,
        'select::tabindex': 0,
        'table::align': 0,
        'table::bgcolor': 0,
        'table::border': 0,
        'table::cellpadding': 0,
        'table::cellspacing': 0,
        'table::frame': 0,
        'table::rules': 0,
        'table::summary': 0,
        'table::width': 0,
        'tbody::align': 0,
        'tbody::char': 0,
        'tbody::charoff': 0,
        'tbody::valign': 0,
        'td::abbr': 0,
        'td::align': 0,
        'td::axis': 0,
        'td::bgcolor': 0,
        'td::char': 0,
        'td::charoff': 0,
        'td::colspan': 0,
        'td::headers': 6,
        'td::height': 0,
        'td::nowrap': 0,
        'td::rowspan': 0,
        'td::scope': 0,
        'td::valign': 0,
        'td::width': 0,
        'textarea::accesskey': 0,
        'textarea::cols': 0,
        'textarea::disabled': 0,
        'textarea::name': 8,
        'textarea::onblur': 2,
        'textarea::onchange': 2,
        'textarea::onfocus': 2,
        'textarea::onselect': 2,
        'textarea::readonly': 0,
        'textarea::rows': 0,
        'textarea::tabindex': 0,
        'tfoot::align': 0,
        'tfoot::char': 0,
        'tfoot::charoff': 0,
        'tfoot::valign': 0,
        'th::abbr': 0,
        'th::align': 0,
        'th::axis': 0,
        'th::bgcolor': 0,
        'th::char': 0,
        'th::charoff': 0,
        'th::colspan': 0,
        'th::headers': 6,
        'th::height': 0,
        'th::nowrap': 0,
        'th::rowspan': 0,
        'th::scope': 0,
        'th::valign': 0,
        'th::width': 0,
        'thead::align': 0,
        'thead::char': 0,
        'thead::charoff': 0,
        'thead::valign': 0,
        'tr::align': 0,
        'tr::bgcolor': 0,
        'tr::char': 0,
        'tr::charoff': 0,
        'tr::valign': 0,
        'ul::compact': 0,
        'ul::type': 0
    }, html4.eflags = {
        'OPTIONAL_ENDTAG': 1,
        'EMPTY': 2,
        'CDATA': 4,
        'RCDATA': 8,
        'UNSAFE': 16,
        'FOLDABLE': 32,
        'SCRIPT': 64,
        'STYLE': 128
    }, html4.ELEMENTS = {
        'a': 0,
        'abbr': 0,
        'acronym': 0,
        'address': 0,
        'applet': 16,
        'area': 2,
        'b': 0,
        'base': 18,
        'basefont': 18,
        'bdo': 0,
        'big': 0,
        'blockquote': 0,
        'body': 49,
        'br': 2,
        'button': 0,
        'canvas': 0,
        'caption': 0,
        'center': 0,
        'cite': 0,
        'code': 0,
        'col': 2,
        'colgroup': 1,
        'dd': 1,
        'del': 0,
        'dfn': 0,
        'dir': 0,
        'div': 0,
        'dl': 0,
        'dt': 1,
        'em': 0,
        'fieldset': 0,
        'font': 0,
        'form': 0,
        'frame': 18,
        'frameset': 16,
        'h1': 0,
        'h2': 0,
        'h3': 0,
        'h4': 0,
        'h5': 0,
        'h6': 0,
        'head': 49,
        'hr': 2,
        'html': 49,
        'i': 0,
        'iframe': 4,
        'img': 2,
        'input': 2,
        'ins': 0,
        'isindex': 18,
        'kbd': 0,
        'label': 0,
        'legend': 0,
        'li': 1,
        'link': 18,
        'map': 0,
        'menu': 0,
        'meta': 18,
        'nobr': 0,
        'noembed': 4,
        'noframes': 20,
        'noscript': 20,
        'object': 16,
        'ol': 0,
        'optgroup': 0,
        'option': 1,
        'p': 1,
        'param': 18,
        'pre': 0,
        'q': 0,
        's': 0,
        'samp': 0,
        'script': 84,
        'select': 0,
        'small': 0,
        'span': 0,
        'strike': 0,
        'strong': 0,
        'style': 148,
        'sub': 0,
        'sup': 0,
        'table': 0,
        'tbody': 1,
        'td': 1,
        'textarea': 8,
        'tfoot': 1,
        'th': 1,
        'thead': 1,
        'title': 24,
        'tr': 1,
        'tt': 0,
        'u': 0,
        'ul': 0,
        'var': 0
    }, html4.ueffects = {
        'NOT_LOADED': 0,
        'SAME_DOCUMENT': 1,
        'NEW_DOCUMENT': 2
    }, html4.URIEFFECTS = {
        'a::href': 2,
        'area::href': 2,
        'blockquote::cite': 0,
        'body::background': 1,
        'del::cite': 0,
        'form::action': 2,
        'img::src': 1,
        'input::src': 1,
        'ins::cite': 0,
        'q::cite': 0
    }, html4.ltypes = {
        'UNSANDBOXED': 2,
        'SANDBOXED': 1,
        'DATA': 0
    }, html4.LOADERTYPES = {
        'a::href': 2,
        'area::href': 2,
        'blockquote::cite': 2,
        'body::background': 1,
        'del::cite': 2,
        'form::action': 2,
        'img::src': 1,
        'input::src': 1,
        'ins::cite': 2,
        'q::cite': 2
    }, html = (function(html4) {
        var
            ENTITIES, INSIDE_TAG_TOKEN, OUTSIDE_TAG_TOKEN, URI_SCHEME_RE, WHITELISTED_SCHEMES, ampRe, decimalEscapeRe, entityRe, eqRe, gtRe, hexEscapeRe, lcase, looseAmpRe, ltRe, nulRe, quotRe;
        'script' === 'SCRIPT'.toLowerCase() ? (lcase = function(s) {
            return s.toLowerCase()
        }) : (lcase = function(s) {
            return s.replace(/[A-Z]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) | 32)
            })
        }), ENTITIES = {
            'lt': '<',
            'gt': '>',
            'amp': '&',
            'nbsp': '\xa0',
            'quot': '\"',
            'apos': '\''
        }, WHITELISTED_SCHEMES = /^(?:https?|mailto)$/i, decimalEscapeRe = /^#(\d+)$/, hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;

        function
            lookupEntity(name) {
            var m;
            return name = lcase(name), ENTITIES.hasOwnProperty(name) ? ENTITIES[name] : (m = name.match(decimalEscapeRe), m ? String.fromCharCode(parseInt(m[1], 10)) : (m = name.match(hexEscapeRe)) ? String.fromCharCode(parseInt(m[1], 16)) : '')
        }
        function
            decodeOneEntity(_, name) {
            return lookupEntity(name)
        }
        nulRe = /\0/g;

        function stripNULs(s) {
            return s.replace(nulRe, '')
        }
        entityRe = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g;

        function
            unescapeEntities(s) {
            return s.replace(entityRe, decodeOneEntity)
        }
        ampRe = /&/g, looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi, ltRe = /</g, gtRe = />/g, quotRe = /\"/g, eqRe = /\=/g;

        function
            escapeAttrib(s) {
            return s.replace(ampRe, '&amp;').replace(ltRe, '&lt;').replace(gtRe, '&gt;').replace(quotRe, '&#34;').replace(eqRe, '&#61;')
        }
        function
            normalizeRCData(rcdata) {
            return rcdata.replace(looseAmpRe, '&amp;$1').replace(ltRe, '&lt;').replace(gtRe, '&gt;')
        }
        INSIDE_TAG_TOKEN = new
            RegExp('^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|\'[^\']*\'|(?=[a-z][a-z-]*\\s*=)|[^>\"\'\\s]*))?)|(/?>)|[\\s\\S][^a-z\\s>]*)', 'i'), OUTSIDE_TAG_TOKEN = new
            RegExp('^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<!--[\\s\\S]*?-->|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))', 'i');

        function
            makeSaxParser(handler) {
            return function parse(htmlText, param) {
                var attribName, attribs, ch, dataEnd, decodedValue, eflags, encodedValue, htmlLower, inTag, m, openTag, tagName;
                htmlText = String(htmlText), htmlLower = null, inTag = false, attribs = [], tagName = void
                    0, eflags = void 0, openTag = void 0, handler.startDoc && handler.startDoc(param);
                while (htmlText) {
                    m = htmlText.match(inTag ? INSIDE_TAG_TOKEN : OUTSIDE_TAG_TOKEN), htmlText = htmlText.substring(m[0].length);
                    if (inTag) {
                        if (m[1]) {
                            attribName = lcase(m[1]);
                            if (m[2]) {
                                encodedValue = m[3];
                                switch (encodedValue.charCodeAt(0)) {
                                    case
                                    34:
                                    case 39:
                                        encodedValue = encodedValue.substring(1, encodedValue.length - 1)
                                }
                                decodedValue = unescapeEntities(stripNULs(encodedValue))
                            } else
                                decodedValue = attribName;
                            attribs.push(attribName, decodedValue)
                        } else if (m[4]) eflags !== void
                            0 && (openTag ? handler.startTag && handler.startTag(tagName, attribs, param) : handler.endTag && handler.endTag(tagName, param)), openTag && eflags & (html4.eflags.CDATA | html4.eflags.RCDATA) && (htmlLower === null ? (htmlLower = lcase(htmlText)) : (htmlLower = htmlLower.substring(htmlLower.length - htmlText.length)), dataEnd = htmlLower.indexOf('</' + tagName), dataEnd < 0 && (dataEnd = htmlText.length), dataEnd && (eflags & html4.eflags.CDATA ? handler.cdata && handler.cdata(htmlText.substring(0, dataEnd), param) : handler.rcdata && handler.rcdata(normalizeRCData(htmlText.substring(0, dataEnd)), param), htmlText = htmlText.substring(dataEnd))), tagName = eflags = openTag = void
                            0, attribs.length = 0, inTag = false
                    } else m[1] ? handler.pcdata && handler.pcdata(m[0], param) : m[3] ? (openTag = !m[2], inTag = true, tagName = lcase(m[3]), eflags = html4.ELEMENTS.hasOwnProperty(tagName) ? html4.ELEMENTS[tagName] : void
                        0) : m[4] ? handler.pcdata && handler.pcdata(m[4], param) : m[5] && (handler.pcdata && (ch = m[5], handler.pcdata(ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&amp;', param)))
                }
                handler.endDoc && handler.endDoc(param)
            }
        }
        function
            makeHtmlSanitizer(sanitizeAttributes) {
            var ignoring, stack;
            return makeSaxParser({
                'startDoc': function(_) {
                    stack = [], ignoring = false
                },
                'startTag': function(tagName, attribs, out) {
                    var
                        attribName, eflags, i, n, value;
                    if (ignoring) return;
                    if (!html4.ELEMENTS.hasOwnProperty(tagName)) return;
                    eflags = html4.ELEMENTS[tagName];
                    if (eflags & html4.eflags.FOLDABLE) return;
                    else
                    if (eflags & html4.eflags.UNSAFE) return ignoring = !(eflags & html4.eflags.EMPTY), void 0;
                    attribs = sanitizeAttributes(tagName, attribs);
                    if (attribs) {
                        eflags & html4.eflags.EMPTY || stack.push(tagName), out.push('<', tagName);
                        for (i = 0, n = attribs.length; i < n; i += 2) attribName = attribs[i], value = attribs[i + 1], value !== null && value !== void
                            0 && out.push(' ', attribName, '=\"', escapeAttrib(value), '\"');
                        out.push('>')
                    }
                },
                'endTag': function(tagName, out) {
                    var
                        eflags, i, index, stackEl;
                    if (ignoring) return ignoring = false, void 0;
                    if (!html4.ELEMENTS.hasOwnProperty(tagName)) return;
                    eflags = html4.ELEMENTS[tagName];
                    if (!(eflags & (html4.eflags.UNSAFE | html4.eflags.EMPTY | html4.eflags.FOLDABLE))) {
                        if (eflags & html4.eflags.OPTIONAL_ENDTAG) for (index = stack.length; --index >= 0;) {
                            stackEl = stack[index];
                            if (stackEl === tagName) break;
                            if (!(html4.ELEMENTS[stackEl] & html4.eflags.OPTIONAL_ENDTAG)) return
                        } else
                            for (index = stack.length; --index >= 0;) if (stack[index] === tagName) break;
                        if (index < 0) return;
                        for (i = stack.length; --i > index;) stackEl = stack[i], html4.ELEMENTS[stackEl] & html4.eflags.OPTIONAL_ENDTAG || out.push('</', stackEl, '>');
                        stack.length = index, out.push('</', tagName, '>')
                    }
                },
                'pcdata': function(text, out) {
                    ignoring || out.push(text)
                },
                'rcdata': function(text, out) {
                    ignoring || out.push(text)
                },
                'cdata': function(text, out) {
                    ignoring || out.push(text)
                },
                'endDoc': function(out) {
                    var
                        i;
                    for (i = stack.length; --i >= 0;) out.push('</', stack[i], '>');
                    stack.length = 0
                }
            })
        }
        URI_SCHEME_RE = new
            RegExp('^(?:([^:/?#]+):)?');

        function sanitize(htmlText, opt_uriPolicy, opt_nmTokenPolicy) {
            var
                out = [];
            return makeHtmlSanitizer(function sanitizeAttribs(tagName, attribs) {
                var attribKey, attribName, atype, i, parsedUri, value;
                for (i = 0; i < attribs.length; i += 2) {
                    attribName = attribs[i], value = attribs[i + 1], atype = null, ((attribKey = tagName + '::' + attribName, html4.ATTRIBS.hasOwnProperty(attribKey)) || (attribKey = '*::' + attribName, html4.ATTRIBS.hasOwnProperty(attribKey))) && (atype = html4.ATTRIBS[attribKey]);
                    if (atype !== null) switch (atype) {
                        case
                        html4.atype.NONE:
                            break;
                        case html4.atype.SCRIPT:
                        case html4.atype.STYLE:
                            value = null;
                            break;
                        case
                        html4.atype.ID:
                        case html4.atype.IDREF:
                        case html4.atype.IDREFS:
                        case html4.atype.GLOBAL_NAME:
                        case
                        html4.atype.LOCAL_NAME:
                        case html4.atype.CLASSES:
                            value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                            break;
                        case
                        html4.atype.URI:
                            parsedUri = ('' + value).match(URI_SCHEME_RE), parsedUri ? !parsedUri[1] || WHITELISTED_SCHEMES.test(parsedUri[1]) ? (value = opt_uriPolicy && opt_uriPolicy(value)) : (value = null) : (value = null);
                            break;
                        case
                        html4.atype.URI_FRAGMENT:
                            value && '#' === value.charAt(0) ? (value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value, value && (value = '#' + value)) : (value = null);
                            break;
                        default:
                            value = null
                    } else
                        value = null;
                    attribs[i + 1] = value
                }
                return attribs
            })(htmlText, out), out.join('')
        }
        return {
            'escapeAttrib': escapeAttrib,
            'makeHtmlSanitizer': makeHtmlSanitizer,
            'makeSaxParser': makeSaxParser,
            'normalizeRCData': normalizeRCData,
            'sanitize': sanitize,
            'unescapeEntities': unescapeEntities
        }
    })(html4), html_sanitize = html.sanitize, typeof
        window !== 'undefined' && (window.html = html, window.html_sanitize = html_sanitize)
};

/* [end] feature=core */

/* [start] feature=com.google.gadgets.analytics */
(function() {
    var g = void 0,
        h = true,
        i = null,
        j = false,
        ba = encodeURIComponent,
        ca = Infinity,
        da = setTimeout,
        ea = decodeURIComponent,
        k = Math;

    function fa(a, b) {
        return a.onload = b
    }
    function ga(a, b) {
        return a.name = b
    }
    var m = "push",
        ha = "slice",
        ia = "replace",
        ja = "load",
        ka = "floor",
        n = "charAt",
        la = "value",
        p = "indexOf",
        ma = "match",
        r = "name",
        oa = "host",
        t = "toString",
        u = "length",
        v = "prototype",
        w = "split",
        pa = "stopPropagation",
        qa = "scope",
        x = "location",
        y = "getString",
        z = "substring",
        ra = "navigator",
        A = "join",
        C = "toLowerCase",
        D;

    function sa(a, b) {
        switch (b) {
            case 0:
                return "" + a;
            case 1:
                return a * 1;
            case 2:
                return !!a;
            case 3:
                return a * 1E3
        }
        return a
    }
    function E(a, b) {
        return g == a || "-" == a && !b || "" == a
    }
    function ta(a) {
        if (!a || "" == a) return "";
        for (; a && " \n\r\t" [p](a[n](0)) > -1;) a = a[z](1);
        for (; a && " \n\r\t" [p](a[n](a[u] - 1)) > -1;) a = a[z](0, a[u] - 1);
        return a
    }
    function ua(a) {
        var b = 1,
            c = 0,
            d;
        if (!E(a)) {
            b = 0;
            for (d = a[u] - 1; d >= 0; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = c != 0 ? b ^ c >> 21 : b
        }
        return b
    }

    function va() {
        return k.round(k.random() * 2147483647)
    }
    function wa() {}
    function F(a, b) {
        return ba instanceof Function ? b ? encodeURI(a) : ba(a) : (G(68), escape(a))
    }
    function H(a) {
        a = a[w]("+")[A](" ");
        if (ea instanceof Function) try {
            return ea(a)
        } catch (b) {
            G(17)
        } else G(68);
        return unescape(a)
    }
    var xa = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !! d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
        ya = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, !! d) : a.detachEvent && a.detachEvent("on" + b, c)
        };

    function I(a) {
        return a && a[u] > 0 ? a[0] : ""
    }
    function za(a) {
        var b = a ? a[u] : 0;
        return b > 0 ? a[b - 1] : ""
    }
    var Aa = function() {
        this.prefix = "ga.";
        this.I = {}
    };
    Aa[v].set = function(a, b) {
        this.I[this.prefix + a] = b
    };
    Aa[v].get = function(a) {
        return this.I[this.prefix + a]
    };
    Aa[v].contains = function(a) {
        return this.get(a) !== g
    };

    function Ba(a) {
        a[p]("www.") == 0 && (a = a[z](4));
        return a[C]()
    }
    function Ca(a, b) {
        var c, d = {
            url: a,
            protocol: "http",
            host: "",
            path: "",
            c: new Aa,
            anchor: ""
        };
        if (!a) return d;
        c = a[p]("://");
        if (c >= 0) d.protocol = a[z](0, c), a = a[z](c + 3);
        c = a.search("/|\\?|#");
        if (c >= 0) d.host = a[z](0, c)[C](), a = a[z](c);
        else
            return d.host = a[C](), d;
        c = a[p]("#");
        if (c >= 0) d.anchor = a[z](c + 1), a = a[z](0, c);
        c = a[p]("?");
        c >= 0 && (Da(d.c, a[z](c + 1)), a = a[z](0, c));
        d.anchor && b && Da(d.c, d.anchor);
        a && a[n](0) == "/" && (a = a[z](1));
        d.path = a;
        return d
    }

    function Da(a, b) {
        function c(b, c) {
            a.contains(b) || a.set(b, []);
            a.get(b)[m](c)
        }
        for (var d = ta(b)[w]("&"), e = 0; e < d[u]; e++) if (d[e]) {
            var f = d[e][p]("=");
            f < 0 ? c(d[e], "1") : c(d[e][z](0, f), d[e][z](f + 1))
        }
    }
    function Ea(a, b) {
        if (E(a)) return "-";
        if ("[" == a[n](0) && "]" == a[n](a[u] - 1)) return "-";
        var c = J.domain;
        c += b && b != "/" ? b : "";
        return a[p](c) == (a[p]("http://") == 0 ? 7 : a[p]("https://") == 0 ? 8 : 0) ? "0" : a
    };

    function Fa(a, b, c) {
        k.random() * 100 >= 1 || (a = ["utmt=error", "utmerr=" + a, "utmwv=5.2.2", "utmn=" + va(), "utmsp=1"], b && a[m]("api=" + b), c && a[m]("msg=" + F(c[z](0, 100))), K.q && a[m]("aip=1"), Ga(a[A]("&")))
    };
    var Ha = 0;

    function L(a) {
        return (a ? "_" : "") + Ha++
    }
    var Ia = L(),
        Ja = L(),
        Ka = L(),
        La = L(),
        Ma = L(),
        M = L(),
        N = L(),
        Na = L(),
        Oa = L(),
        Pa = L(),
        Qa = L(),
        Ra = L(),
        Sa = L(),
        Ta = L(),
        Ua = L(),
        Va = L(),
        Wa = L(),
        Xa = L(),
        Ya = L(),
        Za = L(),
        $a = L(),
        ab = L(),
        bb = L(),
        cb = L(),
        db = L(),
        eb = L(),
        fb = L(),
        gb = L(),
        hb = L(),
        ib = L(),
        jb = L(),
        kb = L(),
        lb = L(),
        mb = L(),
        nb = L(),
        O = L(h),
        ob = L(),
        pb = L(),
        qb = L(),
        rb = L(),
        sb = L(),
        tb = L(),
        ub = L(),
        vb = L(),
        wb = L(),
        xb = L(),
        P = L(h),
        yb = L(h),
        zb = L(h),
        Bb = L(h),
        Cb = L(h),
        Db = L(h),
        Eb = L(h),
        Fb = L(h),
        Gb = L(h),
        Hb = L(h),
        Ib = L(h),
        Q = L(h),
        Jb = L(h),
        Kb = L(h),
        Lb = L(h),
        Mb = L(h),
        Nb = L(h),
        Ob = L(h),
        Pb = L(h),
        Qb = L(h),
        Rb = L(h),
        Sb = L(h),
        Tb =
            L(h),
        Ub = L(h),
        Vb = L(h),
        Wb = L(),
        Xb = L(),
        Yb = L();
    L();
    var Zb = L(),
        $b = L(),
        ac = L(),
        bc = L(),
        cc = L(),
        dc = L(),
        ec = L(),
        hc = L(),
        ic = L(),
        jc = L();
    L();
    var kc = L(),
        lc = L();
    var mc = function() {
        function a(a, c, d) {
            R(S[v], a, c, d)
        }
        T("_getName", Ka, 58);
        T("_getAccount", Ia, 64);
        T("_visitCode", P, 54);
        T("_getClientInfo", Ta, 53, 1);
        T("_getDetectTitle", Wa, 56, 1);
        T("_getDetectFlash", Ua, 65, 1);
        T("_getLocalGifPath", fb, 57);
        T("_getServiceMode", gb, 59);
        U("_setClientInfo", Ta, 66, 2);
        U("_setAccount", Ia, 3);
        U("_setNamespace", Ja, 48);
        U("_setAllowLinker", Qa, 11, 2);
        U("_setDetectFlash", Ua, 61, 2);
        U("_setDetectTitle", Wa, 62, 2);
        U("_setLocalGifPath", fb, 46, 0);
        U("_setLocalServerMode", gb, 92, g, 0);
        U("_setRemoteServerMode", gb, 63, g, 1);
        U("_setLocalRemoteServerMode", gb, 47, g, 2);
        U("_setSampleRate", eb, 45, 1);
        U("_setCampaignTrack", Va, 36, 2);
        U("_setAllowAnchor", Ra, 7, 2);
        U("_setCampNameKey", Ya, 41);
        U("_setCampContentKey", cb, 38);
        U("_setCampIdKey", Xa, 39);
        U("_setCampMediumKey", ab, 40);
        U("_setCampNOKey", db, 42);
        U("_setCampSourceKey", $a, 43);
        U("_setCampTermKey", bb, 44);
        U("_setCampCIdKey", Za, 37);
        U("_setCookiePath", N, 9, 0);
        U("_setMaxCustomVariables", hb, 0, 1);
        U("_setVisitorCookieTimeout", Na, 28, 1);
        U("_setSessionCookieTimeout", Oa, 26, 1);
        U("_setCampaignCookieTimeout", Pa, 29, 1);
        U("_setReferrerOverride", qb, 49);
        U("_setSiteSpeedSampleRate", ic, 132);
        a("_trackPageview", S[v].na, 1);
        a("_trackEvent", S[v].v, 4);
        a("_trackPageLoadTime", S[v].ma, 100);
        a("_trackSocial", S[v].oa, 104);
        a("_trackTrans", S[v].pa, 18);
        a("_sendXEvent", S[v].u, 78);
        a("_createEventTracker", S[v].V, 74);
        a("_getVersion", S[v].$, 60);
        a("_setDomainName", S[v].t, 6);
        a("_setAllowHash", S[v].ea, 8);
        a("_getLinkerUrl", S[v].Z, 52);
        a("_link", S[v].link, 101);
        a("_linkByPost", S[v].da, 102);
        a("_setTrans", S[v].ha, 20);
        a("_addTrans", S[v].O, 21);
        a("_addItem", S[v].M, 19);
        a("_setTransactionDelim", S[v].ia, 82);
        a("_setCustomVar", S[v].fa, 10);
        a("_deleteCustomVar", S[v].X, 35);
        a("_getVisitorCustomVar", S[v].aa, 50);
        a("_setXKey", S[v].ka, 83);
        a("_setXValue", S[v].la, 84);
        a("_getXKey", S[v].ba, 76);
        a("_getXValue", S[v].ca, 77);
        a("_clearXKey", S[v].S, 72);
        a("_clearXValue", S[v].T, 73);
        a("_createXObj", S[v].W, 75);
        a("_addIgnoredOrganic", S[v].K, 15);
        a("_clearIgnoredOrganic", S[v].P, 97);
        a("_addIgnoredRef", S[v].L, 31);
        a("_clearIgnoredRef", S[v].Q, 32);
        a("_addOrganic", S[v].N, 14);
        a("_clearOrganic", S[v].R, 70);
        a("_cookiePathCopy", S[v].U, 30);
        a("_get", S[v].Y, 106);
        a("_set", S[v].ga, 107);
        a("_addEventListener", S[v].addEventListener, 108);
        a("_removeEventListener", S[v].removeEventListener, 109);
        a("_initData", S[v].m, 2);
        a("_setVar", S[v].ja, 22);
        U("_setSessionTimeout", Oa, 27, 3);
        U("_setCookieTimeout", Pa, 25, 3);
        U("_setCookiePersistence", Na, 24, 1);
        a("_setAutoTrackOutbound", wa, 79);
        a("_setTrackOutboundSubdomains", wa, 81);
        a("_setHrefExamineLimit", wa, 80)
    },
        R = function(a, b, c, d) {
            a[b] = function() {
                try {
                    return G(d), c.apply(this, arguments)
                } catch (a) {
                    throw Fa("exc", b, a && a[r]), a;
                }
            }
        },
        T = function(a, b, c, d) {
            S[v][a] = function() {
                try {
                    return G(c), sa(this.a.get(b), d)
                } catch (e) {
                    throw Fa("exc", a, e && e[r]), e;
                }
            }
        },
        U = function(a, b, c, d, e) {
            S[v][a] = function(f) {
                try {
                    G(c), e == g ? this.a.set(b, sa(f, d)) : this.a.set(b, e)
                } catch (l) {
                    throw Fa("exc", a, l && l[r]), l;
                }
            }
        },
        nc = function(a, b) {
            return {
                type: b,
                target: a,
                stopPropagation: function() {
                    throw "aborted";
                }
            }
        };
    var oc = function(a, b) {
        return b !== "/" ? j : (a[p]("www.google.") == 0 || a[p](".google.") == 0 || a[p]("google.") == 0) && !(a[p]("google.org") > -1) ? h : j
    },
        pc = function(a) {
            var b = a.get(Ma),
                c = a[y](N, "/");
            oc(b, c) && a[pa]()
        };
    var uc = function() {
        var a = {},
            b = {},
            c = new qc;
        this.g = function(a, b) {
            c.add(a, b)
        };
        var d = new qc;
        this.d = function(a, b) {
            d.add(a, b)
        };
        var e = j,
            f = j,
            l = h;
        this.J = function() {
            e = h
        };
        this.f = function(a) {
            this[ja]();
            this.set(Wb, a, h);
            a = new rc(this);
            e = j;
            d.execute(this);
            e = h;
            b = {};
            this.i();
            a.qa()
        };
        this.load = function() {
            e && (e = j, this.sa(), sc(this), f || (f = h, c.execute(this), tc(this), sc(this)), e = h)
        };
        this.i = function() {
            if (e) if (f) e = j, tc(this), e = h;
            else this[ja]()
        };
        this.get = function(c) {
            c && c[n](0) == "_" && this[ja]();
            return b[c] !== g ? b[c] : a[c]
        };
        this.set = function(c, d, e) {
            c && c[n](0) == "_" && this[ja]();
            e ? b[c] = d : a[c] = d;
            c && c[n](0) == "_" && this.i()
        };
        this.n = function(b) {
            a[b] = this.b(b, 0) + 1
        };
        this.b = function(a, b) {
            var c = this.get(a);
            return c == g || c === "" ? b : c * 1
        };
        this.getString = function(a, b) {
            var c = this.get(a);
            return c == g ? b : c + ""
        };
        this.sa = function() {
            if (l) {
                var b = this[y](Ma, ""),
                    c = this[y](N, "/");
                oc(b, c) || (a[M] = a[Sa] && b != "" ? ua(b) : 1, l = j)
            }
        }
    };
    uc[v].stopPropagation = function() {
        throw "aborted";
    };
    var rc = function(a) {
        var b = this;
        this.j = 0;
        var c = a.get(Xb);
        this.Aa = function() {
            b.j > 0 && c && (b.j--, b.j || c())
        };
        this.qa = function() {
            !b.j && c && da(c, 0)
        };
        a.set(Yb, b, h)
    };

    function vc(a, b) {
        for (var b = b || [], c = 0; c < b[u]; c++) {
            var d = b[c];
            if ("" + a == d || d[p](a + ".") == 0) return d
        }
        return "-"
    }
    var xc = function(a, b, c) {
        c = c ? "" : a[y](M, "1");
        b = b[w](".");
        if (b[u] !== 6 || wc(b[0], c)) return j;
        var c = b[1] * 1,
            d = b[2] * 1,
            e = b[3] * 1,
            f = b[4] * 1,
            b = b[5] * 1;
        if (!(c >= 0 && d > 0 && e > 0 && f > 0 && b >= 0)) return G(110), j;
        a.set(P, c);
        a.set(Cb, d);
        a.set(Db, e);
        a.set(Eb, f);
        a.set(Fb, b);
        return h
    },
        yc = function(a) {
            var b = a.get(P),
                c = a.get(Cb),
                d = a.get(Db),
                e = a.get(Eb),
                f = a.b(Fb, 1);
            b == g ? G(113) : b == NaN && G(114);
            b >= 0 && c > 0 && d > 0 && e > 0 && f >= 0 || G(115);
            return [a.b(M, 1), b != g ? b : "-", c || "-", d || "-", e || "-", f][A](".")
        },
        zc = function(a) {
            return [a.b(M, 1), a.b(Ib, 0), a.b(Q, 1), a.b(Jb, 0)][A](".")
        },
        Ac = function(a, b, c) {
            var c = c ? "" : a[y](M, "1"),
                d = b[w](".");
            if (d[u] !== 4 || wc(d[0], c)) d = i;
            a.set(Ib, d ? d[1] * 1 : 0);
            a.set(Q, d ? d[2] * 1 : 10);
            a.set(Jb, d ? d[3] * 1 : a.get(La));
            return d != i || !wc(b, c)
        },
        Bc = function(a, b) {
            var c = F(a[y](zb, "")),
                d = [],
                e = a.get(O);
            if (!b && e) {
                for (var f = 0; f < e[u]; f++) {
                    var l = e[f];
                    l && l[qa] == 1 && d[m](f + "=" + F(l[r]) + "=" + F(l[la]) + "=1")
                }
                d[u] > 0 && (c += "|" + d[A](","))
            }
            return c ? a.b(M, 1) + "." + c : i
        },
        Cc = function(a, b, c) {
            c = c ? "" : a[y](M, "1");
            b = b[w](".");
            if (b[u] < 2 || wc(b[0], c)) return j;
            b = b[ha](1)[A](".")[w]("|");
            b[u] > 0 && a.set(zb, H(b[0]));
            if (b[u] <= 1) return h;
            for (var c = b[1][w](b[1][p](",") == -1 ? "^" : ","), d = 0; d < c[u]; d++) {
                var e = c[d][w]("=");
                if (e[u] == 4) {
                    var f = {};
                    ga(f, H(e[1]));
                    f.value = H(e[2]);
                    f.scope = 1;
                    a.get(O)[e[0]] = f
                }
            }
            b[1][p]("^") >= 0 && G(125);
            return h
        },
        Ec = function(a, b) {
            var c = Dc(a, b);
            return c ? [a.b(M, 1), a.b(Kb, 0), a.b(Lb, 1), a.b(Mb, 1), c][A](".") : ""
        },
        Dc = function(a) {
            function b(b, e) {
                if (!E(a.get(b))) {
                    var f = a[y](b, ""),
                        f = f[w](" ")[A]("%20"),
                        f = f[w]("+")[A]("%20");
                    c[m](e + "=" + f)
                }
            }
            var c = [];
            b(Ob, "utmcid");
            b(Sb, "utmcsr");
            b(Qb, "utmgclid");
            b(Rb, "utmdclid");
            b(Pb, "utmccn");
            b(Tb, "utmcmd");
            b(Ub, "utmctr");
            b(Vb, "utmcct");
            return c[A]("|")
        },
        Gc = function(a, b, c) {
            c = c ? "" : a[y](M, "1");
            b = b[w](".");
            if (b[u] < 5 || wc(b[0], c)) return a.set(Kb, g), a.set(Lb, g), a.set(Mb, g), a.set(Ob, g), a.set(Pb, g), a.set(Sb, g), a.set(Tb, g), a.set(Ub, g), a.set(Vb, g), a.set(Qb, g), a.set(Rb, g), j;
            a.set(Kb, b[1] * 1);
            a.set(Lb, b[2] * 1);
            a.set(Mb, b[3] * 1);
            Fc(a, b[ha](4)[A]("."));
            return h
        },
        Fc = function(a, b) {
            function c(a) {
                return (a = b[ma](a + "=(.*?)(?:\\|utm|$)")) && a[u] == 2 ? a[1] : g
            }
            function d(b, c) {
                c && (c = e ? H(c) : c[w]("%20")[A](" "), a.set(b, c))
            }
            b[p]("=") == -1 && (b = H(b));
            var e = c("utmcvr") == "2";
            d(Ob, c("utmcid"));
            d(Pb, c("utmccn"));
            d(Sb, c("utmcsr"));
            d(Tb, c("utmcmd"));
            d(Ub, c("utmctr"));
            d(Vb, c("utmcct"));
            d(Qb, c("utmgclid"));
            d(Rb, c("utmdclid"))
        },
        wc = function(a, b) {
            return b ? a != b : !/^\d+$/.test(a)
        };
    var qc = function() {
        this.s = []
    };
    qc[v].add = function(a, b) {
        this.s[m]({
            name: a,
            Da: b
        })
    };
    qc[v].execute = function(a) {
        try {
            for (var b = 0; b < this.s[u]; b++) this.s[b].Da.call(V, a)
        } catch (c) {}
    };

    function Hc(a) {
        a.get(eb) != 100 && a.get(P) % 1E4 >= a.get(eb) * 100 && a[pa]()
    }
    function Ic(a) {
        Jc() && a[pa]()
    }
    function Kc(a) {
        J[x].protocol == "file:" && a[pa]()
    }
    function Lc(a) {
        a.get(pb) || a.set(pb, J.title, h);
        a.get(ob) || a.set(ob, J[x].pathname + J[x].search, h)
    };
    var Mc = new
        function() {
            var a = [];
            this.set = function(b) {
                a[b] = h
            };
            this.Ea = function() {
                for (var b = [], c = 0; c < a[u]; c++) a[c] && (b[k[ka](c / 6)] ^= 1 << c % 6);
                for (c = 0; c < b[u]; c++) b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" [n](b[c] || 0);
                return b[A]("") + "~"
            }
        };

    function G(a) {
        Mc.set(a)
    };
    var V = window,
        J = document,
        Jc = function() {
            var a = V._gaUserPrefs;
            return a && a.ioo && a.ioo()
        },
        Nc = function(a, b) {
            da(a, b)
        },
        W = function(a) {
            for (var b = [], c = J.cookie[w](";"), a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), d = 0; d < c[u]; d++) {
                var e = c[d][ma](a);
                e && b[m](e[1])
            }
            return b
        },
        X = function(a, b, c, d, e) {
            var f;
            f = Jc() ? j : oc(d, c) ? j : h;
            if (f) {
                if (b && V[ra].userAgent[p]("Firefox") >= 0) {
                    b = b[ia](/\n|\r/g, " ");
                    f = 0;
                    for (var l = b[u]; f < l; ++f) {
                        var o = b.charCodeAt(f) & 255;
                        if (o == 10 || o == 13) b = b[z](0, f) + "?" + b[z](f + 1)
                    }
                }
                b && b[u] > 2E3 && (b = b[z](0, 2E3), G(69));
                a = a + "=" + b + "; path=" + c + "; ";
                e && (a += "expires=" + (new Date((new Date).getTime() + e)).toGMTString() + "; ");
                d && (a += "domain=" + d + ";");
                J.cookie = a
            }
        };
    var Oc, Pc, Qc = function() {
        if (!Oc) {
            var a = {},
                b = V[ra],
                c = V.screen;
            a.H = c ? c.width + "x" + c.height : "-";
            a.G = c ? c.colorDepth + "-bit" : "-";
            a.language = (b && (b.language || b.browserLanguage) || "-")[C]();
            a.javaEnabled = b && b.javaEnabled() ? 1 : 0;
            a.characterSet = J.characterSet || J.charset || "-";
            Oc = a
        }
    },
        Rc = function() {
            Qc();
            for (var a = Oc, b = V[ra], a = b.appName + b.version + a.language + b.platform + b.userAgent + a.javaEnabled + a.H + a.G + (J.cookie ? J.cookie : "") + (J.referrer ? J.referrer : ""), b = a[u], c = V.history[u]; c > 0;) a += c-- ^ b++;
            return ua(a)
        },
        Sc = function(a) {
            Qc();
            var b = Oc;
            a.set(sb, b.H);
            a.set(tb, b.G);
            a.set(wb, b.language);
            a.set(xb, b.characterSet);
            a.set(ub, b.javaEnabled);
            if (a.get(Ta) && a.get(Ua)) {
                if (!(b = Pc)) {
                    var c, d, e;
                    d = "ShockwaveFlash";
                    if ((b = (b = V[ra]) ? b.plugins : g) && b[u] > 0) for (c = 0; c < b[u] && !e; c++) d = b[c], d[r][p]("Shockwave Flash") > -1 && (e = d.description[w]("Shockwave Flash ")[1]);
                    else {
                        d = d + "." + d;
                        try {
                            c = new ActiveXObject(d + ".7"), e = c.GetVariable("$version")
                        } catch (f) {}
                        if (!e) try {
                            c = new ActiveXObject(d + ".6"), e = "WIN 6,0,21,0", c.AllowScriptAccess = "always", e = c.GetVariable("$version")
                        } catch (l) {}
                        if (!e) try {
                            c =
                                new ActiveXObject(d), e = c.GetVariable("$version")
                        } catch (o) {}
                        e && (e = e[w](" ")[1][w](","), e = e[0] + "." + e[1] + " r" + e[2])
                    }
                    b = e ? e : "-"
                }
                Pc = b;
                a.set(vb, Pc)
            } else a.set(vb, "-")
        };
    var Y = function() {
        R(Y[v], "push", Y[v][m], 5);
        R(Y[v], "_createAsyncTracker", Y[v].Ba, 33);
        R(Y[v], "_getAsyncTracker", Y[v].Ca, 34);
        this.r = 0
    };
    Y[v].Ba = function(a, b) {
        return K.l(a, b || "")
    };
    Y[v].Ca = function(a) {
        return K.p(a)
    };
    Y[v].push = function(a) {
        this.r > 0 && G(105);
        this.r++;
        for (var b = arguments, c = 0, d = 0; d < b[u]; d++) try {
            if (typeof b[d] === "function") b[d]();
            else {
                var e = "",
                    f = b[d][0],
                    l = f.lastIndexOf(".");
                l > 0 && (e = f[z](0, l), f = f[z](l + 1));
                var o = e == "_gat" ? K : e == "_gaq" ? Tc : K.p(e);
                o[f].apply(o, b[d][ha](1))
            }
        } catch (q) {
            c++
        }
        this.r--;
        return c
    };
    var Yc = function() {
        function a(a, b, c, d) {
            g == f[a] && (f[a] = {});
            g == f[a][b] && (f[a][b] = []);
            f[a][b][c] = d
        }
        function b(a, b, c) {
            if (g != f[a] && g != f[a][b]) return f[a][b][c]
        }
        function c(a, b) {
            if (g != f[a] && g != f[a][b]) {
                f[a][b] = g;
                var c = h,
                    d;
                for (d = 0; d < l[u]; d++) if (g != f[a][l[d]]) {
                    c = j;
                    break
                }
                c && (f[a] = g)
            }
        }
        function d(a) {
            var b = "",
                c = j,
                d, e;
            for (d = 0; d < l[u]; d++) if (e = a[l[d]], g != e) {
                c && (b += l[d]);
                for (var c = [], f = g, $ = g, $ = 0; $ < e[u]; $++) if (g != e[$]) {
                    f = "";
                    $ != aa && g == e[$ - 1] && (f += $[t]() + na);
                    for (var Wc = e[$], Xc = "", Ab = g, fc = g, gc = g, Ab = 0; Ab < Wc[u]; Ab++) fc =
                        Wc[n](Ab), gc = B[fc], Xc += g != gc ? gc : fc;
                    f += Xc;
                    c[m](f)
                }
                b += o + c[A](s) + q;
                c = j
            } else c = h;
            return b
        }
        var e = this,
            f = [],
            l = ["k", "v"],
            o = "(",
            q = ")",
            s = "*",
            na = "!",
            B = {
                "'": "'0"
            };
        B[q] = "'1";
        B[s] = "'2";
        B[na] = "'3";
        var aa = 1;
        e.va = function(a) {
            return g != f[a]
        };
        e.o = function() {
            for (var a = "", b = 0; b < f[u]; b++) g != f[b] && (a += b[t]() + d(f[b]));
            return a
        };
        e.ua = function(a) {
            if (a == g) return e.o();
            for (var b = a.o(), c = 0; c < f[u]; c++) g != f[c] && !a.va(c) && (b += c[t]() + d(f[c]));
            return b
        };
        e.e = function(b, c, d) {
            if (!Uc(d)) return j;
            a(b, "k", c, d);
            return h
        };
        e.k = function(b, c, d) {
            if (!Vc(d)) return j;
            a(b, "v", c, d[t]());
            return h
        };
        e.getKey = function(a, c) {
            return b(a, "k", c)
        };
        e.C = function(a, c) {
            return b(a, "v", c)
        };
        e.A = function(a) {
            c(a, "k")
        };
        e.B = function(a) {
            c(a, "v")
        };
        R(e, "_setKey", e.e, 89);
        R(e, "_setValue", e.k, 90);
        R(e, "_getKey", e.getKey, 87);
        R(e, "_getValue", e.C, 88);
        R(e, "_clearKey", e.A, 85);
        R(e, "_clearValue", e.B, 86)
    };

    function Uc(a) {
        return typeof a == "string"
    }
    function Vc(a) {
        return typeof a != "number" && (g == Number || !(a instanceof Number)) || k.round(a) != a || a == NaN || a == ca ? j : h
    };
    var Zc = function(a) {
        var b = V.gaGlobal;
        a && !b && (V.gaGlobal = b = {});
        return b
    },
        $c = function() {
            var a = Zc(h).hid;
            if (a == i) a = va(), Zc(h).hid = a;
            return a
        },
        ad = function(a) {
            a.set(rb, $c());
            var b = Zc();
            if (b && b.dh == a.get(M)) {
                var c = b.sid;
                c && (c == "0" && G(112), a.set(Eb, c), a.get(yb) && a.set(Db, c));
                b = b.vid;
                a.get(yb) && b && (b = b[w]("."), b[1] * 1 || G(112), a.set(P, b[0] * 1), a.set(Cb, b[1] * 1))
            }
        };
    var bd, cd = function(a, b, c) {
        var d = a[y](Ma, ""),
            e = a[y](N, "/"),
            a = a.b(Na, 0);
        X(b, c, e, d, a)
    },
        tc = function(a) {
            var b = a[y](Ma, "");
            a.b(M, 1);
            var c = a[y](N, "/");
            X("__utma", yc(a), c, b, a.get(Na));
            X("__utmb", zc(a), c, b, a.get(Oa));
            X("__utmc", "" + a.b(M, 1), c, b);
            var d = Ec(a, h);
            d ? X("__utmz", d, c, b, a.get(Pa)) : X("__utmz", "", c, b, -1);
            (d = Bc(a, j)) ? X("__utmv", d, c, b, a.get(Na)) : X("__utmv", "", c, b, -1)
        },
        sc = function(a) {
            var b = a.b(M, 1);
            if (!xc(a, vc(b, W("__utma")))) return a.set(Bb, h), j;
            var c = !Ac(a, vc(b, W("__utmb")));
            a.set(Hb, c);
            Gc(a, vc(b, W("__utmz")));
            Cc(a, vc(b, W("__utmv")));
            bd = !c;
            return h
        },
        dd = function(a) {
            !bd && !(W("__utmb")[u] > 0) && (X("__utmd", "1", a[y](N, "/"), a[y](Ma, ""), 1E4), W("__utmd")[u] == 0 && a[pa]())
        };
    var gd = function(a) {
        a.get(P) == g ? ed(a) : a.get(Bb) && !a.get(kc) ? ed(a) : a.get(Hb) && fd(a)
    },
        hd = function(a) {
            a.get(Nb) && !a.get(Gb) && (fd(a), a.set(Lb, a.get(Fb)))
        },
        ed = function(a) {
            var b = a.get(La);
            a.set(yb, h);
            a.set(P, va() ^ Rc(a) & 2147483647);
            a.set(zb, "");
            a.set(Cb, b);
            a.set(Db, b);
            a.set(Eb, b);
            a.set(Fb, 1);
            a.set(Gb, h);
            a.set(Ib, 0);
            a.set(Q, 10);
            a.set(Jb, b);
            a.set(O, []);
            a.set(Bb, j);
            a.set(Hb, j)
        },
        fd = function(a) {
            a.set(Db, a.get(Eb));
            a.set(Eb, a.get(La));
            a.n(Fb);
            a.set(Gb, h);
            a.set(Ib, 0);
            a.set(Q, 10);
            a.set(Jb, a.get(La));
            a.set(Hb, j)
        };
    var id = "daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,ozu:q,terra:query,rambler:query".split(","),
        od = function(a) {
            if (a.get(Va) && !a.get(kc)) {
                for (var b = !E(a.get(Ob)) || !E(a.get(Sb)) || !E(a.get(Qb)) || !E(a.get(Rb)), c = {}, d = 0; d < jd[u]; d++) {
                    var e = jd[d];
                    c[e] = a.get(e)
                }
                d = Ca(J[x].href, a.get(Ra));
                if (!(za(d.c.get(a.get(db))) == "1" && b) && (d = kd(a, d) || ld(a), !d && !b && a.get(Gb) && (md(a, g, "(direct)", g, g, "(direct)", "(none)", g, g), d = h), d && (a.set(Nb, nd(a, c)), b = a.get(Sb) == "(direct)" && a.get(Pb) == "(direct)" && a.get(Tb) == "(none)", a.get(Nb) || a.get(Gb) && !b))) a.set(Kb, a.get(La)), a.set(Lb, a.get(Fb)), a.n(Mb)
            }
        },
        kd = function(a, b) {
            function c(c, d) {
                var d = d || "-",
                    e = za(b.c.get(a.get(c)));
                return e && e != "-" ? H(e) : d
            }
            var d = za(b.c.get(a.get(Xa))) || "-",
                e = za(b.c.get(a.get($a))) || "-",
                f = za(b.c.get(a.get(Za))) || "-",
                l = za(b.c.get("dclid")) || "-",
                o = c(Ya, "(not set)"),
                q = c(ab, "(not set)"),
                s = c(bb),
                na = c(cb);
            if (E(d) && E(f) && E(l) && E(e)) return j;
            if (E(s)) {
                var B = Ea(a.get(qb), a.get(N)),
                    B = Ca(B, h);
                (B = pd(a, B)) && !E(B[1] && !B[2]) && (s = B[1])
            }
            md(a, d, e, f, l, o, q, s, na);
            return h
        },
        ld = function(a) {
            var b = Ea(a.get(qb), a.get(N)),
                c = Ca(b, h);
            if (!(b != g && b != i && b != "" && b != "0" && b != "-" && b[p]("://") >= 0) || c && c[oa][p]("google") > -1 && c.c.contains("q") && c.path == "cse") return j;
            if ((b = pd(a, c)) && !b[2]) return md(a, g, b[0], g, g, "(organic)", "organic", b[1], g), h;
            else if (b) return j;
            if (a.get(Gb)) a: {
                for (var b = a.get(kb), d = Ba(c[oa]), e = 0; e < b[u]; ++e) if (d[p](b[e]) > -1) {
                    a = j;
                    break a
                }
                md(a, g, d, g, g, "(referral)", "referral", g, "/" + c.path);
                a = h
            } else a = j;
            return a
        },
        pd = function(a, b) {
            for (var c = a.get(ib), d = 0; d < c[u]; ++d) {
                var e = c[d][w](":");
                if (b[oa][p](e[0][C]()) > -1) {
                    var f = b.c.get(e[1]);
                    if (f && (f = I(f), !f && b[oa][p]("google.") > -1 && (f = "(not provided)"), !e[3] || b.url[p](e[3]) > -1)) {
                        a: {
                            for (var c = f, d = a.get(jb), c = H(c)[C](), l = 0; l < d[u]; ++l) if (c == d[l]) {
                                c = h;
                                break a
                            }
                            c = j
                        }
                        return [e[2] || e[0], f, c]
                    }
                }
            }
            return i
        },
        md = function(a, b, c, d, e, f, l, o, q) {
            a.set(Ob, b);
            a.set(Sb, c);
            a.set(Qb, d);
            a.set(Rb, e);
            a.set(Pb, f);
            a.set(Tb, l);
            a.set(Ub, o);
            a.set(Vb, q)
        },
        jd = [Pb, Ob, Qb, Rb, Sb, Tb, Ub, Vb],
        nd = function(a, b) {
            function c(a) {
                a = ("" + a)[w]("+")[A]("%20");
                return a = a[w](" ")[A]("%20")
            }
            function d(c) {
                var d = "" + (a.get(c) || ""),
                    c = "" + (b[c] || "");
                return d[u] > 0 && d == c
            }
            if (d(Qb) || d(Rb)) return G(131), j;
            for (var e = 0; e < jd[u]; e++) {
                var f = jd[e],
                    l = b[f] || "-",
                    f = a.get(f) || "-";
                if (c(l) != c(f)) return h
            }
            return j
        };
    var rd = function(a) {
        qd(a, J[x].href) ? (a.set(kc, h), G(12)) : a.set(kc, j)
    },
        qd = function(a, b) {
            if (!a.get(Qa)) return j;
            var c = Ca(b, a.get(Ra)),
                d = I(c.c.get("__utma")),
                e = I(c.c.get("__utmb")),
                f = I(c.c.get("__utmc")),
                l = I(c.c.get("__utmx")),
                o = I(c.c.get("__utmz")),
                q = I(c.c.get("__utmv")),
                c = I(c.c.get("__utmk"));
            if (ua("" + d + e + f + l + o + q) != c) {
                d = H(d);
                e = H(e);
                f = H(f);
                l = H(l);
                a: {
                    for (var f = d + e + f + l, s = 0; s < 3; s++) {
                        for (var na = 0; na < 3; na++) {
                            if (c == ua(f + o + q)) {
                                G(127);
                                c = [o, q];
                                break a
                            }
                            var B = o[ia](/ /g, "%20"),
                                aa = q[ia](/ /g, "%20");
                            if (c == ua(f + B + aa)) {
                                G(128);
                                c = [B, aa];
                                break a
                            }
                            B = B[ia](/\+/g, "%20");
                            aa = aa[ia](/\+/g, "%20");
                            if (c == ua(f + B + aa)) {
                                G(129);
                                c = [B, aa];
                                break a
                            }
                            o = H(o)
                        }
                        q = H(q)
                    }
                    c = g
                }
                if (!c) return j;o = c[0];q = c[1]
            }
            if (!xc(a, d, h)) return j;
            Ac(a, e, h);
            Gc(a, o, h);
            Cc(a, q, h);
            sd(a, l, h);
            return h
        },
        ud = function(a, b, c) {
            var d;
            d = yc(a) || "-";
            var e = zc(a) || "-",
                f = "" + a.b(M, 1) || "-",
                l = td(a) || "-",
                o = Ec(a, j) || "-",
                a = Bc(a, j) || "-",
                q = ua("" + d + e + f + l + o + a),
                s = [];
            s[m]("__utma=" + d);
            s[m]("__utmb=" + e);
            s[m]("__utmc=" + f);
            s[m]("__utmx=" + l);
            s[m]("__utmz=" + o);
            s[m]("__utmv=" + a);
            s[m]("__utmk=" + q);
            d = s[A]("&");
            if (!d) return b;
            e = b[p]("#");
            return c ? e < 0 ? b + "#" + d : b + "&" + d : (c = "", f = b[p]("?"), e > 0 && (c = b[z](e), b = b[z](0, e)), f < 0 ? b + "?" + d + c : b + "&" + d + c)
        };
    var vd = "|",
        xd = function(a, b, c, d, e, f, l, o, q) {
            var s = wd(a, b);
            s || (s = {}, a.get(lb)[m](s));
            s.id_ = b;
            s.affiliation_ = c;
            s.total_ = d;
            s.tax_ = e;
            s.shipping_ = f;
            s.city_ = l;
            s.state_ = o;
            s.country_ = q;
            s.items_ = s.items_ || [];
            return s
        },
        yd = function(a, b, c, d, e, f, l) {
            var a = wd(a, b) || xd(a, b, "", 0, 0, 0, "", "", ""),
                o;
            a: {
                if (a && a.items_) {
                    o = a.items_;
                    for (var q = 0; q < o[u]; q++) if (o[q].sku_ == c) {
                        o = o[q];
                        break a
                    }
                }
                o = i
            }
            q = o || {};q.transId_ = b;q.sku_ = c;q.name_ = d;q.category_ = e;q.price_ = f;q.quantity_ = l;o || a.items_[m](q);
            return q
        },
        wd = function(a, b) {
            for (var c =
                a.get(lb), d = 0; d < c[u]; d++) if (c[d].id_ == b) return c[d];
            return i
        };
    var zd, Ad = function(a) {
        var f;
        var e;
        if (!zd) {
            var b;
            b = J[x].hash;
            var c = V[r],
                d = /^#?gaso=([^&]*)/;
            if (f = (e = (b = b && b[ma](d) || c && c[ma](d)) ? b[1] : I(W("GASO")), b = e) && b[ma](/^(?:\|([-0-9a-z.]{1,40})\|)?([-.\w]{10,1200})$/i), c = f) if (cd(a, "GASO", "" + b), K._gasoDomain = a.get(Ma), K._gasoCPath = a.get(N), b = "https://" + ((c[1] || "www") + ".google.com") + "/analytics/reporting/overlay_js?gaso=" + c[2] + "&" + va()) a = J.createElement("script"), a.type = "text/javascript", a.async = h, a.src = b, a.id = "_gasojs", fa(a, g), b = J.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b);
            zd = h
        }
    };
    var sd = function(a, b, c) {
        c && (b = H(b));
        c = a.b(M, 1);
        b = b[w](".");
        !(b[u] < 2) && /^\d+$/.test(b[0]) && (b[0] = "" + c, cd(a, "__utmx", b[A](".")))
    },
        td = function(a, b) {
            var c = vc(a.get(M), W("__utmx"));
            c == "-" && (c = "");
            return b ? F(c) : c
        };
    var Fd = function(a, b) {
        var c = k.min(a.b(ic, 0), 10);
        if (a.b(P, 0) % 100 >= c) return j;
        c = Bd() || Cd();
        if (c == g) return j;
        var d = c[0];
        if (d == g || d == ca || isNaN(d)) return j;
        d > 0 ? Dd(c) ? b(Ed(c)) : b(Ed(c[ha](0, 1))) : xa(V, "load", function() {
            Fd(a, b)
        }, j);
        return h
    },
        Dd = function(a) {
            for (var b = 1; b < a[u]; b++) if (isNaN(a[b]) || a[b] == ca || a[b] < 0) return j;
            return h
        },
        Ed = function(a) {
            for (var b = new Yc, c = 0; c < a[u]; c++) b.e(14, c + 1, (isNaN(a[c]) || a[c] < 0 ? 0 : a[c] < 5E3 ? k[ka](a[c] / 10) * 10 : a[c] < 45E4 ? k[ka](a[c] / 100) * 100 : 45E4) + ""), b.k(14, c + 1, a[c]);
            return b
        },
        Bd = function() {
            var a =
                V.performance || V.webkitPerformance;
            if (a = a && a.timing) {
                var b = a.navigationStart;
                if (b == 0) G(133);
                else
                    return [a.loadEventStart - b, a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - b]
            }
        },
        Cd = function() {
            if (V.top == V) {
                var a = V.external,
                    b = a && a.onloadT;
                a && !a.isValidLoadTime && (b = g);
                b > 2147483648 && (b = g);
                b > 0 && a.setPageReadyTime();
                return b == g ? g : [b]
            }
        };
    var S = function(a, b, c) {
        function d(a) {
            return function(b) {
                if ((b = b.get(lc)[a]) && b[u]) for (var c = nc(e, a), d = 0; d < b[u]; d++) b[d].call(e, c)
            }
        }
        var e = this;
        this.a = new uc;
        this.get = function(a) {
            return this.a.get(a)
        };
        this.set = function(a, b, c) {
            this.a.set(a, b, c)
        };
        this.set(Ia, b || "UA-XXXXX-X");
        this.set(Ka, a || "");
        this.set(Ja, c || "");
        this.set(La, k.round((new Date).getTime() / 1E3));
        this.set(N, "/");
        this.set(Na, 63072E6);
        this.set(Pa, 15768E6);
        this.set(Oa, 18E5);
        this.set(Qa, j);
        this.set(hb, 50);
        this.set(Ra, j);
        this.set(Sa, h);
        this.set(Ta, h);
        this.set(Ua, h);
        this.set(Va, h);
        this.set(Wa, h);
        this.set(Ya, "utm_campaign");
        this.set(Xa, "utm_id");
        this.set(Za, "gclid");
        this.set($a, "utm_source");
        this.set(ab, "utm_medium");
        this.set(bb, "utm_term");
        this.set(cb, "utm_content");
        this.set(db, "utm_nooverride");
        this.set(eb, 100);
        this.set(ic, 1);
        this.set(jc, j);
        this.set(fb, "/__utm.gif");
        this.set(gb, 1);
        this.set(lb, []);
        this.set(O, []);
        this.set(ib, id[ha](0));
        this.set(jb, []);
        this.set(kb, []);
        this.t("auto");
        this.set(qb, this.ra());
        this.set(lc, {
            hit: [],
            load: []
        });
        this.a.g("0", rd);
        this.a.g("1", gd);
        this.a.g("2", od);
        this.a.g("3", hd);
        this.a.g("4", d("load"));
        this.a.g("5", Ad);
        this.a.d("A", Ic);
        this.a.d("B", Kc);
        this.a.d("C", gd);
        this.a.d("D", Hc);
        this.a.d("E", pc);
        this.a.d("F", Gd);
        this.a.d("G", dd);
        this.a.d("H", Lc);
        this.a.d("I", Sc);
        this.a.d("J", ad);
        this.a.d("K", d("hit"));
        this.a.d("L", Hd);
        this.a.d("M", Id);
        this.get(La) === 0 && G(111);
        this.a.J();
        this.w = g
    };
    D = S[v];
    D.h = function() {
        var a = this.get(mb);
        a || (a = new Yc, this.set(mb, a));
        return a
    };
    D.ta = function(a) {
        for (var b in a) {
            var c = a[b];
            a.hasOwnProperty(b) && typeof c != "function" && this.set(b, c, h)
        }
    };
    D.z = function(a) {
        if (this.get(jc)) return j;
        var b = this,
            c = Fd(this.a, function(c) {
                b.set(ob, a, h);
                b.u(c)
            });
        this.set(jc, c);
        return c
    };
    D.na = function(a) {
        a && a != g && (a.constructor + "")[p]("String") > -1 ? (G(13), this.set(ob, a, h)) : typeof a === "object" && a !== i && this.ta(a);
        this.w = a = this.get(ob);
        this.a.f("page");
        this.z(a)
    };
    D.v = function(a, b, c, d, e) {
        if (a == "" || !Uc(a) || b == "" || !Uc(b)) return j;
        if (c != g && !Uc(c)) return j;
        if (d != g && !Vc(d)) return j;
        this.set($b, a, h);
        this.set(ac, b, h);
        this.set(bc, c, h);
        this.set(cc, d, h);
        this.set(Zb, !! e, h);
        this.a.f("event");
        return h
    };
    D.oa = function(a, b, c, d) {
        if (!a || !b) return j;
        this.set(dc, a, h);
        this.set(ec, b, h);
        this.set(hc, c || J[x].href, h);
        d && this.set(ob, d, h);
        this.a.f("social");
        return h
    };
    D.ma = function() {
        this.set(ic, 10);
        this.z(this.w)
    };
    D.pa = function() {
        this.a.f("trans")
    };
    D.u = function(a) {
        this.set(nb, a, h);
        this.a.f("event")
    };
    D.V = function(a) {
        this.m();
        var b = this;
        return {
            _trackEvent: function(c, d, e) {
                G(91);
                b.v(a, c, d, e)
            }
        }
    };
    D.Y = function(a) {
        return this.get(a)
    };
    D.ga = function(a, b) {
        if (a) if (a != g && (a.constructor + "")[p]("String") > -1) this.set(a, b);
        else if (typeof a == "object") for (var c in a) a.hasOwnProperty(c) && this.set(c, a[c])
    };
    D.addEventListener = function(a, b) {
        var c = this.get(lc)[a];
        c && c[m](b)
    };
    D.removeEventListener = function(a, b) {
        for (var c = this.get(lc)[a], d = 0; c && d < c[u]; d++) if (c[d] == b) {
            c.splice(d, 1);
            break
        }
    };
    D.$ = function() {
        return "5.2.2"
    };
    D.t = function(a) {
        this.get(Sa);
        a = a == "auto" ? Ba(J.domain) : !a || a == "-" || a == "none" ? "" : a[C]();
        this.set(Ma, a)
    };
    D.ea = function(a) {
        this.set(Sa, !! a)
    };
    D.Z = function(a, b) {
        return ud(this.a, a, b)
    };
    D.link = function(a, b) {
        if (this.a.get(Qa) && a) {
            var c = ud(this.a, a, b);
            J[x].href = c
        }
    };
    D.da = function(a, b) {
        this.a.get(Qa) && a && a.action && (a.action = ud(this.a, a.action, b))
    };
    D.ha = function() {
        this.m();
        var a = this.a,
            b = J.getElementById ? J.getElementById("utmtrans") : J.utmform && J.utmform.utmtrans ? J.utmform.utmtrans : i;
        if (b && b[la]) {
            a.set(lb, []);
            for (var b = b[la][w]("UTM:"), c = 0; c < b[u]; c++) {
                b[c] = ta(b[c]);
                for (var d = b[c][w](vd), e = 0; e < d[u]; e++) d[e] = ta(d[e]);
                "T" == d[0] ? xd(a, d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]) : "I" == d[0] && yd(a, d[1], d[2], d[3], d[4], d[5], d[6])
            }
        }
    };
    D.O = function(a, b, c, d, e, f, l, o) {
        return xd(this.a, a, b, c, d, e, f, l, o)
    };
    D.M = function(a, b, c, d, e, f) {
        return yd(this.a, a, b, c, d, e, f)
    };
    D.ia = function(a) {
        vd = a || "|"
    };
    D.fa = function(a, b, c, d) {
        var e = this.a;
        if (a <= 0 || a > e.get(hb)) a = j;
        else if (!b || !c || F(b)[u] + F(c)[u] > 64) a = j;
        else {
            d != 1 && d != 2 && (d = 3);
            var f = {};
            ga(f, b);
            f.value = c;
            f.scope = d;
            e.get(O)[a] = f;
            a = h
        }
        a && this.a.i();
        return a
    };
    D.X = function(a) {
        this.a.get(O)[a] = g;
        this.a.i()
    };
    D.aa = function(a) {
        return (a = this.a.get(O)[a]) && a[qa] == 1 ? a[la] : g
    };
    D.ka = function(a, b, c) {
        this.h().e(a, b, c)
    };
    D.la = function(a, b, c) {
        this.h().k(a, b, c)
    };
    D.ba = function(a, b) {
        return this.h().getKey(a, b)
    };
    D.ca = function(a, b) {
        return this.h().C(a, b)
    };
    D.S = function(a) {
        this.h().A(a)
    };
    D.T = function(a) {
        this.h().B(a)
    };
    D.W = function() {
        return new Yc
    };
    D.K = function(a) {
        a && this.get(jb)[m](a[C]())
    };
    D.P = function() {
        this.set(jb, [])
    };
    D.L = function(a) {
        a && this.get(kb)[m](a[C]())
    };
    D.Q = function() {
        this.set(kb, [])
    };
    D.N = function(a, b, c, d, e) {
        if (a && b) {
            a = [a, b[C]()][A](":");
            if (d || e) a = [a, d, e][A](":");
            d = this.get(ib);
            d.splice(c ? 0 : d[u], 0, a)
        }
    };
    D.R = function() {
        this.set(ib, [])
    };
    D.U = function(a) {
        this.a[ja]();
        var b = this.get(N),
            c = td(this.a);
        this.set(N, a);
        this.a.i();
        sd(this.a, c);
        this.set(N, b)
    };
    D.ra = function() {
        return J.referrer
    };
    D.m = function() {
        this.a[ja]()
    };
    D.ja = function(a) {
        a && a != "" && (this.set(zb, a), this.a.f("var"))
    };
    var Gd = function(a) {
        a.get(Wb) !== "trans" && a.b(Ib, 0) >= 500 && a[pa]();
        if (a.get(Wb) === "event") {
            var b = (new Date).getTime(),
                c = a.b(Jb, 0),
                d = a.b(Eb, 0),
                c = k[ka](0.2 * ((b - (c != d ? c : c * 1E3)) / 1E3));
            c > 0 && (a.set(Jb, b), a.set(Q, k.min(10, a.b(Q, 0) + c)));
            a.b(Q, 0) <= 0 && a[pa]()
        }
    },
        Id = function(a) {
            a.get(Wb) === "event" && a.set(Q, k.max(0, a.b(Q, 10) - 1))
        };
    var Jd = function() {
        var a = [];
        this.add = function(b, c, d) {
            d && (c = F("" + c));
            a[m](b + "=" + c)
        };
        this.toString = function() {
            return a[A]("&")
        }
    },
        Kd = function(a, b) {
            (b || a.get(gb) != 2) && a.n(Ib)
        },
        Ld = function(a, b) {
            b.add("utmwv", "5.2.2");
            b.add("utms", a.get(Ib));
            b.add("utmn", va());
            var c = J[x].hostname;
            E(c) || b.add("utmhn", c, h);
            c = a.get(eb);
            c != 100 && b.add("utmsp", c, h)
        },
        Nd = function(a, b) {
            b.add("utmac", a.get(Ia));
            a.get(Zb) && b.add("utmni", 1);
            Md(a, b);
            K.q && b.add("aip", 1);
            b.add("utmu", Mc.Ea())
        },
        Md = function(a, b) {
            function c(a, b) {
                b && d[m](a + "=" + b + ";")
            }
            var d = [];
            c("__utma", yc(a));
            c("__utmz", Ec(a, j));
            c("__utmv", Bc(a, h));
            c("__utmx", td(a));
            b.add("utmcc", d[A]("+"), h)
        },
        Od = function(a, b) {
            a.get(Ta) && (b.add("utmcs", a.get(xb), h), b.add("utmsr", a.get(sb)), b.add("utmsc", a.get(tb)), b.add("utmul", a.get(wb)), b.add("utmje", a.get(ub)), b.add("utmfl", a.get(vb), h))
        },
        Pd = function(a, b) {
            a.get(Wa) && a.get(pb) && b.add("utmdt", a.get(pb), h);
            b.add("utmhid", a.get(rb));
            b.add("utmr", Ea(a.get(qb), a.get(N)), h);
            b.add("utmp", F(a.get(ob), h), h)
        },
        Qd = function(a, b) {
            for (var c = a.get(mb), d = a.get(nb), e = a.get(O) || [], f = 0; f < e[u]; f++) {
                var l = e[f];
                l && (c || (c = new Yc), c.e(8, f, l[r]), c.e(9, f, l[la]), l[qa] != 3 && c.e(11, f, "" + l[qa]))
            }!E(a.get($b)) && !E(a.get(ac), h) && (c || (c = new Yc), c.e(5, 1, a.get($b)), c.e(5, 2, a.get(ac)), e = a.get(bc), e != g && c.e(5, 3, e), e = a.get(cc), e != g && c.k(5, 1, e));
            c ? b.add("utme", c.ua(d), h) : d && b.add("utme", d.o(), h)
        },
        Rd = function(a, b, c) {
            var d = new Jd;
            Kd(a, c);
            Ld(a, d);
            d.add("utmt", "tran");
            d.add("utmtid", b.id_, h);
            d.add("utmtst", b.affiliation_, h);
            d.add("utmtto", b.total_, h);
            d.add("utmttx", b.tax_, h);
            d.add("utmtsp", b.shipping_, h);
            d.add("utmtci", b.city_, h);
            d.add("utmtrg", b.state_, h);
            d.add("utmtco", b.country_, h);
            !c && Nd(a, d);
            return d[t]()
        },
        Sd = function(a, b, c) {
            var d = new Jd;
            Kd(a, c);
            Ld(a, d);
            d.add("utmt", "item");
            d.add("utmtid", b.transId_, h);
            d.add("utmipc", b.sku_, h);
            d.add("utmipn", b.name_, h);
            d.add("utmiva", b.category_, h);
            d.add("utmipr", b.price_, h);
            d.add("utmiqt", b.quantity_, h);
            !c && Nd(a, d);
            return d[t]()
        },
        Td = function(a, b) {
            var c = a.get(Wb);
            if (c == "page") c = new Jd, Kd(a, b), Ld(a, c), Qd(a, c), Od(a, c), Pd(a, c), b || Nd(a, c), c = [c[t]()];
            else if (c == "event") c = new Jd, Kd(a, b), Ld(a, c), c.add("utmt", "event"), Qd(a, c), Od(a, c), Pd(a, c), !b && Nd(a, c), c = [c[t]()];
            else if (c == "var") c = new Jd, Kd(a, b), Ld(a, c), c.add("utmt", "var"), !b && Nd(a, c), c = [c[t]()];
            else if (c == "trans") for (var c = [], d = a.get(lb), e = 0; e < d[u]; ++e) {
                c[m](Rd(a, d[e], b));
                for (var f = d[e].items_, l = 0; l < f[u]; ++l) c[m](Sd(a, f[l], b))
            } else c == "social" ? b ? c = [] : (c = new Jd, Kd(a, b), Ld(a, c), c.add("utmt", "social"), c.add("utmsn", a.get(dc), h), c.add("utmsa", a.get(ec), h), c.add("utmsid", a.get(hc), h), Qd(a, c), Od(a, c), Pd(a, c), Nd(a, c), c = [c[t]()]) : c = [];
            return c
        },
        Hd = function(a) {
            var b, c = a.get(gb),
                d = a.get(Yb),
                e = d && d.Aa,
                f = 0;
            if (c == 0 || c == 2) {
                var l = a.get(fb) + "?";
                b = Td(a, h);
                for (var o = 0, q = b[u]; o < q; o++) Ga(b[o], e, l, h), f++
            }
            if (c == 1 || c == 2) {
                b = Td(a);
                o = 0;
                for (q = b[u]; o < q; o++) try {
                    Ga(b[o], e), f++
                } catch (s) {
                    s && Fa(s[r], g, s.message)
                }
            }
            if (d) d.j = f
        };
    var Ud = "https:" == J[x].protocol ? "https://ssl.google-analytics.com" : "http://www.google-analytics.com",
        Vd = function(a) {
            ga(this, "len");
            this.message = a + "-8192"
        },
        Wd = function(a) {
            ga(this, "ff2post");
            this.message = a + "-2036"
        },
        Ga = function(a, b, c, d) {
            b = b || wa;
            if (d || a[u] <= 2036) Xd(a, b, c);
            else if (a[u] <= 8192) {
                if (V[ra].userAgent[p]("Firefox") >= 0 && ![].reduce) throw new Wd(a[u]);
                Yd(a, b) || Zd(a, b)
            } else
                throw new Vd(a[u]);
        },
        Xd = function(a, b, c) {
            var c = c || Ud + "/__utm.gif?",
                d = new Image(1, 1);
            d.src = c + a;
            fa(d, function() {
                fa(d, i);
                d.onerror =
                    i;
                b()
            });
            d.onerror = function() {
                fa(d, i);
                d.onerror = i;
                b()
            }
        },
        Yd = function(a, b) {
            var c, d = Ud + "/p/__utm.gif",
                e = V.XDomainRequest;
            if (e) c = new e, c.open("POST", d);
            else if (e = V.XMLHttpRequest) e = new e, "withCredentials" in e && (c = e, c.open("POST", d, h), c.setRequestHeader("Content-Type", "text/plain"));
            if (c) return c.onreadystatechange = function() {
                c.readyState == 4 && (b(), c = i)
            }, c.send(a), h
        },
        Zd = function(a, b) {
            if (J.body) {
                a = ba(a);
                try {
                    var c = J.createElement('<iframe name="' + a + '"></iframe>')
                } catch (d) {
                    c = J.createElement("iframe"), ga(c, a)
                }
                c.height = "0";
                c.width = "0";
                c.style.display = "none";
                c.style.visibility = "hidden";
                var e = J[x],
                    e = Ud + "/u/post_iframe.html#" + ba(e.protocol + "//" + e[oa] + "/favicon.ico"),
                    f = function() {
                        c.src = "";
                        c.parentNode && c.parentNode.removeChild(c)
                    };
                xa(V, "beforeunload", f);
                var l = j,
                    o = 0,
                    q = function() {
                        if (!l) {
                            try {
                                if (o > 9 || c.contentWindow[x][oa] == J[x][oa]) {
                                    l = h;
                                    f();
                                    ya(V, "beforeunload", f);
                                    b();
                                    return
                                }
                            } catch (a) {}
                            o++;
                            da(q, 200)
                        }
                    };
                xa(c, "load", q);
                J.body.appendChild(c);
                c.src = e
            } else Nc(function() {
                Zd(a, b)
            }, 100)
        };
    var Z = function() {
        this.q = j;
        this.D = {};
        this.F = [];
        this.wa = 0;
        this._gasoCPath = this._gasoDomain = g;
        R(Z[v], "_createTracker", Z[v].l, 55);
        R(Z[v], "_getTracker", Z[v].ya, 0);
        R(Z[v], "_getTrackerByName", Z[v].p, 51);
        R(Z[v], "_getTrackers", Z[v].za, 130);
        R(Z[v], "_anonymizeIp", Z[v].xa, 16);
        mc()
    };
    D = Z[v];
    D.ya = function(a, b) {
        return this.l(a, g, b)
    };
    D.l = function(a, b, c) {
        b && G(23);
        c && G(67);
        b == g && (b = "~" + K.wa++);
        a = new S(b, a, c);
        K.D[b] = a;
        K.F[m](a);
        return a
    };
    D.p = function(a) {
        a = a || "";
        return K.D[a] || K.l(g, a)
    };
    D.za = function() {
        return K.F[ha](0)
    };
    D.xa = function() {
        this.q = h
    };
    var $d = function(a) {
        if (J.webkitVisibilityState == "prerender") return j;
        a();
        return h
    };
    var K = new Z;
    var ae = V._gat;
    ae && typeof ae._getTracker == "function" ? K = ae : V._gat = K;
    var Tc = new Y;
    (function(a) {
        if (!$d(a)) {
            G(123);
            var b = j,
                c = function() {
                    !b && $d(a) && (G(124), b = h, ya(J, "webkitvisibilitychange", c))
                };
            xa(J, "webkitvisibilitychange", c)
        }
    })(function() {
        var a = V._gaq,
            b = j;
        if (a && typeof a[m] == "function" && (b = Object[v][t].call(Object(a)) == "[object Array]", !b)) {
            Tc = a;
            return
        }
        V._gaq = Tc;
        b && Tc[m].apply(Tc, a)
    });
})();;

function iga2_a(a) {
    iga2_(this.a, a)
}
function iga2_(a, b) {
    b || (b = "/");
    a._trackPageview(b)
}
function iga2_b(a, b, c, d) {
    iga2_c(this.a, a, b, c, d)
}
function iga2_c(a, b, c, d, e) {
    if (!b || !c) throw Error("_IG_GA.reportEvent(category, action): category or action cannot be null, empty, or undefined.");
    a = a._createEventTracker(b);
    a._trackEvent(c, d, e)
}
function iga2_d(a, b) {
    iga2_(this.a, b);
    iga2_e(a)
}
function iga2_f(a, b, c, d, e) {
    iga2_c(this.a, b, c, d, e);
    iga2_e(a)
}
function iga2_e(a) {
    window.setTimeout(iga2_g(a), 500)
}

function iga2_g(a) {
    return function() {
        iga2_h(a)
    }
}
function iga2_h(a) {
    _ADS_ClickDestinationUrl && _ADS_ReportInteraction ? _ADS_ClickDestinationUrl(a) : window.open(a, "_top", "")
}

function _IG_GA(a) {
    this.a = null;
    this.reportPageview = iga2_a;
    this.reportEvent = iga2_b;
    this.reportPageviewClick = iga2_d;
    this.reportEventClick = iga2_f;
    if (!a) throw Error("_IG_GA(ga_id): ga_id is undefined");
    if (!a.match(/^UA-\d+-\d+$/)) throw Error("_IG_GA(ga_id): id contains invalid characters.  It should look something like: UA-000000-0.");
    this.a = _gat._getTracker(a);
    this.a._initData()
};;

/* [end] feature=com.google.gadgets.analytics */

/* [start] feature=osapi.base */
(function() {
    var a = function() {
        var c = {};
        var b = [];
        var f = function(g, h) {
            if (h && g) {
                b.push({
                    key: g,
                    request: h
                })
            }
            return c
        };
        var e = function(h) {
            var g = {
                method: h.request["method"],
                id: h.key
            };
            if (h.request["rpc"]) {
                g.params = h.request["rpc"]
            }
            return g
        };
        var d = function(g) {
            var h = {};
            var q = {};
            var l = 0;
            var m = [];
            for (var o = 0;
                 o < b.length;
                 o++) {
                var k = b[o]["request"]["transport"];
                if (!q[k.name]) {
                    m.push(k);
                    l++
                }
                q[k.name] = q[k.name] || [];
                q[k.name].push(e(b[o]))
            }
            var p = function(t) {
                if (t.error) {
                    h.error = t.error
                }
                for (var s = 0;
                     s < b.length;
                     s++) {
                    var r = b[s]["key"];
                    var j = t[r];
                    if (j) {
                        if (j.error) {
                            h[r] = j
                        } else {
                            h[r] = j.data || j.result
                        }
                    }
                }
                l--;
                if (l === 0) {
                    g(h)
                }
            };
            for (var n = 0;
                 n < m.length;
                 n++) {
                m[n].execute(q[m[n]["name"]], p)
            }
            if (l == 0) {
                window.setTimeout(function() {
                    g(h)
                }, 0)
            }
        };
        c.execute = d;
        c.add = f;
        return c
    };
    osapi.newBatch = a
})();;
osapi._registerMethod = function(f, e) {
    if (f === "newBatch") {
        return
    }
    var d = f.split(".");
    var b = window.osapi;
    for (var a = 0;
         a < d.length - 1;
         a++) {
        b[d[a]] = b[d[a]] || {};
        b = b[d[a]]
    }
    var c = d[d.length - 1];
    if (b[c]) {
        if (!b.__dupwarn) {
            gadgets.warn("Skipping duplicate osapi method definition " + f + " on transport " + e.name + "; others may exist, but suppressing warnings")
        }
        b.__dupwarn = true;
        return
    }
    b[c] = function(h) {
        h = h || {};
        h.userId = h.userId || "@viewer";
        h.groupId = h.groupId || "@self";
        var g = new osapi._BoundCall(f, e, h);
        return g
    };
    if (typeof tamings___ !== "undefined") {
        tamings___.push(function() {
            caja___.markTameAsFunction(b[c], f)
        })
    }
};
osapi._BoundCall = function(c, b, a) {
    this["method"] = c;
    this["transport"] = b;
    this["rpc"] = a
};
osapi._BoundCall.prototype.execute = function(e) {
    var a = (typeof caja___ !== "undefined" && caja___.getUseless && caja___.getUseless());
    var d = a ? caja___.getUseless() : this;
    var b = a ? caja___.untame(e) : e;
    var c = osapi.newBatch();
    c.add(this["method"], this);
    c.execute(function(f) {
        if (f.error) {
            b.call(d, f.error)
        } else {
            b.call(d, f[d.method])
        }
    })
};;

/* [end] feature=osapi.base */

/* [start] feature=osapi */
(function() {
    var a;

    function b(j, i) {
        function g(l) {
            if (l.errors[0]) {
                i({
                    error: {
                        code: l.rc,
                        message: l.text
                    }
                })
            } else {
                var m = l.result || l.data;
                if (m.error) {
                    i(m)
                } else {
                    var k = {};
                    for (var n = 0;
                         n < m.length;
                         n++) {
                        k[m[n]["id"]] = m[n]
                    }
                    i(k)
                }
            }
        }
        var f = {
            POST_DATA: gadgets.json.stringify(j),
            CONTENT_TYPE: "JSON",
            METHOD: "POST",
            AUTHORIZATION: "SIGNED"
        };
        var h = {
            "Content-Type": "application/json"
        };
        var d = this.name;
        var e = shindig.auth.getSecurityToken();
        if (e) {
            if (a) {
                h.Authorization = "OAuth2 " + e
            } else {
                d += "?st=";
                d += encodeURIComponent(e)
            }
        }
        gadgets.io.makeNonProxiedRequest(d, g, f, h)
    }
    function c(g) {
        var j = g["osapi.services"];
        a = g["osapi.useOAuth2"];
        if (j) {
            for (var f in j) {
                if (j.hasOwnProperty(f)) {
                    if (f.indexOf("http") == 0 || f.indexOf("//") == 0) {
                        var d = f.replace("%host%", document.location.host);
                        var k = {
                            name: d,
                            execute: b
                        };
                        var e = j[f];
                        for (var h = 0;
                             h < e.length;
                             h++) {
                            osapi._registerMethod(e[h], k)
                        }
                    }
                }
            }
        }
    }
    if (gadgets.config) {
        gadgets.config.register("osapi.services", null, c)
    }
})();;
if (gadgets && gadgets.rpc) {
    (function() {
        function a(e, d) {
            var c = function(g) {
                if (!g) {
                    d({
                        code: 500,
                        message: "Container refused the request"
                    })
                } else {
                    if (g.error) {
                        d(g)
                    } else {
                        var f = {};
                        for (var h = 0;
                             h < g.length;
                             h++) {
                            f[g[h]["id"]] = g[h]
                        }
                        d(f)
                    }
                }
            };
            gadgets.rpc.call("..", "osapi._handleGadgetRpcMethod", c, e)
        }
        function b(c) {
            var f = {
                name: "gadgets.rpc",
                execute: a
            };
            var l = c["osapi.services"];
            if (l) {
                for (var d in l) {
                    if (l.hasOwnProperty(d)) {
                        if (d === "gadgets.rpc") {
                            var e = l[d];
                            for (var h = 0;
                                 h < e.length;
                                 h++) {
                                osapi._registerMethod(e[h], f)
                            }
                        }
                    }
                }
            }
            if (osapi.container && osapi.container.listMethods) {
                var g = gadgets.util.runOnLoadHandlers;
                var j = 2;
                var k = function() {
                    j--;
                    if (j == 0) {
                        g()
                    }
                };
                gadgets.util.runOnLoadHandlers = k;
                osapi.container.listMethods({}).execute(function(m) {
                    if (!m.error) {
                        for (var n = 0;
                             n < m.length;
                             n++) {
                            if (m[n] != "container.listMethods") {
                                osapi._registerMethod(m[n], f)
                            }
                        }
                    }
                    k()
                });
                window.setTimeout(k, 500)
            }
        }
        if (gadgets.config) {
            gadgets.config.register("osapi.services", null, b)
        }
    })()
};;
gadgets.util.registerOnLoadHandler(function() {
    if (osapi && osapi.people && osapi.people.get) {
        osapi.people.getViewer = function(a) {
            a = a || {};
            a.userId = "@viewer";
            a.groupId = "@self";
            return osapi.people.get(a)
        };
        osapi.people.getViewerFriends = function(a) {
            a = a || {};
            a.userId = "@viewer";
            a.groupId = "@friends";
            return osapi.people.get(a)
        };
        osapi.people.getOwner = function(a) {
            a = a || {};
            a.userId = "@owner";
            a.groupId = "@self";
            return osapi.people.get(a)
        };
        osapi.people.getOwnerFriends = function(a) {
            a = a || {};
            a.userId = "@owner";
            a.groupId = "@friends";
            return osapi.people.get(a)
        }
    }
});;

/* [end] feature=osapi */

/* [start] feature=dynamic-height.util */
gadgets.window = gadgets.window || {};
(function() {
    gadgets.window.getViewportDimensions = function() {
        var a = 0;
        var b = 0;
        if (self.innerHeight) {
            a = self.innerWidth;
            b = self.innerHeight
        } else {
            if (document.documentElement && document.documentElement.clientHeight) {
                a = document.documentElement.clientWidth;
                b = document.documentElement.clientHeight
            } else {
                if (document.body) {
                    a = document.body.clientWidth;
                    b = document.body.clientHeight
                }
            }
        }
        return {
            width: a,
            height: b
        }
    }
})();;

/* [end] feature=dynamic-height.util */

/* [start] feature=dynamic-height.height */
gadgets.window = gadgets.window || {};
(function() {
    function a(e, c) {
        var d = window.getComputedStyle(e, "");
        var f = d.getPropertyValue(c);
        f.match(/^([0-9]+)/);
        return parseInt(RegExp.$1, 10)
    }
    function b() {
        var m = 0;
        var k = [document.body];
        while (k.length > 0) {
            var f = k.shift();
            var e = f.childNodes;
            if (typeof f.style !== "undefined") {
                var g = f.style.overflowY;
                if (!g) {
                    var j = document.defaultView.getComputedStyle(f, null);
                    g = j ? j.overflowY : null
                }
                if (g != "visible" && g != "inherit") {
                    var l = f.style.height;
                    if (!l) {
                        var j = document.defaultView.getComputedStyle(f, null);
                        l = j ? j.height : ""
                    }
                    if (l.length > 0 && l != "auto") {
                        continue
                    }
                }
            }
            for (var h = 0;
                 h < e.length;
                 h++) {
                var d = e[h];
                if (typeof d.offsetTop !== "undefined" && typeof d.offsetHeight !== "undefined") {
                    var c = d.offsetTop + d.offsetHeight + a(d, "margin-bottom");
                    m = Math.max(m, c)
                }
                k.push(d)
            }
        }
        return m + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body, "padding-bottom")
    }
    gadgets.window.getHeight = function() {
        var g = gadgets.window.getViewportDimensions().height;
        var c = document.body;
        var f = document.documentElement;
        if (document.compatMode === "CSS1Compat" && f.scrollHeight) {
            return f.scrollHeight !== g ? f.scrollHeight : f.offsetHeight
        } else {
            if (navigator.userAgent.indexOf("AppleWebKit") >= 0) {
                return b()
            } else {
                if (c && f) {
                    var d = f.scrollHeight;
                    var e = f.offsetHeight;
                    if (f.clientHeight !== e) {
                        d = c.scrollHeight;
                        e = c.offsetHeight
                    }
                    if (d > g) {
                        return d > e ? d : e
                    } else {
                        return d < e ? d : e
                    }
                }
            }
        }
    }
}());;

/* [end] feature=dynamic-height.height */

/* [start] feature=dynamic-height */
gadgets.window = gadgets.window || {};
(function() {
    var a;
    gadgets.window.adjustHeight = function(d) {
        var c = parseInt(d, 10);
        var b = false;
        if (isNaN(c)) {
            b = true;
            c = gadgets.window.getHeight()
        }
        if (c !== a && !isNaN(c) && !(b && c === 0)) {
            a = c;
            gadgets.rpc.call(null, "resize_iframe", null, c)
        }
    }
}());
var _IG_AdjustIFrameHeight = gadgets.window.adjustHeight;;
tamings___.push(function(a) {
    caja___.whitelistFuncs([
        [gadgets.window, "adjustHeight"]
    ])
});;

/* [end] feature=dynamic-height */

/* [start] feature=setprefs */
gadgets.Prefs.prototype.set = function(d, e) {
    var g = false;
    if (arguments.length > 2) {
        var f = {};
        for (var c = 0, b = arguments.length;
             c < b;
             c += 2) {
            f[arguments[c]] = arguments[c + 1]
        }
        g = gadgets.Prefs.setInternal_(f)
    } else {
        g = gadgets.Prefs.setInternal_(d, e)
    }
    if (!g) {
        return
    }
    var a = [null, "set_pref", null, gadgets.util.getUrlParameters()["ifpctok"] || gadgets.util.getUrlParameters()["rpctoken"] || 0].concat(Array.prototype.slice.call(arguments));
    gadgets.rpc.call.apply(gadgets.rpc, a)
};
gadgets.Prefs.prototype.setArray = function(c, d) {
    for (var b = 0, a = d.length;
         b < a; ++b) {
        if (typeof d[b] !== "number") {
            d[b] = d[b].replace(/\|/g, "%7C")
        }
    }
    this.set(c, d.join("|"))
};;

/* [end] feature=setprefs */

/* [start] feature=google.contentmatch */
(function() {
    var e = null,
        f = this;
    Math.floor(2147483648 * Math.random()).toString(36);
    Math.random();
    var g, h, j, k, l = function() {
        return f.navigator ? f.navigator.userAgent : e
    },
        m = function() {
            return f.navigator
        };
    k = j = h = g = !1;
    var n;
    if (n = l()) {
        var o = m();
        g = 0 == n.indexOf("Opera");
        h = !g && -1 != n.indexOf("MSIE");
        (j = !g && -1 != n.indexOf("WebKit")) && n.indexOf("Mobile");
        k = !g && !j && "Gecko" == o.product
    }
    var p = g,
        r = h,
        s = k,
        t = j,
        u = m(),
        v = u && u.platform || "";
    v.indexOf("Mac");
    v.indexOf("Win");
    v.indexOf("Linux");
    m() && (m().appVersion || "").indexOf("X11");
    var w = "",
        z;
    if (p && f.opera) var A = f.opera.version,
        w = "function" == typeof A ? A() : A;
    else if (s ? z = /rv\:([^\);]+)(\)|;)/ : r ? z = /MSIE\s+([^\);]+)(\)|;)/ : t && (z = /WebKit\/(\S+)/), z) var B = z.exec(l()),
        w = B ? B[1] : "";
    r && parseFloat(w);
    var C = e,
        D = e,
        E = s || t || p || "function" == typeof f.atob;
    var F = function(b) {
        b = "" + b;
        if (/^\s*$/.test(b) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + b + ")")
        } catch (a) {}
        throw Error("Invalid JSON string: " + b);
    };
    var I = function(b) {
        if (window._debugCob) return window._debugCob;
        var a = gadgets.util.getUrlParameters().cob;
        if (a) {
            a = decodeURIComponent(a);
            if ("{" != a.charAt(0)) if (E) a = f.atob(a);
            else {
                if (!C) {
                    C = {};
                    D = {};
                    for (var c = 0; 65 > c; c++) C[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), D[C[c]] = c, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
                }
                for (var c = D, i = [], d = 0; d < a.length;) {
                    var G = c[a.charAt(d++)],
                        x = d < a.length ? c[a.charAt(d)] : 0;
                    ++d;
                    var q = d < a.length ? c[a.charAt(d)] : 0;
                    ++d;
                    var y = d < a.length ? c[a.charAt(d)] : 0;
                    ++d;
                    if (G == e || x == e || q == e || y == e) throw Error();
                    i.push(G << 2 | x >> 4);
                    64 != q && (i.push(x << 4 & 240 | q >> 2), 64 != y && i.push(q << 6 & 192 | y))
                }
                a = String.fromCharCode.apply(e, i)
            }
            a = F(a);
            if (b) return a[b];
            var b = [],
                H;
            for (H in a) b = b.concat(a[H]);
            return b
        }
        return []
    },
        J = function(b) {
            var a;
            if (gadgets.views && gadgets.views.getParams()) {
                a = gadgets.views.getParams();
                var c = !1,
                    i;
                for (i in a) {
                    c = !0;
                    break
                }
                a = !c ? e : "list" in a ? a.list : [a]
            }
            return a || I(b)
        },
        K = "google.contentmatch.getContentMatches".split("."),
        L =
            f;
    !(K[0] in L) && L.execScript && L.execScript("var " + K[0]);
    for (var M; K.length && (M = K.shift());)!K.length && void 0 !== J ? L[M] = J : L = L[M] ? L[M] : L[M] = {};
})();;

/* [end] feature=google.contentmatch */
(function() {
    var j = window['___jsl'];
    if (j['c']) {
        j['c']();
        delete j['c'];
    }
})();