export default function IngredientList(props) {
    const ingredientsList = props.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
    return (
        <div>
            <h1>Ingredient in hand:</h1>
            <ul>
                {ingredientsList}
            </ul>
        </div>
    )
}