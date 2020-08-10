[
    {
        name:"Reimu Hakurei",
        desc:"The shrine maiden everyone knows.\n",
        init:[
            ["faith",30],
            ["human",30],
            ["youkai",-50]
        ],
        race:"human",
        pic:"reimu",
        proposal:[ //proposal object
            {
                name:"I am poor.\nGive me your donation.",
                affect:{
                    yes:[
                        ["money",-20],
                        ["reimu",20],
                        ["youkai",-10],
                        ["faith",50]
                    ],
                    no:[
                        ["reimu",-40]
                    ]
                }
            },
            {
                name:"Do you want to come for a drink?\nWe are having a party.",
                affect:{
                    yes:[
                        ["reimu",20],
                        ["faith",10],
                        ["?",-50,50],
                        ["strength",-20]
                    ],
                    no:[
                        ["reimu",-40]
                    ]
                }
            },
            {
                name:"Allow me to exterminate some stupid youkai",
                affect:{
                    yes:[
                        ["reimu",120],
                        ["human",60],
                        ["faith",60],
                        ["youkai",-50]
                    ],
                    no:[
                        ["reimu",-60],
                        ["human",-30],
                        ["youkai",70],
                        ["faith",60]
                    ]
                }
            }
        ]
    },
    {
        name:"Marisa Kirisame",
        desc:"An ordinary magician.\n",
        race:"human",
        pic:"marisa",
        init:[
            ["money",50],
            ["faith",-10]
        ],
        proposal:[ //proposal object
            {
                name:"I have a mysterious potion.\nDo you want to have a try?",
                affect:{
                    yes:[
                        ["money",-10],
                        ["marisa",10],
                        ["?",-50,50]
                    ],
                    no:[
                        ["marisa",-5],
                    ]
                }
            },
            {
                name:"I want to enlarge my shop.",
                affect:{
                    yes:[
                        ["money",-30,50],
                        ["marisa",50],
                        ["faith",15],
                        ["environment",-5]
                    ],
                    no:[
                        ["marisa",-5],
                        ["faith",-10]
                    ]
                }
            },
            {
                name:"I want to shoot down Reimu's shrine",
                affect:{
                    yes:[
                        ["reimu",-50],
                        ["marisa",50],
                        ["money",-50],
                    ],
                    no:[
                        ["marisa",-25],
                    ]
                }
            },
        ]
    },
    {
        name:"Rumia",
        desc:"Youkai of the dark\n",
        race:"youkai",
        pic:"rumia",
        init:[
            ["human",-25],
            ["faith",-20],
            ["youkai",20]
        ],
        proposal:[ //proposal object
            {
                name:"I am hungry\nCan I eat some people of yours?",
                affect:{
                    yes:[
                        ["human",-45],
                        ["faith",-20],
                        ["rumia",5],
                    ],
                    no:[
                        ["rumia",-50],
                    ]
                }
            },
            {
                name:"Can I create a ball of dark matters?",
                affect:{
                    yes:[
                        ["rumia",5],
                        ["human",-10],
                        ["faith",-5]
                    ],
                    no:[
                        ["rumia",-25]
                    ]
                }
            },
            {
                name:"Is...Is that so?",
                affect:{
                    yes:[
                        ["rumia",10],
                        ["knowledge",10]
                    ],
                    no:[
                        ["rumia",10]
                    ]
                }
            },
        ]
    },
    {
        name:"Cirno",
        desc:"Ice baka",
        race:"fairy",
        pic:"cirno",
        init:[
            ["knowledge",-99],
        ],
        proposal:[ //proposal object
            {
                name:"Freeze the frogs!",
                affect:{
                    yes:[
                        ["cirno",5],
                        ["faith",-5],
                        ["environment",-10],
                    ],
                    no:[
                        ["cirno",-40]
                    ]
                }
            },
            {
                name:"Fight!",
                affect:{
                    yes:[
                        ["environment",-5],
                        ["fairy",-20],
                        ["faith",20],
                        ["strength",20]
                    ],
                    no:[
                        ["cirno",-55],
                        ["fairy",10],
                        ["knowledge",20]
                    ]
                }
            },
            {
                name:"Open ice-cream shop?",
                affect:{
                    yes:[
                        ["money",-5,15],
                        ["cirno",10],
                        ["?",0,5],
                        ["?",-5,0],
                        ["human",-5],
                        ["environment",-5],
                        ["strength",-5]
                    ],
                    no:[
                        ["cirno",-20],
                    ]
                }
            },
            {
                name:"I want to freeze everything!!",
                affect:{
                    yes:[
                        ["environment",-90],
                        ["cirno",110],
                        ["human",-90],
                        ["fairy",-90],
                        ["youkai",-90]
                    ],
                    no:[
                        ["cirno",-20],
                    ]
                }
            },
        ]
    },
    {
        name:"Hong meiling",
        desc:"Guard of the Devil Mansion",
        race:"human",
        pic:"meiling",
        init:[
            ["strength",25]
        ],
        proposal:[ //proposal object
            {
                name:"I want to sleep\nDon't tell my masters",
                affect:{
                    yes:[
                        ["meiling",25],
                        ["sakuya",-25]
                    ],
                    no:[
                        ["meiling",-25],
                        ["sakuya",25]
                    ]
                }
            },
            {
                name:"Practise kungfu with me?",
                affect:{
                    yes:[
                        ["meiling",15],
                        ["faith",10],
                        ["strength",40]
                    ],
                    no:[
                        ["faith",-5]
                    ]
                }
            },
        ]
    },
    {
        name:"Patchouli Knowledge",
        desc:"The big library",
        race:"human",
        pic:"patchouli",
        init:[
            ["strength",-50],
            ["knowledge",50]
        ],
        proposal:[ //proposal object
            {
                name:"I want to publish my book",
                affect:{
                    yes:[
                        ["money",30],
                        ["knowledge",50],
                        ["patchouli",15],
                        ["environment",-20]
                    ],
                    no:[
                        ["patchouli",-15],
                        ["knowledge",-20],
                    ]
                }
            },
            {
                name:"Let me teach you magic?",
                affect:{
                    yes:[
                        ["knowledge",20],
                        ["strength",40],
                        ["?",-25,25]
                    ],
                    no:[
                        ["patchouli",-25],
                        ["strength",-10],
                        ["knowledge",-10]
                    ]
                }
            },
            {
                name:"Please stop Marisa from stealing books",
                affect:{
                    yes:[
                        ["patchouli",50],
                        ["marisa",-60]
                    ],
                    no:[
                        ["marisa",60],
                        ["patchouli",-60]
                    ]
                }
            },
        ]
    },
    {
        name:"Izayoi Sakuya",
        desc:"The maid with knife",
        race:"human",
        pic:"sakuya",
        init:[
            ["strength",35],
            ["marisa",10],
            ["reimu",10],
            ["remilia",60]
        ],
        proposal:[ //proposal object
            {
                name:"Help me clean the mansion",
                affect:{
                    yes:[
                        ["sakuya",15],
                        ["patchouli",15],
                    ],
                    no:[
                        ["sakuya",-15],
                        ["patchouli",-15],
                    ]
                }
            },
            {
                name:"Let me teach you knifes?",
                affect:{
                    yes:[
                        ["strength",20]
                    ],
                    no:[
                        ["sakuya",-25],
                    ]
                }
            },
            {
                name:"Please stop Meiling from sleeping!",
                affect:{
                    yes:[
                        ["meiling",-25],
                        ["sakuya",25]
                    ],
                    no:[
                        ["meiling",25],
                        ["sakuya",-25]
                    ]
                }
            },
            {
                name:"Let's start a party with my master!",
                affect:{
                    yes:[
                        ["money",-25],
                        ["sakuya",25],
                        ["remilia",25],
                        ["?",-25,25],
                        ["?",-25,25]
                    ],
                    no:[
                        ["sakuya",-75],
                        ["remilia",-60]
                    ]
                }
            },
        ]
    },
    {
        name:"Remilia Scarlet",
        desc:"The bright red moon",
        race:"vampire",
        pic:"remilia",
        init:[
            ["sakuya",60],
            ["strength",60]
        ],
        proposal:[ //proposal object
            {
                name:"You should ban garlics",
                affect:{
                    yes:[
                        ["remilia",15],
                        ["sakuya",5],
                        ["human",-30],
                        ["money",-30]
                    ],
                    no:[
                        ["remilia",-25],
                        ["sakuya",-25],
                    ]
                }
            },
            {
                name:"We shall hide the sun",
                affect:{
                    yes:[
                        ["environment",-100],
                        ["remilia",100],
                        ["sakuya",50],
                        ["human",-50],
                        ["reimu",-50]
                    ],
                    no:[
                        ["remilia",-30],
                        ["sakuya",-10]
                    ]
                }
            },
            {
                name:"Do you agree I am the strongest?",
                affect:{
                    yes:[
                        ["remilia",25],
                        ["knowledge",-5]
                    ],
                    no:[
                        ["remilia",-25],
                    ]
                }
            },
            {
                name:"I am hungry. You know what you should do, right?",
                affect:{
                    yes:[
                        ["strength",-30],
                        ["remilia",30]
                    ],
                    no:[
                        ["remilia",-55]
                    ]
                }
            },
            {
                name:"Have some red tea with me?",
                affect:{
                    yes:[
                        ["strength",5],
                        ["?",-5,5],
                        ["remilia",5],
                        ["sakuya",5]
                    ],
                    no:[
                        ["remilia",-5]
                    ]
                }
            },
        ]
    },
    {
        name:"Flandre Scarlet",
        desc:"The crazy sister",
        race:"vampire",
        pic:"flandre",
        init:[
            ["strength",70],
            ["remilia",55]
        ],
        proposal:[ //proposal object
            {
                name:"P l a y  w i t h  m e ~",
                affect:{
                    yes:[
                        ["flandre",50],
                        ["strength",-50]
                    ],
                    no:[
                        ["flandre",-190],
                    ]
                }
            },
            {
                name:"L e t  m e  o u t ?",
                affect:{
                    yes:[
                        ["remilia",-30],
                        ["human",-30],
                        ["flandre",50]
                    ],
                    no:[
                        ["flandre",-95]
                    ]
                }
            },
        ]
    },
];
