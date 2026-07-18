import {useState} from "react";
import IngredientsList from "../images/IngredientsList.jsx";
import {getRecipe} from "../services/recipeService.js"; // Updated import
import Recipe from "../Recipe.jsx";

function Main() {
    const [ingredient, setIngredient] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipes, setRecipes] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const eachIngredients = ingredient.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));
    const number = ingredient.length;

    async function handleClick() {
        if (ingredient.length === 0) return;

        setIsLoading(true);
        try {
            const result = await getRecipe(ingredient);
            setRecipes(result);
            setRecipeShown(true);
        } catch (error) {
            console.error('Failed to get recipe:', error);
            setRecipes("Failed to generate recipe. Please try again.");
            setRecipeShown(true);
        } finally {
            setIsLoading(false);
        }
    }

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        if (newIngredient && newIngredient.trim()) {
            setIngredient(prevIngredient => [...prevIngredient, newIngredient.trim()]);
        }
        formData.set("ingredient", "");
    }

    return (
        <main className="main">
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    aria-label="Add Ingredient!"
                    type="text"
                    name="ingredient"
                    placeholder="Eg: Eggs"
                />
                <button type="submit">
                    Add Ingredient
                </button>
            </form>

            {ingredient.length > 0 && (
                <IngredientsList
                    each={eachIngredients}
                    number={number}
                    show={handleClick}
                    isLoading={isLoading}
                />
            )}

            {recipeShown && (
                <Recipe recipe={recipes} isLoading={isLoading}/>
            )}
        </main>
    );
}

export default Main;