let restaurants = [{
        restaurantId: 1,
        name: 'Pizza',
        menu: 'all kind of pizza',
        open: 12,
        close: 22,
        isOpen: true
    },
    {
        restaurantId: 2,
        name: 'Indian Spicy',
        menu: 'Indian Spicy Indian Spicy Indian SpicyIndian Spicy',
        open: 17,
        close: 22,
        isOpen: false
    },
    {
        restaurantId: 3,
        name: 'Thai delicious.',
        menu: 'Thai delicious Thai delicious. Thai delicious. Thai delicious.',
        open: 17,
        close: 22,
        isOpen: false
    },

    {
        restaurantId: 4,
        name: 'Burger Meal',
        menu: 'Burger Meal Burger Meal Burger Meal Burger Meal',
        open: 12,
        close: 22,
        isOpen: true
    },

    {
        restaurantId: 5,
        name: 'Sushi',
        menu: 'Sushi Sushi Sushi Sushi ',
        open: 11,
        close: 22,
        isOpen: true
    },
    {
        restaurantId: 6,
        name: 'Hot spicy',
        menu: 'Hot spicy Hot spicy Hot spicy Hot spicy Hot spicy',
        open: 18,
        close: 22,
        isOpen: false
    }

];

console.log(restaurants);


// Implement with fuction 
function showStatus(restaurant) {
console.log('restaurant', restaurant);
    if (restaurant.isOpen) {
        document.getElementById('status-' + restaurant.restaurantId).innerHTML = `
        <span class="status-open"></span> Open
        `;
    } else {
        document.getElementById('status-' + restaurant.restaurantId).innerHTML = `
    <span class="status-closed"></span> Closed
        `;
    }
}

for(let i=0; i<restaurants.length; i++){
    showStatus(restaurants[i]);
}