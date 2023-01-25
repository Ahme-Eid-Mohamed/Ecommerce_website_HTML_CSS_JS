let bar = document.getElementById("bar");
let navbar = document.getElementsByClassName("navbar")[0];
let close = document.getElementById("close");
console.log(navbar)
bar.addEventListener('click', ()=>
{
    navbar.style.right = 0;

})

close.addEventListener('click', _ => {
    navbar.style.right = -300;
    
})



// // Product
let products1 = document.querySelectorAll(".pro")
 let proImg = document.querySelectorAll(".pro img");



for(let i=0;i<products1.length;i++)
{
    let btnCart = document.createElement("button");
    let btnText = document.createTextNode("Add Cart");
    btnCart.appendChild(btnText);
    products1[i].appendChild(btnCart);
    btnCart.style.padding = "10px 20px";
    btnCart.style.background = "#088178";
    btnCart.style.color = "#fff";
    btnCart.style.cursor = "pointer";
    btnCart.style.borderRadius = "4px";
    btnCart.style.fontSize = "16px"
    proImg[i].onclick = function () 
{
    document.location.href = "sproduct.html"
}
btnCart.onclick = function ()
{
    document.location.href = "cart.html"
}
  
}


let pr = 

{
    "pro":[
        {
          
            "img": "https://i5.walmartimages.com/asr/14edf908-e081-44aa-864e-6a4880a03223_1.85a14a1068bbc018ede81cb9fb9968f9.jpeg"

        },
        {
           
        "img": "https://i5.walmartimages.com/asr/4fed76e6-70ab-4d2b-b706-62b1496b0fb3.b7939b7b94a13bfd19d8ad3268199899.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
          
        "img": "https://i5.walmartimages.com/asr/f9c7c15e-58ac-4386-959c-28c3bf78a8dd_1.d86c46c56c241c0e7d27754382283aa2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
            "img":"https://i5.walmartimages.com/asr/079451b3-3091-41ec-8bb7-f57de08b5ee6.d0a759608e345314d38d045685dec674.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" 
        },

        {
          
            "img": "https://i5.walmartimages.com/asr/ad019ce6-fd4b-4d04-91dc-7119bdd372f6.9f52c8d0a0f443fdd2c090347c68bd7e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
           
        "img": "https://i5.walmartimages.com/asr/4f6793fb-3184-48aa-8481-a24f81ef0386_1.a919179fa986daddaae79d82f1006c7d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
          
        "img": "https://i5.walmartimages.com/asr/e39cf782-329e-4e5b-8760-ee308b106b54.39756a39871433310cd39f12380ceb0c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
            "img":"https://i5.walmartimages.com/asr/5a6a5158-1d05-4a44-becf-ba8cb24024c8.c7c211aeee5512b787bb04d655417bab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" 
        },

        {
          
            "img": "https://i5.walmartimages.com/asr/6f2640eb-d0cf-461b-9119-406234a29cf5.ac4152065e2c6dbd921e7a429e4b4ba8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
           
        "img": "https://i5.walmartimages.com/asr/b48aa237-80b1-4654-9d99-eda7950c2657.9f01329a9ed33e355cc926289532afe8.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
          
        "img": "https://i5.walmartimages.com/asr/3667cbb0-12da-4202-a68b-6ca7e07a60c7.54b61a5ce7633a6f74790c2c01f1ab5d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
            "img":"https://i5.walmartimages.com/asr/5eb9a4aa-45d7-4f60-a264-201aa18d8239_1.b493f2b7228f8433b541c35b115b4f91.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" 
        },
        {
          
            "img": "https://i5.walmartimages.com/asr/534c0f05-1db4-41fb-a571-148b787930ea.b7ab4b2a465d983999d5a11daa26e9dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
           
        "img": "https://i5.walmartimages.com/asr/bab3e22c-797e-41b2-ba22-7c7595f32a78.8114136539d6ee9fb3d567fe98fcd7c2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
          
        "img": "https://i5.walmartimages.com/asr/c4075eac-5787-454d-9afd-a4b1ff2f3a3f.7cd0cb628318c39474a2f647504a039e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"

        },
        {
            "img":"https://i5.walmartimages.com/asr/ca17097d-78b9-48a8-9041-8bb259095460.8f11d37eb2dae082584ef57c60f987ca.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" 
        },
        
        
    ]
}
 let productsImg = document.querySelectorAll(".pro img")
 console.log(productsImg)


 let pag = document.querySelectorAll("#pagination a")



 pag[1].onclick = function ()
 {
    for(let i=0;i<productsImg.length;i++)
    {
        productsImg[i].setAttribute("src", pr.pro[i].img)
       
    }
     
 }
 


