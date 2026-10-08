import '../css/components/Main.css';

const notifications = [
    {
        id: 1,
        name: "Mark Webber",
        avatar: "avatar-mark-webber.webp",
        action: "reacted to your recent post",
        target: "My first tournament today!",
        time: "1m ago",
        unread: true,
    },
    {
        id: 2,
        name: "Angela Gray",
        avatar: "avatar-angela-gray.webp",
        action: "followed you",
        time: "5m ago",
        unread: true,
    },
    {
        id: 3,
        name: "Jacob Thompson",
        avatar: "avatar-jacob-thompson.webp",
        action: "has joined your group",
        target: "Chess Club",
        time: "1 day ago",
        unread: true,
    },
    {
        id: 4,
        name: "Rizky Hasanuddin",
        avatar: "avatar-rizky-hasanuddin.webp",
        action: "sent you a private message",
        time: "5 days ago",
        unread: false,
        message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
        id: 5,
        name: "Kimberly Smith",
        avatar: "avatar-kimberly-smith.webp",
        action: "commented on your picture",
        time: "1 week ago",
        unread: false,
        picture: "image-chess.webp",
    },
    {
        id: 6,
        name: "Nathan Peterson",
        avatar: "avatar-nathan-peterson.webp",
        action: "reacted to your recent post",
        target: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        unread: false,
    },
    {
        id: 7,
        name: "Anna Kim",
        avatar: "avatar-anna-kim.webp",
        action: "left the group",
        target: "Chess Club",
        time: "2 weeks ago",
        unread: false,
    },
];

const Main = () => {
    
    return (  
        <main className="main">
            
        </main>
    );
}
 
export default Main;