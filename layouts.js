import React from 'react'

console.log('Ahoj...')

export default ({ children, dark }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
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
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'darkorange',
      color: 'white'
    }}>
    {children}
  </div>
)

export const BgImage = ({children, image, position="center"}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      backgroundColor: 'black',
      color: 'white',
      backgroundImage: 'url('+image+')',
      backgroundSize: 'cover',
      backgroundPosition: position,
      backgroundRepeat: 'no-repeat',
      justifyContent: 'flex-end'
    }}>
    {children}
  </div>
)