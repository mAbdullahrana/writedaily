"use server";

import { supabase } from "@/app/_services/supabase";
import { revalidatePath } from "next/cache";

export async function getEntrie({entrieID}) {
  let { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("id", entrieID)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Entries not found");
  }

  return data;
}

export async function getAllEntrie({userID}) {
  const { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("userID", userID);

  if (error) throw new Error(error.message);

  return data;
}

export async function updateEntrie({currentContent: newContent , entrieID}) {

  const { data, error } = await supabase
    .from("entries")
    .update({ content: newContent })
    .eq("id", entrieID)
    .select("content");

  if (error) throw new Error(error.message);

  revalidatePath("/");
  return data;
}

export async function updateNoteBookTitle({title : newTitle , entrieID}) {
  // const { data: { user } } = await supabase.auth.getUser(); // Get logged-in user

  // Update using the fetched entry ID
  const { data, error } = await supabase
    .from("entries")
    .update({ title: newTitle })
    .eq("id",entrieID)
    .select("title");

  if (error) throw new Error(error.message);

  revalidatePath("/");
  return data;
}
