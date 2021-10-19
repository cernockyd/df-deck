import React, { useState } from 'react'

export default ({ children }) => {
  const [display, setDisplay] = useState(true)

  let childar = React.Children.toArray(children)

  return <div onClick={() => setDisplay(!display)}>
    {display ? childar[0] : childar[1]}
  </div>
}