import{j as e}from"./jsx-runtime-052f57b7.js";import{M as t}from"./index-93649dd9.js";import{u as o}from"./index-a74ed5fa.js";import"./index-e8534147.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a896cff7.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function r(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"hooks/useAccountBalance"}),`
`,e.jsx(n.h1,{id:"useaccountbalance",children:"useAccountBalance"}),`
`,e.jsx(n.p,{children:"Hook for fetching the account balance information."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { useAccountBalance } from '@nejcm/polkadot-hooks';

const YourComponent = () => {
  const response = useAccountBalance(
    '0xA0Cf7s8583g4391286ab534jEga46ff838n4256a',
    {
      staleTime: 12000,
    },
  );
};
`})}),`
`,e.jsx(n.h2,{id:"arguments",children:"Arguments"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"first argument is the account address"}),`
`,e.jsxs(n.li,{children:[`second argument is
`,e.jsx(n.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useQuery",target:"_blank",rel:"nofollow noopener noreferrer",children:"useQuery options"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"response",children:"Response"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type Response = {
  balance?: number;
  formatted?: string;
  enabled: boolean;
};
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`the object also contains
`,e.jsx(n.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useQuery",target:"_blank",rel:"nofollow noopener noreferrer",children:"useQuery result/return"})]}),`
`]})]})}function f(s={}){const{wrapper:n}=Object.assign({},o(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{f as default};
//# sourceMappingURL=useAccountBalance-6f56edcb.js.map
