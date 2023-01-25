let largeImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("smallImg");
console.log(largeImg);

for(let i=0; i<smallImg.length;i++)
{
     smallImg[i].onclick = function ()
{
     largeImg.src = smallImg[i].src 
}
}

