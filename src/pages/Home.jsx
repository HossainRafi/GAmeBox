import GenreList from "../components/GenreList";

function Home() {
  return (
    <div className="grid grid-cols-4 p-8">
      <div className="hidden md:flex">
        <GenreList />
      </div>
      <div className="md:col-span-3 col-span-4 px-3">Game List</div>
    </div>
  );
}

export default Home;
