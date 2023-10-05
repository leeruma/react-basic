import Layout from '../../common/layout/Layout';
import Modal from '../../common/modal/Modal';
import './Youtube.scss';
import { useEffect, useState } from 'react';

export default function Youtube() {
	const [Youtube, setYoutube] = useState([]);

	const fetchYoutube = () => {
		const api_key = process.env.REACT_APP_YOUTUBE_API;
		const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
		const pid = 'PLnBZ3Abl_z0NvoNbCbU2WV5-rkmzQsnwa';
		const num = 5;
		const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
		fetch(resultURL)
			.then((data) => data.json())
			.then((json) => {
				console.log(json.items);
				setYoutube(json.items);
			});
	};

	useEffect(() => {
		fetchYoutube();
	}, []);
	return (
		<>
			<Layout title={'Youtube'}>
				<p>test</p>
				{Youtube.map((data, idx) => {
					return (
						<article key={idx}>
							<h2>{data.snippet.title}</h2>
							<p>{data.snippet.description}</p>
							<div className='pic'>
								<img src={data.snippet.thumbnails.standard.url} alt={data.title} />
							</div>
						</article>
					);
				})}
			</Layout>
			<Modal></Modal>
		</>
	);
}
