// data/infrastructure/integrations/supabase/supabaseDb.ts
// Low-level database table access
// Very small surface area:
// * easy to unit test/mock
// easy to replace later (or with another database, in an equivalent integration!)
import { supabase } from "./supabaseClient";

export function from<T>(table: string) {
    return supabase.from<T>(table);
}
