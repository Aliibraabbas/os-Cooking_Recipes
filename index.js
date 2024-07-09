import { searchRecipes } from './src/api/index.js';

// Tester la recherche de recettes
searchRecipes('chicken')
  .then(recipes => {
    console.log('Recettes trouvées :', recipes);
  })
  .catch(error => console.error('Erreur lors de la recherche de recettes :', error));
