import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { TableWrapper } from "./Components/Table/TableWrapper";
import { Pagination } from './Components/Pagination/Pagination';
import { Footer } from './Components/Footer/Footer';
import { useEffect, useState } from "react";
import { getAll } from "./services/userService";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll()
    .then(result => setUsers(Object.values(result.users)));
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="main">
      <section className="card users-container">
        <Search />
        <TableWrapper users={users}/>
        <Pagination />
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
