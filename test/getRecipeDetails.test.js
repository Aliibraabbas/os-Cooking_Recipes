import getRecipeDetails from '../src/api/getRecipeDetails.js';

test('Détails de la recette avec ID 52772', async () => {
  const recipe = await getRecipeDetails('52772');
  expect(recipe).toHaveProperty('idMeal', '52772');
});