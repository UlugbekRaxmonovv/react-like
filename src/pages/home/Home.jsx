import React,{useState,useEffect} from 'react'
import Main from "../../components/main/Main"
import Products from '../../components/products/Products'
import axios from '../../api/index'

const Home = () => {
  const [products,setProducts] = useState(null)
  useEffect(()=>{
    axios.get('/products')
    .then(res=>{
      setProducts(res.data.products)
    })
  },[])
  return (
    <div className='container'>
      <Main/>
      <Products  title="Mahsulotlar"  products={products}/>
    </div>
  )
}

export default Home