import React from 'react'
import { useParams } from 'react-router-dom'

import { dataProps } from '../../types/fetch-props'

type SingleItemProps = {
  data: dataProps[]
  setQuery: React.Dispatch<React.SetStateAction<string>>
  setSelectModal: React.Dispatch<React.SetStateAction<boolean>>
  AddToUserCart: (id: number, amount: number, image: string) => void
}
export const SingleItem = ({ data, setSelectModal, AddToUserCart }: SingleItemProps) => {
  const { id = 0 }: any = useParams()
  return (
    <div className="SingleItem flex flex-col">
      <div className="item-wrapper mt-9" onClick={() => setSelectModal(true)}>
        <img className="w-96" src={data[id - 1].imageURL}></img>
      </div>
      <div className="flex flex-col space-y-3 item-description w-60 ms-10 mt-10">
        <p className="font-compagnonMed text-xl">{data[id].description}</p>
        <div className="price-wrapper flex space-x-5">
          <p className="font-nimbus text-2xl">€{data[id].price}</p>
          <p className="font-nimbus text-sm pt-2">including VAT</p>
        </div>

        <div onClick={() => (AddToUserCart(id, data[id].price, data[id].imageURL), console.log('you clicked buy'))}>
          <h2 className="font-lacklineReg cursor-pointer outline outline-1 text-center text-white text-xl  p-2 bg-black hover:underline hover:bg-slate-100 hover:text-black">
            Buy now!
          </h2>
        </div>
      </div>
    </div>
  )
}
