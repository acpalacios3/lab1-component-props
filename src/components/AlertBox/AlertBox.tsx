// 1. AlertBox Component
// Create an AlertBox component that can display different types of alerts
//  (success, error, warning, info) with customizable messages.

import type {AlertBoxProps} from '../../types';


export default function AlertBox(props: AlertBoxProps) {

 return (
    // <div className={`alert-box ${props.type}`}>
     <div className={`alert alert-${props.type}`}>
      <p>{props.message}</p>
      {props.children}
      {props.onClose && (
        <button onClick={props.onClose}>Close</button>
      )}
      
    </div>
  );

}
