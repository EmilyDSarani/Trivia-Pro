import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.TRIVIA_SUPABASE_URL
const supabaseAnonKey = import.meta.env.TRIVIA_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const parseData = ({ data, error }) => {
    if (error) throw error;
  
    return data;
};