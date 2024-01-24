import React from 'react'

function Container({children, minHeight=""}) {
  return (
    <div className='container d-flex gap-3 flex-wrap justify-content-center' style={{minHeight: minHeight}}>{children}</div>
  )
}

export default Container