import { observable, action } from 'mobx';
import { browserHistory } from 'react-router';

import Api from 'helpers/api';

class User {
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

  @action signInFromStorage() {
    console.log('signInFromStorage +');
    this.email = localStorage.getItem('email');
    this.signedIn = true;
    this.isLoading = false;
    console.log('signInFromStorage -', this.email);
  }

  async createSession(email, password) {
    console.log("createSession +");

    this.setIsLoading(true);

    const response = await Api.get(
      'sessions',
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
