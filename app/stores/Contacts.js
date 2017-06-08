import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
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
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(contactId) {
    return ( this.all.slice().filter(c => c.id == contactId)[0] );
  }
}

export default new Contacts();
