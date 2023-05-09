type FbuttonProps = {
  ButtonText: string
  onClick: () => void
}

const Fbutton = ({ ButtonText, onClick }: FbuttonProps) => {
  return (
    <button
      className="py-5 px-5 xl:px-2 font-quicksand font-bold hover:bg-slate-300 focus:bg-slate-300"
      onClick={onClick}
    >
      <h2>{ButtonText}</h2>
    </button>
  )
}
export default Fbutton
