import http from "./http";

const getPilots = async () => {
  const response = await http.get("/api/pilots/");

  return response;
};

const getPilotById = async (id) => {
  const response = await http.get(`/api/pilots/${id}`);

  return response;
};

export default {
  getPilots,
  getPilotById,
};
