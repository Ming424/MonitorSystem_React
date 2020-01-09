import React, { useEffect } from "react"
import axios from "axios"

// https://stackoverflow.com/questions/6806263/websocket-api-to-replace-rest-api
// https://stackoverflow.com/questions/28613399/websocket-vs-rest-api-for-real-time-data

function Fetch(props) {
  // const groups_array = ["F7ENGM&P", "F7ENGSTRUC"]

  /** AXIOS AJAX */
  //  Discussion thread: https://github.com/axios/axios/issues/1195
  //  Documentation: https://facebook.github.io/react-native/docs/network

  const url = "../src/api/category/read.php"

  useEffect(() => {
    let id = setInterval(() => {
      if (props.checkedGroup) {
        const fetchData = async () => {
          axios
            .post(url, props.checkedGroup)
            .then(response => {
              // console.log("====  0- Data sent ============================\n")
              // console.log(props.checkedGroup)
              // console.log("==== 1- RESPONSE => ============================\n")
              // console.log(response)
              // console.log("==== 2- RESPONSE.DATA => =======================\n")
              // console.log(response.data)
              // console.log("==== 3- RESPONSE.DATA.DATA => ==================\n")
              // console.log(response.data.data)

              /** Throw error for unexpected result fetched */
              if (!response.data.data) {
                throw new Error("[response.data.data] is " + response.data.data)
              }
              /** Update the data onto state */
              props.setEvents(response.data.data)
              // console.log("\n>>>>>>>>>>>-> SUCCESS (Fetch.js) <-<<<<<<<<<<<<\n\n\n")
            })
            .catch(error => {
              // console.log(error)
              // props.setEvents([])
              // console.log(
              //   "\n>>>>>>>>>>>->  FAILED (Fetch.js)  <-<<<<<<<<<<<<\n\n\n"
              // )
            })
        }

        fetchData()
      } else {
        // console.log("[RUNNABLE] No selected group")
      }
    }, 1500)
    return () => clearInterval(id)
  }, [props])

  return <> </>
}
export default Fetch
