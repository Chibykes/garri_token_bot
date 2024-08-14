import "./App.css";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { createContext, useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import Wallet from "./components/Wallet";
import useNavHeight from "./hooks/useNavHeight";
import { AppContextInterface, NaviagtionTypes } from "./types/app";

const AppContext = createContext<AppContextInterface | Record<string, never>>(
  {}
);

function App() {
  const [currentTab, setCurrentTab] = useState<NaviagtionTypes>("home");
  const [totalTokens, setTotalTokens] = useState(0);
  const [farmedTokens, setFarmedTokens] = useState(0);
  const [user, setUser] = useState({
    farmableTokens: 1000,
    farmingDuration: 100, // in seconds
    farmingProfitPerSec: 1,
  });
  const values = {
    currentTab,
    setCurrentTab,
    farmedTokens,
    setFarmedTokens,
    totalTokens,
    setTotalTokens,
    user,
    setUser,
  };

  const height = useNavHeight(0, [currentTab]);

  return (
    <TonConnectUIProvider manifestUrl="https://chibykes.github.io/garri_token_bot/tonconnect-manifest.json">
      <AppContext.Provider value={values}>
        <main
          className="wrapper"
          style={{
            paddingBottom: `calc(1rem + ${height}px)`,
          }}
        >
          {currentTab === "home" && <Dashboard />}
          {currentTab === "tasks" && <Tasks />}
          {currentTab === "pals" && "Refferals coming soon"}
          {currentTab === "wallet" && <Wallet />}
          <Navbar />
          {/* <div className="py-8"></div> */}
        </main>
      </AppContext.Provider>
    </TonConnectUIProvider>
  );
}

export default App;
export { AppContext };
