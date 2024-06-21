import {Header} from "./components/Layout/Header";
import {useState} from "react";
import {Meals} from "./components/Meals/Meals";
import {Cart} from "./components/Cart/Cart";
import {CartProvider} from "./store/CartContent/cartProvider";

function App() {
    const [isModalVisible, setModalVisible] = useState(false);

    const modalHandler = () => {
        setModalVisible(!isModalVisible);
    }
  return (
    <CartProvider>
        {isModalVisible && <Cart modalVisible={modalHandler}/>}
        <Header modalVisible={modalHandler}/>
        <main>
            <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
