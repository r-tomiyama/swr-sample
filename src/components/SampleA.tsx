import { useState } from 'react';
import { useTodos } from '../hooks/useTodos'
import { useAddTodo } from '../hooks/useAddTodo'

export function SampleA() {
  const { data, isLoading, isError } = useTodos()
  const { trigger } = useAddTodo();
  const [todo, setTodo] = useState<string>("");
    
  if (isLoading) {
    return <p>Loading...</p>
  }
    
  if (isError) {
    return <p>Error fetching data</p>
  }

  return (
    <div className="card">
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
