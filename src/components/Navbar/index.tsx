import React, { useContext, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AppContext } from "../../App";
import styles from "./index.module.css";

export interface CSSVaribles extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

function Navbar() {
  const [farmingStatus, setFarmingStatus] = useState<
    "not started" | "running" | "completed"
  >("not started");
  const {
    user,
    currentTab,
    setCurrentTab,
    setTotalTokens,
    farmedTokens,
    setFarmedTokens,
  } = useContext(AppContext);
  const [farmingProgress, setFarmingProgress] = useState(0);

  const FARMING_INTERVAL_TIMEOUT = 1000;
  const PROGRESS_INTERVAL_TIMEOUT = 10;

  const startFarming = () => {
    const tokensPerSecond = user.farmableTokens / user.farmingDuration;
    const tokensPerMs = tokensPerSecond / 1000;
    const tokensPerFarmingInterval = tokensPerMs * FARMING_INTERVAL_TIMEOUT;
    const tokensPerProgressInterval = tokensPerMs * PROGRESS_INTERVAL_TIMEOUT;

    let mutableFarmedTokens = farmedTokens;
    setFarmingStatus("running");

    // Farming Simulation
    const farmingInterval = setInterval(() => {
      if (mutableFarmedTokens >= user.farmableTokens) {
        clearInterval(farmingInterval);
        setFarmingStatus("completed");
        return;
      }

      const generatedTokens = Number(
        (mutableFarmedTokens + tokensPerFarmingInterval).toFixed(2)
      );

      mutableFarmedTokens = generatedTokens;
      setFarmedTokens(generatedTokens);
    }, FARMING_INTERVAL_TIMEOUT);

    // Farming progress animation
    const progressInterval = setInterval(() => {
      if (mutableFarmedTokens >= user.farmableTokens) {
        clearInterval(progressInterval);
        return;
      }

      // convert to percentage
      const percentageToAdd =
        (tokensPerProgressInterval / user.farmableTokens) * 100;

      console.log(percentageToAdd);

      setFarmingProgress((n) => n + percentageToAdd);
    }, PROGRESS_INTERVAL_TIMEOUT);

    return [farmingInterval, progressInterval];
  };

  const claimFarmedTokens = () => {
    setFarmedTokens(0);
    setFarmingProgress(0);
    setTotalTokens((n) => n + farmedTokens);
    setFarmingStatus("not started");
  };

  useEffect(() => {
    let intervals: Array<number> = [];

    if (farmedTokens && farmedTokens < user.farmableTokens) {
      setFarmingProgress((farmedTokens / user.farmableTokens) * 100);
      setFarmingStatus("running");
      intervals = startFarming();
    }

    if (farmedTokens && farmedTokens >= user.farmableTokens) {
      setFarmingStatus("completed");
    }

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav id="navbar" className={`${styles.navbar} space-y-4`}>
      {currentTab === "home" && (
        <div className="">
          {farmingStatus === "not started" ? (
            <button onClick={startFarming} className={"farm__button"}>
              Start Farming
            </button>
          ) : farmingStatus === "running" ? (
            <button
              onClick={() => null}
              className={"farming__button"}
              style={
                {
                  "--farming-progress": `${farmingProgress}%`,
                } as CSSVaribles
              }
            >
              Farming $GARRI:{" "}
              <strong className="font-black">
                {farmedTokens.toLocaleString()}
              </strong>
            </button>
          ) : (
            <button className={"claim__button"} onClick={claimFarmedTokens}>
              Claim <strong>{farmedTokens.toLocaleString()}</strong> $GARRI
            </button>
          )}
        </div>
      )}
      <div className={styles.navigation__list}>
        <div
          className={`${
            styles.navigation
          } hover:text-primary ${
            currentTab === "home" ? "text-primary" : "text-neutral-400"
          }`}
          onClick={() => setCurrentTab("home")}
        >
          <AiOutlineHome className="text-2xl" />
          <span className={styles.navigation__label}>Home</span>
        </div>
        <div
          className={`${
            styles.navigation
          } hover:text-primary ${
            currentTab === "tasks" ? "text-primary" : "text-neutral-400"
          }`}
          onClick={() => setCurrentTab("tasks")}
        >
          <GoTasklist className="text-2xl" />
          <span className={styles.navigation__label}>Task</span>
        </div>
        <div
          className={`${
            styles.navigation
          } hover:text-primary ${
            currentTab === "pals" ? "text-primary" : "text-neutral-400"
          }`}
          onClick={() => setCurrentTab("pals")}
        >
          <MdOutlinePeopleAlt className="text-2xl" />
          <span className={styles.navigation__label}>Pals</span>
        </div>
        <div
          className={`${
            styles.navigation
          } hover:text-primary ${
            currentTab === "wallet" ? "text-primary" : "text-neutral-400"
          }`}
          onClick={() => setCurrentTab("wallet")}
        >
          <IoWalletOutline className="text-2xl" />
          <span className={styles.navigation__label}>Wallet</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
