import React from 'react';
import './createForm.scss';

const CreateForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  modalCreateUserClosed,
  userCreate,
}) => {
  return (
    <div className="createform">
      <h4>Новый пользователь</h4>
      <input
        className="createform__input"
        placeholder="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="createform__input"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="createform__input"
        placeholder="Электронная почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="updateform__text">Обязательно заполните все поля! </p>
      <button
        type="button"
        className="createform__button createform__button--closed"
        onClick={modalCreateUserClosed}
      >
        X
      </button>
      <button
        type="submit"
        className="createform__button createform__button--save"
        onClick={() => userCreate()}
      >
        Создать
      </button>
    </div>
  );
};

export default CreateForm;
