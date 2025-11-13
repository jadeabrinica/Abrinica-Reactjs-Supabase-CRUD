import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://xynzpyhkzbmhmeoaaral.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bnpweWhremJtaG1lb2FhcmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1Mzg4OTYsImV4cCI6MjA3NjExNDg5Nn0.gBT3C-xWp5aEWBRXspo_BV9Ox_kHtysIFHEX13aOOUs'


export const supabase = createClient(supabaseUrl, supabaseKey)




