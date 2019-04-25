import axios from 'axios';
import React, { Component } from 'react';
import Profile from './common/profile';
import { toast } from 'react-toastify';
axios.interceptors.response.use(null, error => {
  console.log('ex:::', error);
  toast('Something went wrong!!!');
  return Promise.reject(error);
});
class Customer extends Component {
  state = {
    data: {
      users: []
    },
    errors: {}
  };

  // alternate free APIend point
  // 'http://jsonplaceholder.typicode.com/users'
  apiEndpoint = 'https://randomuser.me/api/';

  async componentDidMount() {
    const response = await axios.get(this.apiEndpoint + '?results=10');
    console.log(response.data.results[0]);
    const data = { ...this.state.data };
    let users = [...data.users];
    users = response.data.results;
    data.users = users;
    console.log('data: ', data);
    this.setState({ data });
    // console.log('state: ', this.state.data);
    // console.log(this.state.data.users);
  }

  handleAddUser = async () => {
    const user = {
      email: 'vishwas@v.com',
      name: {
        first: 'Vishwas'
      },
      login: { username: 'vishwas' },
      picture: {
        large: 'https://avatars3.githubusercontent.com/u/15245283?s=460&v=4'
      }
    };
    const { data: userAdded } = await axios.post(
      'http://jsonplaceholder.typicode.com/users',
      user
    );
    console.log('data post:::', userAdded);
    const users = [...this.state.data.users];
    users.unshift(userAdded);
    const data = { ...this.state.data };
    data.users = users;
    this.setState({ data });
  };

  handleDeleteUser = async user => {
    const orgData = this.state.data;
    console.log('user deleted ', user);

    // delete from UI first .. folowing optimistic approach
    // filter out
    const users = this.state.data.users.filter(
      usr => usr.login.username !== user.login.username
    );
    //setstate to update UI
    const data = { ...this.state };
    data.users = users;
    this.setState({ data });

    //now send request if it fails thus wrap it under try catch
    try {
      const result = await axios.delete(
        // below url is kept intentionally wrong
        `http://jsnplaceholder.typicode.com/users/${user.username}`
      );
      console.log('result', result);
    } catch (ex) {
      this.setState({ data: orgData });
    }
  };
  render() {
    return (
      <div className='container'>
        <button className='btn btn-primary' onClick={this.handleAddUser}>
          Add new customer
        </button>
        <hr />
        {this.state.data.users.map(user => (
          <Profile
            key={user.login.username}
            user={user}
            onDeleteUser={() => this.handleDeleteUser(user)}
          />
        ))}
      </div>
    );
  }
}

export default Customer;
