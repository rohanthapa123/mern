import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { NavBar } from '../../../components/home/home.component'
const CategoryDetail = () => {
    let params = useParams()
    let [query,setQuery] = useSearchParams()
    // console.log(query.get('perPage'))
  return (
    <>
    <NavBar/>
    <div>I am categoy Detail :{params.id}</div>
    </>
  )
}

export default CategoryDetail