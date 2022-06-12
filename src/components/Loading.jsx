import React from 'react'
import './loading.css'

function Loading() {
  return (
    <div className='div-loading'>
        <img className='img-loading' src='https://acegif.com/wp-content/gif/smiling-dog-18.gif' alt='loading' />
        <p className='text-loading'>Loading...</p>
    </div>
  )
}

export default Loading