import{m as l,b as w,o as d,a as n,f as m,u as i,e as c,F as u,H as N,h as e,t as a,g as b,d as y,j as _,L as x,w as $,C as I,z as B}from"./app.be6c9332.js";import{_ as C}from"./AuthenticatedLayout.41d0b648.js";/* empty css                                              */import{t as V}from"./laravel-vue-pagination.es.978d644b.js";const j=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200"}," \u0625\u062F\u0627\u0631\u0629 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A ",-1),D={key:0},F={id:"alert-2",class:"p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 text-center",role:"alert"},z={class:"ml-3 text-sm font-medium text-red-700 dark:text-red-800"},L={class:"py-12"},M={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},R={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},S={class:"p-6 dark:bg-gray-900"},T={class:"flex flex-row"},q={class:"basis-1/2"},E={className:"flex items-center justify-between mb-6"},H={class:"basis-1/2"},P={class:"flex items-center max-w-5xl"},A=e("label",{class:"dark:text-gray-200",for:"simple-search"},null,-1),U={class:"relative w-full"},G=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),J={class:"overflow-x-auto shadow-md"},K={class:"w-full my-5"},O=e("thead",{class:"700 bg-rose-500 text-white text-center rounded-l-lg"},[e("tr",{class:"bg-rose-500 rounded-l-lg mb-2 sm:mb-0"},[e("th",{className:"px-4 py-2 border dark:border-gray-900 w-20"},"\u062A\u0633\u0644\u0633\u0644"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0631\u0642\u0645 \u0627\u0644\u0628\u0637\u0627\u0642\u0629"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0627\u0644\u0623\u0633\u0645 \u0643\u0627\u0645\u0644"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0627\u0644\u0645\u0646\u062F\u0648\u0628"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u062C\u064A\u0644"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0623\u0641\u0631\u0627\u062F \u0627\u0644\u0639\u0627\u0626\u0644\u0629"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0627\u0644\u062D\u0627\u0644\u0629"),e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u062A\u0646\u0641\u064A\u0630")])],-1),Q={class:"flex-1 sm:flex-none dark:bg-gray-700 dark:text-gray-200"},W={className:"px-4 py-2 border dark:border-gray-900"},X={className:"px-4 py-2 border dark:border-gray-900 td"},Y={className:"px-4 py-2 border dark:border-gray-900 td"},Z={className:"px-4 py-2 border dark:border-gray-900 td"},ee={className:"px-4 py-2 border dark:border-gray-900 td"},re={className:"px-4 py-2 border dark:border-gray-900 td"},te={className:"px-4 py-2 border dark:border-gray-900"},ae={className:"px-4 py-2 border dark:border-gray-900 td"},se={className:"px-4 py-2 border dark:border-gray-900"},de={className:"border px-2 py-2 dark:border-gray-900"},oe=["href"],le={class:"mt-3 text-center",style:{direction:"ltr"}},me={__name:"Index",props:{url:String,card:String},setup(f){const o=l({});l({});const g=async(r=1)=>{const s=await fetch(`/getIndexFormRegistration?page=${r}`);o.value=await s.json()},p=l("");g();const k=async r=>{o.value=[];const s=await fetch(`/livesearch?q=${r}`);o.value=await s.json()};w();const v=r=>{if(r==0)return"\u0625\u0646\u062A\u0638\u0627\u0631 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0635\u0646\u062F\u0648\u0642";if(r==1)return"\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645";if(r==2)return"\u0645\u0643\u062A\u0645\u0644"};return l(!1),(r,s)=>(d(),n(u,null,[m(i(N),{title:"Dashboard"}),m(C,null,{header:c(()=>[j]),default:c(()=>[r.$page.props.success?(d(),n("div",D,[e("div",F,[e("div",z,a(r.$page.props.success),1)])])):b("",!0),e("div",L,[e("div",M,[e("div",R,[e("div",S,[e("div",T,[e("div",q,[e("div",E,[r.$page.props.auth.user.type_id==1||r.$page.props.auth.user.type_id==2||r.$page.props.auth.user.type_id==3&&f.card?(d(),y(i(x),{key:0,className:"px-6 py-2 text-white bg-rose-500 rounded-md focus:outline-none",href:r.route("\u062A\u0633\u062C\u064A\u0644-\u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0631\u0629")},{default:c(()=>[_(" \u0625\u0646\u0634\u0627\u0621 \u0628\u0637\u0627\u0642\u0629 \u062C\u062F\u064A\u062F\u0629 ")]),_:1},8,["href"])):b("",!0)])]),e("div",H,[e("form",P,[A,e("div",U,[G,$(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>p.value=t),onInput:s[1]||(s[1]=t=>k(p.value)),type:"text",id:"simple-search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"\u0628\u062D\u062B \u062D\u0633\u0628 \u0631\u0642\u0645 \u0627\u0644\u0648\u0635\u0644 \u0627\u0648 \u0631\u0642\u0645 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0627\u0648 \u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u062A\u0631\u0643",required:""},null,544),[[I,p.value]])])])])]),e("div",J,[e("table",K,[O,e("tbody",Q,[(d(!0),n(u,null,B(o.value.data,t=>{var h;return d(),n("tr",{key:t.id,class:"mb-2 sm:mb-0 text-center"},[e("td",W,a(t.no),1),e("td",X,a(t.card_number),1),e("td",Y,a(t.name),1),e("td",Z,a(t.phone_number),1),e("td",ee,a(t.address),1),e("td",re,a((h=t.user)==null?void 0:h.name),1),e("td",te,a(t.created_at.substring(0,10)),1),e("td",ae,a(t.family_name),1),e("td",se,a(v(t.results)),1),e("td",de,[e("a",{tabIndex:"-1",className:"mx-1 px-2 py-1 text-sm text-white bg-gray-400 rounded",href:r.route("document",t.id),target:"_self"}," \u0637\u0628\u0627\u0639\u0629 ",8,oe),r.$page.props.auth.user.type_id==1||r.$page.props.auth.user.type_id==2?(d(),y(i(x),{key:0,tabIndex:"1",className:"px-2 py-1 text-sm text-white mx-1 bg-slate-500 rounded",href:r.route("formRegistrationEdit",t.id)},{default:c(()=>[_(" \u062A\u0639\u062F\u064A\u0644 ")]),_:2},1032,["href"])):b("",!0)])])}),128))])])]),e("div",le,[m(i(V),{data:o.value,onPaginationChangePage:g,limit:10},null,8,["data"])])])])])])]),_:1})],64))}};export{me as default};
