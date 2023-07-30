import { supabase,parseData } from "./supa";

export async function getQuestion() {
    const request = await supabase
    .from('trivia')
    .select()
    .order('Question');
    return parseData(request);
  }

export async function getQuestionById(id){
    const request = await supabase
    .from('trivia')
    .select('*')
    .match({ id })
    .single();
    return parseData(request)
}

  export async function createQuestion({ Question, Answer }) {
    const request = await supabase
    .from('trivia')
    .insert({ Question, Answer });
    return parseData(request);
  }