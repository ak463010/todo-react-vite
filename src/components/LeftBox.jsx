import React, { useEffect, useState } from 'react'

function LeftBox({ data, openModel }) {
   return (
      <div className='flex flex-col bg-gray-100 w-[30%]'>
         <div className="top bg-gray-200 flex justify-between p-1">
            <button className='btn bg-gray-300 p-1 text-black rounded-sm' onClick={openModel}>Add Todo</button>
            <button>Search</button>
         </div>
         <div className="button">
            <ul>
               <li>hello</li>
               <li>ho</li>
               <li>can</li>
            </ul>
         </div>
      </div>
   )
}

export default LeftBox