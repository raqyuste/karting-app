const headers = {
  "Content-Type": "application/json",
};

const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export default {
  get,
};
