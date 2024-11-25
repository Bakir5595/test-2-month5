import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        if (!username || !password || !confirmPassword) {
            setErrorMessage('Все поля должны быть заполнены');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Пароли не совпадают');
            return;
        }
        if (isRegistered) {
            setErrorMessage('Такой пользователь уже зарегистрирован');
            return;
        }
        setIsRegistered(true);
        setErrorMessage('');
        alert('Регистрация успешна');
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Зарегистрироваться</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default RegistrationForm;
