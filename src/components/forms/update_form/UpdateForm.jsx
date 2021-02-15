import React from 'react';
import './updateForm.scss';

const UpdateForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  currentAvatar,
  currentFirstName,
  currentLastName,
  currentEmail,
  currentId,
  modalClosed,
  userDelete,
  userUpdate,
}) => {
  return (
    <div className="updateform">
      <img className="updateform__img" src={currentAvatar} alt="img" />
      <input
        className="updateform__input"
        placeholder={currentFirstName}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="updateform__input"
        placeholder={currentLastName}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="updateform__input"
        placeholder={currentEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="updateform__text">При изменении данных, заполнить все поля! </p>
      <button
        type="button"
        className="updateform__button updateform__button--closed"
        onClick={modalClosed}
      >
        X
      </button>
      <button
        type="submit"
        className="updateform__button updateform__button--delete"
        onClick={() => userDelete(currentId)}
      >
        Удалить
      </button>
      <button
        type="submit"
        className="updateform__button updateform__button--save"
        onClick={() => userUpdate(currentId)}
      >
        Сохранить
      </button>
    </div>
  );
};

export default UpdateForm;
