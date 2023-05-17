import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useState, useEffect } from 'react'
import axios from 'axios'

// const CARD_OPTIONS = {
//   iconStyle: 'solid',
//   style: {
//     base: {
//       iconColor: '#c4f0ff',
//       color: '#fff',
//       fontWeight: 500,
//       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//       fontSize: '16px',
//       fontSmoothing: 'antialiased',
//       ':-webkit-autofill': { color: '#fce883' },
//       '::placeholder': { color: '#87bbfd' },
//     },
//     invalid: {
//       iconColor: '#ffc7ee',
//       color: '#ffc7ee',
//     },
//   },
// }

export default function PaymentForm() {
  const [succes, setSucces] = useState(false)
  const [cardElement, setCardElement] = useState<any>()

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    setCardElement(elements?.getElement(CardElement))
  }, [elements])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!elements || !stripe) {
      return (
        <div>
          <h2>loading...</h2>
        </div>
      )
    } else {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })
      if (!error) {
        try {
          const { id } = paymentMethod
          const response = await axios.post('http://localhost:4000/payment', {
            amount: 1000,
            id,
          })
          if (response.data.succes) {
            console.log('successful payment')
            setSucces(true)
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      } else {
        console.log(error.message)
      }
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex items-center justify-center">
  {!succes ? (
    <form onSubmit={handleSubmit} className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
      <fieldset className="FormGroup">
        <div className="FormRow mb-6 h-14 ">
          <CardElement className="border rounded p-3 w-96" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Hello</h2>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Pay
          </button>
        </div>
      </fieldset>
    </form>
  ) : (
    <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">
        You just bought a sweet spatula!
      </h2>
    </div>
  )}
</div>

  )
}
