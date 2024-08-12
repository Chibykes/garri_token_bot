import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { useContext } from "react";
import { AppContext } from "../../App";
import tokenImage from "../../assets/token2.png";
import styles from "./index.module.css";


function Dashboard() {
  const { initData } = retrieveLaunchParams();

  const { totalTokens, setTotalTokens } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles.token__information}>
        <div className={`${styles.token__amount} text-white`}>
          <span className="text-6xl">{totalTokens.toLocaleString()}</span>
          <small className={styles.token__name}>$GARRI</small>
        </div>

        <img
          src={tokenImage}
          className="logo"
          alt="GARRI"
          onClick={() => setTotalTokens((n) => n + 1)}
        />

        <div className={`${styles.token__amount} text-white`}>
          <small className={styles.token__name}>@{initData?.user?.username}</small>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
