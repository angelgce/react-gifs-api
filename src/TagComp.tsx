import { useState } from "react";

const key = 'SknjzEtptdfOse6vahKr6aKPcLetymei';
export const TagComp = ({ name = 'naruto' }) => {
    const [category, setCategory] = useState('naruto')
    const endPoint: string = 'https://api.giphy.com/v1/gifs/random?api_key=' + key + '&tag=' + name + '&rating=g';
   
    const promes = async () => {
        const data = await fetch(endPoint, { method: "GET" });
        console.log(data)
        return data.json
    };
    
    return (
        <div>
            {/* <span>{data}</span> */}
            <img src={endPoint} alt="" />
        </div>
    )
}
