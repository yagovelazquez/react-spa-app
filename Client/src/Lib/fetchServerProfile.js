export const updateUserPreferences = async (reqData, url) => {
  const { token, ...body } = reqData;
  const now = new Date().valueOf();
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "Application/json",
      token: token,
    },
  });
  const data = await response.json();

  const waitTime = Math.max(0, -(new Date().valueOf() - now) + 1000);
  await new Promise((resolve) => setTimeout(resolve, waitTime));

  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;
    throw new Error(errorMessage || "Something went wrong");
  }

  return data;
};

export const getUserPreferences = async (url, token) => {

  const response = await fetch(url, {
    method: "GET",
    headers: {
      token: token,
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;
    throw new Error(errorMessage || "Something went wrong");
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return data;
};

