import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispacth] = useReducer(alertReducer, initialState);

  //Set Alert

  const setAlert = (messg, type) => {
    dispacth({
      type: "SET_ALERT",
      payload: { messg, type },
    });

    setTimeout(() => {
      dispacth({ type: "REMOVE_ALERT" });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={({ alert: state }, setAlert)}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
