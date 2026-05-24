import React from 'react'
import Recipe from './Recipe';
import IngredientList from './IngredientList';

export function Form() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const recipeSection = React.useRef(null)
    // const [isShown, setIsShown]=React.useState(false)
    // function clickButton(){
    //     setIsShown(prevIsShown => !prevIsShown)
    // }
    // btn = getElementById("button")
    // btn.addEventListener("click", () => {
    //     item = getElementById("input-ele").value
    //     ingredients.push(item)
    // })
    // const btn=document.getElementById("bttn")
    function handleSubmit(formData) {
        // event.preventDefault()
        // const formData= new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        { newIngredient && setIngredients(prevIngredients => [...prevIngredients, newIngredient]) }
        // event.currentTarget.reset()
    }

    React.useEffect(()=>{
        if (ingredients.length !== 0 && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    },[ingredients])

    function recipeShownFun() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
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
                {ingredients.length ?
                    <IngredientList ref={recipeSection} ingredients={ingredients} />
                    : <h3>Please add your ingredients inside the input box</h3>}
                <Recipe
                    recipeShownFun={recipeShownFun}
                    recipeShown={recipeShown}
                    length={ingredients.length}
                />
            </form>
        </>
    );
}