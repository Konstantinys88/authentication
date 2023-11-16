import './autentificationForm.scss';
import yLab from './Ylab.png';

import { useState } from 'react';

const AutentificationForm = () => {

	const [userLogin, setUserLogin] = useState('');
	const [userPasword, setUserPasword] = useState('');


	//Валидация
	const regex = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
	let userLoginvalidate = regex.test(userLogin);
	let validateStyle = { 'color': 'rgb(133, 128, 128)' }
	if (!userLoginvalidate) {
		validateStyle = { 'color': 'red' }
	}

	const getInputValueLogin = (e) => {
		if (e.target.value.charAt(0) === ' ') {
			e.target.value = '';
		} else {
			setUserLogin(e.target.value.trim())
		}
	}

	const getInputValuePasword = (e) => {
		if (e.target.value.charAt(0) === ' ') {
			e.target.value = '';
		} else {
			setUserPasword(e.target.value.trim())
		}
	}

	/**
	* Имитация отправки данных на сервер (https://jsonplaceholder.typicode.com/)
	*/
	const postData = (e) => {
		e.preventDefault();
		e.target.reset();

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				email: userLogin,
				password: userPasword,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	}


	return (
		<div className="autentificationForm">
			<div className='autentificationForm__img'>
				<img src={yLab} alt="YLaB" />
			</div>
			<div className="autentificationForm__formBlock">
				<form onSubmit={postData} className="autentificationForm__form" >
					<input className="autentificationForm__input" style={validateStyle} type="text" required placeholder="Введите ваш логин (email)" onChange={getInputValueLogin} />
					<input className="autentificationForm__input" type="text" required placeholder="Введите ваш пароль" onChange={getInputValuePasword} />
					<div className='autentificationForm__checkBoxBlock'>
						<input className='larger' required id="Checkbox" type="checkbox" />
						<label className='autentificationForm__input label' id="Checkbox">Я согласен с условиями ресурса</label>
					</div>
					<button className='button'>Войти</button>
				</form>
			</div>
		</div>
	)
}


export default AutentificationForm;