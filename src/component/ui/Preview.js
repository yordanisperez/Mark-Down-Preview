import  '../ui/Preview.css'


function Preview(props){
 

    return  <div  id='preview'   dangerouslySetInnerHTML={{ __html:props._html }} /> 
                  
            
   

}

export default Preview;