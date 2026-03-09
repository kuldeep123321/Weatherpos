import React from 'react';
import "./Dashpage.css";
import Routine from './Routine.jsx';
import Adddatabutton from './adddatabutton.jsx';
import {useNavigate} from "react-router-dom";
export default function Dashpage() {
  return (
    
    <div className='mai'>
      <div className='lb'>
        <div>H1</div>
        <div>h2</div>
        <div>h3</div>
        <div>h4</div>
        <div>h5</div>
      </div>
      <div className='rb'>
        <div className='rbtb'>
        <div>login</div>
        <div>signup</div>
        <div className='add'><Adddatabutton/></div>
        </div>
        <div className='rbbb'>
          <div className='rb1'>
            <div className='rb11'><Routine title="Pushups" kya="totalpushups"/></div>
            <div className='rb11'><Routine title="Squats" kya="totalsquats"/></div>
          </div>
          <div className='rb2'>
            <div className='rb22'><Routine title="Meditation" kya="totalmeditation"/></div>
            <div className='rb22'>d</div>
          </div>
        </div>
      </div>
    </div>
  )
}
