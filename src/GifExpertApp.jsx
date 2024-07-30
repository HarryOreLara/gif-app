import { useState } from "react"
import { GifGrid, AddCategory } from './components/index'


function GifExpertApp() {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <> 
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}

export default GifExpertApp
