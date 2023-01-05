import { useState } from "react"

export const SearchBar = ({ onAddCategory, onResetCategory }: { onAddCategory: (value: string) => void, onResetCategory: () => void }) => {

    const [inputValue, setinputValue] = useState('');

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setinputValue(target.value);
    }
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddCategory(inputValue.trim());
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="p-2 m-4 mx-2"> <input className="drop-shadow-sm px-3 w-96 rounded p-1 placeholder-gray-300" placeholder='Introduce the gift to shearch' onChange={onChange} /></div>
                    <div><button type="submit" className="drop-shadow-sm text-lg border rounded-md px-5 h-8 mt-6 -mx-2 bg-zinc-200 hover:bg-zinc-300">
                        <i className="fa fa-search"></i></button>
                        <button type="reset" className="drop-shadow-sm text-lg border rounded-md px-5 h-8 mt-6 mx-3 bg-zinc-200 hover:bg-zinc-300" onClick={onResetCategory}>
                            <i className="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </form>


    )
}
