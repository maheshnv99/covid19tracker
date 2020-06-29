(this.webpackJsonpmycovid19tracker=this.webpackJsonpmycovid19tracker||[]).push([[0],{10:function(e,a,t){e.exports={container:"world_container__1YWLM",test:"world_test__d3_iG",infected:"world_infected__1VEb2",recovered:"world_recovered__2RCK2",deaths:"world_deaths__8gb53",worldbar:"world_worldbar__YtsuT",label:"world_label__2L9u0"}},202:function(e,a,t){},203:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(68),o=t.n(c),l=(t(86),t(14)),i=t.n(l),s=t(21),d=t(69),m=t(70),u=t(78),v=t(77),E=t(71),h=t.n(E),p=t(216),f=t(219),b=t(218),g=t(220),_=t(5),y=t.n(_),w=t(10),x=t.n(w),N=t(13),B=t.n(N),C=t(29),k=function(e){var a=e.confirmed,t=e.recovered,r=e.deaths,c=a?n.a.createElement(C.a,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"Cases",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(0,0,0,0.5)"],data:[a,t,r]}]},options:{legend:{display:!1},title:{display:!0,text:"current cases worldwide"}}}):null;return n.a.createElement("div",null,a?c:null)},D=function(e){var a=e.worlddata,t=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate;return t?n.a.createElement("div",{className:x.a.container},n.a.createElement("label",{className:x.a.label},"WorldWide Cases of Covid19"),n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:3,className:B()(x.a.test,x.a.infected)},n.a.createElement(b.a,null,n.a.createElement(g.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Confirmed"),n.a.createElement(g.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:t,duration:2,separator:","})),n.a.createElement(g.a,{color:"textPrimary",gutterBottom:!0},n.a.createElement("br",null),"Last updated on:",n.a.createElement("br",null),new Date(o).toDateString()),n.a.createElement(g.a,{variant:"body2",gutterBottom:!0},"Number of Confirmed cases"))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:3,className:B()(x.a.test,x.a.recovered)},n.a.createElement(b.a,null,n.a.createElement(g.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Recovered"),n.a.createElement(g.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:r,duration:2,separator:","})),n.a.createElement(g.a,{color:"textPrimary",gutterBottom:!0},n.a.createElement("br",null),"Last updated on:",n.a.createElement("br",null),new Date(o).toDateString()),n.a.createElement(g.a,{variant:"body2",gutterBottom:!0},"Number of Recovered cases"))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:3,className:B()(x.a.test,x.a.deaths)},n.a.createElement(b.a,null,n.a.createElement(g.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Deaths"),n.a.createElement(g.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:c,duration:2,separator:","})),n.a.createElement(g.a,{color:"textPrimary",gutterBottom:!0},n.a.createElement("br",null),"Last Updated on:",n.a.createElement("br",null),new Date(o).toDateString()),n.a.createElement(g.a,{variant:"body2",gutterBottom:!0},"Number of Deaths"))),n.a.createElement(p.a,{item:!0,component:f.a,className:x.a.worldbar,xs:12,md:12},n.a.createElement("br",null),n.a.createElement(k,{confirmed:t,recovered:r,deaths:c})))):"loading.."},P=t(6),j=t.n(P),O=function(e){var a=e.confirmed,t=e.recovered,r=e.deaths,c=e.active,o=a?n.a.createElement(C.a,{data:{labels:["Confirmed","Active","Recovered","Deaths"],datasets:[{label:"Cases",backgroundColor:["rgba(0,0,255,0.5)","rgba(255,0,0,0.5)","rgba(0,255,0,0.5)","rgba(0,0,0,0.5)"],data:[a,c,t,r]}]},options:{legend:{display:!1},title:{display:!0,text:"Covid 19 cases in india"}}}):null;return n.a.createElement("div",null,a?o:null)},W=function(e){var a=e.countrydata,t=a.confirmed,r=a.active,c=a.recovered,o=a.deaths,l=a.achanges,i=a.rchanges,s=a.dchanges,d=a.cchanges;return t?n.a.createElement("div",{className:j.a.container},n.a.createElement("label",{className:j.a.label},"Cases of Covid19 in India"),n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:B()(j.a.test,j.a.infected)},n.a.createElement(b.a,null,n.a.createElement(g.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Confirmed"),n.a.createElement(g.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:t,duration:3,separator:","})),n.a.createElement(g.a,{variant:"body2",gutterBottom:!0},"Number of Confirmed Cases"),n.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"Newly Confirmed:",n.a.createElement(y.a,{start:0,end:d,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:B()(j.a.test,j.a.active)},n.a.createElement(b.a,null,n.a.createElement(g.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Active"),n.a.createElement(g.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:r,duration:3,separator:","})),n.a.createElement(g.a,{variant:"body2",gutterBottom:!0},"Number of Active Cases"),n.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"New Cases:",n.a.createElement(y.a,{start:0,end:l,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:B()(j.a.test,j.a.recovered)},n.a.createElement(b.a,null,n.a.createElement(g.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Recovered"),n.a.createElement(g.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:c,duration:3,separator:","})),n.a.createElement(g.a,{variant:"body2",gutterBottom:!0},"Number of Cases recovered"),n.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"Newly recovered:",n.a.createElement(y.a,{start:0,end:i,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:B()(j.a.test,j.a.deaths)},n.a.createElement(b.a,null,n.a.createElement(g.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Deaths"),n.a.createElement(g.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:o,duration:3,separator:","})),n.a.createElement(g.a,{variant:"body2",gutterBottom:!0},"Total death Cases"),n.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"New Deaths:",n.a.createElement(y.a,{start:0,end:s,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,className:j.a.indiabar,xs:12,md:12},n.a.createElement("br",null),n.a.createElement(O,{confirmed:t,recovered:c,deaths:o,active:r})))):"loading.."},L=t(42),R=t.n(L),S=function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,r,n,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://covid19.mathdro.id/api");case 3:return a=e.sent,t=a.data,r=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate,e.abrupt("return",{confirmed:r.value,recovered:n.value,deaths:c.value,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,r,n,c,o,l,s,d,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://api.covidindiatracker.com/total.json");case 3:return a=e.sent,t=a.data,r=t.confirmed,n=t.active,c=t.recovered,o=t.deaths,l=t.achanges,s=t.rchanges,d=t.dchanges,m=t.cchanges,e.abrupt("return",{confirmed:r,active:n,recovered:c,deaths:o,cchanges:m,achanges:l,rchanges:s,dchanges:d});case 16:e.prev=16,e.t0=e.catch(0);case 18:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),A=function(e){Object(u.a)(t,e);var a=Object(v.a)(t);function t(e){var r;return Object(d.a)(this,t),(r=a.call(this,e)).state={worlddata:{},countrydata:{}},r}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return a=e.sent,e.next=5,U();case 5:t=e.sent,this.setState({worlddata:a}),this.setState({countrydata:t});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:h.a.container},n.a.createElement(D,{worlddata:this.state.worlddata}),n.a.createElement(W,{countrydata:this.state.countrydata}))}}]),t}(n.a.Component);t(202);var M=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports={container:"india_container__GhP6U",test:"india_test__2q2PH",indiabar:"india_indiabar__3Ltk6",infected:"india_infected__2fGEW",recovered:"india_recovered__1y7q6",deaths:"india_deaths__18Uba",active:"india_active__2l7W2",label:"india_label__3Q8-z"}},71:function(e,a,t){e.exports={container:"covidtracker_container__1chM3"}},81:function(e,a,t){e.exports=t(203)},86:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.8e4e9a3a.chunk.js.map