import { observable, action } from 'mobx';

import Api from 'helpers/api';

class Contacts {
  path = 'contacts/';

  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    console.log("fetchAll +");

    this.isLoading = false;
    const response = await Api.get(this.path);
    const status = await response.status;

    if (status === 304) {
      console.log("304");
    }
    if (status === 200) {
      console.log("200");
      this.all = await response.json();
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
  id: 1,
  name: 'Chris Wei',
  email: 'yunzhi.wei@live.com'
},
{
  id: 2,
  name: 'Clare Huang',
  email: 'wulang@hotmail.com'
},
{
  id: 3,
  name: 'Jolin Wei',
  email: 'jollin@qq.com'
},
*/
