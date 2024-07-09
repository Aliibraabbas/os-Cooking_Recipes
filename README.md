# A3 OS Cooking Recipes

A3 OS Cooking Recipes is an open-source library that provides easy access to a vast collection of cooking recipes through TheMealDB API. This library allows users to search for recipes by keyword, retrieve detailed information about specific recipes, and list all available recipe categories.

## Features

- **Search Recipes**: Find recipes based on keywords.
- **Recipe Details**: Get detailed information about a specific recipe, including ingredients and preparation steps.
- **List Categories**: Retrieve a list of all available recipe categories.

## Installation

To install the library, use the following command:

```
npm install a3_os_cooking_recipes
```
# Cloning and Setting Up the Project Locally
To clone and set up the project locally, use the following commands:
```
git clone https://github.com/Aliibraabbas/os-Cooking_Recipes.git
cd os-Cooking_Recipes
npm install
```
## Usage
Here's how you can use the library in your project:

## Search Recipes
First, import searchRecipes into your project:
```
import { searchRecipes} from './src/api/index.js';
```
Then, use the searchRecipes function:
```
searchRecipes('chicken')
  .then(recipes => {
    console.log('Recettes trouvées :', recipes);
  })
  .catch(error => console.error('Erreur lors de la recherche de recettes :', error));
  ```

  ## Get Recipe Details
  First, import getRecipeDetails into your project:
  ```
  import { getRecipeDetails } from './src/api/index.js';
  ```
  Then, use the getRecipeDetails function:
```
getRecipeDetails('52772')
.then(recipe => {
  console.log('Détails de la recette :', recipe);
})
.catch(error => console.error('Erreur lors de l\'obtention des détails de la recette :', error));

  ```
## List Categories
First, import listCategories into your project:
```
import { listCategories } from './src/api/index.js';
```
Then, use the listCategories function:
```
listCategories()
  .then(categories => {
    console.log('Catégories de recettes :', categories);
  })
  .catch(error => console.error('Erreur lors de la liste des catégories :', error));

  ```

  ## Running Tests
  To run the tests, use the following command:
  ```
  npm test
  ```

  ### To run the project, execute:
  ```
  node index.js
  ```

  ## Continuous Integration
  This project uses GitHub Actions for Continuous Integration. Every push and pull request triggers the CI workflow, which includes running tests and ensuring code quality.

  ## Versioning
  This project follows Semantic Versioning (SEMVER)

  ## Contributing
  Contributions are welcome! Please open an issue or submit a pull request on GitHub.

  ## License
  This project is licensed under the MIT License - see the <a href="https://github.com/Aliibraabbas/os-Cooking_Recipes/blob/main/LICENSE">LICENSE </a> file for details.




