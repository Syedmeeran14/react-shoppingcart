import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let[cart,setCart]=useState(0)
  let product = [
    {
      name:"Biryani",
      price:"3"
    },
    {
      name:"Pizza",
      price:"2"
    },
    {
      name:"Shawarma",
      price:"2"
    },
    {
      name:"BBQ",
      price:"3"
    },
    {
      name:"",
      price:"1"
    },
    {
      name:"Pepsi",
      price:"1"
    },
    {
      name:"Redbull",
      price:"1"
    },
    {
      name:"String",
      price:"1"
    }, 
  ]
  return <>
  <Navbar cart={cart} setCart={setCart}/>
  <Header/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    product.map((e,i)=>{
                      return <Card cart={cart} setCart={setCart} product={e} key={i}/>
                    })
                   }
                </div>
            </div>
  </section>
  <Footer/>
  </>
}

export default App
