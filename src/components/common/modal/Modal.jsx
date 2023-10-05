import './Modal.scss';
// forwardRef : forwardRef(JSX반환하는 컴포넌트 함수)
// forwardRef안쪽에서 ref로 연결한 요소를 역으로 부모컴포넌트에 전달 가능 (자식컴포넌트의 JSX요소를 부모로 전달)
// useImperativeHandled : 자식요소의 특정 객체값을 역으로 부모컴포넌트에 전달

const Modal = ({ children, setIsModal }) => {
	return (
		<aside className='modal'>
			<div className='con'>{children}</div>
			<span onClick={() => setIsModal(false)}>close</span>
		</aside>
	);
};
export default Modal;
