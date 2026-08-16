import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://puletlpcudckzwwqqftg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bGV0bHBjdWRja3p3d3FxZnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4MzY0MzUsImV4cCI6MjEwMjQxMjQzNX0.kJPxUWnEk-gw-E2rYpzOxTnxEbOOBUYL-VBGejWgCrM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);