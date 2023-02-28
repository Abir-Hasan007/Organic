import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons"
export default function Payment_success() {
  return (
    <div>
         <FontAwesomeIcon icon={faCheckCircle}  style={{marginLeft : '65vh',height : '20vh',width: '20vh',color : 'green'}}/> 
      <h1 style={{textAlign: 'center',color : 'green',marginTop : '10vh'}}>Payment Complete Successfully</h1>
    </div>
  )
}
