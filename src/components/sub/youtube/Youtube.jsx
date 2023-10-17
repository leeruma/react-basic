import Layout from '../../common/layout/Layout';
import './Youtube.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

export default function Youtube() {
	const Youtube = useSelector((store) => store.youtube.data);
	return (
		<>
			<Layout title={'Youtube'}>
				{Youtube.map((data, idx) => {
					let tit = data.snippet.title;
					let desc = data.snippet.description;
					let date = data.snippet.publishedAt;

					return (
						<article key={idx}>
							<div className='conBox'>
								<h2>{tit.length > 18 ? tit.substr(0, 18) + '...' : tit}</h2>

								<p>{desc.length > 80 ? desc.substr(0, 80) + '...' : desc}</p>
								<span>{date.split('T')[0].split('-').join('.')}</span>
							</div>

							<div className='picBox'>
								{/* 썸네일 링크 클릭시 특정유튜브 객체 하나의 정보값을 받기 위해서 유튜브 객체의 id값을 params로 전달 */}
								<Link to={`/detail/${data.id}`}>
									<img src={data.snippet.thumbnails.standard.url} alt={data.title} />
								</Link>
							</div>
						</article>
					);
				})}
			</Layout>

			{/* {IsModal && (
				<Modal setIsModal={setIsModal}>
					<iframe
						src={`https://www.youtube.com/embed/${Youtube[Index].snippet.resourceId.videoId}`}
						title='youtube'
					></iframe>
				</Modal>
			)} */}
		</>
	);
}

/*
	리액트는 단방향 데이터 바인딩
	- 부모에서 자식으로 데이터 전달가능하지만 자식에서 부모로는 데이터를 전달 불가
	- props전달, children 전달
	
	리액트에서 자식 컴포넌트에서는 직접적으로 부모 컴포넌트의 state값 변경이 불가
	- 해결방법 부모의 state변경함수를 자식 컴포넌트로 전달
	- 자식컴포넌트에서는 전달받은 state변경함수로 간접적으로 부모 state값 변경가능
		useRef로 jsx는 참조 객체에 담을 수 있음

	promise .then구문을 좀 더 구조적으로 짜는 방법 (async await) -> .then구문을 쓸 필요가 없어짐
	async await 사용조건
	- promsie 반환 함수를 wrapping 처리
	- wrapping된 함수에 async 적용
	- promise반환함수 앞쪽에 await 적용
	- await	적용되어 있는 다음 코드가 무조건 동기화 처리
*/
