"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[45090],{45074:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=a(83117),o=a(80102),i=(a(67294),a(3905)),l=a(13904),n=["components"],s={title:"Moodle App Scripts: gulp push",sidebar_label:"gulp push",tags:["Moodle App","Tools"]},p=void 0,d={unversionedId:"moodleapp/development/scripts/gulp-push",id:"moodleapp/development/scripts/gulp-push",title:"Moodle App Scripts: gulp push",description:'The gulp push command automatically pushes a branch to a git remote and then updates the corresponding Moodle Tracker (Jira) issue with the diff URL or a patch file, similar to mdk push -t. This script was developed using mdk as an example. It\'s meant to be used for MOBILE issues, so it will only update the "master" fields in the tracker.',source:"@site/docs/moodleapp/development/scripts/gulp-push.md",sourceDirName:"moodleapp/development/scripts",slug:"/moodleapp/development/scripts/gulp-push",permalink:"/devdocs/docs/moodleapp/development/scripts/gulp-push",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/scripts/gulp-push.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Tools",permalink:"/devdocs/docs/tags/tools"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",frontMatter:{title:"Moodle App Scripts: gulp push",sidebar_label:"gulp push",tags:["Moodle App","Tools"]},sidebar:"docs",previous:{title:"Scripts",permalink:"/devdocs/docs/category/scripts"},next:{title:"Release process",permalink:"/devdocs/docs/moodleapp/development/release-process"}},u={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Moodle Tracker data",id:"moodle-tracker-data",level:2},{value:"Config file",id:"config-file",level:2}],c={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,r.Z)({frontMatter:s},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gulp push")," command automatically pushes a branch to a git remote and then updates the corresponding Moodle Tracker (Jira) issue with the diff URL or a patch file, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"mdk push -t"),". This script was developed using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/mdk"},"mdk")," as an example. It's meant to be used for ",(0,i.kt)("inlineCode",{parentName:"p"},"MOBILE"),' issues, so it will only update the "master" fields in the tracker.'),(0,i.kt)("p",null,"To run it, just go to the root of the project and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gulp push\n")),(0,i.kt)("p",null,"By default, running ",(0,i.kt)("inlineCode",{parentName:"p"},"gulp push")," without any parameter will push the ",(0,i.kt)("strong",{parentName:"p"},"current branch")," to the ",(0,i.kt)("strong",{parentName:"p"},"origin")," remote. Then it will guess the issue number based on the branch name and it will update the tracker issue to include the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it's a security issue, it will upload a patch file."),(0,i.kt)("li",{parentName:"ul"},'Otherwise it will update the fields: "Pull from Repository", "Pull Master Branch", and "Pull Master Diff URL".')),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"All the parameters must be passed preceded by ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gulp push --branch MOBILE-1234 --remote upstream --force\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"branch")," \u2014 To specify the branch you want to push. By default: current branch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remote")," \u2014 To specify the remote where you want to push your branch. By default: origin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"force")," \u2014 To force the push of changes to the git remote. By default: false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"patch")," \u2014 To upload a patch file instead of a diff URL. If the issue you're pushing is a security issue, this setting will be forced to true. By default: false.")),(0,i.kt)("h2",{id:"moodle-tracker-data"},"Moodle Tracker data"),(0,i.kt)("p",null,"The script needs the following data to be able to update the tracker: tracker URL, username, and password."),(0,i.kt)("p",null,"First the script will try to read the URL and password from the ",(0,i.kt)("a",{parentName:"p",href:"#config-file"},"config file"),". If the file doesn't exist or it lacks any of those fields, it will check if ",(0,i.kt)("inlineCode",{parentName:"p"},"mdk")," is installed and configured. If it is, then the script will use the same tracker URL and username as ",(0,i.kt)("inlineCode",{parentName:"p"},"mdk"),"."),(0,i.kt)("p",null,"If none of those conditions are fulfilled, then the script will ask the user to input the URL and username and it will store them in the config file."),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/atom/node-keytar"},(0,i.kt)("inlineCode",{parentName:"a"},"node-keytar"))," library to manage the password. This library uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Keychain")," on macOS, Secret Service API/",(0,i.kt)("inlineCode",{parentName:"p"},"libsecret")," on Linux, and Credential Vault on Windows. We use the same key as ",(0,i.kt)("inlineCode",{parentName:"p"},"mdk")," to store and retrieve the tracker password, so if you already use ",(0,i.kt)("inlineCode",{parentName:"p"},"mdk")," this script will automatically get the password (it will probably ask your root/admin password in the device to be able to access it)."),(0,i.kt)("h2",{id:"config-file"},"Config file"),(0,i.kt)("p",null,"The script will use a file named ",(0,i.kt)("inlineCode",{parentName:"p"},".moodleapp-dev-config")," to store some configuration data in JSON format. You can also create or edit that file to configure the script's behaviour. These are the fields it accepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upstreamRemote")," \u2014 The upstream where to push the branch if the remote param isn't supplied. By default: origin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tracker.url")," \u2014 URL of the tracker to update. By default: ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/"},"https://tracker.moodle.org/"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tracker.username")," \u2014 Username to use in the tracker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tracker.fieldnames.repositoryurl"),' \u2014 Name of the tracker field where to put the repository URL. By default: "Pull  from Repository".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tracker.fieldnames.branch"),' \u2014 Name of the tracker field where to put the branch name. By default: "Pull Master Branch".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tracker.fieldnames.diffurl"),' \u2014 Name of the tracker field where to put the diff URL. By default: "Pull Master Diff URL".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wording.branchRegex")," \u2014 Regex to use to identify the issue number based on the branch name. By default: ",(0,i.kt)("inlineCode",{parentName:"li"},"(MOBILE)[-\\_](\\[0-9]+)"),". If you want to use the script to handle issues that aren't ",(0,i.kt)("inlineCode",{parentName:"li"},"MOBILE")," you'll need to update this field. For example, if you work on 2 projects: ",(0,i.kt)("inlineCode",{parentName:"li"},"(MOBILE|MYPROJECT)[-\\_](\\[0-9]+)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}.repositoryUrl")," \u2014 To specify the git URL where to push changes for a certain project (",(0,i.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}")," is the name of the project). This can be used if you work on different projects and you want to push changes to different remotes depending on the project. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"MOBILE.repositoryUrl: https://github.com/moodlehq/moodleapp"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}.diffUrlTemplate")," \u2014 To specify the diff URL template to use for a certain project (",(0,i.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}")," is the name of the project). By default: ",(0,i.kt)("inlineCode",{parentName:"li"},"remoteUrl + '/compare/%headcommit%...%branch%'"),".")))}h.isMDXComponent=!0}}]);