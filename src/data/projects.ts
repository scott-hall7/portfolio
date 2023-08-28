/* eslint-disable @typescript-eslint/no-var-requires */
const smells = require('../photos/smells.png')
const space = require('../photos/space.png')
const resume = require('../photos/resume.png')
const battleship = require('../photos/battleship.png')
const weather = require('../photos/weather.png')
const portfolio = require('../photos/portfolio.png')

const projects = [
    {
        name: "Smells for Sales",
        image: smells,
        github: "https://github.com/scott-hall7/shopping-cart",
        deployment: "https://scott-hall7.github.io/shopping-cart/",
    },
    {
        name: "Space Spotter",
        image: space,
        github: "https://github.com/scott-hall7/memory-game",
        deployment: "https://scott-hall7.github.io/memory-game/",
    },
    {
        name: "Resume Builder",
        image: resume,
        github: "https://github.com/scott-hall7/cv-project",
        deployment: "https://scott-hall7.github.io/cv-project/",
    },
    {
        name: "Battleship",
        image: battleship,
        github: "https://github.com/scott-hall7/battleship-project",
        deployment: "https://scott-hall7.github.io/battleship-project/",
    },
    {
        name: "Weather Site",
        image: weather,
        github: "https://github.com/scott-hall7/weather-app",
        deployment: "https://scott-hall7.github.io/weather-app/",
    },
    {
        name: "Portfolio",
        image: portfolio,
        github: "https://github.com/scott-hall7/portfolio",
        deployment: "scotthall.dev",
    },
]

export default projects;