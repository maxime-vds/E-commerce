type MainGridItemProps = {
  image: string
  caption: string
  amount: string
  onClick: () => void
}

const MainGridItem = ({ image, caption, amount, onClick }: MainGridItemProps) => {
  return (
    <div className="item-wrapper ">
      <div className="GridItem relative" onClick={onClick}>
        <div className="picture-wrapper h-[14rem] w-[14rem] overflow-hidden">
          <img src={image} className="h-full self-center" />
        </div>

        <div
          className="hover-state absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 lg:h-auto hover:opacity-10 
        hover:transition-all duration-300 ease-in"
        ></div>
      </div>
      <div className="item-description text-xs font-bold">
        <p>{caption}</p>
        <p>item descriptions</p>
        <p>prix : {amount}</p>
      </div>
    </div>
  )
}

export default MainGridItem
