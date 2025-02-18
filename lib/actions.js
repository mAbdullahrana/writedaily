"use server";

import { supabase } from "@/app/_services/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEntrie() {
  const { data, error } = await supabase
    .from("entries")
    .insert([{ userID: "1c6e20b5-8e3a-433b-a50c-3e2071d57c09" }])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  revalidatePath("/pages");
  redirect(`/write/${data[0].id}`); // Ensure data[0] is used to access the first inserted entry
}

export async function deleteEntrie(entrieID) {
  const { error } = await supabase.from("entries").delete().eq("id", entrieID);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  revalidatePath("/pages");
}

export async function getEntrie({ entrieID }) {
  let { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("id", entrieID)
    .single();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getAllEntrie(userID) {
  const { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("userID", userID)
    .order("created_at", { ascending: false }); // orders entries from newest to oldest

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}
export async function getAllFolder(userID) {
  const { data, error } = await supabase
    .from("folders")
    .select("*")
    .eq("userID", userID);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function updateEntrie({
  currentContent: newContent,
  entrieID,
  updated_at,
}) {
  const { data, error } = await supabase
    .from("entries")
    .update({ content: newContent, updated_at })
    .eq("id", entrieID)
    .select("content");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  revalidatePath("/");
  return data;
}

export async function updateNoteBookTitle({ title: newTitle, entrieID }) {
  // const { data: { user } } = await supabase.auth.getUser(); // Get logged-in user

  // Update using the fetched entry ID
  const { data, error } = await supabase
    .from("entries")
    .update({ title: newTitle })
    .eq("id", entrieID)
    .select("title");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  revalidatePath("/");
  return data;
}

export async function updateEntryFolder({ id, folderID }) {
  const { data, error } = await supabase
    .from("entries")
    .update({ folderID })
    .eq("id", id)
    .select()
    .maybeSingle();

  if (error) {
    console.error("Update error:", error.message);
    throw new Error(error.message);
  }
  return data;
}
