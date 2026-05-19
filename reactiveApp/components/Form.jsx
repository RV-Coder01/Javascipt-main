import React from 'react'

export function Form() {
    const [ingredients,setIngredients] = React.useState(["chicken","oregano","salt"])
    // btn = getElementById("button")
    // btn.addEventListener("click", () => {
    //     item = getElementById("input-ele").value
    //     ingredients.push(item)
    // })
    const ingredientsList = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
    const btn=document.getElementById("bttn")
    function handleSubmit(event){
        event.preventDefault()
        const formData= new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients=> [...prevIngredients, newIngredient])
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    id="input-ele"
                    
                    name="ingredient" 
                />
                <button type="submit" id="bttn">+Add ingredients</button>
                <ul>
                    {ingredientsList}
                </ul>
            </form>
        </>
    );
}