import { recipes } from './data.js';

export default function RecipeList() {


    return (
    <div>
      {recipes.map(recipe => 
        <div key = {recipe.id}>
      
    <h2>{recipe.name}</h2>

    <ul>
      {recipe.ingredients.map(ingridients => 
        <li key={ingridients}>{ingridients}</li>
      )}
    </ul>
    </div>
)}
  </div>
    );
}
  