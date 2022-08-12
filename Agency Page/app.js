console.log('Hi 👋')
const clients = document.getElementById('clients')
const team = document.getElementById('team')

// Team Data
const teamNames = {
  Vadim: 'Managing Director',
  Sergery: 'Technology Director',
  Andrey: 'Front-end Developer',
  Alex: 'Front-end Developer',
  Agneshka: 'Mobile Developer',
  Dmitry: 'Back-end Developer',
  Artyom: 'Back-end Developer',
  Evgeny: 'Product Designer',
  Tom: 'Product Designer',
}

// Populating the Clients section
for (let i = 1; i <= 12; i++) {
  const client = document.createElement('img')
  client.src = `./Assets/Clients/client${i}.svg`
  client.alt = `Client ${i}`
  clients.appendChild(client)
}
// Populating the Team Section
let i = 1

for (const key in teamNames) {
  if (Object.hasOwnProperty.call(teamNames, key)) {
    const el = teamNames[key]
    const member = document.createElement('div')
    member.classList.add('team-member')
    member.innerHTML = `<img src="./Assets/Avatars/Avatar${i}.png" alt="Employee ${i}"><div class="member-data"><h4 class="member-name">${key}</h4><p class="member-designation">${el}</p></div>`
    team.appendChild(member)
    i++
  }
}

// Nav Menu Functionality
const navMenu = (e) => {
  const navList = document.getElementById('navLinks')
  e.addEventListener('click', () => {
    navList.classList.toggle('show')
    e.classList.toggle('fix')
  })
}

// Show more in the team section

const showMore = document.getElementById('show-more')

showMore.addEventListener('click', () => {
  team.classList.toggle('show-more')
  if (showMore.textContent == 'Show More') {
    showMore.innerText = 'Show Less'
  } else {
    showMore.innerText = 'Show More'
  }
})
