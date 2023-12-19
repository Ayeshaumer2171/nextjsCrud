 import { createClient } from '@supabase/supabase-js';

 const supabaseUrl = 'https://uaasmnfmammmhxtjjajg.supabase.co';
 const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhYXNtbmZtYW1tbWh4dGpqYWpnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTE2Njk5MSwiZXhwIjoyMDE2NzQyOTkxfQ.fUtvcrbBu-nla-6a-fIqTJT5IMXcZ826eF-_Mbek-u4';

 export const supabase = createClient(supabaseUrl, supabaseKey);
