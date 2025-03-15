/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export const insertUserData = async (formData: any, userId: string) => {
//   const { error } = await supabase.from("client_profiles").insert([
//     {
//       user_id: userId,
//       brand: formData.brand,
//       campaign: formData.campaign,
//       name: formData.name,
//       phone: formData.phone,
//       total_media_budget: formData.totalMediaBudget,
//       overview: formData.overview,
//       objectives: formData.objectives,
//       requirements: formData.requirements,
//       primary_target_audience: formData.primaryTargetAudience,
//       secondary_target_audience: formData.secondaryTargetAudience,
//       call_to_action: formData.callToAction,
//       projected_timeline: formData.projectedTimeline,
//       important_dates: formData.importantDates,
//       other_information: formData.otherInformation || null,
//       words_per_month: formData.wordsPerMonth,
//     },
//   ]);

  

//   if (error) {
//     console.error("Database Error:", error);
//     throw error;
//   }

//   console.log("User data inserted successfully!");
// };

export const insertUserData = async (formData: any, userId: string) => {
    // Validate UUID
    if (!/^[0-9a-fA-F-]{36}$/.test(userId)) {
      console.error("❌ Invalid UUID for user_id");
      throw new Error("Invalid user_id format");
    }
  
    // Ensure date format is correct
    const formatDate = (date: string) => date?.split("T")[0] || null;
  
    const payload = {
      user_id: userId,
      brand: formData.brand,
      campaign: formData.campaign,
      name: formData.name,
      phone: formData.phone,
      total_media_budget: formData.totalMediaBudget,
      overview: formData.overview,
      objectives: formData.objectives,
      requirements: formData.requirements,
      primary_targ: formData.primaryTargetAudience, // Corrected
      secondary_ta: formData.secondaryTargetAudience, // Corrected
      call_to_actio: formData.callToAction, // Corrected
      projected_tin: formatDate(formData.projectedTimeline), // Corrected & formatted
      important_da: formatDate(formData.importantDates), // Corrected & formatted
      other_inform: formData.otherInformation || null, // Corrected
    };
  
    console.log("🔍 Sending payload:", payload);
  
    const { error } = await supabase.from("client_profiles").insert([payload]);
  
    if (error) {
      console.error("❌ Database Error:", error);
      throw error;
    }
  
    console.log("✅ User data inserted successfully!");
  };
  
  