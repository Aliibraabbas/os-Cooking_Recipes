import listCategories from '../src/api/listCategories.js';

test('Liste des catégories', async () => {
  const categories = await listCategories();
  expect(categories).toBeInstanceOf(Array);
  expect(categories.length).toBeGreaterThan(0);
});
