window.__require=function e(a,o,n){function t(r,c){if(!o[r]){if(!a[r]){var l=r.split("/");if(l=l[l.length-1],!a[l]){var s="function"==typeof __require&&__require;if(!c&&s)return s(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+r+"'")}r=l}var u=o[r]={exports:{}};a[r][0].call(u.exports,function(e){return t(a[r][1][e]||e)},u,u.exports,e,a,o,n)}return o[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<n.length;r++)t(n[r]);return t}({CharacterChoose:[function(e,a,o){"use strict";cc._RF.push(a,"4bfe4prQrBHjpR4ULycE2mF","CharacterChoose");var n=e("Database"),t=0,i=n.chars;cc.Class({extends:cc.Component,properties:{pic:cc.Sprite,chname:cc.RichText,chdesc:cc.RichText,count:cc.Label,bnext:cc.Button,blast:cc.Button,ok:cc.Button},refresh:function(e){this.pic.spriteFrame=Global.resources[i[t].pic],this.chname.string=i[t].name,this.chdesc.string=i[t].desc+"\nInitial Bonus:\n";for(var a=0;a<i[t].init.length;a++)this.chdesc.string+=i[t].init[a][0]+" "+i[t].init[a][1]+"\n";this.count.string=t+1+"/"+i.length},start:function(){this.refresh();var e=this;console.log(n.chars.length),this.bnext.node.on("click",function(a){t=(t+1)%i.length,e.refresh(1)}),this.blast.node.on("click",function(a){t=(t+n.chars.length-1)%i.length,e.refresh(-1)}),this.ok.node.on("click",function(e){Global.to="GameScene",Global.pl=t;for(var a=0;a<i[t].init.length;a++)Global.attr[i[t].init[a][0]]+=i[t].init[a][1];cc.director.loadScene("Loading")})}}),cc._RF.pop()},{Database:"Database"}],Database:[function(e,a,o){"use strict";cc._RF.push(a,"648c1DnFidA1K3x/IzJQFMU","Database");a.exports={chars:[{name:"Reimu Hakurei",desc:"The shrine maiden everyone knows.\n",init:[["faith",30],["human",30],["youkai",-50]],race:"human",pic:"reimu",proposal:[{name:"I am poor.\nGive me your donation.",affect:{yes:[["money",-20],["reimu",20],["youkai",-10],["faith",50]],no:[["reimu",-40]]}},{name:"Do you want to come for a drink?\nWe are having a party.",affect:{yes:[["reimu",20],["faith",10],["?",-50,50],["strength",-20]],no:[["reimu",-40]]}},{name:"Allow me to exterminate some stupid youkai",affect:{yes:[["reimu",120],["human",60],["faith",60],["youkai",-50]],no:[["reimu",-60],["human",-30],["youkai",70],["faith",60]]}}]},{name:"Marisa Kirisame",desc:"An ordinary magician.\n",race:"human",pic:"marisa",init:[["money",50],["alice",39]],proposal:[{name:"I have a mysterious potion.\nDo you want to have a try?",affect:{yes:[["money",-10],["marisa",10],["?",-50,50]],no:[["marisa",-5]]}},{name:"I want to enlarge my shop.",affect:{yes:[["money",-30,50],["marisa",50],["faith",15],["environment",-5]],no:[["marisa",-5],["faith",-10]]}},{name:"I want to shoot down Reimu's shrine",affect:{yes:[["reimu",-50],["marisa",50],["money",-50]],no:[["marisa",-25]]}}]},{name:"Rumia",desc:"Youkai of the dark\n",race:"youkai",pic:"rumia",init:[["human",-25],["faith",-20],["youkai",20]],proposal:[{name:"I am hungry\nCan I eat some people of yours?",affect:{yes:[["human",-45],["faith",-20],["rumia",5]],no:[["rumia",-50]]}},{name:"Can I create a ball of dark matters?",affect:{yes:[["rumia",5],["human",-10],["faith",-5]],no:[["rumia",-25]]}},{name:"Is...Is that so?",affect:{yes:[["rumia",10],["knowledge",10]],no:[["rumia",10]]}}]},{name:"Cirno",desc:"Ice baka",race:"fairy",pic:"cirno",init:[["knowledge",-99]],proposal:[{name:"Freeze the frogs!",affect:{yes:[["cirno",5],["faith",-5],["environment",-10]],no:[["cirno",-40]]}},{name:"Fight!",affect:{yes:[["environment",-5],["fairy",-20],["faith",20],["strength",20]],no:[["cirno",-55],["fairy",10],["knowledge",20]]}},{name:"Open ice-cream shop?",affect:{yes:[["money",-5,15],["cirno",10],["?",0,5],["?",-5,0],["human",-5],["environment",-5],["strength",-5]],no:[["cirno",-20]]}},{name:"I want to freeze everything!!",affect:{yes:[["environment",-90],["cirno",110],["human",-90],["fairy",-90],["youkai",-90]],no:[["cirno",-20]]}}]},{name:"Hong meiling",desc:"Guard of the Devil Mansion",race:"human",pic:"meiling",init:[["strength",25]],proposal:[{name:"I want to sleep\nDon't tell my masters",affect:{yes:[["meiling",25],["sakuya",-25]],no:[["meiling",-25],["sakuya",25]]}},{name:"Practise kungfu with me?",affect:{yes:[["meiling",15],["faith",10],["strength",40]],no:[["faith",-5]]}}]},{name:"Patchouli Knowledge",desc:"The big library",race:"human",pic:"patchouli",init:[["strength",-50],["knowledge",50]],proposal:[{name:"I want to publish my book",affect:{yes:[["money",30],["knowledge",50],["patchouli",15],["environment",-20]],no:[["patchouli",-15],["knowledge",-20]]}},{name:"Let me teach you magic?",affect:{yes:[["knowledge",20],["strength",40],["?",-25,25]],no:[["patchouli",-25],["strength",-10],["knowledge",-10]]}},{name:"Please stop Marisa from stealing books",affect:{yes:[["patchouli",50],["marisa",-60]],no:[["marisa",60],["patchouli",-60]]}}]},{name:"Izayoi Sakuya",desc:"The maid with knife",race:"human",pic:"sakuya",init:[["strength",35],["marisa",10],["reimu",10],["remilia",60]],proposal:[{name:"Help me clean the mansion",affect:{yes:[["sakuya",15],["patchouli",15]],no:[["sakuya",-15],["patchouli",-15]]}},{name:"Let me teach you knifes?",affect:{yes:[["strength",20]],no:[["sakuya",-25]]}},{name:"Please stop Meiling from sleeping!",affect:{yes:[["meiling",-25],["sakuya",25]],no:[["meiling",25],["sakuya",-25]]}},{name:"Let's start a party with my master!",affect:{yes:[["money",-25],["sakuya",25],["remilia",25],["?",-25,25],["?",-25,25]],no:[["sakuya",-75],["remilia",-60]]}}]},{name:"Remilia Scarlet",desc:"The bright red moon",race:"vampire",pic:"remilia",init:[["sakuya",60],["strength",60]],proposal:[{name:"You should ban garlics",affect:{yes:[["remilia",15],["sakuya",5],["human",-30],["money",-30]],no:[["remilia",-25],["sakuya",-25]]}},{name:"We shall hide the sun",affect:{yes:[["environment",-100],["remilia",100],["sakuya",50],["human",-50],["reimu",-50]],no:[["remilia",-30],["sakuya",-10]]}},{name:"Do you agree I am the strongest?",affect:{yes:[["remilia",25],["knowledge",-5]],no:[["remilia",-25]]}},{name:"I am hungry. You know what you should do, right?",affect:{yes:[["strength",-30],["remilia",30]],no:[["remilia",-55]]}},{name:"Have some red tea with me?",affect:{yes:[["strength",5],["?",-5,5],["remilia",5],["sakuya",5]],no:[["remilia",-5]]}}]},{name:"Flandre Scarlet",desc:"The crazy sister",race:"vampire",pic:"flandre",init:[["strength",70],["remilia",55]],proposal:[{name:"P l a y  w i t h  m e ~",affect:{yes:[["flandre",50],["strength",-50]],no:[["flandre",-190]]}},{name:"L e t  m e  o u t ?",affect:{yes:[["remilia",-30],["human",-30],["flandre",50]],no:[["flandre",-95]]}}]},{name:"Letty Whiterock",desc:"Youkai of winter",race:"youkai",pic:"whiterock",init:[["environment",-15]],proposal:[{name:"Let's make the Gensokyo 'cooler'!",affect:{yes:[["environment",-25],["whiterock",35],["?",-50,-25],["fairy",-15],["chen",-15]],no:[["whiterock",-55]]}},{name:"Help me beat Cirno!",affect:{yes:[["cirno",-50],["whiterock",35]],no:[["whiterock",-55]]}}]},{name:"Chen",desc:"CHEEEEEEEEEEEEEEEEEEEEEEEEEEN!!!!!!!",race:"youkai",pic:"chen",init:[["ran",50],["yukai",50]],proposal:[{name:"*Jumpscares*",affect:{yes:[["knowledge",-5],["chen",35]],no:[["chen",-50]]}},{name:"*Meows*",affect:{yes:[["?",-5],["?",5]],no:[["chen",-45]]}},{name:"I want to enlarge Mayohiga",affect:{yes:[["chen",35],["money",-40],["youkai",15]],no:[["chen",-45],["youkai",-15]]}}]},{name:"Alice Margatroid",desc:"The magician who plays with people's fate",race:"human",pic:"alice",init:[["knowledge",30],["marisa",47]],proposal:[{name:"I want to spread my dolls to help others.",affect:{yes:[["alice",15],["money",-25],["?",-10,10],["?",-10,10],["?",-10,10]],no:[["alice",-15],["?",-20,10],["?",-20,10],["?",-20,10]]}},{name:"Please make Marisa love me",affect:{yes:[["alice",35],["marisa",35],["knowledge",-35],["?",-10,10]],no:[["?",-10,10],["?",-10,10],["?",-10,10],["alice",-15]]}},{name:"Please let my dolls can duplicate themselves",affect:{yes:[["alice",35],["knowledge",-35],["money",30],["?",-50,50],["?",-50,50],["?",-50,50]],no:[["alice",-35]]}}]},{name:"Lunasa Prismriver",desc:"Music Ghost I",race:"ghost",pic:"lunasa",init:[["lyrica",50],["merlin",50]],proposal:[{name:"I want to start a concert with Lyrica and Merlin!\nYou can earn 10% of the profit!",affect:{yes:[["money",15,30],["lunasa",50],["lyrica",35],["merlin",35],["human",-50,25]],no:[["lunasa",-60],["lyrica",-60],["merlin",-60]]}}]},{name:"Merlin Prismriver",desc:"Music Ghost II",race:"ghost",pic:"merlin",init:[["lyrica",50],["lunasa",50]],proposal:[{name:"I want to start a concert with Lyrica and Lunasa!\nYou can earn 10% of the profit!",affect:{yes:[["money",15,30],["lunasa",35],["lyrica",35],["merlin",50],["human",-50,25]],no:[["lunasa",-60],["lyrica",-60],["merlin",-60]]}}]},{name:"Lyrica Prismriver",desc:"Music Ghost III",race:"ghost",pic:"lyrica",init:[["merlin",50],["lunasa",50]],proposal:[{name:"I want to start a concert with Merlin and Lunasa!\nYou can earn 10% of the profit!",affect:{yes:[["money",15,30],["lunasa",35],["lyrica",50],["merlin",35],["human",-50,25]],no:[["lunasa",-60],["lyrica",-60],["merlin",-60]]}}]},{name:"Konpaku Youmu",desc:"Half-phantom swordman",race:"ghost",pic:"youmu",init:[["ghost",25],["human",25],["yuyuko",55]],proposal:[{name:"Can you help Yuyuko-sama eat less?",affect:{yes:[["money",-25],["yuyuko",-25],["youmu",35],["?",-25]],no:[["money",-50],["yuyuko",25],["youmu",-35],["?",-25]]}},{name:"Let me teach your how to use sword",affect:{yes:[["money",-25],["strength",25]],no:[["youmu",-25]]}},{name:"Please allow me to collect SPRING",affect:{yes:[["human",-35],["ghost",35],["yuyuko",25],["youmu",35],["reimu",-35],["environment",-15]],no:[["ghost",-55],["yuyuko",-25],["youmu",-35],["environment",-7]]}},{name:"You should obey Yuyuko-sama too",affect:{yes:[["faith",-65],["youmu",30]],no:[["youmu",-30]]}}]},{name:"Saigyouji Yuyuko",desc:"Hidden phantom girl",race:"ghost",pic:"yuyuko",init:[["ghost",25],["youmu",55]],proposal:[{name:"Can you help me monitor Youmu?",affect:{yes:[["money",-25],["yuyuko",25],["youmu",-35]],no:[["yuyuko",-45]]}},{name:"Let's organize a tour to my garden~",affect:{yes:[["money",-30],["human",25],["ghost",25],["yuyuko",25],["youmu",-30]],no:[["youmu",5],["human",-15],["ghost",-15],["yuyuko",-40]]}},{name:"Youmu is not here\nCould you provide me lunch?",affect:{yes:[["money",-115,-85],["human",-50],["yuyuko",45],["youmu",30]],no:[["yuyuko",-55],["youmu",-45]]}}]},{name:"Yakumo Ran",desc:"yet another nine-tail fox",race:"youkai",pic:"ran",init:[["chen",55],["yukari",55],["knowledge",80]],proposal:[{name:"Madam, do you want to hear the report of my calculation of Yukari's age?",affect:{yes:[["strength",-35],["knowledge",25],["yukari",-65],["ran",35]],no:[["ran",-35],["chen",-35]]}},{name:"Could you help me help Yukari-sama check if anything is OK?",affect:{yes:[["strength",-50],["ran",35],["human",-15]],no:[["ran",-50],["human",-5]]}}]},{name:"Yakumo Yukari",desc:"The master of all",race:"youkai",pic:"yukari",init:[["chen",12],["ran",30],["youkai",45],["faith",33]],proposal:[{name:"Do you know my age?",affect:{yes:[["yukari",-120]],no:[["knowledge",-15]]}},{name:"Could you please deliver this letter to Yuyuko",affect:{yes:[["strength",-15],["yuyuko",10],["yukari",10],["money",1]],no:[["ran",-25]]}},{name:"Let's create a barrier to protect the youkai!",affect:{yes:[["knowledge",-15],["money",-35],["youkai",50],["yukari",40],["human",-25],["reimu",-5,5],["faith",15]],no:[["youkai",-25],["yukari",-35],["ran",-25],["chen",-25]]}}]}]},cc._RF.pop()},{}],DieScene:[function(e,a,o){"use strict";cc._RF.push(a,"97c5aaV9KNJE4LOESg58za2","DieScene"),cc.Class({extends:cc.Component,properties:{txt:cc.RichText},start:function(){for(var e in Global.attr){if(Global.attr[e]<=0){1==Global.type[e]?this.txt.string=e+" hates you and kills you.\n":2==Global.type[e]?this.txt.string=e+" hate you and kill you.\n":this.txt.string="You've run out of "+e+"\n";break}if(Global.attr[e]>=200){1==Global.type[e]?this.txt.string="People say you love "+e+" too much and is unfair\n":2==Global.type[e]?this.txt.string="People say you love "+e+" too much and is unfair\n":"money"==e?this.txt.string="People say you are too greedy\n":"environment"==e?this.txt.string="People say you care about environment too much and is making Gensokyo primitive\n":"faith"==e?this.txt.string="People doubt if you are yet another preacher\n":"strength"==e?this.txt.string="People are afraid you are too strong and will destroy their home\n":"knowledge"==e&&(this.txt.string="People say you know too much\n");break}}this.txt.string+="You survived "+Global.daycount+" mornings.\nClose/Refresh to retry!"}}),cc._RF.pop()},{}],GameScene:[function(e,a,o){"use strict";cc._RF.push(a,"0ba60FvogVNJpwbpbrBL61A","GameScene");var n=e("Database").chars;cc.Class({extends:cc.Component,properties:{bstat:cc.Button,bspecies:cc.Button,bperson:cc.Button,speaker:cc.RichText,request:cc.RichText,byes:cc.Button,bno:cc.Button,img:cc.Sprite,info:cc.RichText,save:cc.Button,load:cc.Button},getNewRequest:function(){for(var e in Global.attr)(Global.attr[e]<=0||Global.attr[e]>=200)&&(Global.to="LoseScene",cc.director.loadScene("Loading"));Global.daycount++;var a=[];for(e=0;e<n.length;e++)if(e!=Global.pl)for(var o=n[e].proposal,t=0;t<o.length;t++)[e,t]in Global.used||a.push([e,t]);if(0==a.length)Global.to="WinScene",cc.director.loadScene("Loading");else{var i=Math.floor(Math.random()*a.length);Global.now=a[i],Global.used[a[i]]=!0,this.refresh()}},calcText:function(e){for(var a="",o=0;o<e.length;o++){if(e[o].length>2)a+=1==(n=Global.type[e[o][0]])?"\n<color=#0000ff>Relationship with "+e[o][0]+" will change</color>":2==n?"\n<color=#0000ff>Relationship with "+e[o][0]+" will change</color>":3==n?"\n<color=#0000ff>"+e[o][0]+" will change</color>":"\n<color=#0000ff>Something will change</color>";else if(e[o][1]>0){a+=1==(n=Global.type[e[o][0]])?"\n<color=#00ff00>Relationship with "+e[o][0]+" will be better</color>":2==n?"\n<color=#00ff00>Relationship with "+e[o][0]+" will be better</color>":3==n?"\n<color=#00ff00>Will earn "+e[o][0]+"</color>":"\n<color=#00ff00>Something will be better</color>"}else{var n;a+=1==(n=Global.type[e[o][0]])?"\n<color=#ff0000>Relationship with "+e[o][0]+" will be worse</color>":2==n?"\n<color=#ff0000>Relationship with "+e[o][0]+" will be worse</color>":3==n?"\n<color=#ff0000>Will lose "+e[o][0]+"</color>":"\n<color=#ff0000>Something will be worse</color>"}}return a},refresh:function(){var e=Global.now;this.img.spriteFrame=Global.resources[n[e[0]].pic],this.speaker.string="#"+Global.daycount+":"+n[e[0]].name;var a=n[e[0]].proposal[e[1]].name+"\nIf YES:";a+=this.calcText(n[e[0]].proposal[e[1]].affect.yes),a+="\nIf NO:",a+=this.calcText(n[e[0]].proposal[e[1]].affect.no),this.request.string=a,this.info.string=Global.info},affect:function(e){for(var a="",o=0;o<e.length;o++){var n,t;if("?"==e[o][0]){var i=[];for(var r in Global.attr)i.push(r);n=i[Math.floor(Math.random()*i.length)]}else n=e[o][0];t=e[o].length>2?Math.floor(Math.random()*(e[o][2]-e[o][1])+e[o][1]):e[o][1],Global.attr[n]+=t,a+=t>0?n+"+"+t+"|":n+""+t+"|"}Global.info=this.info.string=a},start:function(){null==Global.now?this.getNewRequest():this.refresh(),this.bstat.node.on("click",function(e){Global.to="StatScene",Global.view=3,cc.director.loadScene("Loading")}),this.bspecies.node.on("click",function(e){Global.to="StatScene",Global.view=2,cc.director.loadScene("Loading")}),this.bperson.node.on("click",function(e){Global.to="StatScene",Global.view=1,cc.director.loadScene("Loading")});var e=this;this.byes.node.on("click",function(a){e.affect(n[Global.now[0]].proposal[Global.now[1]].affect.yes),e.getNewRequest()}),this.bno.node.on("click",function(a){e.affect(n[Global.now[0]].proposal[Global.now[1]].affect.no),e.getNewRequest()}),this.load.node.on("click",function(e){var a=cc.sys.localStorage.getItem("game");if(console.log("<="+cc.sys.localStorage.getItem("game")),null!=a){var o=JSON.parse(a);Global.pl=o.pl,Global.attr=o.attr,Global.now=o.now,Global.used=o.used,Global.type=o.type,Global.info=o.info,Global.daycount=o.daycount,Global.to="GameScene",console.log(Global.to),cc.director.loadScene("Loading")}}),this.save.node.on("click",function(e){var a={pl:Global.pl,attr:Global.attr,now:Global.now,used:Global.used,type:Global.type,info:Global.info,daycount:Global.daycount};console.log("=>"+JSON.stringify(a)),cc.sys.localStorage.setItem("game",JSON.stringify(a))})}}),cc._RF.pop()},{Database:"Database"}],LoadingScene:[function(e,a,o){"use strict";cc._RF.push(a,"cf964KcAkJGPrslf6J7/zKP","LoadingScene"),window.Global={to:"StartScene",resources:null,pl:0,attr:null,now:null,used:{},type:{},view:0,info:"Please Press YES or NO",daycount:0};var n=e("Database").chars;cc.Class({extends:cc.Component,properties:{},start:function(){if(null==Global.attr){console.log("Initalizing Global.attr"),Global.attr={};for(var e=["money","environment","faith","strength","knowledge"],a=0;a<e.length;a++)Global.attr[e[a]]=100,Global.type[e[a]]=3;for(a=0;a<n.length;a++)Global.attr[n[a].pic]=100,Global.attr[n[a].race]=100,Global.type[n[a].race]=2,Global.type[n[a].pic]=1}null==Global.resources?(console.log("Loading resources"),Global.resources={},cc.resources.loadDir("char",cc.SpriteFrame,function(e,a){for(var o=0;o<a.length;o++)console.log(a[o].name),Global.resources[a[o].name]=a[o];cc.director.loadScene(Global.to)})):cc.director.loadScene(Global.to)}}),cc._RF.pop()},{Database:"Database"}],StartScene:[function(e,a,o){"use strict";cc._RF.push(a,"75b4bNFNRBIxKjN5I2Wuf6x","StartScene"),cc.Class({extends:cc.Component,properties:{st:cc.Button,music:cc.AudioClip,load:cc.Button},start:function(){this.st.node.on("click",function(e){Global.to="CharacterChoose",console.log(Global.to),cc.director.loadScene("Loading")}),cc.audioEngine.play(this.music,!0,1),this.load.node.on("click",function(e){var a=cc.sys.localStorage.getItem("game");if(null!=a){var o=JSON.parse(a);Global.pl=o.pl,Global.attr=o.attr,Global.now=o.now,Global.used=o.used,Global.type=o.type,Global.info=o.info,Global.daycount=o.daycount,Global.to="GameScene",console.log(Global.to),cc.director.loadScene("Loading")}})}}),cc._RF.pop()},{}],StatScene:[function(e,a,o){"use strict";cc._RF.push(a,"e8dfc/JM+9MJq+iSOqzzltn","StatScene");var n=e("Database").chars;cc.Class({extends:cc.Component,properties:{bg:cc.Sprite,txt:cc.RichText,back:cc.Button},start:function(){this.bg.spriteFrame=Global.resources[n[Global.pl].pic],this.back.node.on("click",function(e){Global.to="GameScene",cc.director.loadScene("Loading")});var e="";for(var a in Global.attr)if(Global.type[a]==Global.view){e+="\n";var o=Global.attr[a];e+=o>=100?"<color=#00ff00>"+o+"</color>":o>=50?"<color=#ffff00>"+o+"</color>":o>=25?"<color=#990000>"+o+"</color>":"<color=#ff0000>"+o+"</color>",e+="="+a}this.txt.string=e}}),cc._RF.pop()},{Database:"Database"}],"use_v2.0.x_cc.Toggle_event":[function(e,a,o){"use strict";cc._RF.push(a,"7892fk2l05MgLBwh7j/C8vA","use_v2.0.x_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_check=!0),cc._RF.pop()},{}]},{},["use_v2.0.x_cc.Toggle_event","CharacterChoose","Database","DieScene","GameScene","LoadingScene","StartScene","StatScene"]);