(this.webpackJsonpooihuiying=this.webpackJsonpooihuiying||[]).push([[0],{187:function(e,t,n){e.exports=n.p+"static/media/main.5198f0b9.svg"},191:function(e,t,n){e.exports=n.p+"static/media/autumn.7fd69f42.jpg"},192:function(e,t,n){e.exports=n.p+"static/media/huiying.ecb3efa8.JPG"},193:function(e,t,n){e.exports=n.p+"static/media/pinkmountain.4fc7b0e9.jpg"},195:function(e,t,n){e.exports=n.p+"static/media/flowers.780030e3.jpg"},196:function(e,t,n){e.exports=n.p+"static/media/hill.58d9926a.jpg"},197:function(e,t,n){e.exports=n.p+"static/media/trailer.decf04ae.jpg"},198:function(e,t,n){e.exports=n.p+"static/media/bluemountains.792b1428.jpg"},199:function(e,t,n){e.exports=n.p+"static/media/reflect.05a08e81.jpg"},201:function(e,t,n){"use strict";var a,r,l,i,c,o,s,u,m=n(18),d=n.n(m),p=n(30),g=n(26),h=n(2),f=n.n(h),E=n(404),v=n(403),b=n(397),x=n(89),w=n.n(x),k=n(33),y=n.n(k),O=n(12),j=n(13),C=j.a.div(a||(a=Object(O.a)(["\n  text-align: left;\n  margin: auto;\n  padding-bottom: 100px;\n"]))),S=j.a.div(r||(r=Object(O.a)(["\n  display: block;\n  margin: auto;\n"]))),I=n(51),T=n(14),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.post,n=Object(T.f)(),a=function(){var e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={title:t.title,text:t.text,date:t.date,topImage:t.topImage,tag:t.tag,id:t.id},n.push({pathname:"/full_article/"+t.tag+"/"+t.id,state:{post:a}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f.a.createElement(C,null,f.a.createElement(v.a,{as:"h2"},y()(t.title)||""),f.a.createElement("a",{className:"ui red tag label"},t.tag),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(S,null,f.a.createElement("img",{src:t.topImage||w.a,alt:"Image",className:"ui centered massive image"})),f.a.createElement(b.a,{horizontal:!0},t.date||""),f.a.createElement("div",null,t.text.length>1e3?y()(t.text.slice(0,1e3)+" ......"):y()(t.text+" ......")||""),f.a.createElement("br",null),f.a.createElement(I.a,{handleExploreButtonClick:a,text:"Read More",pointRight:!0}))},_=n(36),N=n(75),R=n(28),A=j.a.span(l||(l=Object(O.a)(["\n  place-content: center;\n  width: calc(50vw + 50%);\n  margin-left: 40px;\n"]))),D=j.a.span(i||(i=Object(O.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  margin-left: -11px;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  position: relative;\n  z-index: 999;\n\n  background-color: ",";\n\n  :hover {\n    color: black;\n    cursor: pointer;\n    transform: scale(1.25);\n    transition: transform 0.4s;\n  }\n"])),(function(e){return e.active?R.a.colours.maroon:R.a.colours.grey})),z=j.a.div(c||(c=Object(O.a)(["\n  width: 3px;\n  margin-left: 90px;\n  background-color: ",";\n"])),R.a.colours.grey),B=j.a.div(o||(o=Object(O.a)(["\n  display: flex;\n  padding: 10px 0 20px;\n  justify-content: space-between;\n"]))),L=j.a.div(s||(s=Object(O.a)(["\n  position: absolute;\n  margin-left: 76px;\n\n  :hover {\n    color: black;\n    cursor: pointer;\n    transform: scale(1.25);\n    transition: transform 0.4s;\n  }\n"]))),M=j.a.div(u||(u=Object(O.a)(["\n  position: absolute;\n  margin-left: 76px;\n  margin-top: -30px;\n\n  :hover {\n    color: black;\n    cursor: pointer;\n    transform: scale(1.25);\n    transition: transform 0.4s;\n  }\n"]))),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.allPosts,n=e.active,a=e.onClick,r=Object(h.useState)(0),l=Object(g.a)(r,2),i=l[0],c=l[1],o=Object(h.useState)(5),s=Object(g.a)(o,2),u=s[0],m=s[1],d=t.slice(i,u);return f.a.createElement("div",null,i>0?f.a.createElement(L,{onClick:function(){c(i-1),m(u-1)}},f.a.createElement(N.b,{color:R.a.colours.maroon,size:30})):"",f.a.createElement(z,null,d.map((function(e){return f.a.createElement(B,{key:e.title,onClick:function(){return a(e)}},f.a.createElement(D,{onClick:function(){return a(e)},id:e,active:n&&n.title===e.title},f.a.createElement(A,null,e.date)))}))),u<t.length?f.a.createElement(M,{onClick:function(){c(i+1),m(u+1)}},f.a.createElement(N.a,{color:R.a.colours.maroon,size:30})):"")},W={main:{height:"100vh",backgroundColor:"white",display:"flex",paddingTop:"200px"}},G=n(97),U=n(59),K=n(98),F=n(37);t.a=function(e){var t=e.pathname,n=Object(h.useRef)([]),a=Object(h.useState)(),r=Object(g.a)(a,2),l=r[0],i=r[1],c=Object(h.useState)(!0),o=Object(g.a)(c,2),s=o[0],u=o[1],m=Object(G.b)().setErrorStatusCode;Object(h.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,F.a.ref(t).getAllPosts().then((function(e){if(e)return e}));case 4:a=e.sent,n.current=a,i(n.current[0]),u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m(400);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]);return f.a.createElement(_.a,null,!s&&n.current.length>0?f.a.createElement("div",{style:W.main},f.a.createElement(E.a,null,f.a.createElement(E.a.Column,{width:4},f.a.createElement(H,{allPosts:n.current,active:l,onClick:function(e){i(e)}})),f.a.createElement(E.a.Column,{width:11},f.a.createElement(P,{post:l})))):s?f.a.createElement(K.a,null):f.a.createElement(U.a,null))}},202:function(e,t,n){"use strict";var a,r,l,i=n(95),c=n(18),o=n.n(c),s=n(30),u=n(26),m=n(2),d=n.n(m),p=n(399),g=n(36),h=n(33),f=n.n(h),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.post;function n(){return"hsla("+~~(360*Math.random())+",70%,80%,1)"}return d.a.createElement(p.a,{raised:!0,style:{"background-color":n()}},d.a.createElement(p.a.Content,null,d.a.createElement(p.a.Header,null,f()(t.title)),d.a.createElement(p.a.Meta,null,t.date),d.a.createElement(p.a.Description,null,d.a.createElement("div",null,f()(t.text||"")))))},v=n(401),b=function(){return d.a.createElement(p.a,{raised:!0},d.a.createElement(p.a.Content,null,d.a.createElement(v.a,null,d.a.createElement(v.a.Line,{length:"full"}),d.a.createElement(v.a.Line,{length:"very long"}),d.a.createElement(v.a.Line,{length:"long"}),d.a.createElement(v.a.Line,{length:"medium"}))))},x=n(59),w=n(12),k=n(13),y=k.a.h1(a||(a=Object(w.a)(["\n  text-align: center;\n  background-color: rgba(255,255,255,0.5);\n"]))),O=k.a.div(r||(r=Object(w.a)(["\n  margin: auto;\n  margin-top: 100px;\n  text-align: left;\n  padding: 80px;\n"]))),j=k.a.div(l||(l=Object(w.a)(["\n  position: absolute;\n  min-width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-image: ",";\n  background-size: cover;\n  background-attachment:fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  align-items: center;\n"])),(function(e){return"url("+e.image+")"})),C={card:{paddingLeft:"100px",paddingRight:"100px",paddingBottom:"50px"},image:{paddingLeft:"100px",paddingRight:"100px",paddingBottom:"50px"},text:{textAlign:"center"}},S=n(37),I=n(193),T=n.n(I),P=S.a.ref("/quotes-posts");t.a=function(){var e=Object(m.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(m.useState)(!0),l=Object(u.a)(r,2),c=l[0],h=l[1];return Object(m.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,P.getAllPosts().then((function(e){if(e)return e}));case 3:t=e.sent,a(t),h(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),d.a.createElement(g.a,null,d.a.createElement("div",{className:"image"},d.a.createElement(j,{image:T.a},d.a.createElement(O,null,c&&0===n.length?d.a.createElement("div",null,d.a.createElement("div",{className:"row",style:C.card},d.a.createElement(p.a.Group,{centered:!0},Object(i.a)(Array(4)).map((function(){return d.a.createElement(b,null)}))))):c||0!==n.length?d.a.createElement("div",null,d.a.createElement(y,null,"My Favourite Quotes"),d.a.createElement("div",{className:"row",style:C.card},d.a.createElement(p.a.Group,{centered:!0},n.map((function(e,t){return d.a.createElement(E,{post:e})}))))):d.a.createElement("div",null,d.a.createElement(y,null,"My Favourite Quotes"),d.a.createElement(x.a,{style:C.text}))))))}},203:function(e,t,n){"use strict";var a,r,l=n(2),i=n.n(l),c=n(12),o=n(191),s=n.n(o),u=n(13),m=n(28),d=u.a.div(a||(a=Object(c.a)(["\n  position: absolute;\n  min-width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('","');;\n  background-size: cover;\n  background-attachment:fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  align-items: center;\n"])),s.a),p=u.a.div(r||(r=Object(c.a)(["\n  background-color: rgba(255,255,255,0.5);\n  font-size: 20px;\n  width: calc(100% - 200px);\n  margin: 100px;\n  color: ",";\n  text-align: left;\n  padding: 80px;\n  min-width: 750px;\n"])),m.a.colours.black),g=n(404),h=n(200),f=n(402),E=n(62),v=n(36),b=n(192),x=n.n(b),w=n(75),k=n(26),y=n(397),O=n(403),j=n(400),C=function(){var e=Object(l.useState)(-1),t=Object(k.a)(e,2),n=t[0],a=t[1];function r(e,t){var r=t.index;a(n===r?-1:r)}return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{horizontal:!0},i.a.createElement(O.a,{as:"h2"},i.a.createElement(E.a,{name:"tag"}),"My History")),i.a.createElement(j.a,{fluid:!0,styled:!0},i.a.createElement(j.a.Title,{active:0===n,index:0,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"July 2021- Mar 2023: Software Engineer II at Indeed.com"),i.a.createElement(j.a.Content,{active:0===n},i.a.createElement("p",null,i.a.createElement("li",null,"Part of the Localisation Tools Team"),i.a.createElement("li",null,"Independently implemented a multiple-component solution by enabling in-context translation previews through a Storybook add on, Jenkins, AWS S3, Spring boot Java and React Typescript"),i.a.createElement("li",null,"Spearheaded design and implementation of a frontend UI and backend services for internal localisation project managers to edit, search and view history changes of translation strings across Indeed teams projects"),i.a.createElement("li",null,"One of the main developer to build an in-house tool, involving micro services and frontend web, to replace Weblate wrapper maintenance costs for enabling outsourcing and syncing back of string translations between product teams codebases and XTM"),i.a.createElement("li",null,"Provided technical support and collaborated with engineers in other teams to drive adoption of Localisation Tools team's tools"),i.a.createElement("li",null,"Championed good software engineering practices in the team by encouraging the use of Merge Request templates and hosted software engineering design patterns study sessions"),i.a.createElement("li",null,"Nurtured junior engineers through mentorship in one-on-one meeting sessions"),i.a.createElement("li",null,"Contributed to the organisation by interviewing potential hire engineers/managers and represented Indeed at university recruitment events"))),i.a.createElement(j.a.Title,{active:1===n,index:1,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"May-July 2020: Software Engineer Intern at Temasek Holdings"),i.a.createElement(j.a.Content,{active:1===n},i.a.createElement("p",null,i.a.createElement("li",null,"Built API and UI for adding Feedback feature to mobile application for company internal usage with React-Native"),i.a.createElement("li",null,"Classified companies into categories using machine learning models like Bert and Sci-learn for investment analysts' usage"))),i.a.createElement(j.a.Title,{active:2===n,index:2,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"June-Dec 2019:  Software Engineer Intern at IQAir-AirVisual"),i.a.createElement(j.a.Content,{active:2===n},i.a.createElement("p",null,i.a.createElement("li",null,"Used JavaScript to perform Web Scraping on different websites for the collection of air quality data to be displayed on the mobile AirVisual App"),i.a.createElement("li",null,"Developed Kibana Plugin interfaces with React-Redux to help engineers to monitor and track and manage air quality metrics displayed on the app"))),i.a.createElement(j.a.Title,{active:3===n,index:3,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"Aug 2018-Jan 2019: Part-time Tutor at Coding Lab"),i.a.createElement(j.a.Content,{active:3===n},i.a.createElement("p",null,i.a.createElement("li",null,"Taught students from ages 7-16 computational thinking, Python language and Scratch programming"),i.a.createElement("li",null,"Created Google Apps script to automate sign ups, class allocation and sending of lessons\u2019 email notifications"))),i.a.createElement(j.a.Title,{active:4===n,index:4,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"Aug 2017- Mar 2021: Student at National University of Singapore"),i.a.createElement(j.a.Content,{active:4===n},i.a.createElement("p",null,i.a.createElement("li",null,"Graduated with a Bachelor of Computing in Computer Science degree"),i.a.createElement("li",null,"Participated in 6-month long NUS Overseas College Program in Beijing where I exchanged at Peking University and interned at AirVisual"))),i.a.createElement(j.a.Title,{active:5===n,index:5,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"Feb-June 2017: Dental Assistant at Burlinson Dental Surgery"),i.a.createElement(j.a.Content,{active:5===n},i.a.createElement("p",null,i.a.createElement("li",null,"Assisted dentist in procedures such as scaling and polishing, dental filling and tooth extraction surgeries"),i.a.createElement("li",null,"Handled clinic operational duties such as replenishing dental stocks, cleaning clinic and sterilising dental tools"),i.a.createElement("li",null,"Performed customer support duties such as patients' appointment booking, payment management and answering enquiries"))),i.a.createElement(j.a.Title,{active:6===n,index:6,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"Dec 2016-Jan 2017: Banquet Server"),i.a.createElement(j.a.Content,{active:6===n},i.a.createElement("p",null,i.a.createElement("li",null,"Worked at various hotels in Singapore for banquet events"),i.a.createElement("li",null,"Served diners meals and attended to their requests during banquet"),i.a.createElement("li",null,"Arranged tables and prepared culinaries"))),i.a.createElement(j.a.Title,{active:7===n,index:7,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"2015-2016: Student at Victoria Junior College"),i.a.createElement(j.a.Content,{active:7===n},i.a.createElement("p",null,i.a.createElement("li",null,"Studied Science Stream and graduated with the Singapore Cambridge A' Levels certificate"),i.a.createElement("li",null,"Studied H2 Physics, Chemistry, Mathematics, Economics and H1 General Paper. (H2 being of higher difficulty)"),i.a.createElement("li",null,"Member of Art club and Writers' circle"))),i.a.createElement(j.a.Title,{active:8===n,index:8,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"2011-2014: Student at Nan Chiau High School"),i.a.createElement(j.a.Content,{active:8===n},i.a.createElement("p",null,i.a.createElement("li",null,"Graduated with the Singapore Cambridge O' Levels certificate"),i.a.createElement("li",null,"Studied Advanced Mathematics, Mathematics, Physics, Chemistry, Pure Geography, Combined Humanities (Social Studies and History), Higher Chinese (more advanced version of Chinese language), English"),i.a.createElement("li",null,"Represented school for Basketball tournaments. My team achieved 2nd place in North zone and 8th place overall in the C' division of the 2012 Singapore Basketball Nationals"),i.a.createElement("li",null,"Awarded the Bicultural (English and Mandarin) scholarship given to 12 students of my cohort by the Singapore Hokkien Huay Kuan association. With this scholarship, I participated in 2-week long student exchange trips to Suzhou Foreign Language School (Shanghai and Suzhou, 2012) and Sacred Heart Girls High school (Taiwan, 2013)"),i.a.createElement("li",null,"Top student in cohort for combined humanities subject (Social studies and History)"),i.a.createElement("li",null,"Selected as 1 out of 4 students to represent school in NUS Geography Challenge and obtained individual Silver medal"))),i.a.createElement(j.a.Title,{active:9===n,index:9,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"2005-2010: Student at Chong Zheng Primary School"),i.a.createElement(j.a.Content,{active:9===n},i.a.createElement("p",null,i.a.createElement("li",null,"Graduated with a PSLE certificate"),i.a.createElement("li",null,"Studied Mathematics, Science, English and Chinese"),i.a.createElement("li",null,"Represented school for Netball tournaments"))),i.a.createElement(j.a.Title,{active:10===n,index:10,onClick:r},i.a.createElement(E.a,{name:"dropdown"}),"11 November 1998"),i.a.createElement(j.a.Content,{active:10===n},i.a.createElement("p",null,i.a.createElement("li",null,"I came into this world!")))))};t.a=function(){return i.a.createElement(v.a,null,i.a.createElement("div",{className:"image"},i.a.createElement(d,null,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(p,null,i.a.createElement(g.a,null,i.a.createElement(g.a.Column,{width:4},i.a.createElement(h.a,{src:x.a,size:"small"}),i.a.createElement("h2",null,i.a.createElement(w.c,{color:"maroon"})," Singapore"),i.a.createElement(f.a,{color:"linkedin",onClick:function(e){e.preventDefault(),window.location.href="https://www.linkedin.com/in/hui-ying-ooi"}},i.a.createElement(E.a,{name:"linkedin"}),"My Linkedin"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(f.a,{color:"red",onClick:function(e){e.preventDefault(),window.location.href="https://drive.google.com/file/d/1oT0asRybl7qmKRakRGC3-EbN5kUnhLjA/view?usp=sharing"}},i.a.createElement(E.a,{name:"book"}),"Resume Pdf"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(f.a,{color:"black",onClick:function(e){e.preventDefault(),window.location.href="https://github.com/ooihuiying"}},i.a.createElement(E.a,{name:"github"}),"My GitHub"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(f.a,{color:"purple",onClick:function(e){e.preventDefault(),window.location.href="https://liverungrow11.wordpress.com/"}},i.a.createElement(E.a,{name:"wordpress"}),"Running Blog")),i.a.createElement(g.a.Column,{width:12},i.a.createElement("h1",null,"About Me"),i.a.createElement("br",null),i.a.createElement("p",null," Hello \u4f60\u597d, I am Hui Ying.  I'm a software engineer, earnest reader and writer with an overactive imagination. I am also an avid runner and I enjoy travelling and being in nature!"),i.a.createElement("p",null," Welcome to my website! I created this website using React and JavaScript. This app is integrated with Google Firebase database."),i.a.createElement("p",null,"The intention of this website is to serve as a repository of articles, which i hope to write, in the areas of topics that i am interested in. While I don\u2019t have the best language skills, I do enjoy reading, writing and documenting things I have learned."),i.a.createElement("p",null,"I really hope you will enjoy reading my articles in this website."),i.a.createElement("p",null,"Have a nice day!"))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(C,null)))))}},204:function(e,t,n){"use strict";var a,r,l,i=n(18),c=n.n(i),o=n(30),s=n(26),u=n(2),m=n.n(u),d=n(36),p=n(12),g=n(13),h=n(89),f=n.n(h),E=g.a.div(a||(a=Object(p.a)(["\n  background-color: rgba(255,255,255,0.5);\n  margin-top: 80px;\n  text-align: left;\n  padding: 80px;\n  padding-bottom: 100px;\n"]))),v=g.a.div(r||(r=Object(p.a)(["\n  margin: auto;\n  padding: 50px;\n"]))),b=g.a.div(l||(l=Object(p.a)(["\n  min-width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('","');;\n  background-size: cover;\n  background-attachment:fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  align-items: center;\n"])),f.a),x=n(14),w=n(33),k=n.n(w),y=n(397),O=n(98),j=n(37);n(194),t.a=function(){var e=Object(x.g)(),t=Object(u.useState)(!0),n=Object(s.a)(t,2),a=n[0],r=n[1],l=Object(u.useState)({}),i=Object(s.a)(l,2),p=i[0],g=i[1];return Object(u.useEffect)((function(){function t(){return(t=Object(o.a)(c.a.mark((function t(){var n,a,l,i,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e.state){t.next=6;break}n=e.state.post,g(n),r(!1),t.next=16;break;case 6:return r(!0),a=e.pathname.substring(1).split("/"),l=a[1],i=a[2],o=j.a.ref(l+"/"+i),t.next=13,o.getSinglePost(i).then((function(e){if(e)return e}));case 13:s=t.sent,g(s),r(!1);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),m.a.createElement(d.a,null,m.a.createElement(b,null,a?m.a.createElement(O.a,null):m.a.createElement("div",null,m.a.createElement(E,null,void 0!==p.tag?m.a.createElement("a",{className:"ui red tag label"},p.tag):m.a.createElement("div",null),m.a.createElement("h1",{style:{textAlign:"center"},as:"h2"},k()(p.title)||""),p.topImage?m.a.createElement(v,null,m.a.createElement("img",{src:p.topImage,alt:"Image",className:"ui centered massive image"})):m.a.createElement("div",null),m.a.createElement(y.a,{horizontal:!0},p.date||""),k()(p.text||"")))))}},215:function(e,t,n){e.exports=n(216)},216:function(e,t,n){"use strict";n.r(t),function(e){var t=n(2),a=n.n(t),r=n(50),l=n.n(r),i=n(43),c=n(14),o=n(201),s=n(203),u=n(202),m=n(94),d=n(97),p=n(64),g=n(204),h=n(195),f=n.n(h),E=n(196),v=n.n(E),b=n(197),x=n.n(b),w=n(198),k=n.n(w),y=n(199),O=n.n(y),j=n(37);n(391).config({path:e+"/.env"});var C=j.a.ref("/cs-posts"),S=j.a.ref("/book-reviews-posts"),I=j.a.ref("/chinese-culture-posts"),T=j.a.ref("/globe-trotting-posts"),P=j.a.ref("/reflection-posts");l.a.render(a.a.createElement(i.a,null,a.a.createElement(d.a,null,a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/"},a.a.createElement(s.a,null)),a.a.createElement(c.a,{exact:!0,path:"/latest"},a.a.createElement(o.a,{pathname:"TOP10"})),a.a.createElement(c.a,{exact:!0,path:"/tech-world"},a.a.createElement(p.a,{pathname:"/cs-posts",image:k.a,title:"Tech World",db:C})),a.a.createElement(c.a,{exact:!0,path:"/book-reviews"},a.a.createElement(p.a,{pathname:"/book-reviews-posts",image:f.a,title:"Book Reviews",db:S})),a.a.createElement(c.a,{exact:!0,path:"/chinese-culture"},a.a.createElement(p.a,{pathname:"/chinese-culture-posts",image:v.a,title:"Chinese Culture",db:I})),a.a.createElement(c.a,{exact:!0,path:"/globe_trotting"},a.a.createElement(p.a,{pathname:"/globe-trotting-posts",image:x.a,title:"Globe Trotting",db:T})),a.a.createElement(c.a,{exact:!0,path:"/quotes"},a.a.createElement(u.a,null)),a.a.createElement(c.a,{exact:!0,path:"/reflections"},a.a.createElement(p.a,{pathname:"/reflection-posts",image:O.a,title:"Reflections",db:P})),a.a.createElement(c.a,{path:"/full_article"},a.a.createElement(g.a,null)),a.a.createElement(c.a,{path:"*",component:m.a})))),document.getElementById("root"))}.call(this,"/")},246:function(e,t){},28:function(e,t,n){"use strict";t.a={colours:{white:"#ffffff",black:"#000000",maroon:"#960F4A",grey:"#C4C4C4",lightGrey:"#f4f5f6"},breakpoint:{widescreen:"1408px",desktop:"1400px",tablet:"1210px",mobile:"1000px"}}},36:function(e,t,n){"use strict";var a,r,l,i=n(2),c=n.n(i),o=n(12),s=n(43),u=n(13),m=n(28),d=Object(u.a)("div")(a||(a=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n\n  .layout--main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n\n    .layout--navbar {\n      padding-top: 50px;\n      padding-bottom: 50px;\n      padding-right: 50px;\n      padding-left: 50px;\n      width: 100%;\n      height: 10%;\n      align-items: center;\n      position: fixed;\n      z-index: 9999;\n      background-color: ",";\n      display: flex;\n      justify-content: space-between;\n\n      .navbar--item {\n        display: inline-flex;\n        justify-content: space-between;\n        overflow-x: auto;\n        overflow-y: hidden;\n      }\n\n      .navbar--title {\n        display: inline-flex;\n        justify-content: space-between;\n        flex-direction: row;\n        align-items: center;\n        height: 30px;\n      }\n    }\n  }\n"])),m.a.colours.white),p=Object(u.a)(s.b)(r||(r=Object(o.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  color: ",";\n  padding: 0px 0px 0px 40px;\n\n  :hover {\n    color: ",";\n    opacity: 0.8;\n  }\n"])),m.a.colours.maroon,m.a.colours.maroon),g=Object(u.a)(s.b)(l||(l=Object(o.a)(["\n  font-size: 40px;\n  font-weight: bold;\n  color: ",";\n"])),m.a.colours.maroon);t.a=function(e){var t=e.children;return c.a.createElement(d,null,c.a.createElement("div",{className:"layout--main"},c.a.createElement("div",{className:"layout--navbar"},c.a.createElement("div",{className:"navbar--title"},c.a.createElement(g,{to:"/"},"Hui Ying")),c.a.createElement("div",{className:"navbar--item"},c.a.createElement(p,{to:"/latest"},"Latest"),c.a.createElement(p,{to:"/tech-world"},"Tech World"),c.a.createElement(p,{to:"/book-reviews"},"Book Reviews"),c.a.createElement(p,{to:"/chinese-culture"},"Chinese Culture"),c.a.createElement(p,{to:"/globe_trotting"},"Globe Trotting"),c.a.createElement(p,{to:"/quotes"},"Quotes"),c.a.createElement(p,{to:"/reflections"},"Reflections")))),t)}},37:function(e,t,n){"use strict";var a=n(189),r=n(190),l=n(127),i={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/personal_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FIREBASE_API_KEY,authDomain:"ooijournal.firebaseapp.com",databaseURL:"https://ooijournal.firebaseio.com",projectId:"ooijournal",storageBucket:"ooijournal.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/personal_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/personal_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FIREBASE_API_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/personal_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FIREBASE_MEASUREMENT_ID};l.a.initializeApp(i);var c=function(){function e(t){Object(a.a)(this,e),this._ref=l.a.database().ref(t),this.lastDocument=null,this.firstDocument=null,this.LIMIT=10}return Object(r.a)(e,[{key:"formatPost",value:function(e){var t="";return e.title.split("\n").map((function(e){t+="<span>"+e+"<br /></span>"})),e.title=t,e}},{key:"getSinglePost",value:function(e){var t=this;return this._ref.orderByChild("date").once("value").then((function(n){var a=n.val();return(a=t.formatPost(a)).id=e,a})).catch(console.error)}},{key:"getAllPosts",value:function(){var e=this;return this._ref.orderByChild("date").once("value").then((function(t){var n=[];return t.forEach((function(t){var a=t.val();a.id=t.key,a=e.formatPost(a),n=[a].concat(n)})),n})).catch(console.error)}},{key:"get10Posts",value:function(){var e=this;return this._ref.orderByChild("date").limitToLast(this.LIMIT).once("value").then((function(t){var n=[],a=[];return t.forEach((function(t){var r=t.val();r.id=t.key,r=e.formatPost(r),a=a.concat(r.date),n=[r].concat(n)})),a.length>0&&(e.lastDocument=a[a.length-1],e.firstDocument=a[0]),n})).catch(console.error)}},{key:"getPrev10Posts",value:function(){var e=this;return this._ref.orderByChild("date").limitToFirst(this.LIMIT).startAfter(this.lastDocument).once("value").then((function(t){var n=[],a=[];return t.forEach((function(t){var r=t.val();r.id=t.key,r=e.formatPost(r),a=a.concat(r.date),n=[r].concat(n)})),a.length>0&&(e.lastDocument=a[a.length-1],e.firstDocument=a[0]),n})).catch(console.error)}},{key:"getNext10Posts",value:function(){var e=this;return this._ref.orderByChild("date").limitToLast(this.LIMIT+1).endBefore(this.firstDocument).once("value").then((function(t){var n=[],a=[];return t.forEach((function(t){var r=t.val();r.id=t.key,r=e.formatPost(r),a=a.concat(r.date),n=[r].concat(n)})),a.length>0&&(e.lastDocument=a[a.length-1],e.firstDocument=a[0]),n})).catch(console.error)}}],[{key:"ref",value:function(t){return new e(t)}}]),e}();t.a=c},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a,r,l=n(2),i=n.n(l),c=n(122),o=n(12),s=n(13),u=n(28),m=s.a.span(a||(a=Object(o.a)(["\n  font-size: 50px;\n  font-weight: bold;\n  display: inline-flex;\n  align-items: center;\n  color: ",";\n  :hover {\n    background-color: rgba(255,255,255,0.5);\n    cursor: pointer;\n  }\n"])),u.a.colours.maroon),d=s.a.span(r||(r=Object(o.a)(["\n  font-size: 1rem;\n  margin-right: 10px;\n"]))),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.handleExploreButtonClick,n=e.text,a=e.pointRight;return i.a.createElement("div",null,i.a.createElement(m,{onClick:t},i.a.createElement(d,null,n),a?i.a.createElement(c.b,null):i.a.createElement(c.a,null)))}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n.n(a),l=function(e){var t=e.style;return r.a.createElement("h1",{style:t},"No Post Yet!")}},64:function(e,t,n){"use strict";var a,r,l,i,c=n(95),o=n(18),s=n.n(o),u=n(30),m=n(26),d=n(404),p=n(36),g=n(2),h=n.n(g),f=n(14),E=n(405),v={backgroundColor:"rgba(255, 255, 255, 0.7)",overflow:"auto"},b=n(33),x=n.n(b),w=n(51),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.result,n=e.pathname,a=Object(f.f)(),r=function(){var e=Object(u.a)(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={title:t.title,text:t.text,date:t.date,topImage:t.topImage,tag:t.tag,id:t.id},a.push({pathname:"/full_article"+n+"/"+t.id,state:{post:r}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return h.a.createElement(E.a,{style:v},h.a.createElement("div",{className:"ui items"},h.a.createElement("div",{className:"item"},null!=t.topImage?h.a.createElement("div",{className:"image"},h.a.createElement("img",{src:t.topImage,alt:"Image",width:"200",height:"121"})):h.a.createElement("div",null),h.a.createElement("div",{className:"content"},h.a.createElement("div",{className:"header"},x()(t.title)),h.a.createElement("div",{className:"meta"},t.date),h.a.createElement("div",null,t.text.length>500?x()(t.text.slice(0,500)+" ......"):x()(t.text+" ......")||""),h.a.createElement("br",null),h.a.createElement(w.a,{handleExploreButtonClick:r,text:"Read More",pointRight:!0})))))},y=n(401),O={backgroundColor:"rgba(255, 255, 255, 0.7)"},j=function(){return h.a.createElement(E.a,{style:O},h.a.createElement("div",{className:"ui items"},h.a.createElement("div",{className:"item"},h.a.createElement("div",{className:"image"},h.a.createElement(y.a,null,h.a.createElement(y.a.Image,null))),h.a.createElement("div",{className:"content"},h.a.createElement(y.a,null,h.a.createElement(y.a.Line,{length:"full"}),h.a.createElement(y.a.Line,{length:"very long"}),h.a.createElement(y.a.Line,{length:"long"}),h.a.createElement(y.a.Line,{length:"medium"}))))))},C=n(59),S=n(12),I=n(13),T=I.a.h1(a||(a=Object(S.a)(["\n  text-align: center;\n  background-color: rgba(255,255,255,0.5);\n"]))),P=I.a.div(r||(r=Object(S.a)(["\n  position: absolute;\n  min-width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  background-image: ",";\n  background-size: cover;\n  background-attachment:fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  align-items: center;\n"])),(function(e){return"url("+e.image+")"})),_=I.a.div(l||(l=Object(S.a)(["\n  margin: 100px;\n  text-align: left;\n  padding: 80px;\n  margin-right: auto;\n  margin-left: auto;\n }\n"]))),N=I.a.div(i||(i=Object(S.a)(["\n  text-align: end;\n"]))),R={text:{textAlign:"center"}};t.a=function(e){var t=e.pathname,n=e.image,a=e.title,r=e.db,l=Object(g.useState)([]),i=Object(m.a)(l,2),o=i[0],f=i[1],E=Object(g.useState)(!0),v=Object(m.a)(E,2),b=v[0],x=v[1];function y(){return(y=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,r.get10Posts().then((function(e){if(e)return e}));case 3:(t=e.sent).length>0?f(t):f([]),x(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,r.getNext10Posts().then((function(e){if(e)return e}));case 3:(t=e.sent).length>0&&f(t),x(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,r.getPrev10Posts().then((function(e){if(e)return e}));case 3:(t=e.sent).length>0&&f(t),x(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[a]),h.a.createElement(p.a,null,h.a.createElement("div",{className:"image"},h.a.createElement(P,{image:n},h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement(_,null,h.a.createElement("div",null,h.a.createElement(T,null,a),b?h.a.createElement("div",null,h.a.createElement("div",{className:"row"},h.a.createElement(d.a,{centered:!0,stackable:!0,columns:1},h.a.createElement(d.a.Column,{width:10},Object(c.a)(Array(10)).map((function(){return h.a.createElement(j,null)})))))):!b&&o.length>0?h.a.createElement("div",null,h.a.createElement("div",{className:"row"},h.a.createElement(d.a,{centered:!0,stackable:!0,columns:1},h.a.createElement(d.a.Column,null,o.map((function(e){return h.a.createElement(k,{result:e,pathname:t})})))))):h.a.createElement(C.a,{style:R.text}),o.length>0?h.a.createElement(d.a,{centered:!0,stackable:!0,columns:2},h.a.createElement(d.a.Row,null,h.a.createElement(N,null,h.a.createElement(w.a,{handleExploreButtonClick:D,text:"",pointRight:!1})),h.a.createElement(N,null,h.a.createElement(w.a,{handleExploreButtonClick:z,text:"",pointRight:!0})))):h.a.createElement("div",null))))))}},89:function(e,t,n){e.exports=n.p+"static/media/bluesea.ba86a8f8.jpg"},94:function(e,t,n){"use strict";var a=n(2),r=n.n(a),l=n(187),i=n.n(l);t.a=function(){return r.a.createElement("img",{className:"ui  centered massive image",src:i.a,alt:"Page Not Found"})}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(26),r=n(2),l=n.n(r),i=n(14),c=n(94),o=n(36),s=function(){return l.a.createElement(o.a,null,l.a.createElement("h1",null,"Error retrieving information"))},u=Object(r.createContext)(),m=function(e){var t=e.children,n=Object(i.f)(),o=Object(r.useState)(),m=Object(a.a)(o,2),d=m[0],p=m[1];Object(r.useEffect)((function(){return n.listen((function(){return p(void 0)}))}),[n]);var g=Object(r.useMemo)((function(){return{setErrorStatusCode:p}}),[p]);return l.a.createElement(u.Provider,{value:g},404===d?l.a.createElement(c.a,null):400===d?l.a.createElement(s,null):t)},d=function(){return Object(r.useContext)(u)}},98:function(e,t,n){"use strict";var a,r=n(2),l=n.n(r),i=n(188),c=n.n(i),o=n(28),s=n(12),u=n(13).a.div(a||(a=Object(s.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform: -webkit-translate(-50%, -50%);\n  transform: -moz-translate(-50%, -50%);\n  transform: -ms-translate(-50%, -50%);\n  z-index: 9999;\n"])));t.a=function(){return l.a.createElement(u,null,l.a.createElement(c.a,{type:"spin",color:o.a.colours.maroon}))}}},[[215,1,2]]]);
//# sourceMappingURL=main.1028e677.chunk.js.map