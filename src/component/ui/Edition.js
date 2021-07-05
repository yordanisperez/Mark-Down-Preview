import  '../ui/Edition.css'


function Edition(props){


    return  <textarea type="text"  
                id='editor'  rows={props.rows}
                onChange={props.onChangeHandle} 
                value ={props.markDown}
                ref={props.editorRef} >  
            </textarea>
   

}

export default Edition;
