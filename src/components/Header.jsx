import '../css/components/Header.css';

const Header = ({ unreadCount, onMarkAllAsRead, isMarkingAllAsRead }) => {
    return (  
        <header>
            <nav>
                <div className="container__notifi">
                    <h3>Notifications</h3>
                    <p key={unreadCount} className="notification-count">
                        {unreadCount}
                    </p>
                </div>
                <button
                    type="button"
                    className="mark-all-read"
                    onClick={onMarkAllAsRead}
                    disabled={isMarkingAllAsRead}
                >
                    Mark all as read
                </button>
            </nav>
        </header>
    );
}
 
export default Header;