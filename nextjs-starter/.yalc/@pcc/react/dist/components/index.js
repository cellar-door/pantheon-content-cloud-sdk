'use strict';

var reactMarkdown_js = require('react-markdown/lib/react-markdown.js');
var m = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var m__namespace = /*#__PURE__*/_interopNamespace(m);

var A=Object.defineProperty;var R=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(t,e,n)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))N.call(e,n)&&T(t,n,e[n]);if(R)for(var n of R(e))O.call(e,n)&&T(t,n,e[n]);return t};var S=t=>{let e=(t==null?void 0:t.split("-"))||[];return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")},k=t=>{let e={};return !t||t.length<1||t.forEach(n=>{let[r,a]=n.split(":");if(!(!r&&!a)){if(r&&a){let c=S(r.trim());e[c]=a.trim();return}switch(r){case"underline":e.textDecoration="underline";break;case"line-through":e.textDecoration="line-through";break;case"italic":e.fontStyle="italic";break;case"bold":e.fontWeight="bold";break;case"strike-through":e.textDecoration="line-through";break;case"superscript":e.verticalAlign="super";break;case"subscript":e.verticalAlign="sub";break;}}}),e};var v=/&(?:amp|lt|gt|quot|#39);/g,H=RegExp(v.source),L={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},U=t=>e=>t==null?void 0:t[e],M=U(L),C=t=>t&&H.test(t)?t.replace(v,M):t;var q=({element:t})=>{if(t.tag==="hr")return jsxRuntime.jsx("hr",{});let e=jsxRuntime.jsx(p,{x:t.children});return ["h1","h2","h3","h4","h5","h6"].includes(t.tag)?m__namespace.default.createElement(t.tag,u({},t.attrs),e):t.tag==="table"?jsxRuntime.jsx("table",{className:"text-black",children:jsxRuntime.jsx("tbody",{children:e})}):t.tag==="p"||t.tag==="span"?jsxRuntime.jsx("p",{children:e}):t.tag==="ul"&&t.children.length?jsxRuntime.jsx("ul",{children:e}):t.tag==="ol"&&t.children.length?jsxRuntime.jsx("ol",{children:e}):t.tag==="component"?jsxRuntime.jsx(p,{x:t}):null},g=q;var f=({x:t})=>{if(Array.isArray(t))return jsxRuntime.jsx(jsxRuntime.Fragment,{children:t.map((s,d)=>jsxRuntime.jsx(f,{x:s},d))});if(t==null)return null;let e=typeof t=="string"?t:t.data,n=k((t==null?void 0:t.style)||""),r=Boolean(n["vertical-align"]==="super"),a=Boolean(n["vertical-align"]==="sub");return ["li","tr","td"].includes(t.tag)?m__namespace.createElement(t.tag,u({style:n},t.attrs),m__namespace.createElement(f,{x:t.children})):e!=null?m__namespace.createElement(r?"sup":a?"sub":"span",{style:n},C(e)):t.tag==="span"&&t.data==null?jsxRuntime.jsx("span",{children:jsxRuntime.jsx(f,{x:t.children})}):t.tag==="p"?jsxRuntime.jsx(g,{element:t}):t.tag==="a"?jsxRuntime.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",style:n,children:t.data}):t.tag==="img"||t.tag==="image"?jsxRuntime.jsx("img",{src:t.src,alt:t.alt,title:t.title}):t.type==="BLOCKQUOTE"?jsxRuntime.jsxs("blockquote",{children:[jsxRuntime.jsx("p",{dir:"ltr",children:"QUOTE TEXT"}),jsxRuntime.jsx("p",{dir:"ltr",children:"-\xA0QUOTE ATTRIBUTION"})]}):null},p=f;var I=({article:t,headerClassName:e,bodyClassName:n,containerClassName:r,renderTitle:a})=>{let c=t==null?void 0:t.contentType;if(console.log("contentType",c),c==="TEXT_MARKDOWN")return jsxRuntime.jsx("div",{className:r,children:t!=null&&t.content?jsxRuntime.jsx(reactMarkdown_js.ReactMarkdown,{children:String(t.content)}):jsxRuntime.jsx("span",{children:"No content to display"})});let s=t!=null&&t.content?JSON.parse(t.content):[],d=s.findIndex(h=>["h1","h2","h3","h4","h5","h6","h7","p"].includes(h.tag)),[y]=s.splice(d,1),b=y?jsxRuntime.jsx(p,{x:y.children}):jsxRuntime.jsx("span",{children:t==null?void 0:t.title});return jsxRuntime.jsxs("div",{className:r,children:[jsxRuntime.jsx("div",{className:e,children:a?a(b):b}),jsxRuntime.jsx("div",{className:n,children:s==null?void 0:s.map((h,E)=>jsxRuntime.jsx(g,{element:h,keyElem:E},E))})]})},Q=I;

exports.ArticleRenderer = Q;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FydGljbGVSZW5kZXJlci9pbmRleC50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlUmVuZGVyZXIvQXJ0aWNsZUNvbXBvbmVudC50c3giLCIuLi8uLi9zcmMvdXRpbHMvc3R5bGVzLnRzIiwiLi4vLi4vc3JjL3V0aWxzL3VuZXNjYXBlLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZVJlbmRlcmVyL1RvcExldmVsRWxlbWVudC50c3giXSwibmFtZXMiOlsiUmVhY3RNYXJrZG93biIsIlJlYWN0IiwiZm9ybWF0U3RyaW5nVG9DYW1lbENhc2UiLCJzdHIiLCJzcGxpdHRlZCIsIndvcmQiLCJnZXRTdHlsZU9iamVjdEZyb21TdHJpbmciLCJzdHlsZSIsImVsIiwicHJvcGVydHkiLCJ2YWx1ZSIsImZvcm1hdHRlZFByb3BlcnR5IiwicmVFc2NhcGVkSHRtbCIsInJlSGFzRXNjYXBlZEh0bWwiLCJodG1sVW5lc2NhcGVzIiwiYmFzZVByb3BlcnR5T2YiLCJvYmplY3QiLCJrZXkiLCJ1bmVzY2FwZUh0bWxDaGFyIiwidW5lc2NhcGVIVE1MRW50aXRpZXMiLCJqc3giLCJUb3BMZXZlbEVsZW1lbnQiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJBcnRpY2xlQ29tcG9uZW50X2RlZmF1bHQiLCJfX3NwcmVhZFZhbHVlcyIsIlRvcExldmVsRWxlbWVudF9kZWZhdWx0IiwiRnJhZ21lbnQiLCJqc3hzIiwiQXJ0aWNsZUNvbXBvbmVudCIsIngiLCJzcGFuIiwiaWR4IiwidGV4dENvbnRlbnQiLCJzdHlsZXMiLCJpc1N1cGVyc2NyaXB0IiwiaXNTdWJzY3JpcHQiLCJBcnRpY2xlUmVuZGVyZXIiLCJhcnRpY2xlIiwiaGVhZGVyQ2xhc3NOYW1lIiwiYm9keUNsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsInJlbmRlclRpdGxlIiwiY29udGVudFR5cGUiLCJwYXJzZWRCb2R5IiwiaW5kZXhPZkZpcnN0UGFyYWdyYXBoIiwidGl0bGVFbGVtZW50IiwidGl0bGVDb21wb25lbnQiLCJBcnRpY2xlUmVuZGVyZXJfZGVmYXVsdCJdLCJtYXBwaW5ncyI6InlWQUNBLE9BQVMsaUJBQUFBLE1BQXFCLHVDQ0Q5QixVQUFZQyxNQUFXLFFDQXZCLElBQU1DLEVBQTJCQyxHQUFpQixDQUNoRCxJQUFNQyxHQUFXRCxHQUFBLFlBQUFBLEVBQUssTUFBTSxPQUFRLENBQUMsRUFDckMsT0FBSUMsRUFBUyxTQUFXLEVBQVVBLEVBQVMsQ0FBQyxFQUUxQ0EsRUFBUyxDQUFDLEVBQ1ZBLEVBQ0csTUFBTSxDQUFDLEVBQ1AsSUFBS0MsR0FBU0EsRUFBSyxDQUFDLEVBQUUsWUFBWSxFQUFJQSxFQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQ25ELEtBQUssRUFBRSxDQUVkLEVBRWFDLEVBQTRCSCxHQUFtQixDQUMxRCxJQUFNSSxFQUFRLENBQUMsRUFFZixNQUFJLENBQUNKLEdBQU9BLEVBQUksT0FBUyxHQUV6QkEsRUFBSSxRQUFTSyxHQUFPLENBQ2xCLEdBQU0sQ0FBQ0MsRUFBVUMsQ0FBSyxFQUFJRixFQUFHLE1BQU0sR0FBRyxFQUN0QyxHQUFJLEdBQUNDLEdBQVksQ0FBQ0MsR0FFbEIsSUFBSUQsR0FBWUMsRUFBTyxDQUNyQixJQUFNQyxFQUFvQlQsRUFBd0JPLEVBQVMsS0FBSyxDQUFDLEVBQ2pFRixFQUFNSSxDQUFpQixFQUFJRCxFQUFNLEtBQUssRUFDdEMsT0FFRixPQUFRRCxFQUFVLENBQ2hCLElBQUssWUFDSEYsRUFBTSxlQUFpQixZQUN2QixNQUNGLElBQUssZUFDSEEsRUFBTSxlQUFpQixlQUN2QixNQUNGLElBQUssU0FDSEEsRUFBTSxVQUFZLFNBQ2xCLE1BQ0YsSUFBSyxPQUNIQSxFQUFNLFdBQWEsT0FDbkIsTUFDRixJQUFLLGlCQUNIQSxFQUFNLGVBQWlCLGVBQ3ZCLE1BQ0YsSUFBSyxjQUNIQSxFQUFNLGNBQWdCLFFBQ3RCLE1BQ0YsSUFBSyxZQUNIQSxFQUFNLGNBQWdCLE1BQ3RCLE1BQ0YsUUFDRSxLQUNKLEVBQ0Ys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QUEsWUFBQUEsRUFBUyxNQUFNLEVBR3hCLE9BQ0VWLEVBQUMsT0FBSSxVQUFXYSxFQUNkLFVBQUFyQixFQUFDLE9BQUksVUFBV21CLEVBQ2IsU0FBQUcsRUFBY0EsRUFBWUssQ0FBYyxFQUFJQSxFQUMvQyxFQUNBM0IsRUFBQyxPQUFJLFVBQVdvQixFQUNiLFNBQUFJLEdBQUEsWUFBQUEsRUFBWSxJQUFJLENBQUNkLEVBQVFFLElBR3hCWixFQUFDTSxFQUFBLENBQWdCLFFBQVNJLEVBQWEsUUFBU0UsR0FBZEEsQ0FBbUIsR0FFekQsR0FDRixDQUVKLEVBRU9nQixFQUFRWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdE1hcmtkb3duIH0gZnJvbSAncmVhY3QtbWFya2Rvd24vbGliL3JlYWN0LW1hcmtkb3duLmpzJztcblxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IEFydGljbGVDb21wb25lbnQgZnJvbSAnLi9BcnRpY2xlQ29tcG9uZW50JztcbmltcG9ydCBUb3BMZXZlbEVsZW1lbnQgZnJvbSAnLi9Ub3BMZXZlbEVsZW1lbnQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhcnRpY2xlPzogQXJ0aWNsZTtcbiAgYm9keUNsYXNzTmFtZT86IHN0cmluZztcbiAgY29udGFpbmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBoZWFkZXJDbGFzc05hbWU/OiBzdHJpbmc7XG4gIHJlbmRlclRpdGxlPzogKHRpdGxlRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IEFydGljbGVSZW5kZXJlciA9ICh7XG4gIGFydGljbGUsXG4gIGhlYWRlckNsYXNzTmFtZSxcbiAgYm9keUNsYXNzTmFtZSxcbiAgY29udGFpbmVyQ2xhc3NOYW1lLFxuICByZW5kZXJUaXRsZSxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRUeXBlID0gYXJ0aWNsZT8uY29udGVudFR5cGU7XG5cbiAgY29uc29sZS5sb2coJ2NvbnRlbnRUeXBlJywgY29udGVudFR5cGUpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gJ1RFWFRfTUFSS0RPV04nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWV9PlxuICAgICAgICB7YXJ0aWNsZT8uY29udGVudCA/IChcbiAgICAgICAgICA8UmVhY3RNYXJrZG93bj57U3RyaW5nKGFydGljbGUuY29udGVudCl9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzcGFuPk5vIGNvbnRlbnQgdG8gZGlzcGxheTwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBwYXJzZWRCb2R5OiBhbnlbXSA9IGFydGljbGU/LmNvbnRlbnQgPyBKU09OLnBhcnNlKGFydGljbGUuY29udGVudCkgOiBbXTtcbiAgY29uc3QgaW5kZXhPZkZpcnN0UGFyYWdyYXBoID0gcGFyc2VkQm9keS5maW5kSW5kZXgoKHgpID0+XG4gICAgWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoNycsICdwJ10uaW5jbHVkZXMoeC50YWcpLFxuICApO1xuXG4gIGNvbnN0IFt0aXRsZUVsZW1lbnRdID0gcGFyc2VkQm9keS5zcGxpY2UoaW5kZXhPZkZpcnN0UGFyYWdyYXBoLCAxKTtcblxuICBjb25zdCB0aXRsZUNvbXBvbmVudCA9IHRpdGxlRWxlbWVudCA/IChcbiAgICA8QXJ0aWNsZUNvbXBvbmVudCB4PXt0aXRsZUVsZW1lbnQuY2hpbGRyZW59IC8+XG4gICkgOiAoXG4gICAgPHNwYW4+e2FydGljbGU/LnRpdGxlfTwvc3Bhbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hlYWRlckNsYXNzTmFtZX0+XG4gICAgICAgIHtyZW5kZXJUaXRsZSA/IHJlbmRlclRpdGxlKHRpdGxlQ29tcG9uZW50KSA6IHRpdGxlQ29tcG9uZW50fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Ym9keUNsYXNzTmFtZX0+XG4gICAgICAgIHtwYXJzZWRCb2R5Py5tYXAoKHg6IGFueSwgaWR4KSA9PiAoXG4gICAgICAgICAgLy8gTm8gc3RhYmxlIGtleSBhdmFpbGFibGVcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgPFRvcExldmVsRWxlbWVudCBlbGVtZW50PXt4fSBrZXk9e2lkeH0ga2V5RWxlbT17aWR4fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVJlbmRlcmVyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRTdHlsZU9iamVjdEZyb21TdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9zdHlsZXMnO1xuaW1wb3J0IHsgdW5lc2NhcGVIVE1MRW50aXRpZXMgfSBmcm9tICcuLi8uLi91dGlscy91bmVzY2FwZSc7XG5cbmltcG9ydCBUb3BMZXZlbEVsZW1lbnQgZnJvbSAnLi9Ub3BMZXZlbEVsZW1lbnQnO1xuXG5jb25zdCBBcnRpY2xlQ29tcG9uZW50ID0gKHsgeCB9OiBhbnkpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3gubWFwKChzcGFuOiBhbnksIGlkeCkgPT4gKFxuICAgICAgICAgIC8vIE5vIHN0YWJsZSBrZXkgYXZhaWxhYmxlXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIDxBcnRpY2xlQ29tcG9uZW50IHg9e3NwYW59IGtleT17aWR4fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgaWYgKHggPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgdGV4dENvbnRlbnQgPSB0eXBlb2YgeCA9PT0gJ3N0cmluZycgPyB4IDogeC5kYXRhO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZU9iamVjdEZyb21TdHJpbmcoeD8uc3R5bGUgfHwgJycpO1xuICBjb25zdCBpc1N1cGVyc2NyaXB0ID0gQm9vbGVhbihzdHlsZXNbJ3ZlcnRpY2FsLWFsaWduJ10gPT09ICdzdXBlcicpO1xuICBjb25zdCBpc1N1YnNjcmlwdCA9IEJvb2xlYW4oc3R5bGVzWyd2ZXJ0aWNhbC1hbGlnbiddID09PSAnc3ViJyk7XG5cbiAgY29uc3QgYXJ0aWNsZUNvbXBvbmVudHMgPSBbJ2xpJywgJ3RyJywgJ3RkJ107XG5cbiAgaWYgKGFydGljbGVDb21wb25lbnRzLmluY2x1ZGVzKHgudGFnKSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgeC50YWcsXG4gICAgICB7IHN0eWxlOiBzdHlsZXMsIC4uLnguYXR0cnMgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXJ0aWNsZUNvbXBvbmVudCwgeyB4OiB4LmNoaWxkcmVuIH0pLFxuICAgICk7XG4gIH1cblxuICBpZiAodGV4dENvbnRlbnQgIT0gbnVsbCkge1xuICAgIGNvbnN0IHRhZyA9IGlzU3VwZXJzY3JpcHQgPyAnc3VwJyA6IGlzU3Vic2NyaXB0ID8gJ3N1YicgOiAnc3Bhbic7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICB0YWcsXG4gICAgICB7IHN0eWxlOiBzdHlsZXMgfSxcbiAgICAgIHVuZXNjYXBlSFRNTEVudGl0aWVzKHRleHRDb250ZW50KSxcbiAgICApO1xuICB9XG5cbiAgaWYgKHgudGFnID09PSAnc3BhbicgJiYgeC5kYXRhID09IG51bGwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxBcnRpY2xlQ29tcG9uZW50IHg9e3guY2hpbGRyZW59IC8+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIGlmICh4LnRhZyA9PT0gJ3AnKSB7XG4gICAgcmV0dXJuIDxUb3BMZXZlbEVsZW1lbnQgZWxlbWVudD17eH0gLz47XG4gIH1cblxuICBpZiAoeC50YWcgPT09ICdhJykge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt4LmhyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBzdHlsZT17c3R5bGVzfT5cbiAgICAgICAge3guZGF0YX1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG4gIGlmICh4LnRhZyA9PT0gJ2ltZycgfHwgeC50YWcgPT09ICdpbWFnZScpIHtcbiAgICByZXR1cm4gPGltZyBzcmM9e3guc3JjfSBhbHQ9e3guYWx0fSB0aXRsZT17eC50aXRsZX0gLz47XG4gIH1cblxuICBpZiAoeC50eXBlID09PSAnQkxPQ0tRVU9URScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgIDxwIGRpcj1cImx0clwiPlFVT1RFIFRFWFQ8L3A+XG4gICAgICAgIDxwIGRpcj1cImx0clwiPi0mbmJzcDtRVU9URSBBVFRSSUJVVElPTjwvcD5cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ29tcG9uZW50O1xuIiwiY29uc3QgZm9ybWF0U3RyaW5nVG9DYW1lbENhc2UgPSAoc3RyPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNwbGl0dGVkID0gc3RyPy5zcGxpdCgnLScpIHx8IFtdO1xuICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAxKSByZXR1cm4gc3BsaXR0ZWRbMF07XG4gIHJldHVybiAoXG4gICAgc3BsaXR0ZWRbMF0gK1xuICAgIHNwbGl0dGVkXG4gICAgICAuc2xpY2UoMSlcbiAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgICAuam9pbignJylcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZU9iamVjdEZyb21TdHJpbmcgPSAoc3RyPzogc3RyaW5nW10pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIGlmICghc3RyIHx8IHN0ci5sZW5ndGggPCAxKSByZXR1cm4gc3R5bGU7XG5cbiAgc3RyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gPSBlbC5zcGxpdCgnOicpO1xuICAgIGlmICghcHJvcGVydHkgJiYgIXZhbHVlKSByZXR1cm47XG5cbiAgICBpZiAocHJvcGVydHkgJiYgdmFsdWUpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFByb3BlcnR5ID0gZm9ybWF0U3RyaW5nVG9DYW1lbENhc2UocHJvcGVydHkudHJpbSgpKTtcbiAgICAgIHN0eWxlW2Zvcm1hdHRlZFByb3BlcnR5XSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsaW5lLXRocm91Z2gnOlxuICAgICAgICBzdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2l0YWxpYyc6XG4gICAgICAgIHN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICBzdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmlrZS10aHJvdWdoJzpcbiAgICAgICAgc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdXBlcnNjcmlwdCc6XG4gICAgICAgIHN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnc3VwZXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1YnNjcmlwdCc6XG4gICAgICAgIHN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnc3ViJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdHlsZTtcbn07XG4iLCJjb25zdCByZUVzY2FwZWRIdG1sID0gLyYoPzphbXB8bHR8Z3R8cXVvdHwjMzkpOy9nO1xuY29uc3QgcmVIYXNFc2NhcGVkSHRtbCA9IFJlZ0V4cChyZUVzY2FwZWRIdG1sLnNvdXJjZSk7XG5cbmNvbnN0IGh0bWxVbmVzY2FwZXMgPSB7XG4gICcmYW1wOyc6ICcmJyxcbiAgJyZsdDsnOiAnPCcsXG4gICcmZ3Q7JzogJz4nLFxuICAnJnF1b3Q7JzogJ1wiJyxcbiAgJyYjMzk7JzogXCInXCIsXG59O1xuXG5jb25zdCBiYXNlUHJvcGVydHlPZiA9IChvYmplY3Q6IFJlY29yZDxhbnksIGFueT4pID0+IChrZXk6IGFueSkgPT5cbiAgb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcblxuY29uc3QgdW5lc2NhcGVIdG1sQ2hhciA9IGJhc2VQcm9wZXJ0eU9mKGh0bWxVbmVzY2FwZXMpO1xuXG5leHBvcnQgY29uc3QgdW5lc2NhcGVIVE1MRW50aXRpZXMgPSAoc3RyOiBzdHJpbmcpID0+XG4gIHN0ciAmJiByZUhhc0VzY2FwZWRIdG1sLnRlc3Qoc3RyKVxuICAgID8gc3RyLnJlcGxhY2UocmVFc2NhcGVkSHRtbCwgdW5lc2NhcGVIdG1sQ2hhcilcbiAgICA6IHN0cjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBcnRpY2xlQ29tcG9uZW50IGZyb20gJy4vQXJ0aWNsZUNvbXBvbmVudCc7XG5cbmNvbnN0IFRvcExldmVsRWxlbWVudCA9ICh7IGVsZW1lbnQgfTogYW55KSA9PiB7XG4gIGlmIChlbGVtZW50LnRhZyA9PT0gJ2hyJykge1xuICAgIHJldHVybiA8aHIgLz47XG4gIH1cblxuICBjb25zdCBjaGlsZHJlbiA9IDxBcnRpY2xlQ29tcG9uZW50IHg9e2VsZW1lbnQuY2hpbGRyZW59IC8+O1xuXG4gIGNvbnN0IGFydGljbGVDb21wb25lbnRzID0gWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddO1xuXG4gIGlmIChhcnRpY2xlQ29tcG9uZW50cy5pbmNsdWRlcyhlbGVtZW50LnRhZykpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50LnRhZywgeyAuLi5lbGVtZW50LmF0dHJzIH0sIGNoaWxkcmVuKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnRhZyA9PT0gJ3RhYmxlJykge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPlxuICAgICAgICA8dGJvZHk+e2NoaWxkcmVufTwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cblxuICBpZiAoZWxlbWVudC50YWcgPT09ICdwJyB8fCBlbGVtZW50LnRhZyA9PT0gJ3NwYW4nKSB7XG4gICAgcmV0dXJuIDxwPntjaGlsZHJlbn08L3A+O1xuICB9XG4gIGlmIChlbGVtZW50LnRhZyA9PT0gJ3VsJyAmJiBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJldHVybiA8dWw+e2NoaWxkcmVufTwvdWw+O1xuICB9XG4gIGlmIChlbGVtZW50LnRhZyA9PT0gJ29sJyAmJiBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJldHVybiA8b2w+e2NoaWxkcmVufTwvb2w+O1xuICB9XG4gIGlmIChlbGVtZW50LnRhZyA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICByZXR1cm4gPEFydGljbGVDb21wb25lbnQgeD17ZWxlbWVudH0gLz47XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BMZXZlbEVsZW1lbnQ7XG4iXX0=