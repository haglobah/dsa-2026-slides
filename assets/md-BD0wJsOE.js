import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CR8yD48p.js";import{o as u,b as o,w as a,g as n,ad as l,d as c,m as d,v as h,x as m,T as e}from"./modules/vue--x-Z2nTZ.js";import{I as f}from"./slidev/default-Cvm6k7qQ.js";import{u as g,f as k}from"./slidev/context-DVJuteOG.js";import"./modules/unplugin-icons-BosMuh2c.js";import"./index-CikNpPHN.js";import"./modules/shiki-CFwSv2Li.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-wsM5LExE.js";const M={__name:"slides.md__slidev_128",setup(z){const{$clicksContext:i,$frontmatter:t}=g();return i.setup(),(v,s)=>{const r=p;return u(),o(f,h(m(e(k)(e(t),127))),{default:a(()=>[s[1]||(s[1]=n("h2",null,"6. Funktionen",-1)),s[2]||(s[2]=n("p",null,[l("Unsere "),n("code",null,"main"),l(" wächst – und die Zeile des Rechners enthält gleich "),n("em",null,"mehrere"),l(" Zahlen, wir brauchen die Schleife wieder. Gleiches extrahiert man in eine "),n("strong",null,"Funktion"),l(":")],-1)),c(r,d({},{title:"",ranges:[]}),{default:a(()=>[...s[0]||(s[0]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"class Main {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function int stringZuZahl(String s) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var int i, zahl;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        let zahl = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        let i = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        while (i < s.length()) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            let zahl = (zahl * 10) + (s.charAt(i) - 48);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            let i = i + 1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return zahl;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function void main() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var String zeile;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var int zahl;")]),l(`
`),n("span",{class:"line"},[n("span",null,'        let zeile = Keyboard.readLine("> ");')]),l(`
`),n("span",{class:"line"},[n("span",null,"        let zahl = Main.stringZuZahl(zeile);    // Ergebnis behalten: let")]),l(`
`),n("span",{class:"line"},[n("span",null,"        do Output.printInt(zahl * 2);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])],-1)])]),_:1},16),s[3]||(s[3]=n("ul",null,[n("li",null,[l("Aufruf immer mit Klassennamen davor: "),n("code",null,"Main.stringZuZahl(zeile)")]),n("li",null,[l("Das ist auch schon die Magie von "),n("code",null,"parseInt")])],-1))]),_:1},16)}}};export{M as default};
