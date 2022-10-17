import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { TableWrapper } from "./Components/Table/TableWrapper";
import { Pagination } from './Components/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
      <section className="card users-container">
        <Search />
        <TableWrapper />
        <Pagination />
      </section>
      </main>
    </div>
  );
}

export default App;
