import { Header } from "./Components/Header";
import { Search } from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
      <section className="card users-container">
        <Search />
      </section>
      </main>
    </div>
  );
}

export default App;
