import cardStyle from '../styles/card.module.css';
import Link from 'next/link';

export default function Card({ id, title, img, published_at, user }) {
	let image = img;
	if (img.includes('posts')) {
		null;
	} else {
		image = img.replace('post', 'posts');
	}

	return (
		<div className={cardStyle.card}>
			<Link href={`/${id}`}>
				<div className={cardStyle.userInfo}>
					<h4>
						<span>written by: </span>
						{user.name} {user.surname}
					</h4>
					<img
						src={`https://retrocket.github.io/retrocketeer-api${user.profile_image}`}
						alt=''
					/>
				</div>
				<div className={cardStyle.cardImg}>
					<img
						src={`https://retrocket.github.io/retrocketeer-api${image}`}
						alt={title}
					/>
				</div>
				<div className={cardStyle.cardDesc}>
					<h2>{title}</h2>
					<p>{published_at}</p>
				</div>
			</Link>
		</div>
	);
}
