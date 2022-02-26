import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client which helps to send queries to the server
 * @type {SupabaseClient}
 */
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
