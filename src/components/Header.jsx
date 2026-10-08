import '../css/components/Header.css';

const Header = () => {
    return (  
        <header>
            <nav>
                <div className="container__notifi">
                    <h3>Notifications</h3>
                    <p>3</p>
                </div>
                <a href="#">Mark all as read</a>
            </nav>
        </header>
    );
}
 
export default Header;