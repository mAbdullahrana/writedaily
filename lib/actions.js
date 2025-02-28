"use server";

import { supabase } from "@/app/_services/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";

export async function signInAction(provider) {
  await signIn(provider, { redirectTo: "/pages" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}

export async function getUser(email) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}
export async function updateUser(updatedField) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");
  const { data } = await supabase
    .from("users")
    .update(updatedField)
    .eq("id", session.user.id)
    .single();
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

export async function getRecentUsers() {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  const sevenDaysAgo = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    // Fetch only users created on or after 7 days ago
    .gte("created_at", sevenDaysAgo)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getLeaderboard() {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("longestStreak", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error fetching leaderboard:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function updateUserStreak() {
  const session = await auth();

  if (!session) throw new Error("You must be logged in to update the profile");

  // 1. Determine the start of today in UTC
  const today = new Date();
  const startOfToday = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  );
  const startOfTodayISO = startOfToday.toISOString();

  // 2. Check if there's already an entry for today
  const { count, error: countError } = await supabase
    .from("entries")
    .select("id", { count: "exact", head: true })
    .eq("userID", session.user.id)
    .gte("updated_at", startOfTodayISO);

  if (countError) {
    console.error("Error checking today's entries:", countError.message);
    throw new Error(countError.message);
  }

  // If the user already has more than one entry today, assume the streak was updated already.
  if (count > 1) {
    return;
  }

  // 3. Fetch the user's current streak data from the "users" table.
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("currentStreak, longestStreak")
    .eq("id", session.user.id)
    .single();

  if (userError) {
    console.error("Error fetching user data:", userError.message);
    throw new Error(userError.message);
  }

  // Initialize currentStreak to 0 if it's null (e.g., for new users)
  const currentStreak = userData.currentStreak || 0;

  // 4. Get the most recent entry before today
  const { data: lastEntry, error: lastEntryError } = await supabase
    .from("entries")
    .select("updated_at")
    .eq("userID", session.user.id)
    .lt("updated_at", startOfTodayISO)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (lastEntryError) {
    console.error("Error fetching last entry:", lastEntryError.message);
    throw new Error(lastEntryError.message);
  }

  // 5. Determine new current streak based on the previous entry date
  let newCurrentStreak = 1; // Default to 1 if no previous entry
  if (lastEntry && lastEntry.updated_at) {
    const lastEntryDate = new Date(lastEntry.updated_at);
    const lastEntryDateStr = lastEntryDate.toISOString().split("T")[0];

    // Calculate yesterday's date string (in YYYY-MM-DD format)
    const yesterday = new Date(startOfToday);
    yesterday.setUTCDate(startOfToday.getUTCDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    // If the last entry was exactly yesterday, continue the streak
    if (lastEntryDateStr === yesterdayStr) {
      newCurrentStreak = currentStreak + 1;
    }
  }

  // 6. Update the longest streak if needed
  const newLongestStreak = Math.max(
    newCurrentStreak,
    userData.longestStreak || 0
  );

  // 7. Update the user's streaks in the "users" table
  const { data: updateData, error: updateError } = await supabase
    .from("users")
    .update({
      currentStreak: newCurrentStreak,
      longestStreak: newLongestStreak,
    })
    .eq("id", session.user.id);

  if (updateError) {
    console.error("Error updating user streak:", updateError.message);
    throw new Error(updateError.message);
  }

  return updateData;
}
