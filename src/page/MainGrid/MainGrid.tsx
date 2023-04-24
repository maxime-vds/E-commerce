import MainGridItem from "./MainGridItem";
import { useEffect, useState } from "react";


const MainGrid = () => {

const [data, setData] = useState<any>()

// fetch mock pics here with a hook

useEffect(() => {
    const fetchData = async () => {
        fetch('http://localhost:3000/posts')
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
    }
    fetchData()
},[])

    console.log(data);
    


    return (  
        <div className="grid relative gap-x-3 m-2 gap-y-10 grid-cols-2"> 
        {data && data.map((item:any) => <MainGridItem key={item.id} image={item.image}/>)}
        </div>
    );
}
 
export default MainGrid;