import { useParams } from "react-router-dom"

type SingleItemProps = {
    data: [ {
        id: number
        image: string
    }]
    setQuery: React.Dispatch<React.SetStateAction<string>>
    setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SingleItem = ({data, setSelectModal}:SingleItemProps) => {
    
const {id = 0}:any = useParams()
 return (
    <div className="SingleItem bg-slate-300">
<div className="item-wrapper h-[20rem] mt-9"
onClick={() => setSelectModal(true)}>
        <img src={data[id-1].image}></img>
</div>
<div className='item-description text-xs'>
            <p>item descriptions</p>
            <p>{data [id].caption}</p>
            <p>item descriptions</p>
            <p>prix : 100 eurodollars</p>
            <button className="bg-red-500"> Bouton</button>
             </div>

            
             
</div>
 )} 