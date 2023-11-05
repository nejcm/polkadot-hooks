import{j as n}from"./jsx-runtime-2abd473f.js";import{M as t}from"./index-da24c8f6.js";import{u as r}from"./index-a0644a7c.js";import"./index-565f84a4.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2a557a43.js";import"../sb-preview/runtime.js";import"./chunk-DMDGLPPZ-b3b44151.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function s(o){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},r(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"hooks/useTokenApproval"}),`
`,n.jsx(e.h1,{id:"usetokenapproval",children:"useTokenApproval"}),`
`,n.jsx(e.p,{children:"Hook for managing token allowance and approval."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { useTokenApproval } from '@nejcm/polkadot-hooks';

const YourComponent = () => {
  const response = useTokenApproval({
    abi: RouterAbi,
    spender: '0xd1af7sd3a3gs32ffw83abs11jzal425of86se7580',
    token: '0xC1Af7s15a3g439frw83ab111jzvl42po818se561',
    amount: 1000,
    approveMax: false,
    onSuccess: () => console.log('SUCCESS'),
  });
};
`})}),`
`,n.jsx(e.h2,{id:"arguments",children:"Arguments"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Args = {
  spender?: string;
  token?: string;
  amount?: number;
  approveMax?: boolean;
  enabled?: boolean;
  onError?: (err: any) => void;
  onSuccess?: UseContractWriteProps['onSuccess'];
};
`})}),`
`,n.jsx(e.h2,{id:"response",children:"Response"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Response = [ApprovalState, UseContractWriteResponse];

enum ApprovalState {
  UNKNOWN,
  LOADING,
  PENDING,
  NOT_APPROVED,
  APPROVED,
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"?path=/docs/hooks-usecontractwrite--docs",children:"UseContractWriteResponse"})}),`
`]})]})}function x(o={}){const{wrapper:e}=Object.assign({},r(),o.components);return e?n.jsx(e,Object.assign({},o,{children:n.jsx(s,o)})):s(o)}export{x as default};
//# sourceMappingURL=useTokenApproval-db2c052c.js.map
