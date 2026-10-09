import './css/globals.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Main, { initialNotifications } from './components/Main';

function App() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isMarkingAllAsRead, setIsMarkingAllAsRead] = useState(false);
  const markAllTimeoutRef = useRef(null);

  const unreadCount = useMemo(
    () => notifications.filter((notification) => notification.unread).length,
    [notifications],
  );

  const handleMarkAllAsRead = () => {
    if (unreadCount === 0 || isMarkingAllAsRead) {
      return;
    }

    setIsMarkingAllAsRead(true);

    if (markAllTimeoutRef.current) {
      window.clearTimeout(markAllTimeoutRef.current);
    }

    markAllTimeoutRef.current = window.setTimeout(() => {
      setNotifications((currentNotifications) =>
        currentNotifications.map((notification) =>
          notification.unread
            ? { ...notification, unread: false }
            : notification,
        ),
      );
      setIsMarkingAllAsRead(false);
      markAllTimeoutRef.current = null;
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (markAllTimeoutRef.current) {
        window.clearTimeout(markAllTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="container_app">
      <div className="container">
        <Header
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
          isMarkingAllAsRead={isMarkingAllAsRead}
        />
        <Main
          notifications={notifications}
          isMarkingAllAsRead={isMarkingAllAsRead}
        />
      </div>
    </div>
  )
}

export default App
