import './App.css';
import BG from './BG';
import Navbar from './Navbar';
import Meat from './Meat';
import List_order from './List_order';
function App() {
    return (
        <div className='grid'>

            <div className="App-background1">
                <Navbar />
                <body>
                    <BG />
                    <h2 className="App-text">
                        โปรดเลือกรายการอาหารใส่ตะกร้า <br /><br />
                        เมนูสินค้า
                    </h2>
                    <Meat />
                    <br />
                </body>
            </div>
            <div>
                <List_order />
            </div>
        </div>
    );
}
export default App;