// https://codesandbox.io/s/509jvrqr8n?from-embed
import { useState, useEffect } from "react"

export function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth)

  const listener = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", listener)

    return () => {
      window.removeEventListener("resize", listener)
    }
  }, [width])

  return {
    width
  }
}
export default useWindowResize
