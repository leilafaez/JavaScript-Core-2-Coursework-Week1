/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

// write code here
const Recipe ={
  title : "fish",
  serves : 4,
  ingredients : ["fish","rice"],
};

  console.log(`${Recipe.title}\n Serves :${Recipe.serves}\n Ingredients:\n${(Recipe.ingredients).join("\t\n")}`);
