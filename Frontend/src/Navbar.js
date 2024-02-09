import './Navbar.css';
function Navbar(){
    return(
        <>
        <nav>
            <h1 className = "App-text">Food Order Service </h1>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search for food" name="search"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <div>
                <ul id ="navbar">
                    <li><a href="/meat"> เนื้อ</a></li>
                    <li><a href="/vegtable"> ผัก</a></li>
                    <li><a href="/drinks"> เครื่องดื่ม</a></li>
                    <li><a href="/dessert"> ของหวาน</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar;