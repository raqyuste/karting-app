const headers = {
  "Content-Type": "application/json",
};

const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  return await response.json();
};

export default {
  get,
};
