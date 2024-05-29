import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";


export default function Albums() {
    const [albums, setAlbums] = useState<any[]>()

    function getAlbums() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response => setAlbums(response.data))
    }

    useQuery({
        queryKey: ["album"],
        queryFn: getAlbums
    })
    return (
        <div>{albums?.map(album =>
            <div key={album.id} className="text-lg md:text-xl lg:text-2xl flex flex-col justify-center items-center m-5 border-double border-black border-4 w-[15%] h-[5%]">
                <p> User ID: {album.userId} </p>
                <p>ID: {album.id} </p>
                <p> Title: {album.title} </p>
            </div>)}
        </div>
    )
}
