import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.scss"

const DetailsButton = ({id}) => {
  const navigate = useNavigate()
  return (
    <button className='detailsButton' onClick={() => navigate(`user/${id}`)}>Details</button>
  )
}

export default DetailsButton