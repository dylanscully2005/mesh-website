// src/lib/logger.ts

type SupabaseClientLike = {
  from: (table: string) => {
    insert: (rows: Array<Record<string, unknown>>) => Promise<unknown>;
  };
};

function getSupabaseClient(): SupabaseClientLike | null {
  const maybeSupabase = (globalThis as typeof globalThis & {
    supabase?: SupabaseClientLike;
  }).supabase;

  return maybeSupabase ?? null;
}

export async function logErrorToSupabase(error: unknown, severity: 'warning' | 'error' | 'critical' = 'error') {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return;
  }

  const errorMessage = error instanceof Error ? error.message : String(error);
  const stackTrace = error instanceof Error ? error.stack : undefined;

  await supabase.from('error_logs').insert([
    {
      error_message: errorMessage,
      stack_trace: stackTrace,
      severity: severity
    }
  ]);
}