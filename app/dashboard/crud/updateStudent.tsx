import { supabase } from "@/app/api/supabase";
import { getStudents } from "@/app/dashboard/crud/table";

export const UpdateStudent = async (item: any) => {

  const stdname = prompt("Update your Name ", item.stdname);
  const courses = prompt("Update your Contact No", item.courses);
  const updatedName = stdname !== null ? stdname : item.stdname;
  const updatedCourses = courses !== null ? courses : item.courses;

  try {
    const { data, error } = await supabase
      .from("student")
      .update({
        stdname: updatedName, 
        courses: updatedCourses,
      })
      .eq("id", item.id);

    if (error) {
      console.error("Error updating data: ", error);
      return;
    }
    await getStudents();
  } catch (error) {
    console.error("Error updating data: ", error);
  }
};
