// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// You will get these URLs from your Supabase Dashboard later
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ldoxgfdgjtxbcnpvarcy.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkb3hnZmRnanR4YmNucHZhcmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MjA2MDAsImV4cCI6MjEwMTQ5NjYwMH0.X3QPn-hwWVlkCpATvYdF07MDQZ2_8k7f24wptSZrLQE';

export const supabase = createClient(supabaseUrl, supabaseKey);