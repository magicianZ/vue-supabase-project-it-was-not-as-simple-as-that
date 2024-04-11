import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://bjzlvnzpbjsyjqrmjaca.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqemx2bnpwYmpzeWpxcm1qYWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzU1MTIsImV4cCI6MjAyNzkxMTUxMn0.NzjzleAZXNzOWI3XpfEL-FjyY-aNqv_qjJuyDdmHrSM')