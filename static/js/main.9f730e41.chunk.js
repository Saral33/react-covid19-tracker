(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(6),s=a.n(c),u=a(9),i=a(1),m=a(2),p=a(4),f=a(3),h=(a(5),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={terms:""},e.OnButtonClick=function(t){t.preventDefault(),e.props.searchTerms(e.state.terms)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"form"},r.a.createElement("input",{type:"text",placeholder:"Enter Country name",value:this.state.terms,onChange:function(t){return e.setState({terms:t.target.value})}}),r.a.createElement("button",{onClick:this.OnButtonClick},"Search")))}}]),a}(n.Component)),d=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Country:",r.a.createElement("span",{style:{color:"#192a56",marginLeft:"10px"}},e.UIdatas.Country," ")),r.a.createElement("h3",null,"Total Confirmed Cases:",r.a.createElement("span",{style:{color:"#fbc531",marginLeft:"10px"}},e.UIdatas.TotalConfirmed," ")),r.a.createElement("h3",null,"Total Recovery:",r.a.createElement("span",{style:{color:"#009432",marginLeft:"10px"}},e.UIdatas.TotalRecovered," ")),r.a.createElement("h3",null,"Total Deaths:",r.a.createElement("span",{style:{color:"#EA2027",marginLeft:"10px"}}," ",e.UIdatas.TotalDeaths)," "),r.a.createElement("h3",null,"Last Updated:",r.a.createElement("span",{style:{color:"#6F1E51",marginLeft:"10px"}},e.UIdatas.UpdateTime)," "))},v=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={Country:"",TotalConfirmed:null,TotalDeaths:null,TotalRecovered:null,UpdateTime:""},e.SearchCountry=function(){var t=Object(u.a)(s.a.mark((function t(a){var n,r,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/summary");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,o=r.Countries.find((function(e){return e.Country==a||e.Slug==a})),console.log(o),e.setState({Country:o.Country,TotalConfirmed:o.TotalConfirmed,TotalDeaths:o.TotalDeaths,TotalRecovered:o.TotalRecovered,UpdateTime:o.Date});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-data"},r.a.createElement("h2",null,"Covid-19 Tracker"),r.a.createElement(h,{searchTerms:this.SearchCountry}),r.a.createElement(d,{UIdatas:this.state}))}}]),a}(n.Component);l.a.render(r.a.createElement(v,null),document.querySelector("#root"))},5:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.9f730e41.chunk.js.map