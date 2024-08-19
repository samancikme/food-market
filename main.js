import 'boxicons'
import './style.css'
import Product from './src/components/Products'
import Header from './src/components/Header.js'
import Basket from './src/components/Basket.js'
import loading from './src/components/Loading.js'



const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

localStorage.setItem("basket" , JSON.stringify([]))






const header = document.querySelector("header"),
productCard = document.querySelector(".products")




let mealsData = []

function loader() {
    productCard.classList = "gap-3 text-white container backdrop-blur-[10px] bg-[#ffffff21] p-5 rounded-xl h-[calc(100vh-120px)] overflow-y-scroll flex justify-center items-center"
    productCard.innerHTML = loading() 
}


async function getAllMeal(url) {
    try{
        loader()
        const res = await fetch(url) 
        if(!res.ok){
            throw new Error('Error : ' + res.status)
        }
        const data = await res.json()
        Product(data.meals)
        mealsData = [...data.meals]
        loadProducts(data.meals)
    }catch(err){
        console.log(err)
    }
}

getAllMeal(url)
headerCont()




function success() {
    const alert = document.querySelector(".alert")
    alert.classList.remove("hidden")
        alert.classList.add("flex")
        setTimeout(() => {
            alert.classList.remove("flex")
            alert.classList.add("hidden")
        }, 1500)
}

function loadProducts(meals) {
    productCard.innerHTML= ""
    productCard.classList= "products"
    meals.forEach(item => {
        productCard.innerHTML += Product(item)
    })
    
    const addBasketBtn = document.querySelectorAll(".btn-solid")
    
    addBasketBtn.forEach(btn  => {
        if(btn.innerHTML === "Go to basket"){
            console.log(btn)
        }
        btn.addEventListener("click" , () => {
            counter()
            const basket = JSON.parse(localStorage.getItem("basket")) || []
            const newBasketItem = meals.find(item => item.idMeal === btn.dataset.mealid)
            if(!basket.find(item => item.idMeal === btn.dataset.mealid)){
                const basketData = [...basket , newBasketItem]
                localStorage.setItem("basket" , JSON.stringify(basketData))
                counter()
                success()
                loadProducts
                basketData?.forEach(item => {
                    if(item.idMeal == btn.dataset.mealid){
                        btn.classList.add("basket-act")
                        btn.innerHTML = `
                        <box-icon type='solid' name='cart'></box-icon>
            
                        <span>Go to basket</span>
                        `
                    }
                })
            }else{
                loadBasketProducts(JSON.parse(localStorage.getItem("basket")))
                basketBtn.classList.add("active")
                productBtn.classList.remove("active")
            }
            
        })
        

        JSON.parse(localStorage.getItem("basket"))?.forEach(item => {
            
            if(item.idMeal == btn.dataset.mealid){
                btn.classList.add("basket-act")
                btn.innerHTML = 
                `
                <box-icon type='solid' name='cart'></box-icon>
    
                <span>Go to basket</span>
                `
            }
        })
    }) 
}





function loadBasketProducts(meals) {
    productCard.innerHTML= ""
    if(meals.length > 0){
        productCard.classList = "products"
        meals.forEach(item => {
            productCard.innerHTML += Basket(item)
        })
    }else{
        productCard.classList = "gap-3 text-white container backdrop-blur-[10px] bg-[#ffffff21] p-5 rounded-xl h-[calc(100vh-120px)] overflow-y-scroll flex justify-center items-center"
        productCard.innerHTML = 
        `
        <div class=" flex justify-center items-center font-bold text-[24px]">
        <span>🥲Basket is empty</span>
        </div>
        `
    }
    
    const deleteBtn = document.querySelectorAll(".delete-basket-btn")
    deleteBtn.forEach(btn => {
        btn.addEventListener("click" , () => {
            const btnId = btn.dataset.mealid
            const basketData = JSON.parse(localStorage.getItem("basket") || [])
            if(basketData.length > 0){
                localStorage.setItem("basket" , JSON.stringify(basketData.filter(item => item.idMeal !== btnId)))
            }
            loadBasketProducts(JSON.parse(localStorage.getItem("basket")))
            counter()
        })
    })
    
}



function counter(){
    const count = document.querySelector(".count")
    count.textContent = JSON.parse(localStorage.getItem("basket")).length 
}
counter()



function headerCont() {
    header.innerHTML = Header()


    const productBtn = document.querySelector("#product-btn"),
    basketBtn = document.querySelector("#basket-btn"),
    form = document.querySelector("#search-form")

    
    

    

    productBtn.addEventListener("click" , () => {
        loadProducts(mealsData)
        productBtn.classList.add("active")
        basketBtn.classList.remove("active")
    })


    basketBtn.addEventListener("click" , () => {
        loadBasketProducts(JSON.parse(localStorage.getItem("basket")) || [])
        basketBtn.classList.add("active")
        productBtn.classList.remove("active")
    })



    form.addEventListener("submit" , (e) => {
        e.preventDefault()
        const value = form["input"].value.trim()
        form.reset()
        getAllMeal(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
    })
}





const productBtn = document.querySelector("#product-btn"),
      basketBtn = document.querySelector("#basket-btn") //!important


      // ScrollReveal kutubxonasi sozlamalari


    