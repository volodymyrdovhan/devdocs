"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[66505],{10330:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.10.9",tags:["Release notes","Moodle 3.10"],sidebar_position:9,moodleVersion:"3.10.9"},d=void 0,p={unversionedId:"releases/3.10/3.10.9",id:"releases/3.10/3.10.9",title:"Moodle 3.10.9",description:"Release date: 17 January 2022",source:"@site/general/releases/3.10/3.10.9.md",sourceDirName:"releases/3.10",slug:"/releases/3.10/3.10.9",permalink:"/devdocs/general/releases/3.10/3.10.9",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.10/3.10.9.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.10",permalink:"/devdocs/general/tags/moodle-3-10"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",sidebarPosition:9,frontMatter:{title:"Moodle 3.10.9",tags:["Release notes","Moodle 3.10"],sidebar_position:9,moodleVersion:"3.10.9"},sidebar:"releaseNotes",previous:{title:"Moodle 3.10.8",permalink:"/devdocs/general/releases/3.10/3.10.8"},next:{title:"Moodle 3.10.10",permalink:"/devdocs/general/releases/3.10/3.10.10"}},m={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 17 January 2022"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.10.9%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.10.9"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69061"},"MDL-69061")," - Lack of files reported during upgrade to 3.9 when $CFG->admin differs from 'admin'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73195"},"MDL-73195")," - mod_url: Error makes course/view.php unreachable if an invalid URL is saved"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72701"},"MDL-72701")," - Expand unit test coverage defaults"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72785"},"MDL-72785")," - Can't delete course category")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70274"},"MDL-70274")," - The WCAG (cynthia.exe) validator links in the footer is no longer available")),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73175"},"MDL-73175")," - Add behat generators for glossary entries and categories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73202"},"MDL-73202")," - Add behat generators for forum discussions and posts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72846"},"MDL-72846")," - Create default block generator for testing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73269"},"MDL-73269")," - Add PHP version and required/optional extensions to composer.json")),(0,s.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72096"},"MDL-72096")," - New helper function for cleaning SQL ORDER BY clauses")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=431100"},"MSA-22-0002")," calendar:manageentries capability allows CRUD access to all calendar events"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=431102"},"MSA-22-0003")," Capability gradereport/user:view not always respected when navigating to a user's course grade report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=431103"},"MSA-22-0004")," CSRF risk in badge alignment deletion")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.10.9"},"Notes de mise \xe0 jour de Moodle 3.10.9")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.10.9"},"Notas de Moodle 3.10.9"))))}k.isMDXComponent=!0}}]);