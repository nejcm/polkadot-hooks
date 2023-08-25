import{M as d}from"./index-79e2f63e.js";import{r as f}from"./index-e8534147.js";import{u as l}from"./index-a74ed5fa.js";import"./iframe-aef5a639.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=f,h=Symbol.for("react.element"),y=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,k=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,a){var r,n={},p=null,c=null;a!==void 0&&(p=""+a),t.key!==void 0&&(p=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)j.call(t,r)&&!O.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:h,type:e,key:p,ref:c,props:n,_owner:k.current}}i.Fragment=y;i.jsx=_;i.jsxs=_;u.exports=i;var o=u.exports;function m(e){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p"},l(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{title:"Intro"}),`
`,o.jsx(t.h1,{id:"polkadot-hooks",children:"Polkadot hooks"}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsx(t.p,{children:"⚠️ This library is still under construction. Use with caution"}),`
`]})]})}function b(e={}){const{wrapper:t}=Object.assign({},l(),e.components);return t?o.jsx(t,{...e,children:o.jsx(m,{...e})}):m(e)}const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const s={title:"Intro",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:b};const P=["__page"];export{P as __namedExportsOrder,E as __page,s as default};
//# sourceMappingURL=Intro.stories-e2931959.js.map
