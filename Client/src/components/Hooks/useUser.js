import { useQuery, useQueryClient } from "react-query";
import { queryKeys } from "../../ReactQuery/queryContants";
import useLocalStorage from "./useLocalStorage";

const getUser = async (user, signal) => {
  if (!user) return null;
  if (!user?.token) return null;

  const response = await fetch("http://localhost:3003/user/", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      token: user.token,
    },
    signal,
  });

  let data = await response.json();

  if (!response.ok) {
    const errorMessage = data?.error;

    throw new Error(errorMessage || "Something went wrong");
  }

  return { ...data, token: user.token };
};

function useUser() {
  const { retrieveLocalUser, setLocalUser, clearLocalUser } = useLocalStorage();

  const queryClient = useQueryClient();
  const { data: user, isFetching } = useQuery(
    queryKeys.user,
    ({ signal }) => {
      return getUser(user, signal);
    },
    {
      initialData: retrieveLocalUser(),
      onError: () => {
        queryClient.setQueryData(queryKeys.user, null);
        clearLocalUser();
      },
      onSuccess: (received) => {
        if (!received) {
          clearLocalUser();
        } else {
          setLocalUser(received);
        }
      },
    }
  );

  function updateUser(newUser) {
    queryClient.setQueryData(queryKeys.user, newUser);
    setLocalUser(newUser);
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries([queryKeys.user]);
  }

  return { user, updateUser, clearUser, isFetching };
}

export default useUser;
