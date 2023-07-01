import { useEffect, useState, useRef } from 'react'
import { BASE_URL, options } from '../api/config'
import axios from 'axios'

export default function useFetchData(url) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [statusCode, setStatusCode] = useState()
  const cache = useRef({})

  useEffect(() => {
    if (!url) return
    async function fetchData() {
      try {
        if (cache.current[url]) {
          const response = cache.current[url]
          setData(response.data.items)
        } else {
          const response = await axios.get(`${BASE_URL}/${url}`, options)
          cache.current[url] = response.data.items
          setData(response.data.items)
          setStatusCode(response.status)
        }
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
    fetchData()
  }, [url])
  return { data, error, statusCode }
}
