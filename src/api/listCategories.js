import axios from 'axios';

/**
 * Liste toutes les catégories de recettes disponibles.
 * @returns {Promise<Array>} - Une promesse qui résout une liste de catégories.
 */
async function listCategories() {
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  const response = await axios.get(url);
  return response.data.categories;
}

export default listCategories;
