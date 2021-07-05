import  '../ui/Edition.css'


function Edition(props){


    return  <textarea type="text"  
                id='editor'  rows='12' 
                onChange={props.onChangeHandle} 
                value ={props.markDown}
                ref={props.editorRef} >  
            </textarea>
   

}

export default Edition;
