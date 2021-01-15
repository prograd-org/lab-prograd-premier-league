let players = [{
        name: "NGolo Kanté",
        age: 27,
        debut: 2007,
        team: "Chelsea",
        position: "Midfielder",
        country: "France",
        url: "https://media.guim.co.uk/9aeaf1767280c511ff5295a293e9bafe20f35d65/0_129_4105_2463/500.jpg",
        awards: [{
                name: "FIFA FIFPro World XI",
                year: 2018
            },
            {
                name: "French Player of the Year",
                year: 2017
            }
        ]
    },
    {
        name: "Kylian Mbappe",
        age: 20,
        debut: 2015,
        team: "Paris St-Germain",
        position: "Forward",
        country: "France",
        url: "https://media.guim.co.uk/740417015e9d2279928da7a46036d6ff050089fc/1162_672_5644_3387/500.jpg",
        awards: [{
                name: "Golden Boy",
                year: 2017
            },
            {
                name: "French Player of the Year",
                year: 2018
            },
            {
                name: "FIFA FIFPro World XI",
                year: 2018
            }
        ]
    },
    {
        name: "Neymar",
        age: 26,
        debut: 2009,
        team: "Paris St-Germain",
        position: "Forward",
        country: "Brazil",
        url: "https://media.guim.co.uk/2b6caa5d916bf2936e054f7294f020a500caa0fa/187_230_2734_1641/500.jpg",
        awards: [{
                name: "FIFA Puskás Award",
                year: 2012
            },
            {
                name: "FIFA FIFPro World XI",
                year: 2017
            },
            {
                name: "Samba Gold",
                year: 2017
            }
        ]
    },
    {
        name: "Raphaël Varane",
        age: 25,
        debut: 2010,
        team: "Real Madrid",
        position: "Defender",
        country: "France",
        url: "https://media.guim.co.uk/ca6b3b683136f68e87631092cc5fd5fbf809bc0d/83_565_3451_2071/500.jpg",
        awards: [{
            name: "FIFA FIFPro World XI",
            year: 2018
        }]
    },
    {
        name: "Luis Suárez",
        age: 31,
        debut: 2003,
        team: "Barcelona",
        position: "Forward",
        country: "Uruguay",
        url: "https://media.guim.co.uk/2dcf66e61d70eb9e18807acb252d177108913677/0_80_3000_1801/500.jpg",
        awards: [{
                name: "European Golden Shoe",
                year: 2014
            },
            {
                name: "FIFA FIFPro World XI",
                year: 2017
            }
        ]
    },
    {
        name: "Sergio Ramos",
        age: 32,
        debut: 2004,
        team: "Real Madrid",
        position: "Defender",
        country: "Spain",
        url: "https://media.guim.co.uk/abdacdfe6cd56d03d49b7851926ceeab4f8a9314/176_128_2651_1591/500.jpg",
        awards: [{
            name: "FIFA FIFPro World XI",
            year: 2019
        }]
    },
    {
        name: "Marcelo",
        age: 30,
        debut: 2007,
        team: "Real Madrid",
        position: "Defender",
        country: "Brazil",
        url: "https://media.guim.co.uk/7247cfe16161d428218f34b5b0d7e5485bfa84a2/152_149_2221_1333/500.jpg",
        awards: [{
            name: "FIFA FIFPro World XI",
            year: 2019
        }]
    },
    {
        name: "Toni Kroos",
        age: 28,
        debut: 2007,
        team: "Real Madrid",
        position: "Midfielder",
        country: "Germany",
        url: "https://media.guim.co.uk/facf1f1a9a6679715927fa622d63d6659b411ef8/67_447_3931_2359/500.jpg",
        awards: [{
                name: "FIFA FIFPro World XI",
                year: 2017
            },
            {
                name: "Footballer of the Year in Germany",
                year: 2018
            }
        ]
    }
]



for(let i=0;i<players.length;i++){
    for(let j=0;j<players[i].awards.length;j++)
    console.log(players[i].awards[j])
}