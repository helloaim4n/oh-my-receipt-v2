import{x as xe,y as ve,z as we,D as Pt,r as y,j as vt}from"./index-c93b1e9e.js";function Se(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Ce(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var ke=function(){function t(r){var a=this;this._insertTag=function(n){var s;a.tags.length===0?a.insertionPoint?s=a.insertionPoint.nextSibling:a.prepend?s=a.container.firstChild:s=a.before:s=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,s),a.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(a){a.forEach(this._insertTag)},e.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ce(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Se(n);try{s.insertRule(a,s.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},e.flush=function(){this.tags.forEach(function(a){return a.parentNode&&a.parentNode.removeChild(a)}),this.tags=[],this.ctr=0},t}(),A="-ms-",nt="-moz-",b="-webkit-",Wt="comm",Et="rule",Ot="decl",Ee="@import",Dt="@keyframes",Oe="@layer",Ne=Math.abs,ot=String.fromCharCode,Ae=Object.assign;function Me(t,e){return N(t,0)^45?(((e<<2^N(t,0))<<2^N(t,1))<<2^N(t,2))<<2^N(t,3):0}function Ut(t){return t.trim()}function Re(t,e){return(t=e.exec(t))?t[0]:t}function $(t,e,r){return t.replace(e,r)}function wt(t,e){return t.indexOf(e)}function N(t,e){return t.charCodeAt(e)|0}function H(t,e,r){return t.slice(e,r)}function _(t){return t.length}function Nt(t){return t.length}function G(t,e){return e.push(t),t}function Te(t,e){return t.map(e).join("")}var ct=1,W=1,qt=0,T=0,O=0,D="";function it(t,e,r,a,n,s,c){return{value:t,root:e,parent:r,type:a,props:n,children:s,line:ct,column:W,length:c,return:""}}function q(t,e){return Ae(it("",null,null,"",null,null,0),t,{length:-t.length},e)}function ze(){return O}function Ie(){return O=T>0?N(D,--T):0,W--,O===10&&(W=1,ct--),O}function I(){return O=T<qt?N(D,T++):0,W++,O===10&&(W=1,ct++),O}function X(){return N(D,T)}function et(){return T}function J(t,e){return H(D,t,e)}function K(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ht(t){return ct=W=1,qt=_(D=t),T=0,[]}function Kt(t){return D="",t}function rt(t){return Ut(J(T-1,St(t===91?t+2:t===40?t+1:t)))}function Pe(t){for(;(O=X())&&O<33;)I();return K(t)>2||K(O)>3?"":" "}function Ve(t,e){for(;--e&&I()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return J(t,et()+(e<6&&X()==32&&I()==32))}function St(t){for(;I();)switch(O){case t:return T;case 34:case 39:t!==34&&t!==39&&St(O);break;case 40:t===41&&St(t);break;case 92:I();break}return T}function Ye(t,e){for(;I()&&t+O!==47+10;)if(t+O===42+42&&X()===47)break;return"/*"+J(e,T-1)+"*"+ot(t===47?t:I())}function _e(t){for(;!K(X());)I();return J(t,T)}function Fe(t){return Kt(at("",null,null,null,[""],t=Ht(t),0,[0],t))}function at(t,e,r,a,n,s,c,i,f){for(var d=0,l=0,m=c,C=0,k=0,S=0,p=1,u=1,v=1,g=0,E="",z=n,M=s,R=a,w=E;u;)switch(S=g,g=I()){case 40:if(S!=108&&N(w,m-1)==58){wt(w+=$(rt(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:w+=rt(g);break;case 9:case 10:case 13:case 32:w+=Pe(S);break;case 92:w+=Ve(et()-1,7);continue;case 47:switch(X()){case 42:case 47:G(Xe(Ye(I(),et()),e,r),f);break;default:w+="/"}break;case 123*p:i[d++]=_(w)*v;case 125*p:case 59:case 0:switch(g){case 0:case 125:u=0;case 59+l:v==-1&&(w=$(w,/\f/g,"")),k>0&&_(w)-m&&G(k>32?Yt(w+";",a,r,m-1):Yt($(w," ","")+";",a,r,m-2),f);break;case 59:w+=";";default:if(G(R=Vt(w,e,r,d,l,n,i,E,z=[],M=[],m),s),g===123)if(l===0)at(w,e,R,R,z,s,m,i,M);else switch(C===99&&N(w,3)===110?100:C){case 100:case 108:case 109:case 115:at(t,R,R,a&&G(Vt(t,R,R,0,0,n,i,E,n,z=[],m),M),n,M,m,i,a?z:M);break;default:at(w,R,R,R,[""],M,0,i,M)}}d=l=k=0,p=v=1,E=w="",m=c;break;case 58:m=1+_(w),k=S;default:if(p<1){if(g==123)--p;else if(g==125&&p++==0&&Ie()==125)continue}switch(w+=ot(g),g*p){case 38:v=l>0?1:(w+="\f",-1);break;case 44:i[d++]=(_(w)-1)*v,v=1;break;case 64:X()===45&&(w+=rt(I())),C=X(),l=m=_(E=w+=_e(et())),g++;break;case 45:S===45&&_(w)==2&&(p=0)}}return s}function Vt(t,e,r,a,n,s,c,i,f,d,l){for(var m=n-1,C=n===0?s:[""],k=Nt(C),S=0,p=0,u=0;S<a;++S)for(var v=0,g=H(t,m+1,m=Ne(p=c[S])),E=t;v<k;++v)(E=Ut(p>0?C[v]+" "+g:$(g,/&\f/g,C[v])))&&(f[u++]=E);return it(t,e,r,n===0?Et:i,f,d,l)}function Xe(t,e,r){return it(t,e,r,Wt,ot(ze()),H(t,2,-2),0)}function Yt(t,e,r,a){return it(t,e,r,Ot,H(t,0,a),H(t,a+1,-1),a)}function B(t,e){for(var r="",a=Nt(t),n=0;n<a;n++)r+=e(t[n],n,t,e)||"";return r}function je(t,e,r,a){switch(t.type){case Oe:if(t.children.length)break;case Ee:case Ot:return t.return=t.return||t.value;case Wt:return"";case Dt:return t.return=t.value+"{"+B(t.children,a)+"}";case Et:t.value=t.props.join(",")}return _(r=B(t.children,a))?t.return=t.value+"{"+r+"}":""}function Le(t){var e=Nt(t);return function(r,a,n,s){for(var c="",i=0;i<e;i++)c+=t[i](r,a,n,s)||"";return c}}function Be(t){return function(e){e.root||(e=e.return)&&t(e)}}var We=function(e,r,a){for(var n=0,s=0;n=s,s=X(),n===38&&s===12&&(r[a]=1),!K(s);)I();return J(e,T)},De=function(e,r){var a=-1,n=44;do switch(K(n)){case 0:n===38&&X()===12&&(r[a]=1),e[a]+=We(T-1,r,a);break;case 2:e[a]+=rt(n);break;case 4:if(n===44){e[++a]=X()===58?"&\f":"",r[a]=e[a].length;break}default:e[a]+=ot(n)}while(n=I());return e},Ue=function(e,r){return Kt(De(Ht(e),r))},_t=new WeakMap,qe=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,a=e.parent,n=e.column===a.column&&e.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!_t.get(a))&&!n){_t.set(e,!0);for(var s=[],c=Ue(r,s),i=a.props,f=0,d=0;f<c.length;f++)for(var l=0;l<i.length;l++,d++)e.props[d]=s[f]?c[f].replace(/&\f/g,i[l]):i[l]+" "+c[f]}}},He=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function Zt(t,e){switch(Me(t,e)){case 5103:return b+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return b+t+nt+t+A+t+t;case 6828:case 4268:return b+t+A+t+t;case 6165:return b+t+A+"flex-"+t+t;case 5187:return b+t+$(t,/(\w+).+(:[^]+)/,b+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return b+t+A+"flex-item-"+$(t,/flex-|-self/,"")+t;case 4675:return b+t+A+"flex-line-pack"+$(t,/align-content|flex-|-self/,"")+t;case 5548:return b+t+A+$(t,"shrink","negative")+t;case 5292:return b+t+A+$(t,"basis","preferred-size")+t;case 6060:return b+"box-"+$(t,"-grow","")+b+t+A+$(t,"grow","positive")+t;case 4554:return b+$(t,/([^-])(transform)/g,"$1"+b+"$2")+t;case 6187:return $($($(t,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),t,"")+t;case 5495:case 3959:return $(t,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return $($(t,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+t+t;case 4095:case 3583:case 4068:case 2532:return $(t,/(.+)-inline(.+)/,b+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(t)-1-e>6)switch(N(t,e+1)){case 109:if(N(t,e+4)!==45)break;case 102:return $(t,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+nt+(N(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~wt(t,"stretch")?Zt($(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(N(t,e+1)!==115)break;case 6444:switch(N(t,_(t)-3-(~wt(t,"!important")&&10))){case 107:return $(t,":",":"+b)+t;case 101:return $(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+b+(N(t,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(N(t,e+11)){case 114:return b+t+A+$(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return b+t+A+$(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return b+t+A+$(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return b+t+A+t+t}return t}var Ke=function(e,r,a,n){if(e.length>-1&&!e.return)switch(e.type){case Ot:e.return=Zt(e.value,e.length);break;case Dt:return B([q(e,{value:$(e.value,"@","@"+b)})],n);case Et:if(e.length)return Te(e.props,function(s){switch(Re(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([q(e,{props:[$(s,/:(read-\w+)/,":"+nt+"$1")]})],n);case"::placeholder":return B([q(e,{props:[$(s,/:(plac\w+)/,":"+b+"input-$1")]}),q(e,{props:[$(s,/:(plac\w+)/,":"+nt+"$1")]}),q(e,{props:[$(s,/:(plac\w+)/,A+"input-$1")]})],n)}return""})}},Ze=[Ke],Je=function(e){var r=e.key;if(r==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(p){var u=p.getAttribute("data-emotion");u.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var n=e.stylisPlugins||Ze,s={},c,i=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(p){for(var u=p.getAttribute("data-emotion").split(" "),v=1;v<u.length;v++)s[u[v]]=!0;i.push(p)});var f,d=[qe,He];{var l,m=[je,Be(function(p){l.insert(p)})],C=Le(d.concat(n,m)),k=function(u){return B(Fe(u),C)};f=function(u,v,g,E){l=g,k(u?u+"{"+v.styles+"}":v.styles),E&&(S.inserted[v.name]=!0)}}var S={key:r,sheet:new ke({key:r,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:f};return S.sheet.hydrate(i),S},Jt=xe,Ge={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gt={};Gt[Jt.ForwardRef]=Ge;Gt[Jt.Memo]=Qe;var tr=!0;function Qt(t,e,r){var a="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):a+=n+" "}),a}var At=function(e,r,a){var n=e.key+"-"+r.name;(a===!1||tr===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},te=function(e,r,a){At(e,r,a);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var s=r;do e.insert(r===s?"."+n:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function er(t){for(var e=0,r,a=0,n=t.length;n>=4;++a,n-=4)r=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(a+2)&255)<<16;case 2:e^=(t.charCodeAt(a+1)&255)<<8;case 1:e^=t.charCodeAt(a)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var rr=/[A-Z]|^ms/g,ar=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ee=function(e){return e.charCodeAt(1)===45},Ft=function(e){return e!=null&&typeof e!="boolean"},gt=ve(function(t){return ee(t)?t:t.replace(rr,"-$&").toLowerCase()}),Xt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(ar,function(a,n,s){return F={name:n,styles:s,next:F},n})}return we[e]!==1&&!ee(e)&&typeof r=="number"&&r!==0?r+"px":r};function Z(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return F={name:r.name,styles:r.styles,next:F},r.name;if(r.styles!==void 0){var a=r.next;if(a!==void 0)for(;a!==void 0;)F={name:a.name,styles:a.styles,next:F},a=a.next;var n=r.styles+";";return n}return nr(t,e,r)}case"function":{if(t!==void 0){var s=F,c=r(t);return F=s,Z(t,e,c)}break}}if(e==null)return r;var i=e[r];return i!==void 0?i:r}function nr(t,e,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=Z(t,e,r[n])+";";else for(var s in r){var c=r[s];if(typeof c!="object")e!=null&&e[c]!==void 0?a+=s+"{"+e[c]+"}":Ft(c)&&(a+=gt(s)+":"+Xt(s,c)+";");else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var i=0;i<c.length;i++)Ft(c[i])&&(a+=gt(s)+":"+Xt(s,c[i])+";");else{var f=Z(t,e,c);switch(s){case"animation":case"animationName":{a+=gt(s)+":"+f+";";break}default:a+=s+"{"+f+"}"}}}return a}var jt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,F,Mt=function(e,r,a){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,s="";F=void 0;var c=e[0];c==null||c.raw===void 0?(n=!1,s+=Z(a,r,c)):s+=c[0];for(var i=1;i<e.length;i++)s+=Z(a,r,e[i]),n&&(s+=c[i]);jt.lastIndex=0;for(var f="",d;(d=jt.exec(s))!==null;)f+="-"+d[1];var l=er(s)+f;return{name:l,styles:s,next:F}},sr=function(e){return e()},or=Pt["useInsertionEffect"]?Pt["useInsertionEffect"]:!1,re=or||sr,Rt={}.hasOwnProperty,ae=y.createContext(typeof HTMLElement<"u"?Je({key:"css"}):null);ae.Provider;var ne=function(e){return y.forwardRef(function(r,a){var n=y.useContext(ae);return e(r,n,a)})},se=y.createContext({}),Ct="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",cr=function(e,r){var a={};for(var n in r)Rt.call(r,n)&&(a[n]=r[n]);return a[Ct]=e,a},ir=function(e){var r=e.cache,a=e.serialized,n=e.isStringTag;return At(r,a,n),re(function(){return te(r,a,n)}),null},fr=ne(function(t,e,r){var a=t.css;typeof a=="string"&&e.registered[a]!==void 0&&(a=e.registered[a]);var n=t[Ct],s=[a],c="";typeof t.className=="string"?c=Qt(e.registered,s,t.className):t.className!=null&&(c=t.className+" ");var i=Mt(s,void 0,y.useContext(se));c+=e.key+"-"+i.name;var f={};for(var d in t)Rt.call(t,d)&&d!=="css"&&d!==Ct&&(f[d]=t[d]);return f.ref=r,f.className=c,y.createElement(y.Fragment,null,y.createElement(ir,{cache:e,serialized:i,isStringTag:typeof n=="string"}),y.createElement(n,f))}),dr=fr,lr=vt.Fragment;function x(t,e,r){return Rt.call(e,"css")?vt.jsx(dr,cr(t,e),r):vt.jsx(t,e,r)}function U(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Mt(e)}var o=function(){var e=U.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},mr=function t(e){for(var r=e.length,a=0,n="";a<r;a++){var s=e[a];if(s!=null){var c=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))c=t(s);else{c="";for(var i in s)s[i]&&i&&(c&&(c+=" "),c+=i)}break}default:c=s}c&&(n&&(n+=" "),n+=c)}}return n};function ur(t,e,r){var a=[],n=Qt(t,a,r);return a.length<2?r:n+e(a)}var pr=function(e){var r=e.cache,a=e.serializedArr;return re(function(){for(var n=0;n<a.length;n++)te(r,a[n],!1)}),null},xt=ne(function(t,e){var r=!1,a=[],n=function(){for(var d=arguments.length,l=new Array(d),m=0;m<d;m++)l[m]=arguments[m];var C=Mt(l,e.registered);return a.push(C),At(e,C,!1),e.key+"-"+C.name},s=function(){for(var d=arguments.length,l=new Array(d),m=0;m<d;m++)l[m]=arguments[m];return ur(e.registered,n,mr(l))},c={css:n,cx:s,theme:y.useContext(se)},i=t.children(c);return r=!0,y.createElement(y.Fragment,null,y.createElement(pr,{cache:e,serializedArr:a}),i)}),br=Object.defineProperty,$r=(t,e,r)=>e in t?br(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Q=(t,e,r)=>($r(t,typeof e!="symbol"?e+"":e,r),r),kt=new Map,tt=new WeakMap,Lt=0,yr=void 0;function hr(t){return t?(tt.has(t)||(Lt+=1,tt.set(t,Lt.toString())),tt.get(t)):"0"}function gr(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?hr(t.root):t[e]}`).toString()}function xr(t){let e=gr(t),r=kt.get(e);if(!r){const a=new Map;let n;const s=new IntersectionObserver(c=>{c.forEach(i=>{var f;const d=i.isIntersecting&&n.some(l=>i.intersectionRatio>=l);t.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=d),(f=a.get(i.target))==null||f.forEach(l=>{l(d,i)})})},t);n=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:a},kt.set(e,r)}return r}function oe(t,e,r={},a=yr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const f=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:n,observer:s,elements:c}=xr(r);let i=c.get(t)||[];return c.has(t)||c.set(t,i),i.push(e),s.observe(t),function(){i.splice(i.indexOf(e),1),i.length===0&&(c.delete(t),s.unobserve(t)),c.size===0&&(s.disconnect(),kt.delete(n))}}function vr(t){return typeof t.children!="function"}var Bt=class extends y.Component{constructor(t){super(t),Q(this,"node",null),Q(this,"_unobserveCb",null),Q(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Q(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),vr(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=oe(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:k,entry:S}=this.state;return t({inView:k,entry:S,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:a,root:n,rootMargin:s,onChange:c,skip:i,trackVisibility:f,delay:d,initialInView:l,fallbackInView:m,...C}=this.props;return y.createElement(e||"div",{ref:this.handleNode,...C},t)}};function ce({threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:n,triggerOnce:s,skip:c,initialInView:i,fallbackInView:f,onChange:d}={}){var l;const[m,C]=y.useState(null),k=y.useRef(),[S,p]=y.useState({inView:!!i,entry:void 0});k.current=d,y.useEffect(()=>{if(c||!m)return;let E;return E=oe(m,(z,M)=>{p({inView:z,entry:M}),k.current&&k.current(z,M),M.isIntersecting&&s&&E&&(E(),E=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:r,delay:e},f),()=>{E&&E()}},[Array.isArray(t)?t.toString():t,m,n,a,s,c,r,f,e]);const u=(l=S.entry)==null?void 0:l.target,v=y.useRef();!m&&u&&!s&&!c&&v.current!==u&&(v.current=u,p({inView:!!i,entry:void 0}));const g=[C,S.inView,S.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var ie={exports:{}},h={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tt=Symbol.for("react.element"),zt=Symbol.for("react.portal"),ft=Symbol.for("react.fragment"),dt=Symbol.for("react.strict_mode"),lt=Symbol.for("react.profiler"),mt=Symbol.for("react.provider"),ut=Symbol.for("react.context"),wr=Symbol.for("react.server_context"),pt=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),$t=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Sr=Symbol.for("react.offscreen"),fe;fe=Symbol.for("react.module.reference");function V(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Tt:switch(t=t.type,t){case ft:case lt:case dt:case bt:case $t:return t;default:switch(t=t&&t.$$typeof,t){case wr:case ut:case pt:case ht:case yt:case mt:return t;default:return e}}case zt:return e}}}h.ContextConsumer=ut;h.ContextProvider=mt;h.Element=Tt;h.ForwardRef=pt;h.Fragment=ft;h.Lazy=ht;h.Memo=yt;h.Portal=zt;h.Profiler=lt;h.StrictMode=dt;h.Suspense=bt;h.SuspenseList=$t;h.isAsyncMode=function(){return!1};h.isConcurrentMode=function(){return!1};h.isContextConsumer=function(t){return V(t)===ut};h.isContextProvider=function(t){return V(t)===mt};h.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Tt};h.isForwardRef=function(t){return V(t)===pt};h.isFragment=function(t){return V(t)===ft};h.isLazy=function(t){return V(t)===ht};h.isMemo=function(t){return V(t)===yt};h.isPortal=function(t){return V(t)===zt};h.isProfiler=function(t){return V(t)===lt};h.isStrictMode=function(t){return V(t)===dt};h.isSuspense=function(t){return V(t)===bt};h.isSuspenseList=function(t){return V(t)===$t};h.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ft||t===lt||t===dt||t===bt||t===$t||t===Sr||typeof t=="object"&&t!==null&&(t.$$typeof===ht||t.$$typeof===yt||t.$$typeof===mt||t.$$typeof===ut||t.$$typeof===pt||t.$$typeof===fe||t.getModuleId!==void 0)};h.typeOf=V;ie.exports=h;var Cr=ie.exports;function j(t,e){return Object.keys(e).forEach(function(r){r==="default"||r==="__esModule"||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t}function Y(t,e,r,a){Object.defineProperty(t,e,{get:r,set:a,enumerable:!0,configurable:!0})}var L={},de={};Y(de,"AttentionSeeker",()=>na);const kr=o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Er=o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Or=o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Nr=o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Ar=o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Mr=o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Rr=o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Tr=o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,zr=o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Ir=o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Pr=o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Vr=o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Yr=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var _r={};Y(_r,"Reveal",()=>P);const Fr=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Xr=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jr=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lr=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Br=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,It=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wr=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dr=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ur=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qr=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hr=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kr=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zr=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Jr({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:a=It,iterationCount:n=1}){return U`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};
  `}function Gr(t){return t==null}function Qr(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const st=U`
  opacity: 0;
`,ta=U`
  display: inline-block;
  white-space: pre;
`,P=t=>{const{cascade:e=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:c=It,triggerOnce:i=!1,css:f,className:d,style:l,childClassName:m,childStyle:C,children:k,onVisibilityChange:S}=t,p=y.useMemo(()=>Jr({keyframes:c,duration:n}),[n,c]);return Gr(k)?null:Qr(k)?x(ea,{...t,animationStyles:p,children:String(k)}):Cr.isFragment(k)?x(ra,{...t,animationStyles:p}):x(lr,{children:y.Children.map(k,(u,v)=>{if(!y.isValidElement(u))return null;const g=[f,p],E=a+(e?v*n*r:0);switch(u.type){case"ol":case"ul":return x(xt,{children:({cx:z})=>x(u.type,{...u.props,className:z(d,u.props.className),style:{...l,...u.props.style},children:x(P,{...t,children:u.props.children})})});case"li":return x(Bt,{threshold:s,triggerOnce:i,onChange:S,children:({inView:z,ref:M})=>x(xt,{children:({cx:R})=>x(u.type,{...u.props,ref:M,className:R(m,u.props.className),css:z?g:st,style:{...C,...u.props.style,animationDelay:E+"ms"}})})});default:return x(Bt,{threshold:s,triggerOnce:i,onChange:S,children:({inView:z,ref:M})=>x("div",{ref:M,className:d,css:z?g:st,style:{...l,animationDelay:E+"ms"},children:x(xt,{children:({cx:R})=>x(u.type,{...u.props,className:R(m,u.props.className),style:{...C,...u.props.style}})})})})}})})},ea=t=>{const{animationStyles:e,cascade:r=!1,damping:a=.5,delay:n=0,duration:s=1e3,fraction:c=0,triggerOnce:i=!1,css:f,className:d,style:l,children:m,onVisibilityChange:C}=t,{ref:k,inView:S}=ce({triggerOnce:i,threshold:c,onChange:C});return r?x("div",{ref:k,className:d,css:[f,ta],style:l,children:m.split("").map((p,u)=>x("span",{css:S?e:st,style:{animationDelay:n+u*s*a+"ms"},children:p},u))}):x(P,{...t,children:m})},ra=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:a=!1,css:n,className:s,style:c,children:i,onVisibilityChange:f}=t,{ref:d,inView:l}=ce({triggerOnce:a,threshold:r,onChange:f});return x("div",{ref:d,className:s,css:l?[n,e]:st,style:c,children:i})};function aa(t){switch(t){case"flash":return[Er];case"headShake":return[Or,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[Nr,{animationTimingFunction:"ease-in-out"}];case"jello":return[Ar,{transformOrigin:"center"}];case"pulse":return[Mr,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[Rr];case"shake":return[Tr];case"shakeX":return[zr];case"shakeY":return[Ir];case"swing":return[Pr,{transformOrigin:"top center"}];case"tada":return[Vr];case"wobble":return[Yr];case"bounce":default:return[kr,{transformOrigin:"center bottom"}]}}const na=t=>{const{effect:e="bounce",...r}=t,[a,n]=y.useMemo(()=>aa(e),[e]);return x(P,{keyframes:a,css:n,...r})};var le={};Y(le,"Bounce",()=>$a);const sa=o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,oa=o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ca=o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ia=o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,fa=o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,da=o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,la=o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,ma=o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,ua=o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,pa=o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function ba(t,e){switch(e){case"down":return t?la:oa;case"left":return t?ma:ca;case"right":return t?ua:ia;case"up":return t?pa:fa;default:return t?da:sa}}const $a=t=>{const{direction:e,reverse:r=!1,...a}=t,n=y.useMemo(()=>ba(r,e),[e,r]);return x(P,{keyframes:n,...a})};var me={};Y(me,"Fade",()=>Ra);const ya=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ha=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,ga=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,xa=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,va=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,wa=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Sa=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ca=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ka=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ea=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Oa=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Na=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Aa=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ma(t,e,r){switch(r){case"bottom-left":return e?ha:Xr;case"bottom-right":return e?ga:jr;case"down":return t?e?va:Br:e?xa:Lr;case"left":return t?e?Sa:Wr:e?wa:It;case"right":return t?e?ka:Ur:e?Ca:Dr;case"top-left":return e?Ea:qr;case"top-right":return e?Oa:Hr;case"up":return t?e?Aa:Zr:e?Na:Kr;default:return e?ya:Fr}}const Ra=t=>{const{big:e=!1,direction:r,reverse:a=!1,...n}=t,s=y.useMemo(()=>Ma(e,a,r),[e,r,a]);return x(P,{keyframes:s,...n})};var ue={};Y(ue,"Flip",()=>Fa);const Ta=o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,za=o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Ia=o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Pa=o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Va=o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;function Ya(t,e){switch(e){case"horizontal":return t?Pa:za;case"vertical":return t?Va:Ia;default:return Ta}}const _a=U`
  backface-visibility: visible;
`,Fa=t=>{const{direction:e,reverse:r=!1,...a}=t,n=y.useMemo(()=>Ya(r,e),[e,r]);return x(P,{css:_a,keyframes:n,...a})};var pe={};Y(pe,"Hinge",()=>Da);const Xa=o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,ja=o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,La=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ba=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,Wa=U`
  transform-origin: top left;
`,Da=t=>x(P,{css:Wa,keyframes:Xa,...t});var be={};Y(be,"JackInTheBox",()=>Ua);const Ua=t=>x(P,{keyframes:ja,...t});var $e={};Y($e,"Roll",()=>Ha);function qa(t){return t?Ba:La}const Ha=t=>{const{reverse:e=!1,...r}=t,a=y.useMemo(()=>qa(e),[e]);return x(P,{keyframes:a,...r})};var ye={};Y(ye,"Rotate",()=>on);const Ka=o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Za=o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ja=o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ga=o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Qa=o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tn=o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,en=o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,rn=o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,an=o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,nn=o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function sn(t,e){switch(e){case"bottom-left":return t?[en,{transformOrigin:"left bottom"}]:[Za,{transformOrigin:"left bottom"}];case"bottom-right":return t?[rn,{transformOrigin:"right bottom"}]:[Ja,{transformOrigin:"right bottom"}];case"top-left":return t?[an,{transformOrigin:"left bottom"}]:[Ga,{transformOrigin:"left bottom"}];case"top-right":return t?[nn,{transformOrigin:"right bottom"}]:[Qa,{transformOrigin:"right bottom"}];default:return t?[tn,{transformOrigin:"center"}]:[Ka,{transformOrigin:"center"}]}}const on=t=>{const{direction:e,reverse:r=!1,...a}=t,[n,s]=y.useMemo(()=>sn(r,e),[e,r]);return x(P,{css:s,keyframes:n,...a})};var he={};Y(he,"Slide",()=>yn);const cn=o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,fn=o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,dn=o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ln=o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,mn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,un=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,pn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,bn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function $n(t,e){switch(e){case"down":return t?mn:cn;case"right":return t?pn:dn;case"up":return t?bn:ln;case"left":default:return t?un:fn}}const yn=t=>{const{direction:e,reverse:r=!1,...a}=t,n=y.useMemo(()=>$n(r,e),[e,r]);return x(P,{keyframes:n,...a})};var ge={};Y(ge,"Zoom",()=>An);const hn=o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,gn=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,xn=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,vn=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,wn=o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Sn=o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Cn=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,kn=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,En=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,On=o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Nn(t,e){switch(e){case"down":return t?Cn:gn;case"left":return t?kn:xn;case"right":return t?En:vn;case"up":return t?On:wn;default:return t?Sn:hn}}const An=t=>{const{direction:e,reverse:r=!1,...a}=t,n=y.useMemo(()=>Nn(r,e),[e,r]);return x(P,{keyframes:n,...a})};j(L,de);j(L,le);j(L,me);j(L,ue);j(L,pe);j(L,be);j(L,$e);j(L,ye);j(L,he);j(L,ge);export{yn as $,An as a,Ra as b};
