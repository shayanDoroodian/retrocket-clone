import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import postStyle from '../styles/post.module.css';
import Loading from '../components/Loading';
const post = () => {
	const route = useRouter();
	const id = route.query.post;

	const [post, setpost] = useState();
	const [loading, setLoading] = useState(false);
	async function getData() {
		setLoading(true);
		const res = await fetch(
			`https://retrocket.github.io/retrocketeer-api/post-details/${id}.json`
		);
		const post = await res.json();

		setpost(post);
		setLoading(false);
		const items = JSON.parse(localStorage.getItem('postId'));

		if (items) {
			const ifExist = items.find((i) => i.id === post.id);

			if (!ifExist) {
				localStorage.setItem('postId', JSON.stringify([...items, post]));
			}
		} else {
			localStorage.setItem('postId', JSON.stringify([post]));
		}
	}
	useEffect(() => {
		if (id) getData();
	}, [id]);

	return (
		<div className={postStyle.postMainContainer}>
			{loading && <Loading />}
			{post && (
				<div className={postStyle.postContainer}>
					<div className={postStyle.postUser}>
						<h2>
							{post.user.name} {post.user.surname}
						</h2>
						<img
							src={`https://retrocket.github.io/retrocketeer-api${post.user.profile_image}`}
							alt=''
						/>
					</div>
					<div className={postStyle.postContent}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default post;
