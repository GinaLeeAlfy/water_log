import NavBar from "./components/NavBar";

const Logger = () => {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col items-center text-center">
        <form className="w-fit space-y-3">
          <fieldset className="flex flex-col items-center gap-2">
            <label htmlFor="goal">Set your Goal:</label>
            <input
              type="number"
              id="goal"
              defaultValue="64"
              className="w-10 text-end"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="drank">Add:</label>
            <input type="number" id="drank" className="w-10 text-end" />
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Logger;
