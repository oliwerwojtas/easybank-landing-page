import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Main />
        <About />
        <Articles />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
