export const authServerCall = async (userData, url) => {
  const now = new Date().valueOf();
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
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

  const token = response.headers.get("token");

  return { ...data, token };
};

export const recoveryServerCall = async (reqData, url) => {
  const now = new Date().valueOf();
  let method = "POST";
  let headers = {
    "Content-Type": "application/json",
  };
  let body = {};
  body = reqData.email;

  if (reqData.token) {
    method = "PUT";
    headers.token = reqData.token;
    body = { password: reqData.password };
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
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

export const generalPostCall = async (reqData, url) => {


 
  const { token, ...restReqData } = reqData;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(restReqData),
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;

    throw new Error(errorMessage || "Something went wrong");
  }

  return data;
};

export const getGeneralCall = async (url, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });

  const data = await response.json();
  if (!response.ok) {
    let errorMessage;
    errorMessage = data?.error;

    throw new Error(errorMessage || "Something went wrong");
  }

  return data;
};
