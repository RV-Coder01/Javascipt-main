import React from 'react'

export function Form() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    // const [isShown, setIsShown]=React.useState(false)
    // function clickButton(){
    //     setIsShown(prevIsShown => !prevIsShown)
    // }
    // btn = getElementById("button")
    // btn.addEventListener("click", () => {
    //     item = getElementById("input-ele").value
    //     ingredients.push(item)
    // })
    const ingredientsList = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
    // const btn=document.getElementById("bttn")
    function handleSubmit(formData) {
        // event.preventDefault()
        // const formData= new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        { newIngredient && setIngredients(prevIngredients => [...prevIngredients, newIngredient]) }
        // event.currentTarget.reset()
    }

        function recipeShownFun(){
            setRecipeShown( prevRecipeShown => !prevRecipeShown)
        }

    return (
        <>
            <form action={handleSubmit}>
                {/* <button onClick={clickButton}>{isShown ? "Yes" : "No"}</button> */}
                <br />
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    id="input-ele"

                    name="ingredient"
                />
                <button type="submit" id="bttn">+Add ingredients</button>
                {ingredients.length ? <div>
                    <h1>Ingredient in hand:</h1>
                    {/* {isShown && <p>Yes, you have the ingredients</p>} */}
                    <ul>
                        {ingredientsList}
                    </ul>
                </div> : <h3>Please add your ingredients inside the input box</h3>}
                {ingredients.length > 3 &&
                    <section>
                        <h3>Ready for a recipe?</h3>
                        <button onClick={recipeShownFun}>Get a recipe</button>
                    </section>
                }
                { recipeShown &&
                <div>
                    <p>To make classic Veg Manchow Soup, start by tossing boiled noodles in cornstarch and 
                        deep-frying them until golden and crispy to use as your crunchy topping. Next, heat 
                        a wok or deep pan on high heat with a tablespoon of oil and rapidly stir-fry finely 
                        chopped ginger, garlic, and green chilies for 30 seconds before tossing in finely chopped 
                        cabbage, carrots, bell peppers, and French beans for a quick one-minute flash cook. Pour in 
                        three cups of vegetable stock along with dark soy sauce, red chili sauce, and black pepper, 
                        bringing the liquid to a rolling boil for a couple of minutes to let the flavors meld. Finally, 
                        continuously stir in a cornstarch slurry (two tablespoons of cornstarch mixed with three 
                        tablespoons of water) to thicken the broth into a glossy soup, turn off the heat to stir in a 
                        teaspoon of vinegar and fresh spring onion greens, and serve immediately in bowls topped generously
                         with your crushed crispy noodles.</p>
                </div>
}
            </form>
        </>
    );
}