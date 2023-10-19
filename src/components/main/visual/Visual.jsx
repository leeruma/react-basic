import './Visual.scss';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

function Visual() {
	const { data } = useSelector((store) => store.youtube);
	const [Index, setIndex] = useState(0);
	return (
		<section className='visual'>
			<div className='titBox'>
				<ul>
					{data.map((tit, idx) => {
						if (idx >= 5) return null;
						return (
							<li key={idx} className={idx === Index ? 'on' : ''}>
								<h3>{tit.snippet.title}</h3>

								<button>View Detail</button>
							</li>
						);
					})}
				</ul>
			</div>
			<Swiper
				slidesPerView={3}
				spaceBetween={50}
				loop={true}
				centeredSlides={true}
				// swiper loop 기능을 적용하는 순간 실제 연결되어 있는 패널갯수보다 동적으로 패널이 생성되면서 일반적인 방법으로는 활성화 패널의 순서값을 구할 수 없기 때문에 아래와 같은 방법으로 순서값을 구함.
				onSlideChange={(el) => setIndex(el.realIndex)}
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
