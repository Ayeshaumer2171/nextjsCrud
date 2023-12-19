 import { addTodo } from '@/app/dashboard/crud/addtodo'


 import React from 'react'

 export default function Form() {
  return (
    <div>
    <form action={addTodo} className="text-center m-10">
        <input type="text" name="stdname" placeholder="Student Name" className="border rounded-md p-2 m-2" />
        <input type="text" name="courses" placeholder="courses " className="border rounded-md p-2 m-2" />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  )
}

