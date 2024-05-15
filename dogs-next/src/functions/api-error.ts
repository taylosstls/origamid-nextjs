export default function apiError(error: unknown): { ok: false; error: string; data: null } {
  return error instanceof Error ?
      {data: null, ok: false, error: error.message} :
      {data: null, ok: false, error: 'Erro genérico'}
}