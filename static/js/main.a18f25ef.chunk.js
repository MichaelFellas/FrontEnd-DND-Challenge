(this["webpackJsonpDnD Spells"]=this["webpackJsonpDnD Spells"]||[]).push([[0],{53:function(e,a,l){},60:function(e,a,l){"use strict";l.r(a);var s=l(0),t=l.n(s),n=l(21),c=l.n(n),r=(l(52),l(53),l(29)),i=l(5),o=l(39),p=l(13),d=l(23),j=l(10),m=l(62),u=l(63),b=l(70),x=l(64),h=l(67),O=l(65),g=l(66),v=function(e){return fetch("https://www.dnd5eapi.co/api/spells/".concat(e))},f=function(){return localStorage.getItem("saved_spells")?JSON.parse(localStorage.getItem("saved_spells")):[]},D=function(e){var a=localStorage.getItem("saved_spells")?JSON.parse(localStorage.getItem("saved_spells")):null;if(!a)return!1;var l=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_spells",JSON.stringify(l)),!0},N=l(1),S=function(){var e=Object(s.useState)([]),a=Object(j.a)(e,2),l=a[0],t=a[1],n=Object(s.useState)([]),c=Object(j.a)(n,2),r=c[0],i=c[1],D=function(){var e=Object(d.a)(Object(p.a)().mark((function e(){var a,l,s;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.dnd5eapi.co/api/spells/");case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("something went wrong!");case 6:return e.next=8,a.json();case 8:l=e.sent,s=l.results.map((function(e){return{spellName:e.name,spellIndex:e.index,spellURL:e.url}})),t(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),S=Object(s.useState)(f()),C=Object(j.a)(S,2),_=C[0],y=C[1];Object(s.useEffect)((function(){return function(){var e;(e=_).length?localStorage.setItem("saved_spells",JSON.stringify(e)):localStorage.removeItem("saved_spells")}}));var T=function(){var e=Object(d.a)(Object(p.a)().mark((function e(a){var s;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.find((function(e){return e.spellIndex===a}));case 2:s=e.sent,y([].concat(Object(o.a)(_),[s.spellIndex])),y([].concat(Object(o.a)(_),[s.spellIndex]));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(Object(p.a)().mark((function e(a){var l,s,t,n,c,r,o,d,j,m;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(a);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("something went wrong!");case 6:return e.next=8,n.json();case 8:return c=e.sent,e.next=11,c.classes.map((function(e){return e.name+", "}));case 11:return r=e.sent,e.next=14,c.desc.map((function(e){return e+" "}));case 14:o=e.sent,d="",j="",c.damage&&(j=Object.values(c.damage.damage_at_slot_level||c.damage_at_character_level),d=Object.keys(c.damage.damage_at_slot_level||c.damage_at_character_level)),m={spellName:c.name,spellIndex:c.index,spellURL:c.url,spellDamageKeys:d||"",spellDamage:j||"",spellDamageType:(null===(l=c.damage)||void 0===l?void 0:l.damage_type)||"",spellAOESize:(null===(s=c.area_of_effect)||void 0===s?void 0:s.size)||"",spellAOEType:(null===(t=c.area_of_effect)||void 0===t?void 0:t.type)||"",spellCastingTime:c.casting_time,spellClasses:r,spellComponents:c.components,spellDesc:o,spellDuration:c.duration,spellLevel:c.level,spellMaterial:c.material,spellRange:c.range,spellRitual:c.ritual,spellSchool:c.school.name},console.log(d),i(m),R(),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.error(e.t0);case 27:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(a){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){D()}),[]);var w=Object(s.useState)(!1),I=Object(j.a)(w,2),E=I[0],L=I[1],R=function(){return L(!0)},z=function(){return L(!1)};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(m.a,{className:"containerPage",children:[Object(N.jsx)("br",{}),Object(N.jsx)("h2",{className:"pageTitle",children:l.length?"Viewing ".concat(l.length," results:"):"DnD 5e Spells List"}),Object(N.jsx)("br",{}),Object(N.jsx)(u.a,{children:l.map((function(e){return Object(N.jsx)(b.a,{border:"dark",children:Object(N.jsxs)(b.a.Body,{className:"card-body",children:[Object(N.jsx)(b.a.Title,{className:"card-title",children:e.spellName}),Object(N.jsx)(x.a,{disabled:null===_||void 0===_?void 0:_.some((function(a){return a===e.spellIndex})),className:"btn-block btn-info",onClick:function(){return T(e.spellIndex)},children:null!==_&&void 0!==_&&_.some((function(a){return a===e.spellIndex}))?"This spell has already been saved!":"Save this Spell!"}),Object(N.jsx)(x.a,{className:"btn-block btn-info",onClick:function(){return k(e.spellIndex)},children:"More Information"}),Object(N.jsxs)(h.a,{show:E,onHide:z,children:[Object(N.jsx)(h.a.Header,{closeButton:!0,children:Object(N.jsx)(h.a.Title,{children:r.spellName})}),Object(N.jsxs)(h.a.Body,{children:[r.spellAOESize&&Object(N.jsxs)("p",{children:["Spell Size: ",r.spellAOESize," feet ",r.spellAOEType]}),r.spellCastingTime&&Object(N.jsxs)("p",{children:["Casting Time: ",r.spellCastingTime]}),r.spellDuration&&Object(N.jsxs)("p",{children:["Duration: ",r.spellDuration]}),r.spellComponents&&Object(N.jsxs)("p",{children:["Components: ",r.spellComponents]}),r.spellClasses&&Object(N.jsxs)("p",{children:["Classes: ",r.spellClasses]}),r.spellSchool&&Object(N.jsxs)("p",{children:["School: ",r.spellSchool]}),r.spellMaterial&&Object(N.jsxs)("p",{children:["Materials: ",r.spellMaterial]}),r.spellRange&&Object(N.jsxs)("p",{children:["Range: ",r.spellRange]}),r.spellLevel&&Object(N.jsxs)("p",{children:["Level: ",r.spellLevel]}),r.spellDesc&&Object(N.jsxs)("p",{children:["Desc: ",r.spellDesc]}),r.spellDamageKeys&&Object(N.jsx)(b.a.Text,{className:"card-text-damage black",children:"Damage"}),Object(N.jsx)(m.a,{className:"damageTable",children:Object(N.jsxs)(O.a,{children:[Object(N.jsx)(g.a,{className:"damageCol",children:r.spellDamageKeys&&r.spellDamageKeys.map((function(e){return Object(N.jsxs)("p",{className:" damageText",children:["Damage Level: ",e]})}))}),Object(N.jsx)(g.a,{className:"damageCol",children:r.spellDamage&&r.spellDamage.map((function(e){return Object(N.jsxs)("p",{className:" damageText",children:["Dice: ",e]})}))})]})})]}),Object(N.jsx)(h.a.Footer,{children:Object(N.jsx)(x.a,{onClick:z,variant:"primary",children:"Close"})})]})]})},e.spellIndex)}))})]})})},C=function(){var e=Object(s.useState)(f()),a=Object(j.a)(e,2),l=a[0],t=a[1],n=function(){var e=Object(d.a)(Object(p.a)().mark((function e(){var a,l,s,n,c,r,i,o,d,j,m,u,b;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:a=e.sent,l=[],s=0;case 6:if(!(s<a.length)){e.next=28;break}return e.next=9,v(a[s]);case 9:return i=e.sent,e.next=12,i.json();case 12:return o=e.sent,e.next=15,o.classes.map((function(e){return e.name+", "}));case 15:return d=e.sent,e.next=18,o.desc.map((function(e){return e+" "}));case 18:j=e.sent,m="",u="",o.damage&&(u=Object.values(o.damage.damage_at_slot_level||o.damage_at_character_level),m=Object.keys(o.damage.damage_at_slot_level||o.damage_at_character_level)),b={spellName:o.name,spellIndex:o.index,spellURL:o.url,spellAOESize:(null===(n=o.area_of_effect)||void 0===n?void 0:n.size)||"",spellAOEType:(null===(c=o.area_of_effect)||void 0===c?void 0:c.type)||"",spellDamageKeys:m||"",spellDamage:u||"",spellDamageType:(null===(r=o.damage)||void 0===r?void 0:r.damage_type)||"",spellCastingTime:o.casting_time,spellClasses:d,spellComponents:o.components,spellDesc:j,spellDuration:o.duration,spellLevel:o.level,spellMaterial:o.material,spellRange:o.range,spellRitual:o.ritual,spellSchool:o.school.name},console.log(b),l.push(b);case 25:s++,e.next=6;break;case 28:t(l),e.next=34;break;case 31:e.prev=31,e.t0=e.catch(0),console.error(e.t0);case 34:case"end":return e.stop()}}),e,null,[[0,31]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){n()}),[]);var c=function(){var e=Object(d.a)(Object(p.a)().mark((function e(a){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(a),console.log(a),n();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)("h2",{className:"pageTitle titleBuffer",children:l.length?"Viewing ".concat(l.length," saved ").concat(1===l.length?"spell":"spells",":"):"You have no saved spells!"}),Object(N.jsx)(u.a,{children:l.map((function(e){return Object(N.jsx)(b.a,{border:"dark",children:Object(N.jsxs)(b.a.Body,{className:"card-body",children:[Object(N.jsx)(b.a.Title,{className:"card-title",children:e.spellName}),e.spellDamageType&&Object(N.jsxs)("p",{className:"card-text",children:["Damage Type: ",e.spellDamageType.name," damage "]}),e.spellAOESize&&Object(N.jsxs)("p",{className:"card-text",children:["Spell Size: ",e.spellAOESize," feet ",e.spellAOEType]}),e.spellCastingTime&&Object(N.jsxs)("p",{className:"card-text",children:["Casting Time: ",e.spellCastingTime]}),e.spellDuration&&Object(N.jsxs)("p",{className:"card-text",children:["Duration: ",e.spellDuration]}),e.spellComponents&&Object(N.jsxs)("p",{className:"card-text",children:["Components: ",e.spellComponents]}),e.spellClasses&&Object(N.jsxs)("p",{className:"card-text",children:["Classes: ",e.spellClasses]}),e.spellSchool&&Object(N.jsxs)("p",{className:"card-text",children:["School: ",e.spellSchool]}),e.spellMaterial&&Object(N.jsxs)("p",{className:"card-text",children:["Materials: ",e.spellMaterial]}),e.spellRange&&Object(N.jsxs)("p",{className:"card-text",children:["Range: ",e.spellRange]}),e.spellLevel&&Object(N.jsxs)("p",{className:"card-text",children:["Level: ",e.spellLevel]}),e.spellDesc&&Object(N.jsxs)(b.a.Text,{className:"card-text",children:["Desc: ",e.spellDesc]}),e.spellDamageKeys&&Object(N.jsx)(b.a.Text,{className:"card-text-damage",children:"Damage"}),Object(N.jsx)(m.a,{className:"damageTable",children:Object(N.jsxs)(O.a,{children:[Object(N.jsx)(g.a,{className:"damageCol",children:e.spellDamageKeys&&e.spellDamageKeys.map((function(e){return Object(N.jsxs)("p",{className:"card-text damageText",children:["Damage Level: ",e]})}))}),Object(N.jsx)(g.a,{className:"damageCol",children:e.spellDamage&&e.spellDamage.map((function(e){return Object(N.jsxs)("p",{className:"card-text damageText",children:["Dice: ",e]})}))})]})}),Object(N.jsx)("br",{}),Object(N.jsx)(x.a,{className:"btn-block btn-danger",onClick:function(){return c(e.spellIndex)},children:"Delete this Spell!"})]})},e.spellIndex)}))})]})})},_=l(69),y=l(68),T=function(){var e=Object(s.useState)(!1),a=Object(j.a)(e,2);a[0],a[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(_.a,{className:"navbarBG",expand:"lg",children:Object(N.jsxs)(m.a,{fluid:!0,className:"navbarCont",children:[Object(N.jsx)(_.a.Brand,{className:"navbarCont",as:r.b,to:"/FrontEnd-DND-Challenge",children:Object(N.jsx)("h2",{children:"DND SPELLS"})}),Object(N.jsx)(_.a.Toggle,{"aria-controls":"navbar",className:"navbarCont"}),Object(N.jsx)(_.a.Collapse,{id:"navbar",className:"navbarCont",children:Object(N.jsx)(y.a,{className:"ml-auto navbarCont",children:Object(N.jsx)(y.a.Link,{as:r.b,to:"/FrontEnd-DND-Challenge/saved",children:Object(N.jsx)("h4",{children:"Saved Spells"})})})})]})})})};var k=function(){return document.body.style="background-color: #121212",Object(N.jsx)(r.a,{children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(T,{}),Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{path:"/FrontEnd-DND-Challenge",element:Object(N.jsx)(S,{})}),Object(N.jsx)(i.a,{path:"/FrontEnd-DND-Challenge/saved",element:Object(N.jsx)(C,{})}),Object(N.jsx)(i.a,{path:"*",element:Object(N.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})};c.a.render(Object(N.jsx)(t.a.StrictMode,{children:Object(N.jsx)(k,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a18f25ef.chunk.js.map