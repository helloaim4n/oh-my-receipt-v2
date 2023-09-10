import{s as t,j as e,S as o,R as i,C as r,a}from"./index-0320931c.js";const s="Terms & Conditions",c=[`Introduction:
Welcome to Oh My Receipt! (the App). By using the App, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
`,`User Accounts:
To access certain features of the App, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We reserve the right to suspend or terminate accounts that violate these Terms and Conditions or engage in unauthorized or harmful activities.
`,`Use of the Mobile App:
We reserve the right to suspend or terminate accounts that violate these Terms and Conditions or engage in unauthorized or harmful activities.
`,`Content:
You retain ownership of any content you submit to the App. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display that content in connection with the App.
You agree not to submit any content that is offensive, infringing, or violates the rights of others.
`,`Privacy:
We collect and use your personal information in accordance with our Privacy Policy. By using the App, you consent to our collection and use of your information as described in the Privacy Policy.
`,`Intellectual Property:
The App and its content are protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive license to use the App for its intended purpose.
`,`User Responsibilities:
You agree to provide accurate and truthful information when using the App. You also agree to comply with all applicable laws and regulations.
`,`Disclaimers:
The App is provided on an as is basis, without warranties of any kind, either express or implied. We do not warrant that the App will be error-free, accurate, or suitable for your intended use. We are not liable for any damages or losses arising from your use of the App.
`,`Termination:
We reserve the right to terminate your access to the App if you violate these Terms and Conditions or engage in unauthorized or harmful activities.
`,`Contact Information:
If you have any questions or concerns about these Terms and Conditions, please contact us at Contact section displayed at the bottom of page.
`],n={title:s,text:c},d=t.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0 3rem;
  text-align: center;

  // Responsive design for screens with max-width 1024px
  @media screen and (max-width: 1024px) {
    padding: 2rem 0 3rem;
  }
`,l=t.p`
  font-family: 'Handjet', cursive;
  padding: 0.75rem 0 0.75rem;
  white-space: pre-line;
  text-align: justify;
  text-justify: inter-word;
`,u=t.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto; 
  background-color: #f5f5f5;
  padding: 2rem;


  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 1;
  }
`,h=()=>e.jsx(o,{children:e.jsx(d,{children:e.jsx(i,{justify:"center",align:"middle",children:e.jsx(u,{children:e.jsxs(r,{lg:24,md:24,sm:24,xs:24,children:[e.jsx("h6",{children:n.title}),e.jsx(l,{children:n.text.join(`
`)}),e.jsx("a",{href:"/",children:e.jsx(a,{type:"primary",size:"large",children:"Back to Home"})})]})})})})});export{h as default};
