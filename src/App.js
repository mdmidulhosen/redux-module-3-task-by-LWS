import { Provider } from "react-redux";
import "./assets/css/global.css";
import Body from "./components/home/Body";
import store from "./redux/store";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <Body />
      <Cart />
    </Provider>
  );
}

export default App;
