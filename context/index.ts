import React from "react";
import { defaultReports, Report } from "../types";


export const AppContext = React.createContext({
  reportsContext: {
    reports: defaultReports,
    setReports: (reports: Report[]) => { }
  }
})
