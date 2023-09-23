// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).snanstdevpn=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,y,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f.call(r.specifier)?f.call(t):u.call(t)}function x(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var i=e-r.length;return i<0?r:r=t?r+x(i):x(i)+r}var S=String.fromCharCode,j=isNaN,_=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,i,n,o,c,p,u,f;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",p=1,u=0;u<r.length;u++)if(l(i=r[u]))c+=i;else{if(e=void 0!==i.precision,!(i=F(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,j(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,j(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!j(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=j(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,i,n;for(t=[],n=0,i=V.exec(r);i;)(e=r.slice(n,V.lastIndex-i[0].length)).length&&t.push(e),t.push($(i)),n=V.lastIndex,i=V.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function I(r){return"string"==typeof r}function N(r){var e,t,i;if(!I(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return A.apply(null,t)}var C,O=Object.prototype,R=O.toString,Z=O.__defineGetter__,P=O.__defineSetter__,L=O.__lookupGetter__,W=O.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var G=C;function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var q="function"==typeof Math.fround?Math.fround:null;var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return B&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var D,J="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof J?J.toStringTag:"";D=U()?function(r){var e,t,i,n,a;if(null==r)return X.call(r);t=r[Y],a=Y,e=null!=(n=r)&&z.call(n,a);try{r[Y]=void 0}catch(e){return X.call(r)}return i=X.call(r),e?r[Y]=t:delete r[Y],i}:function(r){return X.call(r)};var H=D,K="function"==typeof Float32Array;var Q=Number.POSITIVE_INFINITY,rr="function"==typeof Float32Array?Float32Array:null;var er,tr="function"==typeof Float32Array?Float32Array:void 0;er=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,5e40]),t=e,r=(K&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Q}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=new er(1);var nr="function"==typeof q?q:function(r){return ir[0]=r,ir[0]};var ar=Object,or=/./;function cr(r){return"boolean"==typeof r}var sr=Boolean,lr=Boolean.prototype.toString;var pr=U();function ur(r){return"object"==typeof r&&(r instanceof sr||(pr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function fr(r){return cr(r)||ur(r)}function gr(r){return"number"==typeof r}function dr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function hr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+dr(n):dr(n)+r,i&&(r="-"+r)),r}M(fr,"isPrimitive",cr),M(fr,"isObject",ur);var wr=String.prototype.toLowerCase,yr=String.prototype.toUpperCase;function br(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!gr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=hr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=hr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===yr.call(r.specifier)?yr.call(t):wr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function vr(r){return"string"==typeof r}var mr=Math.abs,Er=String.prototype.toLowerCase,xr=String.prototype.toUpperCase,kr=String.prototype.replace,Sr=/e\+(\d)$/,jr=/e-(\d)$/,_r=/^(\d+)$/,Fr=/^(\d+)e/,Ar=/\.0$/,Vr=/\.0*e/,$r=/(\..*[^0])0*e/;function Tr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!gr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":mr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=kr.call(t,$r,"$1e"),t=kr.call(t,Vr,"e"),t=kr.call(t,Ar,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=kr.call(t,Sr,"e+0$1"),t=kr.call(t,jr,"e-0$1"),r.alternate&&(t=kr.call(t,_r,"$1."),t=kr.call(t,Fr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===xr.call(r.specifier)?xr.call(t):Er.call(t)}function Ir(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Nr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Ir(i):Ir(i)+r}var Cr=String.fromCharCode,Or=isNaN,Rr=Array.isArray;function Zr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Pr(r){var e,t,i,n,a,o,c,s,l;if(!Rr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(vr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Zr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Or(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Or(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=br(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Or(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Or(a)?String(i.arg):Cr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Tr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=hr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Nr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Gr(r){var e,t,i,n;for(t=[],n=0,i=Lr.exec(r);i;)(e=r.slice(n,Lr.lastIndex-i[0].length)).length&&t.push(e),t.push(Wr(i)),n=Lr.lastIndex,i=Lr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Mr(r){return"string"==typeof r}function qr(r){var e,t,i;if(!Mr(r))throw new TypeError(qr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Gr(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Pr.apply(null,t)}function Br(){return new Function("return this;")()}var Ur="object"==typeof self?self:null,Xr="object"==typeof window?window:null,zr="object"==typeof global?global:null,Dr="object"==typeof globalThis?globalThis:null;var Jr=function(r){if(arguments.length){if(!cr(r))throw new TypeError(qr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Br()}if(Dr)return Dr;if(Ur)return Ur;if(Xr)return Xr;if(zr)return zr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=Jr.document&&Jr.document.childNodes,Hr=Int8Array;function Kr(){return/^\s*function\s*([^(]*)/i}var Qr,re=/^\s*function\s*([^(]*)/i;M(Kr,"REGEXP",re),Qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var ee=Qr;function te(r){return"number"==typeof r}function ie(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ne(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ie(n):ie(n)+r,i&&(r="-"+r)),r}var ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function ce(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!te(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ne(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ne(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===oe.call(r.specifier)?oe.call(t):ae.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function se(r){return"string"==typeof r}var le=Math.abs,pe=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,ye=/\.0$/,be=/\.0*e/,ve=/(\..*[^0])0*e/;function me(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!te(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":le(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=fe.call(t,ve,"$1e"),t=fe.call(t,be,"e"),t=fe.call(t,ye,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fe.call(t,ge,"e+0$1"),t=fe.call(t,de,"e-0$1"),r.alternate&&(t=fe.call(t,he,"$1."),t=fe.call(t,we,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ue.call(r.specifier)?ue.call(t):pe.call(t)}function Ee(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function xe(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Ee(i):Ee(i)+r}var ke=String.fromCharCode,Se=isNaN,je=Array.isArray;function _e(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Fe(r){var e,t,i,n,a,o,c,s,l;if(!je(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(se(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=_e(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Se(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Se(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ce(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Se(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Se(a)?String(i.arg):ke(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=me(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=xe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ve(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $e(r){var e,t,i,n;for(t=[],n=0,i=Ae.exec(r);i;)(e=r.slice(n,Ae.lastIndex-i[0].length)).length&&t.push(e),t.push(Ve(i)),n=Ae.lastIndex,i=Ae.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Te(r){return"string"==typeof r}function Ie(r){var e,t,i;if(!Te(r))throw new TypeError(Ie("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$e(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Fe.apply(null,t)}function Ne(r){return null!==r&&"object"==typeof r}var Ce=function(r){if("function"!=typeof r)throw new TypeError(Ie("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!ee(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Ne);function Oe(r){var e,t,i,n;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=re.exec(i.toString()))return e[1]}return Ne(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}M(Ne,"isObjectLikeArray",Ce);var Re="function"==typeof or||"object"==typeof Hr||"function"==typeof Yr?function(r){return Oe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Oe(r).toLowerCase():e};var Ze,Pe,Le=Object.getPrototypeOf;Pe=Object.getPrototypeOf,Ze="function"===Re(Pe)?Le:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var We=Ze;function Ge(r){return null==r?null:(r=ar(r),We(r))}function Me(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===H(r))return!0;r=Ge(r)}return!1}var qe=Math.floor;function Be(r,e,t,i,n){var a,o,c,s,l,p,u,f,g,d,h,w,y,b;if(a=n,r<8){for(h=0,w=0,b=0;b<r;b++)(y=t[a])==y&&(h=nr(h+y),w+=1),a+=i;return e[0]=nr(e[0]+h),e[1]+=w,e}if(r<=128){for(o=0,c=0,s=0,l=0,p=0,u=0,f=0,g=0,w=0,d=r%8,b=0;b<r-d;b+=8)(y=t[a])==y&&(o=nr(o+y),w+=1),(y=t[a+=i])==y&&(c=nr(c+y),w+=1),(y=t[a+=i])==y&&(s=nr(s+y),w+=1),(y=t[a+=i])==y&&(l=nr(l+y),w+=1),(y=t[a+=i])==y&&(p=nr(p+y),w+=1),(y=t[a+=i])==y&&(u=nr(u+y),w+=1),(y=t[a+=i])==y&&(f=nr(f+y),w+=1),(y=t[a+=i])==y&&(g=nr(g+y),w+=1),a+=i;for(h=nr(nr(nr(o+c)+nr(s+l))+nr(nr(p+u)+nr(f+g)));b<r;b++)(y=t[a])==y&&(h=nr(h+y),w+=1),a+=i;return e[0]=nr(e[0]+h),e[1]+=w,e}return w=qe(r/2),nr(Be(w-=w%8,e,t,i,a)+Be(r-w,e,t,i,a+w*i))}var Ue=[0,0];function Xe(r,e,t,i){var n,a,o,c,s,l,p,u,f;if(r<=0)return NaN;if(1===r||0===i)return(p=t[0])==p&&r-e>0?0:NaN;if(a=i<0?(1-r)*i:0,Ue[0]=0,Ue[1]=0,Be(r,Ue,t,i,a),(c=(u=Ue[1])-e)<=0)return NaN;for(n=nr(Ue[0]/u),o=0,s=0,f=0;f<r;f++)(p=t[a])==p&&(l=nr(p-n),o=nr(o+nr(l*l)),s=nr(s+l),u+=1),a+=i;return nr(nr(o/c)-nr(nr(s/u)*nr(s/c)))}var ze=[0,0];M(Xe,"ndarray",(function(r,e,t,i,n){var a,o,c,s,l,p,u,f,g;if(r<=0)return NaN;if(1===r||0===i)return(u=t[n])==u&&r-e>0?0:NaN;if(o=n,ze[0]=0,ze[1]=0,Be(r,ze,t,i,o),(s=(f=ze[1])-e)<=0)return NaN;for(a=nr(ze[0]/f),c=0,l=0,g=0;g<r;g++)(u=t[o])==u&&(p=nr(u-a),c=nr(c+nr(p*p)),l=nr(l+p),f+=1),o+=i;return nr(nr(c/s)-nr(nr(l/f)*nr(l/s)))}));var De,Je=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Me(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Ye=De=Me(Je)?Xe:Je;const{ndarray:He}=De;var Ke=Math.sqrt;function Qe(r,e,t,i){return nr(Ke(Ye(r,e,t,i)))}return M(Qe,"ndarray",(function(r,e,t,i,n){return nr(Ke(He(r,e,t,i,n)))})),Qe}));
//# sourceMappingURL=index.js.map