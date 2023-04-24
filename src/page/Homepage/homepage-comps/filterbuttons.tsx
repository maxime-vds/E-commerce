import Fbutton from "./fbutton";


const ButtonText : string[] = ['Chaises', 'Canapés', 'Tables', 'Lits', 'efjzoefj', 'djfezijf', 'booooooo']

const FilterButtons = () => {
    return (  
            <div className="flex overflow-x-scroll">
                {ButtonText && ButtonText.map(text => <Fbutton ButtonText={text}/>
                )}
            </div>
        
    );
}
 
export default FilterButtons;