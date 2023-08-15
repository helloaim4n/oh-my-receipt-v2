import{s as t,j as e,v as l,w as r,S as x,B as p}from"./index-c93b1e9e.js";import{b as h}from"./module-d1245ef6.js";const j=t("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,g=t("p")`
  margin: 1.5rem 0 2rem 0;
`,f=t("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,w=t("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,u=t("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,y=t("p")`
  font-size: 13px;
`,b=({icon:n,title:c,content:d,section:o,id:a})=>e.jsx(j,{children:e.jsx(h,{direction:"left",children:e.jsxs(l,{justify:"space-between",align:"middle",id:a,children:[e.jsx(r,{lg:11,md:11,sm:12,xs:24,children:e.jsx(x,{src:n,width:"100%",height:"100%"})}),e.jsx(r,{lg:11,md:11,sm:11,xs:24,children:e.jsxs(f,{children:[e.jsx("h6",{children:c}),e.jsx(g,{children:d}),e.jsx(w,{children:e.jsx(l,{justify:"space-between",children:typeof o=="object"&&o.map((s,i)=>e.jsxs(r,{span:11,children:[e.jsx(x,{src:s.icon,width:"60px",height:"60px"}),e.jsx(u,{children:s.title}),e.jsx(y,{children:s.content})]},i))})})]})})]})})}),v=t("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`,C=t("p")`
  margin: 1.5rem 0 2rem 0;
`,B=t("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`,k=t("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,S=({title:n,content:c,button:d,icon:o,id:a})=>{const s=i=>{document.getElementById(i).scrollIntoView({behavior:"smooth"})};return e.jsx(v,{children:e.jsx(h,{direction:"right",children:e.jsxs(l,{justify:"space-between",align:"middle",id:a,children:[e.jsx(r,{lg:11,md:11,sm:11,xs:24,children:e.jsxs(B,{children:[e.jsx("h6",{children:n}),e.jsx(C,{children:c}),e.jsx(k,{children:typeof d=="object"&&d.map((i,m)=>e.jsx(p,{color:i.color,fixedWidth:!0,onClick:()=>s("about"),children:i.title},m))})]})}),e.jsx(r,{lg:11,md:11,sm:12,xs:24,children:e.jsx(x,{src:o,width:"100%",height:"100%"})})]})})})},R=n=>n.type==="left"?e.jsx(b,{...n}):n.type==="right"?e.jsx(S,{...n}):null;export{R as default};
