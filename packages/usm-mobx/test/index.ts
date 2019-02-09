import { autorun } from 'mobx';
import Module, { action, state } from '../src';

class TodoList extends Module {  
  @state list = [{todo: "Learn Typescript"}]

  @action
  add(todo: object, state?: any) {
    state.list.push(todo);
  }

  async moduleDidInitialize() {
    console.log('moduleDidInitialize');
    this.add({todo: 'Learn C++'});
  }
}


class Index extends Module{}
const todoList = new TodoList({
  modules: [],
});

const index = Index.create({
  modules: [todoList]
});

autorun(function() {
  console.log(index._modules.todoList.list.length, todoList.ready);
});