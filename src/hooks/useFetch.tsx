import { useState, useEffect } from 'react'

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>()
  const [filteredData, setFilteredData] = useState<any>()
  const [query, setQuery] = useState<string>('')
  const [filterType, setFilterType] = useState<string>('')

  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
        } else {
          setData(data)
          setFilteredData(data)
        }
      })
  }
  useEffect(() => {
    if (data) {
      if (filterType === 'searchbar') {
        const filteredDataOnCaption = data.filter((item: any) =>
          item.caption.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredData(filteredDataOnCaption)
      }
      if (filterType === 'filterbuttons') {
        const filteredDataOnCategory = data.filter((item: any) =>
          item.type.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredData(filteredDataOnCategory)
      }
    }
  }, [query, data, filterType])

  return { fetchData, data, filteredData, query, setQuery, setFilterType }
}
