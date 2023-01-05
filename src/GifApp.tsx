import { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { SearchBar, Tittle, Categories } from './components';

export const GifAPP = () => {
    const array: string[] = [];
    const [categories, setCategories] = useState(array)

    const onAddCategory = (value: string) => {
        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    }
    const onResetCategory = () => {
        setCategories([]);
    }

    return (
        <>
            <Tittle />
            <SearchBar onAddCategory={onAddCategory} onResetCategory={onResetCategory} />
            {categories.map(category =>
                <Categories value={category} key={category} />
            )}
        </>
    )
}
