import  '../ui/TitleBar.css'

function TitleBar(props){

    return <div id="bar-title">
             <div>
                <h3>{props.text}</h3>
             </div>
            <button onClick={props.onClickBarHandle} ><i className={props.icon}></i></button>
          </div>

}

export default TitleBar;