import { observable, action } from 'mobx';

class Contacts {
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    console.log("fetchAll +");

    this.isLoading = false;
    const response = await fetch('http://localhost:3000/contacts');
    const status = await response.status;

    if (status === 200) {
      this.all = await response.json();
      console.log("this.all: ", this.all);
    }
    console.log("fetchAll -");
  }

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
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
