export const requestGifsAPI = async (value: string) => {
    const key: string = 'SknjzEtptdfOse6vahKr6aKPcLetymei';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${value}&limit=9`;
    const resp = await fetch(url);
    const { data } = await resp.json()
    const gifs = data.map((img: {
        id: string; title: string; images: { downsized_medium: { url: string; }; };
    }) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}
