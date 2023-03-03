import { useEffect } from "react";
import Navbar1 from "./components/Navbar1";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./redux/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

if(isLoading){
  return (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  )
}

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar1/>
      <CartContainer/>
    </main>
  );
};
export default App;
