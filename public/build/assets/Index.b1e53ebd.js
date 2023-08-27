import{_ as $}from"./AuthenticatedLayout.41d0b648.js";/* empty css                                              */import{m,b as C,o as d,a as n,f as l,u as i,e as c,F as u,H as I,i as B,j as _,h as e,L as f,t as o,z as j,g as h,d as D}from"./app.be6c9332.js";import{t as F}from"./laravel-vue-pagination.es.978d644b.js";import{_ as L}from"./ModalAddCardUser.6cf82025.js";const V=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200"}," \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 ",-1),A={class:"py-12"},H={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},P={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},R={class:"p-6 dark:bg-gray-900"},S={className:"flex items-center justify-between mb-6"},z={class:"overflow-x-auto shadow-md"},E={class:"w-full my-5"},M={class:"700 bg-rose-500 text-white text-center rounded-l-lg"},T={class:"bg-rose-500 rounded-l-lg mb-2 sm:mb-0"},U=e("th",{className:"px-4 py-2 border dark:border-gray-900 w-20"},"\u0627\u0644\u0631\u0642\u0645",-1),q={className:"px-4 py-2 border dark:border-gray-900"},G=e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",-1),J=e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A",-1),K=e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",-1),O=e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u0627\u0644\u0631\u0635\u064A\u062F",-1),Q=e("th",{className:"px-4 py-2 border dark:border-gray-900"},"\u062A\u0646\u0641\u064A\u0630",-1),W={class:"flex-1 sm:flex-none dark:bg-gray-700 dark:text-gray-200"},X={className:"px-4 py-2 border dark:border-gray-900"},Y={className:"px-4 py-2 border dark:border-gray-900"},Z={className:"px-4 py-2 border dark:border-gray-900"},ee={key:0,class:"text-sm text-green-500 font-bold py-2 px-2 hover:text-red-500"},te={className:"px-4 py-2 border dark:border-gray-900"},ae={className:"px-4 py-2 border dark:border-gray-900"},se={className:"px-4 py-2 border dark:border-gray-900"},oe={className:"px-4 py-2 border dark:border-gray-900",style:{"min-height":"42px"}},de=["onClick"],re=["onClick"],ne={class:"mt-3 text-center",style:{direction:"ltr"}},he={__name:"Index",props:{url:String,cards:Array},setup(k){const b=m({});m({});const x=async(a=1)=>{const s=await fetch(`/getIndex?page=${a}`);b.value=await s.json()};x();const y=C();function w(a){y.get(route("ban",a)),window.location.reload()}function v(a){y.get(route("unban",a)),window.location.reload()}let r=m(!1),p=m(0);function N(a){let s=a.card_id,t=a.card;fetch(`/addUserCard/${s}/${t}/${p.value}`).then(()=>{r.value=!1,p.value=0,window.location.reload()}).catch(g=>{r.value=!1,p.value=0})}return(a,s)=>(d(),n(u,null,[l(i(I),{title:"Dashboard"}),l($,null,{header:c(()=>[V]),default:c(()=>[l(L,{show:!!i(r),data:k.cards,onA:s[0]||(s[0]=t=>N(t)),onClose:s[1]||(s[1]=t=>B(r)?r.value=!1:r=!1)},{header:c(()=>[_(" \u0652 ")]),_:1},8,["show","data"]),e("div",A,[e("div",H,[e("div",P,[e("div",R,[e("div",S,[l(i(f),{className:"px-6 py-2 text-white bg-rose-500 rounded-md focus:outline-none",href:a.route("users.create")},{default:c(()=>[_(" \u0625\u0646\u0634\u0627\u0621 \u0645\u0633\u062A\u062E\u062F\u0645 ")]),_:1},8,["href"])]),e("div",z,[e("table",E,[e("thead",M,[e("tr",T,[U,e("th",q,o(a.$t("name")),1),G,J,K,O,Q])]),e("tbody",W,[(d(!0),n(u,null,j(b.value.data,t=>(d(),n("tr",{key:t.id,class:"text-center dark:text-gray-200mb-2 sm:mb-0"},[e("td",X,o(t.id),1),e("td",Y,o(t.name),1),e("td",Z,[_(o(t.email),1),t.device?(d(),n("span",ee,o(t.device),1)):h("",!0)]),e("td",te,o(t.user_type?t.user_type.name:""),1),e("td",ae,o(t.phone),1),e("td",se,o(t.wallet?t.wallet.balance:""),1),e("td",oe,[t.email!="admin@admin.com"?(d(),D(i(f),{key:0,tabIndex:"1",className:"px-2 py-1 text-sm text-white bg-slate-500 rounded",href:a.route("users.edit",t.id)},{default:c(()=>[_(" \u062A\u0639\u062F\u064A\u0644 ")]),_:2},1032,["href"])):h("",!0),!t.is_band&&t.email!="admin@admin.com"?(d(),n("button",{key:1,onClick:g=>w(t.id),tabIndex:"-1",type:"button",className:"mx-1 px-2 py-1 text-sm text-white bg-orange-500 rounded"}," \u062A\u0642\u064A\u062F ",8,de)):h("",!0),t.is_band&&t.email!="admin@admin.com"?(d(),n("button",{key:2,onClick:g=>v(t.id),tabIndex:"-1",type:"button",className:"mx-1 px-2 py-1 text-sm text-white bg-orange-500 rounded"}," \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0642\u064A\u062F ",8,re)):h("",!0)])]))),128))])])]),e("div",ne,[l(i(F),{data:b.value,onPaginationChangePage:x,limit:10},null,8,["data"])])])])])])]),_:1})],64))}};export{he as default};
