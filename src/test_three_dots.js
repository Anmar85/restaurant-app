const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = {"a": 1, "b":2}

const pizzas = [...featured, 'veg pizza', ...specialty];

console.log(pizzas); // 'Deep Dish', 'Pepperoni', 'Hawaiian', 'veg pizza', 'Meatzza', 'Spicy Mama', 'Margherita'
