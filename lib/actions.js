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
  const { data } = await supabase
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
  revalidatePath("/library");
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
    .order("created_at", { ascending: false });

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
  content,
  entrieID,
  updated_at,
  wordCount,
  goalMet,
}) {
  const { data, error } = await supabase
    .from("entries")
    .update({ content, updated_at, wordCount, goalMet })
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
  const { data, error } = await supabase
    .from("entries")
    .update({ title: newTitle })
    .eq("id", entrieID)
    .select("title");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
export async function setNoteBookGoal({ goal, entrieID }) {
  const { error } = await supabase
    .from("entries")
    .update({ goal: +goal })
    .eq("id", entrieID)
    .select("title");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  revalidatePath(`/write/${entrieID}`);
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

export async function getOverAllStats() {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  const entries = await getAllEntrie();

  let overAllStats = {
    totalWordsWritten: 0,
    totalDaysStarted: 0,
    totalDaysCompleted: 0,
  };

  const uniqueDays = new Set();

  entries.forEach((entry) => {
    overAllStats.totalWordsWritten += entry.wordCount;
    uniqueDays.add(entry.updated_at.split("T").at(0));

    if (entry.goalMet) {
      overAllStats.totalDaysCompleted++;
    }
  });

  overAllStats.totalDaysStarted = uniqueDays.size;

  return overAllStats;
}
