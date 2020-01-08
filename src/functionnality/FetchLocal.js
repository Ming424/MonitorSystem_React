//https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
//https://www.robinwieruch.de/react-hooks-fetch-data

// https://stackoverflow.com/questions/56688596/how-can-i-fetch-the-real-time-json-data-in-more-efficient-and-less-buggy-way
import React, { useState, useEffect } from "react"
// import axios from "axios"
function FetchLocal(props) {
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true)

  //https://dev.to/paramharrison/fetch-api-data-in-react-using-useeffect-hooks-fpo

  /** FETCH API */
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  // const fetchAPI = async () => {
  //   const result = await fetch(
  //     "http://localhost/php_rest_myblog/api/post/disc.php"
  //   )
  //   const data = await result.json()
  //   props.setEvents(data)
  // }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchAPI()
  //   }, 2000)
  //   return () => clearInterval(interval)
  // }, [fetchAPI])

  // https://www.youtube.com/watch?v=k0WnY0Hqe5c
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "http://localhost/php_rest_myblog/api/post/disc.php"
  //     )
  //     props.setEvents(result.data)
  //   }
  //   fetchData()
  // }, [props])

  // https://www.andreasreiterer.at/rest-api-react-hooks/
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios
  //       .get("http://localhost/php_rest_myblog/api/post/disc.php")
  //       .then(result => props.setEvents(result.data))
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [props])

  /** @VERSION_3 fixed useEffect fetching infinit loop */
  // https://stackoverflow.com/questions/56688596/how-can-i-fetch-the-real-time-json-data-in-more-efficient-and-less-buggy-way

  const [error, setError] = useState(false)

  const [timer, setTimer] = useState(null)
  const [isMounted, setIsMounted] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchAPI() {
    try {
      const result = await fetch(
        "http://localhost/php_rest_myblog/api/post/disc.php"
      )
      const data = await result.json()
      console.log("FetchLocal => \n")
      console.log(data.data)
      props.setEvents(data.data)
      setIsMounted(true)
      if (error === true) {
        setError(false)
        // window.alert("Reconnected, refresh the page ")
        // window.location.reload(false)
      }
    } catch (e) {
      setIsMounted(false)
      console.error(e)
      setError(true)
      props.setEvents([])
      props.setCheckedGroup([])
      // window.location.reload(false)
      // window.alert("Reconnected, refresh the page ")
    }
    clearTimeout(timer)
    setTimer(setTimeout(fetchAPI, 2000))
  }
  useEffect(() => {
    // console.log(isMounted)
    if (!isMounted) {
      fetchAPI()
      setIsMounted(true)
    } else {
      // console.log("isMounted == true")
    }
  }, [fetchAPI, isMounted])

  /** @VERSION_2
   */
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       "http://localhost/php_rest_myblog/api/post/read.php"
  //     )
  //     const json = await response.json()
  //     // setData(json)
  //     // setLoading(false)
  //     props.setEvents(json)
  //   }
  //   getData()
  // }, [props])

  /** @VERSION_1 */
  //   async function fetchUrl() {
  //     const response = await fetch(
  //       "http://localhost/php_rest_myblog/api/post/read.php"
  //     )
  //     const json = await response.json()
  //     setData(json)
  //     setLoading(false)
  //   }
  //   useEffect(() => {
  //     fetchUrl()
  //   }, [fetchUrl])

  const handleMounted = () => {
    if (!error) {
      return <span style={{ color: "#198a00" }}>Connection successful</span>
    } else {
      return (
        <span style={{ color: "red", fontWeight: "bold" }}>
          Connection Failed
        </span>
      )
    }
  }

  return <>{handleMounted()}</>
}
export default FetchLocal
//   <div>
//   {data.map((d, index) => (
//     <div key={index}>
//       {d.groupName}, {d.userId}
//       {d.userLastName}, {d.userFirstName},{d.ncrNumber}, {d.discrNo},
//       {d.qtH},{d.cmlQtH},{d.linkDiscTo}
//     </div>
//   ))}
// </div>
