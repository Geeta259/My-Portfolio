import React , { useState , useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function RightContact() {
    const[username,setusername] = useState("");
    const[email,setemail] = useState("");
    const[phoneno,setphoneno] = useState("");
    const[message,setmessage] = useState("");
    const[success,setsuccess] = useState("");
    const[error,seterror] = useState("");
     const emailValidation = ()=>{
        return String(email).toLocaleLowerCase().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    }

    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_qyn6wcu', 'template_kre2ixs', form.current, '4-pg2FzuaBvMMabHl')
          .then((result) => {
            setsuccess(`Thankyou !! ${username} for contact with me`);
             
            seterror("");
            setusername("");;
            setemail("");
            setphoneno("");
            setmessage("");

          }, (error) => {
            seterror("Something went wrong.. message not sent");
          });
      };

    const handleClick=(event)=>{
            event.preventDefault();

            if(username === '')
            { seterror("User name is required!");}
            else if(email === '')
            { seterror("Email is required!");}
            else if(!emailValidation(email))
            { seterror("Please enter a valid email");}
            else if(phoneno === '')
            { seterror("Phone no is required!");}
            else if(message === '')
            { seterror("Message is required!");}
            else
            { sendEmail();}
           
    }

    


  return (
  
    <div className='w-full lgl:w-[60%] h-full lgl:p-8  rounded-lg  flex flex-col justify-center'>

                    <form ref={form} className='w-full flex flex-col gap-5 py-6 font-textFont'>
                            
                                {error && (<p className='pt-3 text-center text-pink-600 text-xl text-base tracking-wide animate-bounce'>{error}</p>)}
                            
                              { success && (<p className='pt-3 text-center text-green-500 text-xl text-base tracking-wide animate-bounce'>{success}</p> )}

                          

                            <div className='flex flex-col gap-3'>
                                    <input onChange={(e)=>setusername(e.target.value)} value={username}
                                    className={`contactInput h-12 ${error === 'User name is required!' && "outline-pink-600 border-b-transparent"}`} type="text" placeholder='Your Name' name="user_name"/>
                                </div>


                                <div className='flex flex-col gap-3'>
                                    <input onChange={(e)=>setemail(e.target.value)} value={email}
                                    className={`contactInput h-12 ${error === 'Email is required!' && "outline-pink-600 border-b-transparent"}`} type="text" placeholder='Your Email' name="user_email"/>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <input onChange={(e)=>setphoneno(e.target.value)} value={phoneno}
                                    className={`contactInput h-12 ${error === 'Phone no is required!' && "outline-pink-600 border-b-transparent"}`}  type="text" placeholder='Contact No' name="phoneno"/>
                                </div>

                           

                                <div className='flex flex-col gap-3'>
                                    <textarea onChange={(e)=>setmessage(e.target.value)} value={message} 
                                    className={`contactInput py-2 h-23 ${error === 'Message is required!' && "outline-pink-600 border-b-transparent"}`}  cols="30" rows="6" placeholder='Enter something..'  name="message"/>
                                </div>
                                  
                                <div>
                                    <button onClick={handleClick} className='rounded-lg border-[1px] border-pink-700  w-30 text-white text-xl px-4 active:outline-none h-12 cursor-pointer hover:bg-pink-800'>Send Message</button>
                                </div>
                         
                    </form>
                </div>

  )
}
