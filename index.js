let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveCurrentMsg = saveEl.textContent

console.log("current save text::" + saveCurrentMsg)



let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

function save() {
  countStr = count + " - "
  saveEl.textContent += countStr
  console.log(saveEl.textContent)
  count = 0
  countEl.textContent = count
}
