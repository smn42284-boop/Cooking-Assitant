// src/images/IngredientsList.jsx

function IngredientsList(props) {
    return (
        <section>
            <h1 className="heading">Ingredients on Hand: </h1>
            <ul>
                {props.each}
            </ul>
            {props.number > 3 && (
                <div className="recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button
                        onClick={props.show}
                        className="recipe-btn"
                        type="submit"
                        disabled={props.isLoading}
                    >
                        {props.isLoading ? '⏳ Generating...' : 'Get a recipe 🍳'}
                    </button>
                </div>
            )}
        </section>
    );
}

export default IngredientsList;