(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[57575],{88698:function(e,t,n){"use strict";var a=n(75963);t.Z=void 0;var o=a(n(64938)),i=n(85893),r=(0,o.default)((0,i.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");t.Z=r},85162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(67294),o=n(86010),i="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65488:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(83117),o=n(67294),i=n(86010),r=n(72389),l=n(67392),s=n(7094),d=n(12466),u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,r=e.lazy,m=e.block,p=e.defaultValue,h=e.values,f=e.groupId,g=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),$=w.tabGroupChoices,N=w.setTabGroupChoices,D=(0,o.useState)(y),x=D[0],M=D[1],_=[],E=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=$[f];null!=Z&&Z!==x&&b.some((function(e){return e.value===Z}))&&M(Z)}var L=function(e){var t=e.currentTarget,n=_.indexOf(t),a=b[n].value;a!==x&&(E(t),M(a),null!=f&&N(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=_.indexOf(e.currentTarget)+1;n=null!=(a=_[o])?a:_[0];break;case"ArrowLeft":var i,r=_.indexOf(e.currentTarget)-1;n=null!=(i=_[r])?i:_[_.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:L,onClick:L},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},32798:function(e){e.exports={siteHome:"https://moodle.academy/",courses:{setup:{id:29,name:"Set up your Moodle Development Environment",summary:"Learn about the Moodle developer community and setting up a development environment",description:"This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.",tags:["development","basics","setup"],archived:!1,series:[]},securityEssentials:{id:53,name:"Moodle Access and Security Essentials",summary:"A short course looking at access control and security aspects of plugins.",description:"In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle's Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\n\nThis is the fourth course in the Moodle Developer Basics program.",tags:["development","basic","essentials","security","api"],archived:!1,series:["basics"]},outputEssentials:{id:49,name:"Web Output Essentials",summary:"Learn how to use Moodle's Page and Output APIs to display content in a local plugin.",description:"This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle's Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.",tags:["development","basics","essentials","output","api"],archived:!1,series:["basics"]},architecture:{id:51,name:"Moodle's Modular Architecture and APIs",summary:"Take a deeper look at Moodle's architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.",description:"In this course we take a deeper look at Moodle's modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\n\nThis is the third course in the Moodle Developer Basics program.",tags:["development","api","architecture"],archived:!1,series:["basics"]},pluginBasics:{id:10,name:"Moodle Plugin Development Basics",summary:"Learn about the essential concepts in Moodle's moduel architecture.",description:"This course teaches you essential concepts related to Moodle's modular architecture, enabling you to develop a simple demo plugin.\n\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called 'Moodle Developer Basics'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.",tags:["development","basics","essentials","api","plugins","architecture"],archived:!1,series:["basics"]}}}},50793:function(e,t,n){"use strict";n.d(t,{dn:function(){return x.Z},vL:function(){return D},U6:function(){return w},E2:function(){return M.Z},mQ:function(){return _.Z},Zh:function(){return N}});n(86134);var a=n(67294),o=n(87918),i=n(80102),r=n(83117),l=n(95408),s=n(98700),d=n(39707),u=n(59766),c=n(69348),m=n(54502),p=n(85893);const h=["component","direction","spacing","divider","children"];function f(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,i)=>(e.push(o),i<n.length-1&&e.push(a.cloneElement(t,{key:`separator-${i}`})),e)),[])}const g=(0,c.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex"},(0,l.k9)({theme:t},(0,l.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,s.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),i=(0,l.P$)({values:e.direction,base:o}),r=(0,l.P$)({values:e.spacing,base:o}),d=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,s.NA)(a,t)}};var o};n=(0,u.Z)(n,(0,l.k9)({theme:t},r,d))}return n})),v=a.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiStack"}),a=(0,d.Z)(n),{component:o="div",direction:l="column",spacing:s=0,divider:u,children:c}=a,v=(0,i.Z)(a,h),b={direction:l,spacing:s};return(0,p.jsx)(g,(0,r.Z)({as:o,ownerState:b,ref:t},v,{children:u?f(c,u):c}))}));var b=v,k=n(39960);function y(e,t,n){var i=function(e){return"number"==typeof e&&Number.isInteger(e)?e.toFixed(1):e}(t),r=a.createElement("span",null,function(e){if("since"===e)return"Since";if("deprecated"===e)return"Deprecated";throw new Error("Unknown <Since> type: '"+e+"'")}(e)," ",i),l=a.createElement(o.Z,{key:"chip-"+e+i,label:r,clickable:!!n});return n?a.createElement(k.Z,{to:"https://tracker.moodle.org/browse/"+n,key:"link-"+e+i},l):l}function w(e){var t,n,o,i,r,l,s,d,u,c=(n=(t=e).issueNumber,o=void 0===n?null:n,i=t.type,r=void 0===i?"since":i,l=t.versions,s=void 0===l?[]:l,d=t.version,(u=void 0===d?null:d)?y(r,u,o):s.map((function(e){return y(r,e,o)})));return a.createElement(b,{direction:"row",justifyContent:"flex-end",spacing:2},c)}var $=n(86010);function N(e){return a.createElement("div",{className:(0,$.Z)(" alert alert--success margin-bottom--lg ")},a.createElement("span",{className:(0,$.Z)(" badge badge--success ")},"An example of correct behaviour"),e.children)}function D(e){return a.createElement("div",{className:(0,$.Z)(" alert alert--danger margin-bottom--lg ")},a.createElement("span",{className:(0,$.Z)(" badge badge--danger ")},"An example of incorrect behaviour"),e.children)}n(80069);var x=n(46975),M=n(85162),_=n(65488)},86134:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),o=n(69119),i=n(39960),r=n(88698),l=n(32798),s=n.n(l),d=n(80684);function u(e){var t=e.courseName;if(!s().courses[t])throw Error("Unknown course "+t);var n=s().courses[t];return a.createElement(o.Z,{type:"info",icon:a.createElement(r.Z,{fontSize:"inherit"}),title:"Learn more on Moodle Academy"},"You can learn more about"," ",a.createElement("strong",null,e.subject)," ","from the"," ",a.createElement(d.Z,{title:n.summary},a.createElement(i.Z,{to:s().siteHome+"course/view.php?id="+n.id},n.name))," ","on Moodle Academy.")}},80069:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),o=n(87918),i=n(80684),r=n(86886),l=n(34673),s=n(3905),d=function(e,t,n){return void 0===n&&(n="info"),a.createElement(r.ZP,{item:!0,key:e},a.createElement(i.Z,{title:t},a.createElement(o.Z,{label:e,color:n})))};function u(e){var t=e.filepath,n=e.summary,o=function(e){var t=e.required,n=void 0!==t&&t,a=e.legacy,o=void 0!==a&&a,i=e.deprecated,r=void 0!==i&&i,l=e.refreshedDuringUpgrade,s=void 0!==l&&l,u=e.refreshedDuringPurge,c=void 0!==u&&u,m=[];return s&&m.push(d("Upgradable","Changes to this file or directory will be re-applied during a Moodle upgrade. If you make any changes to it, you can simply increment the version number and perform a Moodle upgrade.","info")),c&&m.push(d("Refreshed on cache purge","The contents of this file or directory are cached. To see your changes you can simply purge Moodle's caches and refresh the page.","info")),n&&m.push(d("Required","This file must be present","success")),o&&m.push(d("Legacy","Use of this file is being phased out. It is still supported for older installations but will be removed..","warning")),r&&m.push(d("Deprecated","Use of this file is deprecated and not recommended.It may still be provided for older versions of Moodle but is no longer used.","error")),m}(e),i=e.description?a.createElement(r.ZP,{item:!0,xs:12},e.description):null;return a.createElement(s.Zo,null,a.createElement(r.ZP,{container:!0,spacing:2},a.createElement(r.ZP,{item:!0,xs:6},a.createElement("h4",null,n)),a.createElement(r.ZP,{item:!0,xs:6},a.createElement(r.ZP,{container:!0,spacing:2,justifyContent:"flex-end"},o)),a.createElement(r.ZP,{item:!0,xs:12},a.createElement("h5",null,"File path:"," ",t)),i,function(e){var t=e.example,n=e.open,o=void 0!==n&&n;return t?a.createElement(r.ZP,{item:!0,xs:12},a.createElement(l.Z,{summary:a.createElement("summary",null,"View example"),open:o},t)):null}(e)))}},6535:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(13904),l=n(50793),s=["components"],d={title:"Data definition API",tags:["DB","XMLDB","API","core_dml","ddl","core"]},u=void 0,c={unversionedId:"apis/core/dml/ddl",id:"apis/core/dml/ddl",title:"Data definition API",description:"In this page you'll access to the available functions under Moodle to be able to handle DB structures (tables, fields, indexes...).",source:"@site/docs/apis/core/dml/ddl.md",sourceDirName:"apis/core/dml",slug:"/apis/core/dml/ddl",permalink:"/devdocs/docs/apis/core/dml/ddl",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/core/dml/ddl.md",tags:[{label:"DB",permalink:"/devdocs/docs/tags/db"},{label:"XMLDB",permalink:"/devdocs/docs/tags/xmldb"},{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"core_dml",permalink:"/devdocs/docs/tags/core-dml"},{label:"ddl",permalink:"/devdocs/docs/tags/ddl"},{label:"core",permalink:"/devdocs/docs/tags/core"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655128613,formattedLastUpdatedAt:"13/06/2022",frontMatter:{title:"Data definition API",tags:["DB","XMLDB","API","core_dml","ddl","core"]},sidebar:"docs",previous:{title:"Data manipulation API",permalink:"/devdocs/docs/apis/core/dml/"},next:{title:"DML drivers",permalink:"/devdocs/docs/apis/core/dml/drivers"}},m={},p=[{value:"Main info",id:"main-info",level:2},{value:"The functions",id:"the-functions",level:2},{value:"Handling tables",id:"handling-tables",level:3},{value:"Handling fields",id:"handling-fields",level:3},{value:"Handling indexes",id:"handling-indexes",level:3},{value:"Some considerations",id:"some-considerations",level:2},{value:"See also",id:"see-also",level:2}],h={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,a.Z)({frontMatter:d},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)(l.U6,{version:"2.0",mdxType:"Since"}),(0,i.kt)("p",null,"In this page you'll access to the available functions under Moodle to be able to handle DB structures (tables, fields, indexes...)."),(0,i.kt)("p",null,"The objective is to have a well-defined group of functions able to handle all the DB structure (DDL statements) using one neutral description, being able to execute the correct SQL statements required by each RDBMS. All these functions are used ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.moodle.org/dev/Installing_and_upgrading_plugin_database_tables"},"exclusively by the installation and upgrade processes")),"."),(0,i.kt)("p",null,"In this page you'll see a complete list of such functions, with some explanations, tricks and examples of their use. If you are interested, it's also highly recommendable to take a look to the ",(0,i.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/core/dml/ddl"},"DML functions page")," where everything about how to handle DB data (select, insert, update, delete i.e. DML statements) is defined."),(0,i.kt)("p",null,"Of course, feel free to clarify, complete and add more info to all this documentation. It will be welcome, absolutely!"),(0,i.kt)("h2",{id:"main-info"},"Main info"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the function calls in this page are public methods of the ",(0,i.kt)("strong",{parentName:"li"},"database manager"),', accessible from the $DB global object. You will need to "import" it within the upgrade function of your ',(0,i.kt)("strong",{parentName:"li"},"upgrade.php")," main function using the ",(0,i.kt)("inlineCode",{parentName:"li"},"global")," keyword, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function xmldb_xxxx_upgrade {\n    global $DB;\n\n    // Load the DDL manager and xmldb API.\n    $dbman = $DB->get_manager();\n\n    // Your upgrade code goes here\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All of the ",(0,i.kt)("inlineCode",{parentName:"li"},"$table"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"$field"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"$index")," parameters are XMLDB objects. Don't forget to read carefully the complete documentation about ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB_creating_new_DDL_functions"},"creating new DDL functions")," before playing with these functions. Everything is explained there, with one general example and some really useful tricks to improve the use of all the functions detailed below."),(0,i.kt)("li",{parentName:"ul"},"If you want real examples of the usage of these functions we recommend examining the various core ",(0,i.kt)("strong",{parentName:"li"},"upgrade.php")," scripts.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.rog/dev/XMLDB_editor"},"XMLDB Editor")," to modify your tables. It is capable of generating the PHP code required to make your definition changes."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The use of these functions is ",(0,i.kt)("strong",{parentName:"p"},"restricted")," to the upgrade processes and it should not be used in any other parts of Moodle."))),(0,i.kt)("h2",{id:"the-functions"},"The functions"),(0,i.kt)("h3",{id:"handling-tables"},"Handling tables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Detect if a table exists.\n$dbman->table_exists($table)\n\n// Create a table.\n$dbman->create_table($table, $continue = true, $feedback = true)\n\n// Drop a table.\n$dbman->drop_table($table, $continue = true, $feedback = true)\n\n// Rename a table.\n$dbman->rename_table($table, $newname, $continue = true, $feedback = true)\n")),(0,i.kt)("h3",{id:"handling-fields"},"Handling fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Detect if a field exists.\n$dbman->field_exists($table, $field)\n\n// Create a field.\n$dbman->add_field($table, $field, $continue = true, $feedback = true)\n\n// Drop a field.\n$dbman->drop_field($table, $field, $continue = true, $feedback = true)\n\n// Change the type of a field.\n$dbman->change_field_type($table, $field, $continue = true, $feedback = true)\n\n// Change the precision of a field.\n$dbman->change_field_precision($table, $field, $continue = true, $feedback = true)\n\n// Change the signed/unsigned status of a field.\n$dbman->change_field_unsigned($table, $field, $continue = true, $feedback = true)\n\n// Make a field nullable or not.\n$dbman->change_field_notnull($table, $field, $continue = true, $feedback = true)\n\n// Change the default value of a field.\n$dbman->change_field_default($table, $field, $continue = true, $feedback = true)\n\n// Rename a field.\n$dbman->rename_field($table, $field, $newname, $continue = true, $feedback = true)\n")),(0,i.kt)("h3",{id:"handling-indexes"},"Handling indexes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Detect if an index exists.\n$dbman->index_exists($table, $index)\n\n// Return the name of an index in DB.\n$dbman->find_index_name($table, $index)\n\n// Add an index.\n$dbman->add_index($table, $index, $continue = true, $feedback = true)\n\n// Drop an index.\n$dbman->drop_index($table, $index, $continue = true, $feedback = true)\n")),(0,i.kt)("h2",{id:"some-considerations"},"Some considerations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"$table"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"$field"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"$index")," parameters are, always, XMLDB objects."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"$newtablename"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"$newfieldname")," parameters are, always, simple strings."),(0,i.kt)("li",{parentName:"ol"},"All the ",(0,i.kt)("inlineCode",{parentName:"li"},"*_exists()")," functions always return a boolean value."),(0,i.kt)("li",{parentName:"ol"},"If any issue is encountered during execution of these functions, an Exception will be thrown and the upgrade process will stop."),(0,i.kt)("li",{parentName:"ol"},"Always use the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB_editor"},"XMLDB Editor")," to generate the PHP code automatically.")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../.."},"Core APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB_Documentation"},"XMLDB Documentation"),": Main page of the whole XMLDB documentation, where all the process is defined and all the related information resides."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB_Defining_one_XML_structure"},"XMLDB Defining one XML structure"),": Where you will know a bit more about the underlying XML structure used to define the DB objects, that is used continuously by the functions described in this page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Installing_and_upgrading_plugin_database_tables"},"Installing and upgrading plugin DB tables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/core/dml/"},"DML functions"),": Where all the functions used to handle DB data (",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/wikipedia/Data_Manipulation_Language"},"DML"),") are defined.")))}f.isMDXComponent=!0}}]);