import{j as n}from"./jsx-runtime-052f57b7.js";import{M as t}from"./index-93649dd9.js";import{u as r}from"./index-a74ed5fa.js";import"./index-e8534147.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a896cff7.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(s){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},r(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"hooks/useTokenAllowance"}),`
`,n.jsx(e.h1,{id:"usetokenallowance",children:"useTokenAllowance"}),`
`,n.jsx(e.p,{children:"Hook for fetching token allowance."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { useTokenAllowance } from '@nejcm/polkadot-hooks';

const YourComponent = () => {
  const response = useTokenAllowance({
    abi: RouterAbi,
    token: '0xC1Af7s15a3g439frw83ab111jzvl42po818se561',
    spender: '0xd1af7sd3a3gs32ffw83abs11jzal425of86se7580',
    owner: '0xF7D3C3ABf8b9a1462689d927f13be7f656b2d9C3',
    staleTime: 12000,
  });
};
`})}),`
`,n.jsx(e.h2,{id:"arguments",children:"Arguments"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"first argument is"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Args = {
  token?: string;
  spender: string | undefined;
  owner: string | undefined;
};
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`second argument is
`,n.jsx(e.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useQuery",target:"_blank",rel:"nofollow noopener noreferrer",children:"useQuery options"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"response",children:"Response"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["response is equal to ",n.jsx(e.a,{href:"?path=/docs/hooks-usecontract--docs",children:"useContract"})]}),`
`]})]})}function f(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,s)})):o(s)}export{f as default};
//# sourceMappingURL=useTokenAllowance-20b2b625.js.map
