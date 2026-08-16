/// <reference types="node" />
import { streamText } from 'ai';
import { google } from '@ai-sdk/google'; //
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase server client for validation
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  // 1. Extract the Authorization header sent from the frontend
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'Missing authorization header' }), { status: 401 });
  }

  const token = authHeader.replace('Bearer ', '');
  
  // 2. Validate the user session with Supabase
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    return new Response(JSON.stringify({ error: 'Unauthorized user session' }), { status: 401 });
  }

  // 3. User is authenticated! Proceed with Vercel AI SDK streaming
  const { messages } = await req.json();

  const result = streamText({
    // Use the newest stable Gemini model available to the account and allow override via env
    model: google(process.env.GEMINI_MODEL || 'gemini-3.7-flash'),
    messages,
    system: "You are Mesh AI, an intelligent co-pilot built natively into the Mesh social ecosystem.",
  });

  return result.toTextStreamResponse();
}