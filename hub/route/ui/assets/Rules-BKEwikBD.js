import{A as $,a_ as ye,a$ as xe,b0 as ie,q as ee,an as Ie,o as j,p as Ee,ao as Se,b1 as Oe,b2 as Ce,b as Ae,y as we,u as Me,b3 as Te,D as le,d as A,i as y,g as z,Y as ze,Z as X,F as Re,B as oe,S as W,f as G,a9 as J,t as U,l as _e}from"./index-BNWZoS7C.js";import{D as ke}from"./DocumentTitle-DoomuBUS.js";import{f as Pe}from"./time-BGRBoeNM.js";import{I as ae}from"./IconReload-KRBqDKbI.js";const $e=()=>{const[n,r]=$([]),[e,t]=$([]),s=async()=>{const[{rules:l},{providers:a}]=await Promise.all([ye(),xe()]);r(Object.values(l)),t(Object.values(a))};return{rules:n,ruleProviders:e,updateRules:s,updateAllRuleProvider:async()=>{await Promise.all(e().map(l=>ie(l.name))),await s()},updateRuleProviderByName:async l=>{await ie(l),await s()}}};function P(n,r,e){let t=e.initialDeps??[],s;return()=>{var i,o,l,a;let u;e.key&&((i=e.debug)!=null&&i.call(e))&&(u=Date.now());const c=n();if(!(c.length!==t.length||c.some((b,f)=>t[f]!==b)))return s;t=c;let p;if(e.key&&((o=e.debug)!=null&&o.call(e))&&(p=Date.now()),s=r(...c),e.key&&((l=e.debug)!=null&&l.call(e))){const b=Math.round((Date.now()-u)*100)/100,f=Math.round((Date.now()-p)*100)/100,w=f/16,E=(S,T)=>{for(S=String(S);S.length<T;)S=" "+S;return S};console.info(`%c⏱ ${E(f,5)} /${E(b,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*w,120))}deg 100% 31%);`,e==null?void 0:e.key)}return(a=e==null?void 0:e.onChange)==null||a.call(e,s),s}}function Z(n,r){if(n===void 0)throw new Error("Unexpected undefined");return n}const Ue=(n,r)=>Math.abs(n-r)<1,Ve=(n,r,e)=>{let t;return function(...s){n.clearTimeout(t),t=n.setTimeout(()=>r.apply(this,s),e)}},Ne=n=>n,Fe=n=>{const r=Math.max(n.startIndex-n.overscan,0),e=Math.min(n.endIndex+n.overscan,n.count-1),t=[];for(let s=r;s<=e;s++)t.push(s);return t},De=(n,r)=>{const e=n.scrollElement;if(!e)return;const t=n.targetWindow;if(!t)return;const s=o=>{const{width:l,height:a}=o;r({width:Math.round(l),height:Math.round(a)})};if(s(e.getBoundingClientRect()),!t.ResizeObserver)return()=>{};const i=new t.ResizeObserver(o=>{const l=o[0];if(l!=null&&l.borderBoxSize){const a=l.borderBoxSize[0];if(a){s({width:a.inlineSize,height:a.blockSize});return}}s(e.getBoundingClientRect())});return i.observe(e,{box:"border-box"}),()=>{i.unobserve(e)}},ce={passive:!0},We=typeof window>"u"?!0:"onscrollend"in window,je=(n,r)=>{const e=n.scrollElement;if(!e)return;const t=n.targetWindow;if(!t)return;let s=0;const i=n.options.useScrollendEvent&&We?()=>{}:Ve(t,()=>{r(s,!1)},n.options.isScrollingResetDelay),o=u=>()=>{const{horizontal:c,isRtl:h}=n.options;s=c?e.scrollLeft*(h&&-1||1):e.scrollTop,i(),r(s,u)},l=o(!0),a=o(!1);return a(),e.addEventListener("scroll",l,ce),e.addEventListener("scrollend",a,ce),()=>{e.removeEventListener("scroll",l),e.removeEventListener("scrollend",a)}},He=(n,r,e)=>{if(r!=null&&r.borderBoxSize){const t=r.borderBoxSize[0];if(t)return Math.round(t[e.options.horizontal?"inlineSize":"blockSize"])}return Math.round(n.getBoundingClientRect()[e.options.horizontal?"width":"height"])},Be=(n,{adjustments:r=0,behavior:e},t)=>{var s,i;const o=n+r;(i=(s=t.scrollElement)==null?void 0:s.scrollTo)==null||i.call(s,{[t.options.horizontal?"left":"top"]:o,behavior:e})};class Ke{constructor(r){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null;const t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(s=>{s.forEach(i=>{this._measureElement(i.target,i)})}));return{disconnect:()=>{var s;(s=t())==null||s.disconnect(),e=null},observe:s=>{var i;return(i=t())==null?void 0:i.observe(s,{box:"border-box"})},unobserve:s=>{var i;return(i=t())==null?void 0:i.unobserve(s)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([t,s])=>{typeof s>"u"&&delete e[t]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Ne,rangeExtractor:Fe,onChange:()=>{},measureElement:He,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!0,...e}},this.notify=e=>{var t,s;(s=(t=this.options).onChange)==null||s.call(t,this,e)},this.maybeNotify=P(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;const t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t){this.maybeNotify();return}this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((e=this.scrollElement)==null?void 0:e.window)??null,this.elementsCache.forEach(s=>{this.observer.observe(s)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,s=>{this.scrollRect=s,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(s,i)=>{this.scrollAdjustments=0,this.scrollDirection=i?this.getScrollOffset()<s?"forward":"backward":null,this.scrollOffset=s,this.isScrolling=i,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{const s=new Map,i=new Map;for(let o=t-1;o>=0;o--){const l=e[o];if(s.has(l.lane))continue;const a=i.get(l.lane);if(a==null||l.end>a.end?i.set(l.lane,l):l.end<a.end&&s.set(l.lane,!0),s.size===this.options.lanes)break}return i.size===this.options.lanes?Array.from(i.values()).sort((o,l)=>o.end===l.end?o.index-l.index:o.end-l.end)[0]:void 0},this.getMeasurementOptions=P(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,t,s,i,o)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:s,getItemKey:i,enabled:o}),{key:!1}),this.getMeasurements=P(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:t,scrollMargin:s,getItemKey:i,enabled:o},l)=>{if(!o)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(c=>{this.itemSizeCache.set(c.key,c.size)}));const a=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const u=this.measurementsCache.slice(0,a);for(let c=a;c<e;c++){const h=i(c),p=this.options.lanes===1?u[c-1]:this.getFurthestMeasurement(u,c),b=p?p.end+this.options.gap:t+s,f=l.get(h),w=typeof f=="number"?f:this.options.estimateSize(c),E=b+w,S=p?p.lane:c%this.options.lanes;u[c]={index:c,start:b,size:w,end:E,key:h,lane:S}}return this.measurementsCache=u,u},{key:!1,debug:()=>this.options.debug}),this.calculateRange=P(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(e,t,s)=>this.range=e.length>0&&t>0?Le({measurements:e,outerSize:t,scrollOffset:s}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=P(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(e,t,s,i)=>t===null?[]:e({startIndex:t.startIndex,endIndex:t.endIndex,overscan:s,count:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const t=this.options.indexAttribute,s=e.getAttribute(t);return s?parseInt(s,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this._measureElement=(e,t)=>{const s=this.indexFromElement(e),i=this.measurementsCache[s];if(!i)return;const o=i.key,l=this.elementsCache.get(o);l!==e&&(l&&this.observer.unobserve(l),this.observer.observe(e),this.elementsCache.set(o,e)),e.isConnected&&this.resizeItem(s,this.options.measureElement(e,t,this))},this.resizeItem=(e,t)=>{const s=this.measurementsCache[e];if(!s)return;const i=this.itemSizeCache.get(s.key)??s.size,o=t-i;o!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(s,o,this):s.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=o,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(s.index),this.itemSizeCache=new Map(this.itemSizeCache.set(s.key,t)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((t,s)=>{t.isConnected||(this.observer.unobserve(t),this.elementsCache.delete(s))});return}this._measureElement(e,void 0)},this.getVirtualItems=P(()=>[this.getIndexes(),this.getMeasurements()],(e,t)=>{const s=[];for(let i=0,o=e.length;i<o;i++){const l=e[i],a=t[l];s.push(a)}return s},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const t=this.getMeasurements();if(t.length!==0)return Z(t[pe(0,t.length-1,s=>Z(t[s]).start,e)])},this.getOffsetForAlignment=(e,t)=>{const s=this.getSize(),i=this.getScrollOffset();t==="auto"&&(e<=i?t="start":e>=i+s?t="end":t="start"),t==="start"?e=e:t==="end"?e=e-s:t==="center"&&(e=e-s/2);const o=this.options.horizontal?"scrollWidth":"scrollHeight",a=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[o]:this.scrollElement[o]:0)-s;return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const s=this.measurementsCache[e];if(!s)return;const i=this.getSize(),o=this.getScrollOffset();if(t==="auto")if(s.end>=o+i-this.options.scrollPaddingEnd)t="end";else if(s.start<=o+this.options.scrollPaddingStart)t="start";else return[o,t];const l=t==="end"?s.end+this.options.scrollPaddingEnd:s.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(l,t),t]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:t="start",behavior:s}={})=>{this.cancelScrollToIndex(),s==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,t),{adjustments:void 0,behavior:s})},this.scrollToIndex=(e,{align:t="auto",behavior:s}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),s==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const i=this.getOffsetForIndex(e,t);if(!i)return;const[o,l]=i;this._scrollToOffset(o,{adjustments:void 0,behavior:s}),s!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(e))){const[u]=Z(this.getOffsetForIndex(e,l));Ue(u,this.getScrollOffset())||this.scrollToIndex(e,{align:l,behavior:s})}else this.scrollToIndex(e,{align:l,behavior:s})}))},this.scrollBy=(e,{behavior:t}={})=>{this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:t})},this.getTotalSize=()=>{var e;const t=this.getMeasurements();let s;return t.length===0?s=this.options.paddingStart:s=this.options.lanes===1?((e=t[t.length-1])==null?void 0:e.end)??0:Math.max(...t.slice(-this.options.lanes).map(i=>i.end)),Math.max(s-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:t,behavior:s})=>{this.options.scrollToFn(e,{behavior:s,adjustments:t},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(r)}}const pe=(n,r,e,t)=>{for(;n<=r;){const s=(n+r)/2|0,i=e(s);if(i<t)n=s+1;else if(i>t)r=s-1;else return s}return n>0?n-1:0};function Le({measurements:n,outerSize:r,scrollOffset:e}){const t=n.length-1,i=pe(0,t,l=>n[l].start,e);let o=i;for(;o<t&&n[o].end<e+r;)o++;return{startIndex:i,endIndex:o}}function Ye(n){const r=ee(n),e=new Ke(r),[t,s]=Ie(e.getVirtualItems()),[i,o]=$(e.getTotalSize()),l={get(u,c){switch(c){case"getVirtualItems":return()=>t;case"getTotalSize":return()=>i();default:return Reflect.get(u,c)}}},a=new Proxy(e,l);return a.setOptions(r),j(()=>{const u=a._didMount();a._willUpdate(),Ee(u)}),Se(()=>{a.setOptions(ee(r,n,{onChange:(u,c)=>{var h;u._willUpdate(),s(Oe(u.getVirtualItems(),{key:"index"})),o(u.getTotalSize()),(h=n.onChange)==null||h.call(n,u,c)}})),a.measure()}),a}function ue(n){return Ye(ee({observeElementRect:De,observeElementOffset:je,scrollToFn:Be},n))}var V={exports:{}},he;function qe(){if(he)return V.exports;he=1;var n={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},r=Object.keys(n).join("|"),e=new RegExp(r,"g"),t=new RegExp(r,"");function s(l){return n[l]}var i=function(l){return l.replace(e,s)},o=function(l){return!!l.match(t)};return V.exports=i,V.exports.has=o,V.exports.remove=i,V.exports}var Qe=qe();const Xe=Ce(Qe);/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2020 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const x={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},Ge=(n,r)=>String(n.rankedValue).localeCompare(String(r.rankedValue));function te(n,r,e){e===void 0&&(e={});const{keys:t,threshold:s=x.MATCHES,baseSort:i=Ge,sorter:o=u=>u.sort((c,h)=>tt(c,h,i))}=e,l=n.reduce(a,[]);return o(l).map(u=>{let{item:c}=u;return c});function a(u,c,h){const p=Je(c,t,r,e),{rank:b,keyThreshold:f=s}=p;return b>=f&&u.push({...p,item:c,index:h}),u}}te.rankings=x;function Je(n,r,e,t){if(!r){const i=n;return{rankedValue:i,rank:de(i,e,t),keyIndex:-1,keyThreshold:t.threshold}}return rt(n,r).reduce((i,o,l)=>{let{rank:a,rankedValue:u,keyIndex:c,keyThreshold:h}=i,{itemValue:p,attributes:b}=o,f=de(p,e,t),w=u;const{minRanking:E,maxRanking:S,threshold:T}=b;return f<E&&f>=x.MATCHES?f=E:f>S&&(f=S),f>a&&(a=f,c=l,h=T,w=p),{rankedValue:w,rank:a,keyIndex:c,keyThreshold:h}},{rankedValue:n,rank:x.NO_MATCH,keyIndex:-1,keyThreshold:t.threshold})}function de(n,r,e){return n=fe(n,e),r=fe(r,e),r.length>n.length?x.NO_MATCH:n===r?x.CASE_SENSITIVE_EQUAL:(n=n.toLowerCase(),r=r.toLowerCase(),n===r?x.EQUAL:n.startsWith(r)?x.STARTS_WITH:n.includes(` ${r}`)?x.WORD_STARTS_WITH:n.includes(r)?x.CONTAINS:r.length===1?x.NO_MATCH:Ze(n).includes(r)?x.ACRONYM:et(n,r))}function Ze(n){let r="";return n.split(" ").forEach(t=>{t.split("-").forEach(i=>{r+=i.substr(0,1)})}),r}function et(n,r){let e=0,t=0;function s(a,u,c){for(let h=c,p=u.length;h<p;h++)if(u[h]===a)return e+=1,h+1;return-1}function i(a){const u=1/a,c=e/r.length;return x.MATCHES+c*u}const o=s(r[0],n,0);if(o<0)return x.NO_MATCH;t=o;for(let a=1,u=r.length;a<u;a++){const c=r[a];if(t=s(c,n,t),!(t>-1))return x.NO_MATCH}const l=t-o;return i(l)}function tt(n,r,e){const{rank:i,keyIndex:o}=n,{rank:l,keyIndex:a}=r;return i===l?o===a?e(n,r):o<a?-1:1:i>l?-1:1}function fe(n,r){let{keepDiacritics:e}=r;return n=`${n}`,e||(n=Xe(n)),n}function st(n,r){typeof r=="object"&&(r=r.key);let e;if(typeof r=="function")e=r(n);else if(n==null)e=null;else if(Object.hasOwnProperty.call(n,r))e=n[r];else{if(r.includes("."))return nt(r,n);e=null}return e==null?[]:Array.isArray(e)?e:[String(e)]}function nt(n,r){const e=n.split(".");let t=[r];for(let s=0,i=e.length;s<i;s++){const o=e[s];let l=[];for(let a=0,u=t.length;a<u;a++){const c=t[a];if(c!=null)if(Object.hasOwnProperty.call(c,o)){const h=c[o];h!=null&&l.push(h)}else o==="*"&&(l=l.concat(c))}t=l}return Array.isArray(t[0])?[].concat(...t):t}function rt(n,r){const e=[];for(let t=0,s=r.length;t<s;t++){const i=r[t],o=it(i),l=st(n,i);for(let a=0,u=l.length;a<u;a++)e.push({itemValue:l[a],attributes:o})}return e}const me={maxRanking:1/0,minRanking:-1/0};function it(n){return typeof n=="string"?me:{...me,...n}}var ge=U("<div class=relative>"),lt=U('<div class="flex h-full flex-col gap-2"><div class="flex w-full flex-wrap items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class="join flex flex-1 items-center"><input class="input input-sm join-item input-primary min-w-0 flex-1"type=search></div></div><div class="flex-1 overflow-y-auto">'),ot=U('<button><span></span><div class="badge badge-sm">'),at=U('<div class="badge badge-sm">'),ct=U('<div class="absolute inset-x-0 top-0 pb-2 last:pb-0"><div class="card card-bordered card-compact bg-base-200 p-4"><div class="flex items-center gap-2"><span class=break-all></span></div><div class="text-xs text-slate-500">'),ut=U('<div class="absolute inset-x-0 top-0 pb-2 last:pb-0"><div class="card card-bordered card-compact bg-base-200 p-4"><div class="flex items-center gap-2 pr-8"><span class=break-all></span><div class="badge badge-sm"></div></div><div class="text-xs text-slate-500">');const gt=()=>{const n=Ae();if(!we())return n("/setup",{replace:!0}),null;const[r]=Me(),{rules:e,ruleProviders:t,updateRules:s,updateAllRuleProvider:i,updateRuleProviderByName:o}=$e();j(s);const{map:l,setWithCallback:a}=Te(),[u,c]=$(!1),h=(I,M)=>{I.stopPropagation(),a(M,()=>o(M))},p=async I=>{I.stopPropagation(),c(!0);try{await i()}catch{}c(!1)},[b,f]=$("rules"),w=()=>[{type:"rules",name:r("rules"),count:e().length},{type:"ruleProviders",name:r("ruleProviders"),count:t().length}],[E,S]=$(""),T=le(()=>E()?te(e(),E(),{keys:["type","payload","type"]}):e()),se=le(()=>E()?te(t(),E(),{keys:["name","vehicleType","behavior"]}):t());let H;const ne=({type:I,payload:M,proxy:R})=>`${I}-${M}-${R}`,B=ue({get count(){return T().length},getItemKey:I=>ne(T()[I]),getScrollElement:()=>H,estimateSize:()=>82,overscan:5}),ve=B.getVirtualItems(),re=({type:I,name:M,vehicleType:R,behavior:N})=>`${I}-${M}-${R}-${N}`,K=ue({get count(){return se().length},getItemKey:I=>re(se()[I]),getScrollElement:()=>H,estimateSize:()=>82,overscan:5}),be=K.getVirtualItems();return[A(ke,{get children(){return r("rules")}}),(()=>{var I=lt(),M=I.firstChild,R=M.firstChild,N=R.nextSibling,L=N.firstChild,Y=M.nextSibling;return y(R,A(Re,{get each(){return w()},children:d=>(()=>{var g=ot(),v=g.firstChild,m=v.nextSibling;return g.$$click=()=>f(d.type),y(v,()=>d.name),y(m,()=>d.count),z(()=>ze(g,X(b()===d.type&&"tab-active","tab-sm md:tab-md tab gap-2 px-2"))),g})()})),L.$$input=d=>S(d.currentTarget.value),y(N,A(W,{get when(){return b()==="ruleProviders"},get children(){return A(oe,{class:"btn btn-primary join-item btn-sm",get disabled(){return u()},onClick:d=>p(d),get icon(){return A(ae,{get class(){return X(u()&&"animate-spin text-success")}})}})}}),null),G(d=>H=d,Y),y(Y,A(W,{get when(){return b()==="rules"},get children(){var d=ge();return y(d,()=>ve.map(g=>{const v=T().find(m=>ne(m)===g.key);return(()=>{var m=ct(),F=m.firstChild,_=F.firstChild,D=_.firstChild,q=_.nextSibling;return G(O=>j(()=>B.measureElement(O)),m),y(D,()=>v.payload),y(_,A(W,{get when(){return v.size!==-1},get children(){var O=at();return y(O,()=>v.size),O}}),null),y(q,()=>`${v.type} :: ${v.proxy}`),z(O=>{var C=g.index,k=`translateY(${g.start}px)`;return C!==O.e&&J(m,"data-index",O.e=C),k!==O.t&&((O.t=k)!=null?m.style.setProperty("transform",k):m.style.removeProperty("transform")),O},{e:void 0,t:void 0}),m})()})),z(g=>(g=`${B.getTotalSize()}px`)!=null?d.style.setProperty("height",g):d.style.removeProperty("height")),d}}),null),y(Y,A(W,{get when(){return b()==="ruleProviders"},get children(){var d=ge();return y(d,()=>be.map(g=>{const v=t().find(m=>re(m)===g.key);return(()=>{var m=ut(),F=m.firstChild,_=F.firstChild,D=_.firstChild,q=D.nextSibling,O=_.nextSibling;return G(C=>j(()=>K.measureElement(C)),m),y(D,()=>v.name),y(q,()=>v.ruleCount),y(O,()=>`${v.vehicleType} / ${v.behavior} / ${r("updated")} ${Pe(v.updatedAt)}`),y(F,A(oe,{class:"btn-circle btn-sm absolute right-2 top-2 mr-2 h-4",get disabled(){return l()[v.name]},onClick:C=>h(C,v.name),get icon(){return A(ae,{get class(){return X(l()[v.name]&&"animate-spin text-success")}})}}),null),z(C=>{var k=g.index,Q=`translateY(${g.start}px)`;return k!==C.e&&J(m,"data-index",C.e=k),Q!==C.t&&((C.t=Q)!=null?m.style.setProperty("transform",Q):m.style.removeProperty("transform")),C},{e:void 0,t:void 0}),m})()})),z(g=>(g=`${K.getTotalSize()}px`)!=null?d.style.setProperty("height",g):d.style.removeProperty("height")),d}}),null),z(()=>J(L,"placeholder",r("search"))),z(()=>L.value=E()),I})()]};_e(["input","click"]);export{gt as default};
