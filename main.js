const app = {
  data() {
    return {
      todos: [],
      newTodo: '',
      editedTodo: '',
      editIndex: ''
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return;
      }
      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.saveTodos();
    },
    saveTodos() {
      let parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    },
    removeTodo(n) {
      this.todos.splice(n, 1);
      this.saveTodos();
    },
    editTodo(todo, n) {
      this.editIndex = n;
      this.editedTodo = todo;
    },
    updateTodo(n) {
      this.todos[n] = this.editedTodo;
      this.saveTodos();
      this.editedTodo = '';
      this.editIndex = '';
    }
  }
}

Vue.createApp(app).mount('#app');
