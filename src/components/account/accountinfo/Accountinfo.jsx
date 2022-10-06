import React from 'react';

import './accountinfo.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

const Accountinfo = ({checklogin,regWarning}) => {
    
  return (
    <div>
        <div className={checklogin ? "account-success" : "account-error"}>
            <span>{checklogin ? <TiTick className='move-btm'/> : <AiFillCloseCircle className='move-btm'/>}   {regWarning}  </span>
      </div>
  </div>
  )
}

export default Accountinfo;