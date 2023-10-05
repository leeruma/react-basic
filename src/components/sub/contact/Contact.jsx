import Layout from '../../common/layout/Layout';
import './Contact.scss';
import { useRef, useEffect, useState } from 'react';

export default function Contact() {
	const map = useRef(null);
	const instance = useRef(null);
	const [Traffic, setTraffic] = useState(false);

	// 현재 kakao객체를 cdn으로 가져오고 있기 때문에
	// 리액트 컴포넌트 안쪽에서 window객체로부터 kakao객체를 비구조화할당을 이용해서 수동으로 꺼내옴
	const { kakao } = window;
	const info = {
		latlng: new kakao.maps.LatLng(37.58478163978524, 126.88566424098676),
		imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
		imgSize: new kakao.maps.Size(232, 99),
		imgPos: { offset: new kakao.maps.Point(116, 99) },
	};

	const marker = new kakao.maps.Marker({
		position: info.latlng,
		image: new kakao.maps.MarkerImage(info.imgSrc, info.imgSize, info.imgPos),
	});

	useEffect(() => {
		//컴포넌트 마운트 되자마자 지도인스턴스 생성
		instance.current = new kakao.maps.Map(map.current, {
			center: info.latlng,
			level: 1,
		});
		//마커 출력 인스턴스에 지도 인스턴스 결합
		marker.setMap(instance.current);
	}, []);

	useEffect(() => {
		// traffic 값이 바뀔떄마다 실행될 구문
		Traffic
			? instance.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: instance.current.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout title={'Contact'}>
			{/* <button onClick={() => setTraffic(true)}>주변 교통정보 보기</button>
			<button onClick={() => setTraffic(false)}>주변 교통정보 끄기</button> */}
			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? '교통정보끄기' : '교통정보켜기'}
			</button>
			<div className='map' ref={map}></div>
		</Layout>
	);
}
