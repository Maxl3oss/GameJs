const attackBtn = document.getElementById('attackBtn')
attackBtn.addEventListener('click', attackBtn1)

function attackBtn1() {
  player.attack()
}

// ramdom Attack
function getRandomInt() {
  return Math.floor(Math.random() * 999)
}

var ramdomJump = window.setInterval(function () {
  getRandomInt()
  if (getRandomInt() % 2 == 0) {
    if (enemy.velocity.y === 0) {
      enemy.velocity.y = -15
    }
  }
}, 500)

var pursue = window.setInterval(() => {
  if (enemy.position.x - player.position.x > 180) {
    keys.ArrowLeft.pressed = true
    enemy.lastKey = 'ArrowLeft'
    console.log(enemy.position.x - player.position.x)
  } else {
    enemy.attack()
    keys.ArrowRight.pressed = true
    enemy.lastKey = 'ArrowRight'
  }
}, 40)

function stopPursue() {
  keys.ArrowRight.pressed = false
  keys.ArrowLeft.pressed = false
  clearInterval(pursue)
  clearInterval(ramdomJump)
}
// case 'ArrowRight':
//         keys.ArrowRight.pressed = true
//         enemy.lastKey = 'ArrowRight'
//         break
//       case 'ArrowLeft':
//         keys.ArrowLeft.pressed = true
//         enemy.lastKey = 'ArrowLeft'
//         break
//       case 'ArrowUp':
//         if (enemy.velocity.y === 0) {
//           enemy.velocity.y = -15
//         }
