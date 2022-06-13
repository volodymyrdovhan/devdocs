"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[93857],{80740:function(e,o,t){t.r(o),t.d(o,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=t(83117),s=t(80102),r=(t(67294),t(3905)),l=t(13904),n=["components"],i={title:"Moodle 1.8.11",tags:["Release notes","Moodle 1.8"],sidebar_position:11,moodleVersion:"1.8.11"},d=void 0,m={unversionedId:"releases/1.8/1.8.11",id:"releases/1.8/1.8.11",title:"Moodle 1.8.11",description:"Release date: 25th November 2009",source:"@site/general/releases/1.8/1.8.11.md",sourceDirName:"releases/1.8",slug:"/releases/1.8/1.8.11",permalink:"/devdocs/general/releases/1.8/1.8.11",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.8/1.8.11.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.8",permalink:"/devdocs/general/tags/moodle-1-8"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",sidebarPosition:11,frontMatter:{title:"Moodle 1.8.11",tags:["Release notes","Moodle 1.8"],sidebar_position:11,moodleVersion:"1.8.11"},sidebar:"releaseNotes",previous:{title:"Moodle 1.8.10",permalink:"/devdocs/general/releases/1.8/1.8.10"},next:{title:"Moodle 1.8.12",permalink:"/devdocs/general/releases/1.8/1.8.12"}},p={},u=[{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var o=e.components,t=(0,s.Z)(e,n);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("p",null,"Release date: 25th November 2009"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important"),":  Upgrading is very highly recommended!"),(0,r.kt)("p",null,"Here is ",(0,r.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/browse/MDL/fixforversion/10383"},"the full list of fixed issues in 1.8.11"),"."),(0,r.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After upgrading, admins will be asked to change their passwords next time they log in (manual or email based self-registration accounts only)."),(0,r.kt)("li",{parentName:"ul"},"To reduce the risk of password theft, a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Password_salting"},"password salt")," is set in ",(0,r.kt)("em",{parentName:"li"},"config.php")," in new installs and for upgrades, admins are sent an email recommending that they do so."),(0,r.kt)("li",{parentName:"ul"},"Teachers lose permission to include ANY user data in a course backup or restore a course including user data due to new capabilities  ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/backup/userinfo"},"moodle/backup:userinfo")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/restore/userinfo"},"moodle/restore:userinfo")," which are not set for the default role of teacher.  Sites with custom roles should check permissions carefully."),(0,r.kt)("li",{parentName:"ul"},'Hashed user passwords are no longer saved in backup files containing user data. If a backup is restored to a new site, users will be asked to go through the "forgot my password" routine the first time they log in.'),(0,r.kt)("li",{parentName:"ul"},"In Moodle 1.8.11+ weekly from 23/12/09 onwards: Moodle will no longer serve any uploaded Flash files to browsers with old Flash plugins. Admins can set the minimum required Flash player version in ",(0,r.kt)("em",{parentName:"li"},"Site Administration > Security > HTTP Security"),".")),(0,r.kt)("h2",{id:"security-issues"},"Security issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139100"},"MSA-09-0022")," - Multiple CSRF problems fixed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139102"},"MSA-09-0023")," - Fixed user account disclosure in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/LAMS_module"},"LAMS module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139103"},"MSA-09-0024")," - Fixed insufficient access control in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Glossary_module"},"Glossary module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139105"},"MSA-09-0025")," - Unneeded MD5 hashes removed from user table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139106"},"MSA-09-0026")," - Fixed invalid application access control in MNET interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139107"},"MSA-09-0027")," - Ensured login information is always sent secured when using SSL for logins"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139110"},"MSA-09-0028")," - Passwords and secrets are no longer ever saved in backups, new backup capabilities ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/backup/userinfo"},"moodle/backup:userinfo")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/restore/userinfo"},"moodle/restore:userinfo")," for controlling who can backup/restore user data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139111"},"MSA-09-0029")," - Enabling a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Password_salting"},"password salt")," in encouraged in ",(0,r.kt)("em",{parentName:"li"},"config.php")," and admins are forced to change password after the upgrade"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139120"},"MSA-09-0031")," - Fixed SQL injection in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/SCORM_module"},"SCORM module")),(0,r.kt)("li",{parentName:"ul"},"In Moodle 1.8.11+ weekly from 23/12/09 onwards: ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139119"},"MSA-09-0030")," - New detection of insecure Flash player plugins, Moodle won't serve Flash to insecure plugins")),(0,r.kt)("h2",{id:"translations"},"Translations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.8.11"},"Notes de mise \xe0 jour de Moodle 1.8.11")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_1.8.11"},"Notas de Moodle 1.8.11")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_1.8.11_Versionsinformationen"},"Moodle 1.8.11 Versionsinformationen"))))}h.isMDXComponent=!0}}]);