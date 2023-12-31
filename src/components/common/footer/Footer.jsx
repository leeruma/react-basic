import './Footer.scss';

export default function Footer() {
	return (
		<footer>
			<div className='textBox'>
				<div className='conBox'>
					<div>
						<h3>Quisquam</h3>
						<p>
							<span>Lorem, ipsum.</span>
							<span>Lorem, ipsum dolor.</span>
							<span>Lorem, ipsum.</span>
						</p>
						<a href='#/Contact.jsx'>visit us</a>
					</div>
					<div>
						<h3>Quisquam</h3>
						<p>
							<span>Lorem ipsum dolor sit.</span>
							<span>Lorem, ipsum dolor.</span>
							<span>Lorem, ipsum.</span>
						</p>
						<a href='#/Contact.jsx'>shop</a>
						<br />
						<a href='#/Contact.jsx'>today's event</a>
					</div>
					<div className='icon'>
						<h3>Quisquam</h3>
						<i class='fa-brands fa-square-instagram'></i>
						<i class='fa-brands fa-facebook'></i>
						<i class='fa-brands fa-youtube'></i>
						<i class='fa-brands fa-square-twitter'></i>
					</div>
					<div className='bt'>
						<h3>Quisquam</h3>
						<span>
							<input type='text' name='user_name' placeholder='search word' />
							<button>Search</button>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
