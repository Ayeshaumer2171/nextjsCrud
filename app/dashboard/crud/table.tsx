'use client'

 import { supabase } from "@/app/api/supabase";
 import { deleteStudentById } from '@/app/dashboard/crud/deleteStudent';
 import {UpdateStudent} from '@/app/dashboard/crud/updateStudent'



   export const getStudents = async () => {
  const { data } = await supabase.from("student").select();
  console.log("Data:", data);
  return { data };
  };


  export const Table = async () => {


  let { data } = await getStudents();
  return (

    <div className="flex justify-center">
    <div>
      <table className="border-collapse border ">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Student Name</th>
            <th className="border p-3">Courses</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="bg-white">
              <td className="border p-3">{item.stdname}</td>
              <td className="border p-3">{item.courses}</td>
              <td className="border p-3">
                <button
                  onClick={() => deleteStudentById(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  className="bg-green-900 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                   onClick={() => UpdateStudent(item)}
                   >
                  Update
                </button>
        
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>


</div>
  )
          }


