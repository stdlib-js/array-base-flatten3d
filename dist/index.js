"use strict";var d=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var m=d(function(w,g){
function O(e,a,c){var o,u,s,n,v,i,r,f,t;if(u=a[2],s=a[1],n=a[0],o=[],c){for(v=0;v<u;v++)for(i=0;i<s;i++)for(r=0;r<n;r++)o.push(e[r][i][v]);return o}for(r=0;r<n;r++)for(t=e[r],i=0;i<s;i++)for(f=t[i],v=0;v<u;v++)o.push(f[v]);return o}g.exports=O
});var x=d(function(z,p){
function R(e,a,c,o,u,s){var n,v,i,r,f,t,l,q,S;if(n=a[2],v=a[1],i=a[0],S=s,c){for(r=0;r<n;r++)for(f=0;f<v;f++)for(t=0;t<i;t++)o[S]=e[t][f][r],S+=u;return o}for(t=0;t<i;t++)for(q=e[t],f=0;f<v;f++)for(l=q[f],r=0;r<n;r++)o[S]=l[r],S+=u;return o}p.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=m(),j=x();b(y,"assign",j);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
