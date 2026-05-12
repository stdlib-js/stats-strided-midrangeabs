"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var l=f(function(E,d){
var j=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function k(a,r,u,c){var v,n,s,t,e,i,o;if(v=r.data,n=r.accessors[0],a===1||u===0)return q(n(v,c));for(e=c,t=q(n(v,e)),s=t,o=1;o<a;o++){if(e+=u,i=q(n(v,e)),j(i))return i;i<t?t=i:i>s&&(s=i)}return(s+t)/2}d.exports=k
});var b=f(function(F,x){
var O=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist'),P=require('@stdlib/array-base-arraylike2object/dist'),R=l();function h(a,r,u,c){var v,n,s,t,e,i;if(a<=0)return NaN;if(t=P(r),t.accessorProtocol)return R(a,t,u,c);if(a===1||u===0)return m(r[c]);for(s=c,n=m(r[s]),v=n,i=1;i<a;i++){if(s+=u,e=m(r[s]),O(e))return e;e<n?n=e:e>v&&(v=e)}return(v+n)/2}x.exports=h
});var g=f(function(G,y){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=b();function A(a,r,u){return z(a,r,u,w(a,u))}y.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=g(),C=b();B(p,"ndarray",C);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
