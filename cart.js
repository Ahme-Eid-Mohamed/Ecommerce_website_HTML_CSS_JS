let closeCart = document.querySelectorAll(".close")
let tBody = document.querySelectorAll("tr");

console.log(tBody)
console.log(closeCart[0])
closeCart[0].onclick = function()
{
    tBody[1].innerHTML = " "
}

closeCart[1].onclick = function()
{
    tBody[2].innerHTML = " "
}

closeCart[2].onclick = function()
{
    tBody[3].innerHTML = " "
}

