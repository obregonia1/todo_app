const app = {
  data() {
    return {
      todos: [],
      newTodo: '',
      editedTodo: '',
      edit: ''
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch (e) {
        localStorage.removeItem('todos');
      }
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
  }
}

Vue.createApp(app).mount('#app');


