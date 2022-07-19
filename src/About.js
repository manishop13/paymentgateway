import React from 'react'
import "./nav.css"
import { Box,Image } from "@chakra-ui/react"
const About = () => {
  return (
    <div>


<body class="background">
  <div class="content">


  <nav class="navbar">
  <p>HelpAid</p>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/About">About</a></li>
   
  </ul>
</nav>


<Box  boxSize='sm'>
<Image src='https://rb7kar8787.github.io/DonationPaymentGateway/images/two.jpg' alt='Dan Abramov' />
</Box>




 <div class="container donate about">

  
  <p> 
  We provide several key programs to achieve our goals: spay/neuter, rabies vaccination, rescue and adoption, street animal feeding, and community education for rabies safety and compassion.

Watch the video to learn more!
  </p>
  </div>

</div>



       </body> 
    </div>
  )
}

export default About