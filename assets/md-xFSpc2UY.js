import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Dz84CuLw.js";import{o as c,b as f,w as e,g as n,ad as s,d as i,m as t,v as m,x as k,T as p}from"./modules/vue-ay11y6SF.js";import{_ as g}from"./two-cols.vue_vue_type_script_setup_true_lang-DyFbcw2J.js";import{u as h,f as v}from"./slidev/context-mVRatbAR.js";import"./modules/unplugin-icons-Cxzm2Ki6.js";import"./index-9amwkhAU.js";import"./modules/shiki-D6djOZTy.js";const C={__name:"slides.md__slidev_136",setup(x){const{$clicksContext:r,$frontmatter:o}=h();return r.setup(),(b,l)=>{const a=d;return c(),f(g,m(k(p(v)(p(o),135))),{left:e(u=>[l[1]||(l[1]=n("h2",null,"8. Baustein 3: Zahlen merken",-1)),l[2]||(l[2]=n("p",null,[n("code",null,"3 4 +"),s(": Wenn der Operator drankommt, müssen 3 und 4 schon irgendwo liegen – auf einem "),n("strong",null,"Stack"),s(", wie in der VM.")],-1)),l[3]||(l[3]=n("p",null,[s("Viele Zahlen an einem Stück speichern: ein "),n("strong",null,"Array"),s(".")],-1)),i(a,t({},{title:"",ranges:[]}),{default:e(()=>[...l[0]||(l[0]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"var Array a;")]),s(`
`),n("span",{class:"line"},[n("span",null,"let a = Array.new(100);   // 100 Plätze")]),s(`
`),n("span",{class:"line"},[n("span",null,"let a[0] = 3;")]),s(`
`),n("span",{class:"line"},[n("span",null,"let a[1] = a[0] + 1;")])])],-1)])]),_:1},16),l[4]||(l[4]=n("ul",null,[n("li",null,[s("Untypisiert (aber es gibt ja sowieso nur Zahlen): In einen "),n("code",null,"Array"),s(" passt alles")]),n("li",null,[s("Keine Bounds-Checks: "),n("code",null,"a[200]"),s(" schreibt einfach irgendwo hin (!)")])],-1))]),right:e(u=>[l[6]||(l[6]=n("p",null,[n("code",null,"push"),s(" und "),n("code",null,"pop"),s(" teilen sich den Array – Variablen, die nur einmal pro Klasse existieren, heißen "),n("code",null,"static"),s(":")],-1)),i(a,t({},{title:"",ranges:[]}),{default:e(()=>[...l[5]||(l[5]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"class Rechner {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static Array daten;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static int top;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function void init() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let daten = Array.new(100);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let top = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function void push(int x) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let daten[top] = x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let top = top + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    function int pop() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let top = top - 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return daten[top];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])],-1)])]),_:1},16)]),_:1},16)}}};export{C as default};
