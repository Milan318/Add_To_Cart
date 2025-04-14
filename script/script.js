let cartIcons = document.querySelectorAll('.card i');
let card = document.querySelectorAll('.card');
let data = [];
let navbarNav = document.getElementById('navbarNav');

cartIcons.forEach((btn,idx)=>{
    btn.addEventListener("click",()=>{
        let title = card[idx].querySelector(".card-title")
        let price = card[idx].querySelector(".price")
        let img = card[idx].querySelector(".card-img")
       
        let obj = {
            title : title.innerHTML,
            price : price.innerHTML,
            img : img.src,
            quantity : 1
        }

        data.push(obj)
        cardDisplay(idx);
        
    })
})

const cardDisplay = (idx)=>{
    navbarNav.innerHTML=""
    data.forEach((liData,idx)=>{
        let li=document.createElement("li");
        li.className="nav-item"
        li.innerHTML=
                     `
                      <div class="cart-item border d-flex border rounded mt-3">
                        <div class="cart-img my-auto">
                          <img src="${liData.img}" alt="">
                        </div>
                        <div class="cart-content w-100 d-flex justify-content-between p-3">
                          <div class="cart-name w-100">
                            <p class="mb-1">${liData.title}</p>
                            <p>${liData.price}</p>
                          </div>
                          <div class="cart-btn d-flex align-items-center btn-group">
                            <button class="minus btn btn-success p-1" onclick="addQuantity(-1,${idx})"><i class="bi bi-dash"></i></button>
                            <div class="cart-text p-1 text-white bg-success btn px-2" disabled>${liData.quantity}</div>
                            <button class="plus btn btn-success p-1" onclick="addQuantity(1,${idx})"><i class="bi bi-plus"></i></button>
                          </div>
                        </div>
                      </div> 
                     `
                     navbarNav.append(li)
    })

}

const addQuantity=((num,idx)=>{
    data[idx].quantity += num;
    if(data[idx].quantity<=0){
        data.splice(idx,1)
    }
    cardDisplay();
})



