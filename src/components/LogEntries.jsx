import { useState } from "react";
import { deleteLog, getWaterLogsForTheDay } from "../services/api";

const LogEntries = ({
  setConsumed,
  setLogs,
  logs,
  getAccessTokenSilently,
  setIsChanging,
}) => {
  const deleteEntry = async (id) => {
    setIsChanging(true);
    const accessToken = await getAccessTokenSilently();
    await deleteLog(accessToken, id);
    const currentDate = new Date();
    const waterLogsFromServer = await getWaterLogsForTheDay(
      accessToken,
      currentDate.toISOString(),
    );
    setConsumed(waterLogsFromServer.amount);
    // setPercentage(
    //   Math.ceil(((waterLogsFromServer.amount / goal) * 100) / 5) * 5,
    // );
    setLogs(waterLogsFromServer.logs);
    setIsChanging(false);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <h3>Today&apos;s Entries</h3>
      <div className="flex w-full flex-col items-center divide-y-2 divide-blue-950">
        {!logs.length ? (
          <p>No entries yet</p>
        ) : (
          logs.map((log) => (
            <div
              className="align-items-center grid w-full grid-cols-3 justify-items-center gap-12 py-2"
              key={log.id}
            >
              <div></div>
              <p className="not-prose">
                <span className="font-bold">{log.amount} </span>oz
              </p>
              <button
                className="mr-2 aspect-square justify-self-end rounded-full border-2 border-current bg-white px-3 text-red-600 hover:text-blue-600"
                onClick={() => {
                  deleteEntry(log.id);
                }}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LogEntries;
