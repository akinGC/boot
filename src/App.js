
import Form from './Form';

function App() {

  async function formHandle(e){
    e.preventDefault()
    
   let img = document.getElementsByName('file')[0].value
let formfile = new FormData()
formfile.append('file',img)
console.log(formfile)
  }
  return (
    <div>
      <h1>fille</h1>
      <form onSubmit={formHandle}>
        <input type='file'name='file'></input>
        <br/>
        <input type='text' name='key'></input>
        <br/>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;
