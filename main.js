let heroes = [
  {
    name: 'moath',
    type: 'dwarf',
    damage: 5,
    health: 100,
    image: 'https://im.indiatimes.in/content/2020/Feb/69246187_2282245011872642_2461730930281152512_n_5e50cf44bd3cb.jpg',
    gold: 0

  },
  {
    name: 'liam',
    type: 'elf',
    damage: 10,
    health: 50,
    image: 'https://hdsouth.org/wp-content/uploads/sites/2/2020/10/Elf.jpg',
    gold: 0
  }
]


let boss = {
  name: 'Big Shotty',
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
  image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Terminator-2-judgement-day.jpg/220px-Terminator-2-judgement-day.jpg'
}



function drawHero() {
  let template = ''
  heroes.forEach(h => template += `
  <div class="col-2 card shadow bg-dark text-light">
  <img src="${h.image}" alt="">
  <p>Name: ${h.name}</p>
  <p>Health: ${h.health}</p>
  <p>Damage: ${h.damage}</p>
  <p>Gold: ${h.gold}</p>
</div>
  `)
  // @ts-ignore
  document.getElementById('hero').innerHTML = template
}

drawHero()


function drawBoss() {
  let template = ``
  template += `
    <div class="col-4 card bg-dark text-light p-2">
    <img class=" shotty-img" src="${boss.image}" onclick="attackBoss()" alt="">
    <p>${boss.name}</p>
    <p>${boss.damage}</p>
    <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: ${boss.health}%;" aria-valuenow="25"
    aria-valuemin="0" aria-valuemax="100">health</div>
    </div>
    </div>
    `

  // @ts-ignore
  document.getElementById("boss-mane").innerHTML = template
}


drawBoss()


function attackBoss() {
  heroes.forEach(d => {
    boss.health -= d.damage
    console.log(boss.health);
    if (boss.health <= 0) {
      boss.health += 100
      boss.damage += 5
      d.gold += 50
      drawHero()
    }
    drawBoss()
  })
}
setInterval(bossAttack, 5000)

function bossAttack() {
  heroes.forEach(d => {
    d.health -= boss.damage
    // console.log(d.health)
    if (d.health <= 0)
      d.health = 0
    drawHero()
  }
  )
}

function buyHealth() {
  let buyer = heroes.find(hero => hero.gold >= 50)
  // @ts-ignore
  if (buyer?.gold >= 50) {
    // @ts-ignore
    buyer.gold -= 50
    // @ts-ignore
    buyer.health += 200
    // @ts-ignore
    console.log("increasing buyer health", buyer.health);
  } else {
    window.alert('not enough fella shotty')
  }
  drawHero()
}
