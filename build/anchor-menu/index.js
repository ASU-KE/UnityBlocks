/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@asu-design-system/components-core/dist/libCore.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@asu-design-system/components-core/dist/libCore.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ i),
/* harmony export */   "AnchorMenu": () => (/* binding */ l),
/* harmony export */   "Article": () => (/* binding */ s),
/* harmony export */   "Button": () => (/* binding */ c),
/* harmony export */   "ButtonIconOnly": () => (/* binding */ d),
/* harmony export */   "ButtonTag": () => (/* binding */ u),
/* harmony export */   "Card": () => (/* binding */ f),
/* harmony export */   "FeedBody": () => (/* binding */ m),
/* harmony export */   "FeedContainerProvider": () => (/* binding */ p),
/* harmony export */   "FeedContext": () => (/* binding */ h),
/* harmony export */   "FeedHeader": () => (/* binding */ g),
/* harmony export */   "Hero": () => (/* binding */ y),
/* harmony export */   "Pagination": () => (/* binding */ v),
/* harmony export */   "Tab": () => (/* binding */ b),
/* harmony export */   "TabbedPanels": () => (/* binding */ k),
/* harmony export */   "Testimonial": () => (/* binding */ w),
/* harmony export */   "Video": () => (/* binding */ E),
/* harmony export */   "feedCardButtonShape": () => (/* binding */ x),
/* harmony export */   "feedComponentShape": () => (/* binding */ S),
/* harmony export */   "feedCtaButtonShape": () => (/* binding */ C),
/* harmony export */   "feedDataSourceShape": () => (/* binding */ N),
/* harmony export */   "feedHeaderShape": () => (/* binding */ T),
/* harmony export */   "getCurrentScriptPath": () => (/* binding */ O),
/* harmony export */   "idGenerator": () => (/* binding */ A),
/* harmony export */   "initAccordion": () => (/* binding */ R),
/* harmony export */   "initAnchorMenu": () => (/* binding */ L),
/* harmony export */   "initArticle": () => (/* binding */ I),
/* harmony export */   "initButton": () => (/* binding */ _),
/* harmony export */   "initButtonIconOnly": () => (/* binding */ P),
/* harmony export */   "initButtonTag": () => (/* binding */ M),
/* harmony export */   "initCard": () => (/* binding */ $),
/* harmony export */   "initHero": () => (/* binding */ z),
/* harmony export */   "initPagination": () => (/* binding */ j),
/* harmony export */   "initTestimonial": () => (/* binding */ D),
/* harmony export */   "initVideo": () => (/* binding */ F),
/* harmony export */   "sanitizeDangerousMarkup": () => (/* binding */ B),
/* harmony export */   "spreadClasses": () => (/* binding */ H),
/* harmony export */   "useFetch": () => (/* binding */ U),
/* harmony export */   "useMediaQuery": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/*! For license information please see libCore.es.js.LICENSE.txt */
var n={779:(e,t)=>{var n;!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},368:function(e){e.exports=function(){var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor,o=Object.freeze,i=Object.seal,l=Object.create,s="undefined"!=typeof Reflect&&Reflect,c=s.apply,d=s.construct;c||(c=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),i||(i=function(e){return e}),d||(d=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var u,f=E(Array.prototype.forEach),m=E(Array.prototype.pop),p=E(Array.prototype.push),h=E(String.prototype.toLowerCase),g=E(String.prototype.match),y=E(String.prototype.replace),v=E(String.prototype.indexOf),b=E(String.prototype.trim),k=E(RegExp.prototype.test),w=(u=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return d(u,t)});function E(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return c(e,t,r)}}function x(e,r){t&&t(e,null);for(var a=r.length;a--;){var o=r[a];if("string"==typeof o){var i=h(o);i!==o&&(n(r)||(r[a]=i),o=i)}e[o]=!0}return e}function S(t){var n=l(null),r=void 0;for(r in t)c(e,t,[r])&&(n[r]=t[r]);return n}function C(e,t){for(;null!==e;){var n=a(e,t);if(n){if(n.get)return E(n.get);if("function"==typeof n.value)return E(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var N=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),T=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),A=o(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),R=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),L=o(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),I=o(["#text"]),_=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),j=i(/<%[\s\S]*|[\s\S]*%>/gm),D=i(/^data-[\-\w.\u00B7-\uFFFF]/),F=i(/^aria-[\-\w]+$/),B=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),H=i(/^(?:\w+script|data):/i),U=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function W(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var G=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":q(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(),n=function(t){return e(t)};if(n.version="2.3.4",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,s=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,E=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,Y=t.HTMLFormElement,K=t.DOMParser,X=t.trustedTypes,Q=c.prototype,Z=C(Q,"cloneNode"),J=C(Q,"nextSibling"),ee=C(Q,"childNodes"),te=C(Q,"parentNode");if("function"==typeof l){var ne=a.createElement("template");ne.content&&ne.content.ownerDocument&&(a=ne.content.ownerDocument)}var re=V(X,r),ae=re&&$e?re.createHTML(""):"",oe=a,ie=oe.implementation,le=oe.createNodeIterator,se=oe.createDocumentFragment,ce=oe.getElementsByTagName,de=r.importNode,ue={};try{ue=S(a).documentMode?a.documentMode:{}}catch(e){}var fe={};n.isSupported="function"==typeof te&&ie&&void 0!==ie.createHTMLDocument&&9!==ue;var me=z,pe=j,he=D,ge=F,ye=H,ve=U,be=B,ke=null,we=x({},[].concat(W(N),W(T),W(O),W(R),W(I))),Ee=null,xe=x({},[].concat(W(_),W(P),W(M),W($))),Se=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,Ne=null,Te=!0,Oe=!0,Ae=!1,Re=!1,Le=!1,Ie=!1,_e=!1,Pe=!1,Me=!1,$e=!1,ze=!0,je=!0,De=!1,Fe={},Be=null,He=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ue=null,qe=x({},["audio","video","img","source","image","track"]),We=null,Ge=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",Ye="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml",Xe=Ke,Qe=!1,Ze=void 0,Je=["application/xhtml+xml","text/html"],et="text/html",tt=void 0,nt=null,rt=a.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},ot=function(e){nt&&nt===e||(e&&"object"===(void 0===e?"undefined":q(e))||(e={}),e=S(e),ke="ALLOWED_TAGS"in e?x({},e.ALLOWED_TAGS):we,Ee="ALLOWED_ATTR"in e?x({},e.ALLOWED_ATTR):xe,We="ADD_URI_SAFE_ATTR"in e?x(S(Ge),e.ADD_URI_SAFE_ATTR):Ge,Ue="ADD_DATA_URI_TAGS"in e?x(S(qe),e.ADD_DATA_URI_TAGS):qe,Be="FORBID_CONTENTS"in e?x({},e.FORBID_CONTENTS):He,Ce="FORBID_TAGS"in e?x({},e.FORBID_TAGS):{},Ne="FORBID_ATTR"in e?x({},e.FORBID_ATTR):{},Fe="USE_PROFILES"in e&&e.USE_PROFILES,Te=!1!==e.ALLOW_ARIA_ATTR,Oe=!1!==e.ALLOW_DATA_ATTR,Ae=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=e.SAFE_FOR_TEMPLATES||!1,Le=e.WHOLE_DOCUMENT||!1,Pe=e.RETURN_DOM||!1,Me=e.RETURN_DOM_FRAGMENT||!1,$e=e.RETURN_TRUSTED_TYPE||!1,_e=e.FORCE_BODY||!1,ze=!1!==e.SANITIZE_DOM,je=!1!==e.KEEP_CONTENT,De=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||be,Xe=e.NAMESPACE||Ke,e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Se.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Se.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Se.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ze=Ze=-1===Je.indexOf(e.PARSER_MEDIA_TYPE)?et:e.PARSER_MEDIA_TYPE,tt="application/xhtml+xml"===Ze?function(e){return e}:h,Re&&(Oe=!1),Me&&(Pe=!0),Fe&&(ke=x({},[].concat(W(I))),Ee=[],!0===Fe.html&&(x(ke,N),x(Ee,_)),!0===Fe.svg&&(x(ke,T),x(Ee,P),x(Ee,$)),!0===Fe.svgFilters&&(x(ke,O),x(Ee,P),x(Ee,$)),!0===Fe.mathMl&&(x(ke,R),x(Ee,M),x(Ee,$))),e.ADD_TAGS&&(ke===we&&(ke=S(ke)),x(ke,e.ADD_TAGS)),e.ADD_ATTR&&(Ee===xe&&(Ee=S(Ee)),x(Ee,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&x(We,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(Be===He&&(Be=S(Be)),x(Be,e.FORBID_CONTENTS)),je&&(ke["#text"]=!0),Le&&x(ke,["html","head","body"]),ke.table&&(x(ke,["tbody"]),delete Ce.tbody),o&&o(e),nt=e)},it=x({},["mi","mo","mn","ms","mtext"]),lt=x({},["foreignobject","desc","title","annotation-xml"]),st=x({},T);x(st,O),x(st,A);var ct=x({},R);x(ct,L);var dt=function(e){var t=te(e);t&&t.tagName||(t={namespaceURI:Ke,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===Ye)return t.namespaceURI===Ke?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||it[r]):Boolean(st[n]);if(e.namespaceURI===Ve)return t.namespaceURI===Ke?"math"===n:t.namespaceURI===Ye?"math"===n&&lt[r]:Boolean(ct[n]);if(e.namespaceURI===Ke){if(t.namespaceURI===Ye&&!lt[r])return!1;if(t.namespaceURI===Ve&&!it[r])return!1;var a=x({},["title","style","font","a","script"]);return!ct[n]&&(a[n]||!st[n])}return!1},ut=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ae}catch(t){e.remove()}}},ft=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ee[e])if(Pe||Me)try{ut(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},mt=function(e){var t=void 0,n=void 0;if(_e)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Ze&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=re?re.createHTML(e):e;if(Xe===Ke)try{t=(new K).parseFromString(o,Ze)}catch(e){}if(!t||!t.documentElement){t=ie.createDocument(Xe,"template",null);try{t.documentElement.innerHTML=Qe?"":o}catch(e){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),Xe===Ke?ce.call(t,Le?"html":"body")[0]:Le?t.documentElement:i},pt=function(e){return le.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null,!1)},ht=function(e){return e instanceof Y&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof E)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},gt=function(e){return"object"===(void 0===s?"undefined":q(s))?e instanceof s:e&&"object"===(void 0===e?"undefined":q(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},yt=function(e,t,r){fe[e]&&f(fe[e],(function(e){e.call(n,t,r,nt)}))},vt=function(e){var t=void 0;if(yt("beforeSanitizeElements",e,null),ht(e))return ut(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return ut(e),!0;var r=tt(e.nodeName);if(yt("uponSanitizeElement",e,{tagName:r,allowedTags:ke}),!gt(e.firstElementChild)&&(!gt(e.content)||!gt(e.content.firstElementChild))&&k(/<[/\w]/g,e.innerHTML)&&k(/<[/\w]/g,e.textContent))return ut(e),!0;if("select"===r&&k(/<template/i,e.innerHTML))return ut(e),!0;if(!ke[r]||Ce[r]){if(je&&!Be[r]){var a=te(e)||e.parentNode,o=ee(e)||e.childNodes;if(o&&a)for(var i=o.length-1;i>=0;--i)a.insertBefore(Z(o[i],!0),J(e))}if(!Ce[r]&&kt(r)){if(Se.tagNameCheck instanceof RegExp&&k(Se.tagNameCheck,r))return!1;if(Se.tagNameCheck instanceof Function&&Se.tagNameCheck(r))return!1}return ut(e),!0}return e instanceof c&&!dt(e)?(ut(e),!0):"noscript"!==r&&"noembed"!==r||!k(/<\/no(script|embed)/i,e.innerHTML)?(Re&&3===e.nodeType&&(t=e.textContent,t=y(t,me," "),t=y(t,pe," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),yt("afterSanitizeElements",e,null),!1):(ut(e),!0)},bt=function(e,t,n){if(ze&&("id"===t||"name"===t)&&(n in a||n in rt))return!1;if(Oe&&!Ne[t]&&k(he,t));else if(Te&&k(ge,t));else if(!Ee[t]||Ne[t]){if(!(kt(e)&&(Se.tagNameCheck instanceof RegExp&&k(Se.tagNameCheck,e)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(e))&&(Se.attributeNameCheck instanceof RegExp&&k(Se.attributeNameCheck,t)||Se.attributeNameCheck instanceof Function&&Se.attributeNameCheck(t))||"is"===t&&Se.allowCustomizedBuiltInElements&&(Se.tagNameCheck instanceof RegExp&&k(Se.tagNameCheck,n)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(n))))return!1}else if(We[t]);else if(k(be,y(n,ve,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Ue[e])if(Ae&&!k(ye,y(n,ve,"")));else if(n)return!1;return!0},kt=function(e){return e.indexOf("-")>0},wt=function(e){var t=void 0,r=void 0,a=void 0,o=void 0;yt("beforeSanitizeAttributes",e,null);var i=e.attributes;if(i){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ee};for(o=i.length;o--;){var s=t=i[o],c=s.name,d=s.namespaceURI;if(r=b(t.value),a=tt(c),l.attrName=a,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,yt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ft(c,e),l.keepAttr))if(k(/\/>/i,r))ft(c,e);else{Re&&(r=y(r,me," "),r=y(r,pe," "));var u=tt(e.nodeName);if(bt(u,a,r))try{d?e.setAttributeNS(d,c,r):e.setAttribute(c,r),m(n.removed)}catch(e){}}}yt("afterSanitizeAttributes",e,null)}},Et=function e(t){var n=void 0,r=pt(t);for(yt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)yt("uponSanitizeShadowNode",n,null),vt(n)||(n.content instanceof i&&e(n.content),wt(n));yt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,a){var o=void 0,l=void 0,c=void 0,d=void 0,u=void 0;if((Qe=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!gt(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===q(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(gt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Ie||ot(a),n.removed=[],"string"==typeof e&&(De=!1),De);else if(e instanceof s)1===(l=(o=mt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?o=l:o.appendChild(l);else{if(!Pe&&!Re&&!Le&&-1===e.indexOf("<"))return re&&$e?re.createHTML(e):e;if(!(o=mt(e)))return Pe?null:ae}o&&_e&&ut(o.firstChild);for(var f=pt(De?e:o);c=f.nextNode();)3===c.nodeType&&c===d||vt(c)||(c.content instanceof i&&Et(c.content),wt(c),d=c);if(d=null,De)return e;if(Pe){if(Me)for(u=se.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return Ee.shadowroot&&(u=de.call(r,u,!0)),u}var m=Le?o.outerHTML:o.innerHTML;return Re&&(m=y(m,me," "),m=y(m,pe," ")),re&&$e?re.createHTML(m):m},n.setConfig=function(e){ot(e),Ie=!0},n.clearConfig=function(){nt=null,Ie=!1},n.isValidAttribute=function(e,t,n){nt||ot({});var r=tt(e),a=tt(t);return bt(r,a,n)},n.addHook=function(e,t){"function"==typeof t&&(fe[e]=fe[e]||[],p(fe[e],t))},n.removeHook=function(e){fe[e]&&m(fe[e])},n.removeHooks=function(e){fe[e]&&(fe[e]=[])},n.removeAllHooks=function(){fe={}},n}()}()},463:(e,t,n)=>{var r=n(887),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?i:l[e.$$typeof]||a}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=i;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var a=m(n);a&&a!==p&&e(t,a,r)}var i=d(n);u&&(i=i.concat(u(n)));for(var l=s(t),h=s(n),g=0;g<i.length;++g){var y=i[g];if(!(o[y]||r&&r[y]||h&&h[y]||l&&l[y])){var v=f(n,y);try{c(t,y,v)}catch(e){}}}}return t}},459:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,k=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case u:case o:case l:case i:case m:return e;default:switch(e=e&&e.$$typeof){case c:case f:case g:case h:case s:return e;default:return t}}case a:return t}}}function E(e){return w(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=o,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=l,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return E(e)||w(e)===d},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===l||e===i||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===k||e.$$typeof===y)},t.typeOf=w},887:(e,t,n)=>{e.exports=n(459)},262:(e,t,n)=>{var r=n(586);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},980:(e,t,n)=>{e.exports=n(262)()},586:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},866:(e,t)=>{var n=60103,r=60106,a=60107,o=60108,i=60114,l=60109,s=60110,c=60112,d=60113,u=60120,f=60115,m=60116,p=60121,h=60122,g=60117,y=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;n=b("react.element"),r=b("react.portal"),a=b("react.fragment"),o=b("react.strict_mode"),i=b("react.profiler"),l=b("react.provider"),s=b("react.context"),c=b("react.forward_ref"),d=b("react.suspense"),u=b("react.suspense_list"),f=b("react.memo"),m=b("react.lazy"),p=b("react.block"),h=b("react.server.block"),g=b("react.fundamental"),y=b("react.debug_trace_mode"),v=b("react.legacy_hidden")}t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===i||e===y||e===o||e===d||e===u||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===l||e.$$typeof===s||e.$$typeof===c||e.$$typeof===g||e.$$typeof===p||e[0]===h)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case i:case o:case d:case u:return e;default:switch(e=e&&e.$$typeof){case s:case c:case m:case f:case l:return e;default:return t}}case r:return t}}}},570:(e,t,n)=>{e.exports=n(866)},665:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var d=e[c],u=t[c];if(!1===(a=n?n.call(r,d,u,c):void 0)||void 0===a&&d!==u)return!1}return!0}}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e].call(o.exports,o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};(()=>{a.d(o,{UQ:()=>b,Qy:()=>tt,d2:()=>Ut,zx:()=>x,I:()=>Wt,XM:()=>Vt,Zb:()=>Xt,H2:()=>pn,Ud:()=>on,Mz:()=>an,Fu:()=>mn,VM:()=>gn,tl:()=>kn,OK:()=>jn,g3:()=>Dn,gc:()=>Bn,nk:()=>Un,Q$:()=>cn,aP:()=>un,XJ:()=>sn,Tj:()=>dn,W3:()=>ln,To:()=>Gn,Ul:()=>Wn,am:()=>Yn,jI:()=>Kn,vk:()=>Xn,sL:()=>Qn,GI:()=>Zn,WC:()=>Jn,zd:()=>er,Ql:()=>rr,Hv:()=>tr,tQ:()=>nr,Sn:()=>ar,SF:()=>g,CP:()=>Fn,ib:()=>en,ac:()=>k});var n=a(980),r=a.n(n);const i=(u={Component:()=>react__WEBPACK_IMPORTED_MODULE_0__.Component,createContext:()=>react__WEBPACK_IMPORTED_MODULE_0__.createContext,createElement:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement,default:()=>(react__WEBPACK_IMPORTED_MODULE_0___default()),forwardRef:()=>react__WEBPACK_IMPORTED_MODULE_0__.forwardRef,useCallback:()=>react__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext,useEffect:()=>react__WEBPACK_IMPORTED_MODULE_0__.useEffect,useMemo:()=>react__WEBPACK_IMPORTED_MODULE_0__.useMemo,useRef:()=>react__WEBPACK_IMPORTED_MODULE_0__.useRef,useState:()=>react__WEBPACK_IMPORTED_MODULE_0__.useState},f={},a.d(f,u),f),l=r().shape({url:r().string,altText:r().string,cssClass:r().arrayOf(r().string),size:r().oneOf(["small","medium","large"])}),s=r().shape({text:r().string,maxWidth:r().string,cssClass:r().arrayOf(r().string),highlightColor:r().oneOf(["gold","black"])}),c=r().shape({color:r().oneOf(["gold","maroon","gray","dark"]),content:r().shape({icon:r().string,header:r().string,body:r().string})}),d=({event:e="",action:t="",name:n="",type:r="",section:a="",text:o="",region:i="",component:l=""})=>{const{dataLayer:s}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:i.toLowerCase(),section:a.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};s&&s.push(c)};var u,f,m=a(779),p=a.n(m),h=a(368);const g=e=>({__html:(0,h.sanitize)(e)}),y=({id:e,item:t,openCard:n,onClick:r})=>{var a,o;return i.default.createElement("div",{className:p()("card","card-foldable","mt-3",{[`card-${t.color}`]:t.color,"card-header-icon":t.content.icon})},i.default.createElement("div",{className:"card-header"},i.default.createElement("h4",null,i.default.createElement("a",{"data-testid":"accordion-opener",className:p()({collapsed:e!==n}),"data-toggle":"collapse",href:`#card-body-${e}`,role:"button","aria-expanded":e===n,"aria-controls":`card-body-${e}`,onClick:n=>r(n,e,t.content.header)},t.content.icon?i.default.createElement("span",{className:"card-icon"},i.default.createElement("i",{className:`${null===(a=t.content.icon)||void 0===a?void 0:a[0]} fa-${null===(o=t.content.icon)||void 0===o?void 0:o[1]} mr-2`}),t.content.header):t.content.header,i.default.createElement("i",{className:"fas fa-chevron-up"})))),i.default.createElement("div",{id:`card-body-${e}`,className:p()("collapse","card-body",{show:e===n}),dangerouslySetInnerHTML:g(t.content.body)}))};y.propTypes={id:r().number,item:c,openCard:r().number,onClick:r().func};const v={event:"collapse",name:"onclick",type:"click",region:"main content"},b=({cards:e,openedCard:t})=>{const[n,r]=(0,i.useState)(null);(0,i.useEffect)((()=>{r(t)}),[t]);const a=(e,t,a)=>{e.preventDefault(),((e,t)=>{d({...v,action:n===e?"close":"open",text:t})})(t,a),r((e=>e===t?null:t))};return i.default.createElement("div",{className:"accordion"},null==e?void 0:e.map(((e,t)=>e.content.body&&e.content.header&&i.default.createElement(y,{key:t+1,id:t+1,item:e,openCard:n,onClick:a}))))};function k(e){const[t,n]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const r=window.matchMedia(e);r.matches!==t&&n(r.matches);const a=()=>{n(r.matches)};return r.addEventListener("change",a),()=>r.removeEventListener("change",a)}),[t,e]),t}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}b.propTypes={cards:r().arrayOf(c).isRequired,openedCard:r().number};const E={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},x=({label:e,cardTitle:t,ariaLabel:n,block:r,color:a,disabled:o,element:l,href:s,icon:c,innerRef:u,onClick:f,size:m,classes:h,target:g,...y})=>{const v=p()("btn",{[`btn-${a}`]:!0,"btn-md":"small"===m,"btn-sm":"xsmall"===m,"btn-block":r,disabled:o});let b=l;return s&&"button"===l&&(b="a"),i.default.createElement(b,w({type:"button"===b&&f?"button":void 0},y,{className:p()(h)||v,href:s,ref:u,onClick:()=>(d({...E,text:e,section:t}),void(null==f||f())),"aria-label":n,target:"a"===b?g:null}),c&&i.default.createElement("i",{className:`${null==c?void 0:c[0]} fa-${null==c?void 0:c[1]} mr-1`}),e)};x.propTypes={label:r().string,cardTitle:r().string,ariaLabel:r().string,block:r().bool,color:r().oneOf(["gold","maroon","gray","dark"]),disabled:r().bool,element:r().oneOfType([r().func,r().string,r().shape({$$typeof:r().symbol,render:r().func}),r().arrayOf(r().oneOfType([r().func,r().string,r().shape({$$typeof:r().symbol,render:r().func})]))]),href:r().string,icon:r().arrayOf(r().string),innerRef:r().oneOfType([r().object,r().func,r().string]),onClick:r().func,size:r().oneOf(["default","small","xsmall"]),classes:r().arrayOf(r().string),target:r().oneOf(["_blank","_self","_top","_parent"])},x.defaultProps={label:"",cardTitle:"",ariaLabel:void 0,block:void 0,color:"gray",disabled:void 0,element:"button",href:void 0,icon:void 0,innerRef:void 0,onClick:void 0,size:"default",classes:void 0,target:"_self"};var S=a(570),C=a(665),N=a.n(C);const T=function(e){function t(e,r,s,c,f){for(var m,p,h,g,k,E=0,x=0,S=0,C=0,N=0,I=0,P=h=m=0,$=0,z=0,j=0,D=0,F=s.length,B=F-1,H="",U="",q="",W="";$<F;){if(p=s.charCodeAt($),$===B&&0!==x+C+S+E&&(0!==x&&(p=47===x?10:47),C=S=E=0,F++,B++),0===x+C+S+E){if($===B&&(0<z&&(H=H.replace(u,"")),0<H.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:H+=s.charAt($)}p=59}switch(p){case 123:for(m=(H=H.trim()).charCodeAt(0),h=1,D=++$;$<F;){switch(p=s.charCodeAt($)){case 123:h++;break;case 125:h--;break;case 47:switch(p=s.charCodeAt($+1)){case 42:case 47:e:{for(P=$+1;P<B;++P)switch(s.charCodeAt(P)){case 47:if(42===p&&42===s.charCodeAt(P-1)&&$+2!==P){$=P+1;break e}break;case 10:if(47===p){$=P+1;break e}}$=P}}break;case 91:p++;case 40:p++;case 34:case 39:for(;$++<B&&s.charCodeAt($)!==p;);}if(0===h)break;$++}if(h=s.substring(D,$),0===m&&(m=(H=H.replace(d,"").trim()).charCodeAt(0)),64===m){switch(0<z&&(H=H.replace(u,"")),p=H.charCodeAt(1)){case 100:case 109:case 115:case 45:z=r;break;default:z=L}if(D=(h=t(r,z,h,p,f+1)).length,0<_&&(k=l(3,h,z=n(L,H,j),r,O,T,D,p,f,c),H=z.join(""),void 0!==k&&0===(D=(h=k.trim()).length)&&(p=0,h="")),0<D)switch(p){case 115:H=H.replace(w,i);case 100:case 109:case 45:h=H+"{"+h+"}";break;case 107:h=(H=H.replace(y,"$1 $2"))+"{"+h+"}",h=1===R||2===R&&o("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=H+h,112===c&&(U+=h,h="")}else h=""}else h=t(r,n(r,H,j),h,c,f+1);q+=h,h=j=z=P=m=0,H="",p=s.charCodeAt(++$);break;case 125:case 59:if(1<(D=(H=(0<z?H.replace(u,""):H).trim()).length))switch(0===P&&(m=H.charCodeAt(0),45===m||96<m&&123>m)&&(D=(H=H.replace(" ",":")).length),0<_&&void 0!==(k=l(1,H,r,e,O,T,U.length,c,f,c))&&0===(D=(H=k.trim()).length)&&(H="\0\0"),m=H.charCodeAt(0),p=H.charCodeAt(1),m){case 0:break;case 64:if(105===p||99===p){W+=H+s.charAt($);break}default:58!==H.charCodeAt(D-1)&&(U+=a(H,m,p,H.charCodeAt(2)))}j=z=P=m=0,H="",p=s.charCodeAt(++$)}}switch(p){case 13:case 10:47===x?x=0:0===1+m&&107!==c&&0<H.length&&(z=1,H+="\0"),0<_*M&&l(0,H,r,e,O,T,U.length,c,f,c),T=1,O++;break;case 59:case 125:if(0===x+C+S+E){T++;break}default:switch(T++,g=s.charAt($),p){case 9:case 32:if(0===C+E+x)switch(N){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+x+E&&(z=j=1,g="\f"+g);break;case 108:if(0===C+x+E+A&&0<P)switch($-P){case 2:112===N&&58===s.charCodeAt($-3)&&(A=N);case 8:111===I&&(A=I)}break;case 58:0===C+x+E&&(P=$);break;case 44:0===x+S+C+E&&(z=1,g+="\r");break;case 34:case 39:0===x&&(C=C===p?0:0===C?p:C);break;case 91:0===C+x+S&&E++;break;case 93:0===C+x+S&&E--;break;case 41:0===C+x+E&&S--;break;case 40:0===C+x+E&&(0===m&&(2*N+3*I==533||(m=1)),S++);break;case 64:0===x+S+C+E+P+h&&(h=1);break;case 42:case 47:if(!(0<C+E+S))switch(x){case 0:switch(2*p+3*s.charCodeAt($+1)){case 235:x=47;break;case 220:D=$,x=42}break;case 42:47===p&&42===N&&D+2!==$&&(33===s.charCodeAt(D+2)&&(U+=s.substring(D,$+1)),g="",x=0)}}0===x&&(H+=g)}I=N,N=p,$++}if(0<(D=U.length)){if(z=r,0<_&&void 0!==(k=l(2,U,z,e,O,T,D,c,f,c))&&0===(U=k).length)return W+U+q;if(U=z.join(",")+"{"+U+"}",0!=R*A){switch(2!==R||o(U,2)||(A=0),A){case 111:U=U.replace(b,":-moz-$1")+U;break;case 112:U=U.replace(v,"::-webkit-input-$1")+U.replace(v,"::-moz-$1")+U.replace(v,":-ms-input-$1")+U}A=0}}return W+U+q}function n(e,t,n){var a=t.trim().split(h);t=a;var o=a.length,i=e.length;switch(i){case 0:case 1:var l=0;for(e=0===i?"":e[0]+" ";l<o;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<o;++l)for(var c=0;c<i;++c)t[s++]=r(e[c]+" ",a[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var i=e+";",l=2*t+3*n+4*r;if(944===l){e=i.indexOf(":",9)+1;var s=i.substring(e,i.length-1).trim();return s=i.substring(0,e).trim()+s+";",1===R||2===R&&o(s,1)?"-webkit-"+s+s:s}if(0===R||2===R&&!o(i,1))return i;switch(l){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(N,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(s=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+s+i;case 1005:return m.test(i)?i.replace(f,":-webkit-")+i.replace(f,":-moz-")+i:i;case 1e3:switch(t=(s=i.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=i.replace(k,"tb");break;case 232:s=i.replace(k,"tb-rl");break;case 220:s=i.replace(k,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+s+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(t=(i=e).length-10,l=(s=(33===i.charCodeAt(t)?i.substring(0,t):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:i=i.replace(s,"-webkit-"+s)+";"+i;break;case 207:case 102:i=i.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+i.replace(s,"-webkit-"+s)+";"+i.replace(s,"-ms-"+s+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return s=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+s+"-ms-flex-"+s+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(x,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(x,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):i.replace(s,"-webkit-"+s)+i.replace(s,"-moz-"+s.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===n+r&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+i}return i}function o(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),P(2!==t?r:r.replace(S,"$1"),n,t)}function i(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(E," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,a,o,i,l,s,d){for(var u,f=0,m=t;f<_;++f)switch(u=I[f].call(c,e,m,n,r,a,o,i,l,s,d)){case void 0:case!1:case!0:case null:break;default:m=u}if(m!==t)return m}function s(e){return void 0!==(e=e.prefix)&&(P=null,e?"function"!=typeof e?R=1:(R=2,P=e):R=0),s}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<_){var a=l(-1,n,r,r,O,T,0,0,0,0);void 0!==a&&"string"==typeof a&&(n=a)}var o=t(L,r,n,0,0);return 0<_&&void 0!==(a=l(-2,o,r,r,O,T,o.length,0,0,0))&&(o=a),A=0,T=O=1,o}var d=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,m=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,x=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,N=/([^-])(image-set\()/,T=1,O=1,A=0,R=1,L=[],I=[],_=0,P=null,M=0;return c.use=function e(t){switch(t){case void 0:case null:_=I.length=0;break;default:if("function"==typeof t)I[_++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else M=0|!!t}return e},c.set=s,void 0!==e&&s(e),c},O={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var A=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const R=(L={},function(e){return void 0===L[e]&&(L[e]=(t=e,A.test(t)||111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)<91)),L[e];var t});var L,I=a(463),_=a.n(I);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},$=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,S.typeOf)(e)},z=Object.freeze([]),j=Object.freeze({});function D(e){return"function"==typeof e}function F(e){return e.displayName||e.name||"Component"}function B(e){return e&&"string"==typeof e.styledComponentId}var H="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",U="undefined"!=typeof window&&"HTMLElement"in window,q=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY);function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var G=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&W(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(i,t[l])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),V=new Map,Y=new Map,K=1,X=function(e){if(V.has(e))return V.get(e);for(;Y.has(K);)K++;var t=K++;return V.set(e,t),Y.set(t,e),t},Q=function(e){return Y.get(e)},Z=function(e,t){t>=K&&(K=t+1),V.set(e,t),Y.set(t,e)},J="style["+H+'][data-styled-version="5.3.3"]',ee=new RegExp("^"+H+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),te=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ne=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(ee);if(l){var s=0|parseInt(l[1],10),c=l[2];0!==s&&(Z(c,s),te(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(i)}}},re=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},ae=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(H))return r}}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(H,"active"),r.setAttribute("data-styled-version","5.3.3");var i=re();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},oe=function(){function e(e){var t=this.element=ae(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}W(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),ie=function(){function e(e){var t=this.element=ae(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),le=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),se=U,ce={isServer:!U,useCSSOMInjection:!q},de=function(){function e(e,t,n){void 0===e&&(e=j),void 0===t&&(t={}),this.options=P({},ce,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&U&&se&&(se=!1,function(e){for(var t=document.querySelectorAll(J),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(H)&&(ne(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return X(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(P({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new le(a):r?new oe(a):new ie(a),new G(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(X(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(X(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(X(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var o=Q(a);if(void 0!==o){var i=e.names.get(o),l=t.getGroup(a);if(i&&l&&i.size){var s=H+".g"+a+'[id="'+o+'"]',c="";void 0!==i&&i.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+l+s+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),ue=/(a)(d)/gi,fe=function(e){return String.fromCharCode(e+(e>25?39:97))};function me(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=fe(t%52)+n;return(fe(t%52)+n).replace(ue,"$1-$2")}var pe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},he=function(e){return pe(5381,e)};function ge(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(D(n)&&!B(n))return!1}return!0}var ye=he("5.3.3"),ve=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ge(e),this.componentId=t,this.baseHash=pe(ye,t),this.baseStyle=n,de.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var o=Me(this.rules,e,t,n).join(""),i=me(pe(this.baseHash,o)>>>0);if(!t.hasNameForId(r,i)){var l=n(o,"."+i,void 0,r);t.insertRules(r,i,l)}a.push(i),this.staticRulesId=i}else{for(var s=this.rules.length,c=pe(this.baseHash,n.hash),d="",u=0;u<s;u++){var f=this.rules[u];if("string"==typeof f)d+=f;else if(f){var m=Me(f,e,t,n),p=Array.isArray(m)?m.join(""):m;c=pe(c,p+u),d+=p}}if(d){var h=me(c>>>0);if(!t.hasNameForId(r,h)){var g=n(d,"."+h,void 0,r);t.insertRules(r,h,g)}a.push(h)}}return a.join(" ")},e}(),be=/^\s*\/\/.*$/gm,ke=[":","[",".","#"];function we(e){var t,n,r,a,o=void 0===e?j:e,i=o.options,l=void 0===i?j:i,s=o.plugins,c=void 0===s?z:s,d=new T(l),u=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,a,o,i,l,s,c,d,u){switch(n){case 1:if(0===d&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(a[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){u.push(e)})),m=function(e,r,o){return 0===r&&-1!==ke.indexOf(o[n.length])||o.match(a)?e:"."+t};function p(e,o,i,l){void 0===l&&(l="&");var s=e.replace(be,""),c=o&&i?i+" "+o+" { "+s+" }":s;return t=l,n=o,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),d(i||!o?"":o,c)}return d.use([].concat(c,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(n)>0&&(a[0]=a[0].replace(r,m))},f,function(e){if(-2===e){var t=u;return u=[],t}}])),p.hash=c.length?c.reduce((function(e,t){return t.name||W(15),pe(e,t.name)}),5381).toString():"",p}var Ee=i.default.createContext(),xe=(Ee.Consumer,i.default.createContext()),Se=(xe.Consumer,new de),Ce=we();function Ne(){return(0,i.useContext)(Ee)||Se}function Te(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],a=Ne(),o=(0,i.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,i.useMemo)((function(){return we({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return(0,i.useEffect)((function(){N()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]),i.default.createElement(Ee.Provider,{value:o},i.default.createElement(xe.Provider,{value:l},e.children))}var Oe=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ce);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return W(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Ce),this.name+e.hash},e}(),Ae=/([A-Z])/,Re=/([A-Z])/g,Le=/^ms-/,Ie=function(e){return"-"+e.toLowerCase()};function _e(e){return Ae.test(e)?e.replace(Re,Ie).replace(Le,"-ms-"):e}var Pe=function(e){return null==e||!1===e||""===e};function Me(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)""!==(a=Me(e[i],t,n,r))&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}return Pe(e)?"":B(e)?"."+e.styledComponentId:D(e)?"function"!=typeof(s=e)||s.prototype&&s.prototype.isReactComponent||!t?e:Me(e(t),t,n,r):e instanceof Oe?n?(e.inject(n,r),e.getName(r)):e:$(e)?function e(t,n){var r,a,o=[];for(var i in t)t.hasOwnProperty(i)&&!Pe(t[i])&&(Array.isArray(t[i])&&t[i].isCss||D(t[i])?o.push(_e(i)+":",t[i],";"):$(t[i])?o.push.apply(o,e(t[i],i)):o.push(_e(i)+": "+(r=i,(null==(a=t[i])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in O?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(o,["}"]):o}(e):e.toString();var s}var $e=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return D(e)||$(e)?$e(Me(M(z,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:$e(Me(M(e,n)))}new Set;var je=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function Fe(e){return e.replace(je,"-").replace(De,"")}function Be(e){return"string"==typeof e&&!0}var He=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ue=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function qe(e,t,n){var r=e[n];He(t)&&He(r)?We(r,t):e[n]=t}function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(He(i))for(var l in i)Ue(l)&&qe(e,i[l],l)}return e}var Ge=i.default.createContext();Ge.Consumer;var Ve={};function Ye(e,t,n){var r=B(e),a=!Be(e),o=t.attrs,l=void 0===o?z:o,s=t.componentId,c=void 0===s?function(e,t){var n="string"!=typeof e?"sc":Fe(e);Ve[n]=(Ve[n]||0)+1;var r=n+"-"+function(e){return me(he(e)>>>0)}("5.3.3"+n+Ve[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):s,d=t.displayName,u=void 0===d?function(e){return Be(e)?"styled."+e:"Styled("+F(e)+")"}(e):d,f=t.displayName&&t.componentId?Fe(t.displayName)+"-"+t.componentId:t.componentId||c,m=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,p=t.shouldForwardProp;r&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(n,r,a){return e.shouldForwardProp(n,r,a)&&t.shouldForwardProp(n,r,a)}:e.shouldForwardProp);var h,g=new ve(n,f,r?e.componentStyle:void 0),y=g.isStatic&&0===l.length,v=function(e,t){return function(e,t,n,r){var a=e.attrs,o=e.componentStyle,l=e.defaultProps,s=e.foldedComponentIds,c=e.shouldForwardProp,d=e.styledComponentId,u=e.target,f=function(e,t,n){void 0===e&&(e=j);var r=P({},t,{theme:e}),a={};return n.forEach((function(e){var t,n,o,i=e;for(t in D(i)&&(i=i(r)),i)r[t]=a[t]="className"===t?(n=a[t],o=i[t],n&&o?n+" "+o:n||o):i[t]})),[r,a]}(function(e,t,n){return void 0===n&&(n=j),e.theme!==n.theme&&e.theme||t||n.theme}(t,(0,i.useContext)(Ge),l)||j,t,a),m=f[0],p=f[1],h=function(e,t,n,r){var a=Ne(),o=(0,i.useContext)(xe)||Ce;return t?e.generateAndInjectStyles(j,a,o):e.generateAndInjectStyles(n,a,o)}(o,r,m),g=n,y=p.$as||t.$as||p.as||t.as||u,v=Be(y),b=p!==t?P({},t,{},p):t,k={};for(var w in b)"$"!==w[0]&&"as"!==w&&("forwardedAs"===w?k.as=b[w]:(c?c(w,R,y):!v||R(w))&&(k[w]=b[w]));return t.style&&p.style!==t.style&&(k.style=P({},t.style,{},p.style)),k.className=Array.prototype.concat(s,d,h!==d?h:null,t.className,p.className).filter(Boolean).join(" "),k.ref=g,(0,i.createElement)(y,k)}(h,e,t,y)};return v.displayName=u,(h=i.default.forwardRef(v)).attrs=m,h.componentStyle=g,h.displayName=u,h.shouldForwardProp=p,h.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):z,h.styledComponentId=f,h.target=r?e.target:e,h.withComponent=function(e){var r=t.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["componentId"]),o=r&&r+"-"+(Be(e)?e:Fe(F(e)));return Ye(e,P({},a,{attrs:m,componentId:o}),n)},Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?We({},e.defaultProps,t):t}}),h.toString=function(){return"."+h.styledComponentId},a&&_()(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),h}var Ke,Xe=function(e){return function e(t,n,r){if(void 0===r&&(r=j),!(0,S.isValidElementType)(n))return W(1,String(n));var a=function(){return t(n,r,ze.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,n,P({},r,{},a))},a.attrs=function(a){return e(t,n,P({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},a}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Xe[e]=Xe(e)})),Ke=function(e,t){this.rules=e,this.componentId=t,this.isStatic=ge(e),de.registerId(this.componentId+1)}.prototype,Ke.createStyles=function(e,t,n,r){var a=r(Me(this.rules,t,n,r).join(""),""),o=this.componentId+e;n.insertRules(o,o,a)},Ke.removeStyles=function(e,t){t.clearRules(this.componentId+e)},Ke.renderStyles=function(e,t,n,r){e>2&&de.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},function(){var e=function(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=re();return"<style "+[n&&'nonce="'+n+'"',H+'="true"','data-styled-version="5.3.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?W(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return W(2);var n=((t={})[H]="",t["data-styled-version"]="5.3.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=re();return r&&(n.nonce=r),[i.default.createElement("style",P({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new de({isServer:!0}),this.sealed=!1}.prototype;e.collectStyles=function(e){return this.sealed?W(2):i.default.createElement(Te,{sheet:this.instance},e)},e.interleaveWithNodeStream=function(e){return W(3)}}();const Qe=Xe,Ze=Qe.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({requiresAltMenuSpacing:e})=>e?"112px":"142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`,Je="On This Page",et={event:"collapse",name:"onclick",type:"click",text:Je},tt=({items:e,firstElementId:t,focusFirstFocusableElement:n=!1})=>{const r=(0,i.useRef)(null),[a,o]=(0,i.useState)(!1),[l,s]=(0,i.useState)(!1),[c,u]=(0,i.useState)(""),[f,m]=(0,i.useState)(!1),h=k("(max-width: 991px)"),g=h?110:142,y=()=>{var n;const o=window.scrollY;(null===(n=document.getElementById(t))||void 0===n?void 0:n.getBoundingClientRect().top)>=0&&(r.current.classList.remove("sticky"),u("")),o>r.current.getBoundingClientRect().top&&r.current.classList.add("sticky");let i="";const l=a?g+103:103;null==e||e.forEach((({targetIdName:e})=>{const t=document.getElementById(e),n=(null==t?void 0:t.getBoundingClientRect().top)-l,r=(null==t?void 0:t.getBoundingClientRect().bottom)-l;n<0&&r>0&&(i=e)})),u(i)};(0,i.useEffect)((()=>{(()=>{const e=document.getElementById("asu-header")||document.getElementById("headerContainer")||document.getElementById("asuHeader");o(!!e)})(),document.getElementById("degreeDetailPageContainer")&&s(!0)}),[]),(0,i.useEffect)((()=>{var e;return null===(e=window)||void 0===e||e.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)}),[a]);return i.default.createElement(Ze,{requiresAltMenuSpacing:l,ref:r,className:`uds-anchor-menu uds-anchor-menu-expanded-lg ${a?"with-header ":""}mb-4`,style:f?{borderBottom:0}:{}},i.default.createElement("div",{className:"container-xl uds-anchor-menu-wrapper"},h?i.default.createElement("button",{className:(f?"show-menu ":"")+"mobile-menu-toggler",type:"button",onClick:()=>{d({...et,action:f?"close":"open"}),m((e=>!e))},"data-toggle":"collapse","data-target":"#collapseAnchorMenu","aria-controls":"collapseAnchorMenu"},i.default.createElement("h4",null,Je,":",i.default.createElement("i",{className:"fas fa-chevron-down"}))):i.default.createElement("h4",null,Je,":"),i.default.createElement("div",{"data-testid":"anchor-menu-container",id:"collapseAnchorMenu",className:p()("card","card-body","collapse",{show:f})},i.default.createElement("nav",{"data-testid":"anchor-menu",className:"nav","aria-label":Je},null==e?void 0:e.map((e=>i.default.createElement(x,{"data-testid":`anchor-item-${e.targetIdName}`,key:e.targetIdName,classes:["nav-link",c===e.targetIdName?"active":""],ariaLabel:e.text,label:e.text,icon:e.icon,onClick:()=>(e=>{var t,o;const i=window.scrollY-(a?g+100:100),l=h?410:90;let s=(null===(t=document.getElementById(e))||void 0===t?void 0:t.getBoundingClientRect().top)+i;var c;r.current.classList.contains("sticky")||(s-=l),n&&(null===(o=((c=`#${e}`)?document.querySelector(c):document).querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||void 0===o||o.focus()),window.scrollTo({top:s,behavior:"smooth"})})(e.targetIdName)})))))))};tt.propTypes={items:r().arrayOf(r().shape({text:r().string.isRequired,targetIdName:r().string.isRequired,icon:r().arrayOf(r().string)})).isRequired,firstElementId:r().string.isRequired,focusFirstFocusableElement:r().bool};var nt,rt=(nt=function(e,t){return nt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},nt(e,t)},function(e,t){function n(){this.constructor=e}nt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),at=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return rt(t,e),t}(Error);function ot(e,t){if(!e)throw new at(t)}function it(e){var t=Object.entries(e).filter((function(e){return null!=e[1]})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var lt=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),st=function(){return st=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},st.apply(this,arguments)},ct=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))},dt=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ft=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},mt=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},pt=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function ht(e,t,n){var r=t.height,a=t.width,o=ut(t,["height","width"]),i=st({height:r,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),l=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var s=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(s),n(l))}catch(e){console.error(e)}}),1e3);return l}const gt=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,a=n.windowHeight,o=void 0===a?400:a,i=n.windowPosition,l=void 0===i?"windowCenter":i,s=n.windowWidth,c=void 0===s?550:s;ht(e,st({height:o,width:c},"windowCenter"===l?mt(c,o):pt(c,o)),r)},t.handleClick=function(e){return ct(t,void 0,void 0,(function(){var t,n,r,a,o,i,l,s,c,d;return dt(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,a=t.networkLink,o=t.onClick,i=t.url,l=t.openShareDialogOnClick,s=t.opts,c=a(i,s),r?[2]:(e.preventDefault(),n?(d=n(),ft(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return l&&this.openShareDialog(c),o&&o(e,c),[2]}}))}))},t}return lt(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,a=e.disabledStyle,o=e.forwardedRef,l=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),c=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,ut(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=p()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),f=st(st(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),r&&a);return i.default.createElement("button",st({},d,{"aria-label":d["aria-label"]||l,className:u,onClick:this.handleClick,ref:o,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(i.Component);var yt=function(){return yt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},yt.apply(this,arguments)};const vt=function(e,t,n,r){function a(a,o){var l=n(a),s=yt({},a);return Object.keys(l).forEach((function(e){delete s[e]})),i.default.createElement(gt,yt({},r,s,{forwardedRef:o,networkName:e,networkLink:t,opts:n(a)}))}return a.displayName="ShareButton-"+e,(0,i.forwardRef)(a)},bt=vt("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return ot(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+it({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});var kt=function(){return kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},kt.apply(this,arguments)};function wt(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,a=t.iconFillColor,o=t.round,l=t.size,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return i.default.createElement("svg",kt({viewBox:"0 0 64 64",width:l,height:l},s),o?i.default.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):i.default.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),i.default.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}const Et=wt({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),xt=vt("twitter",(function(e,t){var n=t.title,r=t.via,a=t.hashtags,o=void 0===a?[]:a,i=t.related,l=void 0===i?[]:i;return ot(e,"twitter.url"),ot(Array.isArray(o),"twitter.hashtags is not an array"),ot(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+it({url:e,text:n,via:r,hashtags:o.length>0?o.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),St=wt({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"}),Ct=vt("email",(function(e,t){var n=t.subject,r=t.body,a=t.separator;return"mailto:"+it({subject:n,body:r?r+a+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),Nt=wt({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),Tt=vt("linkedin",(function(e,t){var n=t.title,r=t.summary,a=t.source;return ot(e,"linkedin.url"),"https://linkedin.com/shareArticle"+it({url:e,mini:"true",title:n,summary:r,source:a})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),Ot=wt({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});function At(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function Rt(e,t){return void 0===e&&(e=""),void 0===t&&(t=undefined),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var Lt="object"==typeof window&&window.Element||function(){};r().oneOfType([r().string,r().func,function(e,t,n){if(!(e[t]instanceof Lt))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r().shape({current:r().any})]);var It=r().oneOfType([r().func,r().string,r().shape({$$typeof:r().symbol,render:r().func}),r().arrayOf(r().oneOfType([r().func,r().string,r().shape({$$typeof:r().symbol,render:r().func})]))]);"undefined"==typeof window||!window.document||window.document.createElement;var _t=["className","cssModule","active","tag"],Pt={tag:It,active:r().bool,className:r().string,cssModule:r().object},Mt=function(e){var t=e.className,n=e.cssModule,r=e.active,a=e.tag,o=At(e,_t),l=Rt(p()(t,!!r&&"active","breadcrumb-item"),n);return i.default.createElement(a,w({},o,{className:l,"aria-current":r?"page":void 0}))};Mt.propTypes=Pt,Mt.defaultProps={tag:"li"};const $t=Mt;var zt=["className","listClassName","cssModule","children","tag","listTag","aria-label"],jt={tag:It,listTag:It,className:r().string,listClassName:r().string,cssModule:r().object,children:r().node,"aria-label":r().string},Dt=function(e){var t=e.className,n=e.listClassName,r=e.cssModule,a=e.children,o=e.tag,l=e.listTag,s=e["aria-label"],c=At(e,zt),d=Rt(p()(t),r),u=Rt(p()("breadcrumb",n),r);return i.default.createElement(o,w({},c,{className:d,"aria-label":s}),i.default.createElement(l,{className:u},a))};Dt.propTypes=jt,Dt.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};const Ft=Dt,Bt=Qe.div`
  &.news-container h2 {
    font-size: 48px;
  }

  &.event-container h2 {
    font-size: 40px;
  }

  &.news-container img,
  &.event-container img {
    width: 100%;
    max-width: fit-content;
  }

  &.wrapper-container h4 {
    margin-top: 0;
  }

  &.wrapper-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10%;
  }

  &.event-container.wrapper-container {
    max-width: 1500px;
  }

  &.news-container {
    background: #fff;
  }

  ol.breadcrumb {
    padding: 0;
    margin: 0;
  }

  ol.breadcrumb > li {
    margin-bottom: 0;
  }

  .article-social-media {
    margin-bottom: 24px;
  }

  .react-share__ShareButton {
    margin-right: 12px;
  }

  i.news-date {
    display: inline-block;
    margin-bottom: 24px;
  }

  .highlight-gold {
    box-shadow: -0.15em 0 0 #ffc627, 0.15em 0 0 #ffc627;
    background: #ffc627;
  }

  .author {
    display: inline-block;
    margin-top: 30px;
    margin-left: -7px;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .icon-bg {
    display: inline-block;
    position: relative;
    padding: 1px 3.5px;
    background-color: maroon;
    margin-right: 4px;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
  }

  .uds-button {
    margin-top: 17px;
    padding: 0;
  }

  .author-title {
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 11px;
    font-size: 16px;
  }

  .author-contact {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  ol.breadcrumb a {
    text-decoration: none;
  }

  i.fa-calendar,
  i.fa-map-marker-alt {
    font-size: 1.17rem;
    margin-right: 8px;
  }

  .event-author {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .event-author-title {
    margin-top: 4px;
  }

  .event-author-info {
    margin-top: 24px;
  }
`,Ht=Qe.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`,Ut=({type:e,articleUrl:t,publicationDate:n,title:r,body:a,authorEmail:o,authorName:l,authorPhone:s,authorTitle:c,breadcrumbs:d,calendarUrl:u,eventLocation:f,eventTime:m,headerImageUrl:h,registrationUrl:y,zoomUrl:v})=>{const b=p()("col","col-12",{"col-lg-8":"event"===e&&(y||v||u)});return i.default.createElement(i.default.Fragment,null,h&&"event"!==e&&i.default.createElement("div",{"data-testid":"uds-hero",className:"uds-hero uds-hero-md",style:{backgroundImage:`linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${h})`}}),i.default.createElement(Bt,{className:`container ${e}-container wrapper-container`},d&&i.default.createElement("div",{className:"row pt-4","data-testid":"breadcrumbs"},i.default.createElement("div",{className:"col col-12"},i.default.createElement(Ft,{listClassName:"breadcrumb"},d.map((e=>(e=>e.active?i.default.createElement($t,{active:!0,tag:"li",className:"breadcrumb-item"},i.default.createElement($t,{tag:"a",href:e.url},e.title)):i.default.createElement($t,{tag:"li",className:"breadcrumb-item"},i.default.createElement($t,{tag:"a",href:e.url},e.title)))(e)))))),i.default.createElement("div",{className:"row pb-2 pt-3"},i.default.createElement("div",{className:b},i.default.createElement("h2",{"data-testid":"title"},r)),"event"===e&&i.default.createElement("div",{className:"col col-lg-4 col-xs-12"},(y||v)&&(y?i.default.createElement("div",{className:"card-button uds-button"},i.default.createElement(x,{color:"maroon",href:y,label:"Register"})):i.default.createElement("div",{className:"card-button uds-button"},i.default.createElement(x,{color:"maroon",href:v,label:"Attend on Zoom"}))),u&&i.default.createElement("div",{className:"card-button uds-button"},i.default.createElement(x,{color:"gray",size:"small",href:u,label:"Add to calendar"})))),"event"===e?i.default.createElement("div",{className:"row row-spaced pt-3 mb-2"},m&&i.default.createElement("div",{className:"col col-lg-4 col-md-6 col-sm-12"},i.default.createElement("h4",null,i.default.createElement("i",{className:"far fa-calendar"}),"Date and time:"),i.default.createElement("div",{dangerouslySetInnerHTML:g(m)})),(y&&v||f)&&i.default.createElement("div",{className:"col col-12 col-lg-4 col-md-6"},i.default.createElement("h4",null,i.default.createElement("i",{className:"fas fa-map-marker-alt"}),"Location:"),i.default.createElement("div",{dangerouslySetInnerHTML:g(f)}),y&&v&&i.default.createElement("a",{href:v},"Attend on Zoom"))):i.default.createElement("div",{className:"row row-spaced pt-2"},i.default.createElement("div",{className:"col col-12"},i.default.createElement("div",{className:"article-social-media"},i.default.createElement(bt,{url:t,quote:r},i.default.createElement(Et,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})),i.default.createElement(xt,{url:t,quote:r},i.default.createElement(St,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})),i.default.createElement(Tt,{url:t,quote:r},i.default.createElement(Ot,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}}))),n&&i.default.createElement("i",{className:"news-date"},n))),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col col-12"},i.default.createElement("p",{dangerouslySetInnerHTML:g(a),"data-testid":"body"}))),"news"===e&&i.default.createElement("div",{className:"row pb-2","data-testid":"author-info"},i.default.createElement("div",{className:"col col-12"},i.default.createElement("div",{className:"author highlight-gold"},l),c&&i.default.createElement("div",{className:"author-title"},c),o&&i.default.createElement("div",{className:"author-contact"},i.default.createElement("span",{className:"icon-bg"},i.default.createElement("i",{className:"fas fa-envelope"})),i.default.createElement("a",{href:`mailto: ${o}`},o)),s&&i.default.createElement("div",{className:"author-contact"},i.default.createElement("span",{className:"icon-bg"},i.default.createElement("i",{className:"fas fa-phone"})),i.default.createElement("a",{href:`tel: ${s}`},s)))),"event"===e&&i.default.createElement(Ht,{className:"row row-spaced mt-3 pt-6 pb-2 event-info","data-testid":"event-info"},i.default.createElement("div",{className:"col col-lg-4 col-md-6 col-12"},i.default.createElement("h4",null,"For more information contact:"),i.default.createElement("div",{className:"event-author"},l),i.default.createElement("div",{className:"event-author-title"},c),(o||s)&&i.default.createElement("div",{className:"event-author-info"},o&&i.default.createElement("div",null,i.default.createElement("a",{href:`mailto: ${o}`},o)),s&&i.default.createElement("div",null,i.default.createElement("a",{href:`tel: ${s}`},s)))),i.default.createElement("div",{className:"col col-lg-4 col-md-6 col-12"},i.default.createElement("h4",null,"Share this event:"),i.default.createElement("div",{className:"article-social-media"},i.default.createElement(bt,{url:t,quote:r},i.default.createElement(Et,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})),i.default.createElement(xt,{url:t,quote:r},i.default.createElement(St,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})),i.default.createElement(Ct,{url:o,quote:r},i.default.createElement(Nt,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})),i.default.createElement(Tt,{url:t,quote:r},i.default.createElement(Ot,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})))))))};Ut.propTypes={type:r().oneOf(["event","news"]),articleUrl:r().string.isRequired,publicationDate:r().string.isRequired,title:r().string.isRequired,body:r().string.isRequired,authorEmail:r().string,authorName:r().string.isRequired,authorPhone:r().string,authorTitle:r().string,breadcrumbs:r().arrayOf(r().shape({title:r().string,url:r().string,active:r().bool})),calendarUrl:r().string,headerImageUrl:r().string,eventLocation:r().string,eventTime:r().string,registrationUrl:r().string,zoomUrl:r().string},Ut.defaultProps={type:"news",authorEmail:void 0,authorPhone:void 0,authorTitle:void 0,breadcrumbs:void 0,calendarUrl:void 0,headerImageUrl:void 0,eventLocation:void 0,eventTime:void 0,registrationUrl:void 0,zoomUrl:void 0};const qt={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},Wt=({color:e,icon:t,innerRef:n,onClick:r,size:a,cardTitle:o})=>i.default.createElement("button",{type:"button",className:`btn btn-circle btn-circle-alt-${e} ${"large"===a&&"btn-circle-large"}`,ref:n,onClick:()=>{return e=`${null==t?void 0:t[1]} icon`,d({...qt,text:e,section:o}),void(null==r||r());var e},"aria-label":"Close"},i.default.createElement("i",{className:`${null==t?void 0:t[0]} fa-${null==t?void 0:t[1]}`}));Wt.propTypes={color:r().oneOf(["white","gray","black"]),icon:r().arrayOf(r().string),innerRef:r().oneOfType([r().object,r().func,r().string]),onClick:r().func,cardTitle:r().string,size:r().oneOf(["large","small"])},Wt.defaultProps={color:"gray",icon:void 0,innerRef:void 0,onClick:void 0,size:"small",cardTitle:""};const Gt={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},Vt=({label:e,cardTitle:t,ariaLabel:n,color:r,disabled:a,element:o,innerRef:l,href:s,onClick:c,...u})=>{const f=p()("btn","btn-tag",{"btn-tag-alt-white":"white"===r,"btn-tag-alt-gray":"gray"===r,"btn-tag-alt-dark":"dark"===r,disabled:a});let m=o;return s&&"button"===o&&(m="a"),i.default.createElement(m,w({type:"button"===m&&c?"button":void 0},u,{className:f,href:s,ref:l,onClick:()=>(d({...Gt,text:e,section:t}),void(null==c||c())),"aria-label":n}),e)};Vt.propTypes={label:r().string,cardTitle:r().string,ariaLabel:r().string,color:r().oneOf(["white","gray","dark"]),disabled:r().bool,element:r().oneOfType([r().func,r().string,r().shape({$$typeof:r().symbol,render:r().func}),r().arrayOf(r().oneOfType([r().func,r().string,r().shape({$$typeof:r().symbol,render:r().func})]))]),href:r().string,innerRef:r().oneOfType([r().object,r().func,r().string]),onClick:r().func},Vt.defaultProps={label:"",cardTitle:"",ariaLabel:void 0,color:"gray",disabled:void 0,element:"button",href:void 0,innerRef:void 0,onClick:void 0};const Yt=Qe.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`,Kt={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},Xt=({type:e,width:t,horizontal:n,image:r,imageAltText:a,title:o,icon:l,body:s,eventFormat:c,eventLocation:d,eventTime:u,buttons:f,linkLabel:m,linkUrl:p,tags:h})=>i.default.createElement(Qt,{type:e,width:t,horizontal:n,image:r,imageAltText:a,title:o,icon:l,body:s,eventFormat:c,eventLocation:d,eventTime:u,buttons:f,linkLabel:m,linkUrl:p,tags:h});Xt.propTypes={type:r().oneOf(["default","degree","event","news","story"]),width:r().oneOf(["25%","50%","75%","100%"]),horizontal:r().bool,title:r().string.isRequired,icon:r().arrayOf(r().string),body:r().string,eventFormat:r().oneOf(["stack","inline"]),eventLocation:r().string,eventTime:r().string,image:r().string,imageAltText:r().string,buttons:r().arrayOf(r().shape({ariaLabel:r().string,color:r().oneOf(["gold","maroon","gray","dark"]),icon:r().arrayOf(r().string),href:r().string,label:r().string,onClick:r().func,size:r().oneOf(["default","small","xsmall"]),target:r().oneOf(["_blank","_self","_top","_parent"])})),linkLabel:r().string,linkUrl:r().string,tags:r().arrayOf(r().shape({ariaLabel:r().string,color:r().oneOf(["white","gray","dark"]),href:r().string,label:r().string,onClick:r().func}))},Xt.defaultProps={type:"default",width:"100%",horizontal:!1,body:void 0,eventFormat:"stack",eventTime:void 0,eventLocation:void 0,icon:void 0,image:void 0,imageAltText:void 0,buttons:void 0,linkLabel:void 0,linkUrl:void 0,tags:void 0};const Qt=({type:e,width:t,horizontal:n,image:r,imageAltText:a,title:o,icon:l,body:s,eventFormat:c,eventLocation:d,eventTime:u,buttons:f,linkLabel:m,linkUrl:h,tags:g})=>{const y=p()("card","cards-components",{"card-degree":"degree"===e,"card-event":"event"===e,"card-story":"story"===e,[`w-${t.replace("%","")}`]:"100%"!==t,"card-horizontal":n});return i.default.createElement(i.default.Fragment,null,i.default.createElement(Yt,{className:y,"data-testid":"card-container"},!!r&&i.default.createElement("img",{className:"card-img-top",src:r,alt:a,"data-testid":"card-image"}),!r&&l&&i.default.createElement("i",{className:`${null==l?void 0:l[0]} fa-${null==l?void 0:l[1]} fa-2x card-icon-top`,"data-testid":"card-icon"}),n?i.default.createElement("div",{className:"card-content-wrapper"},i.default.createElement(Zt,{type:e,body:s,eventFormat:c,eventLocation:d,eventTime:u,title:o,buttons:f,linkLabel:m,linkUrl:h,tags:g})):i.default.createElement(Zt,{type:e,body:s,eventFormat:c,eventLocation:d,eventTime:u,title:o,buttons:f,linkLabel:m,linkUrl:h,tags:g})))};Qt.propTypes={type:r().oneOf(["default","degree","event","news","story"]),width:r().oneOf(["25%","50%","75%","100%"]),horizontal:r().bool,title:r().string.isRequired,icon:r().arrayOf(r().string),body:r().string,eventFormat:r().oneOf(["stack","inline"]),eventLocation:r().string,eventTime:r().string,image:r().string,imageAltText:r().string,buttons:r().arrayOf(r().shape({ariaLabel:r().string,color:r().oneOf(["gold","maroon","gray","dark"]),icon:r().arrayOf(r().string),href:r().string,label:r().string,onClick:r().func,size:r().oneOf(["default","small","xsmall"]),target:r().oneOf(["_blank","_self","_top","_parent"])})),linkLabel:r().string,linkUrl:r().string,tags:r().arrayOf(r().shape({ariaLabel:r().string,color:r().oneOf(["white","gray","dark"]),href:r().string,label:r().string,onClick:r().func}))},Qt.defaultProps={type:"default",width:"100%",horizontal:!1,body:"",eventFormat:"stack",eventTime:"",eventLocation:"",icon:void 0,image:"",imageAltText:"",buttons:void 0,linkLabel:void 0,linkUrl:void 0,tags:void 0};const Zt=({type:e,body:t,eventFormat:n,eventLocation:r,eventTime:a,title:o,buttons:l,linkLabel:s,linkUrl:c,tags:u})=>{return i.default.createElement(i.default.Fragment,null,!!o&&i.default.createElement("div",{className:"card-header","data-testid":"card-title"},i.default.createElement("h3",{className:"card-title"},o)),!!t&&i.default.createElement("div",{className:"card-body","data-testid":"card-body"},i.default.createElement("div",{dangerouslySetInnerHTML:g(t)})),"event"===e&&(a||r)&&i.default.createElement(Jt,{eventFormat:n,eventTime:a,eventLocation:r}),l&&i.default.createElement("div",{className:"card-buttons"},l.map((e=>i.default.createElement("div",{className:"card-button","data-testid":"card-button",key:`${e.label}-${e.href}`},i.default.createElement(x,{ariaLabel:e.ariaLabel,color:e.color,icon:e.icon,href:e.href,label:e.label,onClick:e.onClick,size:e.size,target:e.target,cardTitle:o}))))),c&&s&&i.default.createElement("div",{className:"card-link","data-testid":"card-link"},i.default.createElement("a",{href:(f=c,f.startsWith("https://")||f.startsWith("http://")||!/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(f)?f:`mailto:${f}`),onClick:()=>d({...Kt,section:o,text:s})},s)),u&&i.default.createElement("div",{className:"card-tags","data-testid":"card-tags"},u.map((e=>i.default.createElement(Vt,{key:`${e.label}-${e.href}`,ariaLabel:e.ariaLabel,color:e.color,href:e.href,label:e.label,onClick:e.onClick,cardTitle:o})))));var f};Zt.propTypes={type:r().oneOf(["default","degree","event","news","story"]),body:r().string,eventFormat:r().oneOf(["stack","inline"]),eventLocation:r().string,eventTime:r().string,title:r().string.isRequired,buttons:r().arrayOf(r().shape({ariaLabel:r().string,color:r().oneOf(["gold","maroon","gray","dark"]),icon:r().arrayOf(r().string),href:r().string,label:r().string,onClick:r().func,size:r().oneOf(["default","small","xsmall"]),target:r().oneOf(["_blank","_self","_top","_parent"])})),linkLabel:r().string,linkUrl:r().string,tags:r().arrayOf(r().shape({ariaLabel:r().string,color:r().oneOf(["white","gray","dark"]),href:r().string,label:r().string,onClick:r().func}))},Zt.defaultProps={type:"default",body:"",eventFormat:"stack",eventLocation:"",eventTime:"",buttons:void 0,linkLabel:void 0,linkUrl:void 0,tags:void 0};const Jt=({eventFormat:e,eventTime:t,eventLocation:n})=>"inline"===e?i.default.createElement("div",{className:"card-event-details"},t&&i.default.createElement("div",{className:"card-event-icons"},i.default.createElement("div",null,i.default.createElement("i",{className:"far fa-calendar"})),i.default.createElement("div",{dangerouslySetInnerHTML:g(t)})),n&&i.default.createElement("div",{className:"card-event-icons"},i.default.createElement("div",null,i.default.createElement("i",{className:"fas fa-map-marker-alt"})),i.default.createElement("div",{dangerouslySetInnerHTML:g(n)}))):i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("div",{className:"card-event-details"},i.default.createElement("div",{className:"card-event-icons"},i.default.createElement("div",null,i.default.createElement("i",{className:"far fa-calendar"})),i.default.createElement("div",{dangerouslySetInnerHTML:g(t)}))),n&&i.default.createElement("div",{className:"card-event-details"},i.default.createElement("div",{className:"card-event-icons"},i.default.createElement("div",null,i.default.createElement("i",{className:"fas fa-map-marker-alt"})),i.default.createElement("span",null,i.default.createElement("div",{dangerouslySetInnerHTML:g(n)})))));Jt.propTypes={eventFormat:r().oneOf(["stack","inline"]),eventLocation:r().string,eventTime:r().string},Jt.defaultProps={eventFormat:"stack",eventLocation:"",eventTime:""};const en=()=>{const[e,t]=(0,i.useState)(),[n,r]=(0,i.useState)(!1),[a,o]=(0,i.useState)(!1),[l,s]=(0,i.useState)("");return(0,i.useEffect)((()=>{l&&(()=>{o(null),r(!0);try{fetch(l).then((e=>e.json())).then((e=>{t(e),r(!1)})).catch((e=>{o(e),r(!1)}))}catch(e){o(e)}})()}),[l]),[{data:e,loading:n,error:a},s]},tn=Qe.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 3px;
    border: 3px solid #1b1b1b;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1b1b1b transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,nn=()=>i.default.createElement(tn,null,i.default.createElement("div",null),i.default.createElement("div",null),i.default.createElement("div",null),i.default.createElement("div",null)),rn=Qe.section``,an=(0,i.createContext)(null),on=({defaultProps:e,dataSource:t,noFeedText:n,renderHeader:r,renderBody:a,dataTransformer:o=(e=>e),dataFilter:l=(e=>e),maxItems:s})=>{const[{data:c,loading:d,error:u},f]=en(),[m,p]=(0,i.useState)([]),h={...e.dataSource,...t};return(0,i.useEffect)((()=>{f(null==h?void 0:h.url)}),[null==h?void 0:h.url]),(0,i.useEffect)((()=>{const e=null==c?void 0:c.nodes.map(o),n=null==e?void 0:e.filter((e=>l(e,null==t?void 0:t.filters)));p(s?null==n?void 0:n.slice(0,s):n)}),[c]),i.default.createElement(an.Provider,{value:{feeds:m}},i.default.createElement(rn,null,r,u?i.default.createElement("span",null,"Error, try again!"):i.default.createElement(i.default.Fragment,null,d&&!(null!=m&&m.length)&&i.default.createElement("div",{className:"text-center mt-4"},i.default.createElement(nn,null)),null!=m&&m.length?a:!d&&i.default.createElement("p",{className:"text-center"},n))))};on.propTypes={renderHeader:r().element,renderBody:r().element,maxItems:r().number,dataTransformer:r().func,dataFilter:r().func,noFeedText:r().string};const ln=r().shape({color:r().oneOf(["white","dark"]),text:r().string}),sn=r().shape({color:r().oneOf(["gold","maroon","gray","dark"]),text:r().string}),cn=r().shape({color:r().oneOf(["gold","maroon","gray","dark"]),text:r().string,size:r().string}),dn=r().shape({url:r().string,filters:r().string}),un=r().shape({header:ln,ctaButton:sn,dataSource:dn,maxItems:r().number}),fn=Qe.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`,mn=({defaultProps:e,header:t,ctaButton:n})=>{const r={...e.header,...t},a={...e.ctaButton,...n};return i.default.createElement("div",{className:"row justify-content-between align-items-center pb-6","data-testid":"feed-header"},i.default.createElement("div",{className:"col-sm-12 col-md-9"},i.default.createElement("h2",{className:`text-${r.color}`},r.text)),i.default.createElement(fn,{className:"col-sm-12 col-md-3"},i.default.createElement("a",{className:`btn btn-${a.color}`,href:a.url,onClick:()=>d({event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:r.text,text:a.text})},a.text)))};mn.propTypes={defaultProps:un,header:ln,ctaButton:sn};const pn=({children:e})=>i.default.createElement("div",{className:"row","data-testid":"feed-body"},i.default.createElement("div",{className:"col"},e));pn.propTypes={children:r().element};const hn=Qe.img`
  width: 100%;
`,gn=e=>{const t=e.type||"heading-hero";return{"heading-hero":()=>function({image:e,subTitle:t,title:n,contents:r,contentsColor:a}){const o={gold:"highlight-gold",black:"highlight-black",white:"highlight-white",undefined:""},l={black:"text-dark",white:"text-white",undefined:""};return i.default.createElement("div",{className:p()("uds-hero",{[{small:"uds-hero-sm",medium:"uds-hero-md",large:"uds-hero-lg",undefined:""}[e.size]]:e.size})},i.default.createElement(hn,{className:"hero",src:e.url,alt:e.altText,"data-testid":"hero-image"}),t&&i.default.createElement("div",{role:"doc-subtitle","data-testid":"hero-subtitle"},i.default.createElement("span",{className:p()({[l[t.color]]:t.color,[o[t.highlightColor]]:t.highlightColor})},t.text)),n&&i.default.createElement("h1",{style:{maxWidth:n.maxWidth||""},"data-testid":"hero-title"},i.default.createElement("span",{className:p()({[l[n.color]]:n.color,[o[n.highlightColor]]:n.highlightColor})},n.text)),r&&i.default.createElement("div",{"data-testid":"hero-content",className:p()("content",{[l[a]]:a})},r.map(((e,t)=>i.default.createElement("p",{key:`content-${t}`},e.text)))))}(e),"story-hero":()=>function({image:e,title:t,contents:n}){return console.log({image:e,title:t,contents:n}),i.default.createElement("div",null,"TODO: to be implemented")}(e),undefined:()=>(console.error(`the type '${t}' is not supported by the 'Hero' component.`),null)}[t]()};gn.propTypes={type:r().oneOf(["heading-hero","story-hero"]),image:l,title:s,subTitle:s,contents:r().arrayOf(s),contentsColor:r().string};const yn=(e,t,n)=>{let r=e;const a=[];for(;r<t;)r>0&&r<=n&&a.push(r),r+=1;return a},vn=({dataId:e,isClickeable:t,disabled:n,pageLinkIcon:r,selectedPage:a,onClick:o,children:l})=>i.default.createElement("li",{className:p()("page-item",{disabled:n,active:a})},t?i.default.createElement("button",{className:p()("page-link",{"page-link-icon":r}),type:"button",onClick:o,"data-testid":"page-link","data-id":e},l,a&&i.default.createElement("span",{className:"sr-only"},"(current)")):i.default.createElement("span",{className:"page-link","data-testid":"page-link"},l));vn.propTypes={isClickeable:r().bool,disabled:r().bool,pageLinkIcon:r().bool,selectedPage:r().bool,dataId:r().string,onClick:r().func,children:r().node.isRequired},vn.defaultProps={isClickeable:!1,disabled:!1,pageLinkIcon:!1,selectedPage:!1,onClick:()=>{}};const bn={event:"select",action:"click",name:"onclick",type:"pagination",region:"main content"},kn=({type:e,background:t,currentPage:n,totalPages:r,showFirstButton:a,showLastButton:o,totalNumbers:l,onChange:s})=>{const[c,u]=(0,i.useState)(null),[f,m]=(0,i.useState)(l),[h,g]=(0,i.useState)(window.innerWidth<450),[y,v]=(0,i.useState)(window.innerWidth<413),[b,k]=(0,i.useState)(!o);(0,i.useEffect)((()=>{u(n)}),[n]),window.matchMedia("(max-width: 450px)").addEventListener("change",(e=>{e.matches?(m(3),g(!0),k(!0)):(m(l),g(!1),v(!1),k(!o))})),window.matchMedia("(max-width: 413px)").addEventListener("change",(e=>v(e.matches)));const w=(e,t)=>{const n={first:1,prev:c-1,next:c+1,last:r},a=n[t]?n[t]:t;u(a),null==s||s(e,a)},E=e=>b?"":h&&"next"===e?">":h&&"prev"===e?"<":"next"===e?"Next":"Prev";return i.default.createElement("nav",{"aria-label":"Pagination","data-testid":"pagination"},i.default.createElement("ul",{className:p()("pagination","justify-content-center","pt-2","pb-2",{border:"bordered"===e,"uds-bg-gray1":"gray1"===t,"uds-bg-gray":"gray2"===t,"uds-bg-dark":"gray7"===t})},a&&i.default.createElement(vn,{dataId:"first",isClickeable:!0,disabled:1===c,onClick:e=>w(e,"first")},"First"),i.default.createElement(vn,{dataId:"prev",isClickeable:!0,disabled:1===c,pageLinkIcon:b,onClick:e=>w(e,"prev")},E("prev")),(()=>{const e=[...yn(c-(1!==n?2:0)+Math.floor(f/2),c,r),...yn(c,c+(1===n?2:1)+Math.floor(f/2),r)];return i.default.createElement(i.default.Fragment,null,!h&&1!==e[0]&&i.default.createElement(vn,null,"..."),e.map((e=>e&&i.default.createElement(vn,{dataId:"page-number",isClickeable:!0,key:e,selectedPage:c===e,onClick:t=>{(e=>{d({...bn,text:`page ${e}`})})(e),w(t,e)}},e))),!h&&e[e.length-1]!==r&&i.default.createElement(vn,null,"..."))})(),i.default.createElement(vn,{dataId:"next",isClickeable:!0,disabled:c===r,pageLinkIcon:b,onClick:e=>w(e,"next")},E("next")),o&&i.default.createElement(vn,{dataId:"last",isClickeable:!0,disabled:c===r,onClick:e=>w(e,"last")},"Last")))};kn.propTypes={type:r().oneOf(["default","bordered"]).isRequired,background:r().oneOf(["white","gray1","gray2","gray7"]).isRequired,currentPage:r().number,totalPages:r().number,showFirstButton:r().bool,showLastButton:r().bool,totalNumbers:r().number,onChange:r().func.isRequired},kn.defaultProps={currentPage:1,totalPages:10,showFirstButton:!1,showLastButton:!1,totalNumbers:3};var wn,En=wn||(wn={});function xn(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Sn(e,t){if(!e)throw new Error(t)}En.Pop="POP",En.Push="PUSH",En.Replace="REPLACE";const Cn=(0,i.createContext)(null),Nn=(0,i.createContext)(null),Tn=(0,i.createContext)({outlet:null,matches:[]});function On(){return null!=(0,i.useContext)(Nn)}function An(){return On()||Sn(!1),(0,i.useContext)(Nn).location}function Rn(){On()||Sn(!1);let{basename:e,navigator:t}=(0,i.useContext)(Cn),{matches:n}=(0,i.useContext)(Tn),{pathname:r}=An(),a=JSON.stringify(n.map((e=>e.pathnameBase))),o=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{o.current=!0})),(0,i.useCallback)((function(n,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n)return void t.go(n);let l=function(e,t,n){let r,a="string"==typeof e?xn(e):e,o=""===e||""===a.pathname?"/":a.pathname;if(null==o)r=n;else{let e=t.length-1;if(o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}r=e>=0?t[e]:"/"}let i=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?xn(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:In(r),hash:_n(a)}}(a,r);return o&&"/"!==o&&o.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}(n,JSON.parse(a),r);"/"!==e&&(l.pathname=Ln([e,l.pathname])),(i.replace?t.replace:t.push)(l,i.state)}),[e,t,a,r])}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),In=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",_n=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function Pn(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}const Mn=Qe.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`,$n=({clickPrev:e,clickNext:t})=>i.default.createElement(Mn,null,i.default.createElement("button",{className:"scroll-control-prev",type:"button",onClick:e,tabIndex:-1},i.default.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),i.default.createElement("span",{className:"sr-only"},"Previous")),i.default.createElement("button",{className:"scroll-control-next",type:"button",onClick:t,tabIndex:-1},i.default.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),i.default.createElement("span",{className:"sr-only"},"Next")));$n.propTypes={clickPrev:r().func.isRequired,clickNext:r().func.isRequired};const zn=({id:e,selected:t,title:n,selectTab:r,leftKeyPressed:a,rightKeyPressed:o})=>i.default.createElement("a",{className:"nav-item nav-link "+(t?"active":""),id:e,href:`#nav-${e}`,role:"tab","aria-controls":`nav-${e}`,"aria-selected":t,onClick:t=>r(t,e,n),onKeyDown:e=>{37===e.keyCode?a():39===e.keyCode&&o()},tabIndex:t?"":"-1"},n);zn.propTypes={id:r().string.isRequired,selected:r().bool.isRequired,title:r().string.isRequired,selectTab:r().func.isRequired,leftKeyPressed:r().func.isRequired,rightKeyPressed:r().func.isRequired};const jn=({id:e,bgColor:t,selected:n,children:r})=>n&&i.default.createElement("div",{className:`tab-pane fade show ${n?"show active":""} ${"bg-dark"===t?"text-white":""}`,id:`nav-${e}`,role:"tabpanel","aria-labelledby":`nav-${e}-tab`},r);jn.propTypes={id:r().string.isRequired,bgColor:r().string,selected:r().bool,children:r().oneOfType([r().arrayOf(r().element),r().element])};const Dn=({id:e,children:t,bgColor:n,onTabChange:r})=>{const a=i.default.Children.toArray(t),[o,l]=(0,i.useState)(a[0].props.id),[s,c]=function(e){let t=(0,i.useRef)(Pn(void 0)),n=An(),r=(0,i.useMemo)((()=>{let e=Pn(n.search);for(let n of t.current.keys())e.has(n)||t.current.getAll(n).forEach((t=>{e.append(n,t)}));return e}),[n.search]),a=Rn();return[r,(0,i.useCallback)(((e,t)=>{a("?"+Pn(e),t)}),[a])]}(),[u,f]=(0,i.useState)(!1),m=(0,i.useRef)(null),p=(0,i.useRef)(null),h=t=>{const n={};for(const e of s.entries())n[e[0]]=e[1];const r=n[e];null===r?n[e]=o:l(r),n[e]=t,c(n)};(0,i.useEffect)((()=>{l(s.get(e)||o)}),[s]),(0,i.useEffect)((()=>{s.get(e)||h(s.get(e)||o)}),[]),(0,i.useEffect)((()=>{[...m.current.querySelectorAll(".nav-item")].reduce(((e,t)=>e+t.offsetWidth),0)>=p.current.offsetWidth&&f(!0)}),[]);const[g]=(0,i.useState)(n||""),[y]=(0,i.useState)(Math.floor(1e3*Math.random()+1)),v=`tabbed-panels-${y}`,b=`nav-tabs-${y}`,k=e=>{d({event:"select",action:"click",name:"onclick",type:"carousel",region:"main content",text:e})},w=a.map((e=>i.default.cloneElement(e,{bgColor:g,selected:o===e.props.id}))),E=e=>{document.querySelector(`#${b}`).scrollBy({left:200*e,behavior:"smooth"})},x=(e,t,n)=>{d({event:"link",action:"click",name:"onclick",type:"internal link",text:n}),e.preventDefault(),h(t),r(t)},S=e=>{document.getElementById(v).querySelector(`#${e}`).focus()},C=()=>{const e=a.findIndex((e=>e.props.id===o));if(e>0){const t=a[e-1].props.id;h(t),S(t),r(t)}},N=()=>{const e=a.findIndex((e=>e.props.id===o));if(e<a.length-1){const t=a[e+1].props.id;h(t),S(t),r(t)}};let T="uds-tabbed-panels";return"bg-dark"===g&&(T+=" uds-tabbed-panels-dark"),i.default.createElement("div",{className:g,ref:p},i.default.createElement("nav",{className:T,onScroll:e=>{const t=document.querySelector(`#${v}`),n=t.querySelector(".nav-tabs"),r=e.target.scrollLeft,a=t.querySelector(".scroll-control-prev"),o=t.querySelector(".scroll-control-next"),i=n.offsetWidth+r+3>=n.scrollWidth;a.style.display=0===r?"none":"block",o.style.display=i?"none":"block"},id:v},i.default.createElement("div",{className:"nav nav-tabs",id:b,role:"tablist",ref:m},a.map((e=>i.default.createElement(zn,{id:e.props.id,title:e.props.title,selected:o===e.props.id,selectTab:x,key:e.props.id,leftKeyPressed:C,rightKeyPressed:N})))),u&&i.default.createElement($n,{clickPrev:()=>{E(-1),k("left chevron")},clickNext:()=>{E(1),k("right chevron")}})),i.default.createElement("div",{className:"tab-content",tabIndex:0,role:"tabpanel",id:"nav-tabContent"},w))};Dn.propTypes={id:r().string,children:r().arrayOf(r().element).isRequired,bgColor:r().string,onTabChange:r().func};const Fn=e=>(e||[]).join(" "),Bn=({imageSource:e=null,imageAltText:t=null,quote:n,itemStyle:r={}})=>{var a,o;return i.default.createElement("div",{className:`uds-blockquote uds-testimonial ${e?"with-image":""} ${Fn(r.containerCssClass)}`},e&&i.default.createElement("img",{src:e,alt:t,"data-testid":"testimonial-image"}),i.default.createElement("svg",{role:"presentation",viewBox:"0 0 302.87 245.82"},i.default.createElement("path",{d:"M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"})),i.default.createElement("blockquote",{style:{paddingLeft:0}},n.title&&i.default.createElement("h3",{className:"text-center","data-testid":"testimonial-title"},i.default.createElement("span",{className:Fn(r.titleCssClass)},n.title)),n.content&&i.default.createElement("p",{className:Fn(r.contentCssClass),"data-testid":"testimonial-content"},n.content),(!(null===(a=n.cite)||void 0===a||!a.name)||!(null===(o=n.cite)||void 0===o||!o.description))&&i.default.createElement("div",{className:"citation","data-testid":"testimonial-citation"},i.default.createElement("cite",{className:"name"},n.cite.name),n.cite&&i.default.createElement("cite",{className:"description"},n.cite.description))))};Bn.propTypes={quote:r().shape({title:r().string,content:r().string,cite:r().shape({name:r().string,description:r().string})}).isRequired,imageSource:r().string,imageAltText:r().string,itemStyle:r().shape({containerCssClass:r().arrayOf(r().string),titleCssClass:r().arrayOf(r().string),contentCssClass:r().arrayOf(r().string)})};const Hn={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content",text:"play button"},Un=e=>{const{type:t="video",url:n="",vttUrl:r=null,title:a="",caption:o=null,className:l=null,controls:s=!0}=e;return"youtube"===t?(({title:e="",caption:t=null,url:n="",className:r})=>i.default.createElement("div",{className:p()(`uds-video-container ${r}`,{"uds-video-with-caption":t})},i.default.createElement("div",{className:"uds-video-player youtube-video"},i.default.createElement("iframe",{title:e,src:n})),t&&i.default.createElement("figure",{"data-testid":"video-caption"},i.default.createElement("figcaption",null,t))))({url:n,title:a,caption:o,className:l}):(({url:e="",vttUrl:t,caption:n=null,title:r="",className:a,controls:o=!0})=>{const l=(0,i.useRef)();return i.default.createElement("div",{className:p()(`uds-video-container ${a}`,{"uds-video-with-caption":n})},i.default.createElement("div",{className:"uds-video-player"},i.default.createElement("video",{ref:l,title:r,onClick:e=>{d({...Hn,section:r})},playsInline:!0,controls:o||!0},i.default.createElement("source",{src:e}),i.default.createElement("track",{src:t,kind:"captions",srcLang:"en",label:"english_captions"}))),n&&i.default.createElement("figure",{"data-testid":"video-caption"},i.default.createElement("figcaption",null,n)))})({url:n,vttUrl:r,title:a,caption:o,className:l,controls:s})};Un.propTypes={type:r().oneOf(["video","youtube"]),url:r().string,vttUrl:r().string,title:r().string,className:r().string,caption:r().string,controls:r().bool};const qn=(e=>{var t={};return a.d(t,e),t})({default:()=>(react_dom__WEBPACK_IMPORTED_MODULE_1___default())});function*Wn(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function Gn(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}const Vn=(e,t,n)=>{qn.default.render(i.default.createElement(e,t),n)},Yn=({targetSelector:e,props:t})=>Vn(b,t,document.querySelector(e)),Kn=({targetSelector:e,props:t})=>Vn(tt,t,document.querySelector(e)),Xn=({targetSelector:e,props:t})=>Vn(Ut,t,document.querySelector(e)),Qn=({targetSelector:e,props:t})=>Vn(x,t,document.querySelector(e)),Zn=({targetSelector:e,props:t})=>Vn(Wt,t,document.querySelector(e)),Jn=({targetSelector:e,props:t})=>Vn(Vt,t,document.querySelector(e)),er=({targetSelector:e,props:t})=>Vn(Xt,t,document.querySelector(e)),tr=({targetSelector:e,props:t})=>Vn(kn,t,document.querySelector(e)),nr=({targetSelector:e,props:t})=>Vn(Bn,t,document.querySelector(e)),rr=({targetSelector:e,props:t})=>Vn(gn,t,document.querySelector(e)),ar=({targetSelector:e,props:t})=>Vn(Un,t,document.querySelector(e))})();var i=o.UQ,l=o.Qy,s=o.d2,c=o.zx,d=o.I,u=o.XM,f=o.Zb,m=o.H2,p=o.Ud,h=o.Mz,g=o.Fu,y=o.VM,v=o.tl,b=o.OK,k=o.g3,w=o.gc,E=o.nk,x=o.Q$,S=o.aP,C=o.XJ,N=o.Tj,T=o.W3,O=o.To,A=o.Ul,R=o.am,L=o.jI,I=o.vk,_=o.sL,P=o.GI,M=o.WC,$=o.zd,z=o.Ql,j=o.Hv,D=o.tQ,F=o.Sn,B=o.SF,H=o.CP,U=o.ib,q=o.ac;

/***/ }),

/***/ "./src/anchor-menu/edit.js":
/*!*********************************!*\
  !*** ./src/anchor-menu/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _asu_design_system_components_core_dist_libCore_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asu-design-system/components-core/dist/libCore.es */ "./node_modules/@asu-design-system/components-core/dist/libCore.es.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/anchor-menu/inspector.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */
// import Controls from './controls';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = props => {
  const {
    attributes: {
      firstElementId,
      focusFirstFocusableElement,
      itemTexts,
      itemTargets
    }
  } = props;
  const items = itemTexts.map((itemText, index) => {
    return {
      text: itemText,
      targetIdName: itemTargets[index]
    };
  });
  const args = {
    firstElementId,
    focusFirstFocusableElement,
    items
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_asu_design_system_components_core_dist_libCore_es__WEBPACK_IMPORTED_MODULE_3__.AnchorMenu, args)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/anchor-menu/inspector.js":
/*!**************************************!*\
  !*** ./src/anchor-menu/inspector.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = props => {
  const handleAddItem = () => {
    const itemTexts = [...props.attributes.itemTexts];
    const itemTargets = [...props.attributes.itemTargets];
    itemTexts.push("");
    itemTargets.push("");
    props.setAttributes({
      itemTexts
    });
  };
  const handleRemoveItem = index => {
    const itemTexts = [...props.attributes.itemTexts];
    const itemTargets = [...props.attributes.itemTargets];
    itemTexts.splice(index, 1);
    itemTargets.splice(index, 1);
    props.setAttributes({
      itemTexts
    });
    props.setAttributes({
      itemTargets
    });
  };
  const handleItemTextChange = (text, index) => {
    const itemTexts = [...props.attributes.itemTexts];
    itemTexts[index] = text;
    props.setAttributes({
      itemTexts
    });
  };
  const handleItemTargetChange = (targetIdName, index) => {
    const itemTargets = [...props.attributes.itemTargets];
    itemTargets[index] = targetIdName;
    props.setAttributes({
      itemTargets
    });
  };
  let itemFields;
  if (props.attributes.itemTexts.length) {
    itemFields = props.attributes.itemTexts.map((itemText, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        className: "anchormenu__item-text",
        placeholder: "Text for menu item",
        value: props.attributes.itemTexts[index],
        onChange: text => handleItemTextChange(text, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        className: "anchormenu__item-targetIdName",
        placeholder: "Target ID for menu item",
        value: props.attributes.itemTargets[index],
        onChange: targetIdName => handleItemTargetChange(targetIdName, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        className: "anchormenu__remove-item-text",
        icon: "no-alt",
        label: "Delete item",
        onClick: () => handleRemoveItem(index)
      }));
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("UDS AnchorMenu Items", "unityblocks")
  }, itemFields, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isDefault: true,
    onClick: handleAddItem.bind(undefined)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Item")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/anchor-menu/save.js":
/*!*********************************!*\
  !*** ./src/anchor-menu/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
const save = props => {
  const {
    attributes: {
      firstElementId,
      focusFirstFocusableElement,
      itemTexts,
      itemTargets
    }
  } = props;
  const items = itemTexts.map((itemText, index) => {
    return {
      text: itemText,
      targetIdName: itemTargets[index]
    };
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "unityblocks-anchor-menu"
  }, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), {
    "data-items": JSON.stringify(items),
    "data-firstElementId": firstElementId,
    "data-focusFirstFocusableElement": focusFirstFocusableElement
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/anchor-menu/block.json":
/*!************************************!*\
  !*** ./src/anchor-menu/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"unityblocks/anchor-menu","version":"1.0.0","title":"Unity Anchor Menu","category":"uds","keywords":["unityblocks","menu","navigation"],"icon":"menu","description":"Provide sticky menu bar to jump to anchor points on the current page.","supports":{"html":false,"align":["wide","full"]},"textdomain":"unityblocks","viewScript":["file:./frontend.js","unityblocks-anchor-menu-view-script"],"editorScript":"file:./index.js","attributes":{"itemTexts":{"type":"array","default":[]},"itemTargets":{"type":"array","default":[]},"firstElementId":{"type":"string","default":""},"focusFirstFocusableElement":{"type":"boolean","default":false}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/anchor-menu/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/anchor-menu/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/anchor-menu/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/anchor-menu/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./style.scss";

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map