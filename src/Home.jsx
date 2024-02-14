import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section className="prose flex flex-col text-center">
        <p>On average people should drink about 64oz of water a day.</p>
        <p>Start logging your water for your wellness.</p>
      </section>
    </div>
  );
};

export default Home;
