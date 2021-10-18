import React, { useState } from 'react'

export default ({ url, src, img=false, children, size=0 }) => {
  const [show, setShow] = useState(1)
  const [key, setKey] = useState(0)
  const [source, setSource] = useState(src)
  
  return (
    <div style={{
      zIndex: 10,
    }}>
      <button
        onClick={() => {
          setKey(key+1)
          if (img) {
            setSource(src + '?' + key.toString())
          }
        }}
        style={{
          background: 'gray',
          border: 'none',
          position: 'absolute',
          top: '8px',
          right: '8px',
          backgroundColor: 'gray',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 8px',
          zIndex: 11,
        }}>
        Aktualizovat
      </button>
      {!img && <button
        onClick={() => setShow(!show)}
        style={{
          background: 'gray',
          border: 'none',
          position: 'absolute',
          top: '42px',
          right: '8px',
          backgroundColor: 'gray',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 8px',
          zIndex: 11,
        }}>
        {show ? 'Ukončit' : 'Zobrazit'}
      </button>}
      { img ? 
        <img
          src={source}
          height={size.toString() + 'px'}
          width={size.toString() + 'px'}
         /> : 
        <div>
          {
            show ?
              <iframe
              key={key}
              src={source}
              style={{
                height: '80vh',
                width: '100vw',
                border: 'none',
                display: 'block',
                margin: 0,
                frameBorder: 0,
                padding: 0,
              }}>
              </iframe>
            : <div
                style={{
                  height: '80vh',
                  width: '100vw',
                  //marginBottom: '15px',
                  border: 'none',
                }}>
              </div>
          }
        </div>
      }
      <div style={{
        height: '20vh',
        width: '100vw',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
       }}>
        {children}
      </div>
    </div>
  )
}
