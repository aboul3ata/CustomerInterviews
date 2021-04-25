import './Interviews.css'
import Avatar from '../images/avatar.png'
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import queryString from 'query-string'
import Card from './card'


function Interviews(props) {
    const [email, setEmail] = useState("")

    //used for redirecting
    const history = useHistory()

    function changeName(event){
        event.preventDefault()
        setEmail(event.target.value)
    }


    function HandleSignup(event){
        event.preventDefault()
        setEmail(event.target.value)
        console.log("signup pressed")
        const value=queryString.parse(window.location.search);
        const by=value.mvp;
        console.log('mvp',by)//123
        //API CALL TO NODE SERVER
        fetch('/signup', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                 "email": email, by:"customer interview"
            }),})
            .then(response => response.json())
            .then(data => {
            const success = data.success
            console.log(success)
            //checking if user already exists and if our api call was successful
            if (success == "true"){
                if( data.goto == "dashboard"){
                    history.push("/", {id:data.id, counts:data.counts});
                } else{
                    history.push("/", {id:data.id, counts:data.counts});
                }
            }
        })
        .catch((error) => {
            console.error('Error: Fetch');
        })
    }

    return (
        <div className="container-landing">
            <div className="smth">
            <h4 className="title-landing primary-blue float"> Customer <span className="primary-orange"> Interviews</span></h4>
            <img className="float avatar-logo" src={Avatar}></img>
            </div>
            <img className="float avatar-logo-mobile" src={Avatar}></img>
            <div className="container3">
                <div className="left-content float-desktop ">
                <h1 className="one-liner primary-blue add-padding center-text decrease-font">Customer interviews without the cold emailing.</h1>
                <p className="primary-blue center-text caption-landing">🎉 Get customer insights, validate your idea or get some feedback on the product. </p>
                <form >
                <input value={email} onChange={changeName} className="email-capture-landing" placeholder="📬 richard@pieppiper.com"></input>
                <button className="btn-free-access" type="submit" onClick={HandleSignup}>Get Customer Interviews 🚀</button>
                <p className="disclaimer-landing2 primary-blue">Customer interviews is a product by First 1000.</p>
                </form>
                
                </div>
                <div className="right-content float-desktop small-text">
                <p className="summary-text grey-landing">How it works✨</p>
                {/* <p className="small-text grey-landing center-text-right no-margin-landing">(Previous Issues)</p> */}
                <Card  company="🤔" description="Tell us who you are looking to interview, " disclaimer="How many interviews you are looking for, when are you available..etc" ></Card>
                <Card  company="💬" description="We advertise your interview request in one of our newsletters" disclaimer="if we cant find the right audience we will let you know in 24 hours"></Card>
                <Card  company="🤑" description="You pay us $5/interview." disclaimer=" You can also reward the participant whatever amount you think is fair." ></Card>
                <br></br>
                <div className="no-float ">
                    <p>Hellow World</p>
                </div>

                </div>
            </div>
        </div>

    );
  }
  
  export default Interviews;