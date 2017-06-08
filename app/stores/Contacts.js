import { observable } from 'mobx';

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
  ]
}

export default new Contacts();
