"use server";

import { supabase } from "@/app/_components/_services/supabase";

export async function getEntrie() {
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

export async function updateNoteBookTitle(newTitle) {
  // const { data: { user } } = await supabase.auth.getUser(); // Get logged-in user

  // Update using the fetched entry ID
  const { data, error } = await supabase
    .from("entries")
    .update({ title: newTitle })
    .eq("id", "c47610d9-9e28-439f-b181-592b9807f029") 
    .select("title");

  if (error) throw new Error(error.message);

  return data;
}

export async function getAllEntrie(userID) {
  const { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("userID", userID);

  if (error) throw new Error(error.message);

  return data;
}
