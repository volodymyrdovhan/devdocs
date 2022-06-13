"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[30615],{55108:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=o(83117),r=o(80102),s=(o(67294),o(3905)),n=o(13904),i=["components"],l={title:"Moodle 1.4.5",tags:["Release notes"],sidebar_position:5,moodleVersion:"1.4.5"},u=void 0,d={unversionedId:"releases/1.4/1.4.5",id:"releases/1.4/1.4.5",title:"Moodle 1.4.5",description:"Release date: 7 May 2005",source:"@site/general/releases/1.4/1.4.5.md",sourceDirName:"releases/1.4",slug:"/releases/1.4/1.4.5",permalink:"/devdocs/general/releases/1.4/1.4.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.4/1.4.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 1.4.5",tags:["Release notes"],sidebar_position:5,moodleVersion:"1.4.5"},sidebar:"releaseNotes",previous:{title:"Moodle 1.4",permalink:"/devdocs/general/releases/1.4"},next:{title:"Release notes",permalink:"/devdocs/general/app_releases"}},p={},m=[{value:"Some important security fixes",id:"some-important-security-fixes",level:3},{value:"A few new things",id:"a-few-new-things",level:3},{value:"Performance improvements",id:"performance-improvements",level:3},{value:"Other bug fixes",id:"other-bug-fixes",level:3},{value:"Translations",id:"translations",level:2}],h={toc:m};function g(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 7 May 2005"),(0,s.kt)("p",null,"(Because this release contains important security fixes, we highly advise that sites using any previous version of Moodle upgrade to this version as soon as possible.)"),(0,s.kt)("h3",{id:"some-important-security-fixes"},"Some important security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Preventative measures against attacks to admin functions."),(0,s.kt)("li",{parentName:"ul"},"Lesson: Safer hiding of lessons (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2733"},"#2733"),")")),(0,s.kt)("h3",{id:"a-few-new-things"},"A few new things"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Flash Media Player: Now playing can start before the download is complete."),(0,s.kt)("li",{parentName:"ul"},"Added/updated language support for German (DE) and Turkish (TR)."),(0,s.kt)("li",{parentName:"ul"},"Release notes now link to the relevant bugs."),(0,s.kt)("li",{parentName:"ul"},"Prefetching requests from Google Web Accelerator, Mozilla etc are denied.")),(0,s.kt)("h3",{id:"performance-improvements"},"Performance improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Added option to cache the languages list. Saves around 10MB of memory and 40 includes. See config-dist.php for details on how to enable."),(0,s.kt)("li",{parentName:"ul"},"Major efficiency improvements for Postgres databases on insert. Also fixed many calls to insert_record() which discard the returned record id to not ask for the record id.")),(0,s.kt)("h3",{id:"other-bug-fixes"},"Other bug fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"HTML Editor: Fixes to some character encoding problems."),(0,s.kt)("li",{parentName:"ul"},"Quiz: fixes to export/import dropdown (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2963"},"#2963"),")"),(0,s.kt)("li",{parentName:"ul"},"Quiz: Don't throw a fatal error on unknown question, try to continue."),(0,s.kt)("li",{parentName:"ul"},"Course Social Forum: Removed misleading link to unsubscribe (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2945"},"#2945"),")."),(0,s.kt)("li",{parentName:"ul"},"Additional/updated translations."),(0,s.kt)("li",{parentName:"ul"},"Forums and Groups: Allow students not in a group to post into a discussion which is also not in a group, even if the course is using groups."),(0,s.kt)("li",{parentName:"ul"},"Sitewide HTML Editor settings: Fixed ",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=21359"},"Can't save changes in editor configuration")," form bug."),(0,s.kt)("li",{parentName:"ul"},"Cron: Removed some warnings."),(0,s.kt)("li",{parentName:"ul"},"Choice: Choice shows a bad number of answers (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2452"},"#2452"),")."),(0,s.kt)("li",{parentName:"ul"},"Better support for PHP5: Files uploads now use $_FILES rather than deprecated $HTTP_POST_FILES (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2828"},"#2828"),")"),(0,s.kt)("li",{parentName:"ul"},"Backup/Restore: Manual links from lesson pages to resources are now preserved between backup/restore anywhere. (see ",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=21044"},"this discussion"),")"),(0,s.kt)("li",{parentName:"ul"},"Some fixes for Postgres constraint naming."),(0,s.kt)("li",{parentName:"ul"},"I18N support: Reset proper encoding upon login (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2770"},"#2770"),")."),(0,s.kt)("li",{parentName:"ul"},"I18N support: Fixed some instances of garbled characters when using utf-8 in HTML Editor (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2763"},"#2763"),")"),(0,s.kt)("li",{parentName:"ul"},"Flash Media Player: Turn off the autoloading of sound files."),(0,s.kt)("li",{parentName:"ul"},"Flash Media Player: Better handling of filenames files."),(0,s.kt)("li",{parentName:"ul"},"Postgres: Fixed sequences out of sequence (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2742"},"#2742"),")."),(0,s.kt)("li",{parentName:"ul"},"Backup: Fixed memory limit overrun in backup config page."),(0,s.kt)("li",{parentName:"ul"},"Forums: Fixed error warnings when a teacher posts to a forum (",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=2723"},"#2723"),").")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.4"},"Notes de mise \xe0 jour de Moodle 1.4"))))}g.isMDXComponent=!0}}]);