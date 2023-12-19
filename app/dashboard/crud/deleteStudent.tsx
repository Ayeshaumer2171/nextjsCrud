"use server"

  import { supabase } from "@/app/api/supabase";


 export const deleteStudentById = async (item_id: number) => {
  try {
    const { data } = await supabase
      .from("student")
      .delete()
      .eq('id', item_id)
    console.log(" Delete data:", data)

  } catch (error) {
    console.error(error);
  }
 };


