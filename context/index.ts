import React from "react";
import { defaultPosition, defaultReports, Position, Report } from "../types";

export const AppContext = React.createContext({
  reportsContext: {
    reports: defaultReports,
    setReports: (reports: Report[]) => { }
  },
  userContext: {
    position: defaultPosition,
    setPosition: (position: Position) => { }
  }
})
