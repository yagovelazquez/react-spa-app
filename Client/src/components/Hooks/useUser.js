import { useQuery, useQueryClient } from "react-query";
import { queryKeys } from "../../ReactQuery/queryContants";
import useLocalStorage from "./useLocalStorage";
import { clone as _clone } from "lodash";
import { serverUrl } from "../../ReactQuery/queryUrl";

const getUser = async (user, signal) => {
  if (!user) return null;
  if (!user?.token) return null;

  const response = await fetch(`${serverUrl}/user`, {
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

  function updateUser(data, getUserFromCache) {
    if (getUserFromCache) {
      queryClient.setQueryData([queryKeys.user], (oldValue) => {
        const updatedUser = _clone(oldValue);
        for (const key in data) {
          updatedUser[key] = data[key];
        }
        setLocalUser(updatedUser);
        return updatedUser;
      });
      return;
    }
    queryClient.setQueryData(queryKeys.user, data);
    setLocalUser(data);
  }

  function updateStoragedUser(data, getUserFromLocalStorage) {
    if (getUserFromLocalStorage) {
      const updatedUser = retrieveLocalUser();

      for (const key in data) {
        updatedUser[key] = data[key];
      }
      setLocalUser(updatedUser);
      return updatedUser;
    }

    setLocalUser(data);
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries([queryKeys.user]);
  }

  return { user, updateUser, updateStoragedUser, clearUser, isFetching };
}

export default useUser;
