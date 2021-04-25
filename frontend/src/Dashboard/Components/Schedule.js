import './c-dashboard.css'
import s from '../../images/s.png'
function Schedule() {

    return (
        <div className="container-schedule">
            <br></br>
            <p className="s-font-header white">Schedule your first customer interview!</p>
            <p className="s-font-main white">Let’s get you the first customer interviews! Get product feedback, chat with potential customers, or just get some insights into a space</p>
            <br></br>
            <button className="s-button"> 📆Schedule </button>
            <img src={s} className="s-img"></img>
        </div>

    );
  }
  
  export default Schedule;