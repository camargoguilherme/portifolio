(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={menu:[{id:"portfolio",title:"Portfolio"},{id:"about",title:"Sobre"},{id:"skills",title:"Habilidades"},{id:"infos",title:"Infos"},{id:"blog",title:"Blog"},{id:"contact",title:"Contato"}],profile:{name:"Guilherme Camargo",resume:"Ol\xe1, sou Guilherme Camargo. Back-end Developer, nasci em Congonhinhas - PR, atualmente morando em Londrina \u2013 PR.",perfil:"img/profile.jpeg",email:"guilhermecamargo57@hotmail.com",area:"Desenvolvimento Back-end",phone:"+55 (43) 984 231 673"},medias:[{media:"fa-facebook-f",link:"https://www.facebook.com/guilhermecamargo57"},{media:"fa-twitter",link:"https://twitter.com/camargo_guilher"},{media:"fa-linkedin-in",link:"https://www.linkedin.com/in/guilherme-camargo-6ba534127/"}],portfolio:[{"data-target":"#portfolioModal1",src:"img/portfolio/cabin.png"},{"data-target":"#portfolioModal2",src:"img/portfolio/cake.png"},{"data-target":"#portfolioModal3",src:"img/portfolio/circus.png"},{"data-target":"#portfolioModal4",src:"img/portfolio/game.png"},{"data-target":"#portfolioModal5",src:"img/portfolio/safe.png"},{target:"#portfolioModal6",src:"img/portfolio/submarine.png"}],details:[{title:"BIOGRAFIA",info:"Em 2010 iniciei o ensino medio no Colegio Estadual Padre Jeronimo Onuma em S\xe3o Sebasti\xe3o da Amoreria - PR. Em 2013, ap\xf3s concluir o ensino m\xe9dio, me mudei para Londrina - PR por livre e espantanea press\xe3o do meu informa\xe7\xe3o para poder estudar para o velitbular da UEL, na \xe9poca queria cursar Engenharia Civil. No mesmo ano, conheci minha esposa Sandra (agora, ex-esposa). Em 2014 nasceu minha filha (Thayla), minha princesinha. Em 2016 iniciei o curso superior de tecnologia em an\xe1lise de sistemas de informa\xe7\xe3o na Universidade Tecnol\xf3gica Federal do Paran\xe1 (UTFPR)."},{title:"PROFISS\xc3O",info:"Trabalhei no Super Muffato (2013-2015) como empacotador, auxiliar de confeitaria e auxiliar de padaria. No final de 2015 comecei a trabalhar em uma loja de produtos importados diretamente do Jap\xe3o como Atendente / Almoxarife / Caixa. Foi onde descobri que gostava muito da area de tecnologia e decidi ingressar na UTFPR. Em janeiro de 2018, entrei no Hospital Evang\xe9lico de Londrina e fiquei at\xe9 Julho, como atendente de suporte. Trabalhei de Julho a Dezembro de 2018 em uma lanchonete com a minha ex. Atualmente estou na TCS (Tata Consultancy Services), ingressei em fevereiro de 2019."}],curriculum:"assets/CV-Guilherme-Camargo.pdf",about:[{title:"Interesses",items:["Ecossistema Javascript","Desenvolvimento Back-end","Aplicativos Mobile"]},{title:"Idiomas",items:["Portugu\xeas \u2013 Nativo","Ingl\xeas \u2013 B\xe1sico"]},{title:"Forma\xe7\xe3o",items:["2016-2019/UTFPR \u2013 Tecnologia em An\xe1lise e Desenvolvimento de Sistemas"]},{title:"Atividades desenvolvidas",items:["Desenvolvimento de Aplicativos Mobile","Desenvolvimento Back-End","Administra\xe7\xe3o de Banco de Dados Oracle/SQL Server"]}],skills:["JavaScript","MySQL","Ajax","PostgreSQL","Java","CSS3","PHP","SQL Server","SQL","JQuery","HTML5","NodeJS","MongoDB","GIT","Android","React Js","React Native","Laravel","Linux","JSON","Python","phpMyAdmin","MySQL Workbench","XAMPP","Composer","NPM","SublimeText","VirtualBox","Firebase","Heroku"]}},20:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),s=a(6),l=a.n(s),o=a(8),u=a(1),m=a(2),d=a(4),p=a(3),h=a(5),f=a(7),b=(a(27),a(19)),v=a.n(b).a.create({baseURL:"https://api-portifolio.herokuapp.com"}),g=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/profile");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/about");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/skill");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/detail");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/media");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=v,y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={name:"",resume:"",perfil:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/profile");case 2:t=e.sent,this.setState(Object(f.a)({},t.data[0]));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("header",{className:"masthead bg-primary text-white text-center"},r.a.createElement("div",{className:"container d-flex align-items-center flex-column"},r.a.createElement("img",{className:"masthead-avatar mb-5",src:this.state.perfil,alt:""}),r.a.createElement("h1",{className:"masthead-heading text-uppercase mb-0"},this.state.name),r.a.createElement("div",{className:"divider-custom divider-light"},r.a.createElement("div",{className:"divider-custom-line"}),r.a.createElement("div",{className:"divider-custom-icon"},r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("div",{className:"divider-custom-line"})),r.a.createElement("p",{className:"masthead-subheading font-weight-light mb-0"},this.state.resume)))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},e.itemMenu),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item mx-0 mx-lg-1"},r.a.createElement("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#".concat(this.state.id)},this.state.title)))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={menu:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/menu");case 2:t=e.sent,this.setState({menu:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},"Guilherme Camargo"),r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},this.state.menu&&this.state.menu.map(function(e,t){return r.a.createElement(k,{key:t,itemMenu:e})})))))}}]),t}(n.Component),S=function(e){return r.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",target:"_blank",rel:"noopener noreferrer",href:e.children.link},r.a.createElement("i",{className:"fab fa-fw ".concat(e.children.media)}))},C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={medias:[],ready:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({medias:t,ready:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.medias;return e.ready?r.a.createElement("div",{className:"col-lg-12 mb-5 mb-lg-0"},r.a.createElement("h4",{className:"text-uppercase mb-4"},"REDES SOCIAIS"),r.a.createElement("h6",{className:"text-center mb-4"},"Entre em contato comigo por minhas redes sociais."),t&&t.map(function(e,t){return r.a.createElement(S,{key:t},e)})):null}}]),t}(n.Component),M=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer text-center"},r.a.createElement("div",{className:"container"},r.a.createElement(C,null)))}}]),t}(n.Component),P=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:this.props.id,className:this.props.className},r.a.createElement("div",{className:"container"},this.props.children))}}]),t}(n.Component),A=function(e){return r.a.createElement("div",{className:"divider-custom ".concat(e.className)},r.a.createElement("div",{className:"divider-custom-line"}),r.a.createElement("div",{className:"divider-custom-icon"},r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("div",{className:"divider-custom-line"}))},R=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 col-lg-4"},r.a.createElement("div",{className:"portfolio-item mx-auto","data-toggle":"modal","data-target":this.props.target},r.a.createElement("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},r.a.createElement("div",{className:"portfolio-item-caption-content text-center text-white"},r.a.createElement("i",{className:"fas fa-plus fa-3x"}))),r.a.createElement("img",{className:"img-fluid",src:this.props.src,alt:""})))}}]),t}(n.Component),D=a(10),F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},D),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section portfolio",id:"portfolio"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Portfolio"),r.a.createElement(A,null),r.a.createElement("div",{className:"row"},this.state.portfolio&&this.state.portfolio.map(function(e,t){return r.a.createElement(R,{key:t,target:e.target,src:e.src})})))}}]),t}(n.Component),T=function(e){return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("a",{className:"btn btn-xl btn-outline-light",target:"_blank",rel:"noopener noreferrer",href:e.children},r.a.createElement("i",{className:"fas fa-download mr-2"}),"Curriculum Vitae"))},L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},e.about),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 col-lg-6 align-content-center"},r.a.createElement("h4",{className:"text-center"},this.state.title),r.a.createElement("ul",null,this.state.items&&this.state.items.map(function(e,t){return r.a.createElement("li",{className:"text-center",key:t},e)})))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},e.data),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.state.about&&this.state.about.map(function(e,t){return r.a.createElement(L,{key:t,about:e})}))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},e),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section bg-primary text-white mb-0",id:"about"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"Sobre"),r.a.createElement(A,{className:"divider-light"}),r.a.createElement(B,{data:this.state}),r.a.createElement(T,null,this.state.curriculum))}}]),t}(n.Component),J=function(e){return r.a.createElement("input",{className:e.children.className,id:e.children.id,name:e.children.id,type:e.children.type,placeholder:e.children.label,required:"required","data-validation-required-message":e.children.message})},q=function(e){return r.a.createElement("textarea",{className:e.children.className,id:e.children.id,name:e.children.id,rows:e.children.rows,placeholder:e.children.label,required:"required","data-validation-required-message":e.children.message})},Q=function(e){return r.a.createElement("div",{className:"control-group"},r.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value"},r.a.createElement("label",null,e.children.label),e.children.type&&r.a.createElement(J,null,e.children)||r.a.createElement(q,null,e.children),r.a.createElement("p",{className:"help-block text-danger"})))},G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={inputs:[{label:"Name",id:"name",type:"text",message:"Please enter your name."},{label:"Email Address",id:"email",type:"email",message:"Please enter your email address."},{label:"Phone Number",id:"phone",type:"tel",message:"Please enter your phone number."},{label:"Message",id:"message",type:"",message:"Please enter a message."}]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 mx-auto"},r.a.createElement("form",{name:"sentMessage",id:"contactForm",novalidate:"novalidate",method:"POST",action:"https://formspree.io/guilhermecamargo57@hotmail.com"},this.state.inputs.map(function(e,t){return r.a.createElement(Q,{key:t,className:"control-group"},e)}),r.a.createElement("br",null),r.a.createElement("div",{id:"success"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-xl",id:"sendMessageButton"},"Send")))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},D),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section",id:"contact"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Contact Me"),r.a.createElement(A,null),r.a.createElement(G,null))}}]),t}(n.Component),H=(a(47),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={skills:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/skill");case 2:t=e.sent,this.setState({skills:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(P,{className:"page-section",id:"skills"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Skills"),r.a.createElement(A,null),r.a.createElement("div",{className:"skills"},r.a.createElement("ul",{className:"list-inline text-center"},this.state.skills&&this.state.skills.map(function(e,t){var a=e.title;return r.a.createElement("li",{className:"badge card text-uppercase text-center text-uppercase text-secondary  col-md-4 col-lg-2 mb-1",key:t},a)}))))}}]),t}(n.Component)),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={details:e.details},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section bg-primary text-white mb-0",id:"infos"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"MAIS INFORMA\xc7\xd5ES"),r.a.createElement(A,{className:"divider-light"}),r.a.createElement("div",{className:"row"},this.state.details&&this.state.details.map(function(e,t){return r.a.createElement(n.Fragment,{key:t},r.a.createElement("div",{className:"col-lg-4 ".concat(t%2==0?"ml-auto":"mr-auto")},r.a.createElement("h4",{className:"text-center"},e.title),r.a.createElement("p",{className:"lead"},e.info)))})))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},D),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{className:"page-section",id:"blog"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Blog"),r.a.createElement(A,{className:"divider-light"}))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={profile:[],about:[],skills:[],details:[],blog:[],ready:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,E();case 5:return a=e.sent,e.next=8,j();case 8:return n=e.sent,e.next=11,O();case 11:r=e.sent,this.setState({profile:t,about:a,skills:r,details:n,ready:!0});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.profile,a=e.about,c=e.skills,i=e.details,s=e.blog;return e.ready?r.a.createElement(n.Fragment,null,r.a.createElement(F,{profile:t}),r.a.createElement(I,{about:a,curriculum:t.curriculum}),r.a.createElement(H,{skills:c}),r.a.createElement(V,{details:i}),r.a.createElement(_,{blog:s}),r.a.createElement(U,null)):null}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=Object(f.a)({},D.profile),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.area,c=e.phone;return r.a.createElement(P,{className:"copyright py-4 text-center text-white"},r.a.createElement("small",null,t," ",n," 2019"),r.a.createElement("br",null),r.a.createElement("small",null,a),r.a.createElement("br",null),r.a.createElement("small",null,c))}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={profile:[],ready:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setState({profile:t,ready:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.profile;return e.ready?r.a.createElement(n.Fragment,null,r.a.createElement(w,null),r.a.createElement(y,null),r.a.createElement(z,null),r.a.createElement(M,null),r.a.createElement(W,{profile:t})):null}}]),t}(n.Component);i.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8a66bad4.chunk.js.map