import { supabase } from '../lib/supabase';

export async function fetchTreatment(treatment) {
  try {
    const treatmentObj = await supabase
      .from('treatments')
      .select('*')
      .eq('treatName', treatment)
      .single();
    const data = treatmentObj.data;
    return data;
  } catch (error) {
    return new Error(error.message);
  }
}
