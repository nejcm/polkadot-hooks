import{j as e}from"./jsx-runtime-2abd473f.js";import{M as t}from"./index-da24c8f6.js";import{u as r}from"./index-a0644a7c.js";import"./index-565f84a4.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2a557a43.js";import"../sb-preview/runtime.js";import"./chunk-DMDGLPPZ-b3b44151.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function s(o){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Getting started"}),`
`,e.jsx(n.h1,{id:"setup",children:"Setup"}),`
`,e.jsx(n.p,{children:`Wrap your app with a provider and supply the necessary values. While these
values are undefined (user does not have the wallet connected) some of the hooks
will be disabled.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"api: polkadot ApiPromise"}),`
`,e.jsx(n.li,{children:"signer: wallet signer"}),`
`,e.jsx(n.li,{children:"address: wallet address"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { HooksGlobalProvider } from '@nejcm/polkadot-hooks';

const YourComponent = ({ children }) => {
  return (
    <HooksGlobalContext.Provider api={api} signer={signer} address={address}>
      {children}
    </HooksGlobalContext.Provider>
  );
};
`})})]})}function x(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(s,o)})):s(o)}export{x as default};
//# sourceMappingURL=getting-started-79b11b61.js.map
