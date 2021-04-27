import './Dashboard.css'
import Schedule from './Components/Schedule'
import Persona from './Components/Persona'
import Calendly from './Components/Calendly';
import Ref from './Components/Ref'
import React, {useState, useEffect} from 'react'
import firebase from 'firebase';
import s from '../images/s.png'


function Dashboard(props) {
  const [who, setWho] = useState("")
  const [web, setWeb] = useState("")
  const [calendar, setCalendar] = useState("")
  const [active, setActive] = useState("not-active")
  const [meetings, setmeetings] = useState([])

  function changeWho(event){
    event.preventDefault()
    setWho(event.target.value)
  }

  function changeWeb(event){
    event.preventDefault()
    setWeb(event.target.value)
  }

  function changeCalendar(event){
    event.preventDefault()
    setCalendar(event.target.value)
  }

  function toggletoggle(){
    if (active == "is-active"){
      setActive("not-active")
    } else {
      setActive("is-active")
    }
  }

  useEffect(() => {
    // setCode(2)
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          user.getIdToken().then(function(idToken) {  
            fetch('https://jrqdv94yq6.execute-api.us-east-1.amazonaws.com/dev/ref/test', {
                method: 'get',
                headers: {'Content-Type':'application/json',"Authorization":idToken},
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.meetings[0].interviewId)
                setmeetings(data.meetings)
            })
            .catch((error) => {
            console.error(error);
            })    
          });
        }
      });
  }, [meetings])

  function submitForm(event){
    event.preventDefault()
    toggletoggle()
      // setCode(2)
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            user.getIdToken().then(function(idToken) {  
              fetch('https://jrqdv94yq6.execute-api.us-east-1.amazonaws.com/dev/ref/test/', {
                  method: 'post',
                  headers: {'Content-Type':'application/json',"Authorization":idToken},
                  body: JSON.stringify({
                    "who": who, "web":web, "calendar":calendar,"token":idToken
               }),})
              .then(response => response.json())
              .then(data => {
                  console.log(data)

                  // setCode(data.ref_code)
                  // setCount(data.count)
              })
              .catch((error) => {
              console.error(error);
              })    
            });
          }
        });
  }

    return (
        <div className="container-Dashboard">
                        <h1 className="Rowdies header"> Customer <span className="orange-header">Interviews </span></h1>
                        <h4 className="Rowdies "> Welcome {props.name} </h4>
                        <h4 className="Rowdies "> Your email is {props.email} </h4>
            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter ">
                <div className="container-schedule">
                    <br></br>
                    <p className="s-font-header white">Schedule your first customer interview!</p>
                    <p className="s-font-main white">Let’s get you the first customer interviews! Get product feedback, chat with potential customers, or just get some insights into a space</p>
                    <br></br>
                    <button className="s-button" onClick={toggletoggle}> 📆Schedule </button>
                    <img src={s} className="s-img"></img>
               </div>
                  <br></br>
                  <Persona></Persona>
                  <br></br>
                  <Calendly> </Calendly>
                  <br></br>
                  <Ref></Ref>
                  <br></br>
                  <p>Your Upcoming Customer Interviews</p>
                  {meetings.map(meeting => (
                    <div className="small-card">
                      <p className="s-font-header ">Description:</p>
                      <p className="s-font-main ">{meeting.who}</p>
                      <br></br>
                      <p>Your Calendar link:{meeting.calendar} </p>
                    </div>
                 ))}
                  <br></br>
                  <div className={`modal ${active}`}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                      <header className="modal-card-head">
                        <p className="modal-card-title">Welcome</p>
                        <button className="delete" aria-label="close" onClick={toggletoggle}></button>
                      </header>
                      <section className='modal-card-body ${active}'>
                      <form>
                      <p>Request an Interview</p>
                      <br></br>
                      <p>Please fill in the form below to request and interview</p>
                      <br></br>
                      <p>Who are you looking to interview?</p>
                      <input value={who} onChange={changeWho}></input>
                      <br></br>
                      <p>Enter Calendar Link</p>
                      <input value={calendar} onChange={changeCalendar}></input>
                      <br></br>
                      <p>What's your website's URL </p>
                      <input value={web} onChange={changeWeb}></input>
                      <br></br>

                      <footer className="modal-card-foot">
                        <button type="submit"  className="is-success button"  onClick={submitForm}>Submit</button>
                        <button className="button" onClick={toggletoggle}>Cancel</button>
                      </footer>
                      </form>
                      </section>
                    </div>
                  </div>
                </div>

            </div>

        </div>

    );
  }
  
  export default Dashboard;