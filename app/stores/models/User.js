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
      this.signInFromStorage(store.email);
    }
    else if (email && password) {
      this.createSession(email, password);
    }
    else {
      console.log("no localStorage, no email & password");
      this.signOut();
    }

    console.log('signIn -');
  }

  @action async signInFromStorage(email) {
    console.log('signInFromStorage +');

    // server side must be able to response accordingly
    // else we will never sign in correctly in web application
    const response = await Api.get(this.sessions);
    const status = await response.status;
    if (status === 200) {
      console.log('response OK');
      this.email = email;
      this.setSignedIn(true);
      this.setIsLoading(false);
    }
    else {
      console.log('response fail');

      this.signOut();
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

  async destroySession() {
    this.setIsLoading(true);

    const response = await Api.delete(this.sessions);
    const status = await response.status;

    // server side must function accordingly
    // use 'true' to make sure that user will log out
    if(true || status === 200) {
      this.setIsLoading(false);
      this.signOut();
    }
  }

  @action signOut() {
    console.log("signOut +");

    localStorage.removeItem('email');
    localStorage.removeItem('token');

    this.email = null;
    this.setSignedIn(false);
    this.setIsLoading(false);

    // I don't think we need ask the user to go to sign in page at this moment
    // browserHistory.push('users/sign_in');

    console.log("signOut -");
  }
}

export default new User();
