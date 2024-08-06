'use client'

import React, { useState } from 'react'
import { Heading } from '@/components'
import {ethers} from "ethers"
import { ToastContainer, toast } from 'react-toastify';


// function checkWallet(){
//     try{
//         if(!window.ethereum)
//     }
// }


const page = () => {
    const notify = () => toast("Wow so easy!");


    const [balance,setBalance] = useState(0)
    const [address,setAddress] = useState("")
    const [currency,setCurrency] = useState("MATIC")


  return (
    <div>
        <Heading text="Testing Graph here!" />
        <button onClick={notify}>Notify!</button>
    </div>
  )
}

export default page