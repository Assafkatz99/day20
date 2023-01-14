
let list_place = document.getElementById("list_placeHolder")
let button = document.getElementById("submit")
let input_text = document.getElementById("text")

let list = []

button.addEventListener ("click",() => {
if (input_text.value !== ""){
    let new_li = document.createElement("li")
    new_li.innerHTML = input_text.value
    new_li.classList.add("todoBrick")

    new_li.addEventListener("click", () => {
        list_place.removeChild(new_li)
        let i = list.indexOf(new_li.innerHTML)
        list.splice(i,1)
        localStorage.setItem("list_li", JSON.stringify(list));

    })

    list_place.appendChild(new_li)

    list.push(input_text.value)
    localStorage.setItem("list_li", JSON.stringify(list));


    input_text.value=""

}
})

for (item of JSON.parse(localStorage.getItem("list_li"))){
console.log(item)
let new_li = document.createElement("li")
new_li.innerHTML = item
new_li.classList.add("todoBrick")
list_place.appendChild(new_li)

new_li.addEventListener("click", () => {
    list_place.removeChild(new_li)
    console.log(new_li.innerHTML)
    let i = list.indexOf(new_li.innerHTML)
    list = JSON.parse(localStorage.getItem("list_li"))
    list.splice(i,1)

    localStorage.setItem("list_li", JSON.stringify(list));

})

}

