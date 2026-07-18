const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/recipe', async (req, res) => {
    try {
        const {ingredients} = req.body;

        const recipe = `📝 Recipe using: ${ingredients.join(', ')}
        
This is a sample recipe. Replace this with actual AI-generated recipe from Hugging Face or Ollama.

Ingredients:
- ${ingredients.map(ing => `1 cup ${ing}`).join('\n- ')}

Instructions:
1. Prepare all ingredients
2. Mix together
3. Cook until done
4. Enjoy! 🍽️`;

        res.json({recipe});
    } catch (error) {
        console.error('Error generating recipe:', error);
        res.status(500).json({error: 'Failed to generate recipe'});
    }
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});