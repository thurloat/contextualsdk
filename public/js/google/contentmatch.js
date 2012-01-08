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
})();