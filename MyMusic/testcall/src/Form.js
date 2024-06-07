import axios from 'axios'
import {useState} from 'react'

function Form() {
  const handleButtonClick = async () =>{
   const resp = await axios.get("http://localhost:8080/getTest");
    console.log(resp)
  }

  //post request along with data
  const data = "hello"
  const handlePostClick = async () =>{
    const resp = await axios.post("http://localhost:8080/testPost", {data});
     console.log(resp)
   }

   //post request along with formdata
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  const handleFormSubmit = async () =>{
    const resp = await axios.post("http://localhost:8080/testForm", {username, email, password});
     console.log(resp)
   }
  return (
   <div>
    <button onClick={handleButtonClick}>Get Test</button>
    <br></br><br></br>
    <button onClick={handlePostClick}>Post Test</button>
    <br></br><br></br>


 <form onSubmit={handleFormSubmit}>
  <label>Username : </label>
  <input type='text'
  name = 'username'
  value={username}
  onChange = { (e) => setUsername(e.target.value)}/>
  <br></br><br></br>

  <label>Email : </label>
  <input type='text'
  name = 'email'
  value={email}
  onChange = { (e) => setEmail(e.target.value)}/>
  <br></br><br></br>

  <label>password : </label>
  <input type='password'
  name = 'password'
  value={password}
  onChange = { (e) => setPassword(e.target.value)}/>
  <br></br><br></br>

  <input type="submit" value="Submit" />
 </form>

    </div>
  );
}

export default Form;
