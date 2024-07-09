import axios from 'axios';

/**
 * Obtient les détails d'une recette par ID.
 * @param {string} id - L'ID de la recette.
 * @returns {Promise<Object>} - Une promesse qui résout un objet de recette détaillé.
 */
async function getRecipeDetails(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await axios.get(url);
  return response.data.meals[0];
}

export default getRecipeDetails;
