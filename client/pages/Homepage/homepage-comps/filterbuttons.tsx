import Fbutton from './fbutton'

const ButtonText: string[] = ['All', 'Chaise', 'Couch', 'Lit']

type FilterButtonsProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  setFilterType: React.Dispatch<React.SetStateAction<string>>
}

const FilterButtons = ({ setQuery, setFilterType }: FilterButtonsProps) => {
  const FilterValue = (text: string) => {
    if (text) {
      if (text === 'All') {
        setQuery('')
      } else {
        setQuery(text)
      }
    }
    setFilterType('filterbuttons')
  }

  return (
    <div className="">
      {ButtonText &&
        ButtonText.map((text) => <Fbutton key={text} ButtonText={text} onClick={() => FilterValue(text)} />)}
    </div>
  )
}

export default FilterButtons
