(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,h=globalThis,g=h.trustedTypes,_=g?g.emptyScript:``,v=h.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},x=(e,t)=>!l(e,t),S={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol(`metadata`),h.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(y(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?b:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?b:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??x)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:`open`},C[y(`elementProperties`)]=new Map,C[y(`finalized`)]=new Map,v?.({ReactiveElement:C}),(h.reactiveElementVersions??=[]).push(`2.1.2`);var w=globalThis,ee=e=>e,T=w.trustedTypes,te=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ne=`$lit$`,E=`lit$${Math.random().toFixed(9).slice(2)}$`,re=`?`+E,ie=`<${re}>`,D=document,O=()=>D.createComment(``),k=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ae=Array.isArray,oe=e=>ae(e)||typeof e?.[Symbol.iterator]==`function`,se=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,le=/>/g,j=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ue=/'/g,de=/"/g,fe=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),N=Symbol.for(`lit-noChange`),P=Symbol.for(`lit-nothing`),pe=new WeakMap,F=D.createTreeWalker(D,129);function me(e,t){if(!ae(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return te===void 0?t:te.createHTML(t)}var he=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=A;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===A?c[1]===`!--`?o=ce:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=j):(fe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=j):o=le:o===j?c[0]===`>`?(o=i??A,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?j:c[3]===`"`?de:ue):o===de||o===ue?o=j:o===ce||o===le?o=A:(o=j,i=void 0);let d=o===j&&e[t+1].startsWith(`/>`)?` `:``;a+=o===A?n+ie:l>=0?(r.push(s),n.slice(0,l)+ne+n.slice(l)+E+d):n+E+(l===-2?t:d)}return[me(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ge=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=he(t,n);if(this.el=e.createElement(l,r),F.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=F.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ne)){let t=u[o++],n=i.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ye:r[1]===`?`?be:r[1]===`@`?xe:L}),i.removeAttribute(e)}else e.startsWith(E)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(fe.test(i.tagName)){let e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],O()),F.nextNode(),c.push({type:2,index:++a});i.append(e[t],O())}}}else if(i.nodeType===8)if(i.data===re)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(E,e+1))!==-1;)c.push({type:7,index:a}),e+=E.length-1}a++}}static createElement(e,t){let n=D.createElement(`template`);return n.innerHTML=e,n}};function I(e,t,n=e,r){if(t===N)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=k(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=I(e,i._$AS(e,t.values),i,r)),t}var _e=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);F.currentNode=r;let i=F.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ve(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Se(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=F.nextNode(),a++)}return F.currentNode=D,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ve=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),k(e)?e===P||e==null||e===``?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==N&&this._(e):e._$litType$===void 0?e.nodeType===void 0?oe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ge.createElement(me(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new _e(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new ge(e)),t}k(t){ae(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(O()),this.O(O()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ee(e).nextSibling;ee(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=I(this,e,t,0),a=!k(e)||e!==this._$AH&&e!==N,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=I(this,r[n+o],t,o),s===N&&(s=this._$AH[o]),a||=!k(s)||s!==this._$AH[o],s===P?e=P:e!==P&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ye=class extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},be=class extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}},xe=class extends L{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??P)===N)return;let n=this._$AH,r=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Se=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}},Ce=w.litHtmlPolyfillSupport;Ce?.(ge,ve),(w.litHtmlVersions??=[]).push(`3.3.2`);var we=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ve(t.insertBefore(O(),e),e,void 0,n??{})}return i._$AI(e),i},Te=globalThis,R=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=we(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};R._$litElement$=!0,R.finalized=!0,Te.litElementHydrateSupport?.({LitElement:R});var Ee=Te.litElementPolyfillSupport;Ee?.({LitElement:R}),(Te.litElementVersions??=[]).push(`4.2.2`);var De=class extends R{static styles=o`
		:host {
			width: 100%;
		}

		header {
			color: var(--fg-header);
			padding: 15px;
			text-align: center;
		}

		h1 {
			margin: 1rem 0;
		}

		nav {
			display: flex;
			justify-content: center;
			gap: 10px;
			flex-wrap: wrap;
			margin-bottom: 1rem;
		}

		a {
			position: relative;
			color: var(--fg-header);
			text-decoration: none;
			padding: 6px 10px;
			border-radius: 6px;
			font-weight: 400;
			transition: all 200ms ease;
		}

		a::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 0%;
			height: 2px;
			background: var(--fg-header);
			transition: width 200ms ease;
		}

		a:hover::after {
			width: 100%;
		}

		a.active {
			font-weight: 700;
		}

		a.active::after {
			width: 0%;
		}
	`;get basePath(){return window.location.hostname.includes(`github.io`)?`/gallery-app-lit`:``}get currentPath(){let e=window.location.pathname;return this.basePath&&e.startsWith(this.basePath)?e.replace(this.basePath,``)||`/`:e}getHref(e){return e===`/`?`${this.basePath}/`:`${this.basePath}${e}`}getLinkClass(e){return this.currentPath===e?`active`:``}handleClick(){setTimeout(()=>{this.requestUpdate()},0)}render(){return M`
			<header>
				<nav>
					<a
						class=${this.getLinkClass(`/`)}
						href=${this.getHref(`/`)}
						@click=${this.handleClick}
					>
						Inicio
					</a>

					<a
						class=${this.getLinkClass(`/gallery`)}
						href=${this.getHref(`/gallery`)}
						@click=${this.handleClick}
					>
						Galeria
					</a>

					<a
						class=${this.getLinkClass(`/address`)}
						href=${this.getHref(`/address`)}
						@click=${this.handleClick}
					>
						Dirección
					</a>

					<a
						class=${this.getLinkClass(`/contact`)}
						href=${this.getHref(`/contact`)}
						@click=${this.handleClick}
					>
						Contacto
					</a>

					<a
						class=${this.getLinkClass(`/services`)}
						href=${this.getHref(`/services`)}
						@click=${this.handleClick}
					>
						Servicios
					</a>
				</nav>
			</header>
		`}};customElements.define(`my-header`,De);var Oe=class extends R{static styles=o`
    footer {
      color: var(--fg-header);
      padding: 1.5rem;
      text-align: center;
    }
  `;render(){return M` <footer>
      <small>Todos los derechos reservados 2026</small>
    </footer>`}};customElements.define(`my-footer`,Oe);var ke=class extends R{static properties={src:{type:String},title:{type:String},description:{type:String}};static styles=o`
		p {
			padding: 0 1.5rem;
			padding-bottom: 1rem;
			margin: 0;
		}
		.card {
			background-color: var(--bg-card);
			color: var(--fg-card);
			margin: 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			border-radius: 24px;
			transition:
				background 0.3s ease,
				transform 0.3s ease;
			cursor: pointer;
			border: 1px solid rgb(230, 230, 230);
		}

		.card:hover {
			transform: translateY(-1rem);
			background-color: var(--bg-card-hover);
		}

		.card img {
			width: 100%;
			height: 12rem;
			border-top-left-radius: 24px;
			border-top-right-radius: 24px;
			object-fit: cover;
		}
	`;render(){return M` <div class="card">
			<img src="${this.src}" />
			<div>
				<h3>${this.title}</h3>
				<p>${this.description}</p>
			</div>
		</div>`}};customElements.define(`my-card`,ke);var Ae=class extends R{get elements(){return[{src:`./img/movies/spider_2026.png`,title:`Spider Man Brand New Day, 2026`,description:`Nueva entrega del universo cinematografico donde se plantea una etapa distinta para Peter Parker tras eventos previos que redefinen su identidad y su rol como heroe`},{src:`./img/movies/spider_2019.png`,title:`Spider Man Far From Home, 2019`,description:`Historia donde Peter Parker enfrenta amenazas internacionales mientras intenta mantener una vida normal durante un viaje escolar en Europa`},{src:`./img/movies/spider_2018.png`,title:`Spider Man Into the Spider Verse, 2018`,description:`Película animada centrada en Miles Morales que introduce el multiverso y diferentes versiones del heroe`},{src:`./img/movies/spider_2012.png`,title:`The Amazing Spider Man, 2012`,description:`Reinicio que presenta una versión más moderna del personaje explorando su pasado y su relación con Gwen Stacy junto a un enfoque más científico`},{src:`./img/movies/spider_2007.png`,title:`Spider Man 3, 2007`,description:`Entrega que desarrolla conflictos internos del protagonista al ser influenciado por el simbionte mientras enfrenta nuevos enemigos`},{src:`./img/movies/spider_2004.png`,title:`Spider Man 2, 2004`,description:`Película que profundiza en el equilibrio entre la vida personal de Peter Parker y su responsabilidad como superheroe frente a Doctor Octopus`}]}static styles=o`
		:host {
			display: block;
			padding: 0 20px;
			overflow: hidden;
		}

		.galeria {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
			gap: 0.5ren;
			opacity: 0;
			transform: translateY(18px);
			animation: galleryEnter 700ms ease-out forwards;
		}

		.gallery-item {
			opacity: 0;
			transform: translateY(24px) scale(0.98);
			animation: cardEnter 650ms ease-out forwards;
			transition:
				transform 220ms ease,
				opacity 220ms ease,
				filter 220ms ease;
		}

		.gallery-item:hover {
			transform: translateY(-6px) scale(1.01);
			filter: saturate(1.08);
		}

		.gallery-item:nth-child(1) {
			animation-delay: 80ms;
		}

		.gallery-item:nth-child(2) {
			animation-delay: 150ms;
		}

		.gallery-item:nth-child(3) {
			animation-delay: 220ms;
		}

		.gallery-item:nth-child(4) {
			animation-delay: 290ms;
		}

		.gallery-item:nth-child(5) {
			animation-delay: 360ms;
		}

		.gallery-item:nth-child(6) {
			animation-delay: 430ms;
		}

		.gallery-item:nth-child(7) {
			animation-delay: 500ms;
		}

		@keyframes galleryEnter {
			from {
				opacity: 0;
				transform: translateY(18px);
			}

			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@keyframes cardEnter {
			from {
				opacity: 0;
				transform: translateY(24px) scale(0.98);
				filter: blur(5px);
			}

			to {
				opacity: 1;
				transform: translateY(0) scale(1);
				filter: blur(0);
			}
		}
		h1 {
			grid-column: 1/-1;
			margin: 0;
			margin-bottom: 2rem;
			text-align: center;
			font-size: 2.5rem;
		}

		@media (max-width: 700px) {
			:host {
				padding: 16px;
				margin-top: 12px;
			}

			.galeria {
				grid-template-columns: 1fr;
				gap: 0;
			}
		}
	`;render(){return M`
			<div class="galeria">
				<h1>Misma historia, universos diferentes</h1>
				${this.elements.map(e=>M`
						<div class="gallery-item">
							<my-card
								src="${e.src}"
								title="${e.title}"
								description="${e.description}"
							></my-card>
						</div>
					`)}
			</div>
		`}};customElements.define(`gallery-page`,Ae);var je=class extends R{static styles=o`
		:host {
			display: flex;
			justify-content: center;
			padding: 0 2rem;
			overflow: hidden;
		}

		.hero {
			position: relative;
			width: min(96%, 1400px);
			height: 75vh;
			overflow: hidden;
			border-radius: 3.5rem;
			opacity: 0;
			transform: scale(1.02);
			animation: fadeIn 700ms ease-out forwards;
			background: black;
		}

		.hero.expanded {
			position: fixed;
			inset: 0;
			z-index: 9999;
			width: 100vw;
			height: 100vh;
			border-radius: 0;
			transform: none;
			animation: none;
			opacity: 1;
		}

		.hero video,
		.poster-fallback {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			display: block;
		}

		.hero video {
			opacity: 0;
			transition: opacity 220ms ease;
		}

		.hero video.ready {
			opacity: 1;
		}

		.poster-fallback {
			background-image: url('./img/cover_home.jpg');
			background-size: cover;
			background-position: center;
			opacity: 1;
			transition: opacity 220ms ease;
		}

		.poster-fallback.hidden {
			opacity: 0;
		}

		.overlay {
			position: absolute;
			inset: 0;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.2));
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			z-index: 2;
		}

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			padding: 2rem;
			color: white;
			max-width: 600px;
		}

		.quote {
			font-size: 0.85rem;
			opacity: 0.9;
			font-style: italic;
		}

		.control-btn {
			border: 0;
			border-radius: 999px;
			background: white;
			color: black;
			font-weight: 700;
			font-size: 0.9rem;
			padding: 0.8rem 1.4rem;
			cursor: pointer;
			backdrop-filter: blur(10px);
			transition:
				transform 180ms ease,
				opacity 180ms ease;
		}

		.control-btn:hover {
			transform: scale(1.04);
		}

		@media (max-width: 700px) {
			:host {
				padding: 1rem;
			}

			.hero {
				height: 50vh;
				border-radius: 1.4rem;
			}

			.hero.expanded {
				width: 100vw;
				height: 100dvh;
				border-radius: 0;
			}

			.content {
				padding: 1.5rem;
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: scale(1.06);
				filter: blur(6px);
			}

			to {
				opacity: 1;
				transform: scale(1.02);
				filter: blur(0);
			}
		}
	`;static properties={expanded:{type:Boolean},videoReady:{type:Boolean}};constructor(){super(),this.expanded=!1,this.videoReady=!1,this.videoSrc=`./video/sunflower.mp4`}connectedCallback(){super.connectedCallback(),document.addEventListener(`fullscreenchange`,this.handleFullscreenChange),document.addEventListener(`webkitfullscreenchange`,this.handleFullscreenChange),document.addEventListener(`visibilitychange`,this.handleVisibilityChange)}disconnectedCallback(){document.removeEventListener(`fullscreenchange`,this.handleFullscreenChange),document.removeEventListener(`webkitfullscreenchange`,this.handleFullscreenChange),document.removeEventListener(`visibilitychange`,this.handleVisibilityChange),super.disconnectedCallback()}firstUpdated(){let e=this.getVideo();e&&(e.muted=!0,e.playsInline=!0,e.preload=`auto`,e.addEventListener(`loadeddata`,this.handleVideoReady),e.addEventListener(`canplay`,this.handleVideoReady),e.addEventListener(`playing`,this.handleVideoReady),e.addEventListener(`waiting`,this.handleVideoWaiting),e.addEventListener(`stalled`,this.handleVideoWaiting),e.addEventListener(`error`,this.handleVideoWaiting),this.playVideo())}getVideo(){return this.renderRoot?.querySelector(`video`)??null}handleVideoReady=()=>{this.videoReady=!0};handleVideoWaiting=()=>{this.videoReady=!1};handleFullscreenChange=()=>{this.expanded=!!(document.fullscreenElement||document.webkitFullscreenElement)};handleVisibilityChange=()=>{document.hidden||this.playVideo()};async toggleFullscreen(){let e=this.renderRoot.querySelector(`.hero`);if(e){if(this.expanded){document.exitFullscreen&&await document.exitFullscreen().catch(()=>{}),document.webkitExitFullscreen&&document.webkitExitFullscreen(),this.expanded=!1;return}if(this.expanded=!0,e.requestFullscreen){await e.requestFullscreen().catch(()=>{});return}e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}}async playVideo(){let e=this.getVideo();if(e)try{e.muted=!0,e.playbackRate=1,await e.play(),this.videoReady=e.readyState>=2}catch{this.videoReady=!1}}render(){return M`
			<div class=${this.expanded?`hero expanded`:`hero`}>
				<div
					class=${this.videoReady?`poster-fallback hidden`:`poster-fallback`}
				></div>

				<video
					class=${this.videoReady?`ready`:``}
					muted
					loop
					playsinline
					preload="auto"
					poster="./img/cover_home.jpg"
				>
					<source src=${this.videoSrc} type="video/mp4" />
				</video>

				<div class="overlay">
					<div class="content">
						<div class="quote">"Solo es un salto de fé, Miles."</div>

						<button class="control-btn" @click=${this.toggleFullscreen}>
							${this.expanded?`Salir`:`Expandir`}
						</button>
					</div>
				</div>
			</div>
		`}};customElements.define(`home-page`,je);var Me=class extends R{static styles=o`
		<style > :host {
			display: block;
			overflow: hidden;
			padding: 2rem;
			box-sizing: border-box;
		}

		.wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			max-width: 900px;
			margin: 0 auto;
			border-radius: 12px;
			overflow: hidden;
			height: 75vh;
			opacity: 0;
			transform: translateY(20px);
			animation: fadeIn 600ms ease-out forwards;
		}

		.image {
			width: 100%;
			height: 70%;
		}

		.image img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}

		.container {
			background: var(--bg-card);
			padding: 2rem;
			box-sizing: border-box;
			height: 70%;
		}

		h2 {
			margin-top: 0;
			color: var(--fg-card);
		}

		input,
		textarea {
			width: 100%;
			margin-top: 1rem;
			padding: 0.7rem;
			border: none;
			border-radius: 8px;
			font-family: inherit;
			outline: none;
		}

		.error {
			margin-top: 0.3rem;
			font-size: 0.8rem;
			color: #b00020;
			display: none;
		}

		.invalid {
			outline: 2px solid #b00020;
		}

		button {
			margin-top: 1.2rem;
			width: 100%;
			padding: 0.8rem;
			border: none;
			border-radius: 8px;
			background: var(--fg-header);
			color: white;
			cursor: pointer;
			transition: opacity 200ms ease;
		}

		button:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}

		@media (max-width: 700px) {
			.wrapper {
				grid-template-columns: 1fr;
			}

			.image {
				display: none;
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(30px);
				filter: blur(6px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
				filter: blur(0);
			}
		}
	`;firstUpdated(){let e=e=>this.renderRoot.getElementById(e),t=e(`name`),n=e(`email`),r=e(`msg`),i=e(`btn`),a=e(`err-name`),o=e(`err-email`),s=e(`err-msg`),c=/^[^@]+@[^@]+\.[^@]+$/;i.addEventListener(`click`,()=>{let e=!0;[t,n,r].forEach(e=>e.classList.remove(`invalid`)),[a,o,s].forEach(e=>e.style.display=`none`),t.value.trim()||(t.classList.add(`invalid`),a.style.display=`block`,e=!1),c.test(n.value.trim())||(n.classList.add(`invalid`),o.style.display=`block`,e=!1),r.value.trim()||(r.classList.add(`invalid`),s.style.display=`block`,e=!1),e&&(i.textContent=`Enviando...`,i.disabled=!0,setTimeout(()=>{i.textContent=`Enviado`,setTimeout(()=>{t.value=``,n.value=``,r.value=``,i.textContent=`Enviar`,i.disabled=!1},1200)},1500))})}render(){return M`<div class="wrapper">
			<div class="image">
				<img src="./img/movies/spider_2018.png" />
			</div>

			<div class="container">
				<h2>Contacto</h2>

				<input id="name" type="text" placeholder="Nombre" />
				<div id="err-name" class="error">Ingrese su nombre</div>

				<input id="email" type="email" placeholder="Correo" />
				<div id="err-email" class="error">Correo inválido</div>

				<textarea id="msg" rows="4" placeholder="Mensaje"></textarea>
				<div id="err-msg" class="error">Ingrese un mensaje</div>

				<button id="btn">Enviar</button>
			</div>
		</div> `}};customElements.define(`contact-page`,Me);var Ne=class extends R{static styles=o`
		:host {
			display: grid;
			place-items: center;
			height: 70vh;
			padding: 2rem;
			box-sizing: border-box;
			background: #ffffff;
			overflow: hidden;
		}

		.carousel {
			width: min(100%, 1100px);
			overflow: hidden;
			background: #ffffff;
			opacity: 0;
			transform: translateY(1rem);
			animation: fadeIn 700ms ease forwards;
		}

		.track {
			display: flex;
			width: max-content;
			animation: slide 60s linear infinite;
		}

		.group {
			display: grid;
			grid-template-columns: repeat(4, minmax(180px, 260px));
			gap: 1rem;
			padding-right: 1rem;
		}

		.card {
			position: relative;
			height: 420px;
			overflow: hidden;
			background: #111;
			border-radius: 1.4rem;
		}

		.card img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			filter: brightness(0.78) contrast(1.08) saturate(1.08);
		}

		.card-content {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 1rem;
			color: #ffffff;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.78), transparent);
		}

		h3 {
			margin: 0;
			font-size: 1.05rem;
			line-height: 1;
			letter-spacing: -0.04em;
			text-transform: uppercase;
		}

		p {
			margin: 0.35rem 0 0;
			font-size: 0.78rem;
			line-height: 1.35;
			opacity: 0.82;
		}

		@media (max-width: 900px) {
			.group {
				grid-template-columns: repeat(4, minmax(160px, 220px));
			}

			.card {
				height: 340px;
			}
		}

		@media (max-width: 640px) {
			:host {
				padding: 1rem;
			}

			.group {
				grid-template-columns: repeat(4, 72vw);
			}

			.card {
				height: 380px;
				border-radius: 1.1rem;
			}
		}

		@keyframes slide {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(-50%);
			}
		}

		@keyframes fadeIn {
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	`;render(){let e=[[`./img/movies/spider_2004.png`,`Eventos`,`Experiencias, proyecciones y encuentros temáticos.`],[`./img/movies/spider_2002.png`,`Películas`,`Alquiler de clásicos y estrenos seleccionados.`],[`./img/movies/spider_2007.png`,`Coleccionables`,`Figuras, pósters y piezas exclusivas.`],[`./img/movies/spider_2012.png`,`Vestimenta`,`Ropa temática inspirada en el universo Spider.`],[`./img/movies/spider_2018.png`,`Accesorios`,`Gadgets y objetos de uso diario.`],[`./img/movies/spider_2019.png`,`Ediciones`,`Contenido especial y versiones limitadas.`],[`./img/movies/spider_2026.png`,`Premium`,`Experiencia completa con beneficios superiores.`],[`./img/movies/spider_2018.png`,`Archivo`,`Material visual y referencias de colección.`]];return M`
			<section class="carousel">
				<div class="track">
					<div class="group">${e.slice(0,4).map(e=>this.card(...e))}</div>
					<div class="group">${e.slice(4,8).map(e=>this.card(...e))}</div>
					<div class="group">${e.slice(0,4).map(e=>this.card(...e))}</div>
					<div class="group">${e.slice(4,8).map(e=>this.card(...e))}</div>
				</div>
			</section>
		`}card(e,t,n){return M`
			<article class="card">
				<img src=${e} alt=${t} />
				<div class="card-content">
					<h3>${t}</h3>
					<p>${n}</p>
				</div>
			</article>
		`}};customElements.define(`services-page`,Ne);var Pe=class extends R{static styles=o`
		:host {
			display: block;
			overflow: hidden;
		}

		.address-cover {
			width: 100%;
			grid-column: 1 / -1;
			height: 33.5rem;
			object-fit: cover;

			opacity: 0;
			transform: scale(1.03);
			animation: fadeIn 600ms ease-out forwards;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: scale(1.08);
			}
			to {
				opacity: 1;
				transform: scale(1.03);
			}
		}
	`;render(){return M` <img class="address-cover" src="./img/address.gif" /> `}};customElements.define(`address-page`,Pe);var Fe=class extends R{static styles=o`
		:host {
			position: fixed;
			inset: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #ffffff;
			overflow: hidden;
			z-index: 999;
			opacity: 1;
			transform: scale(1);
			filter: blur(0);
			transition:
				opacity 650ms ease,
				transform 650ms ease,
				filter 650ms ease;
		}

		:host(.closing) {
			opacity: 0;
			transform: scale(1.04);
			filter: blur(6px);
			pointer-events: none;
		}

		.welcome-layout {
			width: min(92%, 980px);
			height: 84vh;
			display: grid;
			grid-template-columns: 380px 1fr;
			align-items: center;
			gap: 3rem;
		}

		.welcome-card {
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 2rem;
			display: flex;
			flex-direction: column;
			opacity: 0;
			transform: translateX(-1rem) scale(1.03);
			animation: fadeInCard 600ms ease-out forwards;
		}

		.welcome-image-section {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1.2rem;
			background: #ffffff;
			overflow: hidden;
		}

		.welcome-cover {
			width: 100%;
			min-width: 4rem;
			height: 100%;
			border-radius: 1.5rem;
			object-fit: cover;
			display: block;
		}

		.welcome-story {
			display: flex;
			flex-direction: column;
			justify-content: center;
			opacity: 0;
			transform: translateY(1rem);
			animation: fadeInStory 700ms ease-out 120ms forwards;
		}

		.story-subtitle {
			margin: 0 0 0.8rem;
			font-size: 0.85rem;
			font-weight: 600;
			letter-spacing: 0.18em;
			text-transform: uppercase;
			color: #777777;
		}

		.story-title {
			margin: 0;
			max-width: 34rem;
			font-size: clamp(2rem, 4.8vw, 4.2rem);
			line-height: 0.96;
			font-weight: 800;
			letter-spacing: -0.06em;
			color: #050505;
		}

		.story-text {
			margin: 1.5rem 0 0;
			max-width: 34rem;
			font-size: clamp(1rem, 1.8vw, 1.15rem);
			line-height: 1.7;
			color: #333333;
		}

		.story-actions {
			margin-top: 2rem;
			display: flex;
			justify-content: flex-start;
		}

		.continue-button {
			border: none;
			outline: none;
			padding: 0.95rem 1.8rem;
			border-radius: 999px;
			background: #000000;
			color: #ffffff;
			font-size: 0.95rem;
			font-weight: 500;
			cursor: pointer;
			transition: opacity 180ms ease;
		}

		.continue-button:hover {
			opacity: 0.82;
		}

		@keyframes fadeInCard {
			from {
				opacity: 0;
				transform: translateX(-1rem) scale(1.08);
			}

			to {
				opacity: 1;
				transform: translateX(0) scale(1.03);
			}
		}

		@keyframes fadeInStory {
			from {
				opacity: 0;
				transform: translateY(1rem);
			}

			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@media (max-width: 760px) {
			:host {
				overflow-y: auto;
				align-items: flex-start;
			}

			.welcome-layout {
				width: min(92%, 420px);
				height: auto;
				min-height: 100vh;
				grid-template-columns: 1fr;
				gap: 1.8rem;
				padding: 2rem 0;
			}

			.welcome-card {
				height: 52vh;
				min-height: 380px;
			}

			.story-title {
				font-size: clamp(2rem, 10vw, 3.2rem);
			}

			.story-actions {
				width: 100%;
			}

			.continue-button {
				width: 100%;
			}
		}
	`;audio=null;connectedCallback(){super.connectedCallback(),document.body.style.overflowY=`hidden`}disconnectedCallback(){document.body.style.overflowY=`auto`,super.disconnectedCallback()}handleContinue(){window.dispatchEvent(new CustomEvent(`intro-started`)),this.audio||(this.audio=new Audio(`./audio/sunflower.mp3`),this.audio.loop=!0,this.audio.currentTime=0),this.audio.play().catch(()=>{}),this.classList.add(`closing`),document.body.style.overflowY=`auto`,setTimeout(()=>{this.remove()},650)}render(){return M`
			<section class="welcome-layout">
				<section class="welcome-card">
					<section class="welcome-image-section">
						<img class="welcome-cover" src="./img/home.png" />
					</section>
				</section>

				<section class="welcome-story">
					<p class="story-subtitle">Miles Morales</p>

					<h1 class="story-title">No nació listo. Aprendió a levantarse.</h1>

					<p class="story-text">
						No empieza como una leyenda. Empieza con miedo, dudas y una ciudad demasiado
						grande sobre sus hombros. Pero ahí está lo humano de su historia: no necesita
						parecerse a nadie para ser Spider-Man. Su fuerza aparece cuando deja de pedir
						permiso para existir y entiende que su camino también puede salvar a otros.
					</p>

					<section class="story-actions">
						<button class="continue-button" @click=${this.handleContinue}>
							Continuar
						</button>
					</section>
				</section>
			</section>
		`}};customElements.define(`welcome-page`,Fe);function Ie(e){for(var t=[],n=0;n<e.length;){var r=e[n];if(r===`*`||r===`+`||r===`?`){t.push({type:`MODIFIER`,index:n,value:e[n++]});continue}if(r===`\\`){t.push({type:`ESCAPED_CHAR`,index:n++,value:e[n++]});continue}if(r===`{`){t.push({type:`OPEN`,index:n,value:e[n++]});continue}if(r===`}`){t.push({type:`CLOSE`,index:n,value:e[n++]});continue}if(r===`:`){for(var i=``,a=n+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){i+=e[a++];continue}break}if(!i)throw TypeError(`Missing parameter name at ${n}`);t.push({type:`NAME`,index:n,value:i}),n=a;continue}if(r===`(`){var s=1,c=``,a=n+1;if(e[a]===`?`)throw TypeError(`Pattern cannot start with "?" at ${a}`);for(;a<e.length;){if(e[a]===`\\`){c+=e[a++]+e[a++];continue}if(e[a]===`)`){if(s--,s===0){a++;break}}else if(e[a]===`(`&&(s++,e[a+1]!==`?`))throw TypeError(`Capturing groups are not allowed at ${a}`);c+=e[a++]}if(s)throw TypeError(`Unbalanced pattern at ${n}`);if(!c)throw TypeError(`Missing pattern at ${n}`);t.push({type:`PATTERN`,index:n,value:c}),n=a;continue}t.push({type:`CHAR`,index:n,value:e[n++]})}return t.push({type:`END`,index:n,value:``}),t}function Le(e,t){t===void 0&&(t={});for(var n=Ie(e),r=t.prefixes,i=r===void 0?`./`:r,a=t.delimiter,o=a===void 0?`/#?`:a,s=[],c=0,l=0,u=``,d=function(e){if(l<n.length&&n[l].type===e)return n[l++].value},f=function(e){var t=d(e);if(t!==void 0)return t;var r=n[l],i=r.type,a=r.index;throw TypeError(`Unexpected ${i} at ${a}, expected ${e}`)},p=function(){for(var e=``,t;t=d(`CHAR`)||d(`ESCAPED_CHAR`);)e+=t;return e},m=function(e){for(var t=0,n=o;t<n.length;t++){var r=n[t];if(e.indexOf(r)>-1)return!0}return!1},h=function(e){var t=s[s.length-1],n=e||(t&&typeof t==`string`?t:``);if(t&&!n)throw TypeError(`Must have text between two parameters, missing text after "${t.name}"`);return!n||m(n)?`[^${z(o)}]+?`:`(?:(?!${z(n)})[^${z(o)}])+?`};l<n.length;){var g=d(`CHAR`),_=d(`NAME`),v=d(`PATTERN`);if(_||v){var y=g||``;i.indexOf(y)===-1&&(u+=y,y=``),u&&=(s.push(u),``),s.push({name:_||c++,prefix:y,suffix:``,pattern:v||h(y),modifier:d(`MODIFIER`)||``});continue}var b=g||d(`ESCAPED_CHAR`);if(b){u+=b;continue}if(u&&=(s.push(u),``),d(`OPEN`)){var y=p(),x=d(`NAME`)||``,S=d(`PATTERN`)||``,C=p();f(`CLOSE`),s.push({name:x||(S?c++:``),pattern:x&&!S?h(y):S,prefix:y,suffix:C,modifier:d(`MODIFIER`)||``});continue}f(`END`)}return s}function Re(e,t){return ze(Le(e,t),t)}function ze(e,t){t===void 0&&(t={});var n=Be(t),r=t.encode,i=r===void 0?function(e){return e}:r,a=t.validate,o=a===void 0?!0:a,s=e.map(function(e){if(typeof e==`object`)return RegExp(`^(?:${e.pattern})\$`,n)});return function(t){for(var n=``,r=0;r<e.length;r++){var a=e[r];if(typeof a==`string`){n+=a;continue}var c=t?t[a.name]:void 0,l=a.modifier===`?`||a.modifier===`*`,u=a.modifier===`*`||a.modifier===`+`;if(Array.isArray(c)){if(!u)throw TypeError(`Expected "${a.name}" to not repeat, but got an array`);if(c.length===0){if(l)continue;throw TypeError(`Expected "${a.name}" to not be empty`)}for(var d=0;d<c.length;d++){var f=i(c[d],a);if(o&&!s[r].test(f))throw TypeError(`Expected all "${a.name}" to match "${a.pattern}", but got "${f}"`);n+=a.prefix+f+a.suffix}continue}if(typeof c==`string`||typeof c==`number`){var f=i(String(c),a);if(o&&!s[r].test(f))throw TypeError(`Expected "${a.name}" to match "${a.pattern}", but got "${f}"`);n+=a.prefix+f+a.suffix;continue}if(!l){var p=u?`an array`:`a string`;throw TypeError(`Expected "${a.name}" to be ${p}`)}}return n}}function z(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,`\\$1`)}function Be(e){return e&&e.sensitive?``:`i`}function Ve(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,i=n.exec(e.source);i;)t.push({name:i[1]||r++,prefix:``,suffix:``,modifier:``,pattern:``}),i=n.exec(e.source);return e}function He(e,t,n){var r=e.map(function(e){return Ge(e,t,n).source});return RegExp(`(?:${r.join(`|`)})`,Be(n))}function Ue(e,t,n){return We(Le(e,n),t,n)}function We(e,t,n){n===void 0&&(n={});for(var r=n.strict,i=r===void 0?!1:r,a=n.start,o=a===void 0?!0:a,s=n.end,c=s===void 0?!0:s,l=n.encode,u=l===void 0?function(e){return e}:l,d=n.delimiter,f=d===void 0?`/#?`:d,p=n.endsWith,m=`[${z(p===void 0?``:p)}]|\$`,h=`[${z(f)}]`,g=o?`^`:``,_=0,v=e;_<v.length;_++){var y=v[_];if(typeof y==`string`)g+=z(u(y));else{var b=z(u(y.prefix)),x=z(u(y.suffix));if(y.pattern)if(t&&t.push(y),b||x)if(y.modifier===`+`||y.modifier===`*`){var S=y.modifier===`*`?`?`:``;g+=`(?:${b}((?:${y.pattern})(?:${x}${b}(?:${y.pattern}))*)${x})${S}`}else g+=`(?:${b}(${y.pattern})${x})${y.modifier}`;else{if(y.modifier===`+`||y.modifier===`*`)throw TypeError(`Can not repeat "${y.name}" without a prefix and suffix`);g+=`(${y.pattern})${y.modifier}`}else g+=`(?:${b}${x})${y.modifier}`}}if(c)i||(g+=`${h}?`),g+=n.endsWith?`(?=${m})`:`$`;else{var C=e[e.length-1],w=typeof C==`string`?h.indexOf(C[C.length-1])>-1:C===void 0;i||(g+=`(?:${h}(?=${m}))?`),w||(g+=`(?=${h}|${m})`)}return new RegExp(g,Be(n))}function Ge(e,t,n){return e instanceof RegExp?Ve(e,t):Array.isArray(e)?He(e,t,n):Ue(e,t,n)}var B=Symbol(`NotFoundResult`),Ke=class extends Error{code;context;constructor(e){super(G(`Page not found (${e.pathname})`)),this.context=e,this.code=404}};function V(e){return typeof e==`object`&&!!e}function H(e){return typeof e==`function`}function U(e){return typeof e==`string`}function W(e=[]){return Array.isArray(e)?e:[e]}function G(e){return`[Vaadin.Router] ${e}`}function qe(e){return new Ke(e)}function Je(e){return(Array.isArray(e)?e[0]:e)??``}function K(e){return Je(e?.path)}function Ye(e){return Array.isArray(e)&&e.length>0?e:void 0}var Xe=new Map;Xe.set(`|false`,{keys:[],pattern:/(?:)/u});function Ze(e){try{return decodeURIComponent(e)}catch{return e}}function Qe(e,t,n=!1,r=[],i){let a=`${e}|${String(n)}`,o=Je(t),s=Xe.get(a);if(!s){let t=[];s={keys:t,pattern:Ge(e,t,{end:n,strict:e===``})},Xe.set(a,s)}let c=s.pattern.exec(o);if(!c)return null;let l={...i};for(let e=1;e<c.length;e++){let t=s.keys[e-1],n=t.name,r=c[e];(r!==void 0||!Object.prototype.hasOwnProperty.call(l,n))&&(t.modifier===`+`||t.modifier===`*`?l[n]=r?r.split(/[/?#]/u).map(Ze):[]:l[n]=r&&Ze(r))}return{keys:[...r,...s.keys],params:l,path:c[0]}}var $e=Qe;function et(e,t,n,r,i){let a,o,s=0,c=K(e);return c.startsWith(`/`)&&(n&&(c=c.substring(1)),n=!0),{next(l){if(e===l)return{done:!0,value:void 0};e.__children??=Ye(e.children);let u=e.__children??[],d=!e.__children&&!e.children;if(!a&&(a=$e(c,t,d,r,i),a))return{value:{keys:a.keys,params:a.params,path:a.path,route:e}};if(a&&u.length>0)for(;s<u.length;){if(!o){let r=u[s];r.parent=e;let i=a.path.length;i>0&&t.charAt(i)===`/`&&(i+=1),o=et(r,t.substring(i),n,a.keys,a.params)}let r=o.next(l);if(!r.done)return{done:!1,value:r.value};o=null,s+=1}return{done:!0,value:void 0}}}}var tt=et;function nt(e){if(H(e.route.action))return e.route.action(e)}function rt(e,t){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}function it(e){return!!e&&typeof e==`object`&&`next`in e&&`params`in e&&`result`in e&&`route`in e}var at=class extends Error{cause;code;context;constructor(e,t){let n=`Path '${e.pathname}' is not properly resolved due to an error.`,r=K(e.route);r&&(n+=` Resolution had failed on route: '${r}'`),super(n),this.cause=t?.cause,this.code=t?.code,this.context=e}warn(){console.warn(this.message)}};function ot(e,t){let{path:n,route:r}=t;if(r&&!r.__synthetic){let t={path:n,route:r};if(r.parent&&e.chain)for(let t=e.chain.length-1;t>=0&&e.chain[t].route!==r.parent;t--)e.chain.pop();e.chain?.push(t)}}var st=class{baseUrl;#e;errorHandler;resolveRoute;#t;constructor(e,{baseUrl:t=``,context:n,errorHandler:r,resolveRoute:i=nt}={}){if(Object(e)!==e)throw TypeError(`Invalid routes`);this.baseUrl=t,this.errorHandler=r,this.resolveRoute=i,Array.isArray(e)?this.#t={__children:e,__synthetic:!0,action:()=>void 0,path:``}:this.#t={...e,parent:void 0},this.#e={...n,hash:``,async next(){return B},params:{},pathname:``,resolver:this,route:this.#t,search:``,chain:[]}}get root(){return this.#t}get context(){return this.#e}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,``):``}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(e){let t=this,n={...this.#e,...U(e)?{pathname:e}:e,next:c},r=tt(this.#t,this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),i=this.resolveRoute,a=null,o=null,s=n;async function c(e=!1,l=a?.value?.route,u){let d=u===null?a?.value?.route:void 0;if(a=o??r.next(d),o=null,!e&&(a.done||!rt(a.value.route,l)))return o=a,B;if(a.done)throw qe(n);s={...n,params:a.value.params,route:a.value.route,chain:s.chain?.slice()},ot(s,a.value);let f=await i(s);return f!=null&&f!==B?(s.result=it(f)?f.result:f,t.#e=s,s):await c(e,l,f)}try{return await c(!0,this.#t)}catch(e){let t=e instanceof Ke?e:new at(s,{code:500,cause:e});if(this.errorHandler)return s.result=this.errorHandler(t),s;throw e}}setRoutes(e){return this.#t.__children=[...W(e)],{}}__normalizePathname(e){if(!this.baseUrl)return e;let t=this.__effectiveBaseUrl,n=e.startsWith(`/`)?new URL(t).origin+e:`./${e}`,r=new URL(n,t).href;if(r.startsWith(t))return r.slice(t.length)}addRoutes(e){return this.#t.__children=[...this.#t.__children??[],...W(e)],this.getRoutes()}};function ct(e,t,n,r){let i=t.name??r?.(t);if(i&&(e.has(i)?e.get(i)?.push(t):e.set(i,[t])),Array.isArray(n))for(let i of n)i.parent=t,ct(e,i,i.__children??i.children,r)}function lt(e,t){let n=e.get(t);if(n){if(n.length>1)throw Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n[0]}}function ut(e,t={}){if(!(e instanceof st))throw TypeError(`An instance of Resolver is expected`);let n=new Map,r=new Map;return(i,a)=>{let o=lt(r,i);if(!o&&(r.clear(),ct(r,e.root,e.root.__children,t.cacheKeyProvider),o=lt(r,i),!o))throw Error(`Route "${i}" not found`);let s=o.fullPath?n.get(o.fullPath):void 0;if(!s){let e=K(o),t=o.parent;for(;t;){let n=K(t);n&&(e=`${n.replace(/\/$/u,``)}/${e.replace(/^\//u,``)}`),t=t.parent}let r=Le(e),i=Object.create(null);for(let e of r)U(e)||(i[e.name]=!0);s={keys:i,tokens:r},n.set(e,s),o.fullPath=e}let c=ze(s.tokens,{encode:encodeURIComponent,...t})(a)||`/`;if(t.stringifyQueryParams&&a){let e={};for(let[t,n]of Object.entries(a))!(t in s.keys)&&n&&(e[t]=n);let n=t.stringifyQueryParams(e);n&&(c+=n.startsWith(`?`)?n:`?${n}`)}return c}}var dt=ut,ft=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,q=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function pt(){function e(){return!0}return vt(e)}function mt(){try{return ht()?!0:gt()?q?!_t():!pt():!1}catch{return!1}}function ht(){return localStorage.getItem(`vaadin.developmentmode.force`)}function gt(){return[`localhost`,`127.0.0.1`].indexOf(window.location.hostname)>=0}function _t(){return!!(q&&Object.keys(q).map(e=>q[e]).filter(e=>e.productionMode).length>0)}function vt(e,t){if(typeof e!=`function`)return;let n=ft.exec(e.toString());if(n)try{e=Function(n[1])}catch(e){console.log(`vaadin-development-mode-detector: uncommentAndRun() failed`,e)}return e(t)}window.Vaadin=window.Vaadin||{};var yt=function(e,t){if(window.Vaadin.developmentMode)return vt(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=mt());function bt(){}var xt=function(){if(typeof yt==`function`)return yt(bt)};function St(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:e?`@vaadin/router/${e}`:`@vaadin/router`,version:`2.0.1`})}St(),xt();var Ct=e=>{let t=getComputedStyle(e).getPropertyValue(`animation-name`);return t&&t!==`none`},wt=(e,t)=>{let n=()=>{e.removeEventListener(`animationend`,n),t()};e.addEventListener(`animationend`,n)};async function Tt(e,t){return e.classList.add(t),await new Promise(n=>{if(Ct(e)){let r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute(`style`,`position: absolute; ${i}`),wt(e,()=>{e.classList.remove(t),e.removeAttribute(`style`),n()})}else e.classList.remove(t),n()})}var Et=Tt;function Dt(e){if(!e||!U(e.path))throw Error(G(`Expected route config to be an object with a "path" string property, or an array of such objects`));if(!H(e.action)&&!Array.isArray(e.children)&&!H(e.children)&&!U(e.component)&&!U(e.redirect))throw Error(G(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&[`bundle`,`component`].forEach(t=>{t in e&&console.warn(G(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Ot(e){W(e).forEach(e=>Dt(e))}function kt({next:e,...t}){return t}function J(e,t){let n=t.__effectiveBaseUrl;return n?new URL(e.replace(/^\//u,``),n).pathname:e}function At(e){return e.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,``)}/${t.replace(/^\//u,``)}`:e,``)}function jt(e){return At(e.map(e=>e.route))}function Y({chain:e=[],hash:t=``,params:n={},pathname:r=``,redirectFrom:i,resolver:a,search:o=``},s){let c=e.map(e=>e.route);return{baseUrl:a?.baseUrl??``,getUrl:(t={})=>a?J(Re(jt(e))({...n,...t}),a):``,hash:t,params:n,pathname:r,redirectFrom:i,route:s??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:o,searchParams:new URLSearchParams(o)}}function Mt(e,t){let n={...e.params};return{redirect:{from:e.pathname,params:n,pathname:t}}}function Nt(e,t){if(t.location=Y(e),e.chain){let n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}return t}function X(e,t,...n){if(typeof e==`function`)return e.apply(t,n)}function Pt(e,t,...n){return r=>r&&V(r)&&(`cancel`in r||`redirect`in r)?r:X(t?.[e],t,...n)}function Ft(e,t){if(!Array.isArray(e)&&!V(e))throw Error(G(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));let n=W(e);n.forEach(e=>Dt(e)),t.__children=n}function Z(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e===`go`,detail:t}))}function It(e){if(typeof e!=`object`)return String(e);let[t=`Unknown`]=/ (.*)\]$/u.exec(String(e))??[];return t===`Object`||t===`Array`?`${t} ${JSON.stringify(e)}`:t}function Lt(e){let{port:t,protocol:n}=e;return`${n}//${n===`http:`&&t===`80`||n===`https:`&&t===`443`?e.hostname:e.host}`}function Rt(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function zt(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target,n=e instanceof MouseEvent?e.composedPath():e.path??[];for(let e=0;e<n.length;e++){let r=n[e];if(`nodeName`in r&&r.nodeName.toLowerCase()===`a`){t=r;break}}for(;t&&t instanceof Node&&Rt(t)!==`a`;)t=t.parentNode;if(!t||Rt(t)!==`a`)return;let r=t;if(r.target&&r.target.toLowerCase()!==`_self`||r.hasAttribute(`download`)||r.hasAttribute(`router-ignore`)||r.pathname===window.location.pathname&&r.hash!==``||(r.origin||Lt(r))!==window.location.origin)return;let{hash:i,pathname:a,search:o}=r;Z(`go`,{hash:i,pathname:a,search:o})&&e instanceof MouseEvent&&(e.preventDefault(),e.type===`click`&&window.scrollTo(0,0))}var Bt={activate(){window.document.addEventListener(`click`,zt)},inactivate(){window.document.removeEventListener(`click`,zt)}};function Vt(e){if(e.state===`vaadin-router-ignore`)return;let{hash:t,pathname:n,search:r}=window.location;Z(`go`,{hash:t,pathname:n,search:r})}var Ht={activate(){window.addEventListener(`popstate`,Vt)},inactivate(){window.removeEventListener(`popstate`,Vt)}},Ut=[],Wt={CLICK:Bt,POPSTATE:Ht};function Gt(e=[]){Ut.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),Ut=e}var Kt=256;function Q(){return{cancel:!0}}var qt={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:``,action(){}},pathname:``,async next(){return B}},Jt=new class extends st{location=Y({resolver:this});ready=Promise.resolve(this.location);#e=new WeakSet;#t=new WeakSet;#n=this.#O.bind(this);#r=0;#i;__previousContext;#a;#o=null;#s=null;constructor(e,t){let n=document.head.querySelector(`base`)?.getAttribute(`href`);super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,``):void 0,...t,resolveRoute:async e=>await this.#c(e)}),Gt(Object.values(Wt)),this.setOutlet(e),this.subscribe()}async#c(e){let{route:t}=e;if(H(t.children)){let n=await t.children(kt(e));H(t.children)||({children:n}=t),Ft(n,t)}let n={component:e=>{let t=document.createElement(e);return this.#t.add(t),t},prevent:Q,redirect:t=>Mt(e,t)};return await Promise.resolve().then(async()=>{if(this.#_(e))return await X(t.action,t,e,n)}).then(e=>{if(e!=null&&(typeof e==`object`||typeof e==`symbol`)&&(e instanceof HTMLElement||e===B||V(e)&&`redirect`in e))return e;if(U(t.redirect))return n.redirect(t.redirect)}).then(e=>{if(e!=null)return e;if(U(t.component))return n.component(t.component)})}setOutlet(e){e&&this.#y(e),this.#i=e}getOutlet(){return this.#i}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#a=void 0,Ot(e),super.setRoutes(e),t||this.#O(),await this.ready}addRoutes(e){return Ot(e),super.addRoutes(e)}async render(e,t=!1){this.#r+=1;let n=this.#r,r={...qt,...U(e)?{hash:``,search:``,pathname:e}:e,__renderId:n};return this.ready=this.#l(r,t),await this.ready}async#l(e,t){let{__renderId:n}=e;try{let r=await this.resolve(e),i=await this.#u(r);if(!this.#_(i))return this.location;let a=this.__previousContext;if(i===a)return this.#b(a,!0),this.location;if(this.location=Y(i),t&&this.#b(i,n===1),Z(`location-changed`,{router:this,location:this.location}),i.__skipAttach)return this.#x(i,a),this.__previousContext=i,this.location;this.#S(i,a);let o=this.#D(i);if(this.#E(i),this.#T(i,a),await o,this.#_(i))return this.#C(),this.__previousContext=i,this.location}catch(r){if(n===this.#r){t&&this.#b(this.context);for(let e of this.#i?.children??[])e.remove();throw this.location=Y(Object.assign(e,{resolver:this})),Z(`error`,{router:this,error:r,...e}),r}}return this.location}async#u(e,t=e){let n=await this.#d(t),r=n===t?e:n,i=J(At(n.chain??[]),this)===n.pathname,a=async(e,t=e.route,n)=>{let r=await e.next(!1,t,n);return r===null||r===B?i?e:t.parent==null?r:await a(e,t.parent,r):r},o=await a(n);if(o==null||o===B)throw qe(r);return o===n?await this.#f(n):await this.#u(r,o)}async#d(e){let{result:t}=e;if(t instanceof HTMLElement)return Nt(e,t),e;if(t&&`redirect`in t){let n=await this.#v(t.redirect,e.__redirectCount,e.__renderId);return await this.#d(n)}throw t instanceof Error?t:Error(G(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${It(t)}". Double check the action return value for the route.`))}async#f(e){return await this.#p(e).then(async t=>t===this.__previousContext||t===e?t:await this.#u(t))}async#p(e){let t=this.__previousContext??{},n=t.chain??[],r=e.chain??[],i=Promise.resolve(void 0),a=t=>Mt(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&!(n[t].route!==r[t].route||n[t].path!==r[t].path&&n[t].element!==r[t].element||!this.#g(n[t].element,r[t].element));e.__divergedChainIndex++,t++);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex===r.length&&this.#g(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)i=this.#m(i,e,{prevent:Q},n[t]);for(let t=0;t<r.length;t++)i=this.#h(i,e,{prevent:Q,redirect:a},r[t]),n[t].element.location=Y(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.#m(i,e,{prevent:Q},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Y(e,n[t].route)):(i=this.#h(i,e,{prevent:Q,redirect:a},r[t]),r[t].element&&(r[t].element.location=Y(e,r[t].route)));return await i.then(async t=>{if(t&&V(t)){if(`cancel`in t&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(`redirect`in t)return await this.#v(t.redirect,e.__redirectCount,e.__renderId)}return e})}async#m(e,t,n,r){let i=Y(t),a=await e;if(this.#_(t)&&(a=Pt(`onBeforeLeave`,r.element,i,n,this)(a)),!(V(a)&&`redirect`in a))return a}async#h(e,t,n,r){let i=Y(t,r.route),a=await e;if(this.#_(t))return Pt(`onBeforeEnter`,r.element,i,n,this)(a)}#g(e,t){return e instanceof Element&&t instanceof Element?this.#t.has(e)&&this.#t.has(t)?e.localName===t.localName:e===t:!1}#_(e){return e.__renderId===this.#r}async#v(e,t=0,n=0){if(t>Kt)throw Error(G(`Too many redirects when rendering ${e.from}`));return await this.resolve({...qt,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:n})}#y(e=this.#i){if(!(e instanceof Element||e instanceof DocumentFragment))throw TypeError(G(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#b({pathname:e,search:t=``,hash:n=``},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){let i=r?`replaceState`:`pushState`;window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent(`popstate`,{state:`vaadin-router-ignore`}))}}#x(e,t){let n=this.#i;for(let r=0;r<(e.__divergedChainIndex??0);r++){let i=t?.chain?.[r].element;if(i)if(i.parentNode===n)e.chain[r].element=i,n=i;else break}return n}#S(e,t){this.#y(),this.#w();let n=this.#x(e,t);this.#o=[],this.#s=Array.from(n?.children??[]).filter(t=>this.#e.has(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex??0;t<(e.chain?.length??0);t++){let i=e.chain[t].element;i&&(r?.appendChild(i),this.#e.add(i),r===n&&this.#o.push(i),r=i)}}#C(){if(this.#s)for(let e of this.#s)e.remove();this.#s=null,this.#o=null}#w(){if(this.#s&&this.#o){for(let e of this.#o)e.remove();this.#s=null,this.#o=null}}#T(e,t){if(!(!t?.chain||e.__divergedChainIndex==null))for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.#_(e);n--){let r=t.chain[n].element;if(r)try{let t=Y(e);X(r.onAfterLeave,r,t,{},this)}finally{if(this.#s?.includes(r))for(let e of r.children)e.remove()}}}#E(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#_(e);t++){let n=e.chain[t].element;if(n){let r=Y(e,e.chain[t].route);X(n.onAfterEnter,n,r,{},this)}}}async#D(e){let t=this.#s?.[0],n=this.#o?.[0],r=[],{chain:i=[]}=e,a;for(let e=i.length-1;e>=0;e--)if(i[e].route.animate){a=i[e].route.animate;break}if(t&&n&&a){let e=V(a)&&a.leave?a.leave:`leaving`,i=V(a)&&a.enter?a.enter:`entering`;r.push(Et(t,e)),r.push(Et(n,i))}return await Promise.all(r),e}subscribe(){window.addEventListener(`vaadin-router-go`,this.#n)}unsubscribe(){window.removeEventListener(`vaadin-router-go`,this.#n)}#O(e){let{pathname:t,search:n,hash:r}=e instanceof CustomEvent?e.detail:window.location;U(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Gt(e)}urlForName(e,t){return this.#a||=dt(this,{cacheKeyProvider(e){return`component`in e&&typeof e.component==`string`?e.component:void 0}}),J(this.#a(e,t??void 0),this)}urlForPath(e,t){return J(Re(e)(t??void 0),this)}static go(e){let{pathname:t,search:n,hash:r}=U(e)?new URL(e,`http://a`):e;return Z(`go`,{pathname:t,search:n,hash:r})}}(document.getElementById(`app`)),$=window.location.hostname.includes(`github.io`)?`/gallery-app-lit`:``;Jt.setRoutes([{path:`${$}/`,component:`home-page`},{path:`${$}/gallery`,component:`gallery-page`},{path:`${$}/address`,component:`address-page`},{path:`${$}/services`,component:`services-page`},{path:`${$}/contact`,component:`contact-page`},{path:`(.*)`,redirect:`${$}/`}]);