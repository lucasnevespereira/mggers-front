import axios from "axios";
import config from "../config";
import { Report } from "../types"

const useGetReports = async () => {

  let results: Array<Report> = []

  axios.get(`${config.API_URL}/api/reports`)
    .then(res => {
      console.log(res.data.results)
      results = res.data.results
    })
    .catch(e => {
      alert(e)
      console.error(e)
    })
  return results
}

export {
  useGetReports
};