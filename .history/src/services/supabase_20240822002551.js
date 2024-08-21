import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fdlazctxvvleqwrczhkm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkbGF6Y3R4dnZsZXF3cmN6aGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTkxMzUsImV4cCI6MjAzOTgzNTEzNX0.3gwxqU5CNwGNoz4kNRozf4nViw8esoLa7XjKr8iskvA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
