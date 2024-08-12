type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type NaviagtionTypes = "home" | "tasks" | "pals" | "wallet";

export interface UserInterface {
  farmableTokens: number;
  farmingDuration: number;
  farmingProfitPerSec: number
}

export interface AppContextInterface {
  currentTab: NaviagtionTypes;
  setCurrentTab: ReactSetState<NaviagtionTypes>;
  farmedTokens: number;
  setFarmedTokens: ReactSetState<number>;
  totalTokens: number;
  setTotalTokens: ReactSetState<number>;
  user: UserInterface;
  setUser: ReactSetState<UserInterface>;
}
