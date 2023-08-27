import{j as n}from"./jsx-runtime-052f57b7.js";import{M as r}from"./index-93649dd9.js";import{u as o}from"./index-a74ed5fa.js";import"./index-e8534147.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a896cff7.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function s(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"hooks/useContractWrite"}),`
`,n.jsx(e.h1,{id:"usecontractwrite",children:"useContractWrite"}),`
`,n.jsx(e.p,{children:"Hook for executing write methods from a contract."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { useContractWrite } from '@nejcm/polkadot-hooks';

const YourComponent = () => {
  const response = useContractWrite({
    abi: RouterAbi,
    address: '0xC1Af7s15a3g439frw83ab111jzvl42po818se561',
    method: 'deposit',
    args: ['0xd1af7sd3a3gs32ffw83abs11jzal425of86se7580', '000030000000000000'],
    staleTime: 12000,
  });
};
`})}),`
`,n.jsx(e.h2,{id:"arguments",children:"Arguments"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Args = {
  abi: AbiDefinition;
  address?: string;
  method: string;
  args?: any[];
  options?: ContractOptions | ((api: ApiPromise) => ContractOptions);
};
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`the object also contains
`,n.jsx(e.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useMutation",target:"_blank",rel:"nofollow noopener noreferrer",children:"useMutation options"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"response",children:"Response"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Response = {
  enabled: boolean;
  data: TransactionsStatus | undefined;
  isReady: boolean;
};

type TransactionsStatus = {
  hex?: string;
  status?: ExtrinsicStatus['type'] | 'Pending';
};
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`the object also contains
`,n.jsx(e.a,{href:"https://tanstack.com/query/v5/docs/react/reference/useMutation",target:"_blank",rel:"nofollow noopener noreferrer",children:"useMutation result/return"})]}),`
`]})]})}function g(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(s,t)})):s(t)}export{g as default};
//# sourceMappingURL=useContractWrite-c1e41626.js.map
