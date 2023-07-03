const btn = document.querySelector('#hamburger')
const list = document.querySelectorAll('header nav ul li')
const nav = document.querySelector('header nav')
const img = document.querySelector('#information .planet img')
const title = document.querySelector('#information .info h1')
const paragraph = document.querySelector('#information .info p')
const source = document.querySelector('#information .info p a')
const rotation = document.querySelector('#rotation')
const revolution = document.querySelector('#revolution')
const radius = document.querySelector('#radius')
const temparature = document.querySelector('#temp')
btn.addEventListener('click', show)




for (let li of list) {
    if (li.innerHTML === 'MERCURY') {
        li.addEventListener('click', () => {
            showInfo('Pictures/Mercury.PNG',
                'MERCURY', "Mercury is the first planet from the Sun and the smallest planet in the Solar System. It is a terrestrial planet with a heavily cratered surface due to the planet having no geological activity and an extremely tenuous atmosphere (called an exosphere).",
                'https://en.wikipedia.org/wiki/Mercury_(planet)', '58.6 DAYS', '88 DAYS', ' 2,440 KM', '167°C')
        })
    }
    else if (li.innerHTML === 'EARTH')
        li.addEventListener('click', () => {
            showInfo('Pictures/Earth.png',
                'EARTH', "Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. Earth is the only planet known to sustain liquid surface water, with ocean water extending over 70.8% of the planet, making it an ocean world.",
                'https://en.wikipedia.org/wiki/Earth', '0.99 DAYS', '365.26 DAYS', ' 6,371 KM', '16°C')
        })


    else if (li.innerHTML === 'VENUS')
        li.addEventListener('click', () => {
            showInfo('Pictures/Venus.PNG',
                'VENUS', "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth.",
                'https://en.wikipedia.org/wiki/Venus', '243 DAYS', '225 DAYS', ' 6,051.8  KM', '462°C')
        })

    else if (li.innerHTML === 'MARS')
        li.addEventListener('click', () => {
            showInfo('Pictures/Mars.PNG',
                'MARS', "Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname; the Red Planet.",
                'https://en.wikipedia.org/wiki/Mars', '1.03 DAYS', '687 DAYS', ' 3,389.5 KM', '-65°C')

        })

    else if (li.innerHTML === 'JUPITER')
        li.addEventListener('click', () => {
            showInfo('Pictures/Jupiter.PNG',
                'JUPITER', "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun.",
                'https://en.wikipedia.org/wiki/Jupiter', '0.10 DAYS', '12 YEARS', '69,911 KM', '-110°C')

        })

    else if (li.innerHTML === 'SATURN')
        li.addEventListener('click', () => {
            showInfo('Pictures/Saturn.PNG',
                'SATURN', "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",
                'https://en.wikipedia.org/wiki/Saturn', '0.10 DAYS', '30 YEARS', '58,232 KM', '-140°C')

        })

    else if (li.innerHTML === 'URANUS')
        li.addEventListener('click', () => {
            showInfo('Pictures/Uranus.PNG',
                'URANUS', "Uranus is the seventh planet from the Sun and is a gaseous cyan ice giant. Most of the planet is made out of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles.",
                'https://en.wikipedia.org/wiki/Uranus', '0.17 DAYS', '84 YEARS', '25,362 KM', '-195°C')

        })

    else if (li.innerHTML === 'NEPTUNE')
        li.addEventListener('click', () => {
            showInfo('Pictures/Neptune.PNG',
                'NEPTUNE', "Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth.",
                'https://en.wikipedia.org/wiki/Neptune', '0.16 DAYS', '165 YEARS', '24,622 KM', '-200°C')

        })
}




function showInfo(link, topic, information, src, spin, revo, length, temp) {
    img.src = link
    title.innerHTML = topic
    paragraph.innerHTML = information
    source.setAttribute('href', src)
    rotation.innerHTML = spin
    revolution.innerHTML = revo
    radius.innerHTML = length
    temparature.innerHTML = temp
}

function show() {
    for (let li of list) {
        if (li.classList.contains('hide')) {
            li.classList.remove('hide')
        }
        else {
            li.classList.add('hide')
        }
    }
}
