import{a as v,u as P,g as S,j as t,m as o,M as R,d as T}from"./index-BBkS68sv.js";import{s as l}from"./index.module-DFRKY25f.js";import{L as $,a as E}from"./LockOutlined-Ds8QM0LA.js";import{D}from"./DeleteOutlined-B6bglta-.js";import{U as I}from"./UserOutlined-BbJ58T22.js";const u=window.antd.Card,O=window.antd.Col,_=window.antd.Dropdown,z=window.antd.Layout,N=window.antd.Row,A=window.antd.Pagination,M=window.antd.Spin,B=window.antd.Empty,F=window.antd.Button,U=window.React.useEffect,a=window.React.useState;function K(){const[d,r]=a(!0),[h,w]=a([]),[i,x]=a(-1),[g,m]=a(0),[p,f]=a(1);v(n=>n.userInfo.userId);const j=P();U(()=>{c()},[]);const c=async(n=p)=>{try{r(!0);const e=await S({pageNum:n,pageSize:12});r(!1),w((e==null?void 0:e.list)||[]),m((e==null?void 0:e.total)||0)}catch{r(!1)}},y=(n,e)=>{if(!e)return o.warning("该项目未授权，无法删除"),!1;R.confirm({title:"确认",content:"确认删除该项目吗？",okText:"确认",cancelText:"取消",onOk:async()=>{await T({id:n}),o.success("删除成功"),c()}})},k=[{key:"stg",label:t.jsx("a",{href:`http://admin.marsview.cc/project/stg/${i}`,target:"_blank",children:"STG"})},{key:"pre",label:t.jsx("a",{href:`http://admin.marsview.cc/project/pre/${i}`,target:"_blank",children:"PRE"})},{key:"prod",label:t.jsx("a",{href:`http://admin.marsview.cc/project/prd/${i}`,target:"_blank",children:"PRD"})}],b=n=>{f(n),c(n)},C=async(n,e)=>{if(!e)return o.warning("该项目未授权，无法访问"),!1;j(`/project/${n}/config`)},L=(n,e)=>{if(!e)return o.warning("该项目未授权，无法访问");x(n)};return t.jsx(t.Fragment,{children:t.jsxs(z.Content,{className:l.project,children:[t.jsx(M,{spinning:d,size:"large",children:t.jsx(N,{gutter:[20,20],children:h.map((n,e)=>{const s=!!n.id;return t.jsx(O,{span:6,children:t.jsx(u,{hoverable:!0,style:{opacity:s?1:.6,background:s?"none":"url('/imgs/cross-bg.png')"},actions:[t.jsx(_,{menu:{items:s?k:[]},trigger:["click"],children:t.jsxs("div",{onClick:()=>L(n.id,s),children:[t.jsx($,{}),t.jsx("span",{className:l.gabLeft,children:"访问地址"})]})},"link"),t.jsxs("div",{onClick:()=>y(n.id,s),children:[t.jsx(D,{}),t.jsx("span",{className:l.gabLeft,children:"删除项目"})]})],children:t.jsx("div",{onClick:()=>C(n.id,s),children:t.jsx(u.Meta,{style:{cursor:"pointer"},avatar:t.jsx("img",{src:n.logo,style:{width:32}}),title:n.name,description:t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{position:"absolute",top:15,right:15},children:s?null:t.jsx(E,{})}),t.jsx("p",{style:{color:"rgba(0, 0, 0, 0.88)"},children:n.remark||"暂无描述"}),t.jsxs("p",{style:{marginTop:10},children:[t.jsx(I,{style:{fontSize:14,marginRight:5}}),n.user_name,"  ",n.updated_at]})]})})})})},n.id||e)})})}),g>0?t.jsx(A,{style:{textAlign:"right",marginTop:16},total:g,current:p,pageSize:12,showTotal:n=>`总共 ${n} 条`,onChange:b}):!d&&t.jsx(B,{style:{marginTop:100},children:t.jsx(F,{type:"primary",onClick:()=>j("/project/0/config"),children:"创建项目"})})]})})}export{K as default};
