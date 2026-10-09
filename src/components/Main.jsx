import '../css/components/Main.css';
import markAvatar from '../assets/images/avatar-mark-webber.webp';
import angelaAvatar from '../assets/images/avatar-angela-gray.webp';
import jacobAvatar from '../assets/images/avatar-jacob-thompson.webp';
import rizkyAvatar from '../assets/images/avatar-rizky-hasanuddin.webp';
import kimberlyAvatar from '../assets/images/avatar-kimberly-smith.webp';
import nathanAvatar from '../assets/images/avatar-nathan-peterson.webp';
import annaAvatar from '../assets/images/avatar-anna-kim.webp';
import chessPicture from '../assets/images/image-chess.webp';

export const initialNotifications = [
    {
        id: 1,
        name: "Mark Webber",
        avatar: markAvatar,
        action: "reacted to your recent post",
        target: "My first tournament today!",
        time: "1m ago",
        unread: true,
    },
    {
        id: 2,
        name: "Angela Gray",
        avatar: angelaAvatar,
        action: "followed you",
        time: "5m ago",
        unread: true,
    },
    {
        id: 3,
        name: "Jacob Thompson",
        avatar: jacobAvatar,
        action: "has joined your group",
        target: "Chess Club",
        time: "1 day ago",
        unread: true,
    },
    {
        id: 4,
        name: "Rizky Hasanuddin",
        avatar: rizkyAvatar,
        action: "sent you a private message",
        time: "5 days ago",
        unread: false,
        message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
        id: 5,
        name: "Kimberly Smith",
        avatar: kimberlyAvatar,
        action: "commented on your picture",
        time: "1 week ago",
        unread: false,
        picture: chessPicture,
    },
    {
        id: 6,
        name: "Nathan Peterson",
        avatar: nathanAvatar,
        action: "reacted to your recent post",
        target: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        unread: false,
    },
    {
        id: 7,
        name: "Anna Kim",
        avatar: annaAvatar,
        action: "left the group",
        target: "Chess Club",
        time: "2 weeks ago",
        unread: false,
    },
];

const Main = ({ notifications, isMarkingAllAsRead }) => {

    return (
        <main className="main">
            {notifications.map((card) => (
                <article className={`card${card.unread ? ' card--unread' : ''}`} key={card.id}>
                    <div className="profile">
                        <img src={card.avatar} alt={`${card.name} profile`} />
                        {card.unread && (
                            <span
                                className={`profile__dot${
                                    isMarkingAllAsRead ? ' profile__dot--fading' : ''
                                }`}
                                aria-hidden="true"
                            />
                        )}
                    </div>
                    <div className="description__card">
                        <div className="description__top">
                            <p className="description__text">
                                <span className="description__name">{card.name}</span>
                                <span className="description__action">{card.action}</span>
                                {card.target && (
                                    <span className="description__target">{card.target}</span>
                                )}
                            </p>
                            <span className="description__time">{card.time}</span>
                        </div>
                        {card.message && (
                            <p className="description__message">{card.message}</p>
                        )}
                    </div>
                    {card.picture && (
                        <img
                            className="card__picture"
                            src={card.picture}
                            alt="Related notification"
                        />
                    )}
                </article>
            ))}
        </main>
    );
}
 
export default Main;