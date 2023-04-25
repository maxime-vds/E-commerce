import MainGridItem from "./MainGridItem";
import { useFetch } from "../../hooks/useFetch";

const MainGrid = () => {
    const {fetchData, data} = useFetch('http://localhost:3000/posts')
    fetchData()

    return (  
        <div className="grid relative gap-x-3 m-2 gap-y-10 grid-cols-2"> 
        {data && data.map((item:any) => <MainGridItem key={item.id} image={item.image}/>)}
        </div>
    );
}
 
export default MainGrid;