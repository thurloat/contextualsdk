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