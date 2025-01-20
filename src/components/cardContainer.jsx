import React from 'react'

function cardContainer ({
    children}) {
  return (
    <div className='row mt- p-5 g-3 justify-content-center'>
        {children}
    </div>
  )
}

export default cardContainer;