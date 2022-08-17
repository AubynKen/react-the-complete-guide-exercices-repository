class Todo {
  title: string;
  id: string;

  constructor(title: string) {
    this.title = title;
    this.id = new Date().toLocaleTimeString() + Math.random().toString();
  }
}

export default Todo;