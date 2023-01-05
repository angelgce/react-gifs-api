import { useState, useEffect } from "react";
import { useFetchGif } from "../hooks/useFetchGif";

export const Categories = ({ value }: { value: string }) => {
    const { images, isLoading } = useFetchGif(value);

    return (<>
        <div className='p-2 mb-10 container mx-auto text-center border border-dashed rounded-lg border-zinc-300 
            bg-neutral-300 bg-opacity-10'>
            <div className="flex justify-center">
                <div className="text-2xl drop-shadow-sm uppercase p-2 m-3">
                    {isLoading ? ('Loading images ...') : value}
                </div>
            </div>
            <div className="flex justify-center p-2 mb-10 flex-wrap">

                {images.map(({ url, title, id }: { url: string, title: string, id: string }) =>
                    <div className="border rounded w-80 h-48 mx-2 mt-10 bg-red-400" key={id}>
                        <img className="border border-stone-500 rounded drop-shadow-xl object-fit h-full w-full hover:opacity-25" src={url} />
                        <div className="bg-gray-100 rounded-b-lg border border-stone-500 drop-shadow-xl">
                            <span className="uppercase drop-shadow-sm hover:text-blue-800 text-sm opacity-75">{title}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    )
}
