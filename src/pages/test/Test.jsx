import React, { useEffect, useState } from 'react';
import ModalBase from '../../components/modals/modal_base/ModalBase';
import UpdateForm from '../../components/forms/update_form/UpdateForm';
import CreateForm from '../../components/forms/create_form/CreateForm';
import { getUsers, deleteUser, updateUser, createUser } from '../../functions/axios';
import './test.scss';

const Test = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeUser, setActiveUser] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [modalCreateUser, setModalCreateUser] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUsers(1, setUsers, setTotalPages);
  }, []);

  const setActive = (id) => {
    setModalActive(true);
    setActiveUser(id);
  };

  const modalClosed = () => {
    setModalActive(false);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const modalCreateUserClosed = () => {
    setModalCreateUser(false);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const userDelete = (id) => {
    deleteUser(id);
    modalClosed();
  };

  const userUpdate = (id) => {
    if (firstName && lastName && email) updateUser(id, email, firstName, lastName);
    modalClosed();
  };

  const userCreate = () => {
    if (firstName && lastName && email) createUser(email, firstName, lastName);
    modalCreateUserClosed();
  };

  const loadPage = (page, setUsers, setTotalPages) => {
    setCurrentPage(page);
    getUsers(page, setUsers, setTotalPages);
  };

  const numToArr = (num) => {
    let arr = [];
    let i = 1;

    while (i <= num) {
      arr.push(i);
      i++;
    }
    return arr;
  };

  return (
    <div className="test">
      <div className="test__row">
        {users &&
          users.map((user) => (
            <div
              className="test__item"
              key={user.id}
              data-id={user.id}
              onClick={() => setActive(user.id)}
            >
              {`${user.first_name} ${user.last_name}`}
            </div>
          ))}
        {users && (
          <div className="test__item--add" onClick={() => setModalCreateUser(true)}>
            +
          </div>
        )}

        <ModalBase active={modalActive} setActive={setModalActive}>
          {users &&
            users.map((i) => {
              if (i.id === activeUser) {
                return (
                  <UpdateForm
                    key={i.id}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    email={email}
                    setEmail={setEmail}
                    currentAvatar={i.avatar}
                    currentFirstName={i.first_name}
                    currentLastName={i.last_name}
                    currentEmail={i.email}
                    currentId={i.id}
                    modalClosed={modalClosed}
                    userDelete={userDelete}
                    userUpdate={userUpdate}
                  />
                );
              }
              return '';
            })}
        </ModalBase>

        <ModalBase active={modalCreateUser} setActive={setModalCreateUser}>
          <CreateForm
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            modalCreateUserClosed={modalCreateUserClosed}
            userCreate={userCreate}
          />
        </ModalBase>
      </div>
      <div className="test__pagination">
        {numToArr(totalPages).map((p) => (
          <span
            className={p === currentPage ? 'test__page--active test__page' : 'test__page'}
            onClick={() => loadPage(p, setUsers, setTotalPages)}
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Test;
