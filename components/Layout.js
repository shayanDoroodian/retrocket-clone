import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Layout = ({ children }) => {
	// console.log(Children);
	return (
		<div>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<ul className={styles.navItems}>
						<li className={styles.navItem}>
							<Link href={`./`}>LOGO</Link>
						</li>
						<li className={styles.navItem}>
							<Link href={`./`}>Home</Link>
						</li>
					</ul>
				</nav>
			</header>
			{children}
			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<span>Powered by &nbsp;</span>
					<span>
						<a
							href='https://www.linkedin.com/in/shayan-doroodian/'
							style={{ cursor: 'pointer' }}>
							Shayan
						</a>
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Layout;
