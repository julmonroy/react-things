import Recipe from './Recipe.jsx';
import { recipes } from './data.js';
export default function RecipeList() {
    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map(recipe =>
          <Recipe {...recipe} key={recipe.id} />
        )}
      </div>
    );
  }