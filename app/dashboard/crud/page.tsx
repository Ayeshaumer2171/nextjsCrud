
  import { supabase } from "@/app/api/supabase";
  import Form from "@/app/dashboard/crud/form";
  import  {Table} from '@/app/dashboard/crud/table'

  export const revalidate = 0;



  async function Students() {
  
   return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-4 ">Student details:</h1>
             <Form />
            <Table />
    </div>
  );
  }
export default Students;