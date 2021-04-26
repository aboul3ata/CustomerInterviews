import './c-dashboard.css'
import React, {useEffect, useState } from 'react';



function Ref() {
    const [code, setCode] = useState('no-backend');
    const [count, setCount] = useState(0);

    // function tt (){
    //     setCode(3)
    // }

//fetching as soon s it loads
useEffect(() => {
    // setCode(2)
    fetch('https://jrqdv94yq6.execute-api.us-east-1.amazonaws.com/dev/ref/', {})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCode(data.ref_code)
            setCount(data.count)
        })
        .catch((error) => {
        console.error(error);
        })
  }, [code])

    return (
        <div className="container-calendly">
            <br></br>
            <p className="s-font-header black">Want free interviews?</p>
            <p className="s-font-main r black"> Referral count: {count} </p>
            <p className="s-font-main black">Get 1 interview for every new person creates an account using your link</p>
            <br></br>
            <input value={`https://www.warminterviews.com/?ref=${code}`} className="lg-input"/>
            <button className="c-button black">Copy Link</button>
        </div>

    );
  }
  
  export default Ref;