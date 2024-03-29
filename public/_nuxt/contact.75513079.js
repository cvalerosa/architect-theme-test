import{p as K,e as H,o as S,f as N,d as m,g as W,h as oe,w as Be,v as Ve,i as _e,m as ke,j as q,k as _,l as j,n as O,q as re,s as B,u as ie,x,y as D,C as we,z as P,A as Ce,_ as be,B as Re,b as xe,D as Ze,r as w,c as Q,E as v,a as k,G as M,t as X,I as Ae,J as De}from"./entry.0d7e4615.js";import{T as Ue,C as Fe,H as Ge}from"./Hidden.39677ca9.js";let V=Symbol("map"),R=Symbol("api"),Me=Symbol("marker"),Se=Symbol("markerCluster"),U=Symbol("CustomMarker"),Oe=Symbol("mapTilesLoaded"),Ie="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var Ke=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(o=i;o--!==0;)if(!r(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(o=i;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[o]))return!1;for(o=i;o--!==0;)if(i=s[o],!r(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};class I{constructor({apiKey:e,channel:t,client:o,id:i="__googleMapsScriptId",libraries:s=[],language:l,region:n,version:p,mapIds:u,nonce:a,retries:d=3,url:c="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=p,this.apiKey=e,this.channel=t,this.client=o,this.id=i||"__googleMapsScriptId",this.libraries=s,this.language=l,this.region=n,this.mapIds=u,this.nonce=a,this.retries=d,this.url=c,I.instance){if(!Ke(this.options,I.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(I.instance.options)}`);return I.instance}I.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(o=>{o?t(o.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function He(r){return class extends r.OverlayView{constructor(e){super();let{element:t,...o}=e;this.element=t,this.opts=o,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof r.LatLng?this.opts.position:new r.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||.01<Number(e.style.opacity))}onAdd(){if(this.element){var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var e=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(e){this.element.style.position="absolute";let o=this.element.offsetHeight;var t=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":t=e.x-t/2,e=e.y;break;case"BOTTOM_CENTER":t=e.x-t/2,e=e.y-o;break;case"LEFT_CENTER":t=e.x,e=e.y-o/2;break;case"RIGHT_CENTER":t=e.x-t,e=e.y-o/2;break;case"TOP_LEFT":t=e.x,e=e.y;break;case"TOP_RIGHT":t=e.x-t,e=e.y;break;case"BOTTOM_LEFT":t=e.x,e=e.y-o;break;case"BOTTOM_RIGHT":t=e.x-t,e=e.y-o;break;default:t=e.x-t/2,e=e.y-o/2}this.element.style.left=t+"px",this.element.style.top=e+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(e){this.opts=e,this.draw()}}}let de,pe="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var se=q({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:pe,setup(r,{emit:e}){let t=_(),o=_(!1),i=_(),s=_(),l=_(!1);j(V,i),j(R,s),j(Oe,l);let n=()=>{const a={...r};Object.keys(a).forEach(c=>{a[c]===void 0&&delete a[c]});var d=c=>{var h;return c?{position:(h=s.value)===null||h===void 0?void 0:h.ControlPosition[c]}:{}};return d={scaleControlOptions:r.scaleControlStyle?{style:r.scaleControlStyle}:{},panControlOptions:d(r.panControlPosition),zoomControlOptions:d(r.zoomControlPosition),rotateControlOptions:d(r.rotateControlPosition),streetViewControlOptions:d(r.streetViewControlPosition),fullscreenControlOptions:d(r.fullscreenControlPosition),disableDefaultUI:r.disableDefaultUi},{...a,...d}},p=O([s,i],([a,d])=>{a&&d&&(a.event.addListenerOnce(d,"tilesloaded",()=>{l.value=!0}),setTimeout(p,0))},{immediate:!0}),u=a=>{s.value=P(a.maps),i.value=P(new a.maps.Map(t.value,n())),a=He(s.value),s.value[U]=a,pe.forEach(d=>{var c;(c=i.value)===null||c===void 0||c.addListener(d,h=>e(d,h))}),o.value=!0,a=Object.keys(r).filter(d=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(d)).map(d=>Ce(r,d)),O([()=>r.center,()=>r.zoom,...a],([d,c],[h,g])=>{var f,y,b;const{center:Z,zoom:E,...J}=n();(f=i.value)===null||f===void 0||f.setOptions(J),c!==void 0&&c!==g&&((y=i.value)===null||y===void 0||y.setZoom(c)),c=!h||d.lng!==h.lng||d.lat!==h.lat,d&&c&&((b=i.value)===null||b===void 0||b.panTo(d))})};return re(()=>{if(r.apiPromise&&r.apiPromise instanceof Promise)r.apiPromise.then(u);else{try{const{apiKey:a,region:d,version:c,language:h,libraries:g}=r;de=new I({apiKey:a,region:d,version:c,language:h,libraries:g})}catch(a){console.error(a)}de.load().then(u)}}),B(()=>{var a;l.value=!1,i.value&&((a=s.value)===null||a===void 0||a.event.clearInstanceListeners(i.value))}),{mapRef:t,ready:o,map:i,api:s,mapTilesLoaded:l}}});function ne(r,e){if(e===void 0&&(e={}),e=e.insertAt,r&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r))}}ne(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let We=ie();K("data-v-177d06e3");let Je={ref:"mapRef",class:"mapdiv"};H();let Xe=We(r=>(S(),N("div",null,[m("div",Je,null,512),W(r.$slots,"default",{ready:r.ready,map:r.map,api:r.api,mapTilesLoaded:r.mapTilesLoaded},void 0,!0)])));se.render=Xe;se.__scopeId="data-v-177d06e3";var F=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(o=i;o--!==0;)if(!r(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(o=i;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[o]))return!1;for(o=i;o--!==0;)if(i=s[o],!r(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};let Pe=(r,e,t,o)=>{const i=_(),s=x(V,_()),l=x(R,_()),n=x(Se,_()),p=D(()=>!!(n.value&&l.value&&(i.value instanceof l.value.Marker||i.value instanceof l.value[U])));return O([s,t],(u,[a,d])=>{var c,h,g;u=!F(t.value,d)||s.value!==a,s.value&&l.value&&u&&(i.value?(i.value.setOptions(t.value),p.value&&((c=n.value)===null||c===void 0||c.removeMarker(i.value),(h=n.value)===null||h===void 0||h.addMarker(i.value))):(i.value=r==="Marker"?P(new l.value[r](t.value)):r===U?P(new l.value[r](t.value)):P(new l.value[r]({...t.value,map:s.value})),p.value?(g=n.value)===null||g===void 0||g.addMarker(i.value):i.value.setMap(s.value),e.forEach(f=>{var y;(y=i.value)===null||y===void 0||y.addListener(f,b=>o(f,b))})))},{immediate:!0}),B(()=>{var u,a;i.value&&((u=l.value)===null||u===void 0||u.event.clearInstanceListeners(i.value),p.value?(a=n.value)===null||a===void 0||a.removeMarker(i.value):i.value.setMap(null))}),i},ce="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var Ye=q({name:"Marker",props:{options:{type:Object,required:!0}},emits:ce,setup(r,{emit:e,expose:t,slots:o}){return r=Ce(r,"options"),e=Pe("Marker",ce,r,e),j(Me,e),t({marker:e}),()=>{var i;return(i=o.default)===null||i===void 0?void 0:i.call(o)}}});Ie.concat(["bounds_changed"]);Ie.concat(["center_changed","radius_changed"]);var Qe=q({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(r,{emit:e}){let t=_(null),o=x(V,_()),i=x(R,_()),s=x(Oe,_(!1)),l=_(!1),n=O([s,i,t],([a,d,c])=>{d&&a&&c&&(p(r.position),l.value=!0,e("content:loaded"),setTimeout(n,0))},{immediate:!0}),p=a=>{o.value&&i.value&&t.value&&o.value.controls[i.value.ControlPosition[a]].push(t.value)},u=a=>{if(o.value&&i.value){let d=null;a=i.value.ControlPosition[a],o.value.controls[a].forEach((c,h)=>{c===t.value&&(d=h)}),d!==null&&o.value.controls[a].removeAt(d)}};return B(()=>u(r.position)),O(()=>r.position,(a,d)=>{u(d),p(a)}),O(()=>r.index,a=>{a&&t.value&&(t.value.index=r.index)}),{controlRef:t,showContent:l}}});let et={ref:"controlRef"};Qe.render=function(r){return S(),N(_e,null,[oe(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),Be(m("div",et,[W(r.$slots,"default")],512),[[Ve,r.showContent]])],2112)};let me="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var le=q({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:me,setup(r,{slots:e,emit:t}){let o=_(),i=_(),s=x(V,_()),l=x(R,_()),n=x(Me,_()),p,u=D(()=>{var a;return(a=e.default)===null||a===void 0?void 0:a.call(e).some(d=>d.type!==we)});return re(()=>{O([s,()=>r.options],([,a],[d,c])=>{d=!F(a,c)||s.value!==d,s.value&&l.value&&d&&(o.value?(o.value.setOptions({...a,content:u.value?i.value:a.content}),n.value||o.value.open({map:s.value})):(o.value=P(new l.value.InfoWindow({...a,content:u.value?i.value:a.content})),n.value?p=n.value.addListener("click",()=>{o.value&&o.value.open({map:s.value,anchor:n.value})}):o.value.open({map:s.value}),me.forEach(h=>{var g;(g=o.value)===null||g===void 0||g.addListener(h,f=>t(h,f))})))},{immediate:!0})}),B(()=>{var a;p&&p.remove(),o.value&&((a=l.value)===null||a===void 0||a.event.clearInstanceListeners(o.value),o.value.close())}),{infoWindow:o,infoWindowRef:i,hasSlotContent:u}}});ne(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let tt=ie();K("data-v-5b373d6e");let ot={key:0,class:"info-window-wrapper"};H();let rt=tt(r=>r.hasSlotContent?(S(),N("div",ot,[m("div",ke({ref:"infoWindowRef"},r.$attrs),[W(r.$slots,"default",{},void 0,!0)],16)])):oe("v-if",!0));le.render=rt;le.__scopeId="data-v-5b373d6e";function ee(r,e,t,o,i,s){if(!(i-o<=t)){var l=o+i>>1;Ee(r,e,l,o,i,s%2),ee(r,e,t,o,l-1,s+1),ee(r,e,t,l+1,i,s+1)}}function Ee(r,e,t,o,i,s){for(;i>o;){if(600<i-o){var l=i-o+1,n=t-o+1,p=Math.log(l),u=.5*Math.exp(2*p/3);p=.5*Math.sqrt(p*u*(l-u)/l)*(0>n-l/2?-1:1),Ee(r,e,t,Math.max(o,Math.floor(t-n*u/l+p)),Math.min(i,Math.floor(t+(l-n)*u/l+p)),s)}for(l=e[2*t+s],n=o,u=i,$(r,e,o,t),e[2*i+s]>l&&$(r,e,o,i);n<u;){for($(r,e,n,u),n++,u--;e[2*n+s]<l;)n++;for(;e[2*u+s]>l;)u--}e[2*o+s]===l?$(r,e,o,u):(u++,$(r,e,u,i)),u<=t&&(o=u+1),t<=u&&(i=u-1)}}function $(r,e,t,o){Y(r,t,o),Y(e,2*t,2*o),Y(e,2*t+1,2*o+1)}function Y(r,e,t){let o=r[e];r[e]=r[t],r[t]=o}let it=r=>r[0],st=r=>r[1];class he{constructor(e,t=it,o=st,i=64,s=Float64Array){this.nodeSize=i,this.points=e;let l=this.ids=new(65536>e.length?Uint16Array:Uint32Array)(e.length);s=this.coords=new s(2*e.length);for(let n=0;n<e.length;n++)l[n]=n,s[2*n]=t(e[n]),s[2*n+1]=o(e[n]);ee(l,s,i,0,l.length-1,0)}range(e,t,o,i){{var s=this.ids,l=this.coords,n=this.nodeSize;let u=[0,s.length-1,0],a=[],d,c;for(;u.length;){var p=u.pop();let h=u.pop(),g=u.pop();if(h-g<=n){for(p=g;p<=h;p++)d=l[2*p],c=l[2*p+1],d>=e&&d<=o&&c>=t&&c<=i&&a.push(s[p]);continue}let f=Math.floor((g+h)/2);d=l[2*f],c=l[2*f+1],d>=e&&d<=o&&c>=t&&c<=i&&a.push(s[f]);let y=(p+1)%2;(p===0?e<=d:t<=c)&&(u.push(g),u.push(f-1),u.push(y)),(p===0?o>=d:i>=c)&&(u.push(f+1),u.push(h),u.push(y))}e=a}return e}within(e,t,o){{var i=this.ids,s=this.coords,l=this.nodeSize;let d=[0,i.length-1,0],c=[],h=o*o;for(;d.length;){var n=d.pop();let g=d.pop();var p=d.pop();if(g-p<=l){for(n=p;n<=g;n++){p=s[2*n]-e;var u=s[2*n+1]-t;p=p*p+u*u,p<=h&&c.push(i[n])}continue}u=Math.floor((p+g)/2);let f=s[2*u],y=s[2*u+1];{var a=f-e;let b=y-t;a=a*a+b*b}a<=h&&c.push(i[u]),a=(n+1)%2,(n===0?e-o<=f:t-o<=y)&&(d.push(p),d.push(u-1),d.push(a)),(n===0?e+o>=f:t+o>=y)&&(d.push(u+1),d.push(g),d.push(a))}e=c}return e}}let nt={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:r=>r},G=Math.fround||(r=>e=>(r[0]=+e,r[0]))(new Float32Array(1));class lt{constructor(e){this.options=z(Object.create(nt),e),this.trees=Array(this.options.maxZoom+1)}load(e){let{log:t,minZoom:o,maxZoom:i,nodeSize:s}=this.options;t&&console.time("total time");var l=`prepare ${e.length} points`;t&&console.time(l),this.points=e;let n=[];for(let p=0;p<e.length;p++)e[p].geometry&&n.push(ut(e[p],p));for(this.trees[i+1]=new he(n,ge,fe,s,Float32Array),t&&console.timeEnd(l),e=i;e>=o;e--)l=+Date.now(),n=this._cluster(n,e),this.trees[e]=new he(n,ge,fe,s,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,n.length,+Date.now()-l);return t&&console.timeEnd("total time"),this}getClusters(e,t){let o=((e[0]+180)%360+360)%360-180;var i=Math.max(-90,Math.min(90,e[1])),s=e[2]===180?180:((e[2]+180)%360+360)%360-180;let l=Math.max(-90,Math.min(90,e[3]));if(360<=e[2]-e[0])o=-180,s=180;else if(o>s){var n=this.getClusters([o,i,180,l],t);return i=this.getClusters([-180,i,s,l],t),n.concat(i)}t=this.trees[this._limitZoom(t)],s=t.range(o/360+.5,A(l),s/360+.5,A(i)),i=[];for(n of s)s=t.points[n],i.push(s.numPoints?ve(s):this.points[s.index]);return i}getChildren(e){var t=this._getOriginId(e),o=this._getOriginZoom(e);let i=this.trees[o];if(!i||(t=i.points[t],!t))throw Error("No cluster with the specified id.");t=i.within(t.x,t.y,this.options.radius/(this.options.extent*Math.pow(2,o-1))),o=[];for(let s of t)t=i.points[s],t.parentId===e&&o.push(t.numPoints?ve(t):this.points[t.index]);if(o.length===0)throw Error("No cluster with the specified id.");return o}getLeaves(e,t,o){let i=[];return this._appendLeaves(i,e,t||10,o||0,0),i}getTile(e,t,o){let i=this.trees[this._limitZoom(e)];e=Math.pow(2,e);let{extent:s,radius:l}=this.options,n=l/s,p=(o-n)/e,u=(o+1+n)/e,a={features:[]};return this._addTileFeatures(i.range((t-n)/e,p,(t+1+n)/e,u),i.points,t,o,e,a),t===0&&this._addTileFeatures(i.range(1-n/e,p,1,u),i.points,e,o,e,a),t===e-1&&this._addTileFeatures(i.range(0,p,n/e,u),i.points,-1,o,e,a),a.features.length?a:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom&&(e=this.getChildren(e),t++,e.length===1);)e=e[0].properties.cluster_id;return t}_appendLeaves(e,t,o,i,s){t=this.getChildren(t);for(let l of t)if((t=l.properties)&&t.cluster?s=s+t.point_count<=i?s+t.point_count:this._appendLeaves(e,t.cluster_id,o,i,s):s<i?s++:e.push(l),e.length===o)break;return s}_addTileFeatures(e,t,o,i,s,l){for(let u of e){e=t[u];let a=e.numPoints;var n=void 0;let d;var p=void 0;a?(n=Le(e),d=e.x,p=e.y):(p=this.points[e.index],n=p.properties,d=p.geometry.coordinates[0]/360+.5,p=A(p.geometry.coordinates[1])),n={type:1,geometry:[[Math.round(this.options.extent*(d*s-o)),Math.round(this.options.extent*(p*s-i))]],tags:n};let c;a?c=e.id:this.options.generateId?c=e.index:this.points[e.index].id&&(c=this.points[e.index].id),c!==void 0&&(n.id=c),l.features.push(n)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){let o=[],{radius:i,extent:s,reduce:l,minPoints:n}=this.options,p=i/(s*Math.pow(2,t));for(let h=0;h<e.length;h++){var u=e[h];if(u.zoom<=t)continue;u.zoom=t;let g=this.trees[t+1];var a=g.within(u.x,u.y,p),d=u.numPoints||1;let f=d;for(let y of a){var c=g.points[y];c.zoom>t&&(f+=c.numPoints||1)}if(f>d&&f>=n){c=u.x*d;let y=u.y*d;d=l&&1<d?this._map(u,!0):null;let b=(h<<5)+(t+1)+this.points.length;for(let Z of a){if(a=g.points[Z],a.zoom<=t)continue;a.zoom=t;let E=a.numPoints||1;c+=a.x*E,y+=a.y*E,a.parentId=b,l&&(d||(d=this._map(u,!0)),l(d,this._map(a)))}u.parentId=b,o.push(at(c/f,y/f,b,f,d))}else if(o.push(u),1<f)for(let y of a)u=g.points[y],u.zoom<=t||(u.zoom=t,o.push(u))}return o}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?z({},e.properties):e.properties;e=this.points[e.index].properties;let o=this.options.map(e);return t&&o===e?z({},o):o}}function at(r,e,t,o,i){return{x:G(r),y:G(e),zoom:1/0,id:t,parentId:-1,numPoints:o,properties:i}}function ut(r,e){let[t,o]=r.geometry.coordinates;return{x:G(t/360+.5),y:G(A(o)),zoom:1/0,index:e,parentId:-1}}function ve(r){var e=r.id,t=Le(r);return{type:"Feature",id:e,properties:t,geometry:{type:"Point",coordinates:[360*(r.x-.5),360*Math.atan(Math.exp((180-360*r.y)*Math.PI/180))/Math.PI-90]}}}function Le(r){let e=r.numPoints,t=1e4<=e?`${Math.round(e/1e3)}k`:1e3<=e?`${Math.round(e/100)/10}k`:e;return z(z({},r.properties),{cluster:!0,cluster_id:r.id,point_count:e,point_count_abbreviated:t})}function A(r){return r=Math.sin(r*Math.PI/180),r=.5-.25*Math.log((1+r)/(1-r))/Math.PI,0>r?0:1<r?1:r}function z(r,e){for(let t in e)r[t]=e[t];return r}function ge(r){return r.x}function fe(r){return r.y}class te{constructor({markers:e,position:t}){this.markers=e,t&&(this._position=t instanceof google.maps.LatLng?t:new google.maps.LatLng(t))}get bounds(){if(this.markers.length!==0||this._position)return this.markers.reduce((e,t)=>e.extend(t.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>e.getVisible()).length}push(e){this.markers.push(e)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class dt{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return pt(e)}}let pt=r=>r.map(e=>new te({position:e.getPosition(),markers:[e]}));class ct extends dt{constructor(e){var{maxZoom:t,radius:o=60}=e,i=["maxZoom","radius"],s={},l;for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>i.indexOf(l)&&(s[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>i.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(s[l[n]]=e[l[n]])}super({maxZoom:t}),this.superCluster=new lt(Object.assign({maxZoom:this.maxZoom,radius:o},s)),this.state={zoom:null}}calculate(e){let t=!1;if(!F(e.markers,this.markers)){t=!0,this.markers=[...e.markers];var o=this.markers.map(i=>({type:"Feature",geometry:{type:"Point",coordinates:[i.getPosition().lng(),i.getPosition().lat()]},properties:{marker:i}}));this.superCluster.load(o)}return o={zoom:e.map.getZoom()},t||this.state.zoom>this.maxZoom&&o.zoom>this.maxZoom||(t=t||!F(this.state,o)),this.state=o,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[e,t]},properties:o}){return o.cluster?new te({markers:this.superCluster.getLeaves(o.cluster_id,1/0).map(i=>i.properties.marker),position:new google.maps.LatLng({lat:t,lng:e})}):(e=o.marker,new te({markers:[e],position:e.getPosition()}))}}class mt{constructor(e,t){this.markers={sum:e.length},e=t.map(i=>i.count);let o=e.reduce((i,s)=>i+s,0);this.clusters={count:t.length,markers:{mean:o/t.length,sum:o,min:Math.min(...e),max:Math.max(...e)}}}}class ht{render({count:e,position:t},o){return o=window.btoa(`
  <svg fill="${e>Math.max(10,o.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`),new google.maps.Marker({position:t,icon:{url:`data:image/svg+xml;base64,${o}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(e),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${e} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+e})}}class ae{constructor(){var e=ae,t=google.maps.OverlayView;for(let o in t.prototype)e.prototype[o]=t.prototype[o]}}var L,ue=L||(L={});ue.CLUSTERING_BEGIN="clusteringbegin";ue.CLUSTERING_END="clusteringend";ue.CLUSTER_CLICK="click";let vt=(r,e,t)=>{t.fitBounds(e.bounds)};class gt extends ae{constructor({map:e,markers:t=[],algorithm:o=new ct({}),renderer:i=new ht,onClusterClick:s=vt}){super(),this.markers=[...t],this.clusters=[],this.algorithm=o,this.renderer=i,this.onClusterClick=s,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(o=>{this.addMarker(o,!0)}),t||this.render()}removeMarker(e,t){let o=this.markers.indexOf(e);return o===-1?!1:(e.setMap(null),this.markers.splice(o,1),t||this.render(),!0)}removeMarkers(e,t){let o=!1;return e.forEach(i=>{o=this.removeMarker(i,!0)||o}),o&&!t&&this.render(),o}clearMarkers(e){this.markers.length=0,e||this.render()}render(){let e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,L.CLUSTERING_BEGIN,this);let{clusters:t,changed:o}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});(o||o==null)&&(this.reset(),this.clusters=t,this.renderClusters()),google.maps.event.trigger(this,L.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>e.setMap(null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){let e=new mt(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(o=>{o.markers.length===1?o.marker=o.markers[0]:(o.marker=this.renderer.render(o,e),this.onClusterClick&&o.marker.addListener("click",i=>{google.maps.event.trigger(this,L.CLUSTER_CLICK,o),this.onClusterClick(i,o,t)})),o.marker.setMap(t)})}}let ye=Object.values(L);var ft=q({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:ye,setup(r,{emit:e,expose:t,slots:o}){let i=_(),s=x(V,_()),l=x(R,_());return j(Se,i),O(s,()=>{s.value&&(i.value=P(new gt({map:s.value,...r.options})),ye.forEach(n=>{var p;(p=i.value)===null||p===void 0||p.addListener(n,u=>e(n,u))}))},{immediate:!0}),B(()=>{var n;i.value&&((n=l.value)===null||n===void 0||n.event.clearInstanceListeners(i.value),i.value.clearMarkers(),i.value.setMap(null))}),t({markerCluster:i}),()=>{var n;return(n=o.default)===null||n===void 0?void 0:n.call(o)}}}),qe=q({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(r,{slots:e,emit:t}){let o=_(),i=_(),s=D(()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e).some(p=>p.type!==we)}),l=D(()=>({...r.options,element:o.value}));return re(()=>{i=Pe(U,[],l,t)}),{customMarkerRef:o,customMarker:i,hasSlotContent:s}}});ne(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let yt=ie();K("data-v-b9d5ec8a");let _t={key:0,class:"custom-marker-wrapper"};H();let kt=yt(r=>r.hasSlotContent?(S(),N("div",_t,[m("div",ke({ref:"customMarkerRef",style:{cursor:r.$attrs.onClick?"pointer":void 0}},r.$attrs),[W(r.$slots,"default",{},void 0,!0)],16)])):oe("v-if",!0));qe.render=kt;qe.__scopeId="data-v-b9d5ec8a";const wt={components:{"title-main":Ue,CrossParallax:Fe,Hidden:Ge,GoogleMap:se,Marker:Ye,MarkerCluster:ft,InfoWindow:le},data:()=>({currentLocation:{},locations:[{lat:44.933076,lng:15.629058}],logo:Re,brand:xe,hideDetail:!0,routeLink:Ze,valid:!0,snackbar:!1,name:"",nameRules:[r=>!!r||"Name is required"],email:"",emailRules:[r=>!!r||"E-mail is required",r=>/.+@.+\..+/.test(r)||"E-mail must be valid"],phone:"",company:"",message:"",checkbox:!1}),computed:{isMobile(){return this.$vuetify.display.smAndDown}},methods:{async validate(){const{valid:r}=await this.$refs.form.validate();r?(this.snackbar=!0,this.hideDetail=!0):this.hideDetail=!1}}},T=r=>(K("data-v-117e0db5"),r=r(),H(),r),Ct={class:"page-wrap"},bt=T(()=>k("div",{class:"bg-deco"},null,-1)),xt={class:"parallax"},Mt=T(()=>k("div",{class:"action"}," Message Sent ",-1)),St={class:"logo logo-header"},Ot=["src"],It={class:"use-text-title"},Pt=T(()=>k("i",{class:"ion-ios-home-outline"},null,-1)),Et=T(()=>k("i",{class:"ion-ios-arrow-round-back-outline"},null,-1)),Lt=T(()=>k("div",{class:"frm-deco"},null,-1)),qt={class:"full-form-wrap"},Tt={class:"form"},$t={class:"form-control-label"},jt={href:"#",class:"link mx-3"},zt={class:"btn-area"},Nt={class:"bubel"},Bt=T(()=>k("h6",{class:"use-text-subtitle pb-1 px-3"}," Head Quarter ",-1));function Vt(r,e,t,o,i,s){const l=w("hidden"),n=w("cross-parallax"),p=w("v-icon"),u=w("v-btn"),a=w("v-snackbar"),d=De,c=w("v-col"),h=w("title-main"),g=w("v-text-field"),f=w("v-textarea"),y=w("v-row"),b=w("v-checkbox"),Z=w("v-form"),E=w("v-card"),J=w("InfoWindow"),Te=w("Marker"),$e=w("MarkerCluster"),je=w("GoogleMap"),ze=w("v-container");return S(),Q("div",Ct,[m(l,{point:"mdDown"},{default:v(()=>[bt]),_:1}),k("div",xt,[m(n)]),m(a,{modelValue:r.snackbar,"onUpdate:modelValue":e[1]||(e[1]=C=>r.snackbar=C),timeout:4e3,location:"top right",class:"notification"},{actions:v(()=>[m(u,{variant:"text",icon:"",onClick:e[0]||(e[0]=C=>r.snackbar=!1)},{default:v(()=>[m(p,null,{default:v(()=>[M("mdi-close")]),_:1})]),_:1})]),default:v(()=>[Mt]),_:1},8,["modelValue"]),m(l,{point:"mdUp"},{default:v(()=>[k("div",St,[m(d,{to:r.routeLink.architect.home},{default:v(()=>[k("img",{src:r.logo,alt:"logo"},null,8,Ot),k("span",It,X(r.brand.architect.projectName),1)]),_:1},8,["to"])])]),_:1}),m(ze,{class:"max-lg inner-wrap"},{default:v(()=>[m(u,{href:r.routeLink.architect.home,icon:"",variant:"text",class:"backtohome"},{default:v(()=>[Pt,Et]),_:1},8,["href"]),m(y,null,{default:v(()=>[m(c,{lg:"1",cols:"12",class:"use-hidden-xs-down"},{default:v(()=>[M("   ")]),_:1}),m(c,{lg:"5",cols:"12",class:"wrap-deco"},{default:v(()=>[m(l,{point:"mdDown"},{default:v(()=>[Lt]),_:1}),m(E,{class:"form-box fragment-fadeUp"},{default:v(()=>[k("div",qt,[k("div",Tt,[m(h,{desc:r.$t("common.contact_subtitle"),head:"Contact Us"},null,8,["desc"]),m(Z,{ref:"form",modelValue:r.valid,"onUpdate:modelValue":e[7]||(e[7]=C=>r.valid=C)},{default:v(()=>[m(y,{class:"spacing6"},{default:v(()=>[m(c,{cols:"12",sm:"12",class:"px-6"},{default:v(()=>[m(g,{modelValue:r.name,"onUpdate:modelValue":e[2]||(e[2]=C=>r.name=C),rules:r.nameRules,label:r.$t("common.form_name"),required:"",color:"primary",variant:"underlined"},null,8,["modelValue","rules","label"])]),_:1}),m(c,{cols:"12",sm:"12",class:"px-6"},{default:v(()=>[m(g,{modelValue:r.email,"onUpdate:modelValue":e[3]||(e[3]=C=>r.email=C),rules:r.emailRules,label:r.$t("common.form_email"),required:"",color:"primary",variant:"underlined"},null,8,["modelValue","rules","label"])]),_:1}),m(c,{cols:"12",sm:"12",class:"px-6"},{default:v(()=>[m(g,{modelValue:r.phone,"onUpdate:modelValue":e[4]||(e[4]=C=>r.phone=C),label:r.$t("common.form_phone"),color:"primary",variant:"underlined"},null,8,["modelValue","label"])]),_:1}),m(c,{cols:"12",class:"px-6"},{default:v(()=>[m(f,{modelValue:r.message,"onUpdate:modelValue":e[5]||(e[5]=C=>r.message=C),label:r.$t("common.form_message"),rows:"6",color:"primary",variant:"underlined"},null,8,["modelValue","label"])]),_:1})]),_:1}),k("div",$t,[m(b,{modelValue:r.checkbox,"onUpdate:modelValue":e[6]||(e[6]=C=>r.checkbox=C),color:"secondary",rules:[C=>!!C||"You must agree to continue!"],label:r.$t("common.form_terms"),"hide-details":r.hideDetail,required:""},null,8,["modelValue","rules","label","hide-details"]),k("span",null,[k("a",jt,X(r.$t("common.form_privacy")),1)])]),k("div",zt,[m(u,{block:s.isMobile,large:"",color:"primary",onClick:s.validate},{default:v(()=>[M(X(r.$t("common.form_send"))+" ",1),m(p,{class:"right-icon"},{default:v(()=>[M(" mdi-send ")]),_:1})]),_:1},8,["block","onClick"])])]),_:1},8,["modelValue"])])])]),_:1})]),_:1}),m(c,{lg:"6",cols:"12"},{default:v(()=>[m(l,{point:"mdDown"},{default:v(()=>[m(E,{class:"map",raised:""},{default:v(()=>[m(je,{zoom:5,center:{lat:r.locations[0].lat,lng:r.locations[0].lng},style:{width:"100%",height:"100%"}},{default:v(()=>[m(J,{options:{position:{lat:r.locations[0].lat+1,lng:r.locations[0].lng}}},{default:v(()=>[k("div",Nt,[Bt,m(y,{class:"ma-3"},{default:v(()=>[m(c,{item:"",sm:"6",cols:"12"},{default:v(()=>[k("p",null,[m(p,{class:"icon"},{default:v(()=>[M(" mdi-phone ")]),_:1}),M(" +98 765 432 10 ")])]),_:1}),m(c,{item:"",sm:"6",cols:"12"},{default:v(()=>[k("p",null,[m(p,{class:"icon"},{default:v(()=>[M(" mdi-email ")]),_:1}),M(" hello@luxi.com ")])]),_:1}),m(c,{item:"",sm:"12",cols:"12"},{default:v(()=>[k("p",null,[m(p,{class:"icon"},{default:v(()=>[M(" mdi-map-marker ")]),_:1}),M(" Lorem ipsum street Block C - Vestibullum Building ")])]),_:1})]),_:1})])]),_:1},8,["options"]),m($e,null,{default:v(()=>[(S(!0),Q(_e,null,Ae(r.locations,(C,Ne)=>(S(),N(Te,{key:Ne,options:{position:C}},null,8,["options"]))),128))]),_:1})]),_:1},8,["center"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const Rt=be(wt,[["render",Vt],["__scopeId","data-v-117e0db5"]]);const Zt={components:{ContactFrm:Rt},head(){return{title:xe.architect.name+" - Contact"}}},At={class:"main-wrap"};function Dt(r,e,t,o,i,s){const l=w("contact-frm");return S(),Q("div",At,[m(l)])}const Gt=be(Zt,[["render",Dt],["__scopeId","data-v-a479533f"]]);export{Gt as default};
