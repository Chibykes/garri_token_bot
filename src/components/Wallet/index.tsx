import { TonConnectButton } from "@tonconnect/ui-react";
import styles from "./index.module.css";
import tokenImage from "../../assets/token2.png";

function Wallet() {
  return (
    <div className={styles.container}>
      <div className="py-12 text-white space-y-8">
        <img
          src={tokenImage}
          className="w-[100px] h-auto mx-auto"
          alt="GARRI"
        />

        <div className="">
          <p className="font-bold text-2xl">Join the Community</p>
          <p className="text-sm">
            Connect you wallet to access upcoming crypto features
          </p>
        </div>
        <div className="space-y-4">
          <TonConnectButton className="w-full mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
