(this["webpackJsonpmine-collector"]=this["webpackJsonpmine-collector"]||[]).push([[0],{10:function(e,n,t){e.exports=t(27)},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),u=t.n(o),c=t(1),i=t(4),l=t.n(i);function m(e){var n=e.nearMineNum,t=e.mined,o=Object(r.useState)("notting"),u=Object(c.a)(o,2),i=u[0],l=u[1];return a.a.createElement("td",{onClick:function(n){n.preventDefault(),"notting"===i?t?(l("mine"),setTimeout((function(){alert("\uc2e4\ud328\uc785\ub2c8\ub2e4. \uac8c\uc784\uc744 \uc7ac\uc2dc\uc791\ud569\ub2c8\ub2e4."),window.location.reload()}),10)):(l("number"),e.upCurrent(1)):"flag"===i&&(l("notting"),t&&e.upCurrent(-1))},onContextMenu:function(n){n.preventDefault(),"notting"===i?(l("flag"),t&&e.upCurrent(1)):"flag"===i&&l("notting")}},function(e){var t;return"notting"===e?t="":"number"===e?t=n:"flag"===e?t="\ud83d\udea9":"mine"===e&&(t="\ud83d\udca3"),t}(i))}function f(e){for(var n=[],t=1;t<e.width+1;t++)n[t]=t;var r=n.map((function(n){return a.a.createElement(m,{key:n.toString(),nearMineNum:e.nearMineNum[n-1],mined:e.mined[n-1],upCurrent:e.upCurrent})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("tr",null,r))}function s(e){for(var n=e.nearMineNum,t=e.mined,o=[],u=1;u<e.height+1;u++)o[u]=u;var i=function(e){var n=Object(r.useState)(e),t=Object(c.a)(n,2),a=t[0],o=t[1];return[a,function(e){o(a+e)}]}(0),l=Object(c.a)(i,2),m=l[0],s=l[1];Object(r.useEffect)((function(){m===e.height*e.width&&e.openModal()}),[m,e]);var d=o.map((function(r){return a.a.createElement(f,{key:r.toString(),width:e.width,nearMineNum:n[r-1],mined:t[r-1],upCurrent:s})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("table",null,a.a.createElement("tbody",null,d)))}function d(e){return a.a.createElement("h1",{className:"Time"}," Time : ",e.time,"s ")}l.a.setAppElement("#root");var p=function(){var e=Object(r.useState)(0),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(r.useRef)(),i=Object(r.useState)(!1),m=Object(c.a)(i,2),f=m[0],p=m[1],h=Object(r.useRef)(function(e,n,t){for(var r,a=[],o=[],u=0;u<e;u++){var c=Array(n);c.fill(0),a.push(c)}for(var i=0;i<e;i++){for(var l=[],m=0;m<n;m++)(r=Math.random()<t)&&(i>0&&a[i-1][m]++,i<e-1&&a[i+1][m]++,m>0&&a[i][m-1]++,m<n-1&&a[i][m+1]++,i>0&&m>0&&a[i-1][m-1]++,i>0&&m<n-1&&a[i-1][m+1]++,i<e-1&&m>0&&a[i+1][m-1]++,i<e-1&&m<n-1&&a[i+1][m+1]++),l.push(r);o.push(l)}return[a,o]}(10,10,.1));return Object(r.useEffect)((function(){var e=setInterval((function(){o((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Board"},a.a.createElement("h1",null," Mine Collector "),a.a.createElement(d,{time:t}),a.a.createElement(s,{openModal:function(){p(!0)},mined:h.current[1],nearMineNum:h.current[0],width:10,height:10}),a.a.createElement(l.a,{className:"Modal",isOpen:f,onRequestClose:function(){p(!1)},onAfterOpen:function(){u.current=t}},a.a.createElement("p",null,"\ucd95\ud558\ud569\ub2c8\ub2e4. ",u.current,"\ucd08 \uac78\ub838\uc2b5\ub2c8\ub2e4.")),a.a.createElement("p",null,"Good")))};var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(26);u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.212891c3.chunk.js.map