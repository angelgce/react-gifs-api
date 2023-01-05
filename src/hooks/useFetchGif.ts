import { useEffect, useState } from 'react'
import { requestGifsAPI } from "../helpers/getGifs";

export const useFetchGif = (value: string) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await requestGifsAPI(value);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images,
        isLoading
    }

}
