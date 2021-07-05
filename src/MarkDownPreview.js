import './MarkDownPreview.css';
import Edition from './component/ui/Edition'
import Preview from './component/ui/Preview'
import TitleBar from './component/ui/TitleBar'
import { useState,useRef } from 'react';

import marked from 'marked'
import prism  from  'prism-react-renderer'
marked.setOptions ={
  breaks: true,
  highlight: function(code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  }
}
//const renderer = new marked.Renderer();
const sampleMarkDownInit=`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

function MarkDownPreview() {
  const [markDownString,setMarkDownString]=useState(sampleMarkDownInit)
  const [htmlString,setHtmlString]=useState(marked(sampleMarkDownInit,{ breaks: true}))
  const [icon, setIcon] =useState(1); //1 both windows //2 Display only the cliked //
  const editorRef =useRef();
function onChangeHandle()
{
  setMarkDownString(editorRef.current.value)
  setHtmlString(marked(editorRef.current.value, {breaks: true}));
}
 
  return <div id="mark-down-full">
            <div id="editor-full">
              <TitleBar text={"Editor"} >
                 
              </TitleBar>
               <Edition onChangeHandle={onChangeHandle} markDown={markDownString} editorRef={editorRef}>
               </Edition>
            </div>
            <div id="preview-full">
              <TitleBar text={"Preview"}>
              </TitleBar>
              <Preview _html={htmlString}>
              </Preview>
            </div>
           
        </div>
}

export default MarkDownPreview;
