import './c-dashboard.css'
import p from '../../images/p.png'
function Schedule() {

    return (
        <div className="container-persona">
            <br></br>
            <p className="s-font-header black">Personas</p>
            <p className="s-font-main black">Who are you looking to get in touch with for a customer interview? </p>
            <br></br>
            <img src={p} className="p-img"></img>

        </div>

    );
  }
  
  export default Schedule;