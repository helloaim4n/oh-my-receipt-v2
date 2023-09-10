import{s as n,j as e,R as s,C as r,y as p}from"./index-0320931c.js";import{b as o}from"./module-0d6883c0.js";const l=n("section")`
  position: relative;
  padding: 10rem 0 8rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 0;
  }
`,m=n("p")`
  padding: 1.5rem 0 2rem 0;
`,h=n("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 0;
  }
`,g=n("div")`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  padding: 0;
`,f=n("h6")`
  font-size: 20px;
  line-height: 19px;
  padding: 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,j=n("p")`
  font-size: 20px;
  margin: 10px;
  padding: 0.5rem 0;
  margin-bottom: 60px;
  justify-content: center;

  @media only screen and (max-width: 575px) {
    font-size: 17px;
    padding: 0;
    text-align: center;
    text-justify: inter-word;`,y=({title:t,content:d,section:i,id:c})=>e.jsx(l,{children:e.jsx(o,{direction:"left",children:e.jsxs(s,{justify:"center",align:"middle",id:c,children:[e.jsx(h,{children:e.jsxs(r,{lg:24,children:[e.jsx("h6",{children:t}),e.jsx(m,{children:d})]})}),e.jsx(g,{children:e.jsx(s,{justify:"center",children:typeof i=="object"&&i.map((a,x)=>e.jsxs(r,{span:11,children:[e.jsx(f,{children:a.title}),e.jsx(j,{children:a.content})]},x))})})]})})}),u=n("section")`
  position: relative;
  padding: 7.5rem 0 3rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0 6rem;
  }
`,w=n("p")`
  margin: 0.75em 0 0.75rem;
`,v=n("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;n("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 2rem 0;
  text-align: center;
`;n("h6")`
  font-size: 20px;
  line-height: 19px;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;n("p")`
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  margin-bottom: 60px;
  justify-content: center;

  @media only screen and (max-width: 575px) {
    font-size: 17px;
    padding: 0;
  }
`;const C=({title:t,content:d,icon:i})=>e.jsx(u,{children:e.jsx(o,{direction:"right",children:e.jsxs(s,{justify:"center",align:"middle",children:[e.jsx(r,{lg:11,md:11,sm:12,xs:24,children:e.jsxs(v,{children:[e.jsx("h6",{children:t}),e.jsx(w,{children:d})]})}),e.jsx(r,{lg:11,md:11,sm:12,xs:24,children:e.jsx(p,{src:i,width:"100%",height:"100%"})})]})})}),R=t=>t.type==="left"?e.jsx(y,{...t}):t.type==="right"?e.jsx(C,{...t}):null;export{R as default};
