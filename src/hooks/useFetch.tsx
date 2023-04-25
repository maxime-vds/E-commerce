import { useEffect, useState } from "react";

export const useFetch = (url:string) => {
    const [data, setData] = useState<any>()
    const fetchData = async () => {

useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.error) {
                console.log(data.error);
            }
            else {
                console.log('succes!');
                setData(data)
            }
        })
},[])
}

return {fetchData, data}

}

