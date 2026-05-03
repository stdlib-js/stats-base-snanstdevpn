"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(w,s){
var f=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/stats-base-snanvariancepn/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,n){return f(x(y(e,r,a,n)))}s.exports=j
});var q=t(function(z,v){
var m=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/stats-base-snanvariancepn/dist').ndarray,R=require('@stdlib/math-base-special-sqrt/dist');function T(e,r,a,n,l){return m(R(F(e,r,a,n,l)))}v.exports=T
});var d=t(function(A,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),E=q();_(o,"ndarray",E);p.exports=o
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=d(),i,c=b(O(__dirname,"./native.js"));g(c)?i=h:i=c;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
