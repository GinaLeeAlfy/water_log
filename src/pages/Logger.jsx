import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import LogEntries from "../components/LogEntries";
import Spinner from "../components/Spinner";
import {
  createUser,
  createWaterLog,
  getWaterLogsForTheDay,
} from "../services/api";

const Logger = () => {
  const [consumed, setConsumed] = useState("0");
  const [adding, setAdding] = useState("8");
  const [goal, setGoal] = useState("64");
  const [isMetricUnits, setIsMetricUnits] = useState(false);
  const [logs, setLogs] = useState([]);
  // const [percentage, setPercentage] = useState("10");
  const [userId, setUserID] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isChanging, setIsChanging] = useState(false);

  const { getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    const getMessage = async () => {
      setIsLoading(true);
      const accessToken = await getAccessTokenSilently();
      const response = await createUser(accessToken, user);
      const currentDate = new Date();
      const waterLogsFromServer = await getWaterLogsForTheDay(
        accessToken,
        currentDate.toISOString(),
      );
      setUserID(response.id);
      setConsumed(waterLogsFromServer.amount);
      // setPercentage(
      //   (
      //     Math.ceil(((waterLogsFromServer.amount / goal) * 100) / 5) * 5
      //   ).toString(),
      // );

      setLogs(waterLogsFromServer.logs);
      setIsLoading(false);
    };
    getMessage();
  }, [getAccessTokenSilently, user]);

  if (isLoading) {
    return (
      <div className="flex min-w-60 flex-col items-center">
        <NavBar />
        <Spinner />
      </div>
    );
  }

  const addWater = async (amount) => {
    setIsChanging(true);
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
    setIsChanging(false);
  };

  return (
    <div className="flex min-w-60 flex-col items-center">
      <NavBar userId={userId} />
      <section
        className={`container prose mt-4 flex flex-col items-center border-2 border-blue-950 bg-gradient-to-t from-blue-300  to-blue-50 pt-4 text-center`}
      >
        <h2
          className={
            Number(consumed) >= Number(goal)
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
              className=" w-16 p-1 text-end outline-blue-600"
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
        <LogEntries
          setConsumed={setConsumed}
          getAccessTokenSilently={getAccessTokenSilently}
          setLogs={setLogs}
          logs={logs}
          setIsChanging={setIsChanging}
        />
      </section>
      {isChanging ? <Spinner /> : null}
    </div>
  );
};

export default Logger;
