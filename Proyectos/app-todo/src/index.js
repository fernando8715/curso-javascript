
//El import hago referencia al archivo js que esta en la carpeta js
import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// es lo mismo   todoList.todos.forEach( todo => crearTodoHtml (todo) )
todoList.todos.forEach( crearTodoHtml );  









