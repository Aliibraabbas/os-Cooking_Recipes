import axios from 'axios';

/**
 * Recherche des recettes par mot-clé.
 * @param {string} keyword - Le mot-clé pour rechercher des recettes.
 * @returns {Promise<Array>} - Une promesse qui résout une liste de recettes.
 */
async function searchRecipes(keyword) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
  const response = await axios.get(url);
  return response.data.meals;
}

export default searchRecipes;
