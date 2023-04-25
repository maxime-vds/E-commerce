import MainGridItem from "./MainGridItem";

const MainGrid = ({data} : any) => {
    return (  
        <div className="grid relative gap-x-3 m-2 gap-y-10 grid-cols-2"> 
        {data && data.map((item:any) => <MainGridItem key={item.id} image={item.image}/>)}
        </div>
    );
}
 
export default MainGrid;