const Basket = (item) => {
     return `
    <div class="card group h-auto">
        <div class="w-[100%] flex flex-col gap-1 rounded-lg overflow-hidden">
        <img class="object-contain w-full group-hover:scale-110  duration-300" src=${item.strMealThumb} alt="">
            <div class="text-[20px] font-bold mt-4">
            ${item.strMeal}
            </div>
        </div>
        <div class="flex justify-end items-center mt-3">
            <button data-mealid=${item.idMeal} class="btn-solid delete-basket-btn">

            <box-icon type='solid' name='cart'></box-icon>

            <span>Delete Meal</span>

            </button>
        </div>
    </div>
     `
     
 }
 
 
 export default Basket