import{W as d,r as p,j as s,Y as l}from"./app-BlgNI2ja.js";import{G as c}from"./GuestLayout-DylgUIWl.js";import{T as u,I as f}from"./TextInput-tVSikR12.js";import{I as x}from"./InputLabel-yrimNWZ9.js";import{P as w}from"./PrimaryButton-Dt6eiuc8.js";import"./ApplicationLogo-C7QnJfNI.js";function N(){const{data:e,setData:a,post:t,processing:o,errors:i,reset:m}=d({password:""});p.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{N as default};
