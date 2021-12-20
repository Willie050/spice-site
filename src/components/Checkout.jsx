import React from 'react'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Elements, CheckoutForm } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_CREDS}`)
// const stripe = require('stripe')(process.env.REACT_APP_STRIPE_CREDS)

const createPaymentIntent = async () => {
        console.log('init payment func')
        fetch("http://localhost:4001/payment/create-intent", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
            // body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
          })
            .then((res) => res.json())//res.json())
            .then((data) => console.log(data));
//     //Creates Payment Intent when page loads
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: totalPrice,
//         currency: "eur",
//         automatic_payment_methods: {
//           enabled: true,
//         },
//       });
}

export default function Checkout(props) {
    let selectedItems = props.itemState.filter(item => item['qty'] !== 0)
    const appearance = {
        theme: 'stripe'
    }
    const options = {
        // passing the client secret obtained from the server
        clientSecret: `${ process.env.REACT_APP_STRIPE_SK }`,
        appearance
      };

    if (selectedItems.length === 0) {
        return (
            <div style={{ marginTop: '120px', 'backgroundColor': "#8533ff" }}>
                <Container fluid='lg'>
                    You dont have anything, go back and add stuff in your cart
                </Container>
            </div>
        )
    } else {
        return (
            <div style={{ marginTop: '120px', 'backgroundColor': "#8533ff" }}>
                <button onClick={(event)=>{createPaymentIntent()}}>
                    Click for message
                </button>
                {/* <Elements  options={options} stripe={stripePromise}>
                    <form>
                        <CheckoutForm />
                    </form>
                </Elements> */}
            </div>
        )
    }

}
