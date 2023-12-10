import{L as K,r as A,M as V,N as E,O as I,P,G as W,q as $,Q as q,R as S,K as G,c as J,S as Y,T as X,U as k,V as Q,i as Z,v as ee,x as h,B as te,y as se,W as M,X as re,Y as ae,Z as T,z as O,A as R,$ as U,a0 as ne,t as ie}from"./entry.cbf3211f.js";function oe(...n){var w;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,t,e={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=$(),i=()=>null,u=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];e.server=e.server??!0,e.default=e.default??i,e.getCachedData=e.getCachedData??u,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??K.deep;const l=()=>![null,void 0].includes(e.getCachedData(s));if(!a._asyncData[s]||!e.immediate){(w=a.payload._errors)[s]??(w[s]=null);const d=e.deep?A:V;a._asyncData[s]={data:d(e.getCachedData(s)??e.default()),pending:A(!l()),error:E(a.payload._errors,s),status:A("idle")}}const o={...a._asyncData[s]};o.refresh=o.execute=(d={})=>{if(a._asyncDataPromises[s]){if(d.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((d._initial||a.isHydrating&&d._initial!==!1)&&l())return Promise.resolve(e.getCachedData(s));o.pending.value=!0,o.status.value="pending";const m=new Promise((f,y)=>{try{f(t(a))}catch(D){y(D)}}).then(f=>{if(m.cancelled)return a._asyncDataPromises[s];let y=f;e.transform&&(y=e.transform(f)),e.pick&&(y=le(y,e.pick)),a.payload.data[s]=y,o.data.value=y,o.error.value=null,o.status.value="success"}).catch(f=>{if(m.cancelled)return a._asyncDataPromises[s];o.error.value=q(f),o.data.value=S(e.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=m,a._asyncDataPromises[s]};const p=()=>o.refresh({_initial:!0}),g=e.server!==!1&&a.payload.serverRendered;{const d=G();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const f=d._nuxtOnBeforeMountCbs;d&&(I(()=>{f.forEach(y=>{y()}),f.splice(0,f.length)}),P(()=>f.splice(0,f.length)))}g&&a.isHydrating&&(o.error.value||l())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):d&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?d._nuxtOnBeforeMountCbs.push(p):e.immediate&&p(),e.watch&&W(e.watch,()=>o.refresh());const m=a.hook("app:data:refresh",async f=>{(!f||f.includes(s))&&await o.refresh()});d&&P(m)}const c=Promise.resolve(a._asyncDataPromises[s]).then(()=>o);return Object.assign(c,o),c}function le(n,r){const s={};for(const t of r)s[t]=n[t];return s}const j=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ce(n,r){r?r={...j,...r}:r=j;const s=L(r);return s.dispatch(n),s.toString()}const ue=Object.freeze(["prototype","__proto__","constructor"]);function L(n){let r="",s=new Map;const t=e=>{r+=e};return{toString(){return r},getContext(){return s},dispatch(e){return n.replacer&&(e=n.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const a=Object.prototype.toString.call(e);let i="";const u=a.length;u<10?i="unknown:["+a+"]":i=a.slice(8,u-1),i=i.toLowerCase();let l=null;if((l=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):n.ignoreUnknown||this.unkown(e,i);else{let o=Object.keys(e);n.unorderedObjects&&(o=o.sort());let p=[];n.respectType!==!1&&!F(e)&&(p=ue),n.excludeKeys&&(o=o.filter(c=>!n.excludeKeys(c)),p=p.filter(c=>!n.excludeKeys(c))),t("object:"+(o.length+p.length)+":");const g=c=>{this.dispatch(c),t(":"),n.excludeValues||this.dispatch(e[c]),t(",")};for(const c of o)g(c);for(const c of p)g(c)}},array(e,a){if(a=a===void 0?n.unorderedArrays!==!1:a,t("array:"+e.length+":"),!a||e.length<=1){for(const l of e)this.dispatch(l);return}const i=new Map,u=e.map(l=>{const o=L(n);o.dispatch(l);for(const[p,g]of o.getContext())i.set(p,g);return o.toString()});return s=i,u.sort(),this.array(u,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),F(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const a=[...e];return this.array(a,n.unorderedSets!==!1)},set(e){t("set:");const a=[...e];return this.array(a,n.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const H="[native code] }",fe=H.length;function F(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-fe)===H}class b{constructor(r,s){r=this.words=r||[],this.sigBytes=s===void 0?r.length*4:s}toString(r){return(r||he).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new b([...this.words])}}const he={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},de={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,a=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,u=e<<16|a<<8|i;for(let l=0;l<4&&t*8+l*6<n.sigBytes*8;l++)s.push(r.charAt(u>>>6*(3-l)&63))}return s.join("")}},pe={parse(n){const r=n.length,s=[];for(let t=0;t<r;t++)s[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new b(s,r)}},ye={parse(n){return pe.parse(unescape(encodeURIComponent(n)))}};class ge{constructor(){this._data=new b,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new b,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=ye.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,e),this._data.sigBytes-=a}return new b(s,a)}}class me extends ge{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const N=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],_e=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class ve extends me{constructor(){super(...arguments),this._hash=new b([...N])}reset(){super.reset(),this._hash=new b([...N])}_doProcessBlock(r,s){const t=this._hash.words;let e=t[0],a=t[1],i=t[2],u=t[3],l=t[4],o=t[5],p=t[6],g=t[7];for(let c=0;c<64;c++){if(c<16)B[c]=r[s+c]|0;else{const x=B[c-15],_=(x<<25|x>>>7)^(x<<14|x>>>18)^x>>>3,C=B[c-2],v=(C<<15|C>>>17)^(C<<13|C>>>19)^C>>>10;B[c]=_+B[c-7]+v+B[c-16]}const w=l&o^~l&p,d=e&a^e&i^a&i,m=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),f=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),y=g+f+w+_e[c]+B[c],D=m+d;g=p,p=o,o=l,l=u+y|0,u=i,i=a,a=e,e=y+D|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+i|0,t[3]=t[3]+u|0,t[4]=t[4]+l|0,t[5]=t[5]+o|0,t[6]=t[6]+p|0,t[7]=t[7]+g|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function be(n){return new ve().finalize(n).toString(de)}function we(n,r={}){const s=typeof n=="string"?n:ce(n,r);return be(s).slice(0,10)}function xe(n,r,s){const[t={},e]=typeof r=="string"?[{},r]:[r,s],a=J(()=>{let v=n;return typeof v=="function"&&(v=v()),k(v)}),i=t.key||we([e,typeof a.value=="string"?a.value:"",...Be(t)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const u=i===e?"$f"+i:i;if(!t.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:o,default:p,transform:g,pick:c,watch:w,immediate:d,getCachedData:m,deep:f,...y}=t,D=Y({...X,...y,cache:typeof t.cache=="boolean"?void 0:t.cache}),x={server:l,lazy:o,default:p,transform:g,pick:c,immediate:d,getCachedData:m,deep:f,watch:w===!1?[]:[D,a,...w||[]]};let _;return oe(u,()=>{var z;(z=_==null?void 0:_.abort)==null||z.call(_),_=typeof AbortController<"u"?new AbortController:{};const v=k(t.timeout);return v&&setTimeout(()=>_.abort(),v),(t.$fetch||globalThis.$fetch)(a.value,{signal:_.signal,...D})},x)}function Be(n){var s;const r=[((s=k(n.method))==null?void 0:s.toUpperCase())||"GET",k(n.baseURL)];for(const t of[n.params||n.query]){const e=k(t);if(!e)continue;const a={},i=Array.isArray(e)?e:Object.entries(e);for(const[u,l]of i)a[k(u)]=k(l);r.push(a)}return r}const Se=""+globalThis.__publicAssetsURL("IcRoundDoneOutline.svg"),ke=""+globalThis.__publicAssetsURL("closeIcon.svg"),De=Q("user",{state:()=>({data:"",room:"",availableModal:!1,notAvailableModal:!1})});const Ce=h("div",{class:"h-[20vh] flex items-center justify-between gap-[2vh] bg-blue-950 px-[4vw]"},[h("h2",{class:"text-yellow-100 text-[4vh]"},"Riz Carlton"),h("span",{class:"text-[#ffffff61] tracking-widest"},"BOOKING")],-1),Oe={class:"h-[80vh] w-screen max-[800px]:flex-col max-[800px]:gap-[5vh] flex items-center justify-center bg-blue-900"},Re={class:"text-white"},Ae=h("br",null,null,-1),Me={class:"max-[800px]:flex-col max-[800px]:gap-[8vh] flex justify-evenly w-[40%] text-[#fffffc]",method:"POST"},ze=h("option",{value:"TRV"},"The Riz Villa",-1),Pe=h("option",{value:"TRO"},"The Royal Orchid",-1),Te=[ze,Pe],Ue=h("div",{class:"h-full w-[75%] flex items-center pr-[10%] text-yellow-50"},[h("span",null,"Your Room is Available")],-1),je=h("div",{class:"h-full w-[75%] flex items-center pr-[10%] text-yellow-50"},[h("span",null,"Sorry, Not Available")],-1),Le={__name:"index",setup(n){const r=De();function s(){r.availableModal=!1,r.notAvailableModal=!1}async function t(){s();try{const e=await xe("https://nuxtbooking.vercel.app/api/users",{method:"POST",body:{room:r.room},server:!1},"$PslAyef5YX");if(r.data=e,e.data._value==="ERR404"){alert("please select a room to check");return}e.data._value?r.availableModal=!0:r.notAvailableModal=!0}catch(e){console.log("🔴",e)}}return(e,a)=>{const i=Z("UModal");return ie(),ee(ne,null,[Ce,h("div",Oe,[h("p",Re,[te(" →   "+se(S(r).room===""?"Please select a room":S(r).room==="TRV"?"The Riz Villa":"The Royal Orchid")+" ",1),Ae]),h("form",Me,[M(h("select",{class:"bg-inherit border-b-2","onUpdate:modelValue":a[0]||(a[0]=u=>S(r).room=u)},Te,512),[[re,S(r).room]]),h("button",{class:"bg-blue-400 text-yellow-100 py-[2vh] px-[4vw] hover:bg-blue-500 hover:scale-[.9] duration-150 ease-in-out rounded-md",onClick:ae(t,["prevent"])}," Check ")]),M(O(U,null,{default:R(()=>[O(i,{class:"absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-green-500 right-0 top-[20vh] rounded-md flex justify-evenly"},{default:R(()=>[h("div",{class:"h-full w-[25%] flex items-center pl-[10%]"},[h("img",{onClick:s,src:Se,class:"h-[40%]",alt:"done"})]),Ue]),_:1})]),_:1},512),[[T,S(r).availableModal]]),M(O(U,null,{default:R(()=>[O(i,{class:"absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-red-500 right-0 top-[20vh] rounded-md flex justify-evenly"},{default:R(()=>[h("div",{class:"h-full w-[25%] flex items-center pl-[10%]"},[h("img",{onClick:s,src:ke,class:"h-[40%]",alt:"done"})]),je]),_:1})]),_:1},512),[[T,S(r).notAvailableModal]])])],64)}}};export{Le as default};
