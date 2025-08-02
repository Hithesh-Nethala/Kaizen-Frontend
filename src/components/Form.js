import './styling/Form.css'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from './Api_Path'
const Form = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        message:''
    })
    const [msg,setMsg]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const fields=[
        {
            type:'text',
            placeholder:'First Name*',
            name:'username'
        },
        {
            type:'text',
            placeholder:'Last Name*'
        },
        {
            type:'number',
            placeholder:'Phone Number*'
        },
        {
            type:'email',
            placeholder:'Email ID*',
            name:'email'
        },
        {
            type:'date',
            placeholder:'Date of birth*'
        },
        {
            type:'text',
            placeholder:'Job Title*'
        },
        {
            type:'date',
            placeholder:'Date of Diagnosis*'
        },
        {
            type:'text',
            placeholder:'Type of Diagnosis*'
        },
    ]
    const changeHandle=(e)=>{
        if(e.target.value){
            setData({...data,[e.target.name]:e.target.value})
        }
        // console.log(data);
    }
    const submitHandle=async(e)=>{
        e.preventDefault();
        if(data){
            await axios.post(`${API_URL}/user/register`,data)
            .then((res)=>{console.log(res.data);setMsg(res.data);setErrMsg('')})
            .catch((err)=>{console.log(err.response.data);setErrMsg(err.response.data);setMsg('')})
        }
        
    }
  return (
    <div className='Form-cont'>
        {msg!==''?<p className='m-0 p-0 Form-msg'>{msg}</p>:null}
        {errMsg!==''?<p className='m-0 p-0 Form-errMsg'>{errMsg}</p>:null}
        <h3 className='Form-h'>Claim Form</h3>
        <form onSubmit={submitHandle} className='d-flex flex-direction flex-wrap'>
            {fields&&fields.map((item, index) => {
      return (
        <div key={index} className="Form-field">
            <label className="Form-label">{item.placeholder}</label>
            <input
                type={item.type}
                className="Form-input"
                placeholder=''
                name={item.name}
                required
                maxLength={item.type === 'number' ? 10 : undefined}
                onChange={(e)=>changeHandle(e)}
            />
        </div>

      );
    })}
        <div className='textarea'>
            <label className="Form-label">Tell us your story (optional): </label>
            <input type='textarea' className='Form-input' name='message' onChange={(e)=>changeHandle(e)}></input>
        </div>
        <div className='d-flex flex-row mb-1'>
            <input type="checkbox" required/>
            <label className='Form-agree'> I agree to the privacy policy and disclaimer and give my express written consent to be contacted regarding my case options. I understand that I may 
                    be contacted using automatic dialing equipment. Message and data rates 
                    may apply. My consent does not require purchase. This is Legal advertising.
            </label>
        </div>
        <div className='d-flex flex-row mb-3'>
            <input type='checkbox' required/>
            <label className='Form-agree'>Please check this box to verify you're a person.</label>
        </div>
        <div className='Form-btn'><button className='btn btn-light Form-button' type='submit'>Start your claim now</button></div>
        </form>
    </div>
  )
}

export default Form