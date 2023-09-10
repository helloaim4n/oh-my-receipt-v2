import{s as t,j as e,R as r,C as s}from"./index-0320931c.js";import{$ as p}from"./module-0d6883c0.js";const x=t("section")`
  position: relative;
  padding: 3rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,l=t("p")`
  padding: 1.5rem 0 2rem 0;
`,m=t("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 0;
  }
`,h=t("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 0;
  text-align: center;
`,j=t("h6")`
  font-size: 20px;
  line-height: 19px;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,f=t("p")`
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  margin-bottom: 60px;
  justify-content: center;

  @media only screen and (max-width: 575px) {
    font-size: 17px;
    padding: 0;
  }
`,u=({title:o,content:a,section:n,id:d})=>e.jsx(x,{children:e.jsx(p,{direction:"right",children:e.jsxs(r,{justify:"center",align:"middle",id:d,children:[e.jsx(m,{children:e.jsxs(s,{children:[e.jsx("h6",{children:o}),e.jsx(l,{children:a})]})}),e.jsx(h,{children:e.jsx(r,{justify:"center",children:typeof n=="object"&&n.map((i,c)=>e.jsxs(s,{span:11,children:[e.jsx(j,{children:i.title}),e.jsx(f,{children:i.content})]},c))})})]})})});export{u as default};
