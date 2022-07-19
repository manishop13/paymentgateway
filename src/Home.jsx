import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
 import axios from "axios";
import  "./nav.css"
import "./App.css"
const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Manish",
            description: "For Donation",
            image: "https://avatars.githubusercontent.com/u/86104481?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "The Spark Foundation",
                email: "manishsharm9196@gmail.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

     return (
    <div> 

<nav class="navbar">
  <p>HelpAid</p>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/About">About</a></li>
   
  </ul>
</nav>

       <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={5000} img={"https://payment-gateway-ngo.netlify.app/static/media/img2.3ee366c4.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"https://payment-gateway-ngo.netlify.app/static/media/img3.5c204f01.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"https://payment-gateway-ngo.netlify.app/static/media/poordog5.22b63bec.jpg"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
        </div>
    )
}

export default Home