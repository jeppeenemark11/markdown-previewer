import './App.css';
import { useState } from 'react';
import * as marked from 'marked';


marked.setOptions({
  breaks: true
});
const renderedText = new marked.Renderer();

function App() {

  const [text, setText] = useState("");

  return (

    <div className="App text-center px-2">
      <h1 className='p-3'>Markdown Previewer</h1>
   <textarea value={text} className='textarea' style={{height: "300px", width: "600px"}} onChange={(e)=> setText(e.target.value)}></textarea>
<h2 className='mt-2'>Preview</h2>

<Preview markdown={text}/>

    </div>
  );
}

function Preview({markdown}){
 return (<div dangerouslySetInnerHTML={{__html:marked(markdown, {Renderer: renderedText})}} id="preview">

  </div>);
}
export default App;
