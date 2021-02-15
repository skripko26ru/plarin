import axios from 'axios';

export const getUsers = async (page, setUsers, setTotalPages) =>
  await axios
    .get(`https://reqres.in/api/users?page=${page}`)
    .then((res) => {
      console.log('DATA:', res.data);
      setUsers(res.data.data);
      setTotalPages(res.data.total_pages);
    })
    .catch((err) => console.log('ERROR:', err));

export const deleteUser = async (id) =>
  await axios
    .delete(`https://reqres.in/api/users/${id}`)
    .then((res) => console.log('DELETE_USER:', res))
    .catch((err) => console.log('DELETE_USER_ERROR:', err));

export const updateUser = async (id, email, firstName, lastName) =>
  await axios
    .put(`https://reqres.in/api/users/${id}`, {
      email,
      first_name: firstName,
      last_name: lastName,
    })
    .then((res) => console.log('UPDATE_USER:', res))
    .catch((err) => console.log('UPDATE_USER_ERROR:', err));

export const createUser = async (email, firstName, lastName) =>
  await axios
    .post(`https://reqres.in/api/users`, {
      email,
      first_name: firstName,
      last_name: lastName,
    })
    .then((res) => console.log('CREATE_USER:', res))
    .catch((err) => console.log('CREATE_USER_ERROR:', err));
