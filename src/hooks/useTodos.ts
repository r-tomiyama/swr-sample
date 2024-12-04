import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useTodos() {
  const { data, error, isLoading } = useSWR('/api/todos', fetcher)

  return {
    data,
    isLoading,
    isError: error
  }
}
