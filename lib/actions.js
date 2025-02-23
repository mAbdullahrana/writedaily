"use server";

import { supabase } from "@/app/_services/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";

export async function signInAction(provider) {
  await signIn(provider, { redirectTo: "/pages" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function getUser(email) {
  let { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return data;
}

export async function createEntrie() {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  const { data, error } = await supabase
    .from("entries")
    .insert([{ userID: session.user.id }])
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

export async function getAllEntrie() {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  const { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("userID", session.user.id)
    .order("created_at", { ascending: false }); // orders entries from newest to oldest

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}
export async function getAllFolder() {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  const { data, error } = await supabase
    .from("folders")
    .select("*")
    .eq("userID", session.user.id);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}
export async function createFolder(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  const name = formData.get("name");

  const { error } = await supabase
    .from("folders")
    .insert([{ userID: session.user.id, name }])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  revalidatePath("/library");
}

export async function deleteFolder(folderID) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  // Removing entries from folder
  await supabase
    .from("entries")
    .update({ folderID: null })
    .eq("folderID", folderID);

  // Deleting the folder
  const { error } = await supabase.from("folders").delete().eq("id", folderID);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  revalidatePath("/library");
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
  const { error } = await supabase
    .from("entries")
    .update({ folderID })
    .eq("id", id);

  if (error) {
    console.error("Update error:", error.message);
    throw new Error(error.message);
  }

  revalidatePath("/library");
}
