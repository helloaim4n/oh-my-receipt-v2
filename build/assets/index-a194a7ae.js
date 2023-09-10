import{b as dm,c as fm,d as bi,r as b,A as cs,e as Wt,f as wr,g as _t,K as mm,h as Si,i as cr,k as gm,l as pm,m as _m,n as ym,o as Im,p as Em,q as vm,t as wm,u as _l,v as Tm,w as Am,x as yl,s as Be,j as z,R as Rm,C as er,B as bm}from"./index-0320931c.js";import{$ as xc,a as Sm}from"./module-0d6883c0.js";var mr=function(){function n(e,t){fm(this,n),bi(this,"name",void 0),bi(this,"style",void 0),bi(this,"_keyframe",!0),this.name=e,this.style=t}return dm(n,[{key:"getName",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t?"".concat(t,"-").concat(this.name):this.name}}]),n}(),Pm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const Cm=Pm;var Vm=function(e,t){return b.createElement(cs,Wt({},e,{ref:t,icon:Cm}))};const xm=b.forwardRef(Vm);var Dm={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};const Nm=Dm;var km=function(e,t){return b.createElement(cs,Wt({},e,{ref:t,icon:Nm}))};const Om=b.forwardRef(km);var Fm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};const Mm=Fm;var Lm=function(e,t){return b.createElement(cs,Wt({},e,{ref:t,icon:Mm}))};const Bm=b.forwardRef(Lm);var $m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const Um=$m;var qm=function(e,t){return b.createElement(cs,Wt({},e,{ref:t,icon:Um}))};const jm=b.forwardRef(qm);var Il=b.forwardRef(function(n,e){var t=n.prefixCls,r=n.style,i=n.className,s=n.duration,o=s===void 0?4.5:s,a=n.eventKey,c=n.content,u=n.closable,l=n.closeIcon,h=l===void 0?"x":l,d=n.props,f=n.onClick,y=n.onNoticeClose,E=n.times,I=b.useState(!1),S=wr(I,2),D=S[0],V=S[1],F=function(){y(a)},N=function(L){(L.key==="Enter"||L.code==="Enter"||L.keyCode===mm.ENTER)&&F()};b.useEffect(function(){if(!D&&o>0){var x=setTimeout(function(){F()},o*1e3);return function(){clearTimeout(x)}}},[o,D,E]);var w="".concat(t,"-notice");return b.createElement("div",Wt({},d,{ref:e,className:_t(w,i,bi({},"".concat(w,"-closable"),u)),style:r,onMouseEnter:function(){V(!0)},onMouseLeave:function(){V(!1)},onClick:f}),b.createElement("div",{className:"".concat(w,"-content")},c),u&&b.createElement("a",{tabIndex:0,className:"".concat(w,"-close"),onKeyDown:N,onClick:function(L){L.preventDefault(),L.stopPropagation(),F()}},h))}),zm=b.forwardRef(function(n,e){var t=n.prefixCls,r=t===void 0?"rc-notification":t,i=n.container,s=n.motion,o=n.maxCount,a=n.className,c=n.style,u=n.onAllRemoved,l=b.useState([]),h=wr(l,2),d=h[0],f=h[1],y=function(x){var L,G=d.find(function(te){return te.key===x});G==null||(L=G.onClose)===null||L===void 0||L.call(G),f(function(te){return te.filter(function(at){return at.key!==x})})};b.useImperativeHandle(e,function(){return{open:function(x){f(function(L){var G=Si(L),te=G.findIndex(function(Ws){return Ws.key===x.key}),at=cr({},x);if(te>=0){var Je;at.times=(((Je=L[te])===null||Je===void 0?void 0:Je.times)||0)+1,G[te]=at}else at.times=0,G.push(at);return o>0&&G.length>o&&(G=G.slice(-o)),G})},close:function(x){y(x)},destroy:function(){f([])}}});var E=b.useState({}),I=wr(E,2),S=I[0],D=I[1];b.useEffect(function(){var w={};d.forEach(function(x){var L=x.placement,G=L===void 0?"topRight":L;G&&(w[G]=w[G]||[],w[G].push(x))}),Object.keys(S).forEach(function(x){w[x]=w[x]||[]}),D(w)},[d]);var V=function(x){D(function(L){var G=cr({},L),te=G[x]||[];return te.length||delete G[x],G})},F=b.useRef(!1);if(b.useEffect(function(){Object.keys(S).length>0?F.current=!0:F.current&&(u==null||u(),F.current=!1)},[S]),!i)return null;var N=Object.keys(S);return gm.createPortal(b.createElement(b.Fragment,null,N.map(function(w){var x=S[w],L=x.map(function(te){return{config:te,key:te.key}}),G=typeof s=="function"?s(w):s;return b.createElement(pm,Wt({key:w,className:_t(r,"".concat(r,"-").concat(w),a==null?void 0:a(w)),style:c==null?void 0:c(w),keys:L,motionAppear:!0},G,{onAllRemoved:function(){V(w)}}),function(te,at){var Je=te.config,Ws=te.className,cm=te.style,Vc=Je.key,um=Je.times,lm=Je.className,hm=Je.style;return b.createElement(Il,Wt({},Je,{ref:at,prefixCls:r,className:_t(Ws,lm),style:cr(cr({},cm),hm),times:um,key:Vc,eventKey:Vc,onNoticeClose:y}))})})),i)}),Gm=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],Km=function(){return document.body},Dc=0;function Qm(){for(var n={},e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.forEach(function(i){i&&Object.keys(i).forEach(function(s){var o=i[s];o!==void 0&&(n[s]=o)})}),n}function Wm(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.getContainer,t=e===void 0?Km:e,r=n.motion,i=n.prefixCls,s=n.maxCount,o=n.className,a=n.style,c=n.onAllRemoved,u=_m(n,Gm),l=b.useState(),h=wr(l,2),d=h[0],f=h[1],y=b.useRef(),E=b.createElement(zm,{container:d,ref:y,prefixCls:i,motion:r,maxCount:s,className:o,style:a,onAllRemoved:c}),I=b.useState([]),S=wr(I,2),D=S[0],V=S[1],F=b.useMemo(function(){return{open:function(w){var x=Qm(u,w);(x.key===null||x.key===void 0)&&(x.key="rc-notification-".concat(Dc),Dc+=1),V(function(L){return[].concat(Si(L),[{type:"open",config:x}])})},close:function(w){V(function(x){return[].concat(Si(x),[{type:"close",key:w}])})},destroy:function(){V(function(w){return[].concat(Si(w),[{type:"destroy"}])})}}},[]);return b.useEffect(function(){f(t())}),b.useEffect(function(){y.current&&D.length&&(D.forEach(function(N){switch(N.type){case"open":y.current.open(N.config);break;case"close":y.current.close(N.key);break;case"destroy":y.current.destroy();break}}),V(function(N){return N.filter(function(w){return!D.includes(w)})}))},[D]),[F,E]}var Wr=cr({},ym),Hm=Wr.version,Ym=Wr.render;Wr.unmountComponentAtNode;var ea;try{var Xm=Number((Hm||"").split(".")[0]);Xm>=18&&(ea=Wr.createRoot)}catch{}function Nc(n){var e=Wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&Im(e)==="object"&&(e.usingClientEntryPoint=n)}var kc="__rc_react_root__";function Jm(n,e){Nc(!0);var t=e[kc]||ea(e);Nc(!1),t.render(n),e[kc]=t}function Zm(n,e){Ym(n,e)}function eg(n,e){if(ea){Jm(n,e);return}Zm(n,e)}const tg=n=>{const{componentCls:e,width:t,notificationMarginEdge:r}=n,i=new mr("antNotificationTopFadeIn",{"0%":{marginTop:"-100%",opacity:0},"100%":{marginTop:0,opacity:1}}),s=new mr("antNotificationBottomFadeIn",{"0%":{marginBottom:"-100%",opacity:0},"100%":{marginBottom:0,opacity:1}}),o=new mr("antNotificationLeftFadeIn",{"0%":{right:{_skip_check_:!0,value:t},opacity:0},"100%":{right:{_skip_check_:!0,value:0},opacity:1}});return{[`&${e}-top, &${e}-bottom`]:{marginInline:0},[`&${e}-top`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:i}},[`&${e}-bottom`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:s}},[`&${e}-topLeft, &${e}-bottomLeft`]:{marginInlineEnd:0,marginInlineStart:r,[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:o}}}},ng=tg,rg=n=>{const{iconCls:e,componentCls:t,boxShadow:r,fontSizeLG:i,notificationMarginBottom:s,borderRadiusLG:o,colorSuccess:a,colorInfo:c,colorWarning:u,colorError:l,colorTextHeading:h,notificationBg:d,notificationPadding:f,notificationMarginEdge:y,motionDurationMid:E,motionEaseInOut:I,fontSize:S,lineHeight:D,width:V,notificationIconSize:F,colorText:N}=n,w=`${t}-notice`,x=new mr("antNotificationFadeIn",{"0%":{left:{_skip_check_:!0,value:V},opacity:0},"100%":{left:{_skip_check_:!0,value:0},opacity:1}}),L=new mr("antNotificationFadeOut",{"0%":{maxHeight:n.animationMaxHeight,marginBottom:s,opacity:1},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),G={position:"relative",width:V,maxWidth:`calc(100vw - ${y*2}px)`,marginBottom:s,marginInlineStart:"auto",padding:f,overflow:"hidden",lineHeight:D,wordWrap:"break-word",background:d,borderRadius:o,boxShadow:r,[`${t}-close-icon`]:{fontSize:S,cursor:"pointer"},[`${w}-message`]:{marginBottom:n.marginXS,color:h,fontSize:i,lineHeight:n.lineHeightLG},[`${w}-description`]:{fontSize:S,color:N},[`&${w}-closable ${w}-message`]:{paddingInlineEnd:n.paddingLG},[`${w}-with-icon ${w}-message`]:{marginBottom:n.marginXS,marginInlineStart:n.marginSM+F,fontSize:i},[`${w}-with-icon ${w}-description`]:{marginInlineStart:n.marginSM+F,fontSize:S},[`${w}-icon`]:{position:"absolute",fontSize:F,lineHeight:0,[`&-success${e}`]:{color:a},[`&-info${e}`]:{color:c},[`&-warning${e}`]:{color:u},[`&-error${e}`]:{color:l}},[`${w}-close`]:{position:"absolute",top:n.notificationPaddingVertical,insetInlineEnd:n.notificationPaddingHorizontal,color:n.colorIcon,outline:"none",width:n.notificationCloseButtonSize,height:n.notificationCloseButtonSize,borderRadius:n.borderRadiusSM,transition:`background-color ${n.motionDurationMid}, color ${n.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:n.colorIconHover,backgroundColor:n.wireframe?"transparent":n.colorFillContent}},[`${w}-btn`]:{float:"right",marginTop:n.marginSM}};return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},wm(n)),{position:"fixed",zIndex:n.zIndexPopup,marginInlineEnd:y,[`${t}-hook-holder`]:{position:"relative"},[`&${t}-top, &${t}-bottom`]:{[w]:{marginInline:"auto auto"}},[`&${t}-topLeft, &${t}-bottomLeft`]:{[w]:{marginInlineEnd:"auto",marginInlineStart:0}},[`${t}-fade-enter, ${t}-fade-appear`]:{animationDuration:n.motionDurationMid,animationTimingFunction:I,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${t}-fade-leave`]:{animationTimingFunction:I,animationFillMode:"both",animationDuration:E,animationPlayState:"paused"},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:x,animationPlayState:"running"},[`${t}-fade-leave${t}-fade-leave-active`]:{animationName:L,animationPlayState:"running"}}),ng(n)),{"&-rtl":{direction:"rtl",[`${w}-btn`]:{float:"left"}}})},{[t]:{[w]:Object.assign({},G)}},{[`${w}-pure-panel`]:Object.assign(Object.assign({},G),{margin:0})}]},El=Em("Notification",n=>{const e=n.paddingMD,t=n.paddingLG,r=vm(n,{notificationBg:n.colorBgElevated,notificationPaddingVertical:e,notificationPaddingHorizontal:t,notificationIconSize:n.fontSizeLG*n.lineHeightLG,notificationCloseButtonSize:n.controlHeightLG*.55,notificationMarginBottom:n.margin,notificationPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`,notificationMarginEdge:n.marginLG,animationMaxHeight:150});return[rg(r)]},n=>({zIndexPopup:n.zIndexPopupBase+50,width:384}),{clientOnly:!0});var ig=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t};function ta(n,e){return e===null||e===!1?null:e||b.createElement("span",{className:`${n}-close-x`},b.createElement(Tm,{className:`${n}-close-icon`}))}const sg={success:xm,info:jm,error:Om,warning:Bm},vl=n=>{const{prefixCls:e,icon:t,type:r,message:i,description:s,btn:o,role:a="alert"}=n;let c=null;return t?c=b.createElement("span",{className:`${e}-icon`},t):r&&(c=b.createElement(sg[r]||null,{className:_t(`${e}-icon`,`${e}-icon-${r}`)})),b.createElement("div",{className:_t({[`${e}-with-icon`]:c}),role:a},c,b.createElement("div",{className:`${e}-message`},i),b.createElement("div",{className:`${e}-description`},s),o&&b.createElement("div",{className:`${e}-btn`},o))},og=n=>{const{prefixCls:e,className:t,icon:r,type:i,message:s,description:o,btn:a,closable:c=!0,closeIcon:u}=n,l=ig(n,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),{getPrefixCls:h}=b.useContext(_l),d=e||h("notification"),f=`${d}-notice`,[,y]=El(d);return b.createElement(Il,Object.assign({},l,{prefixCls:d,className:_t(t,y,`${f}-pure-panel`),eventKey:"pure",duration:null,closable:c,closeIcon:ta(d,u),content:b.createElement(vl,{prefixCls:f,icon:r,type:i,message:s,description:o,btn:a})}))},ag=og;function cg(n,e,t){let r;switch(n){case"top":r={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":r={left:0,top:e,bottom:"auto"};break;case"topRight":r={right:0,top:e,bottom:"auto"};break;case"bottom":r={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:t};break;case"bottomLeft":r={left:0,top:"auto",bottom:t};break;default:r={right:0,top:"auto",bottom:t};break}return r}function ug(n){return{motionName:`${n}-fade`}}var lg=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t};const Oc=24,hg=4.5,dg="topRight",fg=b.forwardRef((n,e)=>{const{top:t,bottom:r,prefixCls:i,getContainer:s,maxCount:o,rtl:a,onAllRemoved:c}=n,{getPrefixCls:u,getPopupContainer:l,notification:h}=b.useContext(_l),d=i||u("notification"),f=V=>cg(V,t??Oc,r??Oc),[,y]=El(d),E=()=>_t(y,{[`${d}-rtl`]:a}),I=()=>ug(d),[S,D]=Wm({prefixCls:d,style:f,className:E,motion:I,closable:!0,closeIcon:ta(d),duration:hg,getContainer:()=>(s==null?void 0:s())||(l==null?void 0:l())||document.body,maxCount:o,onAllRemoved:c});return b.useImperativeHandle(e,()=>Object.assign(Object.assign({},S),{prefixCls:d,hashId:y,notification:h})),D});function wl(n){const e=b.useRef(null);return[b.useMemo(()=>{const r=a=>{var c;if(!e.current)return;const{open:u,prefixCls:l,hashId:h,notification:d}=e.current,f=`${l}-notice`,{message:y,description:E,icon:I,type:S,btn:D,className:V,style:F,role:N="alert",closeIcon:w}=a,x=lg(a,["message","description","icon","type","btn","className","style","role","closeIcon"]),L=ta(f,w);return u(Object.assign(Object.assign({placement:(c=n==null?void 0:n.placement)!==null&&c!==void 0?c:dg},x),{content:b.createElement(vl,{prefixCls:f,icon:I,type:S,message:y,description:E,btn:D,role:N}),className:_t(S&&`${f}-${S}`,h,V,d==null?void 0:d.className),style:Object.assign(Object.assign({},d==null?void 0:d.style),F),closeIcon:L,closable:!!L}))},s={open:r,destroy:a=>{var c,u;a!==void 0?(c=e.current)===null||c===void 0||c.close(a):(u=e.current)===null||u===void 0||u.destroy()}};return["success","info","warning","error"].forEach(a=>{s[a]=c=>r(Object.assign(Object.assign({},c),{type:a}))}),s},[]),b.createElement(fg,Object.assign({key:"notification-holder"},n,{ref:e}))]}function mg(n){return wl(n)}let $e=null,Pi=n=>n(),Mi=[],Li={};function gg(){const{prefixCls:n,getContainer:e,rtl:t,maxCount:r,top:i,bottom:s}=Li,o=n??yl().getPrefixCls("notification"),a=(e==null?void 0:e())||document.body;return{prefixCls:o,container:a,rtl:t,maxCount:r,top:i,bottom:s}}const pg=b.forwardRef((n,e)=>{const[t,r]=b.useState(),[i,s]=b.useState(),[o,a]=b.useState(),[c,u]=b.useState(),[l,h]=b.useState(),[d,f]=b.useState(),[y,E]=wl({prefixCls:t,getContainer:()=>i,maxCount:o,rtl:c,top:l,bottom:d}),I=yl(),S=I.getRootPrefixCls(),D=I.getIconPrefixCls(),V=I.getTheme(),F=()=>{const{prefixCls:N,container:w,maxCount:x,rtl:L,top:G,bottom:te}=gg();r(N),s(w),a(x),u(L),h(G),f(te)};return b.useEffect(F,[]),b.useImperativeHandle(e,()=>{const N=Object.assign({},y);return Object.keys(N).forEach(w=>{N[w]=function(){return F(),y[w].apply(y,arguments)}}),{instance:N,sync:F}}),b.createElement(Am,{prefixCls:S,iconPrefixCls:D,theme:V},E)});function na(){if(!$e){const n=document.createDocumentFragment(),e={fragment:n};$e=e,Pi(()=>{eg(b.createElement(pg,{ref:t=>{const{instance:r,sync:i}=t||{};Promise.resolve().then(()=>{!e.instance&&r&&(e.instance=r,e.sync=i,na())})}}),n)});return}$e.instance&&(Mi.forEach(n=>{switch(n.type){case"open":{Pi(()=>{$e.instance.open(Object.assign(Object.assign({},Li),n.config))});break}case"destroy":Pi(()=>{$e==null||$e.instance.destroy(n.key)});break}}),Mi=[])}function _g(n){Li=Object.assign(Object.assign({},Li),n),Pi(()=>{var e;(e=$e==null?void 0:$e.sync)===null||e===void 0||e.call($e)})}function Tl(n){Mi.push({type:"open",config:n}),na()}function yg(n){Mi.push({type:"destroy",key:n}),na()}const Ig=["success","info","warning","error"],Eg={open:Tl,destroy:yg,config:_g,useNotification:mg,_InternalPanelDoNotUseOrYouWillBeFired:ag},Al=Eg;Ig.forEach(n=>{Al[n]=e=>Tl(Object.assign(Object.assign({},e),{type:n}))});const vg=Al;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},wg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Tg;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ag=function(n){const e=Rl(n);return bl.encodeByteArray(e,!0)},Bi=function(n){return Ag(n).replace(/\./g,"")},Rg=function(n){try{return bl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function $i(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bg(t)||(n[t]=$i(n[t],e[t]));return n}function bg(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=()=>Sg().__FIREBASE_DEFAULTS__,Cg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rg(n[1]);return e&&JSON.parse(e)},Sl=()=>{try{return Pg()||Cg()||Vg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pl=()=>{var n;return(n=Sl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Bi(JSON.stringify(t)),Bi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ng(){var n;const e=(n=Sl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kg(){return typeof self=="object"&&self.self===self}function Og(){return!Ng()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cl(){try{return typeof indexedDB=="object"}catch{return!1}}function Fg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="FirebaseError";class an extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mg,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Lg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new an(i,a,r)}}function Lg(n,e){return n.replace(Bg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function go(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Mc(s)&&Mc(o)){if(!go(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Mc(n){return n!==null&&typeof n=="object"}function $g(n,e){const t=new Ug(n,e);return t.subscribe.bind(t)}class Ug{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Hs),i.error===void 0&&(i.error=Hs),i.complete===void 0&&(i.complete=Hs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n){return n&&n._delegate?n._delegate:n}class Ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gg(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zg(n){return n===Ft?void 0:n}function Gg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=[];var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Vl={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Qg=$.INFO,Wg={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Hg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Wg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=Qg,this._logHandler=Hg,this._userLogHandler=null,ra.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}function Yg(n){ra.forEach(e=>{e.setLogLevel(n)})}function Xg(n,e){for(const t of ra){let r=null;e&&e.level&&(r=Vl[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:$[s].toLowerCase(),message:a,args:o,type:i.name})}}}const Jg=(n,e)=>e.some(t=>n instanceof t);let Lc,Bc;function Zg(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xl=new WeakMap,po=new WeakMap,Dl=new WeakMap,Ys=new WeakMap,sa=new WeakMap;function tp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(mt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xl.set(t,n)}).catch(()=>{}),sa.set(e,n),e}function np(n){if(po.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});po.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return po.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Dl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rp(n){_o=n(_o)}function ip(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Xs(this),e,...t);return Dl.set(r,e.sort?e.sort():[e]),mt(r)}:ep().includes(n)?function(...e){return n.apply(Xs(this),e),mt(xl.get(this))}:function(...e){return mt(n.apply(Xs(this),e))}}function sp(n){return typeof n=="function"?ip(n):(n instanceof IDBTransaction&&np(n),Jg(n,Zg())?new Proxy(n,_o):n)}function mt(n){if(n instanceof IDBRequest)return tp(n);if(Ys.has(n))return Ys.get(n);const e=sp(n);return e!==n&&(Ys.set(n,e),sa.set(e,n)),e}const Xs=n=>sa.get(n);function op(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=mt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(mt(o.result),c.oldVersion,c.newVersion,mt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ap=["get","getKey","getAll","getAllKeys","count"],cp=["put","add","delete","clear"],Js=new Map;function $c(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Js.get(e))return Js.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=cp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ap.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Js.set(e,s),s}rp(n=>({...n,get:(e,t,r)=>$c(e,t)||n.get(e,t,r),has:(e,t)=>!!$c(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",Uc="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new ia("@firebase/app"),hp="@firebase/app-compat",dp="@firebase/analytics-compat",fp="@firebase/analytics",mp="@firebase/app-check-compat",gp="@firebase/app-check",pp="@firebase/auth",_p="@firebase/auth-compat",yp="@firebase/database",Ip="@firebase/database-compat",Ep="@firebase/functions",vp="@firebase/functions-compat",wp="@firebase/installations",Tp="@firebase/installations-compat",Ap="@firebase/messaging",Rp="@firebase/messaging-compat",bp="@firebase/performance",Sp="@firebase/performance-compat",Pp="@firebase/remote-config",Cp="@firebase/remote-config-compat",Vp="@firebase/storage",xp="@firebase/storage-compat",Dp="@firebase/firestore",Np="@firebase/firestore-compat",kp="firebase",Op="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]",Fp={[yo]:"fire-core",[hp]:"fire-core-compat",[fp]:"fire-analytics",[dp]:"fire-analytics-compat",[gp]:"fire-app-check",[mp]:"fire-app-check-compat",[pp]:"fire-auth",[_p]:"fire-auth-compat",[yp]:"fire-rtdb",[Ip]:"fire-rtdb-compat",[Ep]:"fire-fn",[vp]:"fire-fn-compat",[wp]:"fire-iid",[Tp]:"fire-iid-compat",[Ap]:"fire-fcm",[Rp]:"fire-fcm-compat",[bp]:"fire-perf",[Sp]:"fire-perf-compat",[Pp]:"fire-rc",[Cp]:"fire-rc-compat",[Vp]:"fire-gcs",[xp]:"fire-gcs-compat",[Dp]:"fire-fst",[Np]:"fire-fst-compat","fire-js":"fire-js",[kp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map,Tr=new Map;function Ui(n,e){try{n.container.addComponent(e)}catch(t){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nl(n,e){n.container.addOrOverwriteComponent(e)}function Vn(n){const e=n.name;if(Tr.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Tr.set(e,n);for(const t of It.values())Ui(t,n);return!0}function kl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Mp(n,e,t=yt){kl(n,e).clearInstance(t)}function Lp(){Tr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new us("app","Firebase",Bp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $p=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=Op;function aa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tt.create("bad-app-name",{appName:String(i)});if(t||(t=Pl()),!t)throw tt.create("no-options");const s=It.get(i);if(s){if(go(t,s.options)&&go(r,s.config))return s;throw tt.create("duplicate-app",{appName:i})}const o=new Kg(i);for(const c of Tr.values())o.addComponent(c);const a=new $p(t,r,o);return It.set(i,a),a}function Up(n=yt){const e=It.get(n);if(!e&&n===yt&&Pl())return aa();if(!e)throw tt.create("no-app",{appName:n});return e}function qp(){return Array.from(It.values())}async function Ol(n){const e=n.name;It.has(e)&&(It.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function gt(n,e,t){var r;let i=(r=Fp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}Vn(new Ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Fl(n,e){if(n!==null&&typeof n!="function")throw tt.create("invalid-log-argument");Xg(n,e)}function Ml(n){Yg(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="firebase-heartbeat-database",zp=1,Ar="firebase-heartbeat-store";let Zs=null;function Ll(){return Zs||(Zs=op(jp,zp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ar)}}}).catch(n=>{throw tt.create("idb-open",{originalErrorMessage:n.message})})),Zs}async function Gp(n){try{return await(await Ll()).transaction(Ar).objectStore(Ar).get(Bl(n))}catch(e){if(e instanceof an)Yt.warn(e.message);else{const t=tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(t.message)}}}async function qc(n,e){try{const r=(await Ll()).transaction(Ar,"readwrite");await r.objectStore(Ar).put(e,Bl(n)),await r.done}catch(t){if(t instanceof an)Yt.warn(t.message);else{const r=tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(r.message)}}}function Bl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=1024,Qp=30*24*60*60*1e3;class Wp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Qp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jc(),{heartbeatsToSend:t,unsentEntries:r}=Hp(this._heartbeatsCache.heartbeats),i=Bi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jc(){return new Date().toISOString().substring(0,10)}function Hp(n,e=Kp){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),zc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cl()?Fg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zc(n){return Bi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){Vn(new Ht("platform-logger",e=>new up(e),"PRIVATE")),Vn(new Ht("heartbeat",e=>new Wp(e),"PRIVATE")),gt(yo,Uc,n),gt(yo,Uc,"esm2017"),gt("fire-js","")}Xp("");const Jp=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:an,SDK_VERSION:oa,_DEFAULT_ENTRY_NAME:yt,_addComponent:Ui,_addOrOverwriteComponent:Nl,_apps:It,_clearComponents:Lp,_components:Tr,_getProvider:kl,_registerComponent:Vn,_removeServiceInstance:Mp,deleteApp:Ol,getApp:Up,getApps:qp,initializeApp:aa,onLog:Fl,registerVersion:gt,setLogLevel:Ml},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this._delegate=e,this.firebase=t,Ui(e,new Ht("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ol(this._delegate)))}_getService(e,t=yt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=yt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ui(this._delegate,e)}_addOrOverwriteComponent(e){Nl(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Gc=new us("app-compat","Firebase",e_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:gt,setLogLevel:Ml,onLog:Fl,apps:null,SDK_VERSION:oa,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Jp}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||yt,!Fc(e,u))throw Gc.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=aa(u,l);if(Fc(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Vn(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Gc.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&$i(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){const n=t_(Zp);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:$l,extendNamespace:e,createSubscribe:$g,ErrorFactory:us,deepExtend:$i});function e(t){$i(n,t)}return n}const n_=$l();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new ia("@firebase/app-compat"),r_="@firebase/app-compat",i_="0.2.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n){gt(r_,i_,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(kg()&&self.firebase!==void 0){Kc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Kc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Rr=n_;s_();var o_="firebase",a_="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr.registerVersion(o_,a_,"app-compat");var c_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,ca=ca||{},k=c_||self;function ls(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Hr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function u_(n){return Object.prototype.hasOwnProperty.call(n,eo)&&n[eo]||(n[eo]=++l_)}var eo="closure_uid_"+(1e9*Math.random()>>>0),l_=0;function h_(n,e,t){return n.call.apply(n.bind,arguments)}function d_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Te(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Te=h_:Te=d_,Te.apply(null,arguments)}function pi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ge(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ct(){this.s=this.s,this.o=this.o}var f_=0;Ct.prototype.s=!1;Ct.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),f_!=0)&&u_(this)};Ct.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ul=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ua(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Qc(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ls(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Ae(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var m_=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",()=>{},e),k.removeEventListener("test",()=>{},e)}catch{}return n}();function br(n){return/^[\s\xa0]*$/.test(n)}function hs(){var n=k.navigator;return n&&(n=n.userAgent)?n:""}function ze(n){return hs().indexOf(n)!=-1}function la(n){return la[" "](n),n}la[" "]=function(){};function g_(n,e){var t=ay;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var p_=ze("Opera"),xn=ze("Trident")||ze("MSIE"),ql=ze("Edge"),Io=ql||xn,jl=ze("Gecko")&&!(hs().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge"))&&!(ze("Trident")||ze("MSIE"))&&!ze("Edge"),__=hs().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge");function zl(){var n=k.document;return n?n.documentMode:void 0}var Eo;e:{var to="",no=function(){var n=hs();if(jl)return/rv:([^\);]+)(\)|;)/.exec(n);if(ql)return/Edge\/([\d\.]+)/.exec(n);if(xn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(__)return/WebKit\/(\S+)/.exec(n);if(p_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(no&&(to=no?no[1]:""),xn){var ro=zl();if(ro!=null&&ro>parseFloat(to)){Eo=String(ro);break e}}Eo=to}var vo;if(k.document&&xn){var Wc=zl();vo=Wc||parseInt(Eo,10)||void 0}else vo=void 0;var y_=vo;function Sr(n,e){if(Ae.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(jl){e:{try{la(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:I_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Sr.$.h.call(this)}}ge(Sr,Ae);var I_={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),E_=0;function v_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++E_,this.fa=this.ia=!1}function ds(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ha(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function w_(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Gl(n){const e={};for(const t in n)e[t]=n[t];return e}const Hc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kl(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Hc.length;s++)t=Hc[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function fs(n){this.src=n,this.g={},this.h=0}fs.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=To(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new v_(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function wo(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Ul(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ds(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function To(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var da="closure_lm_"+(1e6*Math.random()|0),io={};function Ql(n,e,t,r,i){if(r&&r.once)return Hl(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ql(n,e[s],t,r,i);return null}return t=ga(t),n&&n[Yr]?n.O(e,t,Hr(r)?!!r.capture:!!r,i):Wl(n,e,t,!1,r,i)}function Wl(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Hr(i)?!!i.capture:!!i,a=ma(n);if(a||(n[da]=a=new fs(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=T_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)m_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Xl(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function T_(){function n(t){return e.call(n.src,n.listener,t)}const e=A_;return n}function Hl(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hl(n,e[s],t,r,i);return null}return t=ga(t),n&&n[Yr]?n.P(e,t,Hr(r)?!!r.capture:!!r,i):Wl(n,e,t,!0,r,i)}function Yl(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Yl(n,e[s],t,r,i);else r=Hr(r)?!!r.capture:!!r,t=ga(t),n&&n[Yr]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=To(s,t,r,i),-1<t&&(ds(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ma(n))&&(e=n.g[e.toString()],n=-1,e&&(n=To(e,t,r,i)),(t=-1<n?e[n]:null)&&fa(t))}function fa(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Yr])wo(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Xl(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ma(e))?(wo(t,n),t.h==0&&(t.src=null,e[da]=null)):ds(n)}}}function Xl(n){return n in io?io[n]:io[n]="on"+n}function A_(n,e){if(n.fa)n=!0;else{e=new Sr(e,this);var t=n.listener,r=n.la||n.src;n.ia&&fa(n),n=t.call(r,e)}return n}function ma(n){return n=n[da],n instanceof fs?n:null}var so="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(n){return typeof n=="function"?n:(n[so]||(n[so]=function(e){return n.handleEvent(e)}),n[so])}function me(){Ct.call(this),this.i=new fs(this),this.S=this,this.J=null}ge(me,Ct);me.prototype[Yr]=!0;me.prototype.removeEventListener=function(n,e,t,r){Yl(this,n,e,t,r)};function ve(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Ae(e,n);else if(e instanceof Ae)e.target=e.target||n;else{var i=e;e=new Ae(r,n),Kl(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=_i(o,r,!0,e)&&i}if(o=e.g=n,i=_i(o,r,!0,e)&&i,i=_i(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=_i(o,r,!1,e)&&i}me.prototype.N=function(){if(me.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ds(t[r]);delete n.g[e],n.h--}}this.J=null};me.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};me.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function _i(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&wo(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var pa=k.JSON.stringify;class R_{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function b_(){var n=_a;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class S_{constructor(){this.h=this.g=null}add(e,t){const r=Jl.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Jl=new R_(()=>new P_,n=>n.reset());class P_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function C_(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function V_(n){k.setTimeout(()=>{throw n},0)}let Pr,Cr=!1,_a=new S_,Zl=()=>{const n=k.Promise.resolve(void 0);Pr=()=>{n.then(x_)}};var x_=()=>{for(var n;n=b_();){try{n.h.call(n.g)}catch(t){V_(t)}var e=Jl;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Cr=!1};function ms(n,e){me.call(this),this.h=n||1,this.g=e||k,this.j=Te(this.qb,this),this.l=Date.now()}ge(ms,me);A=ms.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ve(this,"tick"),this.ga&&(ya(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ya(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}A.N=function(){ms.$.N.call(this),ya(this),delete this.g};function Ia(n,e,t){if(typeof n=="function")t&&(n=Te(n,t));else if(n&&typeof n.handleEvent=="function")n=Te(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function eh(n){n.g=Ia(()=>{n.g=null,n.i&&(n.i=!1,eh(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class D_ extends Ct{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eh(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(n){Ct.call(this),this.h=n,this.g={}}ge(Vr,Ct);var Yc=[];function th(n,e,t,r){Array.isArray(t)||(t&&(Yc[0]=t.toString()),t=Yc);for(var i=0;i<t.length;i++){var s=Ql(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function nh(n){ha(n.g,function(e,t){this.g.hasOwnProperty(t)&&fa(e)},n),n.g={}}Vr.prototype.N=function(){Vr.$.N.call(this),nh(this)};Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gs(){this.g=!0}gs.prototype.Ea=function(){this.g=!1};function N_(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function k_(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function An(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+F_(n,t)+(r?" "+r:"")})}function O_(n,e){n.info(function(){return"TIMEOUT: "+e})}gs.prototype.info=function(){};function F_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pa(t)}catch{return e}}var cn={},Xc=null;function ps(){return Xc=Xc||new me}cn.Ta="serverreachability";function rh(n){Ae.call(this,cn.Ta,n)}ge(rh,Ae);function xr(n){const e=ps();ve(e,new rh(e))}cn.STAT_EVENT="statevent";function ih(n,e){Ae.call(this,cn.STAT_EVENT,n),this.stat=e}ge(ih,Ae);function Se(n){const e=ps();ve(e,new ih(e,n))}cn.Ua="timingevent";function sh(n,e){Ae.call(this,cn.Ua,n),this.size=e}ge(sh,Ae);function Xr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var _s={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ea(){}Ea.prototype.h=null;function Jc(n){return n.h||(n.h=n.i())}function ah(){}var Jr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function va(){Ae.call(this,"d")}ge(va,Ae);function wa(){Ae.call(this,"c")}ge(wa,Ae);var Ao;function ys(){}ge(ys,Ea);ys.prototype.g=function(){return new XMLHttpRequest};ys.prototype.i=function(){return{}};Ao=new ys;function Zr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Vr(this),this.P=M_,n=Io?125:void 0,this.V=new ms(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ch}function ch(){this.i=null,this.g="",this.h=!1}var M_=45e3,Ro={},qi={};A=Zr.prototype;A.setTimeout=function(n){this.P=n};function bo(n,e,t){n.L=1,n.v=Es(nt(e)),n.s=t,n.S=!0,uh(n,null)}function uh(n,e){n.G=Date.now(),ei(n),n.A=nt(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),_h(t.i,"t",r),n.C=0,t=n.l.J,n.h=new ch,n.g=Lh(n.l,t?e:null,!n.s),0<n.O&&(n.M=new D_(Te(n.Pa,n,n.g),n.O)),th(n.U,n.g,"readystatechange",n.nb),e=n.I?Gl(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),xr(),N_(n.j,n.u,n.A,n.m,n.W,n.s)}A.nb=function(n){n=n.target;const e=this.M;e&&Ge(n)==3?e.l():this.Pa(n)};A.Pa=function(n){try{if(n==this.g)e:{const l=Ge(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Io||this.g&&(this.h.h||this.g.ja()||nu(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?xr(3):xr(2)),Is(this);var t=this.g.da();this.ca=t;t:if(lh(this)){var r=nu(this.g);n="";var i=r.length,s=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),gr(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,k_(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!br(a)){var u=a;break t}}u=null}if(t=u)An(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,So(this,t);else{this.i=!1,this.o=3,Se(12),jt(this),gr(this);break e}}this.S?(hh(this,l,o),Io&&this.i&&l==3&&(th(this.U,this.V,"tick",this.mb),this.V.start())):(An(this.j,this.m,o,null),So(this,o)),l==4&&jt(this),this.i&&!this.J&&(l==4?kh(this.l,this):(this.i=!1,ei(this)))}else iy(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Se(12)):(this.o=0,Se(13)),jt(this),gr(this)}}}catch{}finally{}};function lh(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function hh(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=L_(n,t),i==qi){e==4&&(n.o=4,Se(14),r=!1),An(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Ro){n.o=4,Se(15),An(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else An(n.j,n.m,i,null),So(n,i);lh(n)&&i!=qi&&i!=Ro&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Se(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Pa(e),e.M=!0,Se(11))):(An(n.j,n.m,t,"[Invalid Chunked Response]"),jt(n),gr(n))}A.mb=function(){if(this.g){var n=Ge(this.g),e=this.g.ja();this.C<e.length&&(Is(this),hh(this,n,e),this.i&&n!=4&&ei(this))}};function L_(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?qi:(t=Number(e.substring(t,r)),isNaN(t)?Ro:(r+=1,r+t>e.length?qi:(e=e.slice(r,r+t),n.C=r+t,e)))}A.cancel=function(){this.J=!0,jt(this)};function ei(n){n.Y=Date.now()+n.P,dh(n,n.P)}function dh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Xr(Te(n.lb,n),e)}function Is(n){n.B&&(k.clearTimeout(n.B),n.B=null)}A.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(O_(this.j,this.A),this.L!=2&&(xr(),Se(17)),jt(this),this.o=2,gr(this)):dh(this,this.Y-n)};function gr(n){n.l.H==0||n.J||kh(n.l,n)}function jt(n){Is(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ya(n.V),nh(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function So(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Po(t.i,n))){if(!n.K&&Po(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Gi(t),As(t);else break e;Sa(t),Se(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Xr(Te(t.ib,t),6e3));if(1>=Eh(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else zt(t,11)}else if((n.K||t.g==n)&&Gi(t),!br(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ta(s,s.h),s.h=null))}if(r.F){const E=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Y(r.I,r.F,E))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Mh(r,r.J?r.pa:null,r.Y),o.K){vh(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Is(a),ei(a)),r.g=o}else Dh(r);0<t.j.length&&Rs(t)}else u[0]!="stop"&&u[0]!="close"||zt(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zt(t,7):ba(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}xr(4)}catch{}}function B_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ls(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function $_(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ls(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function fh(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ls(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=$_(n),r=B_(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var mh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function U_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Qt){this.h=n.h,ji(this,n.j),this.s=n.s,this.g=n.g,zi(this,n.m),this.l=n.l;var e=n.i,t=new Dr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Zc(this,t),this.o=n.o}else n&&(e=String(n).match(mh))?(this.h=!1,ji(this,e[1]||"",!0),this.s=ur(e[2]||""),this.g=ur(e[3]||"",!0),zi(this,e[4]),this.l=ur(e[5]||"",!0),Zc(this,e[6]||"",!0),this.o=ur(e[7]||"")):(this.h=!1,this.i=new Dr(null,this.h))}Qt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(lr(e,eu,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(lr(e,eu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(lr(t,t.charAt(0)=="/"?z_:j_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",lr(t,K_)),n.join("")};function nt(n){return new Qt(n)}function ji(n,e,t){n.j=t?ur(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function zi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Zc(n,e,t){e instanceof Dr?(n.i=e,Q_(n.i,n.h)):(t||(e=lr(e,G_)),n.i=new Dr(e,n.h))}function Y(n,e,t){n.i.set(e,t)}function Es(n){return Y(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ur(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function lr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,q_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function q_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var eu=/[#\/\?@]/g,j_=/[#\?:]/g,z_=/[#\?]/g,G_=/[#\?@]/g,K_=/#/g;function Dr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Vt(n){n.g||(n.g=new Map,n.h=0,n.i&&U_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}A=Dr.prototype;A.add=function(n,e){Vt(this),this.i=null,n=zn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function gh(n,e){Vt(n),e=zn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function ph(n,e){return Vt(n),e=zn(n,e),n.g.has(e)}A.forEach=function(n,e){Vt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};A.ta=function(){Vt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};A.Z=function(n){Vt(this);let e=[];if(typeof n=="string")ph(this,n)&&(e=e.concat(this.g.get(zn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};A.set=function(n,e){return Vt(this),this.i=null,n=zn(this,n),ph(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};A.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function _h(n,e,t){gh(n,e),0<t.length&&(n.i=null,n.g.set(zn(n,e),ua(t)),n.h+=t.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function zn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Q_(n,e){e&&!n.j&&(Vt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(gh(this,r),_h(this,i,t))},n)),n.j=e}var W_=class{constructor(n,e){this.g=n,this.map=e}};function yh(n){this.l=n||H_,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var H_=10;function Ih(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Eh(n){return n.h?1:n.g?n.g.size:0}function Po(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Ta(n,e){n.g?n.g.add(e):n.h=e}function vh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}yh.prototype.cancel=function(){if(this.i=wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function wh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return ua(n.i)}var Y_=class{stringify(n){return k.JSON.stringify(n,void 0)}parse(n){return k.JSON.parse(n,void 0)}};function X_(){this.g=new Y_}function J_(n,e,t){const r=t||"";try{fh(n,function(i,s){let o=i;Hr(i)&&(o=pa(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Z_(n,e){const t=new gs;if(k.Image){const r=new Image;r.onload=pi(yi,t,r,"TestLoadImage: loaded",!0,e),r.onerror=pi(yi,t,r,"TestLoadImage: error",!1,e),r.onabort=pi(yi,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=pi(yi,t,r,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function yi(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function vs(n){this.l=n.fc||null,this.j=n.ob||!1}ge(vs,Ea);vs.prototype.g=function(){return new ws(this.l,this.j)};vs.prototype.i=function(n){return function(){return n}}({});function ws(n,e){me.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Aa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(ws,me);var Aa=0;A=ws.prototype;A.open=function(n,e){if(this.readyState!=Aa)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Nr(this)};A.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||k).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=Aa};A.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Th(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Th(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}A.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ti(this):Nr(this),this.readyState==3&&Th(this)}};A.Za=function(n){this.g&&(this.response=this.responseText=n,ti(this))};A.Ya=function(n){this.g&&(this.response=n,ti(this))};A.ka=function(){this.g&&ti(this)};function ti(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Nr(n)}A.setRequestHeader=function(n,e){this.v.append(n,e)};A.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Nr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var ey=k.JSON.parse;function ie(n){me.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ah,this.L=this.M=!1}ge(ie,me);var Ah="",ty=/^https?$/i,ny=["POST","PUT"];A=ie.prototype;A.Oa=function(n){this.M=n};A.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ao.g(),this.C=this.u?Jc(this.u):Jc(Ao),this.g.onreadystatechange=Te(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){tu(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&n instanceof k.FormData,!(0<=Ul(ny,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sh(this),0<this.B&&((this.L=ry(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Te(this.ua,this)):this.A=Ia(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){tu(this,s)}};function ry(n){return xn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}A.ua=function(){typeof ca<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ve(this,"timeout"),this.abort(8))};function tu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Rh(n),Ts(n)}function Rh(n){n.F||(n.F=!0,ve(n,"complete"),ve(n,"error"))}A.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ve(this,"complete"),ve(this,"abort"),Ts(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ts(this,!0)),ie.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?bh(this):this.kb())};A.kb=function(){bh(this)};function bh(n){if(n.h&&typeof ca<"u"&&(!n.C[1]||Ge(n)!=4||n.da()!=2)){if(n.v&&Ge(n)==4)Ia(n.La,0,n);else if(ve(n,"readystatechange"),Ge(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(mh)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!ty.test(i?i.toLowerCase():"")}t=r}if(t)ve(n,"complete"),ve(n,"success");else{n.m=6;try{var s=2<Ge(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Rh(n)}}finally{Ts(n)}}}}function Ts(n,e){if(n.g){Sh(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ve(n,"ready");try{t.onreadystatechange=r}catch{}}}function Sh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}A.isActive=function(){return!!this.g};function Ge(n){return n.g?n.g.readyState:0}A.da=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),ey(e)}};function nu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Ah:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function iy(n){const e={};n=(n.g&&2<=Ge(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(br(n[r]))continue;var t=C_(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}w_(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ph(n){let e="";return ha(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Ra(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Ph(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Y(n,e,t))}function tr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ch(n){this.Ga=0,this.j=[],this.l=new gs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=tr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=tr("baseRetryDelayMs",5e3,n),this.hb=tr("retryDelaySeedMs",1e4,n),this.eb=tr("forwardChannelMaxRetries",2,n),this.xa=tr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new yh(n&&n.concurrentRequestLimit),this.Ja=new X_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=Ch.prototype;A.ra=8;A.H=1;function ba(n){if(Vh(n),n.H==3){var e=n.W++,t=nt(n.I);if(Y(t,"SID",n.K),Y(t,"RID",e),Y(t,"TYPE","terminate"),ni(n,t),e=new Zr(n,n.l,e),e.L=2,e.v=Es(nt(t)),t=!1,k.navigator&&k.navigator.sendBeacon)try{t=k.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=Lh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ei(e)}Fh(n)}function As(n){n.g&&(Pa(n),n.g.cancel(),n.g=null)}function Vh(n){As(n),n.u&&(k.clearTimeout(n.u),n.u=null),Gi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function Rs(n){if(!Ih(n.i)&&!n.m){n.m=!0;var e=n.Na;Pr||Zl(),Cr||(Pr(),Cr=!0),_a.add(e,n),n.C=0}}function sy(n,e){return Eh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Xr(Te(n.Na,n,e),Oh(n,n.C)),n.C++,!0)}A.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Zr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Gl(s),Kl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=xh(this,i,e),t=nt(this.I),Y(t,"RID",n),Y(t,"CVER",22),this.F&&Y(t,"X-HTTP-Session-Id",this.F),ni(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Ph(s)))+"&"+e:this.o&&Ra(t,this.o,s)),Ta(this.i,i),this.bb&&Y(t,"TYPE","init"),this.P?(Y(t,"$req",e),Y(t,"SID","null"),i.aa=!0,bo(i,t,null)):bo(i,t,e),this.H=2}}else this.H==3&&(n?ru(this,n):this.j.length==0||Ih(this.i)||ru(this))};function ru(n,e){var t;e?t=e.m:t=n.W++;const r=nt(n.I);Y(r,"SID",n.K),Y(r,"RID",t),Y(r,"AID",n.V),ni(n,r),n.o&&n.s&&Ra(r,n.o,n.s),t=new Zr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=xh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Ta(n.i,t),bo(t,r,e)}function ni(n,e){n.na&&ha(n.na,function(t,r){Y(e,r,t)}),n.h&&fh({},function(t,r){Y(e,r,t)})}function xh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Te(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{J_(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Dh(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Pr||Zl(),Cr||(Pr(),Cr=!0),_a.add(e,n),n.A=0}}function Sa(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Xr(Te(n.Ma,n),Oh(n,n.A)),n.A++,!0)}A.Ma=function(){if(this.u=null,Nh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Xr(Te(this.jb,this),n)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Se(10),As(this),Nh(this))};function Pa(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function Nh(n){n.g=new Zr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=nt(n.wa);Y(e,"RID","rpc"),Y(e,"SID",n.K),Y(e,"AID",n.V),Y(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Y(e,"TO",n.qa),Y(e,"TYPE","xmlhttp"),ni(n,e),n.o&&n.s&&Ra(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Es(nt(e)),t.s=null,t.S=!0,uh(t,n)}A.ib=function(){this.v!=null&&(this.v=null,As(this),Sa(this),Se(19))};function Gi(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function kh(n,e){var t=null;if(n.g==e){Gi(n),Pa(n),n.g=null;var r=2}else if(Po(n.i,e))t=e.F,vh(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=ps(),ve(r,new sh(r,t)),Rs(n)}else Dh(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&sy(n,e)||r==2&&Sa(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:zt(n,5);break;case 4:zt(n,10);break;case 3:zt(n,6);break;default:zt(n,2)}}}function Oh(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function zt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Te(n.pb,n);t||(t=new Qt("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||ji(t,"https"),Es(t)),Z_(t.toString(),r)}else Se(2);n.H=0,n.h&&n.h.za(e),Fh(n),Vh(n)}A.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Se(2)):(this.l.info("Failed to ping google.com"),Se(1))};function Fh(n){if(n.H=0,n.ma=[],n.h){const e=wh(n.i);(e.length!=0||n.j.length!=0)&&(Qc(n.ma,e),Qc(n.ma,n.j),n.i.i.length=0,ua(n.j),n.j.length=0),n.h.ya()}}function Mh(n,e,t){var r=t instanceof Qt?nt(t):new Qt(t);if(r.g!="")e&&(r.g=e+"."+r.g),zi(r,r.m);else{var i=k.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qt(null);r&&ji(s,r),e&&(s.g=e),i&&zi(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Y(r,t,e),Y(r,"VER",n.ra),ni(n,r),r}function Lh(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ie(new vs({ob:!0})):new ie(n.va),e.Oa(n.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Bh(){}A=Bh.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function Ki(){if(xn&&!(10<=Number(y_)))throw Error("Environmental error: no available transport.")}Ki.prototype.g=function(n,e){return new Oe(n,e)};function Oe(n,e){me.call(this),this.g=new Ch(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!br(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!br(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Gn(this)}ge(Oe,me);Oe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Se(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Mh(n,null,n.Y),Rs(n)};Oe.prototype.close=function(){ba(this.g)};Oe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=pa(n),n=t);e.j.push(new W_(e.fb++,n)),e.H==3&&Rs(e)};Oe.prototype.N=function(){this.g.h=null,delete this.j,ba(this.g),delete this.g,Oe.$.N.call(this)};function $h(n){va.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ge($h,va);function Uh(){wa.call(this),this.status=1}ge(Uh,wa);function Gn(n){this.g=n}ge(Gn,Bh);Gn.prototype.Ba=function(){ve(this.g,"a")};Gn.prototype.Aa=function(n){ve(this.g,new $h(n))};Gn.prototype.za=function(n){ve(this.g,new Uh)};Gn.prototype.ya=function(){ve(this.g,"b")};function oy(){this.blockSize=-1}function qe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(qe,oy);qe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function oo(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}qe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)oo(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){oo(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){oo(this,r),i=0;break}}this.h=i,this.i+=e};qe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Q(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var ay={};function Ca(n){return-128<=n&&128>n?g_(n,function(e){return new Q([e|0],0>e?-1:0)}):new Q([n|0],0>n?-1:0)}function Ke(n){if(isNaN(n)||!isFinite(n))return Rn;if(0>n)return Ie(Ke(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Co;return new Q(e,0)}function qh(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Ie(qh(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ke(Math.pow(e,8)),r=Rn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Ke(Math.pow(e,s)),r=r.R(s).add(Ke(o))):(r=r.R(t),r=r.add(Ke(o)))}return r}var Co=4294967296,Rn=Ca(0),Vo=Ca(1),iu=Ca(16777216);A=Q.prototype;A.ea=function(){if(Me(this))return-Ie(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Co+r)*e,e*=Co}return n};A.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ze(this))return"0";if(Me(this))return"-"+Ie(this).toString(n);for(var e=Ke(Math.pow(n,6)),t=this,r="";;){var i=Wi(t,e).g;t=Qi(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Ze(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ze(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Me(n){return n.h==-1}A.X=function(n){return n=Qi(this,n),Me(n)?-1:Ze(n)?0:1};function Ie(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Q(t,~n.h).add(Vo)}A.abs=function(){return Me(this)?Ie(this):this};A.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new Q(t,t[t.length-1]&-2147483648?-1:0)};function Qi(n,e){return n.add(Ie(e))}A.R=function(n){if(Ze(this)||Ze(n))return Rn;if(Me(this))return Me(n)?Ie(this).R(Ie(n)):Ie(Ie(this).R(n));if(Me(n))return Ie(this.R(Ie(n)));if(0>this.X(iu)&&0>n.X(iu))return Ke(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Ii(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Ii(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Ii(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Ii(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Q(t,0)};function Ii(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function nr(n,e){this.g=n,this.h=e}function Wi(n,e){if(Ze(e))throw Error("division by zero");if(Ze(n))return new nr(Rn,Rn);if(Me(n))return e=Wi(Ie(n),e),new nr(Ie(e.g),Ie(e.h));if(Me(e))return e=Wi(n,Ie(e)),new nr(Ie(e.g),e.h);if(30<n.g.length){if(Me(n)||Me(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Vo,r=e;0>=r.X(n);)t=su(t),r=su(r);var i=mn(t,1),s=mn(r,1);for(r=mn(r,2),t=mn(t,2);!Ze(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=mn(r,1),t=mn(t,1)}return e=Qi(n,i.R(e)),new nr(i,e)}for(i=Rn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ke(t),o=s.R(e);Me(o)||0<o.X(n);)t-=r,s=Ke(t),o=s.R(e);Ze(s)&&(s=Vo),i=i.add(s),n=Qi(n,o)}return new nr(i,n)}A.gb=function(n){return Wi(this,n).h};A.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Q(t,this.h&n.h)};A.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Q(t,this.h|n.h)};A.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Q(t,this.h^n.h)};function su(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Q(t,n.h)}function mn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new Q(i,n.h)}Ki.prototype.createWebChannel=Ki.prototype.g;Oe.prototype.send=Oe.prototype.u;Oe.prototype.open=Oe.prototype.m;Oe.prototype.close=Oe.prototype.close;_s.NO_ERROR=0;_s.TIMEOUT=8;_s.HTTP_ERROR=6;oh.COMPLETE="complete";ah.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";me.prototype.listen=me.prototype.O;ie.prototype.listenOnce=ie.prototype.P;ie.prototype.getLastError=ie.prototype.Sa;ie.prototype.getLastErrorCode=ie.prototype.Ia;ie.prototype.getStatus=ie.prototype.da;ie.prototype.getResponseJson=ie.prototype.Wa;ie.prototype.getResponseText=ie.prototype.ja;ie.prototype.send=ie.prototype.ha;ie.prototype.setWithCredentials=ie.prototype.Oa;qe.prototype.digest=qe.prototype.l;qe.prototype.reset=qe.prototype.reset;qe.prototype.update=qe.prototype.j;Q.prototype.add=Q.prototype.add;Q.prototype.multiply=Q.prototype.R;Q.prototype.modulo=Q.prototype.gb;Q.prototype.compare=Q.prototype.X;Q.prototype.toNumber=Q.prototype.ea;Q.prototype.toString=Q.prototype.toString;Q.prototype.getBits=Q.prototype.D;Q.fromNumber=Ke;Q.fromString=qh;var cy=function(){return new Ki},uy=function(){return ps()},ao=_s,ly=oh,hy=cn,ou={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ei=ah,dy=ie,fy=qe,bn=Q;const au="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn="10.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new ia("@firebase/firestore");function In(){return Et.logLevel}function my(n){Et.setLogLevel(n)}function _(n,...e){if(Et.logLevel<=$.DEBUG){const t=e.map(Va);Et.debug(`Firestore (${Kn}): ${n}`,...t)}}function oe(n,...e){if(Et.logLevel<=$.ERROR){const t=e.map(Va);Et.error(`Firestore (${Kn}): ${n}`,...t)}}function je(n,...e){if(Et.logLevel<=$.WARN){const t=e.map(Va);Et.warn(`Firestore (${Kn}): ${n}`,...t)}}function Va(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(n="Unexpected state"){const e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+n;throw oe(e),new Error(e)}function C(n,e){n||R()}function gy(n,e){n||R()}function T(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends an{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class py{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(de.UNAUTHENTICATED))}shutdown(){}}class _y{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yy{constructor(e){this.t=e,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(C(typeof r.accessToken=="string"),new jh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return C(e===null||typeof e=="string"),new de(e)}}class Iy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=de.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ey{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Iy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(C(typeof t.token=="string"),this.R=t.token,new vy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ty(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function O(n,e){return n<e?-1:n>e?1:0}function Dn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Gh(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new Z(0,0))}static max(){return new P(new Z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(),r===void 0?r=e.length-t:r>e.length-t&&R(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends kr{construct(e,t,r){return new q(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new q(t)}static emptyPath(){return new q([])}}const Ay=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends kr{construct(e,t,r){return new re(e,t,r)}static isValidIdentifier(e){return Ay.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new re(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(q.fromString(e))}static fromName(e){return new v(q.fromString(e).popFirst(5))}static empty(){return new v(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new q(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function xo(n){return n.fields.find(e=>e.kind===2)}function Mt(n){return n.fields.filter(e=>e.kind!==2)}Hi.UNKNOWN_ID=-1;class Ci{constructor(e,t){this.fieldPath=e,this.kind=t}}class Or{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Or(0,Fe.min())}}function Kh(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new Z(t+1,0):new Z(t,r));return new Fe(i,v.empty(),e)}function Qh(n){return new Fe(n.readTime,n.key,-1)}class Fe{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Fe(P.min(),v.empty(),-1)}static max(){return new Fe(P.max(),v.empty(),-1)}}function xa(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:O(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Wh)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new fe,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new pr(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=Da(r.target.error);this.m.reject(new pr(e,i))}}static open(e,t,r,i){try{return new bs(t,e.transaction(i,r))}catch(s){throw new pr(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new by(t)}}class Ue{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Ue.D(mo())===12.2&&oe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),Lt(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Cl())return!1;if(Ue.v())return!0;const e=mo(),t=Ue.D(e),r=0<t&&t<10,i=Ue.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new pr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new pr(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=bs.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ry{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Lt(this.q.delete())}}class pr extends p{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Dt(n){return n.name==="IndexedDbTransactionError"}class by{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Lt(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),Lt(this.store.add(e))}get(e){return Lt(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),Lt(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),Lt(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=Da(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Ry(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Lt(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Da(r.target.error);t(i)}})}let cu=!1;function Da(n){const e=Ue.D(mo());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cu||(cu=!0,setTimeout(()=>{throw r},0)),r}}return n}class Sy{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){Dt(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await xt(t)}await this.te(6e4)})}}class Py{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Qh(s);xa(o,r)>0&&(r=o)}),new Fe(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}De.ae=-1;function ri(n){return n==null}function Fr(n){return n===0&&1/n==-1/0}function Yh(n){return typeof n=="number"&&Number.isInteger(n)&&!Fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uu(e)),e=Cy(n.get(t),e);return uu(e)}function Cy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function uu(n){return n+""}function Qe(n){const e=n.length;if(C(e>=2),e===2)return C(n.charAt(0)===""&&n.charAt(1)===""),q.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&R(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:R()}s=o+2}return new q(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n,e){return[n,Pe(e)]}function Xh(n,e,t){return[n,Pe(e),t]}const Vy={},xy=["prefixPath","collectionGroup","readTime","documentId"],Dy=["prefixPath","collectionGroup","documentId"],Ny=["collectionGroup","readTime","prefixPath","documentId"],ky=["canonicalId","targetId"],Oy=["targetId","path"],Fy=["path","targetId"],My=["collectionId","parent"],Ly=["indexId","uid"],By=["uid","sequenceNumber"],$y=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Uy=["indexId","uid","orderedDocumentKey"],qy=["userId","collectionPath","documentId"],jy=["userId","collectionPath","largestBatchId"],zy=["userId","collectionGroup","largestBatchId"],Jh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Gy=[...Jh,"documentOverlays"],Zh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ed=Zh,Ky=[...ed,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Hh{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function pe(n,e){const t=T(n);return Ue.O(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function td(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new H(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new H(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ye.RED,this.left=i??ye.EMPTY,this.right=s??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ye(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.comparator=e,this.data=new H(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(e){return new du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof W)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new W(this.comparator);return t.data=e,t}}class du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new W(re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new nd("Invalid base64 string: "+s):s}}(e);return new le(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}le.EMPTY_BYTE_STRING=new le("");const Wy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(n){if(C(!!n),typeof n=="string"){let e=0;const t=Wy.exec(n);if(C(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wt(n){return typeof n=="string"?le.fromBase64String(n):le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Na(n){const e=n.mapValue.fields.__previous_value__;return Ss(e)?Na(e):e}function Mr(n){const e=vt(n.mapValue.fields.__local_write_time__.timestampValue);return new Z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Tt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Tt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},xi={nullValue:"NULL_VALUE"};function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ss(n)?4:rd(n)?9007199254740991:10:R()}function Ye(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Mr(n).isEqual(Mr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vt(i.timestampValue),a=vt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return wt(i.bytesValue).isEqual(wt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ne(i.geoPointValue.latitude)===ne(s.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ne(i.integerValue)===ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ne(i.doubleValue),a=ne(s.doubleValue);return o===a?Fr(o)===Fr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Dn(n.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(hu(o)!==hu(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ye(o[c],a[c])))return!1;return!0}(n,e);default:return R()}}function Lr(n,e){return(n.values||[]).find(t=>Ye(t,e))!==void 0}function At(n,e){if(n===e)return 0;const t=Xt(n),r=Xt(e);if(t!==r)return O(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return O(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ne(s.integerValue||s.doubleValue),c=ne(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return fu(n.timestampValue,e.timestampValue);case 4:return fu(Mr(n),Mr(e));case 5:return O(n.stringValue,e.stringValue);case 6:return function(s,o){const a=wt(s),c=wt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=O(a[u],c[u]);if(l!==0)return l}return O(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=O(ne(s.latitude),ne(o.latitude));return a!==0?a:O(ne(s.longitude),ne(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=At(a[u],c[u]);if(l)return l}return O(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ft.mapValue&&o===ft.mapValue)return 0;if(s===ft.mapValue)return 1;if(o===ft.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=O(c[h],l[h]);if(d!==0)return d;const f=At(a[c[h]],u[l[h]]);if(f!==0)return f}return O(c.length,l.length)}(n.mapValue,e.mapValue);default:throw R()}}function fu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return O(n,e);const t=vt(n),r=vt(e),i=O(t.seconds,r.seconds);return i!==0?i:O(t.nanos,r.nanos)}function Nn(n){return No(n)}function No(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return v.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=No(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${No(t.fields[o])}`;return i+"}"}(n.mapValue):R()}function Jt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ko(n){return!!n&&"integerValue"in n}function Br(n){return!!n&&"arrayValue"in n}function mu(n){return!!n&&"nullValue"in n}function gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Di(n){return!!n&&"mapValue"in n}function _r(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_r(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_r(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Yy(n){return"nullValue"in n?xi:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Jt(Tt.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:R()}function Xy(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Jt(Tt.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?ft:R()}function pu(n,e){const t=At(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function _u(n,e){const t=At(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_r(t)}setAll(e){let t=re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=_r(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Di(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){un(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ee(_r(this.value))}}function id(n){const e=[];return un(n.fields,(t,r)=>{const i=new re([t]);if(Di(r)){const s=id(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new X(e,0,P.min(),P.min(),P.min(),Ee.empty(),0)}static newFoundDocument(e,t,r,i){return new X(e,1,t,P.min(),r,i,0)}static newNoDocument(e,t){return new X(e,2,t,P.min(),P.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new X(e,3,t,P.min(),P.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof X&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){this.position=e,this.inclusive=t}}function yu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),t.key):r=At(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{}class B extends sd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zy(e,t,r):t==="array-contains"?new nI(e,r):t==="in"?new hd(e,r):t==="not-in"?new rI(e,r):t==="array-contains-any"?new iI(e,r):new B(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new eI(e,r):new tI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(At(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(At(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class K extends sd{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new K(e,t)}matches(e){return kn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function kn(n){return n.op==="and"}function Oo(n){return n.op==="or"}function ka(n){return od(n)&&kn(n)}function od(n){for(const e of n.filters)if(e instanceof K)return!1;return!0}function Fo(n){if(n instanceof B)return n.field.canonicalString()+n.op.toString()+Nn(n.value);if(ka(n))return n.filters.map(e=>Fo(e)).join(",");{const e=n.filters.map(t=>Fo(t)).join(",");return`${n.op}(${e})`}}function ad(n,e){return n instanceof B?function(r,i){return i instanceof B&&r.op===i.op&&r.field.isEqual(i.field)&&Ye(r.value,i.value)}(n,e):n instanceof K?function(r,i){return i instanceof K&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ad(o,i.filters[a]),!0):!1}(n,e):void R()}function cd(n,e){const t=n.filters.concat(e);return K.create(t,n.op)}function ud(n){return n instanceof B?function(t){return`${t.field.canonicalString()} ${t.op} ${Nn(t.value)}`}(n):n instanceof K?function(t){return t.op.toString()+" {"+t.getFilters().map(ud).join(" ,")+"}"}(n):"Filter"}class Zy extends B{constructor(e,t,r){super(e,t,r),this.key=v.fromName(r.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class eI extends B{constructor(e,t){super(e,"in",t),this.keys=ld("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tI extends B{constructor(e,t){super(e,"not-in",t),this.keys=ld("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ld(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>v.fromName(r.referenceValue))}class nI extends B{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Br(t)&&Lr(t.arrayValue,this.value)}}class hd extends B{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Lr(this.value.arrayValue,t)}}class rI extends B{constructor(e,t){super(e,"not-in",t)}matches(e){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Lr(this.value.arrayValue,t)}}class iI extends B{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Br(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Lr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Mo(n,e=null,t=[],r=[],i=null,s=null,o=null){return new sI(n,e,t,r,i,s,o)}function Zt(n){const e=T(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ri(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Nn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Nn(r)).join(",")),e.he=t}return e.he}function ii(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Iu(n.startAt,e.startAt)&&Iu(n.endAt,e.endAt)}function Yi(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xi(n,e){return n.filters.filter(t=>t instanceof B&&t.field.isEqual(e))}function Eu(n,e,t){let r=xi,i=!0;for(const s of Xi(n,e)){let o=xi,a=!0;switch(s.op){case"<":case"<=":o=Yy(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=xi}pu({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];pu({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function vu(n,e,t){let r=ft,i=!0;for(const s of Xi(n,e)){let o=ft,a=!0;switch(s.op){case">=":case">":o=Xy(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ft}_u({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];_u({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function dd(n,e,t,r,i,s,o,a){return new it(n,e,t,r,i,s,o,a)}function Qn(n){return new it(n)}function wu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Oa(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ps(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Fa(n){return n.collectionGroup!==null}function Pn(n){const e=T(n);if(e.Pe===null){e.Pe=[];const t=Ps(e),r=Oa(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new Sn(t)),e.Pe.push(new Sn(re.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Sn(re.keyField(),s))}}}return e.Pe}function Ce(n){const e=T(n);return e.Ie||(e.Ie=oI(e,Pn(n))),e.Ie}function oI(n,e){if(n.limitType==="F")return Mo(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Sn(i.field,s)});const t=n.endAt?new Rt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Rt(n.startAt.position,n.startAt.inclusive):null;return Mo(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Lo(n,e){e.getFirstInequalityField(),Ps(n);const t=n.filters.concat([e]);return new it(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ji(n,e,t){return new it(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function si(n,e){return ii(Ce(n),Ce(e))&&n.limitType===e.limitType}function fd(n){return`${Zt(Ce(n))}|lt:${n.limitType}`}function En(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ud(i)).join(", ")}]`),ri(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Nn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Nn(i)).join(",")),`Target(${r})`}(Ce(n))}; limitType=${n.limitType})`}function oi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Pn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=yu(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Pn(r),i)||r.endAt&&!function(o,a,c){const u=yu(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Pn(r),i))}(n,e)}function md(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gd(n){return(e,t)=>{let r=!1;for(const i of Pn(n)){const s=aI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aI(n,e,t){const r=n.field.isKeyField()?v.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?At(c,u):R()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return td(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new H(v.comparator);function ke(){return cI}const pd=new H(v.comparator);function hr(...n){let e=pd;for(const t of n)e=e.insert(t.key,t);return e}function _d(n){let e=pd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function We(){return yr()}function yd(){return yr()}function yr(){return new Nt(n=>n.toString(),(n,e)=>n.isEqual(e))}const uI=new H(v.comparator),lI=new W(v.comparator);function M(...n){let e=lI;for(const t of n)e=e.add(t);return e}const hI=new W(O);function Ma(){return hI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function Ed(n){return{integerValue:""+n}}function vd(n,e){return Yh(e)?Ed(e):Id(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this._=void 0}}function dI(n,e,t){return n instanceof On?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ss(s)&&(s=Na(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof en?Td(n,e):n instanceof tn?Ad(n,e):function(i,s){const o=wd(i,s),a=Tu(o)+Tu(i.Te);return ko(o)&&ko(i.Te)?Ed(a):Id(i.serializer,a)}(n,e)}function fI(n,e,t){return n instanceof en?Td(n,e):n instanceof tn?Ad(n,e):t}function wd(n,e){return n instanceof Fn?function(r){return ko(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class On extends Cs{}class en extends Cs{constructor(e){super(),this.elements=e}}function Td(n,e){const t=Rd(e);for(const r of n.elements)t.some(i=>Ye(i,r))||t.push(r);return{arrayValue:{values:t}}}class tn extends Cs{constructor(e){super(),this.elements=e}}function Ad(n,e){let t=Rd(e);for(const r of n.elements)t=t.filter(i=>!Ye(i,r));return{arrayValue:{values:t}}}class Fn extends Cs{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Tu(n){return ne(n.integerValue||n.doubleValue)}function Rd(n){return Br(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.field=e,this.transform=t}}function mI(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof en&&i instanceof en||r instanceof tn&&i instanceof tn?Dn(r.elements,i.elements,Ye):r instanceof Fn&&i instanceof Fn?Ye(r.Te,i.Te):r instanceof On&&i instanceof On}(n.transform,e.transform)}class gI{constructor(e,t){this.version=e,this.transformResults=t}}class J{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new J}static exists(e){return new J(void 0,e)}static updateTime(e){return new J(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ni(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vs{}function bd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hn(n.key,J.none()):new Wn(n.key,n.data,J.none());{const t=n.data,r=Ee.empty();let i=new W(re.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new st(n.key,r,new Ne(i.toArray()),J.none())}}function pI(n,e,t){n instanceof Wn?function(i,s,o){const a=i.value.clone(),c=Ru(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof st?function(i,s,o){if(!Ni(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ru(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Sd(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ir(n,e,t,r){return n instanceof Wn?function(s,o,a,c){if(!Ni(s.precondition,o))return a;const u=s.value.clone(),l=bu(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof st?function(s,o,a,c){if(!Ni(s.precondition,o))return a;const u=bu(s.fieldTransforms,c,o),l=o.data;return l.setAll(Sd(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return Ni(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function _I(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=wd(r.transform,i||null);s!=null&&(t===null&&(t=Ee.empty()),t.set(r.field,s))}return t||null}function Au(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Dn(r,i,(s,o)=>mI(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wn extends Vs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class st extends Vs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ru(n,e,t){const r=new Map;C(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fI(o,a,t[i]))}return r}function bu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,dI(s,o,e))}return r}class Hn extends Vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class La extends Vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pI(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ir(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ir(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=yd();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=bd(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),M())}isEqual(e){return this.batchId===e.batchId&&Dn(this.mutations,e.mutations,(t,r)=>Au(t,r))&&Dn(this.baseMutations,e.baseMutations,(t,r)=>Au(t,r))}}class $a{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){C(e.mutations.length===r.length);let i=function(){return uI}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $a(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,U;function Pd(n){switch(n){default:return R();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Cd(n){if(n===void 0)return oe("GRPC error has no .code"),g.UNKNOWN;switch(n){case ce.OK:return g.OK;case ce.CANCELLED:return g.CANCELLED;case ce.UNKNOWN:return g.UNKNOWN;case ce.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case ce.INTERNAL:return g.INTERNAL;case ce.UNAVAILABLE:return g.UNAVAILABLE;case ce.UNAUTHENTICATED:return g.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case ce.NOT_FOUND:return g.NOT_FOUND;case ce.ALREADY_EXISTS:return g.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return g.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case ce.ABORTED:return g.ABORTED;case ce.OUT_OF_RANGE:return g.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return g.UNIMPLEMENTED;case ce.DATA_LOSS:return g.DATA_LOSS;default:return R()}}(U=ce||(ce={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=new bn([4294967295,4294967295],0);function Su(n){const e=Vd().encode(n),t=new fy;return t.update(e),new Uint8Array(t.digest())}function Pu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bn([t,r],0),new bn([i,s],0)]}class qa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new dr(`Invalid padding: ${t}`);if(r<0)throw new dr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new dr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new dr(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=bn.fromNumber(this.Ae)}Ve(e,t,r){let i=e.add(t.multiply(bn.fromNumber(r)));return i.compare(II)===1&&(i=new bn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const t=Su(e),[r,i]=Pu(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qa(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const t=Su(e),[r,i]=Pu(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ci(P.min(),i,new H(O),ke(),M())}}class ui{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ui(r,t,M(),M(),M())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,r,i){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=i}}class xd{constructor(e,t){this.targetId=e,this.ye=t}}class Dd{constructor(e,t,r=le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Cu{constructor(){this.we=0,this.Se=xu(),this.be=le.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=M(),t=M(),r=M();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:R()}}),new ui(this.be,this.De,e,t,r)}Oe(){this.Ce=!1,this.Se=xu()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class EI{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=ke(),this.Ue=Vu(),this.We=new H(O)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{const r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((r,i)=>{this.Ye(i)&&t(i)})}Xe(e){const t=e.targetId,r=e.ye.count,i=this.et(t);if(i){const s=i.target;if(Yi(s))if(r===0){const o=new v(s.path);this.je(t,o,X.newNoDocument(o,P.min()))}else C(r===1);else{const o=this.tt(t);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(t,u)}}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=wt(r).toUint8Array()}catch(c){if(c instanceof nd)return je("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new qa(o,i,s)}catch(c){return je(c instanceof dr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0:2}ot(e,t){const r=this.Qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(t,s,null),i++)}),i}_t(e){const t=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Yi(a.target)){const c=new v(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,X.newNoDocument(c,e))}s.Fe&&(t.set(o,s.xe()),s.Oe())}});let r=M();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.et(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new ci(e,t,this.We,this.$e,r);return this.$e=ke(),this.Ue=Vu(),this.We=new H(O),i}ze(e,t){if(!this.Ye(e))return;const r=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,t)?i.Ne(t,1):i.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new Cu,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new W(O),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=this.et(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Cu),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function Vu(){return new H(v.comparator)}function xu(){return new H(v.comparator)}const vI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),TI=(()=>({and:"AND",or:"OR"}))();class AI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bo(n,e){return n.useProto3Json||ri(e)?e:{value:e}}function Mn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function RI(n,e){return Mn(n,e.toTimestamp())}function ae(n){return C(!!n),P.fromTimestamp(function(t){const r=vt(t);return new Z(r.seconds,r.nanos)}(n))}function ja(n,e){return function(r){return new q(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function kd(n){const e=q.fromString(n);return C(jd(e)),e}function $r(n,e){return ja(n.databaseId,e.path)}function He(n,e){const t=kd(e);if(t.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Fd(t))}function $o(n,e){return ja(n.databaseId,e)}function Od(n){const e=kd(n);return e.length===4?q.emptyPath():Fd(e)}function Ur(n){return new q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fd(n){return C(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Du(n,e,t){return{name:$r(n,e),fields:t.value.mapValue.fields}}function Md(n,e,t){const r=He(n,e.name),i=ae(e.updateTime),s=e.createTime?ae(e.createTime):P.min(),o=new Ee({mapValue:{fields:e.fields}}),a=X.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function bI(n,e){return"found"in e?function(r,i){C(!!i.found),i.found.name,i.found.updateTime;const s=He(r,i.found.name),o=ae(i.found.updateTime),a=i.found.createTime?ae(i.found.createTime):P.min(),c=new Ee({mapValue:{fields:i.found.fields}});return X.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){C(!!i.missing),C(!!i.readTime);const s=He(r,i.missing),o=ae(i.readTime);return X.newNoDocument(s,o)}(n,e):R()}function SI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(C(l===void 0||typeof l=="string"),le.fromBase64String(l||"")):(C(l===void 0||l instanceof Uint8Array),le.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:Cd(u.code);return new p(l,u.message||"")}(o);t=new Dd(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=He(n,r.document.name),s=ae(r.document.updateTime),o=r.document.createTime?ae(r.document.createTime):P.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=X.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new ki(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=He(n,r.document),s=r.readTime?ae(r.readTime):P.min(),o=X.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ki([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=He(n,r.document),s=r.removedTargetIds||[];t=new ki([],s,i,null)}else{if(!("filter"in e))return R();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yI(i,s),a=r.targetId;t=new xd(a,o)}}return t}function qr(n,e){let t;if(e instanceof Wn)t={update:Du(n,e.key,e.value)};else if(e instanceof Hn)t={delete:$r(n,e.key)};else if(e instanceof st)t={update:Du(n,e.key,e.data),updateMask:NI(e.fieldMask)};else{if(!(e instanceof La))return R();t={verify:$r(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof On)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof en)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fn)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw R()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:RI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R()}(n,e.precondition)),t}function Uo(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?J.updateTime(ae(s.updateTime)):s.exists!==void 0?J.exists(s.exists):J.none()}(e.currentDocument):J.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)C(a.setToServerValue==="REQUEST_TIME"),c=new On;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new en(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new tn(l)}else"increment"in a?c=new Fn(o,a.increment):R();const u=re.fromServerFormat(a.fieldPath);return new ai(u,c)}(n,i)):[];if(e.update){e.update.name;const i=He(n,e.update.name),s=new Ee({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ne(u.map(l=>re.fromServerFormat(l)))}(e.updateMask);return new st(i,s,o,t,r)}return new Wn(i,s,t,r)}if(e.delete){const i=He(n,e.delete);return new Hn(i,t)}if(e.verify){const i=He(n,e.verify);return new La(i,t)}return R()}function PI(n,e){return n&&n.length>0?(C(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ae(i.updateTime):ae(s);return o.isEqual(P.min())&&(o=ae(s)),new gI(o,i.transformResults||[])}(t,e))):[]}function Ld(n,e){return{documents:[$o(n,e.path)]}}function Bd(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=$o(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=$o(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return qd(K.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:vn(h.field),direction:VI(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Bo(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function $d(n){let e=Od(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){C(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Ud(h);return d instanceof K&&ka(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(y){return new Sn(wn(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ri(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Rt(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Rt(f,d)}(t.endAt)),dd(e,i,o,s,a,"F",c,u)}function CI(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ud(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wn(t.unaryFilter.field);return B.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wn(t.unaryFilter.field);return B.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wn(t.unaryFilter.field);return B.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wn(t.unaryFilter.field);return B.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return B.create(wn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return K.create(t.compositeFilter.filters.map(r=>Ud(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function VI(n){return vI[n]}function xI(n){return wI[n]}function DI(n){return TI[n]}function vn(n){return{fieldPath:n.canonicalString()}}function wn(n){return re.fromServerFormat(n.fieldPath)}function qd(n){return n instanceof B?function(t){if(t.op==="=="){if(gu(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(mu(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gu(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(mu(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:xI(t.op),value:t.value}}}(n):n instanceof K?function(t){const r=t.getFilters().map(i=>qd(i));return r.length===1?r[0]:{compositeFilter:{op:DI(t.op),filters:r}}}(n):R()}function NI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,r,i,s=P.min(),o=P.min(),a=le.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.ht=e}}function kI(n,e){let t;if(e.document)t=Md(n.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=v.fromSegments(e.noDocument.path),i=rn(e.noDocument.readTime);t=X.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const r=v.fromSegments(e.unknownDocument.path),i=rn(e.unknownDocument.version);t=X.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Z(i[0],i[1]);return P.fromTimestamp(s)}(e.readTime)),t}function Nu(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Zi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:$r(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Mn(s,o.version.toTimestamp()),createTime:Mn(s,o.createTime.toTimestamp())}}(n.ht,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:nn(e.version)};else{if(!e.isUnknownDocument())return R();r.unknownDocument={path:t.path.toArray(),version:nn(e.version)}}return r}function Zi(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function nn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function rn(n){const e=new Z(n.seconds,n.nanoseconds);return P.fromTimestamp(e)}function Bt(n,e){const t=(e.baseMutations||[]).map(s=>Uo(n.ht,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Uo(n.ht,s)),i=Z.fromMillis(e.localWriteTimeMs);return new Ba(e.batchId,i,t,r)}function fr(n){const e=rn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?rn(n.lastLimboFreeSnapshotVersion):P.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return C(s.documents.length===1),Ce(Qn(Od(s.documents[0])))}(n.query):function(s){return Ce($d(s))}(n.query),new et(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,le.fromBase64String(n.resumeToken))}function Gd(n,e){const t=nn(e.snapshotVersion),r=nn(e.lastLimboFreeSnapshotVersion);let i;i=Yi(e.target)?Ld(n.ht,e.target):Bd(n.ht,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zt(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function za(n){const e=$d({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ji(e,e.limit,"L"):e}function co(n,e){return new Ua(e.largestBatchId,Uo(n.ht,e.overlayMutation))}function ku(n,e){const t=e.path.lastSegment();return[n,Pe(e.path.popLast()),t]}function Ou(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:nn(r.readTime),documentKey:Pe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{getBundleMetadata(e,t){return Fu(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:rn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Fu(e).put(function(i){return{bundleId:i.id,createTime:nn(ae(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Mu(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:za(s.bundledQuery),readTime:rn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Mu(e).put(function(i){return{name:i.name,readTime:nn(ae(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Fu(n){return pe(n,"bundles")}function Mu(n){return pe(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const r=t.uid||"";return new xs(e,r)}getOverlay(e,t){return rr(e).get(ku(this.userId,t)).next(r=>r?co(this.serializer,r):null)}getOverlays(e,t){const r=We();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Ua(t,o);i.push(this.It(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Pe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(rr(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=We(),s=Pe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return rr(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=co(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=We();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=co(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}It(e,t){return rr(e).put(function(i,s,o){const[a,c,u]=ku(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:qr(i.ht,o.mutation)}}(this.serializer,this.userId,t))}}function rr(n){return pe(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(ne(e.integerValue));else if("doubleValue"in e){const r=ne(e.doubleValue);isNaN(r)?this.At(t,13):(this.At(t,15),Fr(r)?t.Rt(0):t.Rt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.At(t,20),typeof r=="string"?t.Vt(r):(t.Vt(`${r.seconds||""}`),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(wt(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.At(t,45),t.Rt(r.latitude||0),t.Rt(r.longitude||0)}else"mapValue"in e?rd(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):R()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){const r=e.fields||{};this.At(t,55);for(const i of Object.keys(r))this.ft(i,t),this.Tt(r[i],t)}bt(e,t){const r=e.values||[];this.At(t,50);for(const i of r)this.Tt(i,t)}wt(e,t){this.At(t,37),v.fromName(e).path.forEach(r=>{this.At(t,60),this.Dt(r,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}$t.Ct=new $t;function FI(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Lu(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=FI(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class MI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Lu(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Lu(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class LI{constructor(e){this.jt=e}yt(e){this.jt.vt(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}Et(){this.jt.$t()}}class BI{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ir{constructor(){this.jt=new MI,this.Ht=new LI(this.jt),this.Jt=new BI(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ut(this.indexId,this.documentKey,this.arrayValue,r)}}function ct(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Bu(n.arrayValue,e.arrayValue),t!==0?t:(t=Bu(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function Bu(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const t of e.filters){const r=t;r.isInequality()?this.tn=r:this.en.push(r)}}nn(e){C(e.collectionGroup===this.collectionId);const t=xo(e);if(t!==void 0&&!this.rn(t))return!1;const r=Mt(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.rn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.tn!==void 0){if(!i.has(this.tn.field.canonicalString())){const a=r[s];if(!this.sn(this.tn,a)||!this.on(this.Xt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Xt.length||!this.on(this.Xt[o++],a))return!1}return!0}_n(){let e=new W(re.comparator);const t=[];for(const r of this.en)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ci(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ci(r.field,0))}for(const r of this.Xt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ci(r.field,r.dir==="asc"?0:1)));return new Hi(Hi.UNKNOWN_ID,this.collectionId,t,Or.empty())}rn(e){for(const t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){var e,t;if(C(n instanceof B||n instanceof K),n instanceof B){if(n instanceof hd){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>B.create(n.field,"==",s)))||[];return K.create(i,"or")}return n}const r=n.filters.map(i=>Kd(i));return K.create(r,n.op)}function $I(n){if(n.getFilters().length===0)return[];const e=zo(Kd(n));return C(Qd(e)),qo(e)||jo(e)?[e]:e.getFilters()}function qo(n){return n instanceof B}function jo(n){return n instanceof K&&ka(n)}function Qd(n){return qo(n)||jo(n)||function(t){if(t instanceof K&&Oo(t)){for(const r of t.getFilters())if(!qo(r)&&!jo(r))return!1;return!0}return!1}(n)}function zo(n){if(C(n instanceof B||n instanceof K),n instanceof B)return n;if(n.filters.length===1)return zo(n.filters[0]);const e=n.filters.map(r=>zo(r));let t=K.create(e,n.op);return t=es(t),Qd(t)?t:(C(t instanceof K),C(kn(t)),C(t.filters.length>1),t.filters.reduce((r,i)=>Ga(r,i)))}function Ga(n,e){let t;return C(n instanceof B||n instanceof K),C(e instanceof B||e instanceof K),t=n instanceof B?e instanceof B?function(i,s){return K.create([i,s],"and")}(n,e):Uu(n,e):e instanceof B?Uu(e,n):function(i,s){if(C(i.filters.length>0&&s.filters.length>0),kn(i)&&kn(s))return cd(i,s.getFilters());const o=Oo(i)?i:s,a=Oo(i)?s:i,c=o.filters.map(u=>Ga(u,a));return K.create(c,"or")}(n,e),es(t)}function Uu(n,e){if(kn(e))return cd(e,n.getFilters());{const t=e.filters.map(r=>Ga(n,r));return K.create(t,"or")}}function es(n){if(C(n instanceof B||n instanceof K),n instanceof B)return n;const e=n.getFilters();if(e.length===1)return es(e[0]);if(od(n))return n;const t=e.map(i=>es(i)),r=[];return t.forEach(i=>{i instanceof B?r.push(i):i instanceof K&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:K.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.an=new Ka}addToCollectionParentIndex(e,t){return this.an.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Fe.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Fe.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class Ka{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new W(q.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new W(q.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Uint8Array(0);class qI{constructor(e,t){this.user=e,this.databaseId=t,this.un=new Ka,this.cn=new Nt(r=>Zt(r),(r,i)=>ii(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.un.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.un.add(t)});const s={collectionId:r,parent:Pe(i)};return qu(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Gh(t),""],!1,!0);return qu(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Qe(o.parent))}return r})}addFieldIndex(e,t){const r=sr(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=_n(e);return s.next(a=>{o.put(Ou(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=sr(e),i=_n(e),s=pn(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=sr(e),r=pn(e),i=_n(e);return t.J().next(()=>r.J()).next(()=>i.J())}createTargetIndexes(e,t){return m.forEach(this.ln(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new $u(r);return this.addFieldIndex(e,s._n())}}))}getDocumentsMatchingTarget(e,t){const r=pn(e);let i=!0;const s=new Map;return m.forEach(this.ln(t),o=>this.hn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=M();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(V){return`id=${V.indexId}|cg=${V.collectionGroup}|f=${V.fields.map(F=>`${F.fieldPath}:${F.kind}`).join(",")}`}(c)} to execute ${Zt(t)}`);const l=function(V,F){const N=xo(F);if(N===void 0)return null;for(const w of Xi(V,N.fieldPath))switch(w.op){case"array-contains-any":return w.value.arrayValue.values||[];case"array-contains":return[w.value]}return null}(u,c),h=function(V,F){const N=new Map;for(const w of Mt(F))for(const x of Xi(V,w.fieldPath))switch(x.op){case"==":case"in":N.set(w.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return N.set(w.fieldPath.canonicalString(),x.value),Array.from(N.values())}return null}(u,c),d=function(V,F){const N=[];let w=!0;for(const x of Mt(F)){const L=x.kind===0?Eu(V,x.fieldPath,V.startAt):vu(V,x.fieldPath,V.startAt);N.push(L.value),w&&(w=L.inclusive)}return new Rt(N,w)}(u,c),f=function(V,F){const N=[];let w=!0;for(const x of Mt(F)){const L=x.kind===0?vu(V,x.fieldPath,V.endAt):Eu(V,x.fieldPath,V.endAt);N.push(L.value),w&&(w=L.inclusive)}return new Rt(N,w)}(u,c),y=this.Pn(c,u,d),E=this.Pn(c,u,f),I=this.In(c,u,h),S=this.dn(c.indexId,l,y,d.inclusive,E,f.inclusive,I);return m.forEach(S,D=>r.H(D,t.limit).next(V=>{V.forEach(F=>{const N=v.fromSegments(F.documentKey);o.has(N)||(o=o.add(N),a.push(N))})}))}).next(()=>a)}return m.resolve(null)})}ln(e){let t=this.cn.get(e);return t||(e.filters.length===0?t=[e]:t=$I(K.create(e.filters,"and")).map(r=>Mo(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,t),t)}dn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Tn(t[h/u]):wi,f=this.En(e,d,r[h%u],i),y=this.An(e,d,s[h%u],o),E=a.map(I=>this.En(e,d,I,!0));l.push(...this.createRange(f,y,E))}return l}En(e,t,r,i){const s=new Ut(e,v.empty(),t,r);return i?s:s.Zt()}An(e,t,r,i){const s=new Ut(e,v.empty(),t,r);return i?s.Zt():s}hn(e,t){const r=new $u(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.nn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.ln(t);return m.forEach(i,s=>this.hn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new W(re.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Rn(e,t){const r=new ir;for(const i of Mt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);$t.Ct.dt(s,o)}return r.zt()}Tn(e){const t=new ir;return $t.Ct.dt(e,t.Yt(0)),t.zt()}Vn(e,t){const r=new ir;return $t.Ct.dt(Jt(this.databaseId,t),r.Yt(function(s){const o=Mt(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}In(e,t,r){if(r===null)return[];let i=[];i.push(new ir);let s=0;for(const o of Mt(e)){const a=r[s++];for(const c of i)if(this.mn(t,o.fieldPath)&&Br(a))i=this.fn(i,o,a);else{const u=c.Yt(o.kind);$t.Ct.dt(a,u)}}return this.gn(i)}Pn(e,t,r){return this.In(e,t,r.position)}gn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}fn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new ir;c.seed(a.zt()),$t.Ct.dt(o,c.Yt(t.kind)),s.push(c)}return s}mn(e,t){return!!e.filters.find(r=>r instanceof B&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=sr(e),i=_n(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Or(h.sequenceNumber,new Fe(rn(h.readTime),new v(Qe(h.documentKey)),h.largestBatchId)):Or.empty(),f=l.fields.map(([y,E])=>new Ci(re.fromServerFormat(y),E));return new Hi(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:O(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=sr(e),s=_n(e);return this.pn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(Ou(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.yn(e,i,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?m.resolve():this.Sn(e,s,c,u,l)}))))})}bn(e,t,r,i){return pn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Vn(r,t.key),documentKey:t.key.path.toArray()})}Dn(e,t,r,i){return pn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Vn(r,t.key),t.key.path.toArray()])}yn(e,t,r){const i=pn(e);let s=new W(ct);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Vn(r,t)])},(o,a)=>{s=s.add(new Ut(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,t){let r=new W(ct);const i=this.Rn(t,e);if(i==null)return r;const s=xo(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Br(o))for(const a of o.arrayValue.values||[])r=r.add(new Ut(t.indexId,e.key,this.Tn(a),i))}else r=r.add(new Ut(t.indexId,e.key,wi,i));return r}Sn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),y=u.getIterator();let E=gn(f),I=gn(y);for(;E||I;){let S=!1,D=!1;if(E&&I){const V=l(E,I);V<0?D=!0:V>0&&(S=!0)}else E!=null?D=!0:S=!0;S?(h(I),I=gn(y)):D?(d(E),E=gn(f)):(E=gn(f),I=gn(y))}}(i,s,ct,a=>{o.push(this.bn(e,t,r,a))},a=>{o.push(this.Dn(e,t,r,a))}),m.waitFor(o)}pn(e){let t=1;return _n(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>ct(o,a)).filter((o,a,c)=>!a||ct(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ct(o,e),c=ct(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&c<0)i.push(o),i.push(o.Zt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,wi,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,wi,[]];s.push(IDBKeyRange.bound(a,c))}return s}Cn(e,t){return ct(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ju)}getMinOffset(e,t){return m.mapArray(this.ln(t),r=>this.hn(e,r).next(i=>i||R())).next(ju)}}function qu(n){return pe(n,"collectionParents")}function pn(n){return pe(n,"indexEntries")}function sr(n){return pe(n,"indexConfiguration")}function _n(n){return pe(n,"indexState")}function ju(n){C(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;xa(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Fe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{C(a===1)}));const u=[];for(const l of t.mutations){const h=Xh(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function ts(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw R();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(41943040,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);class Ds{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.vn={}}static Pt(e,t,r,i){C(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ds(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ut(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Tn(e),o=ut(e);return o.add({}).next(a=>{C(typeof a=="number");const c=new Ba(a,t,r,i),u=function(f,y,E){const I=E.baseMutations.map(D=>qr(f.ht,D)),S=E.mutations.map(D=>qr(f.ht,D));return{userId:y,batchId:E.batchId,localWriteTimeMs:E.localWriteTime.toMillis(),baseMutations:I,mutations:S}}(this.serializer,this.userId,c),l=[];let h=new W((d,f)=>O(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Xh(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,Vy))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.vn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return ut(e).get(t).next(r=>r?(C(r.userId===this.userId),Bt(this.serializer,r)):null)}Fn(e,t){return this.vn[t]?m.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ut(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(C(a.batchId>=r),s=Bt(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ut(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ut(e).G("userMutationsIndex",t).next(r=>r.map(i=>Bt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Vi(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Tn(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=Qe(l);if(u===this.userId&&t.path.isEqual(d))return ut(e).get(h).next(f=>{if(!f)throw R();C(f.userId===this.userId),s.push(Bt(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new W(O);const i=[];return t.forEach(s=>{const o=Vi(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Tn(e).Z({range:a},(u,l,h)=>{const[d,f,y]=u,E=Qe(f);d===this.userId&&s.path.isEqual(E)?r=r.add(y):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.Mn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Vi(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new W(O);return Tn(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,y=Qe(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Mn(e,a))}Mn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(ut(e).get(s).next(o=>{if(o===null)throw R();C(o.userId===this.userId),r.push(Bt(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Wd(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.xn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Tn(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Qe(s[1]);i.push(c)}else a.done()}).next(()=>{C(i.length===0)})})}containsKey(e,t){return Hd(e,this.userId,t)}On(e){return Yd(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Hd(n,e,t){const r=Vi(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Tn(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function ut(n){return pe(n,"mutations")}function Tn(n){return pe(n,"documentMutations")}function Yd(n){return pe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new sn(0)}static Ln(){return new sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.kn(e).next(t=>{const r=new sn(t.highestTargetId);return t.highestTargetId=r.next(),this.qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(t=>P.fromTimestamp(new Z(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.kn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.qn(e,i)))}addTargetData(e,t){return this.Qn(e,t).next(()=>this.kn(e).next(r=>(r.targetCount+=1,this.Kn(t,r),this.qn(e,r))))}updateTargetData(e,t){return this.Qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>yn(e).delete(t.targetId)).next(()=>this.kn(e)).next(r=>(C(r.targetCount>0),r.targetCount-=1,this.qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return yn(e).Z((o,a)=>{const c=fr(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return yn(e).Z((r,i)=>{const s=fr(i);t(s)})}kn(e){return Gu(e).get("targetGlobalKey").next(t=>(C(t!==null),t))}qn(e,t){return Gu(e).put("targetGlobalKey",t)}Qn(e,t){return yn(e).put(Gd(this.serializer,t))}Kn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.kn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Zt(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return yn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=fr(a);ii(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=ht(e);return t.forEach(o=>{const a=Pe(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=ht(e);return m.forEach(t,s=>{const o=Pe(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=ht(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=ht(e);let s=M();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=Qe(o[1]),l=new v(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Pe(t.path),i=IDBKeyRange.bound([r],[Gh(r)],!1,!0);let s=0;return ht(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}lt(e,t){return yn(e).get(t).next(r=>r?fr(r):null)}}function yn(n){return pe(n,"targets")}function Gu(n){return pe(n,"targetGlobal")}function ht(n){return pe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku([n,e],[t,r]){const i=O(n,t);return i===0?O(e,r):i}class zI{constructor(e){this.$n=e,this.buffer=new W(Ku),this.Un=0}Wn(){return++this.Un}Gn(e){const t=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ku(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class GI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.zn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return this.zn!==null}jn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dt(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await xt(t)}await this.jn(3e5)})}}class KI{constructor(e,t){this.Hn=e,this.params=t}calculateTargetCount(e,t){return this.Hn.Jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(De.ae);const r=new zI(t);return this.Hn.forEachTarget(e,i=>r.Gn(i.sequenceNumber)).next(()=>this.Hn.Yn(e,i=>r.Gn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Hn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Hn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(zu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zu):this.Zn(e,t))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),In()<=$.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function QI(n,e){return new KI(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t){this.db=e,this.garbageCollector=QI(this,t)}Jn(e){const t=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Xn(e){let t=0;return this.Yn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Yn(e,t){return this.er(e,(r,i)=>t(i))}addReference(e,t,r){return Ti(e,r)}removeReference(e,t,r){return Ti(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ti(e,t)}tr(e,t){return function(i,s){let o=!1;return Yd(i).X(a=>Hd(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.er(e,(o,a)=>{if(a<=t){const c=this.tr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,P.min()),ht(e).delete(function(h){return[0,Pe(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ti(e,t)}er(e,t){const r=ht(e);let i,s=De.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==De.ae&&t(new v(Qe(i)),s),s=u,i=c):s=De.ae}).next(()=>{s!==De.ae&&t(new v(Qe(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ti(n,e){return ht(n).put(function(r,i){return{targetId:0,path:Pe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.changes=new Nt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,X.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Ot(e).put(r)}removeEntry(e,t,r){return Ot(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Zi(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.nr(e,r)))}getEntry(e,t){let r=X.newInvalidDocument(t);return Ot(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(or(t))},(i,s)=>{r=this.rr(t,s)}).next(()=>r)}ir(e,t){let r={size:0,document:X.newInvalidDocument(t)};return Ot(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(or(t))},(i,s)=>{r={document:this.rr(t,s),size:ts(s)}}).next(()=>r)}getEntries(e,t){let r=ke();return this.sr(e,t,(i,s)=>{const o=this.rr(i,s);r=r.insert(i,o)}).next(()=>r)}_r(e,t){let r=ke(),i=new H(v.comparator);return this.sr(e,t,(s,o)=>{const a=this.rr(s,o);r=r.insert(s,a),i=i.insert(s,ts(o))}).next(()=>({documents:r,ar:i}))}sr(e,t,r){if(t.isEmpty())return m.resolve();let i=new W(Hu);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(or(i.first()),or(i.last())),o=i.getIterator();let a=o.getNext();return Ot(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=v.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Hu(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(or(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Zi(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ot(e).G(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=ke();for(const h of u){const d=this.rr(v.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(oi(t,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=ke();const o=Wu(t,r),a=Wu(t,Fe.max());return Ot(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.rr(v.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new YI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Qu(e).get("remoteDocumentGlobalKey").next(t=>(C(!!t),t))}nr(e,t){return Qu(e).put("remoteDocumentGlobalKey",t)}rr(e,t){if(t){const r=kI(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(P.min())))return r}return X.newInvalidDocument(e)}}function Jd(n){return new HI(n)}class YI extends Xd{constructor(e,t){super(),this.ur=e,this.trackRemovals=t,this.cr=new Nt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new W((s,o)=>O(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.cr.get(s);if(t.push(this.ur.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Nu(this.ur.serializer,o);i=i.add(s.path.popLast());const u=ts(c);r+=u-a.size,t.push(this.ur.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Nu(this.ur.serializer,o.convertToNoDocument(P.min()));t.push(this.ur.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.ur.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ur.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this.ur.ir(e,t).next(r=>(this.cr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.ur._r(e,t).next(({documents:r,ar:i})=>(i.forEach((s,o)=>{this.cr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Qu(n){return pe(n,"remoteDocumentGlobal")}function Ot(n){return pe(n,"remoteDocumentsV14")}function or(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wu(n,e){const t=e.documentKey.path.toArray();return[n,Zi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Hu(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=O(t[s],r[s]),i)return i;return i=O(t.length,r.length),i||(i=O(t[t.length-2],r[r.length-2]),i||O(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ir(r.mutation,i,Ne.empty(),Z.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,M()).next(()=>r))}getLocalViewOfDocuments(e,t,r=M()){const i=We();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=hr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=We();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,M()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=ke();const o=yr(),a=function(){return yr()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof st)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ir(l.mutation,u,l.mutation.getFieldMask(),Z.now())):o.set(u.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new XI(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=yr();let i=new H((o,a)=>o-a),s=M();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Ne.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||M()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=yd();l.forEach(d=>{if(!s.has(d)){const f=bd(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return v.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(We());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,M())).next(l=>({batchId:a,changes:_d(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(r=>{let i=hr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=hr();return this.indexManager.getCollectionParents(e,s).next(a=>m.forEach(a,c=>{const u=function(h,d){return new it(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,X.newInvalidDocument(l)))});let a=hr();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&Ir(l.mutation,u,Ne.empty(),Z.now()),oi(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return m.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ae(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:za(i.bundledQuery),readTime:ae(i.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.overlays=new H(v.comparator),this.Pr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=We();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.It(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=We(),s=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new H((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=We(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=We(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}It(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ua(t,r));let s=this.Pr.get(t);s===void 0&&(s=M(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.Ir=new W(he.dr),this.Tr=new W(he.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new he(e,t);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new he(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new v(new q([])),r=new he(t,e),i=new he(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const t=new v(new q([])),r=new he(t,e),i=new he(t,e+1);let s=M();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new he(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return v.comparator(e.key,t.key)||O(e.yr,t.yr)}static Er(e,t){return O(e.yr,t.yr)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new W(he.dr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ba(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new he(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),i=new he(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new W(O);return t.forEach(i=>{const s=new he(i,0),o=new he(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),m.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;v.isDocumentKey(s)||(s=s.child(""));const o=new he(new v(s),0);let a=new W(O);return this.Sr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.yr)),!0)},o),m.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){C(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return m.forEach(t.mutations,i=>{const s=new he(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new he(t,0),i=this.Sr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.Fr=e,this.docs=function(){return new H(v.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():X.newInvalidDocument(t))}getEntries(e,t){let r=ke();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():X.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ke();const o=t.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xa(Qh(l),r)<=0||(i.has(l.key)||oi(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){R()}Mr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nE(this)}getSize(e){return m.resolve(this.size)}}class nE extends Xd{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.persistence=e,this.Or=new Nt(t=>Zt(t),ii),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Qa,this.targetCount=0,this.Lr=sn.Bn()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),m.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new sn(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Qn(t),m.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Ar(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Br.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.pr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){this.kr={},this.overlays={},this.qr=new De(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new rE(this),this.indexManager=new UI,this.remoteDocumentCache=function(i){return new tE(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new zd(t),this.Ur=new JI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new eE(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new iE(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,t){return m.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class iE extends Hh{constructor(e){super(),this.currentSequenceNumber=e}}class Ns{constructor(e){this.persistence=e,this.jr=new Qa,this.Hr=null}static Jr(e){return new Ns(e)}get Yr(){if(this.Hr)return this.Hr;throw R()}addReference(e,t,r){return this.jr.addReference(r,t),this.Yr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.jr.removeReference(r,t),this.Yr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),m.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Yr,r=>{const i=v.fromPath(r);return this.Zr(e,i).next(s=>{s||t.removeEntry(i,P.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(r=>{r?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return m.or([()=>m.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.serializer=e}B(e,t,r,i){const s=new bs("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lu,{unique:!0}),c.createObjectStore("documentMutations")}(e),Yu(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Yu(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lu,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ei(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ti(s)))),r<7&&i>=7&&(o=o.next(()=>this.ni(s))),r<8&&i>=8&&(o=o.next(()=>this.ri(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ii(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:qy});u.createIndex("collectionPathOverlayIndex",jy,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",zy,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:xy});u.createIndex("documentKeyIndex",Dy),u.createIndex("collectionGroupIndex",Ny)}(e)).next(()=>this.si(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.oi(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:Ly}).createIndex("sequenceNumberIndex",By,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:$y}).createIndex("documentKeyIndex",Uy,{unique:!1})}(e))),o}ti(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=ts(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ei(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{C(c.userId===s.userId);const u=Bt(this.serializer,c);return Wd(e,s.userId,u).next(()=>{})}))}))}ni(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new q(o),u=function(h){return[0,Pe(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:Pe(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ri(e,t){e.createObjectStore("collectionParents",{keyPath:My});const r=t.store("collectionParents"),i=new Ka,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Pe(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new q(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=Qe(a);return s(l.popLast())}))}ii(e){const t=e.store("targets");return t.Z((r,i)=>{const s=fr(i),o=Gd(this.serializer,s);return t.put(o)})}si(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new v(q.fromString(h.document.name).popFirst(5)):h.noDocument?v.fromSegments(h.noDocument.path):h.unknownDocument?v.fromSegments(h.unknownDocument.path):R()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}oi(e,t){const r=t.store("mutations"),i=Jd(this.serializer),s=new ef(Ns.Jr,this.serializer.ht);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:M();Bt(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new de(u),h=xs.Pt(this.serializer,l),d=s.getIndexManager(l),f=Ds.Pt(l,this.serializer,d,s.referenceDelegate);return new Zd(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Do(t,De.ae),c).next()})})}}function Yu(n){n.createObjectStore("targetDocuments",{keyPath:Oy}).createIndex("documentTargetsIndex",Fy,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ky,{unique:!0}),n.createObjectStore("targetGlobal")}const uo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Wa{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this._i=s,this.window=o,this.document=a,this.ai=u,this.ui=l,this.ci=h,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.li=null,this.inForeground=!1,this.hi=null,this.Pi=null,this.Ii=Number.NEGATIVE_INFINITY,this.di=d=>Promise.resolve(),!Wa.C())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WI(this,i),this.Ti=t+"main",this.serializer=new zd(c),this.Ei=new Ue(this.Ti,this.ci,new sE(this.serializer)),this.Kr=new jI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Jd(this.serializer),this.Ur=new OI,this.window&&this.window.localStorage?this.Ai=this.window.localStorage:(this.Ai=null,l===!1&&oe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ri().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,uo);return this.Vi(),this.mi(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Kr.getHighestSequenceNumber(e))}).then(e=>{this.qr=new De(e,this.ai)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}gi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this._i.enqueueAndForget(async()=>{this.started&&await this.Ri()}))}Ri(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ai(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.pi(e).next(t=>{t||(this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.yi(e)).next(t=>this.isPrimary&&!t?this.wi(e).next(()=>!1):!!t&&this.Si(e).next(()=>!0))).catch(e=>{if(Dt(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this._i.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}pi(e){return ar(e).get("owner").next(t=>m.resolve(this.bi(t)))}Di(e){return Ai(e).delete(this.clientId)}async Ci(){if(this.isPrimary&&!this.vi(this.Ii,18e5)){this.Ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=pe(t,"clientMetadata");return r.G().next(i=>{const s=this.Fi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ai)for(const t of e)this.Ai.removeItem(this.Mi(t.clientId))}}fi(){this.Pi=this._i.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ri().then(()=>this.Ci()).then(()=>this.fi()))}bi(e){return!!e&&e.ownerId===this.clientId}yi(e){return this.ui?m.resolve(!0):ar(e).get("owner").next(t=>{if(t!==null&&this.vi(t.leaseTimestampMs,5e3)&&!this.xi(t.ownerId)){if(this.bi(t)&&this.networkEnabled)return!0;if(!this.bi(t)){if(!t.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,uo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ai(e).G().next(r=>this.Fi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Qr=!1,this.Oi(),this.Pi&&(this.Pi.cancel(),this.Pi=null),this.Ni(),this.Bi(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Do(e,De.ae);return this.wi(t).next(()=>this.Di(t))}),this.Ei.close(),this.Li()}Fi(e,t){return e.filter(r=>this.vi(r.updateTimeMs,t)&&!this.xi(r.clientId))}ki(){return this.runTransaction("getActiveClients","readonly",e=>Ai(e).G().next(t=>this.Fi(t,18e5).map(r=>r.clientId)))}get started(){return this.Qr}getMutationQueue(e,t){return Ds.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qI(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return xs.Pt(this.serializer,e)}getBundleCache(){return this.Ur}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?Ky:c===14?ed:c===13?Zh:c===12?Gy:c===11?Jh:void R()}(this.ci);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Do(a,this.qr?this.qr.next():De.ae),t==="readwrite-primary"?this.pi(o).next(c=>!!c||this.yi(o)).next(c=>{if(!c)throw oe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)),new p(g.FAILED_PRECONDITION,Wh);return r(o)}).next(c=>this.Si(o).next(()=>c)):this.qi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}qi(e){return ar(e).get("owner").next(t=>{if(t!==null&&this.vi(t.leaseTimestampMs,5e3)&&!this.xi(t.ownerId)&&!this.bi(t)&&!(this.ui||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,uo)})}Si(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ar(e).put("owner",t)}static C(){return Ue.C()}wi(e){const t=ar(e);return t.get("owner").next(r=>this.bi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(oe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Vi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.hi=()=>{this._i.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ri()))},this.document.addEventListener("visibilitychange",this.hi),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.hi&&(this.document.removeEventListener("visibilitychange",this.hi),this.hi=null)}mi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.li=()=>{this.Oi();const t=/(?:Version|Mobile)\/1[456]/;Og()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this._i.enterRestrictedMode(!0),this._i.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.li))}Bi(){this.li&&(this.window.removeEventListener("pagehide",this.li),this.li=null)}xi(e){var t;try{const r=((t=this.Ai)===null||t===void 0?void 0:t.getItem(this.Mi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return oe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Oi(){if(this.Ai)try{this.Ai.setItem(this.Mi(this.clientId),String(Date.now()))}catch(e){oe("Failed to set zombie client id.",e)}}Li(){if(this.Ai)try{this.Ai.removeItem(this.Mi(this.clientId))}catch{}}Mi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ar(n){return pe(n,"owner")}function Ai(n){return pe(n,"clientMetadata")}function Ha(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Qi=r,this.Ki=i}static $i(e,t){let r=M(),i=M();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ya(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Hi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new oE;return this.Yi(e,t,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,t,o,a.size)})}).next(()=>s.result)}Zi(e,t,r,i){return r.documentReadCount<this.Gi?(In()<=$.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",En(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),m.resolve()):(In()<=$.DEBUG&&_("QueryEngine","Query:",En(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(In()<=$.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",En(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ce(t))):m.resolve())}Hi(e,t){if(wu(t))return m.resolve(null);let r=Ce(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ji(t,null,"F"),r=Ce(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=M(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Xi(t,a);return this.es(t,u,o,c.readTime)?this.Hi(e,Ji(t,null,"F")):this.ts(e,u,t,c)}))})))}Ji(e,t,r,i){return wu(t)||i.isEqual(P.min())?m.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(t,s);return this.es(t,o,r,i)?m.resolve(null):(In()<=$.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),En(t)),this.ts(e,o,t,Kh(i,-1)).next(a=>a))})}Xi(e,t){let r=new W(gd(e));return t.forEach((i,s)=>{oi(e,s)&&(r=r.add(s))}),r}es(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,t,r){return In()<=$.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",En(t)),this.ji.getDocumentsMatchingQuery(e,t,Fe.min(),r)}ts(e,t,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,r,i){this.persistence=e,this.ns=t,this.serializer=i,this.rs=new H(O),this.ss=new Nt(s=>Zt(s),ii),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zd(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}function nf(n,e,t,r){return new aE(n,e,t,r)}async function rf(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.us(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=M();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function cE(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t._s.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(y=>{f=f.next(()=>l.getEntry(c,y)).next(E=>{const I=u.docVersions.get(y);C(I!==null),E.version.compareTo(I)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),l.addEntry(E)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=M();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function sf(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}function uE(n,e){const t=T(n),r=e.snapshotVersion;let i=t.rs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t._s.newChangeBuffer({trackRemovals:!0});i=t.rs;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(le.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(E,I,S){return E.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,f,l)&&a.push(t.Kr.updateTargetData(s,f))});let c=ke(),u=M();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(of(s,o,e.documentUpdates).next(l=>{c=l.ls,u=l.hs})),!r.isEqual(P.min())){const l=t.Kr.getLastRemoteSnapshotVersion(s).next(h=>t.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.rs=i,s))}function of(n,e,t){let r=M(),i=M();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ke();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ls:o,hs:i}})}function lE(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ln(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Kr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.Kr.allocateTargetId(r).next(o=>(i=new et(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.rs=t.rs.insert(r.targetId,r),t.ss.set(e,r.targetId)),r})}async function Bn(n,e,t){const r=T(n),i=r.rs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Dt(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function ns(n,e,t){const r=T(n);let i=P.min(),s=M();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=T(c),d=h.ss.get(l);return d!==void 0?m.resolve(h.rs.get(d)):h.Kr.getTargetData(u,l)}(r,o,Ce(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,t?i:P.min(),t?s:M())).next(a=>(uf(r,md(e),a),{documents:a,Ps:s})))}function af(n,e){const t=T(n),r=T(t.Kr),i=t.rs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.lt(s,e).next(o=>o?o.target:null))}function cf(n,e){const t=T(n),r=t.os.get(e)||P.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t._s.getAllFromCollectionGroup(i,e,Kh(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(uf(t,e,i),i))}function uf(n,e,t){let r=n.os.get(e)||P.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.os.set(e,r)}async function hE(n,e,t,r){const i=T(n);let s=M(),o=ke();for(const u of t){const l=e.Is(u.metadata.name);u.document&&(s=s.add(l));const h=e.ds(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(l,h)}const a=i._s.newChangeBuffer({trackRemovals:!0}),c=await Ln(i,function(l){return Ce(Qn(q.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>of(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ls,l.hs)).next(()=>l.ls)))}async function dE(n,e,t=M()){const r=await Ln(n,Ce(za(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ae(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ur.saveNamedQuery(s,e);const a=r.withResumeToken(le.EMPTY_BYTE_STRING,o);return i.rs=i.rs.insert(a.targetId,a),i.Kr.updateTargetData(s,a).next(()=>i.Kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Kr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Ur.saveNamedQuery(s,e))})}function Xu(n,e){return`firestore_clients_${n}_${e}`}function Ju(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function lo(n,e){return`firestore_targets_${n}_${e}`}class rs{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Es(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new rs(e,t,i.state,s):(oe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Er{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Es(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new Er(e,r.state,i):(oe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class is{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ma();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Yh(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new is(e,s):(oe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Xa{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Xa(t.clientId,t.onlineState):(oe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Go{constructor(){this.activeTargetIds=Ma()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ho{constructor(e,t,r,i,s){this.window=e,this._i=t,this.persistenceKey=r,this.fs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.gs=this.ps.bind(this),this.ys=new H(O),this.started=!1,this.ws=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ss=Xu(this.persistenceKey,this.fs),this.bs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ys=this.ys.insert(this.fs,new Go),this.Ds=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Cs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.vs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Fs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Ms=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.gs)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ki();for(const r of e){if(r===this.fs)continue;const i=this.getItem(Xu(this.persistenceKey,r));if(i){const s=is.Es(r,i);s&&(this.ys=this.ys.insert(s.clientId,s))}}this.xs();const t=this.storage.getItem(this.Fs);if(t){const r=this.Os(t);r&&this.Ns(r)}for(const r of this.ws)this.ps(r);this.ws=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ys)}isActiveQueryTarget(e){let t=!1;return this.ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,r){this.Ls(e,t,r),this.ks(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(lo(this.persistenceKey,e));if(r){const i=Er.Es(e,r);i&&(t=i.state)}}return this.qs.Rs(e),this.xs(),t}removeLocalQueryTarget(e){this.qs.Vs(e),this.xs()}isLocalQueryTarget(e){return this.qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lo(this.persistenceKey,e))}updateQueryState(e,t,r){this.Qs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.ks(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ks(e)}notifyBundleLoaded(e){this.$s(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.gs),this.removeItem(this.Ss),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ps(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ss)return void oe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this._i.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ds.test(t.key)){if(t.newValue==null){const r=this.Us(t.key);return this.Ws(r,null)}{const r=this.Gs(t.key,t.newValue);if(r)return this.Ws(r.clientId,r)}}else if(this.Cs.test(t.key)){if(t.newValue!==null){const r=this.zs(t.key,t.newValue);if(r)return this.js(r)}}else if(this.vs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(t.key===this.Fs){if(t.newValue!==null){const r=this.Os(t.newValue);if(r)return this.Ns(r)}}else if(t.key===this.bs){const r=function(s){let o=De.ae;if(s!=null)try{const a=JSON.parse(s);C(typeof a=="number"),o=a}catch(a){oe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==De.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.Ms){const r=this.Ys(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Zs(i)))}}}else this.ws.push(t)})}}get qs(){return this.ys.get(this.fs)}xs(){this.setItem(this.Ss,this.qs.As())}Ls(e,t,r){const i=new rs(this.currentUser,e,t,r),s=Ju(this.persistenceKey,this.currentUser,e);this.setItem(s,i.As())}ks(e){const t=Ju(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ks(e){const t={clientId:this.fs,onlineState:e};this.storage.setItem(this.Fs,JSON.stringify(t))}Qs(e,t,r){const i=lo(this.persistenceKey,e),s=new Er(e,t,r);this.setItem(i,s.As())}$s(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ms,t)}Us(e){const t=this.Ds.exec(e);return t?t[1]:null}Gs(e,t){const r=this.Us(e);return is.Es(r,t)}zs(e,t){const r=this.Cs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rs.Es(new de(s),i,t)}Hs(e,t){const r=this.vs.exec(e),i=Number(r[1]);return Er.Es(i,t)}Os(e){return Xa.Es(e)}Ys(e){return JSON.parse(e)}async js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Xs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Js(e){return this.syncEngine.eo(e.targetId,e.state,e.error)}Ws(e,t){const r=t?this.ys.insert(e,t):this.ys.remove(e),i=this.Bs(this.ys),s=this.Bs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.no(o,a).then(()=>{this.ys=r})}Ns(e){this.ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let t=Ma();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class lf{constructor(){this.ro=new Go,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,r){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Go,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri=null;function fo(){return Ri===null?Ri=function(){return 268435456+Math.round(2147483648*Math.random())}():Ri++,"0x"+Ri.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="WebChannelConnection";class pE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+t.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(t,r,i,s,o){const a=fo(),c=this.Do(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw je("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Fo(t,r,i,s,o,a){return this.bo(t,r,i,s,o)}Co(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Do(t,r){const i=mE[t];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=fo();return new Promise((o,a)=>{const c=new dy;c.setWithCredentials(!0),c.listenOnce(ly.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ao.NO_ERROR:const l=c.getResponseJson();_(we,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case ao.TIMEOUT:_(we,`RPC '${e}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case ao.HTTP_ERROR:const h=c.getStatus();if(_(we,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(I){const S=I.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(S)>=0?S:g.UNKNOWN}(f.status);a(new p(y,f.message))}else a(new p(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{_(we,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(we,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Mo(e,t,r){const i=fo(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cy(),a=uy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(we,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const y=new gE({ho:I=>{f?_(we,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(_(we,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(we,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},Po:()=>h.close()}),E=(I,S,D)=>{I.listen(S,V=>{try{D(V)}catch(F){setTimeout(()=>{throw F},0)}})};return E(h,Ei.EventType.OPEN,()=>{f||_(we,`RPC '${e}' stream ${i} transport opened.`)}),E(h,Ei.EventType.CLOSE,()=>{f||(f=!0,_(we,`RPC '${e}' stream ${i} transport closed`),y.mo())}),E(h,Ei.EventType.ERROR,I=>{f||(f=!0,je(we,`RPC '${e}' stream ${i} transport errored:`,I),y.mo(new p(g.UNAVAILABLE,"The operation could not be completed")))}),E(h,Ei.EventType.MESSAGE,I=>{var S;if(!f){const D=I.data[0];C(!!D);const V=D,F=V.error||((S=V[0])===null||S===void 0?void 0:S.error);if(F){_(we,`RPC '${e}' stream ${i} received error:`,F);const N=F.status;let w=function(G){const te=ce[G];if(te!==void 0)return Cd(te)}(N),x=F.message;w===void 0&&(w=g.INTERNAL,x="Unknown error status: "+N+" with message "+F.message),f=!0,y.mo(new p(w,x)),h.close()}else _(we,`RPC '${e}' stream ${i} received:`,D),y.fo(D)}}),E(a,hy.STAT_EVENT,I=>{I.stat===ou.PROXY?_(we,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===ou.NOPROXY&&_(we,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(){return typeof window<"u"?window:null}function Oi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){return new AI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=t,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const t=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,r,i,s,o,a,c){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Ja(e,t)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(oe(t.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===t&&this.__(r,i)},r=>{e(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,t){const r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _E extends df{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();const t=SI(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?ae(o.readTime):P.min()}(e);return this.listener.c_(t,r)}l_(e){const t={};t.database=Ur(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=Yi(c)?{documents:Ld(s,c)}:{query:Bd(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Nd(s,o.resumeToken);const u=Bo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=Mn(s,o.snapshotVersion.toTimestamp());const u=Bo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=CI(this.serializer,e);r&&(t.labels=r),this.n_(t)}h_(e){const t={};t.database=Ur(this.serializer),t.removeTarget=e,this.n_(t)}}class yE extends df{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){if(C(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const t=PI(e.writeResults,e.commitTime),r=ae(e.commitTime);return this.listener.T_(r,t)}return C(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Ur(this.serializer),this.n_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>qr(this.serializer,r))};this.n_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}Fo(e,t,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class EE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(oe(t),this.p_=!1):_("OnlineStateTracker",t)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{kt(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=T(c);u.F_.add(4),await Yn(u),u.O_.set("Unknown"),u.F_.delete(4),await hi(u)}(this))})}),this.O_=new EE(r,i)}}async function hi(n){if(kt(n))for(const e of n.M_)await e(!0)}async function Yn(n){for(const e of n.M_)await e(!1)}function ks(n,e){const t=T(n);t.v_.has(e.targetId)||(t.v_.set(e.targetId,e),tc(t)?ec(t):Jn(t).Yo()&&Za(t,e))}function jr(n,e){const t=T(n),r=Jn(t);t.v_.delete(e),r.Yo()&&ff(t,e),t.v_.size===0&&(r.Yo()?r.e_():kt(t)&&t.O_.set("Unknown"))}function Za(n,e){if(n.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jn(n).l_(e)}function ff(n,e){n.N_.Le(e),Jn(n).h_(e)}function ec(n){n.N_=new EI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.v_.get(e)||null,st:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.O_.y_()}function tc(n){return kt(n)&&!Jn(n).Jo()&&n.v_.size>0}function kt(n){return T(n).F_.size===0}function mf(n){n.N_=void 0}async function wE(n){n.v_.forEach((e,t)=>{Za(n,e)})}async function TE(n,e){mf(n),tc(n)?(n.O_.b_(e),ec(n)):n.O_.set("Unknown")}async function AE(n,e,t){if(n.O_.set("Online"),e instanceof Dd&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ss(n,r)}else if(e instanceof ki?n.N_.Ge(e):e instanceof xd?n.N_.Xe(e):n.N_.He(e),!t.isEqual(P.min()))try{const r=await sf(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.v_.get(u);l&&s.v_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.v_.get(c);if(!l)return;s.v_.set(c,l.withResumeToken(le.EMPTY_BYTE_STRING,l.snapshotVersion)),ff(s,c);const h=new et(l.target,c,u,l.sequenceNumber);Za(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await ss(n,r)}}async function ss(n,e,t){if(!Dt(e))throw e;n.F_.add(1),await Yn(n),n.O_.set("Offline"),t||(t=()=>sf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.F_.delete(1),await hi(n)})}function gf(n,e){return e().catch(t=>ss(n,t,e))}async function Xn(n){const e=T(n),t=bt(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;RE(e);)try{const i=await lE(e.localStore,r);if(i===null){e.C_.length===0&&t.e_();break}r=i.batchId,bE(e,i)}catch(i){await ss(e,i)}pf(e)&&_f(e)}function RE(n){return kt(n)&&n.C_.length<10}function bE(n,e){n.C_.push(e);const t=bt(n);t.Yo()&&t.I_&&t.d_(e.mutations)}function pf(n){return kt(n)&&!bt(n).Jo()&&n.C_.length>0}function _f(n){bt(n).start()}async function SE(n){bt(n).A_()}async function PE(n){const e=bt(n);for(const t of n.C_)e.d_(t.mutations)}async function CE(n,e,t){const r=n.C_.shift(),i=$a.from(r,e,t);await gf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Xn(n)}async function VE(n,e){e&&bt(n).I_&&await async function(r,i){if(function(o){return Pd(o)&&o!==g.ABORTED}(i.code)){const s=r.C_.shift();bt(r).Xo(),await gf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xn(r)}}(n,e),pf(n)&&_f(n)}async function el(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=kt(t);t.F_.add(3),await Yn(t),r&&t.O_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.F_.delete(3),await hi(t)}async function Ko(n,e){const t=T(n);e?(t.F_.delete(2),await hi(t)):e||(t.F_.add(2),await Yn(t),t.O_.set("Unknown"))}function Jn(n){return n.B_||(n.B_=function(t,r,i){const s=T(t);return s.V_(),new _E(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:wE.bind(null,n),Eo:TE.bind(null,n),c_:AE.bind(null,n)}),n.M_.push(async e=>{e?(n.B_.Xo(),tc(n)?ec(n):n.O_.set("Unknown")):(await n.B_.stop(),mf(n))})),n.B_}function bt(n){return n.L_||(n.L_=function(t,r,i){const s=T(t);return s.V_(),new yE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:SE.bind(null,n),Eo:VE.bind(null,n),E_:PE.bind(null,n),T_:CE.bind(null,n)}),n.M_.push(async e=>{e?(n.L_.Xo(),await Xn(n)):(await n.L_.stop(),n.C_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.C_.length} pending writes`),n.C_=[]))})),n.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new nc(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zn(n,e){if(oe("AsyncQueue",`${e}: ${n}`),Dt(n))return new p(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||v.comparator(t.key,r.key):(t,r)=>v.comparator(t.key,r.key),this.keyedMap=hr(),this.sortedSet=new H(this.comparator)}static emptySet(e){return new Cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Cn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.k_=new H(v.comparator)}track(e){const t=e.doc.key,r=this.k_.get(t);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(t,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(t):e.type===1&&r.type===2?this.k_=this.k_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):R():this.k_=this.k_.insert(t,e)}q_(){const e=[];return this.k_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $n{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new $n(e,t,Cn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.Q_=void 0,this.listeners=[]}}class DE{constructor(){this.queries=new Nt(e=>fd(e),si),this.onlineState="Unknown",this.K_=new Set}}async function rc(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new xE),i)try{s.Q_=await t.onListen(r)}catch(o){const a=Zn(o,`Initialization of query '${En(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.U_(t.onlineState),s.Q_&&e.W_(s.Q_)&&sc(t)}async function ic(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function NE(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&sc(t)}function kE(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function sc(n){n.K_.forEach(e=>{e.next()})}class oc{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Y_(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.X_=e,this.byteLength=t}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.serializer=e}Is(e){return He(this.serializer,e)}ds(e){return e.metadata.exists?Md(this.serializer,e.document,!1):X.newNoDocument(this.Is(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ae(e)}}class FE{constructor(e,t,r){this.ta=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=yf(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++t;const r=q.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ra(e){const t=new Map,r=new nl(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Is(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||M()).add(s);t.set(o,a)}}return t}async complete(){const e=await hE(this.localStore,new nl(this.serializer),this.documents,this.ta.id),t=this.ra(this.documents);for(const r of this.queries)await dE(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function yf(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.key=e}}class Ef{constructor(e){this.key=e}}class vf{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=M(),this.mutatedKeys=M(),this.ua=gd(e),this.ca=new Cn(this.ua)}get la(){return this.oa}ha(e,t){const r=t?t.Pa:new tl,i=t?t.ca:this.ca;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=oi(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?y!==E&&(r.track({type:3,doc:f}),I=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.ua(f,c)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(f?(o=o.add(f),s=E?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,l)=>function(d,f){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return y(d)-y(f)}(u.type,l.type)||this.ua(u.doc,l.doc)),this.da(r);const o=t?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,s.length!==0||c?{snapshot:new $n(this.query,e.ca,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new tl,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(t=>this.oa=this.oa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.oa=this.oa.delete(t)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=M(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const t=[];return e.forEach(r=>{this.aa.has(r)||t.push(new Ef(r))}),this.aa.forEach(r=>{e.has(r)||t.push(new If(r))}),t}Ra(e){this.oa=e.Ps,this.aa=M();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return $n.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class ME{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class LE{constructor(e){this.key=e,this.ma=!1}}class BE{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Nt(a=>fd(a),si),this.pa=new Map,this.ya=new Set,this.wa=new H(v.comparator),this.Sa=new Map,this.ba=new Qa,this.Da={},this.Ca=new Map,this.va=sn.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function $E(n,e){const t=hc(n);let r,i;const s=t.ga.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Ln(t.localStore,Ce(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ac(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&ks(t.remoteStore,o)}return i}async function ac(n,e,t,r,i){n.Ma=(h,d,f)=>async function(E,I,S,D){let V=I.view.ha(S);V.es&&(V=await ns(E.localStore,I.query,!1).then(({documents:w})=>I.view.ha(w,V)));const F=D&&D.targetChanges.get(I.targetId),N=I.view.applyChanges(V,E.isPrimaryClient,F);return Qo(E,I.targetId,N.Ea),N.snapshot}(n,h,d,f);const s=await ns(n.localStore,e,!0),o=new vf(e,s.Ps),a=o.ha(s.documents),c=ui.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Qo(n,t,u.Ea);const l=new ME(e,t,o);return n.ga.set(e,l),n.pa.has(t)?n.pa.get(t).push(e):n.pa.set(t,[e]),u.snapshot}async function UE(n,e){const t=T(n),r=t.ga.get(e),i=t.pa.get(r.targetId);if(i.length>1)return t.pa.set(r.targetId,i.filter(s=>!si(s,e))),void t.ga.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Bn(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),jr(t.remoteStore,r.targetId),Un(t,r.targetId)}).catch(xt)):(Un(t,r.targetId),await Bn(t.localStore,r.targetId,!0))}async function qE(n,e,t){const r=dc(n);try{const i=await function(o,a){const c=T(o),u=Z.now(),l=a.reduce((f,y)=>f.add(y.key),M());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=ke(),E=M();return c._s.getEntries(f,l).next(I=>{y=I,y.forEach((S,D)=>{D.isValidDocument()||(E=E.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(I=>{h=I;const S=[];for(const D of a){const V=_I(D,h.get(D.key).overlayedDocument);V!=null&&S.push(new st(D.key,V,id(V.value.mapValue),J.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,S,a)}).next(I=>{d=I;const S=I.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(f,I.batchId,S)})}).then(()=>({batchId:d.batchId,changes:_d(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new H(O)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,t),await ot(r,i.changes),await Xn(r.remoteStore)}catch(i){const s=Zn(i,"Failed to persist write");t.reject(s)}}async function wf(n,e){const t=T(n);try{const r=await uE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Sa.get(s);o&&(C(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?C(o.ma):i.removedDocuments.size>0&&(C(o.ma),o.ma=!1))}),await ot(t,r,e)}catch(r){await xt(r)}}function rl(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=T(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&sc(c)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jE(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new H(v.comparator);o=o.insert(s,X.newNoDocument(s,P.min()));const a=M().add(s),c=new ci(P.min(),new Map,new H(O),o,a);await wf(r,c),r.wa=r.wa.remove(s),r.Sa.delete(e),lc(r)}else await Bn(r.localStore,e,!1).then(()=>Un(r,e,t)).catch(xt)}async function zE(n,e){const t=T(n),r=e.batch.batchId;try{const i=await cE(t.localStore,e);uc(t,r,null),cc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ot(t,i)}catch(i){await xt(i)}}async function GE(n,e,t){const r=T(n);try{const i=await function(o,a){const c=T(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(C(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);uc(r,e,t),cc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ot(r,i)}catch(i){await xt(i)}}async function KE(n,e){const t=T(n);kt(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ca.get(r)||[];i.push(e),t.Ca.set(r,i)}catch(r){const i=Zn(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function cc(n,e){(n.Ca.get(e)||[]).forEach(t=>{t.resolve()}),n.Ca.delete(e)}function uc(n,e,t){const r=T(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Un(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.pa.get(e))n.ga.delete(r),t&&n.fa.xa(r,t);n.pa.delete(e),n.isPrimaryClient&&n.ba.mr(e).forEach(r=>{n.ba.containsKey(r)||Tf(n,r)})}function Tf(n,e){n.ya.delete(e.path.canonicalString());const t=n.wa.get(e);t!==null&&(jr(n.remoteStore,t),n.wa=n.wa.remove(e),n.Sa.delete(t),lc(n))}function Qo(n,e,t){for(const r of t)r instanceof If?(n.ba.addReference(r.key,e),QE(n,r)):r instanceof Ef?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,e),n.ba.containsKey(r.key)||Tf(n,r.key)):R()}function QE(n,e){const t=e.key,r=t.path.canonicalString();n.wa.get(t)||n.ya.has(r)||(_("SyncEngine","New document in limbo: "+t),n.ya.add(r),lc(n))}function lc(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const e=n.ya.values().next().value;n.ya.delete(e);const t=new v(q.fromString(e)),r=n.va.next();n.Sa.set(r,new LE(t)),n.wa=n.wa.insert(t,r),ks(n.remoteStore,new et(Ce(Qn(t.path)),r,"TargetPurposeLimboResolution",De.ae))}}async function ot(n,e,t){const r=T(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Ya.$i(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.fa.c_(i),await async function(c,u){const l=T(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.Ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Dt(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.rs.get(d),y=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(y);l.rs=l.rs.insert(d,E)}}}(r.localStore,s))}async function WE(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await rf(t.localStore,e);t.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new p(g.CANCELLED,o))})}),s.Ca.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ot(t,r.cs)}}function HE(n,e){const t=T(n),r=t.Sa.get(e);if(r&&r.ma)return M().add(r.key);{let i=M();const s=t.pa.get(e);if(!s)return i;for(const o of s){const a=t.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function YE(n,e){const t=T(n),r=await ns(t.localStore,e.query,!0),i=e.view.Ra(r);return t.isPrimaryClient&&Qo(t,e.targetId,i.Ea),i}async function XE(n,e){const t=T(n);return cf(t.localStore,e).then(r=>ot(t,r))}async function JE(n,e,t,r){const i=T(n),s=await function(a,c){const u=T(a),l=T(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Fn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Xn(i.remoteStore):t==="acknowledged"||t==="rejected"?(uc(i,e,r||null),cc(i,e),function(a,c){T(T(a).mutationQueue).xn(c)}(i.localStore,e)):R(),await ot(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ZE(n,e){const t=T(n);if(hc(t),dc(t),e===!0&&t.Fa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await il(t,r.toArray());t.Fa=!0,await Ko(t.remoteStore,!0);for(const s of i)ks(t.remoteStore,s)}else if(e===!1&&t.Fa!==!1){const r=[];let i=Promise.resolve();t.pa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Un(t,o),Bn(t.localStore,o,!0))),jr(t.remoteStore,o)}),await i,await il(t,r),function(o){const a=T(o);a.Sa.forEach((c,u)=>{jr(a.remoteStore,u)}),a.ba.gr(),a.Sa=new Map,a.wa=new H(v.comparator)}(t),t.Fa=!1,await Ko(t.remoteStore,!1)}}async function il(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r.pa.get(o);if(c&&c.length!==0){a=await Ln(r.localStore,Ce(c[0]));for(const u of c){const l=r.ga.get(u),h=await YE(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await af(r.localStore,o);a=await Ln(r.localStore,u),await ac(r,Af(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.c_(s),i}function Af(n){return dd(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function ev(n){return function(t){return T(T(t).persistence).ki()}(T(n).localStore)}async function tv(n,e,t,r){const i=T(n);if(i.Fa)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await cf(i.localStore,md(s[0])),a=ci.createSynthesizedRemoteEventForCurrentChange(e,t==="current",le.EMPTY_BYTE_STRING);await ot(i,o,a);break}case"rejected":await Bn(i.localStore,e,!0),Un(i,e,r);break;default:R()}}async function nv(n,e,t){const r=hc(n);if(r.Fa){for(const i of e){if(r.pa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await af(r.localStore,i),o=await Ln(r.localStore,s);await ac(r,Af(s),o.targetId,!1,o.resumeToken),ks(r.remoteStore,o)}for(const i of t)r.pa.has(i)&&await Bn(r.localStore,i,!1).then(()=>{jr(r.remoteStore,i),Un(r,i)}).catch(xt)}}function hc(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jE.bind(null,e),e.fa.c_=NE.bind(null,e.eventManager),e.fa.xa=kE.bind(null,e.eventManager),e}function dc(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GE.bind(null,e),e}function rv(n,e,t){const r=T(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,y){const E=T(f),I=ae(y.createTime);return E.persistence.runTransaction("hasNewerBundle","readonly",S=>E.Ur.getBundleMetadata(S,y.id)).then(S=>!!S&&S.createTime.compareTo(I)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(yf(c));const u=new FE(c,s.localStore,o.serializer);let l=await o.Oa();for(;l;){const d=await u.na(l);d&&a._updateProgress(d),l=await o.Oa()}const h=await u.complete();return await ot(s,h.sa,void 0),await function(f,y){const E=T(f);return E.persistence.runTransaction("Save bundle","readwrite",I=>E.Ur.saveBundleMetadata(I,y))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(c){return je("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Wo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=li(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return nf(this.persistence,new tf,e.initialUser,this.serializer)}createPersistence(e){return new ef(Ns.Jr,this.serializer)}createSharedClientState(e){return new lf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rf extends Wo{constructor(e,t,r){super(),this.Na=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await dc(this.Na.syncEngine),await Xn(this.Na.remoteStore),await this.persistence.gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return nf(this.persistence,new tf,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new GI(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new Py(t,this.persistence);return new Sy(e.asyncQueue,r)}createPersistence(e){const t=Ha(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Wa(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,hf(),Oi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new lf}}class iv extends Rf{constructor(e,t){super(e,t,!1),this.Na=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Na.syncEngine;this.sharedClientState instanceof ho&&(this.sharedClientState.syncEngine={Xs:JE.bind(null,t),eo:tv.bind(null,t),no:nv.bind(null,t),ki:ev.bind(null,t),Zs:XE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.gi(async r=>{await ZE(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=hf();if(!ho.C(t))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ha(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ho(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class fc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WE.bind(null,this.syncEngine),await Ko(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DE}()}createDatastore(e){const t=li(e.databaseInfo.databaseId),r=function(s){return new pE(s)}(e.databaseInfo);return function(s,o,a,c){return new IE(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new vE(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>rl(this.syncEngine,t,0),function(){return Zu.C()?new Zu:new fE}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new BE(i,s,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=T(t);_("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Yn(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):oe("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t){this.ka=e,this.serializer=t,this.metadata=new fe,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const t=this.qa.decode(e),r=Number(t);isNaN(r)&&this.$a(`length string (${t}) is not valid number`);const i=await this.Ua(r);return new OE(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const t=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=T(i),a=Ur(o.serializer)+"/documents",c={documents:s.map(d=>$r(o.serializer,d))},u=await o.Fo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=bI(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());C(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=v.fromPath(r);this.mutations.push(new La(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=Ur(s.serializer)+"/documents",a={writes:i.map(c=>qr(s.serializer,c))};await s.bo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw R();t=P.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?J.exists(!1):J.updateTime(t):J.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return J.updateTime(t)}return J.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.Ho=new Ja(this.asyncQueue,"transaction_retry")}run(){this.za-=1,this.ja()}ja(){this.Ho.Qo(async()=>{const e=new ov(this.datastore),t=this.Ha(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ja(i)}))}).catch(r=>{this.Ja(r)})})}Ha(e){try{const t=this.updateFunction(e);return!ri(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ja(e){this.za>0&&this.Ya(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.ja(),Promise.resolve()))):this.deferred.reject(e)}Ya(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Pd(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=de.UNAUTHENTICATED,this.clientId=zh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zn(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fi(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ho(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mc(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>el(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>el(e.remoteStore,s)),n._onlineComponents=e}function bf(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function mc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!bf(t))throw t;je("Error using user provided cache. Falling back to memory cache: "+t),await Fi(n,new Wo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Fi(n,new Wo);return n._offlineComponents}async function Fs(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Ho(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Ho(n,new fc))),n._onlineComponents}function Sf(n){return mc(n).then(e=>e.persistence)}function gc(n){return mc(n).then(e=>e.localStore)}function Pf(n){return Fs(n).then(e=>e.remoteStore)}function pc(n){return Fs(n).then(e=>e.syncEngine)}function uv(n){return Fs(n).then(e=>e.datastore)}async function qn(n){const e=await Fs(n),t=e.eventManager;return t.onListen=$E.bind(null,e.syncEngine),t.onUnlisten=UE.bind(null,e.syncEngine),t}function lv(n){return n.asyncQueue.enqueue(async()=>{const e=await Sf(n),t=await Pf(n);return e.setNetworkEnabled(!0),function(i){const s=T(i);return s.F_.delete(0),hi(s)}(t)})}function hv(n){return n.asyncQueue.enqueue(async()=>{const e=await Sf(n),t=await Pf(n);return e.setNetworkEnabled(!1),async function(i){const s=T(i);s.F_.add(0),await Yn(s),s.O_.set("Offline")}(t)})}function dv(n,e){const t=new fe;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=T(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Zn(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await gc(n),e,t)),t.promise}function Cf(n,e,t={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Os({next:d=>{o.enqueueAndForget(()=>ic(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new oc(Qn(a.path),l,{includeMetadataChanges:!0,Z_:!0});return rc(s,h)}(await qn(n),n.asyncQueue,e,t,r)),r.promise}function fv(n,e){const t=new fe;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await ns(i,s,!0),c=new vf(s,a.Ps),u=c.ha(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Zn(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await gc(n),e,t)),t.promise}function Vf(n,e,t={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Os({next:d=>{o.enqueueAndForget(()=>ic(s,h)),d.fromCache&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new oc(a,l,{includeMetadataChanges:!0,Z_:!0});return rc(s,h)}(await qn(n),n.asyncQueue,e,t,r)),r.promise}function mv(n,e){const t=new Os(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).K_.add(s),s.next()}(await qn(n),t)),()=>{t.La(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).K_.delete(s)}(await qn(n),t))}}function gv(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?Vd().encode(o):o,function(l,h){return new sv(l,h)}(function(l,h){if(l instanceof Uint8Array)return sl(l,h);if(l instanceof ArrayBuffer)return sl(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,li(e));n.asyncQueue.enqueueAndForget(async()=>{rv(await pc(n),i,r)})}function pv(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Ur.getNamedQuery(o,i))}(await gc(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n,e,t){if(!t)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Df(n,e,t,r){if(e===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function al(n){if(!v.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cl(n){if(v.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function j(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ms(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Nf(n,e){if(e<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Df("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class di{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ul({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ul(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new py;switch(r.type){case"firstParty":return new Ey(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ol.get(t);r&&(_("ComponentProvider","Removing Datastore"),ol.delete(t),r.terminate())}(this),Promise.resolve()}}function _v(n,e,t,r={}){var i;const s=(n=j(n,di))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&je("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=de.MOCK_USER;else{a=Dg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new de(u)}n._authCredentials=new _y(new jh(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve=class kf{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kf(this.firestore,e,this._query)}},ee=class Of{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Of(this.firestore,e,this._key)}},pt=class Ff extends Ve{constructor(e,t,r){super(e,t,Qn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ee(this.firestore,null,new v(e))}withConverter(e){return new Ff(this.firestore,e,this._path)}};function Mf(n,e,...t){if(n=ue(n),_c("collection","path",e),n instanceof di){const r=q.fromString(e,...t);return cl(r),new pt(n,null,r)}{if(!(n instanceof ee||n instanceof pt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(q.fromString(e,...t));return cl(r),new pt(n.firestore,null,r)}}function yv(n,e){if(n=j(n,di),_c("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ve(n,null,function(r){return new it(q.emptyPath(),r)}(e))}function os(n,e,...t){if(n=ue(n),arguments.length===1&&(e=zh.V()),_c("doc","path",e),n instanceof di){const r=q.fromString(e,...t);return al(r),new ee(n,null,new v(r))}{if(!(n instanceof ee||n instanceof pt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(q.fromString(e,...t));return al(r),new ee(n.firestore,n instanceof pt?n.converter:null,new v(r))}}function Lf(n,e){return n=ue(n),e=ue(e),(n instanceof ee||n instanceof pt)&&(e instanceof ee||e instanceof pt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Bf(n,e){return n=ue(n),e=ue(e),n instanceof Ve&&e instanceof Ve&&n.firestore===e.firestore&&si(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Ja(this,"async_queue_retry"),this.ou=()=>{const t=Oi();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const e=Oi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const t=Oi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const t=new fe;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Dt(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const t=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw oe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=t,t}enqueueAfterDelay(e,t,r){this._u(),this.su.indexOf(e)>-1&&(t=0);const i=nc.createAndSchedule(this,e,t,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&R()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const t=this.tu.indexOf(e);this.tu.splice(t,1)}}function Yo(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Ev{constructor(){this._progressObserver={},this._taskCompletionResolver=new fe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=-1;let se=class extends di{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Iv}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$f(this),this._firestoreClient.terminate()}};function _e(n){return n._firestoreClient||$f(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function $f(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new Hy(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,xf(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new cv(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function wv(n,e){qf(n=j(n,se));const t=_e(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");je("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new fc;return Uf(t,i,new Rf(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Tv(n){qf(n=j(n,se));const e=_e(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");je("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new fc;return Uf(e,r,new iv(r,t.cacheSizeBytes))}function Uf(n,e,t){const r=new fe;return n.asyncQueue.enqueue(async()=>{try{await Fi(n,t),await Ho(n,e),r.resolve()}catch(i){const s=i;if(!bf(s))throw s;je("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function Av(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new fe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Ue.C())return Promise.resolve();const i=r+"main";await Ue.delete(i)}(Ha(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Rv(n){return function(t){const r=new fe;return t.asyncQueue.enqueueAndForget(async()=>KE(await pc(t),r)),r.promise}(_e(n=j(n,se)))}function bv(n){return lv(_e(n=j(n,se)))}function Sv(n){return hv(_e(n=j(n,se)))}function Pv(n,e){const t=_e(n=j(n,se)),r=new Ev;return gv(t,n._databaseId,e,r),r}function Cv(n,e){return pv(_e(n=j(n,se)),e).then(t=>t?new Ve(n,null,t.query):null)}function qf(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xe(le.fromBase64String(e))}catch(t){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xe(le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=/^__.*__$/;class xv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new st(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wn(e,this.data,t,this.fieldTransforms)}}class jf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new st(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class Bs{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Bs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return as(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(zf(this.Tu)&&Vv.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class Dv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||li(e)}wu(e,t,r,i=!1){return new Bs({Tu:e,methodName:t,yu:r,path:re.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hn(n){const e=n._freezeSettings(),t=li(n._databaseId);return new Dv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $s(n,e,t,r,i,s={}){const o=n.wu(s.merge||s.mergeFields?2:0,e,t,i);vc("Data must be an object, but it was:",o,r);const a=Qf(r,o);let c,u;if(s.merge)c=new Ne(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Xo(e,h,t);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Hf(l,d)||l.push(d)}c=new Ne(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new xv(new Ee(a),c,u)}class fi extends ln{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fi}}function Gf(n,e,t){return new Bs({Tu:3,yu:e.settings.yu,methodName:n._methodName,Ru:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class yc extends ln{_toFieldTransform(e){return new ai(e.path,new On)}isEqual(e){return e instanceof yc}}class Nv extends ln{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){const t=Gf(this,e,!0),r=this.Su.map(s=>dn(s,t)),i=new en(r);return new ai(e.path,i)}isEqual(e){return this===e}}class kv extends ln{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){const t=Gf(this,e,!0),r=this.Su.map(s=>dn(s,t)),i=new tn(r);return new ai(e.path,i)}isEqual(e){return this===e}}class Ov extends ln{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=new Fn(e.serializer,vd(e.serializer,this.bu));return new ai(e.path,t)}isEqual(e){return this===e}}function Ic(n,e,t,r){const i=n.wu(1,e,t);vc("Data must be an object, but it was:",i,r);const s=[],o=Ee.empty();un(r,(c,u)=>{const l=wc(e,c,t);u=ue(u);const h=i.mu(l);if(u instanceof fi)s.push(l);else{const d=dn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Ne(s);return new jf(o,a,i.fieldTransforms)}function Ec(n,e,t,r,i,s){const o=n.wu(1,e,t),a=[Xo(e,r,t)],c=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Xo(e,s[d])),c.push(s[d+1]);const u=[],l=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!Hf(u,a[d])){const f=a[d];let y=c[d];y=ue(y);const E=o.mu(f);if(y instanceof fi)u.push(f);else{const I=dn(y,E);I!=null&&(u.push(f),l.set(f,I))}}const h=new Ne(u);return new jf(l,h,o.fieldTransforms)}function Kf(n,e,t,r=!1){return dn(t,n.wu(r?4:3,e))}function dn(n,e){if(Wf(n=ue(n)))return vc("Unsupported field value:",e,n),Qf(n,e);if(n instanceof ln)return function(r,i){if(!zf(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=dn(a,i.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Z.fromDate(r);return{timestampValue:Mn(i.serializer,s)}}if(r instanceof Z){const s=new Z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mn(i.serializer,s)}}if(r instanceof Ls)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xe)return{bytesValue:Nd(i.serializer,r._byteString)};if(r instanceof ee){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ja(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Ms(r)}`)}(n,e)}function Qf(n,e){const t={};return td(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(r,i)=>{const s=dn(i,e.Au(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Wf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof Ls||n instanceof Xe||n instanceof ee||n instanceof ln)}function vc(n,e,t){if(!Wf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ms(t);throw r==="an object"?e.gu(n+" a custom object"):e.gu(n+" "+r)}}function Xo(n,e,t){if((e=ue(e))instanceof St)return e._internalPath;if(typeof e=="string")return wc(n,e);throw as("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fv=new RegExp("[~\\*/\\[\\]]");function wc(n,e,t){if(e.search(Fv)>=0)throw as(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new St(...e.split("."))._internalPath}catch{throw as(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function as(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new p(g.INVALID_ARGUMENT,a+n+c)}function Hf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Us("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mv extends zr{data(){return super.data()}}function Us(n,e){return typeof e=="string"?wc(n,e):e instanceof St?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tc{}class mi extends Tc{}function lt(n,e,...t){let r=[];e instanceof Tc&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof Ac).length,a=s.filter(c=>c instanceof qs).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class qs extends mi{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new qs(e,t,r)}_apply(e){const t=this._parse(e);return Jf(e._query,t),new Ve(e.firestore,e.converter,Lo(e._query,t))}_parse(e){const t=hn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){hl(h,l);const f=[];for(const y of h)f.push(ll(c,s,y));d={arrayValue:{values:f}}}else d=ll(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||hl(h,l),d=Kf(a,o,h,l==="in"||l==="not-in");return B.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Lv(n,e,t){const r=e,i=Us("where",n);return qs._create(i,r,t)}class Ac extends Tc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ac(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:K.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Jf(o,c),o=Lo(o,c)}(e._query,t),new Ve(e.firestore,e.converter,Lo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rc extends mi{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rc(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Sn(s,o);return function(u,l){if(Oa(u)===null){const h=Ps(u);h!==null&&Zf(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new Ve(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new it(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Bv(n,e="asc"){const t=e,r=Us("orderBy",n);return Rc._create(r,t)}class js extends mi{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new js(e,t,r)}_apply(e){return new Ve(e.firestore,e.converter,Ji(e._query,this._limit,this._limitType))}}function $v(n){return Nf("limit",n),js._create("limit",n,"F")}function Uv(n){return Nf("limitToLast",n),js._create("limitToLast",n,"L")}class zs extends mi{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new zs(e,t,r)}_apply(e){const t=Xf(e,this.type,this._docOrFields,this._inclusive);return new Ve(e.firestore,e.converter,function(i,s){return new it(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function qv(...n){return zs._create("startAt",n,!0)}function jv(...n){return zs._create("startAfter",n,!1)}class Gs extends mi{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Gs(e,t,r)}_apply(e){const t=Xf(e,this.type,this._docOrFields,this._inclusive);return new Ve(e.firestore,e.converter,function(i,s){return new it(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function zv(...n){return Gs._create("endBefore",n,!1)}function Gv(...n){return Gs._create("endAt",n,!0)}function Xf(n,e,t,r){if(t[0]=ue(t[0]),t[0]instanceof zr)return function(s,o,a,c,u){if(!c)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Pn(s))if(h.field.isKeyField())l.push(Jt(o,c.key));else{const d=c.data.field(h.field);if(Ss(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Rt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=hn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<l.length;y++){const E=l[y];if(d[y].field.isKeyField()){if(typeof E!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof E}`);if(!Fa(o)&&E.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${E}' contains a slash.`);const I=o.path.child(q.fromString(E));if(!v.isDocumentKey(I))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const S=new v(I);f.push(Jt(a,S))}else{const I=Kf(c,u,E);f.push(I)}}return new Rt(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function ll(n,e,t){if(typeof(t=ue(t))=="string"){if(t==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fa(e)&&t.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(q.fromString(t));if(!v.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jt(n,new v(r))}if(t instanceof ee)return Jt(n,t._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ms(t)}.`)}function hl(n,e){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jf(n,e){if(e.isInequality()){const r=Ps(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new p(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Oa(n);s!==null&&Zf(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Zf(n,e,t){if(!t.isEqual(e))throw new p(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class bc{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return un(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ls(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Na(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Mr(e));default:return null}}convertTimestamp(e){const t=vt(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=q.fromString(e);C(jd(r));const i=new Tt(r.get(1),r.get(3)),s=new v(r.popFirst(5));return i.isEqual(t)||oe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Kv extends bc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ee(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let rt=class extends zr{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Us("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},vr=class extends rt{data(e={}){return super.data(e)}},Pt=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Gt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new vr(this._firestore,this._userDataWriter,r.key,r,new Gt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new vr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gt(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new vr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gt(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Qv(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Qv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function em(n,e){return n instanceof rt&&e instanceof rt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Pt&&e instanceof Pt&&n._firestore===e._firestore&&Bf(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n){n=j(n,ee);const e=j(n.firestore,se);return Cf(_e(e),n._key).then(t=>Sc(e,n,t))}class fn extends bc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ee(this.firestore,null,t)}}function Hv(n){n=j(n,ee);const e=j(n.firestore,se),t=_e(e),r=new fn(e);return dv(t,n._key).then(i=>new rt(e,r,n._key,i,new Gt(i!==null&&i.hasLocalMutations,!0),n.converter))}function Yv(n){n=j(n,ee);const e=j(n.firestore,se);return Cf(_e(e),n._key,{source:"server"}).then(t=>Sc(e,n,t))}function Xv(n){n=j(n,Ve);const e=j(n.firestore,se),t=_e(e),r=new fn(e);return Yf(n._query),Vf(t,n._query).then(i=>new Pt(e,r,n,i))}function Jv(n){n=j(n,Ve);const e=j(n.firestore,se),t=_e(e),r=new fn(e);return fv(t,n._query).then(i=>new Pt(e,r,n,i))}function Zv(n){n=j(n,Ve);const e=j(n.firestore,se),t=_e(e),r=new fn(e);return Vf(t,n._query,{source:"server"}).then(i=>new Pt(e,r,n,i))}function dl(n,e,t){n=j(n,ee);const r=j(n.firestore,se),i=Ks(n.converter,e,t);return gi(r,[$s(hn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,J.none())])}function fl(n,e,t,...r){n=j(n,ee);const i=j(n.firestore,se),s=hn(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof St?Ec(s,"updateDoc",n._key,e,t,r):Ic(s,"updateDoc",n._key,e),gi(i,[o.toMutation(n._key,J.exists(!0))])}function ew(n){return gi(j(n.firestore,se),[new Hn(n._key,J.none())])}function tw(n,e){const t=j(n.firestore,se),r=os(n),i=Ks(n.converter,e);return gi(t,[$s(hn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,J.exists(!1))]).then(()=>r)}function tm(n,...e){var t,r,i;n=ue(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yo(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Yo(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof ee)u=j(n.firestore,se),l=Qn(n._key.path),c={next:h=>{e[o]&&e[o](Sc(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=j(n,Ve);u=j(h.firestore,se),l=h._query;const d=new fn(u);c={next:f=>{e[o]&&e[o](new Pt(u,d,h,f))},error:e[o+1],complete:e[o+2]},Yf(n._query)}return function(d,f,y,E){const I=new Os(E),S=new oc(f,I,y);return d.asyncQueue.enqueueAndForget(async()=>rc(await qn(d),S)),()=>{I.La(),d.asyncQueue.enqueueAndForget(async()=>ic(await qn(d),S))}}(_e(u),l,a,c)}function nw(n,e){return mv(_e(n=j(n,se)),Yo(e)?e:{next:e})}function gi(n,e){return function(r,i){const s=new fe;return r.asyncQueue.enqueueAndForget(async()=>qE(await pc(r),i,s)),s.promise}(_e(n),e)}function Sc(n,e,t){const r=t.docs.get(e._key),i=new fn(n);return new rt(n,i,e._key,r,new Gt(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iw=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=hn(e)}set(e,t,r){this._verifyNotCommitted();const i=dt(e,this._firestore),s=Ks(i.converter,t,r),o=$s(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,J.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=dt(e,this._firestore);let o;return o=typeof(t=ue(t))=="string"||t instanceof St?Ec(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ic(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,J.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=dt(e,this._firestore);return this._mutations=this._mutations.concat(new Hn(t._key,J.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function dt(n,e){if((n=ue(n)).firestore!==e)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sw=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=hn(t)}get(t){const r=dt(t,this._firestore),i=new Kv(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return R();const o=s[0];if(o.isFoundDocument())return new zr(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new zr(this._firestore,i,r._key,null,r.converter);throw R()})}set(t,r,i){const s=dt(t,this._firestore),o=Ks(s.converter,r,i),a=$s(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=dt(t,this._firestore);let a;return a=typeof(r=ue(r))=="string"||r instanceof St?Ec(this._dataReader,"Transaction.update",o._key,r,i,s):Ic(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=dt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=dt(e,this._firestore),r=new fn(this._firestore);return super.get(e).then(i=>new rt(this._firestore,r,t._key,i._document,new Gt(!1,!1),t.converter))}};function ow(n,e,t){n=j(n,se);const r=Object.assign(Object.assign({},rw),t);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new fe;return s.asyncQueue.enqueueAndForget(async()=>{const u=await uv(s);new av(s.asyncQueue,u,a,o,c).run()}),c.promise}(_e(n),i=>e(new sw(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return new fi("deleteField")}function cw(){return new yc("serverTimestamp")}function uw(...n){return new Nv("arrayUnion",n)}function lw(...n){return new kv("arrayRemove",n)}function hw(n){return new Ov("increment",n)}(function(e,t=!0){(function(i){Kn=i})(oa),Vn(new Ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new se(new yy(r.getProvider("auth-internal")),new wy(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tt(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gt(au,"4.1.3",e),gt(au,"4.1.3","esm2017")})();const dw="@firebase/firestore-compat",fw="0.3.17";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new p("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){if(typeof Uint8Array>"u")throw new p("unimplemented","Uint8Arrays are not available in this environment.")}function gl(){if(!Qy())throw new p("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Gr{constructor(e){this._delegate=e}static fromBase64String(e){return gl(),new Gr(Xe.fromBase64String(e))}static fromUint8Array(e){return ml(),new Gr(Xe.fromUint8Array(e))}toBase64(){return gl(),this._delegate.toBase64()}toUint8Array(){return ml(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n){return mw(n,["next","error","complete"])}function mw(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{enableIndexedDbPersistence(e,t){return wv(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Tv(e._delegate)}clearIndexedDbPersistence(e){return Av(e._delegate)}}class nm{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Tt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&je("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){_v(this._delegate,e,t,r)}enableNetwork(){return bv(this._delegate)}disableNetwork(){return Sv(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Df("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Rv(this._delegate)}onSnapshotsInSync(e){return nw(this._delegate,e)}get app(){if(!this._appCompat)throw new p("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new jn(this,Mf(this._delegate,e))}catch(t){throw be(t,"collection()","Firestore.collection()")}}doc(e){try{return new Le(this,os(this._delegate,e))}catch(t){throw be(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Re(this,yv(this._delegate,e))}catch(t){throw be(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ow(this._delegate,t=>e(new rm(this,t)))}batch(){return _e(this._delegate),new im(new iw(this._delegate,e=>gi(this._delegate,e)))}loadBundle(e){return Pv(this._delegate,e)}namedQuery(e){return Cv(this._delegate,e).then(t=>t?new Re(this,t):null)}}class Qs extends bc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(new Xe(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Le.forKey(t,this.firestore,null)}}function pw(n){my(n)}class rm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Qs(e)}get(e){const t=Kt(e);return this._delegate.get(t).then(r=>new Kr(this._firestore,new rt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Kt(e);return r?(Pc("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Kt(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Kt(e);return this._delegate.delete(t),this}}class im{constructor(e){this._delegate=e}set(e,t,r){const i=Kt(e);return r?(Pc("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Kt(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Kt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class on{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new vr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Qr(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=on.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new on(e,new Qs(e),t),i.set(t,s)),s}}on.INSTANCES=new WeakMap;class Le{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Qs(e)}static forPath(e,t,r){if(e.length%2!==0)throw new p("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Le(t,new ee(t._delegate,r,new v(e)))}static forKey(e,t,r){return new Le(t,new ee(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new jn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new jn(this.firestore,Mf(this._delegate,e))}catch(t){throw be(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ue(e),e instanceof ee?Lf(this._delegate,e):!1}set(e,t){t=Pc("DocumentReference.set",t);try{return t?dl(this._delegate,e,t):dl(this._delegate,e)}catch(r){throw be(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?fl(this._delegate,e):fl(this._delegate,e,t,...r)}catch(i){throw be(i,"updateDoc()","DocumentReference.update()")}}delete(){return ew(this._delegate)}onSnapshot(...e){const t=sm(e),r=om(e,i=>new Kr(this.firestore,new rt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return tm(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Hv(this._delegate):(e==null?void 0:e.source)==="server"?t=Yv(this._delegate):t=Wv(this._delegate),t.then(r=>new Kr(this.firestore,new rt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Le(this.firestore,e?this._delegate.withConverter(on.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function be(n,e,t){return n.message=n.message.replace(e,t),n}function sm(n){for(const e of n)if(typeof e=="object"&&!Jo(e))return e;return{}}function om(n,e){var t,r;let i;return Jo(n[0])?i=n[0]:Jo(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Kr{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Le(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return em(this._delegate,e._delegate)}}class Qr extends Kr{data(e){const t=this._delegate.data(e);return gy(t!==void 0),t}}class Re{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Qs(e)}where(e,t,r){try{return new Re(this.firestore,lt(this._delegate,Lv(e,t,r)))}catch(i){throw be(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Re(this.firestore,lt(this._delegate,Bv(e,t)))}catch(r){throw be(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Re(this.firestore,lt(this._delegate,$v(e)))}catch(t){throw be(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Re(this.firestore,lt(this._delegate,Uv(e)))}catch(t){throw be(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Re(this.firestore,lt(this._delegate,qv(...e)))}catch(t){throw be(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Re(this.firestore,lt(this._delegate,jv(...e)))}catch(t){throw be(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Re(this.firestore,lt(this._delegate,zv(...e)))}catch(t){throw be(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Re(this.firestore,lt(this._delegate,Gv(...e)))}catch(t){throw be(t,"endAt()","Query.endAt()")}}isEqual(e){return Bf(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Jv(this._delegate):(e==null?void 0:e.source)==="server"?t=Zv(this._delegate):t=Xv(this._delegate),t.then(r=>new Zo(this.firestore,new Pt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=sm(e),r=om(e,i=>new Zo(this.firestore,new Pt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return tm(this._delegate,t,r)}withConverter(e){return new Re(this.firestore,e?this._delegate.withConverter(on.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class _w{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Qr(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Zo{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Re(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Qr(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new _w(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Qr(this._firestore,r))})}isEqual(e){return em(this._delegate,e._delegate)}}class jn extends Re{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Le(this.firestore,e):null}doc(e){try{return e===void 0?new Le(this.firestore,os(this._delegate)):new Le(this.firestore,os(this._delegate,e))}catch(t){throw be(t,"doc()","CollectionReference.doc()")}}add(e){return tw(this._delegate,e).then(t=>new Le(this.firestore,t))}isEqual(e){return Lf(this._delegate,e._delegate)}withConverter(e){return new jn(this.firestore,e?this._delegate.withConverter(on.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Kt(n){return j(n,ee)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(...e){this._delegate=new St(...e)}static documentId(){return new Cc(re.keyField().canonicalString())}isEqual(e){return e=ue(e),e instanceof St?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._delegate=e}static serverTimestamp(){const e=cw();return e._methodName="FieldValue.serverTimestamp",new qt(e)}static delete(){const e=aw();return e._methodName="FieldValue.delete",new qt(e)}static arrayUnion(...e){const t=uw(...e);return t._methodName="FieldValue.arrayUnion",new qt(t)}static arrayRemove(...e){const t=lw(...e);return t._methodName="FieldValue.arrayRemove",new qt(t)}static increment(e){const t=hw(e);return t._methodName="FieldValue.increment",new qt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw={Firestore:nm,GeoPoint:Ls,Timestamp:Z,Blob:Gr,Transaction:rm,WriteBatch:im,DocumentReference:Le,DocumentSnapshot:Kr,Query:Re,QueryDocumentSnapshot:Qr,QuerySnapshot:Zo,CollectionReference:jn,FieldPath:Cc,FieldValue:qt,setLogLevel:pw,CACHE_SIZE_UNLIMITED:vv};function Iw(n,e){n.INTERNAL.registerComponent(new Ht("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},yw)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(n){Iw(n,(e,t)=>new nm(e,t,new gw)),n.registerVersion(dw,fw)}Ew(Rr);const vw={apiKey:"AIzaSyA3xtbCczmeDvErZfkvWwyuI_GuFl3TC4U",authDomain:"oh-my-receipt-75edb.firebaseapp.com",projectId:"oh-my-receipt-75edb",storageBucket:"oh-my-receipt-75edb.appspot.com",messagingSenderId:"281427518131",appId:"1:281427518131:web:55e0e2791cb250a50ec6c6",measurementId:"G-M4733BZ507"};Rr.apps.length||Rr.initializeApp(vw);const ww=Rr.firestore(),Tw=n=>{const[e,t]=b.useState({}),[r,i]=b.useState({}),[s,o]=b.useState(!1),a=()=>{vg.success({message:"Success",description:"Your message has been sent!"})},c=async l=>{if(l.preventDefault(),i(n(e)),Object.keys(n(e)).length===0)try{await ww.collection("contactFormSubmissions").add(e),t({}),o(!0)}catch(d){console.error("Error submitting form: ",d)}else console.log("Please fill in all required fields.")};return b.useEffect(()=>{Object.keys(r).length===0&&s&&(t(""),a())},[r,s]),{handleChange:l=>{l.persist(),t(h=>({...h,[l.target.name]:l.target.value})),i(h=>({...h,[l.target.name]:""}))},handleSubmit:c,values:e,errors:r}};function Aw(n){const e={};return n.name||(e.name="Name is required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email address is required",n.message||(e.message="Message is required"),e}const Rw=Be("p")`
  margin-top: 1.5rem;
`,bw=Be("div")`
  position: relative;
  max-width: 700px;
`,Sw=Be("div")`
  border-radius: 3rem;
  max-width: 400px;
`,Pw=({title:n,content:e})=>z.jsxs(bw,{children:[z.jsx("h6",{children:n}),z.jsx(Sw,{children:z.jsx(Rw,{children:e})})]}),Cw=Be("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,Vw=Be("input")`
  font-size: 0.875rem;
`,xw=Be("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,Dw=Be("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,am=Be("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,pl=({name:n,placeholder:e,onChange:t})=>z.jsxs(Cw,{children:[z.jsx(am,{htmlFor:n,children:n}),z.jsx(Vw,{placeholder:e,name:n,id:n,onChange:t})]}),Nw=({name:n,placeholder:e,onChange:t})=>z.jsxs(xw,{children:[z.jsx(am,{htmlFor:n,children:n}),z.jsx(Dw,{placeholder:e,id:n,name:n,onChange:t})]}),kw=Be("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,Ow=Be("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,Fw=Be("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,Mw=Be("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,Zw=({title:n,content:e,id:t})=>{const{values:r,errors:i,handleChange:s,handleSubmit:o}=Tw(Aw),a=({type:c})=>{const u=i[c];return z.jsx(Sm,{direction:"left",children:z.jsx(Fw,{children:u})})};return z.jsx(kw,{id:t,children:z.jsxs(Rm,{justify:"space-between",align:"middle",children:[z.jsx(er,{lg:12,md:11,sm:24,xs:24,children:z.jsx(xc,{direction:"left",children:z.jsx(Pw,{title:n,content:e})})}),z.jsx(er,{lg:12,md:12,sm:24,xs:24,children:z.jsx(xc,{direction:"right",children:z.jsxs(Ow,{autoComplete:"off",onSubmit:o,children:[z.jsxs(er,{span:24,children:[z.jsx(pl,{type:"text",name:"name",placeholder:"Your Name",value:r.name||"",onChange:s}),z.jsx(a,{type:"name"})]}),z.jsxs(er,{span:24,children:[z.jsx(pl,{type:"text",name:"email",placeholder:"Your Email",value:r.email||"",onChange:s}),z.jsx(a,{type:"email"})]}),z.jsxs(er,{span:24,children:[z.jsx(Nw,{placeholder:"Your Message",value:r.message||"",name:"message",onChange:s}),z.jsx(a,{type:"message"})]}),z.jsx(Mw,{children:z.jsx(bm,{name:"submit",children:"Submit"})})]})})})]})})};export{Zw as default};
