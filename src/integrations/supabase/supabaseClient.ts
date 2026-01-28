// data/infrastructure/integrations/supabase/supabaseClient.ts
// This file:
// * is imported only inside integrations/supabase
// * is never imported by features!

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
);
