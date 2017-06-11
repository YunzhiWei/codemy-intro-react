import { observable, action } from 'mobx';
import { browserHistory } from 'react-router';

import Api from 'helpers/api';

class User {
  sessions = 'sessions';

  @observable isLoading = false;
  @observable signedIn = false;
  @observable email = null;

  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action setSignedIn(status, email) {
    this.signedIn = status;
    if (status && email) {
      this.email = email;
    }
  }

  signIn(email = null, password = null) {
    console.log('signIn +');

    const store = {
      authentication_token: localStorage.getItem('token'),
      email: localStorage.getItem('email')
    }

    console.log("localStorage: ", store);

    if (store.email && store.authentication_token) {
      this.signInFromStorage();
    }
    else if (email && password) {
      this.createSession(email, password);
    }
    else {
      console.log("no localStorage, no email & password");
    }

    console.log('signIn -');
  }

  @action async signInFromStorage() {
    console.log('signInFromStorage +');

    const session = {
      email: localStorage.getItem('email'),
      authentication_token: localStorage.getItem('token')
    }

    // server side must be able to response accordingly
    const response = await Api.get(this.sessions);
    const status = await response.status;
    if (status === 200) {
      console.log('response OK');
      this.email = localStorage.getItem('email');
      this.signedIn = true;
      this.isLoading = false;
    }
    // else we will never go into the web application
    else {
      console.log('response fail');
      browserHistory.push('users/sign_in');
    }

    console.log('signInFromStorage -', this.email);
  }

  async createSession(email, password) {
    // this function may need to be modified based on your server side code


    console.log("createSession +");

    this.setIsLoading(true);

    const response = await Api.get(
      this.sessions,
      {email, password}
    );

    const status = await response.status;

    if (status == 201) {
      console.log("201");
      const body = await response.json();
      const { user } = body.data;

      localStorage.setItem('token', user.authentication_token);
      localStorage.setItem('email', user.email);

      this.setIsLoading(false);
      this.setSignedIn(true);

      browserHistory.push('/');
    }
    else {
      console.log("error");
    }

    console.log("createSession -");

    localStorage.setItem('token', "authentication_token");
    localStorage.setItem('email', "chris@live.com");
    this.setSignedIn(true, "chris@live.com");
    this.setIsLoading(false);
    browserHistory.push('/');
  }
}

export default new User();
