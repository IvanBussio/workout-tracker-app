import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://iyxgigpkljusqkudhjvt.supabase.co";

const supabaseKey =
  "TU_KEY";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);