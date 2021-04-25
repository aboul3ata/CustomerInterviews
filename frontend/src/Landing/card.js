import './Interviews.css'
function Update(props) {
    return (
        <div className="no-float center-div">
            <div className="floats img-div-update2">
                 <img src={props.logo}></img>
            </div>

            <div className="floats content-div-update2 card">
                {(props.popular=="true")&&<div className="tag-landing center-text tiny-text">🔥POPULAR</div>}
                {(props.new=="true")&&<div className="tag-landing center-text tiny-text">🌟 NEW</div>}
                <p className="small-text  black-color-landing no-margin-landing small-margin big-emoji">{props.company}</p>   
                <p className="small-text grey-landing no-margin-landing small-margin bold">{props.description}</p>
                <p className="small-text grey-landing no-margin-landing small-margin">{props.disclaimer}</p>  
                <hr className="white-landing"></hr> 
            </div>
        
        </div>
    );
  }
  
  export default Update;