import { searchRecipes, getRecipeDetails } from './src/api/index.js';

// Tester la recherche de recettes
searchRecipes('chicken')
  .then(recipes => {
    console.log('Recettes trouvées :', recipes);
  })
  .catch(error => console.error('Erreur lors de la recherche de recettes :', error));

  // Tester l'obtention des détails d'une recette
getRecipeDetails('52772')
.then(recipe => {
  console.log('Détails de la recette :', recipe);
})
.catch(error => console.error('Erreur lors de l\'obtention des détails de la recette :', error));


