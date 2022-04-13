export const authServerCall = async (userData, url) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      let errorMessage;
      errorMessage = data?.error;

      throw new Error(errorMessage || "Something went wrong");
    }

    const token = response.headers.get("token");

    return { ...data, token }
  };