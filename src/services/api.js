export const createUser = async (accessToken, user) => {
  const response = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      name: user.name,
    }),
  });
  return response.json();
};

export const createWaterLog = async (accessToken, waterLog) => {
  console.log(waterLog);
  const response = await fetch("http://localhost:8000/water_logs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: waterLog.amount,
      date: waterLog.date,
    }),
  });
  return response.json();
};

export const getWaterLogsForTheDay = async (accessToken, date) => {
  const response = await fetch(`http://localhost:8000/water_logs/${date}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
};

export const deleteLog = async (accessToken, id) => {
  const response = await fetch(`http://localhost:8000/water_logs/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
