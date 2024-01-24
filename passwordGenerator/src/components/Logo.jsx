import React from 'react'

function Logo({width = "60px"}) {
  return (
    <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Meghnad_Saha_Institute_of_Technology_Logo.svg/1200px-Meghnad_Saha_Institute_of_Technology_Logo.svg.png" width={width} alt="" />
    </div>
  )
}

export default Logo