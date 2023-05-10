type FbuttonProps = {
  ButtonText: string
  onClick: () => void
}

const Fbutton = ({ ButtonText, onClick }: FbuttonProps) => {
  return (
    <div className="flex justify-center hover-state hover:bg-slate-300 w-[8rem] h-full">
      <button className="py-8 xl:px-2 font-chillax text-xl focus:bg-slate-300" onClick={onClick}>
        <h2>{ButtonText}</h2>
      </button>
    </div>
  )
}
export default Fbutton
