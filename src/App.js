import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { TableWrapper } from "./Components/TableWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
      <section className="card users-container">
        <Search />
        <TableWrapper />
      </section>
      </main>
    </div>
  );
}

export default App;
