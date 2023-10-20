import './Visual.scss';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Visual() {
	const { data } = useSelector((store) => store.youtube);
	const [Index, setIndex] = useState(0);
	console.log(data);

	return (
		<section className='visual'>
			<div className='titBox'>
				<ul>
					{data.map((tit, idx) => {
						let tit1 = tit.snippet.title;
						if (idx >= 5) return null;
						return (
							<li key={idx} className={idx === Index ? 'on' : ''}>
								<h3>{tit1.length > 18 ? tit1.substr(0, 18) + '...' : tit1}</h3>
								<p>{tit.snippet.description.substr(0, 150) + '...'}</p>
								<Link to={`/detail/${tit.id}`}>
									<button>View Deatil</button>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				centeredSlides={true}
				onSlideChange={(el) => setIndex(el.realIndex)}
				breakpoints={{
					//1000px보다 브라우저폭이 커졌을때
					1000: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					1400: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
			>
				{data.map((vid, idx) => {
					if (idx >= 5) return null;
					return (
						<SwiperSlide key={idx}>
							<div className='pic'>
								<img src={vid.snippet.thumbnails.maxres.url} alt={vid.title} />
								<img src={vid.snippet.thumbnails.maxres.url} alt={vid.title} />
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Visual;
