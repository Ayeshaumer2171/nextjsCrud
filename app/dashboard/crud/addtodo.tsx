   
   import { supabase } from "@/app/api/supabase";

  export const addTodo = async (formData: FormData) => {
  "use server";
  const stdname = formData.get("stdname") || "Data not available";
  const courses = formData.get("courses") || "Data not available";

  await supabase.from("student").insert([{ stdname,courses }]);

   };