export async function getRecipeFromOllama(ingredients) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama3.1:8b',
                prompt: `Create a delicious recipe using these ingredients: ${ingredients.join(', ')}.
                Format your response with:
                - A catchy recipe title
                - List of ingredients with measurements
                - Step-by-step instructions`,
                stream: false,
                temperature: 0.8,
                max_tokens: 600,
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama error: ${response.status}`);
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error getting recipe from Ollama:', error);
        throw error;
    }
}

export async function getRecipe(ingredients) {

    return await getRecipeFromOllama(ingredients);
    
}