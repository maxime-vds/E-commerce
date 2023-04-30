import { useState, useEffect } from 'react'

export default function useAddToCart() {
  const [userCart, setAddToUserCart] = useState<any[]>([])

  const AddToUserCart = (id: string) => {
    setAddToUserCart((prevCart) => [...prevCart, id])
  }
  useEffect(() => {
    // console.log(userCart)
    // add to localStorage ? 
  }, [userCart])

  return { userCart, AddToUserCart }
}
