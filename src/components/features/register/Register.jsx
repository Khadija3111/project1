import React, { useState } from 'react' 
import './Register.css'

export default function Register({getRegister}){

  const [registerData,setRegisterData ] = useState ( {
   name: '',
  Fname: '',
  date: '',
  email:'',
  password:'',
  age:'',
  date:'',
});

 
  const onChangeHandler = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };



   const [action,setAction] = useState("Register")
   const submitHandler = (e) => {
    e.preventDefault();
    console.log(registerData); // Logging the registerData object to the console
    //  getRegister(registerData);  Optionally, you can call your getRegister function here if needed
    setRegisterData({
      name: '',
      Fname: '',
      date: '',
      email:'',
      password:'',
      age:'',
      date:'',
    });
  };
  
  
   
  return ( <div className='main'>
   <form   className='formm' onSubmit={submitHandler}  >< div className='container'>
      <div className='text'>{action}</div>
      <div className='underline'> </div>
       
  {action === "Login" ? <div> </div> : 
    <><div className='header'>
    <div className='input'> 
      <label htmlFor='date'>Name</label><br/>
      <input 
        type="text"
        name='name'
        value={registerData.name}
        onChange={onChangeHandler}
        placeholder='Enter your name here'
        id='name'
        required/></div>
</div> </> }  
      {action === "Login" ? <div> </div> :<>
      <div className='header'>
      <div className='input'>
      <label htmlFor='date'> Father Name</label><br/>
        <input 
        type="text"
        name='Fname'
        value={registerData.Fname}
        onChange={onChangeHandler}
         placeholder='Enter your father name here'
         id='Fname'
         required/>
         </div>
         </div>
         </> }
      
      
      <div className='header'>
      <div className='input'>
      <label htmlFor='date'> Email</label><br/>
        <input 
        type="email"
        name='email'
        value={registerData.email}
        onChange={onChangeHandler}
        placeholder='Enter your email'
        id='email'
        required />
      </div>
      </div>

      
      <div className='header'>
      <div className='input'>
      <label htmlFor='date'>Password </label> <br/>
        <input type="password"
         name='password'
         value={registerData.password}
        onChange={onChangeHandler}
         placeholder='Enter your password'
         id='password'
         required
         />
      </div>
      </div>

{action === "Login" ? <div> </div> :<div className='header'>
      <div className='input'>
      <label htmlFor='date'>AGE </label> <br/>
        <input 
        type="number"
        name='age'
        value={registerData.age}
        onChange={onChangeHandler}
        placeholder='Enter your age'
        id='age'
        required
        />
      </div>
      </div> 
}
      
{action === "Login" ? <div></div> : <div className='header'>
      <div className='input'>
      <div>
        <label htmlFor='date'>Date</label> <br />
        <input
          type='date'
          name='date'
          value={registerData.date}
          onChange={onChangeHandler}
          id='date'
          required
        />
      </div>
        </div>
      </div> }
            
    <div className='Register-Container'> 
<button className={action === "Login" ? "Register gray" : "Register"} onClick={() => setAction("Register")}>Register</button>
<button className={action === "Register" ? "Register gray" : "Register"} onClick={() => setAction("Login")}>Login</button>
</div>
</div>
</form>
</div>  
    
  
  )
}
  