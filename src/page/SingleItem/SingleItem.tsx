import { useParams } from "react-router-dom"

type SingleItemProps = {
    data: [ {
        id: number
        image: string
    }]
    setQuery: React.Dispatch<React.SetStateAction<string>>
    setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SingleItem = ({data, setQuery, setSelectModal}:SingleItemProps) => {
const {id = 0}:any = useParams()
return (
<div className="SingleItem"
onClick={() => setSelectModal(true)}>
    <h2>SingleItem</h2>
        <img src={data[id-1].image}></img>
</div>
 
);
}