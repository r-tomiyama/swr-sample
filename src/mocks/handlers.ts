import { http, HttpResponse } from 'msw';


export const handlers = [
  http.get('/api/todos', () => {
    return HttpResponse.json({
      todos,
    });
  }),
  http.post('/api/todos', async (obj) => {
    await obj.request.body?.getReader().read().then(({ value }) => {
      const result = new TextDecoder().decode(value);
      const { todo } = JSON.parse(result);
      todos.push(todo);
    });

    return HttpResponse.json({ todos });
  }),
];

const todos = ["Buy milk", "Walk the dog", "Do laundry"];
