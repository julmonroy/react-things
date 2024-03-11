
function Recipe({ id, name, ingredients }) {
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {ingredients.map(ingredient =>
            <li key={id}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
    );
  }

  export default Recipe;