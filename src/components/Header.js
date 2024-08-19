const Header = () => {
    return `
    <div class="header">
        <div class="title">
            <h1 class="cursor-pointer">Meals</h1>
        </div>

        <form id="search-form" class="md:flex-[2] w-[100%] relative">
            <input id="input" required type="text" placeholder="Enter the meal...">

            <button type="submit" class="search">
              <box-icon name='search-alt'></box-icon>
            </button>

        </form>

          <nav class="flex-1">
            <ul>
              <li id="product-btn" class="active ">Product</li>
              <li id="basket-btn" class="relative">
              Basket
              <span class="count ">0</span>
              </li>
            </ul>
          </nav>
    </div>
    `
}


export default Header