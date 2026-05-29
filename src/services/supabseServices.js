import { supabase } from '../lib/supabase';

export async function fetchTreatment(treatment) {
  try {
    const treatmentObj = await supabase
      .from('treatments')
      .select('*')
      .eq('treatName', treatment)
      .single();
    const data = await treatmentObj.data;
    return data;
  } catch (error) {
    return new Error(error.message);
  }
}

export async function fetchAilments() {
  try {
    const ailmentsObj = await supabase.from('ailments').select('*');
    const data = await ailmentsObj.data;
    return data;
  } catch (error) {
    return new Error(error.message);
  }
}

export async function fetchAilment(ailLink) {
  try {
    const ailment = await supabase
      .from('ailments')
      .select('*')
      .eq('ailLink', ailLink);

    const data = await ailment.data;
    return data;
  } catch (error) {
    return new Error(error.message);
  }
}
