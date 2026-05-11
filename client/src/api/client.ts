import { supabase } from "../lib/supabase";
export interface Workout {
  id?: string;
  name: string;
  type?: string;
  username?: string;
  created_at?: string;
}

export const getWorkouts = async (): Promise<
  Workout[]
> => {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
};

export const createWorkout = async (
  workout: Workout
): Promise<Workout | null> => {
  const { data, error } = await supabase
    .from("workouts")
    .insert([workout])
    .select()
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
};

export const deleteWorkout = async (
  id: string
): Promise<void> => {
  const { error } = await supabase
    .from("workouts")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
  }
};