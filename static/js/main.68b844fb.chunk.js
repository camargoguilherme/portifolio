(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"menu":[{"id":"portfolio","title":"Portfolio"},{"id":"about","title":"Sobre"},{"id":"skills","title":"Habilidades"},{"id":"infos","title":"Infos"},{"id":"blog","title":"Blog"},{"id":"contact","title":"Contato"}],"profile":{"name":"Guilherme Camargo","resume":"Ol\xe1, sou Guilherme Camargo. Back-end Developer, nasci em Congonhinhas - PR, atualmente morando em Londrina \u2013 PR.","perfil":"img/profile.jpeg","email":"guilhermecamargo57@hotmail.com","area":"Desenvolvimento Back-end","phone":"+55 (43) 984 231 673"},"medias":[{"media":"fa-facebook-f","link":"https://www.facebook.com/guilhermecamargo57"},{"media":"fa-twitter","link":"https://twitter.com/camargo_guilher"},{"media":"fa-linkedin-in","link":"https://www.linkedin.com/in/guilherme-camargo-6ba534127/"}],"portfolio":[{"data-target":"#portfolioModal1","src":"img/portfolio/cabin.png"},{"data-target":"#portfolioModal2","src":"img/portfolio/cake.png"},{"data-target":"#portfolioModal3","src":"img/portfolio/circus.png"},{"data-target":"#portfolioModal4","src":"img/portfolio/game.png"},{"data-target":"#portfolioModal5","src":"img/portfolio/safe.png"},{"target":"#portfolioModal6","src":"img/portfolio/submarine.png"}],"details":[{"title":"BIOGRAFIA","info":"Em 2010 iniciei o ensino medio no Colegio Estadual Padre Jeronimo Onuma em S\xe3o Sebasti\xe3o da Amoreria - PR. Em 2013, ap\xf3s concluir o ensino m\xe9dio, me mudei para Londrina - PR por livre e espantanea press\xe3o do meu informa\xe7\xe3o para poder estudar para o velitbular da UEL, na \xe9poca queria cursar Engenharia Civil. No mesmo ano, conheci minha esposa Sandra (agora, ex-esposa). Em 2014 nasceu minha filha (Thayla), minha princesinha. Em 2016 iniciei o curso superior de tecnologia em an\xe1lise de sistemas de informa\xe7\xe3o na Universidade Tecnol\xf3gica Federal do Paran\xe1 (UTFPR)."},{"title":"PROFISS\xc3O","info":"Trabalhei no Super Muffato (2013-2015) como empacotador, auxiliar de confeitaria e auxiliar de padaria. No final de 2015 comecei a trabalhar em uma loja de produtos importados diretamente do Jap\xe3o como Atendente / Almoxarife / Caixa. Foi onde descobri que gostava muito da area de tecnologia e decidi ingressar na UTFPR. Em janeiro de 2018, entrei no Hospital Evang\xe9lico de Londrina e fiquei at\xe9 Julho, como atendente de suporte. Trabalhei de Julho a Dezembro de 2018 em uma lanchonete com a minha ex. Atualmente estou na TCS (Tata Consultancy Services), ingressei em fevereiro de 2019."}],"curriculum":"assets/CV-Guilherme-Camargo.pdf","about":[{"title":"Interesses","items":["Ecossistema Javascript","Desenvolvimento Back-end","Aplicativos Mobile"]},{"title":"Idiomas","items":["Portugu\xeas \u2013 Nativo","Ingl\xeas \u2013 B\xe1sico"]},{"title":"Forma\xe7\xe3o","items":["2016-2019/UTFPR \u2013 Tecnologia em An\xe1lise e Desenvolvimento de Sistemas"]},{"title":"Atividades desenvolvidas","items":["Desenvolvimento de Aplicativos Mobile","Desenvolvimento Back-End","Administra\xe7\xe3o de Banco de Dados Oracle/SQL Server"]}],"skills":["JavaScript","MySQL","Ajax","PostgreSQL","Java","CSS3","PHP","SQL Server","SQL","JQuery","HTML5","NodeJS","MongoDB","GIT","Android","React Js","React Native","Laravel","Linux","JSON","Python","phpMyAdmin","MySQL Workbench","XAMPP","Composer","NPM","SublimeText","VirtualBox","Firebase","Heroku"]}')},19:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(1),l=a(2),o=a(4),m=a(3),u=a(5),d=a(6),p=a.n(d),h=a(7),b=(a(25),a(17)),f=a.n(b).a.create({baseURL:"https://api-meu-portfolio.herokuapp.com"}),v=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f.get("/profile"));case 2:return e=t.sent,t.abrupt("return",e.data.profiles[0]);case 4:case"end":return t.stop()}}))},g=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f.get("/about"));case 2:return e=t.sent,console.log("about",e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}))},E=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f.get("/skill"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},O=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f.get("/detail"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},j=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f.get("/media"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},N=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(f.get("/portfolio"));case 2:return e=t.sent,t.abrupt("return",e.data.portfolios);case 4:case"end":return t.stop()}}))},x=f,y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:"",resume:"",avatar:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(v());case 2:e=t.sent,this.setState(Object(h.a)({},e));case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("header",{className:"masthead bg-primary text-white text-center"},r.a.createElement("div",{className:"container d-flex align-items-center flex-column"},r.a.createElement("img",{className:"masthead-avatar mb-5",src:this.state.avatar,alt:""}),r.a.createElement("h1",{className:"masthead-heading text-uppercase mb-0"},this.state.name),r.a.createElement("div",{className:"divider-custom divider-light"},r.a.createElement("div",{className:"divider-custom-line"}),r.a.createElement("div",{className:"divider-custom-icon"},r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("div",{className:"divider-custom-line"})),r.a.createElement("p",{className:"masthead-subheading font-weight-light mb-0"},this.state.resume)))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(h.a)({},e.itemMenu),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item mx-0 mx-lg-1"},r.a.createElement("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#".concat(this.state.id)},this.state.title)))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={menu:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({menu:[{id:"portfolio",title:"Portfolio"},{id:"about",title:"Sobre"},{id:"skills",title:"Habilidades"},{id:"infos",title:"Infos"},{id:"blog",title:"Blog"},{id:"contact",title:"Contato"}]})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},"Guilherme Camargo"),r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},this.state.menu&&this.state.menu.map((function(e,t){return r.a.createElement(k,{key:t,itemMenu:e})}))))))}}]),t}(n.Component),S=function(e){return r.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",target:"_blank",rel:"noopener noreferrer",href:e.children.link},r.a.createElement("i",{className:"fab fa-fw ".concat(e.children.media)}))},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={medias:[],ready:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(j());case 2:e=t.sent,this.setState({medias:e,ready:!0});case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.medias;return e.ready?r.a.createElement("div",{className:"col-lg-12 mb-5 mb-lg-0"},r.a.createElement("h4",{className:"text-uppercase mb-4"},"REDES SOCIAIS"),r.a.createElement("h6",{className:"text-center mb-4"},"Entre em contato comigo por minhas redes sociais."),t&&t.map((function(e,t){return r.a.createElement(S,{key:t},e)}))):null}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer text-center"},r.a.createElement("div",{className:"container"},r.a.createElement(C,null)))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:this.props.id,className:this.props.className},r.a.createElement("div",{className:"container"},this.props.children))}}]),t}(n.Component),A=function(e){return r.a.createElement("div",{className:"divider-custom ".concat(e.className)},r.a.createElement("div",{className:"divider-custom-line"}),r.a.createElement("div",{className:"divider-custom-icon"},r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("div",{className:"divider-custom-line"}))},D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(h.a)({},e.item),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 col-lg-4 text-center"},r.a.createElement("div",{className:"card",style:{width:"20rem"}},r.a.createElement("img",{className:"card-img-top",src:this.state.image,alt:this.state.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},this.state.title),r.a.createElement("a",{href:this.state.github,target:"_blank"},"Github"))))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(h.a)({},e),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section portfolio",id:"portfolio"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Portfolio"),r.a.createElement(A,null),r.a.createElement("div",{className:"row"},this.state.portfolio&&this.state.portfolio.map((function(e,t){return r.a.createElement(D,{key:t,item:e})}))))}}]),t}(n.Component),F=function(e){return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("a",{className:"btn btn-xl btn-outline-light",target:"_blank",rel:"noopener noreferrer",href:e.children},r.a.createElement("i",{className:"fas fa-download mr-2"}),"Curriculum Vitae"))},T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(h.a)({},e.about),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 col-lg-6 align-content-center"},r.a.createElement("h4",{className:"text-center"},this.state.title),r.a.createElement("ul",null,this.state.items&&this.state.items.map((function(e,t){return r.a.createElement("li",{className:"text-center",key:t},e)}))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(h.a)({},e.data),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.state.about&&this.state.about.map((function(e,t){return r.a.createElement(T,{key:t,about:e})})))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(h.a)({},e),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){e.setState({about:t})}))}},{key:"render",value:function(){return r.a.createElement(P,{className:"page-section bg-primary text-white mb-0",id:"about"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"Sobre"),r.a.createElement(A,{className:"divider-light"}),r.a.createElement(I,{data:this.state}),r.a.createElement(F,null,this.state.curriculum))}}]),t}(n.Component),L=function(e){return r.a.createElement("input",{className:e.children.className,id:e.children.id,name:e.children.id,type:e.children.type,placeholder:e.children.label,required:"required","data-validation-required-message":e.children.message})},B=function(e){return r.a.createElement("textarea",{className:e.children.className,id:e.children.id,name:e.children.id,rows:e.children.rows,placeholder:e.children.label,required:"required","data-validation-required-message":e.children.message})},q=function(e){return r.a.createElement("div",{className:"control-group"},r.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value"},r.a.createElement("label",null,e.children.label),e.children.type&&r.a.createElement(L,null,e.children)||r.a.createElement(B,null,e.children),r.a.createElement("p",{className:"help-block text-danger"})))},G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={inputs:[{label:"Name",id:"name",type:"text",message:"Please enter your name."},{label:"Email Address",id:"email",type:"email",message:"Please enter your email address."},{label:"Phone Number",id:"phone",type:"tel",message:"Please enter your phone number."},{label:"Message",id:"message",type:"",message:"Please enter a message."}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 mx-auto"},r.a.createElement("form",{name:"sentMessage",id:"contactForm",novalidate:"novalidate",method:"POST",action:"https://formspree.io/guilhermecamargo57@hotmail.com"},this.state.inputs.map((function(e,t){return r.a.createElement(q,{key:t,className:"control-group"},e)})),r.a.createElement("br",null),r.a.createElement("div",{id:"success"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-xl",id:"sendMessageButton"},"Send")))))}}]),t}(n.Component),Q=a(18),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(h.a)({},Q),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section",id:"contact"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Contact Me"),r.a.createElement(A,null),r.a.createElement(G,null))}}]),t}(n.Component),U=(a(44),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={skills:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(x.get("/skill"));case 2:e=t.sent,this.setState({skills:e.data});case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(P,{className:"page-section",id:"skills"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Skills"),r.a.createElement(A,null),r.a.createElement("div",{className:"skills"},r.a.createElement("ul",{className:"list-inline text-center"},this.state.skills&&this.state.skills.map((function(e,t){var a=e.title;return r.a.createElement("li",{className:"badge card text-uppercase text-center text-uppercase text-secondary  col-md-4 col-lg-2 mb-1",key:t},a)})))))}}]),t}(n.Component)),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={details:e.details},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section bg-primary text-white mb-0",id:"infos"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"MAIS INFORMA\xc7\xd5ES"),r.a.createElement(A,{className:"divider-light"}),r.a.createElement("div",{className:"row"},this.state.details&&this.state.details.map((function(e,t){return r.a.createElement(n.Fragment,{key:t},r.a.createElement("div",{className:"col-lg-4 ".concat(t%2==0?"ml-auto":"mr-auto")},r.a.createElement("h4",{className:"text-center"},e.title),r.a.createElement("p",{className:"lead"},e.info)))}))))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={profile:[],about:[],skills:[],details:[],ready:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r;return p.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,p.a.awrap(v());case 2:return e=i.sent,i.next=5,p.a.awrap(g());case 5:return t=i.sent,i.next=8,p.a.awrap(O());case 8:return a=i.sent,i.next=11,p.a.awrap(E());case 11:return n=i.sent,i.next=14,p.a.awrap(N());case 14:r=i.sent,this.setState({profile:e,about:t,skills:n,details:a,portfolio:r,ready:!0});case 16:case"end":return i.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.portfolio,a=e.profile,i=e.about,c=e.skills,s=e.details;return e.ready?r.a.createElement(n.Fragment,null,r.a.createElement(R,{portfolio:t}),r.a.createElement(J,{about:i,curriculum:a.curriculum}),r.a.createElement(U,{skills:c}),r.a.createElement(_,{details:s}),r.a.createElement(H,null)):null}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={profile:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({profile:t})}))}},{key:"render",value:function(){var e=this.state.profile,t=e.name,a=e.email,n=e.area,i=e.phone;return r.a.createElement(P,{className:"copyright py-4 text-center text-white"},r.a.createElement("small",null,t," ",n," 2019"),r.a.createElement("br",null),r.a.createElement("small",null,a),r.a.createElement("br",null),r.a.createElement("small",null,i))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={profile:[],ready:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(w,null),r.a.createElement(y,null),r.a.createElement(V,null),r.a.createElement(M,null),r.a.createElement(z,null))}}]),t}(n.Component);c.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.68b844fb.chunk.js.map