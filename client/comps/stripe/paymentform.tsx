import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useState } from 'react'
import axios from 'axios'
import React from "react";

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
  if (!elements || !stripe) {
    return <><h2>loading...</h2></>
  }
  setCardElement(elements.getElement(CardElement))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          console.log('succesfull payment')
          setSucces(true)
        }
      } catch (error) {
        console.log('ERROR', error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <>
      {!succes ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>You just bought a sweet spatula!</h2>
        </div>
      )}
    </>
  )
}
