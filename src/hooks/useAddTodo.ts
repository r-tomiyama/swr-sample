import { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";

const fetcher = (url: string, body: object) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
}).then((res) => res.json())

export const useAddTodo = () => {
  // const { mutate } = useSWRConfig();

  return useSWRMutation('/api/todos', async (url, { arg: { todo } }: { arg: { todo: string } }) => {
    await fetcher(url, { todo });

    // await mutate('/api/todos');
    // 呼ばなくても良い
  });
};
