
// Javascript Project 9a - The Recipe Card

var recipe = {
    title: "Mole",
    numberOfServings: 2, 
    ingredients: ["cinnamon", "cumin", "cocoa"]
};

document.write(`<h2>${recipe.title}</h2>`);
document.write(`<p>Serves: ${recipe.numberOfServings}</p>`);

document.write(`<p>Ingredients: </p><ul>`);
for (var i = 0; i < recipe.ingredients.length; i++){
    document.write(`<li>${recipe.ingredients[i]}</li>`);
}
document.write(`</ul>`);
