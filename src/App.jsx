import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { About } from "./components/About";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Main />
        <About />
      </main>
      <div></div>
    </>
  );
};

export default App;
