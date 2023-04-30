import { useState, useEffect } from 'react'

export default function useAddToCart() {
  const [userCartIDs, setAddToUserCartIDs] = useState<any[]>([])
  const [body, setBody] = useState<{ id: string; amount: number } | {} | undefined>({})

  const AddToUserCart = (id: string) => {
    setAddToUserCartIDs((prevCart) => [...prevCart, id])
  }
  useEffect(() => {
    if (userCartIDs.length > 0) {
      console.log(userCartIDs)

      //userCart should grab the IDs and the amounts
      // and then we can add up the amounts and Numberify the IDs here
    }
  }, [AddToUserCart])

  // useEffect(() => {
  //   if (body) {
  //     console.log('undefined is falsy ? and empty object too? ')

  //     const setBodyUserCart = ({
  //       id,
  //       amount,
  //     }: {
  //       id: string
  //       amount: number
  //     }) => {
  //       //logic for changing ids to numbers (if needed)
  //       // logic for adding up amount

  //       return setBody({ id, amount })
  //     }
  //     setBodyUserCart(body)
  //   }
  // }, [body])

  const BuyUserCart = (body: { id: string; amount: number }) => {
    console.log(body)

    // grab body for fetch request
  }

  return { userCart: userCartIDs, AddToUserCart, BuyUserCart }
}
