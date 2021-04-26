import './Dashboard.css'
import Schedule from './Components/Schedule'
import Persona from './Components/Persona'
import Calendly from './Components/Calendly';
import Ref from './Components/Ref'


function Dashboard(props) {

    return (
        <div className="container-Dashboard">
                        <h1 className="Rowdies header"> Customer <span className="orange-header">Interviews </span></h1>
                        <h4 className="Rowdies "> Welcome {props.name} </h4>
                        <h4 className="Rowdies "> Your email is {props.email} </h4>
            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter ">
                  <Schedule></Schedule>
                  <br></br>
                  <Persona></Persona>
                  <br></br>
                  <Calendly> </Calendly>
                  <br></br>
                  <Ref></Ref>
                  <br></br>
                </div>

            </div>

        </div>

    );
  }
  
  export default Dashboard;