(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=a(6),s=a.n(c),u=a(9),i=a(1),m=a(2),d=a(4),p=a(3),f=(a(5),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={terms:""},e.OnButtonClick=function(t){t.preventDefault(),e.props.searchTerms(e.state.terms)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"form"},r.a.createElement("input",{type:"text",placeholder:"Enter Country name",id:"input-field",onChange:function(t){return e.setState({terms:t.target.value})}}),r.a.createElement("button",{onClick:this.OnButtonClick},"Search")))}}]),a}(n.Component)),h=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"loader",style:{display:"none"}}),r.a.createElement("h3",null,"Country:",r.a.createElement("span",{style:{color:"#192a56",marginLeft:"10px"}},e.UIdatas.Country," ")),r.a.createElement("h3",null,"Total Confirmed Cases:",r.a.createElement("span",{style:{color:"#fbc531",marginLeft:"10px"}},e.UIdatas.TotalConfirmed," ")),r.a.createElement("h3",null,"Total Recovery:",r.a.createElement("span",{style:{color:"#009432",marginLeft:"10px"}},e.UIdatas.TotalRecovered," ")),r.a.createElement("h3",null,"Total Deaths:",r.a.createElement("span",{style:{color:"#EA2027",marginLeft:"10px"}}," ",e.UIdatas.TotalDeaths)," "),r.a.createElement("h3",null,"Last Updated:",r.a.createElement("span",{style:{color:"#6F1E51",marginLeft:"10px"}},e.UIdatas.UpdateTime)," "))},y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Country:"",TotalConfirmed:null,TotalDeaths:null,TotalRecovered:null,UpdateTime:""},e.SearchCountry=function(){var t=Object(u.a)(s.a.mark((function t(a){var n,r,l,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".loader").style.display="block",t.next=3,fetch("https://api.covid19api.com/summary");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,l=r.Countries.find((function(e){return e.Country==a||e.Slug==a})),o=l.Date.split("T")[0],document.querySelector("#input-field").value="",document.querySelector(".loader").style.display="none",e.setState({Country:l.Country,TotalConfirmed:l.TotalConfirmed,TotalDeaths:l.TotalDeaths,TotalRecovered:l.TotalRecovered,UpdateTime:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-data"},r.a.createElement("h2",null,"Covid-19 Tracker"),r.a.createElement(f,{searchTerms:this.SearchCountry}),r.a.createElement(h,{UIdatas:this.state}))}}]),a}(n.Component);o.a.render(r.a.createElement(y,null),document.querySelector("#root"))},5:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.2c2e9c3f.chunk.js.map