import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CR8yD48p.js";import{o as h,b as d,w as a,d as i,m as p,g as n,ad as l,v as f,x as g,T as t}from"./modules/vue--x-Z2nTZ.js";import{_ as m}from"./two-cols.vue_vue_type_script_setup_true_lang-W_CUP-Ly.js";import{u as k,f as z}from"./slidev/context-DVJuteOG.js";import"./modules/unplugin-icons-BosMuh2c.js";import"./index-CikNpPHN.js";import"./modules/shiki-CFwSv2Li.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-wsM5LExE.js";const C={__name:"slides.md__slidev_132",setup(Z){const{$clicksContext:r,$frontmatter:u}=k();return r.setup(),(v,s)=>{const e=o;return h(),d(m,f(g(t(z)(t(u),131))),{left:a(c=>[s[1]||(s[1]=n("h2",null,"9. Baustein 4: Die Zeile zerlegen",-1)),s[2]||(s[2]=n("p",null,[l("Einmal durch die Zeile, Zeichen für Zeichen – wie "),n("code",null,"stringZuZahl"),l(", nur dass Leerzeichen und Operatoren dazwischenfunken:")],-1)),s[3]||(s[3]=n("ul",null,[n("li",null,[n("strong",null,"Ziffer"),l(": Zahl weiter aufsammeln")]),n("li",null,[n("strong",null,"Leerzeichen"),l(": Zahl ist fertig – pushen")]),n("li",null,[n("strong",null,"sonst"),l(": Operator! Zweimal poppen, rechnen, pushen")])],-1)),i(e,p({},{title:"",ranges:[]}),{default:a(()=>[...s[0]||(s[0]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"function void rechne(char op) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var int b, a;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    let b = Rechner.pop();   // zuletzt gepusht = rechter Operand")]),l(`
`),n("span",{class:"line"},[n("span",null,"    let a = Rechner.pop();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if (op = 43) { do Rechner.push(a + b); }   // '+'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // -, *, / : Aufgabe!")]),l(`
`),n("span",{class:"line"},[n("span",null,"    return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])],-1)])]),_:1},16)]),right:a(c=>[i(e,p({},{title:"",ranges:[]}),{default:a(()=>[...s[4]||(s[4]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"function void main() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var String zeile;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var int i, zahl;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var char c;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var boolean inZahl;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    do Rechner.init();")]),l(`
`),n("span",{class:"line"},[n("span",null,'    let zeile = Keyboard.readLine("> ");')]),l(`
`),n("span",{class:"line"},[n("span",null,"    let i = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    let zahl = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    let inZahl = false;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    while (i < zeile.length()) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        let c = zeile.charAt(i);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (Main.istZiffer(c)) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            let zahl = (zahl * 10) + (c - 48);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            let inZahl = true;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            if (inZahl) {              // Zahl fertig: pushen")]),l(`
`),n("span",{class:"line"},[n("span",null,"                do Rechner.push(zahl);")]),l(`
`),n("span",{class:"line"},[n("span",null,"                let zahl = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"                let inZahl = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            if (~(c = 32)) {           // kein Leerzeichen: Operator")]),l(`
`),n("span",{class:"line"},[n("span",null,"                do Rechner.rechne(c);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        let i = i + 1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if (inZahl) {                      // letzte Zahl der Zeile")]),l(`
`),n("span",{class:"line"},[n("span",null,"        do Rechner.push(zahl);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    do Output.printInt(Rechner.pop());")]),l(`
`),n("span",{class:"line"},[n("span",null,"    return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])],-1)])]),_:1},16)]),_:1},16)}}};export{C as default};
