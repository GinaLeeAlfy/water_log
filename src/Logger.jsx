import { useState } from "react";
import NavBar from "./components/NavBar";

const Logger = () => {
  const [consumed, setConsumed] = useState(0);
  const [goal, setGoal] = useState(64);
  const [isMetricUnits, setIsMetricUnits] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <section className="container flex flex-col items-center border-2 border-green-700 text-center">
        <h2>
          {consumed}
          {" out of "} {goal}
          {!isMetricUnits ? "oz" : "mL"}
        </h2>
        <form className="w-fit space-y-3 rounded border-2 border-blue-400 p-4">
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
          <fieldset className="flex flex-col items-center gap-2">
            <label htmlFor="drank">Add Water:</label>
            <div>
              <input type="number" id="drank" className="w-10 text-end" />
              <select name="add-measurement" id="add-measurement">
                <option value="oz">oz</option>
                <option value="ml">ml</option>
              </select>
            </div>
          </fieldset>
          <input
            type="submit"
            value="+"
            id="submit"
            className="aspect-square cursor-pointer  rounded-full bg-blue-400 px-3 text-3xl"
          />
        </form>
      </section>
    </div>
  );
};

export default Logger;
