export default function Recipe(props) {
    return (
        props.length > 3 && <section>
            <h3>Ready for a recipe?</h3>
            <button onClick={props.recipeShownFun}>Get a recipe</button>
            <div>
                {props.recipeShown &&
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
                        with your crushed crispy noodles.
                        To make classic Veg Manchow Soup, start by tossing boiled noodles in cornstarch and
                        deep-frying them until golden and crispy to use as your crunchy topping. Next, heat
                        a wok or deep pan on high heat with a tablespoon of oil and rapidly stir-fry finely
                        chopped ginger, garlic, and green chilies for 30 seconds before tossing in finely chopped
                        cabbage, carrots, bell peppers, and French beans for a quick one-minute flash cook. Pour in
                        three cups of vegetable stock along with dark soy sauce, red chili sauce, and black pepper,
                        bringing the liquid to a rolling boil for a couple of minutes to let the flavors meld. Finally,
                        continuously stir in a cornstarch slurry (two tablespoons of cornstarch mixed with three
                        tablespoons of water) to thicken the broth into a glossy soup, turn off the heat to stir in a
                        teaspoon of vinegar and fresh spring onion greens, and serve immediately in bowls topped generously
                        with your crushed crispy noodles.
                        To make classic Veg Manchow Soup, start by tossing boiled noodles in cornstarch and
                        deep-frying them until golden and crispy to use as your crunchy topping. Next, heat
                        a wok or deep pan on high heat with a tablespoon of oil and rapidly stir-fry finely
                        chopped ginger, garlic, and green chilies for 30 seconds before tossing in finely chopped
                        cabbage, carrots, bell peppers, and French beans for a quick one-minute flash cook. Pour in
                        three cups of vegetable stock along with dark soy sauce, red chili sauce, and black pepper,
                        bringing the liquid to a rolling boil for a couple of minutes to let the flavors meld. Finally,
                        continuously stir in a cornstarch slurry (two tablespoons of cornstarch mixed with three
                        tablespoons of water) to thicken the broth into a glossy soup, turn off the heat to stir in a
                        teaspoon of vinegar and fresh spring onion greens, and serve immediately in bowls topped generously
                        with your crushed crispy noodles.
                        </p>
                        
                }</div>
        </section>
    )
}
