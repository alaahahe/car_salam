import{p as D,q as E,c as y,m as w,o as l,a as h,h as e,r as m,w as C,l as L,f as d,e as r,n as f,u as p,T as j,d as b,L as $,g as _,s as z,j as u,t as c}from"./app.be6c9332.js";const N=(n,s)=>{const a=n.__vccOpts||n;for(const[i,t]of s)a[i]=t;return a},S={class:"relative"},B={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white "]}},setup(n){const s=n,a=g=>{o.value&&g.key==="Escape"&&(o.value=!1)};D(()=>document.addEventListener("keydown",a)),E(()=>document.removeEventListener("keydown",a));const i=y(()=>({48:"w-48"})[s.width.toString()]),t=y(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),o=w(!1);return(g,v)=>(l(),h("div",S,[e("div",{onClick:v[0]||(v[0]=M=>o.value=!o.value)},[m(g.$slots,"trigger")]),C(e("div",{class:"fixed inset-0 z-40",onClick:v[1]||(v[1]=M=>o.value=!1)},null,512),[[L,o.value]]),d(j,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[C(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[p(i),p(t)]]),style:{display:"none"},onClick:v[2]||(v[2]=M=>o.value=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[m(g.$slots,"content")],2)],2),[[L,o.value]])]),_:3})]))}},x={__name:"DropdownLink",setup(n){return(s,a)=>(l(),b(p($),{class:"block w-full px-4 py-2 border dark:border-gray-900 text-left text-sm leading-5 text-gray-700 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:r(()=>[m(s.$slots,"default")]),_:3}))}},V={__name:"NavLink",props:["href","active"],setup(n){const s=n,a=y(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 dark:text-gray-500 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,t)=>(l(),b(p($),{href:n.href,class:f(p(a))},{default:r(()=>[m(i.$slots,"default")]),_:3},8,["href","class"]))}},k={__name:"ResponsiveNavLink",props:["href","active"],setup(n){const s=n,a=y(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,t)=>(l(),b(p($),{href:n.href,class:f(p(a))},{default:r(()=>[m(i.$slots,"default")]),_:3},8,["href","class"]))}},T={data(){return{darkMode:!1}},created(){this.darkMode=localStorage.getItem("darkMode")==="true",this.darkMode&&document.documentElement.classList.add("dark")},methods:{toggleDarkMode(){this.darkMode=!this.darkMode,this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode",this.darkMode)}},computed:{iconClass(){return this.darkMode?"fas fa-sun":"fas fa-moon"}}},A={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},I=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"},null,-1),O=[I],q={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},H=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"},null,-1),R=[H];function U(n,s,a,i,t,o){return l(),h("button",{onClick:s[0]||(s[0]=(...g)=>o.toggleDarkMode&&o.toggleDarkMode(...g)),class:"px-2 py-1 rounded-full focus:outline-none dark:text-gray-400"},[t.darkMode?_("",!0):(l(),h("svg",A,O)),t.darkMode?(l(),h("svg",q,R)):_("",!0)])}const F=N(T,[["render",U]]),G={class:"min-h-screen bg-gray-100 dark:bg-gray-800"},J={class:"bg-white border-gray-100 dark:bg-gray-900"},K={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},P={class:"flex justify-between h-16"},Q={class:"flex"},W={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},X={class:"hidden sm:flex sm:items-center sm:ml-6"},Y={class:"ml-3 relative"},Z={class:"inline-flex rounded-md"},ee={type:"button",class:"dark:bg-gray-800 dark:text-gray-300 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},te=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),se={class:"ml-3 relative"},oe={class:"inline-flex rounded-md"},re={type:"button",class:"dark:bg-gray-800 dark:text-gray-300 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},ne=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ae={class:"-mr-2 flex items-center sm:hidden"},ie={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},de={class:"pt-2 pb-3 space-y-1"},le={class:"pt-4 pb-1 border-t border-gray-200"},ue={class:"px-4"},ce={class:"font-medium text-base text-gray-800"},ge={class:"font-medium text-sm text-gray-500"},he={class:"mt-3 space-y-1"},fe={key:0,class:"bg-white shadow dark:bg-gray-900 dark:text-gray-200"},me={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},pe={class:"dark:bg-gray-800"},_e={__name:"AuthenticatedLayout",setup(n){const s=w(!1),a=z();w("en");const i=t=>{a.locale.value=t};return(t,o)=>(l(),h("div",null,[e("div",G,[e("nav",J,[e("div",K,[e("div",P,[e("div",Q,[_("",!0),e("div",W,[d(V,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[u(c(t.$t("home")),1)]),_:1},8,["href","active"])])]),e("div",X,[e("div",Y,[d(B,{align:"right",width:"48"},{trigger:r(()=>[e("span",Z,[e("button",ee,[u(c(t.$t("lang"))+" ",1),te])])]),content:r(()=>[d(x,{onClick:o[0]||(o[0]=g=>i("ar")),as:"button"},{default:r(()=>[u(" \u0639\u0631\u0628\u064A ")]),_:1}),d(x,{onClick:o[1]||(o[1]=g=>i("kr")),as:"button"},{default:r(()=>[u(" \u0643\u0631\u062F\u064A ")]),_:1})]),_:1})]),e("div",se,[d(B,{align:"right",width:"48"},{trigger:r(()=>[e("span",oe,[e("button",re,[u(c(t.$page.props.auth.user.name)+" ",1),ne])])]),content:r(()=>[d(x,{href:t.route("logout"),method:"post",as:"button"},{default:r(()=>[u(c(t.$t("logout")),1)]),_:1},8,["href"])]),_:1})]),d(F)]),e("div",ae,[e("button",{onClick:o[2]||(o[2]=g=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(l(),h("svg",ie,[e("path",{class:f({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",de,[d(k,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[u(c(t.$t("dashboard")),1)]),_:1},8,["href","active"])]),e("div",le,[e("div",ue,[e("div",ce,c(t.$page.props.auth.user.name),1),e("div",ge,c(t.$page.props.auth.user.email),1)]),e("div",he,[d(k,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[u(c(t.$t("home")),1)]),_:1},8,["href","active"]),t.$page.props.auth.user.type_id==1?(l(),b(k,{key:0,href:t.route("users.index"),active:t.route().current("users.index")},{default:r(()=>[u(c(t.$t("users")),1)]),_:1},8,["href","active"])):_("",!0),d(k,{href:t.route("logout"),method:"post",as:"button"},{default:r(()=>[u(c(t.$t("logout")),1)]),_:1},8,["href"])])])],2)]),t.$slots.header?(l(),h("header",fe,[e("div",me,[m(t.$slots,"header")])])):_("",!0),e("main",pe,[m(t.$slots,"default")])])]))}};export{_e as _,N as a};