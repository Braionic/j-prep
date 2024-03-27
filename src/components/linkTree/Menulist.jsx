import React from 'react'
import Menuitem from './Menuitem'

export default function Menulist({link}) {
  return ( link.children && 
    <li>{link.children && link.children && <Menuitem menu={link.children} />}</li>
  )
}
