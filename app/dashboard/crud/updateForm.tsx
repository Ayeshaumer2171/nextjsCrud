'use client'
import { supabase } from "@/app/api/supabase";


import { useState } from 'react';

const UpdateForm = ({ item, handleUpdate }) => {
  const [updatedName, setUpdatedName] = useState(item.stdname);
  const [updatedCourses, setUpdatedCourses] = useState(item.courses);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUpdate(item.id, updatedName, updatedCourses);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
        placeholder="Update Name"
      />
      <input
        type="text"
        value={updatedCourses}
        onChange={(e) => setUpdatedCourses(e.target.value)}
        placeholder="Update Courses"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
