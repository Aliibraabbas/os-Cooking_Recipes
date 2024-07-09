import searchRecipes from '../src/searchRecipes.js';

test('Recherche des recettes avec "chicken"', async () => {
  const recipes = await searchRecipes('chicken');
  expect(recipes).toBeInstanceOf(Array);
  expect(recipes.length).toBeGreaterThan(0);
});
