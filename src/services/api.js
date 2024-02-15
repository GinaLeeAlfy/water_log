const templateUrl = (path) => {
  return `https://api.water.zeroleestudios.com/api/${path}`;
};

export const createUser = async (accessToken, user) => {
  const response = await fetch(templateUrl("users"), {
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
  const response = await fetch(templateUrl("water_logs"), {
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
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const response = await fetch(templateUrl(`water_logs/${date}`), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      timezone: timeZone,
    },
  });
  return response.json();
};

export const deleteLog = async (accessToken, id) => {
  const response = await fetch(templateUrl(`water_logs/${id}`), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const deleteUser = async (accessToken, id) => {
  const response = await fetch(templateUrl(`users/${id}`), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
