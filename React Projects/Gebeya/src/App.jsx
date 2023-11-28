import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/Header/Header'

//Pages
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'


//Custom Hooks
import useAxios from './useAxios/useAxios'

//BASE URL
const BASE_URL = 'https://fakestoreapi.com/products?sort=desc';

function App() {
  const [isnavBarScrolled, setIsNavBarScrolled] = useState(false);
  const { isPending, err, data: products } = useAxios(BASE_URL)




  const ChangeNavBarBg = () => {
    if (window.scrollY >= 60) {
      setIsNavBarScrolled(true)

    } else {
      setIsNavBarScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', ChangeNavBarBg)

    //return window.removeEventListener('scroll', ChangeNavBarBg)
  }, [window.scrollY])
  return (
    <div className="container">
      <BrowserRouter>
        <Header isnavBarScrolled={isnavBarScrolled} />
        <Routes>
          <Route path='/' element={<Home
            products={products}
            err={err}
            isPending={isPending}

          />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App






const addToCart = (item) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart

  if (isItemInCart) {
    setCartItems(
      cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem // otherwise, return the cart item
      )
    );
  } else {
    setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
  }
};