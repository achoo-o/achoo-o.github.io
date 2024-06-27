const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')
const h4 = document.querySelectorAll('h4')
const line = document.createElement('div')
line.className = 'line'

window.onload = addLines();

function addLines() {
  addLineAfter(h2)
  addLineAfter(h3)
  addLineAfter(h4)
}

function addLineAfter (item){
  for (let i=0; i < item.length; i++) {
    item[i].insertAdjacentHTML("afterend",
      `<div class="line"></div>`);
  }
}