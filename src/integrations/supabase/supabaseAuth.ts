// data/infrastructure/integrations/supabase/supabaseAuth.ts
// Pure integration glue
import { supabase } from "./supabaseClient";

export async function getSession() {
    const { data } = await supabase.auth.getSession();
    return data.session;
}

export async function signIn(email: string, password: string) {
    return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
    return supabase.auth.signOut();
}
