(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(2),r=a.n(s),c=a(7),i=a(8),o=a(10),m=a(9),u=a(11),p=a(12),d=a(72),f=a.n(d),b=a(73),h=a.n(b),E=a(74),g=a.n(E),v=a(75),N=a.n(v),k=a(76),j=a.n(k),y=(a(101),function(){return l.a.createElement("section",{className:"projects"},l.a.createElement("h1",{className:"section-header"},"Projects"),l.a.createElement("div",{className:"grid"},l.a.createElement("figure",{className:"effect"},l.a.createElement("div",{className:"project-logo-container"},l.a.createElement("img",{className:"projects-logo smart-logo",src:g.a,alt:"project"})),l.a.createElement("div",{className:"background-container"},l.a.createElement("img",{className:"image-background",src:h.a,alt:"project"})),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"bottom-container"},l.a.createElement("div",{className:"portfolio-links"},l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/lukastatarunas/Face-Recognition-Web-App"},"Github"),l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://lukastatarunas.github.io/Face-Recognition-Web-App/"},"Website"))),l.a.createElement("p",{className:"description"},"Built using React.js and Machine Learning Clarifai API."))),l.a.createElement("figure",{className:"effect"},l.a.createElement("div",{className:"project-logo-container"},l.a.createElement("img",{className:"projects-logo smart-logo",src:j.a,alt:"project"})),l.a.createElement("div",{className:"background-container"},l.a.createElement("img",{className:"image-background",src:N.a,alt:"project"})),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"bottom-container"},l.a.createElement("div",{className:"portfolio-links"},l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/lukastatarunas/Robofriends-Web-App"},"Github"),l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://lukastatarunas.github.io/Robofriends-Web-App/"},"Website"))),l.a.createElement("p",{className:"description"},"Built using React.js and Redux.js.")))))}),O=a(35),S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),e.setState({buttonDisabled:!0}),fetch("https://murmuring-brushlands-82266.herokuapp.com/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,email:e.state.email,message:e.state.message})}).then(function(e){return e.json()}).then(function(t){"success"===t?e.successMessage():console.log(t)})},e.successMessage=function(){e.setState({name:""}),e.setState({email:""}),e.setState({message:""}),e.setState({messageStatus:!0}),e.setState({buttonDisabled:!1}),setTimeout(function(){e.setState({messageStatus:!1})},8e3)},e.failMessage=function(){e.setState({name:""}),e.setState({email:""}),e.setState({message:""}),alert("Something went wrong. Email me directly at lukasttatarunas@gmail.com")},e.updateName=function(t){e.setState({name:t.target.value})},e.updateEmail=function(t){e.setState({email:t.target.value})},e.updateMessage=function(t){e.setState({message:t.target.value})},e.state={name:"",email:"",message:"",messageStatus:!1,buttonDisabled:!1},e.form=l.a.createRef(),e.validate=e.validate.bind(Object(O.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"validate",value:function(){this.form.current.reportValidity()}},{key:"render",value:function(){var e=this.state.messageStatus?"active":"inactive";return l.a.createElement("form",{ref:this.form,onSubmit:this.handleSubmit,className:"contact-form"},l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.updateName,placeholder:"Your name",className:"name",required:!0}),l.a.createElement("input",{type:"email",value:this.state.email,onChange:this.updateEmail,className:"email",placeholder:"Your email",required:!0}),l.a.createElement("textarea",{value:this.state.message,onChange:this.updateMessage,className:"message",placeholder:"Message",required:!0}),l.a.createElement("div",{className:"buttonInline"},l.a.createElement("p",{className:"".concat(e)},"Message Sent!"),l.a.createElement("input",{value:"Send",className:"standard-button",disabled:this.state.buttonDisabled,onClick:this.validate,type:"submit"})))}}]),t}(n.Component),w=(a(102),a(86)),C=(a(144),a(81)),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).copyEmail=function(){a.setState({visibleTooltip:!0}),setTimeout(function(){return a.setState({visibleTooltip:!1})},3e3)},a.state={visibleTooltip:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"contact"},l.a.createElement("div",{className:"left-content"},l.a.createElement("h1",{className:"section-header"},"Contact Me"),l.a.createElement("p",null,"I am currently available for new opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey - then get in touch!"," ",l.a.createElement("span",{role:"img",className:"peace-emoji","aria-label":"peace"},"\u270c")," "),l.a.createElement("p",null,"Use the form or email me directly at: "),l.a.createElement(w.a,{placement:"bottom",overlay:"Copied!",id:"tooltip",visible:this.state.visibleTooltip,onVisibleChange:this.copyEmail,trigger:["click"]},l.a.createElement(C.CopyToClipboard,{text:"lukasttatarunas@gmail.com"},l.a.createElement("span",{onClick:this.copyEmail,className:"email-text"}," ","lukasttatarunas@gmail.com")))),l.a.createElement("div",{className:"contact-content"},l.a.createElement(S,null)))}}]),t}(n.Component),T=(a(148),function(){return l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{style:{borderRadius:"8px 0 0 0"}},l.a.createElement("i",{className:"fab fa-html5"}),l.a.createElement("p",null,"HTML5")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-css3-alt"}),l.a.createElement("p",null,"CSS3")),l.a.createElement("li",{style:{borderRadius:"0 8px 0 0"}},l.a.createElement("i",{className:"fab fa-js-square"}),l.a.createElement("p",null,"JavaScript ES6+")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-react"}),l.a.createElement("p",null,"React.js")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-node-js"}),l.a.createElement("p",null,"Node.js")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-link"}),l.a.createElement("p",null,"Redux.js")),l.a.createElement("li",{style:{borderRadius:"0 0  0 8px"}},l.a.createElement("i",{className:"fas fa-database"}),l.a.createElement("p",null,"PostgreSQL")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-smile"}),l.a.createElement("p",null,"UX / UI")),l.a.createElement("li",{style:{borderRadius:"0 0 8px 0"}},l.a.createElement("i",{className:"fas fa-database"}),l.a.createElement("p",null,"MongoDB")))}),R=a(82),M=a.n(R),I=(a(149),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).showFileUpload=function(){a.fileUpload.current.click()},a.fileUpload=l.a.createRef(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"skills"},l.a.createElement("div",{className:"left-content"},l.a.createElement("h1",{className:"section-header"},"About me"),l.a.createElement("p",null,"I am a Web Developer based in Vilnius, Lithuania. I have a passion for learning and building things. I started my journey in 2019 as a Web Developer. Since then, I have worked by myself and in teams to build awesome experiences. You can find more about me on"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/lukas-tatar%C5%ABnas-17343a154/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")," ","and"," ",l.a.createElement("a",{href:"https://github.com/lukastatarunas",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."),l.a.createElement("input",{type:"button",value:"View Resume",className:"standard-button",onClick:this.showFileUpload}),l.a.createElement("a",{href:M.a,target:"_blank",rel:"noopener noreferrer",ref:this.fileUpload,style:{display:"none"}}," ")),l.a.createElement("div",{className:"skills-content"},l.a.createElement(T,null)))}}]),t}(n.Component)),L=a(83),_=a.n(L),A=a(84),W=a.n(A),D=(a(150),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).scrollToTop=function(){p.animateScroll.scrollToTop()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"full-nav"},l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"logo",onClick:this.scrollToTop},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:_.a,alt:"white-logo",className:"logoWhite"}),l.a.createElement("img",{src:W.a,alt:"green-logo",className:"logoGreen"}))),l.a.createElement("li",{className:"link"},l.a.createElement(p.Link,{to:"projects",offset:-100,smooth:!0,duration:500},"Projects")),l.a.createElement("li",{className:"link"},l.a.createElement(p.Link,{to:"skills",offset:-100,smooth:!0,duration:500},"About")),l.a.createElement("li",{className:"link"},l.a.createElement(p.Link,{to:"contact",smooth:!0,offset:-100,duration:500},"Contact"))))}}]),t}(n.Component)),U=a(85),P=(a(166),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"closeMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen},function(){document.body.style.overflow="initial"})}},{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen}),!1===this.state.menuOpen?document.body.style.overflow="hidden":document.body.style.overflow="initial"}},{key:"render",value:function(){var e=this;return l.a.createElement(U.slide,{width:"75%",isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},right:!0,pageWrapId:"page-wrap",outerContainerId:"outer-container"},l.a.createElement("div",{className:"menu"},l.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"projects",spy:!0,offset:-100,smooth:!0,duration:500},"Projects"),l.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"skills",spy:!0,offset:-100,smooth:!0,duration:500},"About"),l.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"contact",spy:!0,offset:-100,smooth:!0,duration:500},"Contact")))}}]),t}(n.Component)),B=(a(167),{particles:{number:{value:100,density:{enable:!0,value_area:800}},size:{value:3,random:!0},opacity:{value:.2,random:!1},line_linked:{opacity:.3}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"}},resize:!0}}),V=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"outer-container"},l.a.createElement(f.a,{className:"particles-js",params:B}),l.a.createElement(P,null),l.a.createElement("div",{id:"page-wrap"},l.a.createElement("header",null,l.a.createElement("div",{className:"header-content"},l.a.createElement("div",{className:"header-text"},l.a.createElement("h1",{className:"header-name"},"Lukas Tatar\u016bnas"),l.a.createElement("h3",{className:"subheader"},"Web Developer")),l.a.createElement(p.Link,{to:"projects",offset:-100,smooth:!0,duration:500},l.a.createElement("input",{type:"button",className:"standard-button",value:"View Projects"})),l.a.createElement("div",{className:"linkedin-github"},l.a.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/lukas-tatar%C5%ABnas-17343a154/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{className:"github",href:"https://github.com/lukastatarunas",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"}))))),l.a.createElement(y,{name:"projects"}),l.a.createElement(I,{name:"skills"}),l.a.createElement(x,{name:"contact"})),l.a.createElement(D,null))}}]),t}(n.Component);a(168);r.a.render(l.a.createElement(V,null),document.getElementById("root"))},73:function(e,t,a){e.exports=a.p+"static/media/smartbrain.67b05d8c.png"},74:function(e,t,a){e.exports=a.p+"static/media/smartbrain-logo.ce7609db.svg"},75:function(e,t,a){e.exports=a.p+"static/media/robofriends.b2e3a275.png"},76:function(e,t,a){e.exports=a.p+"static/media/robofriends-logo.f694d73f.svg"},82:function(e,t,a){e.exports=a.p+"static/media/CV.0cc32122.pdf"},83:function(e,t,a){e.exports=a.p+"static/media/logo-white.87b86d7b.svg"},84:function(e,t,a){e.exports=a.p+"static/media/logo-green.112dc134.svg"},87:function(e,t,a){e.exports=a(169)}},[[87,1,2]]]);
//# sourceMappingURL=main.4362f394.chunk.js.map