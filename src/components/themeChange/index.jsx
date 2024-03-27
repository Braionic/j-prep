import React from 'react'
import useLocalStorage from './useLocalStorage'
import '../themeChange/style.css'

export default function Themeswitch() {
    const [theme, setTheme] = useLocalStorage("theme", "dark")
    console.log(theme)
  return (
    <div className='main-wrapper' data-theme = {theme}>
        <h2>Theme Switch</h2>
        <button className='testy button' onClick={()=> theme === "dark"? setTheme("light"): setTheme('dark')}>Switch Theme</button>
        </div>
  )
}
