import{j as e}from"./jsx-runtime-2abd473f.js";import{M as t}from"./index-da24c8f6.js";import{u as o}from"./index-a0644a7c.js";import"./index-565f84a4.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2a557a43.js";import"../sb-preview/runtime.js";import"./chunk-DMDGLPPZ-b3b44151.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function r(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"hooks/useContract"}),`
`,e.jsx(n.h1,{id:"usecontract",children:"useContract"}),`
`,e.jsx(n.p,{children:"Hook for executing read methods from a contract."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { useContract } from '@nejcm/polkadot-hooks';

const YourComponent = () => {
  const response = useContract({
    abi: ERC20Abi,
    address: '0xC1Af7s15a3g439frw83ab111jzvl42po818se561',
    owner: '0xa1dss15a3g42ggfrwa3as1d1szgvl42po81wese12',
    method: 'allowance',
    args: ['0xd1af7sd3a3gs32ffw83abs11jzal425of86se7580'],
    staleTime: 12000,
    onSuccess: (response) => console.log(response),
  });
};
`})}),`
`,e.jsx(n.h2,{id:"arguments",children:"Arguments"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type Args = {
  abi: AbiDefinition;
  address?: string;
  owner?: string;
  method: string;
  args?: any[];
  options?: ContractOptions | ((api: ApiPromise) => ContractOptions);
};
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`the object also contains
`,e.jsx(n.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useQuery",target:"_blank",rel:"nofollow noopener noreferrer",children:"useQuery options"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"response",children:"Response"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type Response = {
  enabled: boolean;
} & UseQueryResult;
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`the object also contains
`,e.jsx(n.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useQuery",target:"_blank",rel:"nofollow noopener noreferrer",children:"useQuery result/return"})]}),`
`]})]})}function g(s={}){const{wrapper:n}=Object.assign({},o(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{g as default};
//# sourceMappingURL=useContract-efbb5e17.js.map
