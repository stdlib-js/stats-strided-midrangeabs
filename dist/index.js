"use strict";var f=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var l=f(function(E,d){
var j=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function k(a,r,i,c){var v,u,s,t,e,n,o;if(v=r.data,u=r.accessors[0],a===1||i===0)return q(u(v,c));for(e=c,t=q(u(v,e)),s=t,o=1;o<a;o++){if(e+=i,n=q(u(v,e)),j(n))return n;n<t?t=n:n>s&&(s=n)}return(s+t)/2}d.exports=k
});var b=f(function(F,x){
var O=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist'),P=require('@stdlib/array-base-arraylike2object/dist'),R=l();function h(a,r,i,c){var v,u,s,t,e,n;if(a<=0)return NaN;if(t=P(r),t.accessorProtocol)return R(a,t,i,c);if(a===1||i===0)return m(r[c]);for(s=c,u=m(r[s]),v=u,n=1;n<a;n++){if(s+=i,e=m(r[s]),O(e))return e;e<u?u=e:e>v&&(v=e)}return(v+u)/2}x.exports=h
});var g=f(function(G,y){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=b();function A(a,r,i){return z(a,r,i,w(a,i))}y.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=g(),C=b();B(p,"ndarray",C);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
