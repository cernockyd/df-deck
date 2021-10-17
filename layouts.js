import React from 'react'

export default ({ children, bg='rgba(255,255,255)' }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: bg,
    }}>
    {children}
  </div>
)

export const Green = ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      color: 'white'
    }}>
    {children}
  </div>
)

export const Orange = ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'darkorange',
      color: 'white'
    }}>
    {children}
  </div>
)

export const Think = ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      color: 'black'
    }}>
    {children}
  </div>
)

export const BgImage = ({children, image}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      backgroundColor: 'black',
      color: 'white',
      backgroundImage: 'url('+image+')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'flex-end'
    }}>
    {children}
  </div>
)