const Product = (item) => {
    return `
    <div class="card group">
        <div class="w-[100%] flex flex-col gap-1 rounded-lg overflow-hidden ">
        <img class="object-contain w-full group-hover:scale-110  duration-300" src=${item.strMealThumb} alt="">
              <div class="text-[20px] font-bold mt-4">${item.strMeal}</div>
        </div>
        <div class="flex justify-end items-center">
            <button data-mealid=${item.idMeal} class="btn-solid">

            <box-icon type='solid' name='cart'></box-icon>

            <span >Add to basket</span>

            </button>
        </div>
    </div>
    `
}


export default Product