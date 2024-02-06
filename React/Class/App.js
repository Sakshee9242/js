import logo from './logo.svg';

import i1 from './i1.png';
import './App.css';
//cmd
// npm install -g create-react-app 
// npx create-react-app appName(wrong)
// npx create-react-app appname(correct)
//make sure you open the app not the folder in which the app is
//terminal --> vs code ==? control+shift+backtik 
//npm start

// App.js ==> index.js ==? index.html

function Test1() {

  const x=12;

  const obj =   {
    "color":"red",
    height:"100px",
    width:200,
    background:"coral"
  
  }



  return (
<>

<div>


  {
    (1!=1) ? "t " : "F"



  }

  <img src="images/i1.png" height={200}></img>

  <img src={i1} height={100}></img>

  <img height={"100px"} src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fnissan%2Fgt-r%2Fnissan-gt-r.jpg%3Fv%3D25&w=3840&q=75"></img>

  <input value={x}></input>
    <br/>WELCOME TO REACT {x}
  </div>
{/* h1 style="color:red" */}
  <h1  style={
    {
      "color":"red",
      height:"100px",
      width:200,
      background:"coral"
    
    }
    }>Hello</h1>

  <p style={obj}>PArA</p>
  

  <Darshan></Darshan>
  {/* <Darshan/> */}

  </>
  );
}

function Darshan()
{
  return (
    <>
      HELLO ANOTHER FUN

    </>
  )
}

export default Test1;
// export default Darshan;
