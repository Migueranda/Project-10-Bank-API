import { Provider } from "react-redux";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

// import de mon store pour qu'il soit partagé avec tous les composant de mon apps
import { store } from "./utils/redux";

function App() {
  let userStatus = 'sign In'
  return (
    <Provider store={store}>
      <div className="App">
          <Header userStatus = {userStatus}/>
          <main>
            <Hero />
            <Features />
            <Footer />
          </main>
      </div>
    </Provider>
  );
}

export default App;
