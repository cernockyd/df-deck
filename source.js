import React, { useState } from 'react'

export default ({ children, dark=false, background='transparent' }) => {
  const [show, setShow] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        fontSize: '14px',
        zIndex: 9999,
        bottom: 0,
        left: 0,
        right: 0,
        padding: '0 12px',
        backgroundColor: background,
        color: dark ? 'white' : 'black',
      }}>
      {show ?
        <div>
          <button style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              backgroundColor: 'gray',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '6px 8px'
            }}
            onClick={() => setShow(false)}>
              Skrýt
          </button>
          {children}
        </div>
        :
        <button style={{  
            position: 'absolute',
            bottom: '8px',
            right: '8px', 
            backgroundColor: 'gray',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 8px'
          }}
          onClick={() => setShow(true)}>Zobrazit zdroj</button>
      }
    </div>
  )
}