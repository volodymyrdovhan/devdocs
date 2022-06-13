"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[20183],{78788:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return m}});var i=a(83117),o=a(80102),n=(a(67294),a(3905)),s=a(13904),l=["components"],r={title:"Data-loss",sidebar_position:7,tags:["Coding guidelines","Policies","Security"]},d=void 0,c={unversionedId:"development/policies/security/dataloss",id:"development/policies/security/dataloss",title:"Data-loss",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/dataloss.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/dataloss",permalink:"/devdocs/general/development/policies/security/dataloss",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/dataloss.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",sidebarPosition:7,frontMatter:{title:"Data-loss",sidebar_position:7,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Command-line injection",permalink:"/devdocs/general/development/policies/security/commandline-injection"},next:{title:"Information leakage",permalink:"/devdocs/general/development/policies/security/info-leakage"}},u={},m=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,(0,i.Z)({frontMatter:r},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This page forms part of the ",(0,n.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,n.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,n.kt)("p",null,"This is more a symptom or other vulnerabilities, than a vulnerability in its own right."),(0,n.kt)("p",null,"For example, Evil Hacker can use cross-site request forgery or SQL injection to maliciously destroy lots of your data. Or the fact that someone has permission to destroy a lot of data may indicate that the code is not performing sufficient authorisation checks."),(0,n.kt)("p",null,"However, it is also possible for users to accidentally destroy lots of data if the user-interface is badly designed and confusing."),(0,n.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Writing secure code so that data cannot be destroyed maliciously."),(0,n.kt)("li",{parentName:"ul"},"Trying to design clear interfaces, so that users understand the effects of their actions.")),(0,n.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Actions that destroy a significant amount of data should have a confirmation step.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Capabilities that let people destroy a lot of information should have ",(0,n.kt)("inlineCode",{parentName:"li"},"RISK_DATALOSS"),"."))),(0,n.kt)("li",{parentName:"ul"},"Follow the guidelines for avoiding:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./unauthorised-access"},"Unauthorised access")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./crosssite-request-forgery"},"Cross-site request forgery (XSRF)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./sql-injection"},"SQL injection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./commandline-injection"},"Command-line injection")),(0,n.kt)("li",{parentName:"ul"},"and so on.")))),(0,n.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Be careful!")),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding"))))}h.isMDXComponent=!0}}]);