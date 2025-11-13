import React from 'react'

export default function Contact() {
  return (
    <div className='p-14 flex flex-col items-center gap-4'>
      <h2 className='text-center text-2xl font-semibold'>Contact Us</h2>

      {/* form */}
      <div className='w-full lg:w-2/4 bg-gray-100 drop-shadow-2xl mx-auto p-10 rounded'>
        <form action="#" className='flex flex-col flex-wrap gap-4'>

          {/* Name */}
         <div>
          <label htmlFor="name">Name:</label>
          <input type="text"
                 placeholder='Enter Name'
                 className='bg-white p-4 w-full mt-2 rounded-xl shadow outline-gray-400 outline-offset-4' />
         </div>

         {/* Email */}
         <div>
          <label htmlFor="name" className='mt-3'>Email:</label>
          <input type="email"
                 placeholder='Enter Email'
                 className='bg-white p-4 w-full mt-2 rounded-xl shadow outline-gray-400 outline-offset-4' />       
         </div>

         {/* message */}
         <div>
          <label htmlFor="name" className='mt-3'>Message:</label>
          <textarea name="msg" 
                    id="msg" 
                    rows="5"
                    cols='5'
                    placeholder='Leave your message.....'
                    className='bg-white p-4 w-full mt-2 rounded-xl shadow outline-gray-400 outline-offset-4'>
          </textarea>
         </div>

         {/* Submit Button */}
         <button type='submit' 
                 className='bg-rose-700 text-white w-full py-3 text-xl rounded-xl shadow cursor-pointer'
                 onClick={(e)=> e.preventDefault()}
                 >
                  Submit
          </button>
        </form>
      </div>
    </div>
  )
}
