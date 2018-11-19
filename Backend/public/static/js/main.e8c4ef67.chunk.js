(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(54)},37:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),i=a(4),o=a(5),s=a(7),u=a(6),p=a(8),m=a(56),h=a(58),d=a(57),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageWrapper"},"LANDING PAGE INTRO TO OUR PROJECT",r.a.createElement("footer",null,r.a.createElement("a",{href:"mailto:someone@oursite.com?subject=Hi!"},"Contact us")))}}]),t}(r.a.Component),v=a(20),b=a(55),E=a(11),O=a.n(E),g=(a(37),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"tripContainer"},r.a.createElement("p",null,r.a.createElement("span",null,this.props.departure)," to ",r.a.createElement("span",null,this.props.arrival),": ",this.props.distance," km")))}}]),t}(r.a.Component));a(40);O.a.setApiKey("AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U"),O.a.enableDebug();var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={departure:"",arrival:"",trips:[],totalDistance:0},a.handleDeparture=function(e){a.setState({departure:e.target.value})},a.handleArrival=function(e){a.setState({arrival:e.target.value})},a.clearFields=function(){a.setState({departure:"",arrival:""})},a.getLatLng=function(){var e=O.a.fromAddress(a.state.departure).then(function(e){return e.results[0].geometry.location}),t=O.a.fromAddress(a.state.arrival).then(function(e){return e.results[0].geometry.location});Promise.all([e,t]).then(function(e){a.getDistance(e[0],e[1]),a.clearFields()})},a.getDistance=function(e,t){var n=(t.lat-e.lat)*Math.PI/180,r=(t.lng-e.lng)*Math.PI/180,c=.5-Math.cos(n)/2+Math.cos(e.lat*Math.PI/180)*Math.cos(t.lat*Math.PI/180)*(1-Math.cos(r))/2,l=(2*(12742*Math.asin(Math.sqrt(c)))).toFixed(1),i={departure:a.state.departure,arrival:a.state.arrival,distance:l};a.setState({trips:Object(v.a)(a.state.trips).concat([i])},function(){var e=JSON.stringify(a.state.trips);localStorage.setItem("trips",e)})},a.getTrips=function(){if(localStorage.getItem("trips")){var e=JSON.parse(localStorage.getItem("trips"));a.setState({trips:e})}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTrips()}},{key:"render",value:function(){return r.a.createElement("div",{className:"pageWrapper"},r.a.createElement("form",{className:"addFlightsForm"},r.a.createElement("label",null,"Add your flight travels: "),r.a.createElement("input",{type:"text",id:"inputDeparture",placeholder:"Departure",onChange:this.handleDeparture,value:this.state.departure}),r.a.createElement("input",{type:"text",id:"inputArrival",placeholder:"Arrival",onChange:this.handleArrival,value:this.state.arrival}),r.a.createElement("button",{type:"button",className:"inputButton",onClick:this.getLatLng},"Submit")),r.a.createElement("div",{className:"myTravels"},r.a.createElement("h2",null,"My travels"),this.state.trips.map(function(e,t){return r.a.createElement(g,{departure:e.departure,arrival:e.arrival,distance:e.distance})}),r.a.createElement(b.a,{to:"/actionspage"},r.a.createElement("button",{type:"button",className:"toActionsPage"},"Let's compensate this!"))))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={saved:!1},a.handleClickSave=function(){var e=a.props.index,t=!a.state.saved;a.props.saveActionsLog(e,t),a.setState({saved:!a.state.saved})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"singleActionContainer"},r.a.createElement("h3",null,"ACTION: ",this.props.title),r.a.createElement("p",null,this.props.description),r.a.createElement("p",null,"Reduction of CO2 emission: ",r.a.createElement("span",null,this.props.co2value," tCO2e")," / ",this.props.timePeriod," year"),r.a.createElement("p",null,this.props.impact," impact")))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getActions=function(){fetch("http://localhost:8080/actions").then(function(e){return e.json()}).then(function(e){var t=Math.floor(Math.random()*e.length);e=e.slice(t,t+1),console.log(t),a.setState({actions:e})})},a.handleClickShuffle=function(){a.getActions()},a.state={actions:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Actions"),r.a.createElement("div",{className:"actionLoadButton"},r.a.createElement("button",{type:"button",className:"loadButton",onClick:this.handleClickShuffle},"Get action")),r.a.createElement("div",null,this.state.actions.map(function(e){return r.a.createElement(y,{index:e.index,title:e.title.toUpperCase(),description:e.description,co2value:e.co2value,timePeriod:e.timePeriod,impact:e.impact})})))}}]),t}(r.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageWrapper"},r.a.createElement(C,null))}}]),t}(r.a.Component),N=(a(45),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"headerTextContainer"},r.a.createElement(b.a,{to:"/"},r.a.createElement("h1",null,"Green Your Consious")),r.a.createElement(b.a,{to:"/flightspage"},r.a.createElement("p",null,"Calculate CO2")),r.a.createElement(b.a,{to:"/actionspage"},r.a.createElement("p",null,"Compansate")))}}]),t}(r.a.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:f}),r.a.createElement(d.a,{path:"/flightspage",exact:!0,component:j}),r.a.createElement(d.a,{path:"/actionspage",exact:!0,component:A}))))}}]),t}(r.a.Component);a(51);l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.e8c4ef67.chunk.js.map