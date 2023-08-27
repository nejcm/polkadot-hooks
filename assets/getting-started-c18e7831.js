import{j as e}from"./jsx-runtime-052f57b7.js";import{M as t}from"./index-93649dd9.js";import{u as s}from"./index-a74ed5fa.js";import"./index-e8534147.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a896cff7.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function r(o){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Getting started"}),`
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
`})})]})}function g(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{g as default};
//# sourceMappingURL=getting-started-c18e7831.js.map
