import React from 'react';
import './App.css';
import { useForm, useFieldArray } from 'react-hook-form'


const UserInformation = (prop) => {
  const {register,control} =prop
  const {append,fields,remove}=useFieldArray({
    control,
    name : "users",
  })
  return (
    <div className='card'>
      <div className='card-header'>User Information</div>
      <div className='card-body'>
      {
        fields.map((item,index)=>(
          <div className="form-row form-group" key={item.id}>
          <div class="col">
            <input type="text" className="form-control" placeholder="Enter Your First name" ref={register()} name= {`users[${index}].firstName`} defaultValue={item.firstName}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Enter Your Last name" ref={register()} name= {`users[${index}].LastName`}defaultValue={item.LastName}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Enter Your E-mail Address"ref={register()} name= {`users[${index}].emailAddress`}defaultValue={item.emailAddress}/>
          </div>
          <div className="col">
            <select className="form-control" id="state" ref={register()} name= {`users[${index}].state`} defaultValue={item.state}>
              <option value="">Select Your State</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Bihar">Bihar</option>
              <option value="Assam">Assam</option>
              <option value="Goa">Goa</option>
              <option value="Manipur">Manipur</option>
            </select>
          </div>
          <div className='col'>
            <button className='dlt-btn'onClick={()=>remove(index)}>Delete</button>
          </div>
        </div>
        ))
      }
        <button className='btn' type='submit'onClick={()=>append({firstName:"",LastName:"",emailAddress:"",state:""})}>Add User</button>
      </div>
    </div>
  )
}
function App() {
  const { register, handleSubmit ,control} = useForm()
  const basicform = (
    <div className="card">
      <div className="card-header">Basic Information</div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" className="form-control" name='fullname' {...register("fullname")} id="fullname" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name='email' {...register("email")} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" className="form-control" id="phone" name='phone' {...register("phone")} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name='password' {...register("password")} />
        </div>
      </div>
      <button type='submit'>Submit</button>
    </div>

  )
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      <div className='container py-5'>
        <form onSubmit={handleSubmit(onSubmit)}>{basicform}
        <UserInformation register={register} control={control}/>
        </form>
      </div>
    </div>
  );
}

export default App;
