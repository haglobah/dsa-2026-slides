import{_ as c}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-EmC7brdo.js";import{o as d,b as k,w as e,d as t,m as i,g as s,ad as n,v as f,x as m,T as p}from"./modules/vue--x-Z2nTZ.js";import{_ as h}from"./two-cols.vue_vue_type_script_setup_true_lang-B-KOlH7f.js";import{u as g,f as b}from"./slidev/context-BBX0LeAB.js";import"./modules/unplugin-icons-BosMuh2c.js";import"./index-CjSPF3vo.js";import"./modules/shiki-CFwSv2Li.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-wsM5LExE.js";const z={__name:"slides.md__slidev_136",setup(v){const{$clicksContext:o,$frontmatter:r}=g();return o.setup(),(x,l)=>{const a=c;return d(),k(h,f(m(p(b)(p(r),135))),{left:e(u=>[l[1]||(l[1]=s("h2",null,"10. Objekte (Optional)",-1)),l[2]||(l[2]=s("p",null,[n("Mit statics gibt es genau "),s("em",null,"einen"),n(" Stack. Zwei Rechner gleichzeitig? Geht nicht.")],-1)),l[3]||(l[3]=s("p",null,[n("Eine "),s("code",null,"class"),n(" mit "),s("code",null,"field"),n("s kann man mehrfach anlegen:")],-1)),t(a,i({},{title:"",ranges:[]}),{default:e(()=>[...l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"class Stack {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    field Array daten;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    field int top;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    constructor Stack new(int groesse) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        let daten = Array.new(groesse);")]),n(`
`),s("span",{class:"line"},[s("span",null,"        let top = 0;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        return this;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    method void push(int x) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        let daten[top] = x;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        let top = top + 1;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        return;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    method int pop() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        let top = top - 1;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        return daten[top];")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])]),_:1},16)]),right:e(u=>[t(a,i({},{title:"",ranges:[]}),{default:e(()=>[...l[4]||(l[4]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"var Stack s1;")]),n(`
`),s("span",{class:"line"},[s("span",null,"var Stack s2;")]),n(`
`),s("span",{class:"line"},[s("span",null,"let s1 = Stack.new(10);   // constructor")]),n(`
`),s("span",{class:"line"},[s("span",null,"let s2 = Stack.new(10);   // zweiter Stack!")]),n(`
`),s("span",{class:"line"},[s("span",null,'do s1.push(3);            // method: kennt "sein" Objekt')])])],-1)])]),_:1},16),l[6]||(l[6]=s("ul",null,[s("li",null,[s("code",null,"constructor"),n(" baut das Objekt und gibt "),s("code",null,"this"),n(" zurück")]),s("li",null,[s("code",null,"method"),n(" arbeitet auf einem Objekt, "),s("code",null,"function"),n(" nicht")]),s("li",null,"Aufräumen müssen wir selbst – Jack hat keinen Garbage Collector:")],-1)),t(a,i({},{title:"",ranges:[]}),{default:e(()=>[...l[5]||(l[5]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"method void dispose() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    do daten.dispose();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    do Memory.deAlloc(this);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])]),_:1},16)]),_:1},16)}}};export{z as default};
