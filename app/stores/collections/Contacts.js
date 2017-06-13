import { observable, action } from 'mobx';

import Api from 'helpers/api';

class Contacts {
  path = 'contacts/';

  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    console.log("fetchAll +");

    this.isLoading = true;

    const response = await Api.get(this.path);
    const status = await response.status;

    if (status === 304) {
      console.log("304");
    }
    if (status === 200) {
      console.log("200");
      this.all = await response.json();

      // comment the following to see the spinner
      this.isLoading = false;
      console.log("this.all: ", this.all);
    }
    console.log("fetchAll -");
  }

  @action async add(data) {
    console.log("add +");

    const response = await Api.post(this.path, data);
    const status = await response.status;

    if (status === 200) {
      console.log("200");
      this.fetchAll();
    }
    if (status === 201) {
      console.log("201");
      this.fetchAll();
    }
    console.log("add -");
  }

  @action find(contactId) {
    return ( this.all.slice().filter(c => c.id == contactId)[0] );
  }

  @action async remove(contactId) {
    this.isLoading = true;

    const response = await Api.delete(`${this.path}/${contactId}`);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      console.log("200");
      this.fetchAll();
    }
    if (status === 201) {
      this.isLoading = false;
      console.log("201");
      this.fetchAll();
    }
  }
}

export default new Contacts();

/*
{
  "id": 1,
  "first_name": "Chris",
  "last_name": "Wei",
  "email": "yunzhi.wei@live.io"
},
{
  "id": 2,
  "first_name": "Clare",
  "last_name": "Huang",
  "email": "wulang@hotmail.io"
},
{
  "id": 3,
  "first_name": "Jolin",
  "last_name": "Wei",
  "email": "jollin@qq.io"
}
*/
