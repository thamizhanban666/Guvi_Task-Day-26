import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function Card(props) {
   return(
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{ props.obj.title }</h5>
            <h6 className="card-price text-center">{`${props.obj.price}`}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">

            { props.obj.features.map((featureObj) => {

                return <li><span className="fa-li"><FontAwesomeIcon icon={featureObj.text[0].mute ? faTimes : faCheck} /></span>
                {
                  featureObj.text.map((textObj) => {
                    return <span className={` ${textObj.mute ? "text-muted" : ""} ${textObj.bold ? "fw-bold" : ""} `}>{textObj.phrase} </span>  
                  })    
                }
                </li>

              })
            }
    
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
   )
}

export default Card