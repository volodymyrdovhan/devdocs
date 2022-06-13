"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[41207],{70106:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),n=["components"],i={title:"Moodle 3.2.2",tags:["Release notes","Moodle 3.2"],sidebar_position:2,moodleVersion:"3.2.2"},d=void 0,p={unversionedId:"releases/3.2/3.2.2",id:"releases/3.2/3.2.2",title:"Moodle 3.2.2",description:"Release date: 13 March 2017",source:"@site/general/releases/3.2/3.2.2.md",sourceDirName:"releases/3.2",slug:"/releases/3.2/3.2.2",permalink:"/devdocs/general/releases/3.2/3.2.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.2/3.2.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.2",permalink:"/devdocs/general/tags/moodle-3-2"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 3.2.2",tags:["Release notes","Moodle 3.2"],sidebar_position:2,moodleVersion:"3.2.2"},sidebar:"releaseNotes",previous:{title:"Moodle 3.2.1",permalink:"/devdocs/general/releases/3.2/3.2.1"},next:{title:"Moodle 3.2.3",permalink:"/devdocs/general/releases/3.2/3.2.3"}},u={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 13 March 2017"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.2.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.2.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36233"},"MDL-36233"),' - Fixed inconsistent "Submissions not graded" link displayed to the teachers on the course overview block'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48228"},"MDL-48228")," - MySQL and MariaDB drivers updated to support full UTF-8 . For sites upgrading to 3.2.2, a CLI script may be used to convert to full UTF-8. See ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/MySQL_full_unicode_support"},"MySQL full unicode support")," for details.")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=349419#p1409805"},"MSA-17-0005")," SQL injection via user preferences"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=349420#p1409806"},"MSA-17-0007")," Global search displays user names for unauthenticated users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=349421#p1409807"},"MSA-17-0008")," XSS in evidence of prior learning"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=349422#p1409808"},"MSA-17-0009")," XSS in attachments to evidence of prior learning")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56122"},"MDL-56122")," - Force reload/recreation of (unoconv) preview in grading interface"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51833"},"MDL-51833")," - Performance improvement in event monitor preferences loading"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55859"},"MDL-55859")," - Assignment: Delete incomplete files after pdf conversion failure"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55762"},"MDL-55762")," - Better error handling around ghostscript"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50719"},"MDL-50719")," - Long-running scheduled task should not significantly slow down cron processing of other tasks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57587"},"MDL-57587")," - Quiz: Show feedback images when reviewing a quiz attempt"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57608"},"MDL-57608")," - VideoJS and VideoJs-Youtube JavaScript modules are no longer loaded when not required on the page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50770"},"MDL-50770")," - Dashboard should apply customized block positions during dashboard reset"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57374"},"MDL-57374")," - Pasting unformatted non HTML plain text in Atto should not remove all styles and class attributes from all existing content in editor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57362"},"MDL-57362")," - Assignment list all submissions must respect separate groups mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46782"},"MDL-46782")," - When re-entering Multi-SCO SCORM start from the first uncompleted SCO"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53367"},"MDL-53367")," - Importing a forum with auto subscription now automatically subscribes current users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50625"},"MDL-50625")," - Allow to use LDAP user synchronisation without page control"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55915"},"MDL-55915")," - Respect capability to view full names in assignment grading, grader report and manual user enrolment popup"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57785"},"MDL-57785")," - Don't refresh SCORM navigation when navigation display is disabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57370"},"MDL-57370")," - Performance improvement when displaying notifications and messages popups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57296"},"MDL-57296")," - Fixed bug when teacher without permission to view hidden grades was not able to collapse grade categories in the gradebook"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55547"},"MDL-55547")," - Event monitor: fixed bug preventing to view current subscription after deleting a course with subscriptions")),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57030"},"MDL-57030")," - Add option to behat run tool to automatically rerun failures"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57940"},"MDL-57940")," - Allow behat parallel run to start at different time")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.2.2"},"Notes de mise \xe0 jour de Moodle 3.2.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.2.2"},"Notas de Moodle 3.2.2"))))}h.isMDXComponent=!0}}]);