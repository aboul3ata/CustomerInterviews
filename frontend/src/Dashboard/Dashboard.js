import './Dashboard.css'
import Schedule from './Components/Schedule'
import Persona from './Components/Persona'
import Calendly from './Components/Calendly';


function Dashboard(props) {

    return (
        <div className="container-Dashboard">
                        <h1 className="Rowdies header"> Customer <span className="orange-header">Interviews </span></h1>
            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter ">
                  <Schedule></Schedule>
                  <br></br>
                  <Persona></Persona>
                  <br></br>
                  <Calendly> </Calendly>
                  <br></br>
                </div>

            </div>

        </div>

    );
  }
  
  export default Dashboard;