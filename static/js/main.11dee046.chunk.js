(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),i=a(1),s=a(2),o=a(4),m=a(3),u=a(5),d=(a(16),a(6)),p=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(o.a)(this,Object(m.a)(t).call(this,e));var n=d.profile,r=n.name,l=n.resume,c=n.perfil;return a.state={name:r,resume:l,perfil:c},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"masthead bg-primary text-white text-center"},r.a.createElement("div",{className:"container d-flex align-items-center flex-column"},r.a.createElement("img",{className:"masthead-avatar mb-5",src:this.state.perfil,alt:""}),r.a.createElement("h1",{className:"masthead-heading text-uppercase mb-0"},this.state.name),r.a.createElement("div",{className:"divider-custom divider-light"},r.a.createElement("div",{className:"divider-custom-line"}),r.a.createElement("div",{className:"divider-custom-icon"},r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("div",{className:"divider-custom-line"})),r.a.createElement("p",{className:"masthead-subheading font-weight-light mb-0"},this.state.resume)))}}]),t}(n.Component),b=a(7),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},e.itemMenu),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item mx-0 mx-lg-1"},r.a.createElement("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#".concat(this.state.id)},this.state.title)))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={menu:[{id:"portfolio",title:"Portfolio"},{id:"about",title:"Sobre"},{id:"skills",title:"Habilidades"},{id:"contact",title:"Contato"}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},"Guilherme Camargo"),r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},this.state.menu&&this.state.menu.map(function(e,t){return r.a.createElement(h,{key:t,itemMenu:e})})))))}}]),t}(n.Component),g=function(e){return r.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",target:"_blank",rel:"noopener noreferrer",href:e.children.link},r.a.createElement("i",{className:"fab fa-fw ".concat(e.children.media)}))},v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={medias:d.medias},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-12 mb-5 mb-lg-0"},r.a.createElement("h4",{className:"text-uppercase mb-4"},"REDES SOCIAIS"),r.a.createElement("h6",{className:"text-center mb-4"},"Entre em contato comigo por minhas redes sociais."),this.state.medias.map(function(e,t){return r.a.createElement(g,{key:t},e)}))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer text-center"},r.a.createElement("div",{className:"container"},r.a.createElement(v,null)))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:this.props.id,className:this.props.className},r.a.createElement("div",{className:"container"},this.props.children))}}]),t}(n.Component),O=function(e){return r.a.createElement("div",{className:"divider-custom ".concat(e.className)},r.a.createElement("div",{className:"divider-custom-line"}),r.a.createElement("div",{className:"divider-custom-icon"},r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("div",{className:"divider-custom-line"}))},N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 col-lg-4"},r.a.createElement("div",{className:"portfolio-item mx-auto","data-toggle":"modal","data-target":this.props.target},r.a.createElement("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},r.a.createElement("div",{className:"portfolio-item-caption-content text-center text-white"},r.a.createElement("i",{className:"fas fa-plus fa-3x"}))),r.a.createElement("img",{className:"img-fluid",src:this.props.src,alt:""})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},d),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,{className:"page-section portfolio",id:"portfolio"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Portfolio"),r.a.createElement(O,null),r.a.createElement("div",{className:"row"},this.state.portfolio&&this.state.portfolio.map(function(e,t){return r.a.createElement(N,{key:t,target:e.target,src:e.src})})))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},e.details),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 col-lg-6 align-content-center"},r.a.createElement("h6",{className:"page-section-heading text-center text-white"},this.state.title),r.a.createElement("ul",null,this.state.items&&this.state.items.map(function(e,t){return r.a.createElement("li",{className:"text-center",key:t},e)})))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},d),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.state.details&&this.state.details.map(function(e,t){return r.a.createElement(x,{key:t,details:e})}))}}]),t}(n.Component),w=function(e){return r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("a",{className:"btn btn-xl btn-outline-light",target:"_blank",rel:"noopener noreferrer",href:e.children},r.a.createElement("i",{className:"fas fa-download mr-2"}),"Curriculum Vitae"))},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},d),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,{className:"page-section bg-primary text-white mb-0",id:"about"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"Sobre"),r.a.createElement(O,{className:"divider-light"}),r.a.createElement(k,null),r.a.createElement(w,null,this.state.curriculum))}}]),t}(n.Component),S=function(e){return r.a.createElement("input",{className:e.children.className,id:e.children.id,type:e.children.type,placeholder:e.children.label,required:"required","data-validation-required-message":e.children.message})},M=function(e){return r.a.createElement("textarea",{className:e.children.className,id:e.children.id,rows:e.children.rows,placeholder:e.children.label,required:"required","data-validation-required-message":e.children.message})},P=function(e){return r.a.createElement("div",{className:"control-group"},r.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},r.a.createElement("label",null,e.children.label),e.children.type&&r.a.createElement(S,null,e.children)||r.a.createElement(M,null,e.children),r.a.createElement("p",{className:"help-block text-danger"})))},A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={inputs:[{label:"Name",id:"name",type:"text",message:"Please enter your name."},{label:"Email Address",id:"email",type:"email",message:"Please enter your email address."},{label:"Phone Number",id:"phone",type:"tel",message:"Please enter your phone number."},{label:"Message",id:"message",type:"",message:"Please enter a message."}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 mx-auto"},r.a.createElement("form",{name:"sentMessage",id:"contactForm",novalidate:"novalidate"},this.state.inputs.map(function(e,t){return r.a.createElement(P,{key:t,className:"control-group"},e)}),r.a.createElement("br",null),r.a.createElement("div",{id:"success"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-xl",id:"sendMessageButton"},"Send")))))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},d),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,{className:"page-section",id:"contact"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Contact Me"),r.a.createElement(O,null),r.a.createElement(A,null))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},d),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,{className:"page-section",id:"skills"},r.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Skills"),r.a.createElement(O,null),r.a.createElement("ul",{className:"list-inline text-center"},this.state.skills&&this.state.skills.map(function(e,t){return r.a.createElement("li",{className:"list-inline-item list-group-item-primary text-uppercase text-center text-secondary badge col-md-2 col-lg-2 mb-1",key:t},e)})))}}]),t}(n.Component),J=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(y,null),r.a.createElement(C,null),r.a.createElement(L,null),r.a.createElement(B,null))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},d.profile),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.area,l=e.phone;return r.a.createElement(j,{className:"copyright py-4 text-center text-white"},r.a.createElement("small",null,t," ",n," 2019"),r.a.createElement("br",null),r.a.createElement("small",null,a),r.a.createElement("br",null),r.a.createElement("small",null,l))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement(J,null),r.a.createElement(E,null),r.a.createElement(D,null))}}]),t}(n.Component);c.a.render(r.a.createElement(R,null),document.getElementById("root"))},6:function(e){e.exports={profile:{name:"Guilherme Camargo",resume:"Ol\xe1, sou Guilherme Camargo. Back-end Developer, nasci em Congonhinhas - PR, atualmente morando em Londrina \u2013 PR.",perfil:"img/profile.jpeg",email:"guilhermecamargo57@hotmail.com",area:"Desenvolvimento Back-end",phone:"+55 (43) 984 231 673"},medias:[{media:"fa-facebook-f",link:"https://www.facebook.com/guilhermecamargo57"},{media:"fa-twitter",link:"https://twitter.com/camargo_guilher"},{media:"fa-linkedin-in",link:"https://www.linkedin.com/in/guilherme-camargo-6ba534127/"}],portfolio:[{"data-target":"#portfolioModal1",src:"img/portfolio/cabin.png"},{"data-target":"#portfolioModal2",src:"img/portfolio/cake.png"},{"data-target":"#portfolioModal3",src:"img/portfolio/circus.png"},{"data-target":"#portfolioModal4",src:"img/portfolio/game.png"},{"data-target":"#portfolioModal5",src:"img/portfolio/safe.png"},{target:"#portfolioModal6",src:"img/portfolio/submarine.png"}],about:[{info:"Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."},{info:"You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!"}],curriculum:"assets/CV-Guilherme-Camargo.pdf",details:[{title:"Interesses",items:["Ecossistema Javascript","Desenvolvimento Back-end","Aplicativos Mobile"]},{title:"Idiomas",items:["Portugu\xeas \u2013 Nativo","Ingl\xeas \u2013 B\xe1sico"]},{title:"Forma\xe7\xe3o",items:["2016-2019/UTFPR \u2013 Tecnologia em An\xe1lise e Desenvolvimento de Sistemas"]},{title:"Atividades desenvolvidas",items:["Desenvolvimento de Aplicativos Mobile","Desenvolvimento Back-End","Administra\xe7\xe3o de Banco de Dados Oracle/SQL Server"]}],skills:["JavaScript","MySQL","Ajax","PostgreSQL","Java","CSS3","PHP","SQL Server","SQL","JQuery","HTML5","NodeJS","MongoDB","GIT","Android","React Js","React Native","Laravel","Linux","JSON","Python","phpMyAdmin","MySQL Workbench","XAMPP","Composer","NPM","SublimeText","VirtualBox","Firebase","Heroku"]}}},[[10,1,2]]]);
//# sourceMappingURL=main.11dee046.chunk.js.map