function useLocalStorage() {
  const retrieveLocalUser = () => {
    const storagedUser = localStorage.getItem("user");
    return storagedUser ? JSON.parse(storagedUser) : null
  };

  const setLocalUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const clearLocalUser = () => {
    localStorage.removeItem("user");
  };

  return {retrieveLocalUser, setLocalUser, clearLocalUser};
}

export default useLocalStorage;
