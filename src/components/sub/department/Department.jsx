import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
import './Department.scss';
const path = process.env.PUBLIC_URL;
// 1. useEffect로 컴포넌트 마운트되자마자 fetch외부데이터 가져옴
// 2. 데이터가 다 받아지면 useState로 state에 해당 값 담아줌
// 3. return문 안쪽에 state값을 map으로 반복돌면서 JSX출력

export default function Department() {
	const [Department, setDepartment] = useState([]);

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.then((json) => {
				setDepartment(json.members);
			});
	}, []);

	return (
		<Layout title={'Member'}>
			<main>
				<div>
					<h2>Support!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio doloremque libero
						voluptatum animi officiis! Placeat eius eveniet a dolore!
					</p>
					<a href='#'>More</a>
				</div>
				<div>
					<h2>Develop!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio doloremque libero
						voluptatum animi officiis! Placeat eius eveniet a dolore!
					</p>
					<a href='#'>More</a>
				</div>
				<div>
					<h2>Research!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio doloremque libero
						voluptatum animi officiis! Placeat eius eveniet a dolore!
					</p>
					<a href='#'>More</a>
				</div>
			</main>
			<div className='memberBox'>
				{Department.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
								<h3>{member.name}</h3>
								{/* <p>{member.position}</p> */}
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

/*
	1. hook의 개념
	- 리액트에서는 크게 2가지 종류의 파일이 존재
	-- 컴포넌트 (화면의 가상돔을 렌더링하는 JSX를 무조건 리턴)
	-- hook (JSX를 리턴하는것이 아닌 각 컴포넌트마다 자주 쓰는 기능의 함수나 특정 값을 리턴하는 기능파일)

	2. useState, useEffect, useRef (React에서 제일 많이쓰는 기본 hook) 가 하는일
	- useState: 화면의 렌더링을 담당하는 중요한 정보를 담아주고 변경해주는 기능의 hook (state가 변경되면 컴포넌트는 재호출되면서 화면 재렌더링)
	- useEffect: 컴포넌트의 생성, 변경, 소멸시마다 (컴포넌트의 생명주기마다) 특정 구문을 호출할 수 있는 hook
	- useRef: 참조객체에 실시간으로 특정 정보값을 담기위한 hook (해당 렌더링 사이클에서 최신 가상돔을 담을떄, 특정값을 담아두고 변경을 할 때 컴포넌트를 재렌더링 시키고 싶지 않을때 사용 ( _ex 모션작업할때))

	3. 컴포넌트가 하는역할 (JSX)
	- 자바스크립트로 동적 DOM을 만들때 편의성을 위해 HTML 형식을 따와서 편하게 동적 DOM 생성을 위한 React만의 표현식

	4. fetch문을 useEffect안쪽에서 호출하는 이유
	- 가상돔 생성은 리액트 기반의 스크립트가 처리해주면서 외부데이터를 가져오는 것을 web API (브라우저가 처리) 가 처리하기 때문에
	- 컴포넌트가 실제 브라우저상에 마운트가 되고 브라우저가 작업 준비가 되어야지만 fetch를 실행할 수 있기 때문에
	- useEffect로 컴포넌트가 마운트 되어야지만 CSR방식으로 외부 데이터를 가져올 수 있음.
*/
