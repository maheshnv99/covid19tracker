(this.webpackJsonpmycovid19tracker=this.webpackJsonpmycovid19tracker||[]).push([[0],{12:function(e,t,a){e.exports={container:"india_container__GhP6U",test:"india_test__2q2PH",indiabar:"india_indiabar__3Ltk6",infected:"india_infected__2fGEW",recovered:"india_recovered__1y7q6",deaths:"india_deaths__18Uba",active:"india_active__2l7W2",label:"india_label__3Q8-z"}},13:function(e,t,a){e.exports={container:"stategraph_container__gMr57",test:"stategraph_test__2pPyQ",indiabar:"stategraph_indiabar__2ACT7",infected:"stategraph_infected__1oTWk",recovered:"stategraph_recovered__2BSkr",deaths:"stategraph_deaths__1SiuH",active:"stategraph_active__1w40j",label:"stategraph_label__2zP1H"}},15:function(e,t,a){e.exports={container:"world_container__1YWLM",test:"world_test__d3_iG",infected:"world_infected__1VEb2",recovered:"world_recovered__2RCK2",deaths:"world_deaths__8gb53",worldbar:"world_worldbar__YtsuT",label:"world_label__2L9u0"}},207:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(73),o=a.n(c),s=(a(91),a(7)),l=a.n(s),i=a(14),d=a(74),m=a(75),u=a(84),v=a(82),h=a(76),E=a.n(h),p=a(226),f=a(230),g=a(227),b=a(228),_=a(5),y=a.n(_),w=a(15),x=a.n(w),C=a(9),N=a.n(C),B=a(20),k=function(e){var t=e.confirmed,a=e.recovered,r=e.deaths,c=t?n.a.createElement(B.a,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"Cases",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(0,0,0,0.5)"],data:[t,a,r]}]},options:{legend:{display:!1},title:{display:!0,text:"current cases worldwide"}}}):null;return n.a.createElement("div",null,t?c:null)},j=function(e){var t=e.worlddata,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:x.a.container},n.a.createElement("label",{className:x.a.label},"WorldWide Cases of Covid19"),n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:3,className:N()(x.a.test,x.a.infected)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Confirmed"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:a,duration:2,separator:","})),n.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0},n.a.createElement("br",null),"Last updated on:",n.a.createElement("br",null),new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Confirmed cases"))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:3,className:N()(x.a.test,x.a.recovered)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:r,duration:2,separator:","})),n.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0},n.a.createElement("br",null),"Last updated on:",n.a.createElement("br",null),new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Recovered cases"))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:3,className:N()(x.a.test,x.a.deaths)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:c,duration:2,separator:","})),n.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0},n.a.createElement("br",null),"Last Updated on:",n.a.createElement("br",null),new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Deaths"))),n.a.createElement(p.a,{item:!0,component:f.a,className:x.a.worldbar,xs:12,md:12},n.a.createElement("br",null),n.a.createElement(k,{confirmed:a,recovered:r,deaths:c})))):"loading.."},P=a(12),D=a.n(P),S=function(e){var t=e.confirmed,a=e.recovered,r=e.deaths,c=e.active,o=t?n.a.createElement(B.a,{data:{labels:["Confirmed","Active","Recovered","Deaths"],datasets:[{label:"Cases",backgroundColor:["rgba(0,0,255,0.5)","rgba(255,0,0,0.5)","rgba(0,255,0,0.5)","rgba(0,0,0,0.5)"],data:[t,c,a,r]}]},options:{legend:{display:!1},title:{display:!0,text:"Covid 19 cases in india"}}}):null;return n.a.createElement("div",null,t?o:null)},O=function(e){var t=e.countrydata,a=t.confirmed,r=t.active,c=t.recovered,o=t.deaths,s=t.achanges,l=t.rchanges,i=t.dchanges,d=t.cchanges;return a?n.a.createElement("div",{className:D.a.container},n.a.createElement("label",{className:D.a.label},"Cases of Covid19 in India"),n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(D.a.test,D.a.infected)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Confirmed"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:a,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Confirmed Cases"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Newly Confirmed:",n.a.createElement(y.a,{start:0,end:d,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(D.a.test,D.a.active)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Active"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:r,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Active Cases"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"New Cases:",n.a.createElement(y.a,{start:0,end:s,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(D.a.test,D.a.recovered)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:c,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Cases recovered"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Newly recovered:",n.a.createElement(y.a,{start:0,end:l,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(D.a.test,D.a.deaths)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:o,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Total death Cases"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"New Deaths:",n.a.createElement(y.a,{start:0,end:i,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,className:D.a.indiabar,xs:12,md:12},n.a.createElement("br",null),n.a.createElement(S,{confirmed:a,recovered:c,deaths:o,active:r})))):"loading.."},A=a(83),R=a(231),W=a(229),L=a(28),U=a.n(L),M="https://api.covidindiatracker.com/state_data.json",T=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,r,n,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("https://covid19.mathdro.id/api");case 3:return t=e.sent,a=t.data,r=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:r.value,recovered:n.value,deaths:c.value,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,r,n,c,o,s,i,d,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("https://api.covidindiatracker.com/total.json");case 3:return t=e.sent,a=t.data,r=a.confirmed,n=a.active,c=a.recovered,o=a.deaths,s=a.achanges,i=a.rchanges,d=a.dchanges,m=a.cchanges,e.abrupt("return",{confirmed:r,active:n,recovered:c,deaths:o,cchanges:m,achanges:s,rchanges:i,dchanges:d});case 16:e.prev=16,e.t0=e.catch(0);case 18:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(M);case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(M);case 3:for(t=e.sent,a=t.data,r=[],n=0;n<a.length;n++)r.push(a[n].state);return e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),z=function(e){var t=e.selector,a=Object(r.useState)([]),c=Object(A.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,q();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),n.a.createElement(R.a,null,n.a.createElement(W.a,{defaultValue:"",onChange:function(e){t(e.target.value)}},n.a.createElement("option",{value:"select"},"Select State"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:t},e)}))))},I=a(13),J=a.n(I),Q=function(e){var t=e.confirmed,a=e.recovered,r=e.deaths,c=e.active,o=t?n.a.createElement(B.a,{data:{labels:["Confirmed","Active","Recovered","Deaths"],datasets:[{label:"Cases",backgroundColor:["rgba(0,0,255,0.5)","rgba(255,0,0,0.5)","rgba(0,255,0,0.5)","rgba(0,0,0,0.5)"],data:[t,c,a,r]}]},options:{legend:{display:!1},title:{display:!0,text:"Covid 19 cases"}}}):null;return n.a.createElement("div",null,t?o:null)},V=function(e,t){var a=e.data,r=a.confirmed,c=a.active,o=a.recovered,s=a.deaths,l=a.achanges,i=a.rchanges,d=a.dchanges,m=a.cchanges;t.stateselected;return r?n.a.createElement("div",{className:J.a.container},n.a.createElement("label",{className:J.a.label},"Cases of Covid19"),n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(J.a.test,J.a.infected)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Confirmed"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:r,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Confirmed Cases"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Newly Confirmed:",n.a.createElement(y.a,{start:0,end:m,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(J.a.test,J.a.active)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Active"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:c,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Active Cases"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"New Cases:",n.a.createElement(y.a,{start:0,end:l,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(J.a.test,J.a.recovered)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:o,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Number of Cases recovered"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Newly recovered:",n.a.createElement(y.a,{start:0,end:i,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:N()(J.a.test,J.a.deaths)},n.a.createElement(g.a,null,n.a.createElement(b.a,{color:"textPrimary",variant:"h5",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{variant:"h5"}," ",n.a.createElement(y.a,{start:0,end:s,duration:3,separator:","})),n.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Total death Cases"),n.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"New Deaths:",n.a.createElement(y.a,{start:0,end:d,duration:3,separator:","})))),n.a.createElement(p.a,{item:!0,component:f.a,className:J.a.indiabar,xs:12,md:12},n.a.createElement("br",null),n.a.createElement(Q,{confirmed:r,recovered:o,deaths:s,active:c})))):"loading.."},Y=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).stateselector=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"select"===t?r.setState({stateselect:""}):(a=r.state.statedata[t],n={confirmed:a.confirmed,active:a.active,recovered:a.recovered,deaths:a.deaths,cchanges:a.cchanges,achanges:a.achanges,rchanges:a.rchanges,dchanges:a.dchanges},r.setState({stateselect:r.state.statenames[t],selecteddata:n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={worlddata:{},countrydata:{},statedata:{},statenames:{},stateselect:"",selecteddata:{}},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,r,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=e.sent,e.next=5,G();case 5:return a=e.sent,e.next=8,H();case 8:for(r=e.sent,n=[],c=0;c<r.length;c++)n.push(r[c].state);this.setState({statenames:n}),this.setState({statedata:r}),this.setState({worlddata:t}),this.setState({countrydata:a});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:E.a.container},n.a.createElement(j,{worlddata:this.state.worlddata}),n.a.createElement(O,{countrydata:this.state.countrydata}),n.a.createElement(z,{selector:function(t){return e.stateselector(t)}}),n.a.createElement("div",null,""!==this.state.stateselect?n.a.createElement(V,{data:this.state.selecteddata,stateselected:this.state.stateselect}):null))}}]),a}(n.a.Component);a(207);var K=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports={container:"covidtracker_container__1chM3"}},86:function(e,t,a){e.exports=a(208)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.3865a6af.chunk.js.map