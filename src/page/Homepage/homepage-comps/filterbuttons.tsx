import Fbutton from "./fbutton";


const ButtonText : string[] = ['All', 'Chaise', 'Couch', 'Lit']
//remplace buttonText avec un fetch qui va chercher les types buttonText = data.type



const FilterButtons = ({setQuery} : {setQuery: React.Dispatch<React.SetStateAction<string>>}) => {

    const FilterValue = (text:string) => {
        if(text) {
            if(text==='All') {
                setQuery('')
            }
            else { 
                setQuery(`type=${text}`)
            }
        }
    }


    return ( 

        // ButtonText.filter(), grab clicked value and filter against that then set that as 
            <div className="flex overflow-x-scroll">
                {ButtonText && ButtonText.map(text => <Fbutton key={text} ButtonText={text} onClick={() => FilterValue(text)}/>
                )}
            </div>
        
    );
}
 
export default FilterButtons;