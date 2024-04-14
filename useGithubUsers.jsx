import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUsers() {
  const { data, error, mutate } = useSWR(`https://api.github.com/users`, fetcher);

  function handleRefreshUsers () {
    mutate()
  }

  return{
      users: data,
      error,
      isLoading: !data && !error,
      onRefresh: handleRefreshUsers,
  }
   
  
}

export default useGithubUsers;
