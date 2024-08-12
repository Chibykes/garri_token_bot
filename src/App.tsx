import "./App.css";

import { createContext, useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { AppContextInterface, NaviagtionTypes } from "./types/app";
import Tasks from "./components/Tasks";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Wallet from "./components/Wallet";

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

  return (
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
      <AppContext.Provider value={values}>
        <main className="wrapper">
          {currentTab === "home" && <Dashboard />}
          {currentTab === "tasks" && <Tasks />}
          {currentTab === "pals" && "Refferals"}
          {currentTab === "wallet" && <Wallet />}
          <Navbar />
        </main>
      </AppContext.Provider>
    </TonConnectUIProvider>
  );
}

export default App;
export { AppContext };
