import{j as n}from"./jsx-runtime-2abd473f.js";import{M as o}from"./index-da24c8f6.js";import{u as t}from"./index-a0644a7c.js";import"./index-565f84a4.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2a557a43.js";import"../sb-preview/runtime.js";import"./chunk-DMDGLPPZ-b3b44151.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function s(r){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},t(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"hooks/useBalance"}),`
`,n.jsx(e.h1,{id:"usebalance",children:"useBalance"}),`
`,n.jsx(e.p,{children:"Hook for fetching the balance information for different account, contracts, ..."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { useBalance } from '@nejcm/polkadot-hooks';

const YourComponent = () => {
  const response = useBalance(
    {
      contract: '0xA0Cf7s8583g4391286ab534jEga46ff838n4256a',
      account: '0xC1Af7s15a3g439frw83ab111jzvl42po818se561',
    },
    {
      staleTime: 12000,
    },
  );
};
`})}),`
`,n.jsx(e.h2,{id:"arguments",children:"Arguments"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"first argument"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`{
  /** token or contract address */
  contract?: string;
  /** account address */
  account?: string;
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`second argument is
`,n.jsx(e.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useQuery",target:"_blank",rel:"nofollow noopener noreferrer",children:"useQuery options"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"response",children:"Response"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Response = {
  balance?: number;
  formatted?: string;
  enabled: boolean;
};
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`the object also contains
`,n.jsx(e.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useQuery",target:"_blank",rel:"nofollow noopener noreferrer",children:"useQuery result/return"})]}),`
`]})]})}function x(r={}){const{wrapper:e}=Object.assign({},t(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(s,r)})):s(r)}export{x as default};
//# sourceMappingURL=useBalance-5b360d08.js.map
