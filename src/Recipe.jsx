function Recipe({recipe, isLoading}) {
    if (isLoading) {
        return (
            <div className="recipe-loading">
                <h2>👨‍🍳 Chef is cooking up your recipe...</h2>
                <p>⏳ Please wait...</p>
            </div>
        );
    }

    if (!recipe) {
        return null;
    }

    const formattedRecipe = recipe.split('\n').map((line, index) => {
        if (line.trim() === '') return null;
        if (line.includes(':')) {
            const [title, ...content] = line.split(':');
            return <h3 key={index}>{title}: {content.join(':')}</h3>;
        }
        return <p key={index}>{line}</p>;
    }).filter(Boolean);

    return (
        <div>
            <section>
                <h2>Chef Claude Recommends:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                    <div className="recipe-content">
                        {formattedRecipe}
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Recipe;