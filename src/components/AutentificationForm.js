import './autentificationForm.scss';
import yLab from './Ylab.png';

import { useState } from 'react';

const AutentificationForm = () => {

	const [userLogin, setUserLogin] = useState();
	const [userPasword, setUserPasword] = useState();

	const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
	console.log(regex.test(userLogin));

	// Валидация


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
					<input className="autentificationForm__input" type="text" required placeholder="Логин" onChange={e => setUserLogin(e.target.value)} />
					<input className="autentificationForm__input" type="text" required placeholder="Пароль" onChange={e => setUserPasword(e.target.value)} />
					<div className='autentificationForm__checkBoxBlock'>
						<input className='larger' required id="Checkbox" type="checkbox"  />
						<label className='autentificationForm__input label' id="Checkbox">Я согласен с условиями ресурса</label>
					</div>
					<button className='button'>Войти</button>
				</form>
			</div>
		</div>

	)
}


export default AutentificationForm;