/*
	1. 해당페이지를 어떤식으로 작업했고 어떤 이슈가 있었는지 설명?
*/

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
			.then((data) => data.json()) // fetch문에 대한 응답 성공시 실행되는 구문
			.catch((err) => console.log(err)) // fetch문에 대한 응답 실패시 실행되는 구문
			.then((json) => {
				setDepartment(json.members); // json 데이터 변환에 대한 응답 성공시 실행되는 구문
			})
			.catch((err) => console.log(err)); // json 데이터 변환에 대한 응답 실패시 실행되는 구문
	}, []);

	return (
		<Layout title={'Member'}>
			<div className='memberBox'>
				{Department.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
								{/* <p>{member.position}</p> */}
							</div>
							<h3>{member.name}</h3>
						</article>
					);
				})}
			</div>

			<div className='box'>
				<div>
					<h2>Support!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio doloremque libero
						voluptatum animi officiis! Placeat eius eveniet a dolore!
					</p>
					<a href='#/Department'>More</a>
				</div>
				<div>
					<h2>Develop!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio doloremque libero
						voluptatum animi officiis! Placeat eius eveniet a dolore!
					</p>
					<a href='#/Department'>More</a>
				</div>
				<div>
					<h2>Research!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio doloremque libero
						voluptatum animi officiis! Placeat eius eveniet a dolore!
					</p>
					<a href='#/Department'>More</a>
				</div>
			</div>

			<div className='con'>
				<div className='start'>
					<h4>Start!</h4>
					<p>
						Our <span>Our experience</span> is your success
					</p>
					<a href='#/Department'>Who we are?</a>
				</div>
				<div className='hello'>
					<h5>Hello!</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea quo perspiciatis
						maiores consectetur ex eveniet asperiores sunt magnam explicabo totam fuga laboriosam
						placeat, recusandae unde eius obcaecati a, at quia? Esse officiis similique quos iste
						rem eligendi assumenda neque asperiores minima quisquam dicta temporibus, doloremque
						quia facilis, provident cum!
						<br />
						<br />
						Lorem ipsum <span>dolor sit amet consectetur</span>, adipisicing elit. Unde cumque
						praesentium modi nihil facilis provident fuga illum ratione ex voluptas explicabo totam
						temporibus, aperiam tenetur autem amet libero saepe minima.
					</p>
					<a href='#/Department'>Why us?</a>
				</div>
			</div>
		</Layout>
	);
}

/*
	답변
	- 정적인 데이터라서 굳이 fetch를 통해서 데이터를 가져오지않고 static하게 컨텐츠를 집어넣을까 고민도 했지만 데이터기반으로 모든 화면단이 동적으로 생성되게 하고 싶어서 fetch를 통해서 데이터가 변경되더라도 자동으로 화면이 갱신되도록 작업을 했다.
*/
