function useLocalStorage() {
  const retrieveLocalUser =  () => {
    const storagedUser = localStorage.getItem("user");
    const parsedUser =  JSON.parse(storagedUser) 
    return storagedUser ? parsedUser : null
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
