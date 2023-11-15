import './autentificationForm.scss';
import yLab from './Ylab.png';

import { useEffect, useState } from 'react';
import GetFromBD from '../services/GetFromBD';



const AutentificationForm = () => {

	const [userLogin, setUserLogin] = useState();
	const [userPasword, setUserPasword] = useState();
	console.log(userLogin)
	console.log(userPasword)

	const [user, setUser] = useState();
	// const [loading, setLoading] = useState(true);
	console.log(user)

	const { getUser } = GetFromBD();

	useEffect(() => {
		updateUser();
	}, []);


	const onUser = (newUser) => {
		setUser(newUser);
	}

	const updateUser = () => {
		getUser()
			.then(onUser);
	}


	// kevin@gmail.com
	// m38rmF$

	const verification = (arr) => {
		if (arr === undefined) {
			return
		} else {
			arr.map(item => {
				if (item.email === userLogin) {
					alert('Вы авторизованы');
				}
			});
		}
	}


	return (
		<div className="autentificationForm">
			<div className='autentificationForm__img'>
				<img src={yLab} alt="YLaB" />
			</div>
			<div className="autentificationForm__formBlock">
				<form onSubmit={verification(user)} className="autentificationForm__form">
					<input className="autentificationForm__input" type="text" required placeholder="Логин" onChange={e => setUserLogin(e.target.value)} />
					<input className="autentificationForm__input" type="text" required placeholder="Пароль" onChange={e => setUserPasword(e.target.value)} />
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