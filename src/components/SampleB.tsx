import { useState } from 'react';
import useSWR from 'swr';
import useSWRMutation from "swr/mutation";

export function SampleB() {
  const { data } = useTodos()
  const { trigger } = useAddTodo();
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="card">
      <h2>useSWRとuseSWRMutationでキャッシュキーが一致しないパターン</h2>
      <ul>
        {data?.todos.map((todo: string, i: number) => (
            <li key={i}>{todo}</li>
        ))}
      </ul>

      <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      <button onClick={() => trigger({todo })}>create</button>
    </div>
  )
}

function useTodos() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR('/api/todos', fetcher)

  return {
    data,
    isLoading,
    isError: error
  }
}

const useAddTodo = () => {
  const fetcher = (url: string, body: object) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => res.json());

  return useSWRMutation('/api/todos-dummy', async (url, { arg: { todo } }: { arg: { todo: string } }) => {
    await fetcher(url, { todo });
  });
};
