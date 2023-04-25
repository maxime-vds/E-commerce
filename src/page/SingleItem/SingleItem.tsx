type SingleItemProps = {
    data: [{image: string}]
    setQuery: React.Dispatch<React.SetStateAction<string>>
    setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SingleItem = ({data, setQuery, setSelectModal}:SingleItemProps) => {

return (
<div className="bg-slate-400 h-44 w-44"
onClick={() => setSelectModal(true)}>
    <h2>Singleitem</h2>
    {data && data.map((item) => (
        <img src={item.image}></img>
    ))}
</div>
 
);
}