import React, { useState } from 'react'
import "../qr-code/style.css"
import QRCode from 'react-qr-code'

export default function QrCode() {
  const [value, setValue] = useState('')
  const [qrCode, setQRcode] = useState('')
  return (
    <div className='main-div'>
        <p>QR Code scanner</p>
        <input onChange={(e)=> setValue(e.target.value)} type='text' placeholder='enter value' name='qr-code' />
        <button style={{backgroundColor: value===''? "gray": "green", border: 'none'}} disabled={value === ''? true: false} onClick={()=> setQRcode(value)}>Grnerate code</button>
          <QRCode value={qrCode} />
        
    </div>
  )
}
