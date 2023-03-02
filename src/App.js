import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./redux/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Modal />
      <Navbar/>
      <CartContainer/>
    </main>
  );
};
export default App;
