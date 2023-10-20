/* 
	해당 유튜브 페이지 작업에 대해서 설명, 이슈사항은 없었는지
*/

import Layout from '../../common/layout/Layout';
import './Youtube.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useYoutubeQuery } from '../../../hooks/useYoutube';

export default function Youtube() {
	const { data: Youtube, isSuccess } = useYoutubeQuery();

	return (
		<>
			<Layout title={'Youtube'}>
				{isSuccess &&
					Youtube.map((data, idx) => {
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
답변
해당페이지는 유튜브 api를 활용해서 비동기데이터, 서버사이드 데이터를 활용하는 페이지이다.
유튜브 데이터는 유튜브 컴포넌트에서만 호출하는 것이 아닌 메인페이지의 비주얼 컴포넌트에도 호출해야 되는 이슈 발생
처음에는 단순하게 fetching함수를 똑같이 호출해서 구현하려고 했었는데 같은 함수를 두 번 호출하는게 비효율적으로 느껴졌다.
그래서 구글링으로 redux라는 전역 상태관리 라이브러리를 검색해서 redux-saga방식을 알아냈는데
내가 느끼기에는 너무 동작방식이 중앙집중적이고 간단한 비동기 데이터를 전역관리 하기에는 코드의 복잡도가 너무 커서 비효율적으로 느껴졌다.
대안으로 redux-toolkit이라는 것을 활용했다. 비동기 데이터의 상태에 따라서 자동으로 액션객체를 생성해주고 액션객체의 상태에 따라서 리듀서가 알아서 전역데이터를 변경해는방식이 효율적으로 느껴져서 적용을 해봤다.
리덕스 툴킷을 활용함으로써 컴포넌트 안쪽에서 비동기 데이터 함수를 관리하는게 아닌 컴포넌트 외부에 slice파일을 통해서 비동기데이터별로 fetching함수와 리듀서 함수를 한번에 관리할 수 있는 부분이 편하게 느껴졌다.
*/

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
