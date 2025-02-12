import { supabase } from "./supabase";

export async function getAllEntries() {
  let { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("id", "c47610d9-9e28-439f-b181-592b9807f029")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Entries not found");
  }

  return data;
}
