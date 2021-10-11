const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(ingredient => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    itemRef.classList = "item";
    return itemRef;  
});

const listRef = document.querySelector("#ingredients");

listRef.append(...ingredientsList);
