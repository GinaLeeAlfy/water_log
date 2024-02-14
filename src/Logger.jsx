import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import {
  createUser,
  createWaterLog,
  deleteLog,
  getWaterLogsForTheDay,
} from "./services/api";

const Logger = () => {
  const [consumed, setConsumed] = useState("0");
  const [adding, setAdding] = useState("8");
  const [goal, setGoal] = useState("64");
  const [isMetricUnits, setIsMetricUnits] = useState(false);
  const [logs, setLogs] = useState([]);
  const [percentage, setPercentage] = useState("10");

  const { getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const response = await createUser(accessToken, user);
      const currentDate = new Date();

      const waterLogsFromServer = await getWaterLogsForTheDay(
        accessToken,
        currentDate.toISOString(),
      );
      setConsumed(waterLogsFromServer.amount);
      // setPercentage(
      //   (
      //     Math.ceil(((waterLogsFromServer.amount / goal) * 100) / 5) * 5
      //   ).toString(),
      // );

      setLogs(waterLogsFromServer.logs);
    };
    getMessage();
  }, [getAccessTokenSilently, user]);

  const addWater = async (amount) => {
    const accessToken = await getAccessTokenSilently();
    const currentDate = new Date();
    await createWaterLog(accessToken, {
      amount,
      date: currentDate,
    });
    const waterLogsFromServer = await getWaterLogsForTheDay(
      accessToken,
      currentDate.toISOString(),
    );

    setConsumed(waterLogsFromServer.amount);
    // setPercentage(
    //   Math.ceil(((waterLogsFromServer.amount / goal) * 100) / 5) * 5,
    // );
    setLogs(waterLogsFromServer.logs);
  };

  const deleteEntry = async (id) => {
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
  };

  return (
    <div className="flex min-w-60 flex-col items-center">
      <NavBar />
      <section
        className={`container prose mt-4 flex flex-col items-center border-2 border-blue-950 bg-gradient-to-t from-blue-300  to-blue-50 pt-4 text-center`}
      >
        <h2
          className={
            consumed >= goal
              ? "inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent"
              : ""
          }
        >
          {consumed}
          {" out of "} {goal}
          {!isMetricUnits ? "oz" : "mL"}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addWater(adding);
          }}
          className="flex w-fit items-center space-x-3 border-y-2 border-blue-950 p-1"
        >
          {/* <fieldset className="flex flex-col items-center gap-2">
            <label htmlFor="goal">Set your Goal:</label>
            <div>
              <input
                type="number"
                id="goal"
                defaultValue={goal}
                className="w-10 text-end"
              />
              <select name="goal-measurement" id="goal-measurement">
                <option value="oz">oz</option>
                <option value="ml">ml</option>
              </select>
            </div>
          </fieldset> */}
          <fieldset className="flex items-center gap-2">
            <label htmlFor="drank">Add Water:</label>

            <input
              type="number"
              id="drank"
              min={0.1}
              step={0.1}
              defaultValue={adding}
              required
              onChange={(e) => {
                setAdding(e.target.value);
              }}
              className="w-10 text-end outline-blue-600"
            />
            <p>oz</p>
            {/* <select name="add-measurement" id="add-measurement">
                <option value="oz">oz</option>
                <option value="ml">ml</option>
              </select> */}
          </fieldset>
          <input
            type="submit"
            value="+"
            id="submit"
            className="aspect-square cursor-pointer rounded-full border-2 border-blue-400 bg-blue-400 px-3 pb-1 text-3xl text-white
            hover:bg-white hover:text-blue-400"
          />
        </form>
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
      </section>
    </div>
  );
};

export default Logger;
