this.wp=this.wp||{},this.wp.blockSerializationSpecParser=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=197)}({181:function(e,t,r){var o,n,c;n=[],void 0===(c="function"==typeof(o=function(){"use strict";function e(t,r,o,n){this.message=t,this.expected=r,this.found=o,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}return function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(e,Error),e.buildMessage=function(e,t){var r={literal:function(e){return'"'+n(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?c(e.parts[t][0])+"-"+c(e.parts[t][1]):c(e.parts[t]);return"["+(e.inverted?"^":"")+r+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function o(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+o(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+o(e)})}function c(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+o(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+o(e)})}function p(e){return r[e.type](e)}return"Expected "+function(e){var t,r,o=new Array(e.length);for(t=0;t<e.length;t++)o[t]=p(e[t]);if(o.sort(),o.length>0){for(t=1,r=1;t<o.length;t++)o[t-1]!==o[t]&&(o[r]=o[t],r++);o.length=r}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(e)+" but "+function(e){return e?'"'+n(e)+'"':"end of input"}(t)+" found."},{SyntaxError:e,parse:function(t,r){r=void 0!==r?r:{};var o,n={},c={Block_List:Z},p=Z,a={type:"any"},l=function(e,t,r){return[t,r]},i=function(e,t,r){return function(e,t,r){var o,n,c,p,a,l=[];for(e.length&&l.push(pe(e)),o=0,n=t.length;o<n;o++)p=t[o],a=p[0],c=p[1],l.push(a),c.length&&l.push(pe(c));return r.length&&l.push(pe(r)),l}(e,t,r)},x="\x3c!--",s=G("\x3c!--",!1),u="wp:",b=G("wp:",!1),f=function(e,t){return t},k="/--\x3e",v=G("/--\x3e",!1),h=function(e,t){return{blockName:e,attrs:t||{},innerBlocks:[],innerHTML:"",innerContent:[]}},w=function(e,t,r){var o=function(e){var t,r,o,n="",c=[],p=[];for(t=0,r=e.length;t<r;t++)"string"==typeof(o=e[t])?(n+=o,p.push(o)):(c.push(o),p.push(null));return[n,c,p]}(t),n=o[0],c=o[1],p=o[2];return{blockName:e.blockName,attrs:e.attrs,innerBlocks:c,innerHTML:n,innerContent:p}},d="--\x3e",y=G("--\x3e",!1),g=function(e,t){return{blockName:e,attrs:t||{}}},m="/wp:",H=G("/wp:",!1),A=function(e){return{blockName:e}},P="/",N=G("/",!1),C=function(e){return"core/"+e},B=/^[a-z]/,T=K([["a","z"]],!1,!1),L=/^[a-z0-9_\-]/,M=K([["a","z"],["0","9"],"_","-"],!1,!1),E=Q("JSON-encoded attributes embedded in a block's opening comment"),S="{",j=G("{",!1),q="}",F=G("}",!1),O="",_=function(e){return function(e){try{return JSON.parse(e)}catch(e){return null}}(e)},z=/^[ \t\r\n]/,R=K([" ","\t","\r","\n"],!1,!1),J=0,I=[{line:1,column:1}],U=0,$=[],D=0;if("startRule"in r){if(!(r.startRule in c))throw new Error("Can't start parsing from rule \""+r.startRule+'".');p=c[r.startRule]}function G(e,t){return{type:"literal",text:e,ignoreCase:t}}function K(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function Q(e){return{type:"other",description:e}}function V(e){var r,o=I[e];if(o)return o;for(r=e-1;!I[r];)r--;for(o={line:(o=I[r]).line,column:o.column};r<e;)10===t.charCodeAt(r)?(o.line++,o.column=1):o.column++,r++;return I[e]=o,o}function W(e,t){var r=V(e),o=V(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:o.line,column:o.column}}}function X(e){J<U||(J>U&&(U=J,$=[]),$.push(e))}function Y(t,r,o){return new e(e.buildMessage(t,r),t,r,o)}function Z(){var e,r,o,c,p,x,s,u,b,f;for(e=J,r=J,o=[],c=J,p=J,D++,x=ee(),D--,x===n?p=void 0:(J=p,p=n),p!==n?(t.length>J?(x=t.charAt(J),J++):(x=n,0===D&&X(a)),x!==n?c=p=[p,x]:(J=c,c=n)):(J=c,c=n);c!==n;)o.push(c),c=J,p=J,D++,x=ee(),D--,x===n?p=void 0:(J=p,p=n),p!==n?(t.length>J?(x=t.charAt(J),J++):(x=n,0===D&&X(a)),x!==n?c=p=[p,x]:(J=c,c=n)):(J=c,c=n);if((r=o!==n?t.substring(r,J):o)!==n){if(o=[],c=J,(p=ee())!==n){for(x=J,s=[],u=J,b=J,D++,f=ee(),D--,f===n?b=void 0:(J=b,b=n),b!==n?(t.length>J?(f=t.charAt(J),J++):(f=n,0===D&&X(a)),f!==n?u=b=[b,f]:(J=u,u=n)):(J=u,u=n);u!==n;)s.push(u),u=J,b=J,D++,f=ee(),D--,f===n?b=void 0:(J=b,b=n),b!==n?(t.length>J?(f=t.charAt(J),J++):(f=n,0===D&&X(a)),f!==n?u=b=[b,f]:(J=u,u=n)):(J=u,u=n);(x=s!==n?t.substring(x,J):s)!==n?(p=l(r,p,x),c=p):(J=c,c=n)}else J=c,c=n;for(;c!==n;)if(o.push(c),c=J,(p=ee())!==n){for(x=J,s=[],u=J,b=J,D++,f=ee(),D--,f===n?b=void 0:(J=b,b=n),b!==n?(t.length>J?(f=t.charAt(J),J++):(f=n,0===D&&X(a)),f!==n?u=b=[b,f]:(J=u,u=n)):(J=u,u=n);u!==n;)s.push(u),u=J,b=J,D++,f=ee(),D--,f===n?b=void 0:(J=b,b=n),b!==n?(t.length>J?(f=t.charAt(J),J++):(f=n,0===D&&X(a)),f!==n?u=b=[b,f]:(J=u,u=n)):(J=u,u=n);(x=s!==n?t.substring(x,J):s)!==n?(p=l(r,p,x),c=p):(J=c,c=n)}else J=c,c=n;if(o!==n){for(c=J,p=[],t.length>J?(x=t.charAt(J),J++):(x=n,0===D&&X(a));x!==n;)p.push(x),t.length>J?(x=t.charAt(J),J++):(x=n,0===D&&X(a));(c=p!==n?t.substring(c,J):p)!==n?(r=i(r,o,c),e=r):(J=e,e=n)}else J=e,e=n}else J=e,e=n;return e}function ee(){var e;return(e=function(){var e,r,o,c,p,a;return e=J,t.substr(J,4)===x?(r=x,J+=4):(r=n,0===D&&X(s)),r!==n&&ce()!==n?(t.substr(J,3)===u?(o=u,J+=3):(o=n,0===D&&X(b)),o!==n&&(c=re())!==n&&ce()!==n?(p=J,(a=ne())!==n&&ce()!==n?(a=f(c,a),p=a):(J=p,p=n),p===n&&(p=null),p!==n?(t.substr(J,4)===k?(a=k,J+=4):(a=n,0===D&&X(v)),a!==n?(r=h(c,p),e=r):(J=e,e=n)):(J=e,e=n)):(J=e,e=n)):(J=e,e=n),e}())===n&&(e=function(){var e,r,o,c,p,l,i,k,v;if(e=J,(r=function(){var e,r,o,c,p,a;return e=J,t.substr(J,4)===x?(r=x,J+=4):(r=n,0===D&&X(s)),r!==n&&ce()!==n?(t.substr(J,3)===u?(o=u,J+=3):(o=n,0===D&&X(b)),o!==n&&(c=re())!==n&&ce()!==n?(p=J,(a=ne())!==n&&ce()!==n?(a=f(c,a),p=a):(J=p,p=n),p===n&&(p=null),p!==n?(t.substr(J,3)===d?(a=d,J+=3):(a=n,0===D&&X(y)),a!==n?(r=g(c,p),e=r):(J=e,e=n)):(J=e,e=n)):(J=e,e=n)):(J=e,e=n),e}())!==n){if(o=[],(c=ee())===n){if(c=J,p=[],l=J,i=J,D++,k=ee(),D--,k===n?i=void 0:(J=i,i=n),i!==n?(k=J,D++,v=te(),D--,v===n?k=void 0:(J=k,k=n),k!==n?(t.length>J?(v=t.charAt(J),J++):(v=n,0===D&&X(a)),v!==n?l=i=[i,k,v]:(J=l,l=n)):(J=l,l=n)):(J=l,l=n),l!==n)for(;l!==n;)p.push(l),l=J,i=J,D++,k=ee(),D--,k===n?i=void 0:(J=i,i=n),i!==n?(k=J,D++,v=te(),D--,v===n?k=void 0:(J=k,k=n),k!==n?(t.length>J?(v=t.charAt(J),J++):(v=n,0===D&&X(a)),v!==n?l=i=[i,k,v]:(J=l,l=n)):(J=l,l=n)):(J=l,l=n);else p=n;c=p!==n?t.substring(c,J):p}for(;c!==n;)if(o.push(c),(c=ee())===n){if(c=J,p=[],l=J,i=J,D++,k=ee(),D--,k===n?i=void 0:(J=i,i=n),i!==n?(k=J,D++,v=te(),D--,v===n?k=void 0:(J=k,k=n),k!==n?(t.length>J?(v=t.charAt(J),J++):(v=n,0===D&&X(a)),v!==n?l=i=[i,k,v]:(J=l,l=n)):(J=l,l=n)):(J=l,l=n),l!==n)for(;l!==n;)p.push(l),l=J,i=J,D++,k=ee(),D--,k===n?i=void 0:(J=i,i=n),i!==n?(k=J,D++,v=te(),D--,v===n?k=void 0:(J=k,k=n),k!==n?(t.length>J?(v=t.charAt(J),J++):(v=n,0===D&&X(a)),v!==n?l=i=[i,k,v]:(J=l,l=n)):(J=l,l=n)):(J=l,l=n);else p=n;c=p!==n?t.substring(c,J):p}o!==n&&(c=te())!==n?(r=w(r,o,c),e=r):(J=e,e=n)}else J=e,e=n;return e}()),e}function te(){var e,r,o,c,p;return e=J,t.substr(J,4)===x?(r=x,J+=4):(r=n,0===D&&X(s)),r!==n&&ce()!==n?(t.substr(J,4)===m?(o=m,J+=4):(o=n,0===D&&X(H)),o!==n&&(c=re())!==n&&ce()!==n?(t.substr(J,3)===d?(p=d,J+=3):(p=n,0===D&&X(y)),p!==n?(r=A(c),e=r):(J=e,e=n)):(J=e,e=n)):(J=e,e=n),e}function re(){var e;return(e=function(){var e,r,o,c,p;return e=J,r=J,(o=oe())!==n?(47===t.charCodeAt(J)?(c=P,J++):(c=n,0===D&&X(N)),c!==n&&(p=oe())!==n?r=o=[o,c,p]:(J=r,r=n)):(J=r,r=n),e=r!==n?t.substring(e,J):r}())===n&&(e=function(){var e,r;return e=J,(e=(r=oe())!==n?t.substring(e,J):r)!==n&&(e=C(e)),e}()),e}function oe(){var e,r,o,c,p;if(e=J,r=J,B.test(t.charAt(J))?(o=t.charAt(J),J++):(o=n,0===D&&X(T)),o!==n){for(c=[],L.test(t.charAt(J))?(p=t.charAt(J),J++):(p=n,0===D&&X(M));p!==n;)c.push(p),L.test(t.charAt(J))?(p=t.charAt(J),J++):(p=n,0===D&&X(M));c!==n?r=o=[o,c]:(J=r,r=n)}else J=r,r=n;return e=r!==n?t.substring(e,J):r}function ne(){var e,r,o,c,p,l,i,x,s,u,b,f,k;if(D++,e=J,r=J,o=J,123===t.charCodeAt(J)?(c=S,J++):(c=n,0===D&&X(j)),c!==n){for(p=[],l=J,i=J,D++,x=J,125===t.charCodeAt(J)?(s=q,J++):(s=n,0===D&&X(F)),s!==n&&(u=ce())!==n&&(b=O)!==n?(47===t.charCodeAt(J)?(f=P,J++):(f=n,0===D&&X(N)),f===n&&(f=null),f!==n?(t.substr(J,3)===d?(k=d,J+=3):(k=n,0===D&&X(y)),k!==n?x=s=[s,u,b,f,k]:(J=x,x=n)):(J=x,x=n)):(J=x,x=n),D--,x===n?i=void 0:(J=i,i=n),i!==n?(t.length>J?(x=t.charAt(J),J++):(x=n,0===D&&X(a)),x!==n?l=i=[i,x]:(J=l,l=n)):(J=l,l=n);l!==n;)p.push(l),l=J,i=J,D++,x=J,125===t.charCodeAt(J)?(s=q,J++):(s=n,0===D&&X(F)),s!==n&&(u=ce())!==n&&(b=O)!==n?(47===t.charCodeAt(J)?(f=P,J++):(f=n,0===D&&X(N)),f===n&&(f=null),f!==n?(t.substr(J,3)===d?(k=d,J+=3):(k=n,0===D&&X(y)),k!==n?x=s=[s,u,b,f,k]:(J=x,x=n)):(J=x,x=n)):(J=x,x=n),D--,x===n?i=void 0:(J=i,i=n),i!==n?(t.length>J?(x=t.charAt(J),J++):(x=n,0===D&&X(a)),x!==n?l=i=[i,x]:(J=l,l=n)):(J=l,l=n);p!==n?(125===t.charCodeAt(J)?(l=q,J++):(l=n,0===D&&X(F)),l!==n?o=c=[c,p,l]:(J=o,o=n)):(J=o,o=n)}else J=o,o=n;return(r=o!==n?t.substring(r,J):o)!==n&&(r=_(r)),D--,(e=r)===n&&(r=n,0===D&&X(E)),e}function ce(){var e,r;if(e=[],z.test(t.charAt(J))?(r=t.charAt(J),J++):(r=n,0===D&&X(R)),r!==n)for(;r!==n;)e.push(r),z.test(t.charAt(J))?(r=t.charAt(J),J++):(r=n,0===D&&X(R));else e=n;return e}function pe(e){return e.length&&{blockName:null,attrs:{},innerBlocks:[],innerHTML:e,innerContent:[e]}}if((o=p())!==n&&J===t.length)return o;throw o!==n&&J<t.length&&X({type:"end"}),Y($,U<t.length?t.charAt(U):null,U<t.length?W(U,U+1):W(U,U))}}})?o.apply(t,n):o)||(e.exports=c)},197:function(e,t,r){"use strict";r.r(t);var o=r(181);const n=e=>()=>{describe("output structure",()=>{test("output is an array",()=>{expect(e("")).toEqual(expect.any(Array)),expect(e("test")).toEqual(expect.any(Array)),expect(e("\x3c!-- wp:void /--\x3e")).toEqual(expect.any(Array)),expect(e("\x3c!-- wp:block --\x3e\x3c!-- wp:inner /--\x3e\x3c!-- /wp:block --\x3e")).toEqual(expect.any(Array)),expect(e("\x3c!-- wp:first /--\x3e\x3c!-- wp:second /--\x3e")).toEqual(expect.any(Array))}),test("parses blocks of various types",()=>{expect(e("\x3c!-- wp:void /--\x3e")[0]).toHaveProperty("blockName","core/void"),expect(e("\x3c!-- wp:void {} /--\x3e")[0]).toHaveProperty("blockName","core/void"),expect(e('\x3c!-- wp:void {"value":true} /--\x3e')[0]).toHaveProperty("blockName","core/void"),expect(e('\x3c!-- wp:void {"a":{}} /--\x3e')[0]).toHaveProperty("blockName","core/void"),expect(e('\x3c!-- wp:void { "value" : true } /--\x3e')[0]).toHaveProperty("blockName","core/void"),expect(e('\x3c!-- wp:void {\n\t"value" : true\n} /--\x3e')[0]).toHaveProperty("blockName","core/void"),expect(e("\x3c!-- wp:block --\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("blockName","core/block"),expect(e("\x3c!-- wp:block {} --\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("blockName","core/block"),expect(e('\x3c!-- wp:block {"value":true} --\x3e\x3c!-- /wp:block --\x3e')[0]).toHaveProperty("blockName","core/block"),expect(e("\x3c!-- wp:block {} --\x3einner\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("blockName","core/block"),expect(e('\x3c!-- wp:block {"value":{"a" : "true"}} --\x3einner\x3c!-- /wp:block --\x3e')[0]).toHaveProperty("blockName","core/block")}),test("blockName is namespaced string (except freeform)",()=>{expect(e("freeform has null name")[0]).toHaveProperty("blockName",null),expect(e("\x3c!-- wp:more /--\x3e")[0]).toHaveProperty("blockName","core/more"),expect(e("\x3c!-- wp:core/more /--\x3e")[0]).toHaveProperty("blockName","core/more"),expect(e("\x3c!-- wp:my/more /--\x3e")[0]).toHaveProperty("blockName","my/more")}),test("JSON attributes are key/value object",()=>{expect(e("freeform has empty attrs")[0]).toHaveProperty("attrs",{}),expect(e("\x3c!-- wp:void /--\x3e")[0]).toHaveProperty("attrs",{}),expect(e("\x3c!-- wp:void {} /--\x3e")[0]).toHaveProperty("blockName","core/void"),expect(e("\x3c!-- wp:void {} /--\x3e")[0]).toHaveProperty("attrs",{}),expect(e('\x3c!-- wp:void {"key": "value"} /--\x3e')[0]).toHaveProperty("attrs",{key:"value"}),expect(e("\x3c!-- wp:block --\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("attrs",{}),expect(e("\x3c!-- wp:block {} --\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("attrs",{}),expect(e('\x3c!-- wp:block {"key": "value"} --\x3e\x3c!-- /wp:block --\x3e')[0]).toHaveProperty("attrs",{key:"value"})}),test("innerBlocks is a list",()=>{expect(e("freeform has empty innerBlocks")[0]).toHaveProperty("innerBlocks",[]),expect(e("\x3c!-- wp:void /--\x3e")[0]).toHaveProperty("innerBlocks",[]),expect(e("\x3c!-- wp:block --\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("innerBlocks",[]);const t=e("\x3c!-- wp:block --\x3e\x3c!-- wp:inner /--\x3e\x3c!-- /wp:block --\x3e")[0];expect(t).toHaveProperty("innerBlocks",expect.any(Array)),expect(t.innerBlocks).toHaveLength(1);const r=e("\x3c!-- wp:block --\x3ea\x3c!-- wp:first /--\x3eb\x3c!-- wp:second /--\x3ec\x3c!-- /wp:block --\x3e")[0];expect(r).toHaveProperty("innerBlocks",expect.any(Array)),expect(r.innerBlocks).toHaveLength(2)}),test("innerHTML is a string",()=>{expect(e("test")[0]).toHaveProperty("innerHTML",expect.any(String)),expect(e("\x3c!-- wp:test /--\x3e")[0]).toHaveProperty("innerHTML",expect.any(String)),expect(e("\x3c!-- wp:test --\x3e\x3c!-- /wp:test --\x3e")[0]).toHaveProperty("innerHTML",expect.any(String)),expect(e("\x3c!-- wp:test --\x3etest\x3c!-- /wp:test --\x3e")[0]).toHaveProperty("innerHTML",expect.any(String))})}),describe("generic tests",()=>{test("parse() accepts inputs with multiple Reusable blocks",()=>{expect(e('\x3c!-- wp:block {"ref":313} /--\x3e\x3c!-- wp:block {"ref":482} /--\x3e')).toEqual([expect.objectContaining({blockName:"core/block",attrs:{ref:313}}),expect.objectContaining({blockName:"core/block",attrs:{ref:482}})])}),test("treats void blocks and empty blocks identically",()=>{expect(e("\x3c!-- wp:block /--\x3e")).toEqual(e("\x3c!-- wp:block --\x3e\x3c!-- /wp:block --\x3e")),expect(e('\x3c!-- wp:my/bus { "is": "fast" } /--\x3e')).toEqual(e('\x3c!-- wp:my/bus { "is": "fast" } --\x3e\x3c!-- /wp:my/bus --\x3e'))}),test("should grab HTML soup before block openers",()=>{["<p>Break me</p>\x3c!-- wp:block /--\x3e","<p>Break me</p>\x3c!-- wp:block --\x3e\x3c!-- /wp:block --\x3e"].forEach(t=>expect(e(t)).toEqual([expect.objectContaining({innerHTML:"<p>Break me</p>"}),expect.objectContaining({blockName:"core/block",innerHTML:""})]))}),test("should grab HTML soup before inner block openers",()=>["\x3c!-- wp:outer --\x3e<p>Break me</p>\x3c!-- wp:block /--\x3e\x3c!-- /wp:outer --\x3e","\x3c!-- wp:outer --\x3e<p>Break me</p>\x3c!-- wp:block --\x3e\x3c!-- /wp:block --\x3e\x3c!-- /wp:outer --\x3e"].forEach(t=>expect(e(t)).toEqual([expect.objectContaining({innerBlocks:[expect.objectContaining({blockName:"core/block",innerHTML:""})],innerHTML:"<p>Break me</p>"})]))),test("should grab HTML soup after blocks",()=>["\x3c!-- wp:block /--\x3e<p>Break me</p>","\x3c!-- wp:block --\x3e\x3c!-- /wp:block --\x3e<p>Break me</p>"].forEach(t=>expect(e(t)).toEqual([expect.objectContaining({blockName:"core/block",innerHTML:""}),expect.objectContaining({innerHTML:"<p>Break me</p>"})])))}),describe("innerBlock placemarkers",()=>{test("innerContent exists",()=>{expect(e("test")[0]).toHaveProperty("innerContent",["test"]),expect(e("\x3c!-- wp:void /--\x3e")[0]).toHaveProperty("innerContent",[])}),test("innerContent contains innerHTML",()=>{expect(e("\x3c!-- wp:block --\x3eInner\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("innerContent",["Inner"])}),test("block locations become null",()=>{expect(e("\x3c!-- wp:block --\x3e\x3c!-- wp:void /--\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("innerContent",[null])}),test("HTML soup appears after blocks",()=>{expect(e("\x3c!-- wp:block --\x3e\x3c!-- wp:void /--\x3eAfter\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("innerContent",[null,"After"])}),test("HTML soup appears before blocks",()=>{expect(e("\x3c!-- wp:block --\x3eBefore\x3c!-- wp:void /--\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("innerContent",["Before",null])}),test("blocks follow each other",()=>{expect(e("\x3c!-- wp:block --\x3e\x3c!-- wp:void /--\x3e\x3c!-- wp:void /--\x3e\x3c!-- /wp:block --\x3e")[0]).toHaveProperty("innerContent",[null,null])})}),describe("attack vectors",()=>{test("really long JSON attribute sections",()=>{const t="a".repeat(1e5);let r;expect(()=>r=e(`\x3c!-- wp:fake {"a":"${t}"} /--\x3e`)[0]).not.toThrow(),expect(r.attrs.a).toHaveLength(1e5)}),describe("invalid block comment syntax",()=>{test("extra space after void closer",()=>{let t;expect(()=>t=e("\x3c!-- wp:block / --\x3e")[0]).not.toThrow(),expect(t.blockName).toBeNull()})})})},c=(...e)=>describe.skip(...e),p=(e,t)=>c(e,()=>{});r.d(t,"parse",function(){return o.parse}),r.d(t,"jsTester",function(){return n}),r.d(t,"phpTester",function(){return p})}});