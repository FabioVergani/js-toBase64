function toBase64(str){
 function eBit(b){const x=b;return x<26?x+65:x<52?x+71:x<62?x-4:x===62?43:x===63?47:65;}
 function A(v){return eBit(v&63);}
 function B(v,a,b){const g=A;return f(g(v>>>18),g(v>>>12),a,b);}
 function C(v,b){return B(v,A(v>>>6),b);}
 const f=String.fromCharCode;
 let k,v=0,r='';
 for(let i=0,m=(new TextEncoder()).encode(str),l=m.length;i<l;++i){v|=m[i]<<(16>>>(k=i%3)&24);if(k===2){r+=C(v,A(v));v=0;};};
 if(k<2){if(k===0){r+=B(v,61,61)}else if(k===1){r+=C(v,61);};};
 return r;
};
//==============

/*
toBase64("xxx123abc");
eHh4MTIzYWJj
xxx123abc
*/
