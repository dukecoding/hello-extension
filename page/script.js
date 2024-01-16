// Customize your greetings from Sunday to Saturday
const greetingsList = [
  'greeting_sun',
  'greeting_mon',
  'greeting_tue',
  'greeting_wed',
  'greeting_thu',
  'greeting_fri',
  'greeting_sat',
]

const today = new Date()
const dayOfTheWeek = today.getDay()
const year = String(today.getFullYear())
let month = String(today.getMonth() + 1)
if (month.length < 2) {
  month = `0${month}`
}
const day = String(today.getDate())
const fullDate = `${day}-${month}-${year}`

// Greeting taken from greetingsList
const headingText = greetingsList[dayOfTheWeek]

document.querySelector('h1').innerHTML = `Hey you 👋 ${headingText}`
document.querySelector('img').src = `../images/${dayOfTheWeek}.jpeg`
document.querySelector('#date').innerHTML = `📅 Today is ${fullDate}`

// Cursor picture following the mouse
document.addEventListener('mousemove', (e) => {
  const mouse = document.querySelector('#mouse')
  if (e.clientY < 100) {
    mouse.style.left = '0px'
    mouse.style.top = '-10px'
  } else if (e.clientY < 400) {
    mouse.style.left = e.clientX + 5 + 'px'
    mouse.style.top = e.clientY - 100 + 'px'
  } else if (e.clientY >= 400) {
    mouse.style.left = e.clientX - 100 + 'px'
    mouse.style.top = e.clientY - 40 + 'px'
  }
  mouse.style.transition = '0.4s'
})
