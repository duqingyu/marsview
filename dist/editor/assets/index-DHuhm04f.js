import{o as f,u as _,am as k,j as e,an as C,m as g,ao as R}from"./index-BBkS68sv.js";import{M as S}from"./ColorPicker-Dw8Os0Zn.js";import{M as F}from"./MemberSetting-Ch9IUWbG.js";import{a as w}from"./pageMember-Dpti6EYv.js";import{E as B,S as P,R as M}from"./SaveOutlined-BQ_jcTgK.js";const L="_form_1xzzv_1",z="_editBtn_1xzzv_8",b={form:L,editBtn:z},v=window.React.useEffect,p=window.React.useState,N=window.React.memo,O=window.React.useRef,s=window.antd.Form,x=window.antd.Input,h=window.antd.Button,I=window.antd.Space,E=window.antd.Image,a=window.antd.Radio,j=window.antd.Switch,G=window.antd.Tag,K=N(()=>{const{id:r}=f(),[d]=s.useForm(),[o,c]=p(!1),[l,i]=p("detail"),m=_();v(()=>{if(r){if(r==="0"){i("create");return}k(parseInt(r)).then(t=>{d.setFieldsValue(t)})}},[]);const u=async()=>{try{await d.validateFields();const t=d.getFieldsValue();c(!0),l==="create"?(await C(t),g.success("创建成功"),m("/projects")):(await R(t),g.success("更新成功")),c(!1),i("detail")}catch{c(!1)}},n={disabled:l==="detail",variant:l==="detail"?"borderless":"outlined"};return e.jsx(e.Fragment,{children:e.jsxs(s,{form:d,initialValues:{is_public:1,layout:1,menu_mode:"inline",menu_theme_color:"dark",system_theme_color:"#1677ff",breadcrumb:!0,tag:!0,footer:!1,logo:"https://marsview.cdn.bcebos.com/mars-logo.png"},labelCol:{span:4},wrapperCol:{span:12},className:b.form,size:"middle",onFinish:u,children:[e.jsx(s.Item,{label:"项目ID",name:"id",hidden:!0,children:e.jsx(x,{})}),e.jsx("h3",{children:"基础配置"}),e.jsx(s.Item,{label:"项目名称",name:"name",rules:[{required:!0,message:"请输入项目名称"}],children:e.jsx(x,{placeholder:"项目名称: OMS",...n})}),e.jsx(s.Item,{label:"项目描述",name:"remark",rules:[{required:!0,message:"请输入项目描述"}],children:e.jsx(x.TextArea,{autoSize:!0,placeholder:"请输入项目描述",maxLength:20,showCount:l!=="detail",...n})}),e.jsx(s.Item,{label:"LOGO",name:"logo",rules:[{required:!0,message:"请上传项目Logo"}],children:e.jsx(q,{})}),e.jsx("h3",{children:"系统配置"}),e.jsx(s.Item,{label:"系统布局",name:"layout",children:e.jsxs(a.Group,{...n,children:[e.jsx(a,{value:1,children:e.jsx("img",{style:{width:150},src:"/imgs/layout-1.png",alt:"左右布局"})}),e.jsx(a,{value:2,children:e.jsx("img",{style:{width:150},src:"/imgs/layout-2.png",alt:"上左右下布局"})})]})}),e.jsx(s.Item,{label:"菜单模式",name:"menu_mode",children:e.jsxs(a.Group,{...n,buttonStyle:"solid",children:[e.jsx(a.Button,{value:"vertical",children:"垂直"}),e.jsx(a.Button,{value:"inline",children:"内嵌"})]})}),e.jsx(s.Item,{label:"菜单主题",name:"menu_theme_color",children:e.jsxs(a.Group,{...n,children:[e.jsx(a,{value:"dark",children:"深色"}),e.jsx(a,{value:"light",children:"浅色"})]})}),e.jsx(s.Item,{label:"系统主题色",name:"system_theme_color",children:e.jsx(S,{})}),e.jsx(s.Item,{label:"面包屑",name:"breadcrumb",valuePropName:"checked",children:e.jsx(j,{...n})}),e.jsx(s.Item,{label:"多页签",name:"tag",valuePropName:"checked",children:e.jsx(j,{...n})}),e.jsx(s.Item,{label:"页脚",name:"footer",valuePropName:"checked",children:e.jsx(j,{...n})}),e.jsx("h3",{children:"权限配置"}),e.jsx(s.Item,{label:"访问权限",tooltip:"项目访问权限",extra:"公开项目所有人可访问；私有项目可通过RBAC分配菜单权限。",name:"is_public",rules:[{required:!0,message:"请输入项目描述"}],children:e.jsxs(a.Group,{...n,children:[e.jsx(a,{value:1,children:"公开"}),e.jsx(a,{value:2,children:"私有"})]})}),e.jsx(s.Item,{label:"开发权限",tooltip:"项目配置修改权限",extra:"只有开发者才能修改当前项目配置。",children:e.jsx(D,{})}),e.jsx("div",{className:b.editBtn,children:l==="detail"?e.jsx(h,{type:"primary",icon:e.jsx(B,{}),onClick:()=>{i("edit")},children:"编辑"}):e.jsxs(I,{children:[e.jsx(h,{type:"primary",icon:e.jsx(P,{}),loading:o,onClick:u,children:"保存"}),r!=="0"&&e.jsx(h,{icon:e.jsx(M,{}),onClick:()=>i("detail"),children:"取消"})]})})]})})}),q=({value:r})=>e.jsx(E,{src:r,style:{width:100}}),D=({value:r,onChange:d})=>{const o=f().id,c=O(),[l,i]=p([]);v(()=>{o!="0"&&m()},[]);const m=async()=>{const t=await w.getMemberList({page_id:parseInt(o)});i(t.list)},u=()=>{var t;(t=c.current)==null||t.open(1,parseInt(o))},n=async t=>{await w.deletePageMember({id:t}),i(l.filter(y=>y.id!=t))};return e.jsxs(e.Fragment,{children:[o=="0"?"项目创建以后，才能添加开发者":e.jsxs(e.Fragment,{children:[e.jsx(I,{children:l.map(t=>e.jsx(G,{color:"green",closable:!0,onClose:()=>n(t.id),children:t.user_name},t.id))}),e.jsx(h,{type:"link",onClick:u,children:"添加"})]}),e.jsx(F,{ref:c,update:m})]})};export{K as default};
