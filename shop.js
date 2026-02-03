let carts = document.getElementsByClassName("cart");
let carttotal = document.getElementById("carttotal");

let count = 0;
    
for(let i=0;i<carts.length;i++){


    carts[i].addEventListener("click",(e)=>{

        count ++;
        carttotal.textContent=count;
        let parent = e.target.parentElement;

        let name = parent.querySelector(".name").innerText;
        let price = +parent.querySelector(".price").innerText.replace(/\D/g,"");
        let price = Number(pricetext.replace("Rs : ", ""));
        let img = parent.querySelector(".img").src;
        
        
        let allpics = localStorage.getItem("allpic");
        allpics = allpics ? JSON.parse(allpics) : [];
    
        allpics.push({ 
                    name,
                    price,
                    img
                    
         });

        
        console.log(name,price);
    
        localStorage.setItem("allpic",JSON.stringify(allpics));
        calculateTotal()
        let product = document.getElementById("product");

       
        
          product.innerHTML += `
            <div class="billing">
               <p class="billn">${name}</p>
               <p class="billp">${price}</p>
               <img class="billi" src="${img}">
               <ion-icon  name="trash-outline"></ion-icon>
            </div>
          `;

        
        
    });
}

let carttop = document.getElementById("carttop");
let totalbill = document.getElementById("totalbill");
let closebtn = document.querySelector(".close");

console.log(carttop,totalbill,closebtn);


carttop.addEventListener("click",()=>{
      totalbill.classList.add("opentotalbill");
      

});
closebtn.addEventListener("click",()=>{
    
    
    totalbill.classList.remove("opentotalbill");

});

function calculateTotal() {
    let allProducts = JSON.parse(localStorage.getItem("allpic")) || [];
    let total = 0;

    allProducts.forEach(item => {
        total += Number(item.price);
    });

    document.getElementById("totalamount").textContent = total;
}

calculateTotal()
