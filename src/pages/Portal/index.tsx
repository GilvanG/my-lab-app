import { useState } from 'react'
import Modal from '../../components/Portal/modal';

export function PortalPage() {
 const [isOpen, setOpen]= useState(false)
 return (
   <div>
     <button onClick={()=> {setOpen(true)}}>show button</button>
     <Modal isOpen= {isOpen} onClose={()=>setOpen(false)}/>
   </div>
 )
}