import './Visual.scss';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';

function Visual() {
	const { data } = useSelector((store) => store.youtube);
	const [Index, setIndex] = useState(0);
	console.log(data);

	return (
		<section className='visual'>
			<div className='titBox'>
				<ul>
					{data.map((tit, idx) => {
						if (idx >= 5) return null;
						return (
							<li key={idx} className={idx === Index ? 'on' : ''}>
								<h3>{tit.snippet.title}</h3>
								<p>{tit.snippet.description.substr(0, 300) + '...'}</p>
								<button>View Deatil</button>
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
