fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then(res => res.json())
.then(foods => getFoods(foods.meals))

const searchFood = ()=>{
    const getText = document.getElementById('search-text');
    const getTextValue = getText.value;
    const menuTitle = document.getElementById('menuTitle');
    menuTitle.innerText =`Showing result for: ${getTextValue}`;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${getTextValue}`)
    .then(res => res.json())
    .then(foods => getFoods(foods.meals))
    getText.value = ''
}

const getFoods = foods => {
    const menuContainer = document.getElementById('MenuContainer');
    menuContainer.innerHTML =''
    const Warning = document.getElementById('Warning');
    for(const food of foods){
        const div = document.createElement('div');
            div.classList.add("foodDiv");
            div.innerHTML = `
            <img src="${food.strMealThumb}" alt="User-image">
            <div class="foodInformation">
                <h3>${food.strMeal}</h3>
                <p>${food.strInstructions.slice(0,100)}</p>
                <button class='order-now'>Order Now <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            `
            menuContainer.appendChild(div)
    }
}


