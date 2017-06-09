import { observable, action } from 'mobx';

class Contacts {
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    console.log("fetchAll +");

    this.isLoading = false;
    const response = await fetch('http://localhost:3000/contacts');
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

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }

    this.isLoading = false;
    const request = new Request('http://localhost:3000/contacts', options);
    const response = await fetch(request);
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

  @action remove(contactId) {
    const existing = this.all;
    this.all = existing.filter(c => c.id != contactId);
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
