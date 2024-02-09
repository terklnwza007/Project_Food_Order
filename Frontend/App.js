import './App.css';
import BG from './BG';
import Navbar from './Navbar';
import Meat from './Meat';
function App() {
  return (
    <div className="App-background1">
      <Navbar/>
      <body>
      <BG/>
      <h2 className="App-text">
          โปรดเลือกรายการอาหารใส่ตะกร้า <br/>
          เมนูสินค้า
      </h2>
      <Meat/>
        <br/>
      </body>
    </div>
  );
}
export default App;