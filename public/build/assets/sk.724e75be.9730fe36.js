import{s as _}from"./Dashboard.61aa466e.js";import"./app.be6c9332.js";import"./AuthenticatedLayout.41d0b648.js";import"./laravel-vue-pagination.es.978d644b.js";function o(t){return t>1&&t<5&&~~(t/10)!==1}function m(t,e,s,r){var n=t+" ";switch(s){case"s":return e||r?"p\xE1r sek\xFAnd":"p\xE1r sekundami";case"m":return e?"min\xFAta":r?"min\xFAtu":"min\xFAtou";case"mm":return e||r?n+(o(t)?"min\xFAty":"min\xFAt"):n+"min\xFAtami";case"h":return e?"hodina":r?"hodinu":"hodinou";case"hh":return e||r?n+(o(t)?"hodiny":"hod\xEDn"):n+"hodinami";case"d":return e||r?"de\u0148":"d\u0148om";case"dd":return e||r?n+(o(t)?"dni":"dn\xED"):n+"d\u0148ami";case"M":return e||r?"mesiac":"mesiacom";case"MM":return e||r?n+(o(t)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return e||r?"rok":"rokom";case"yy":return e||r?n+(o(t)?"roky":"rokov"):n+"rokmi"}}var i={name:"sk",weekdays:"nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),months:"janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split("_"),monthsShort:"jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:m,m,mm:m,h:m,hh:m,d:m,dd:m,M:m,MM:m,y:m,yy:m}};_.locale(i,null,!0);export{i as default};
