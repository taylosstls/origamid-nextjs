'use server';

import { STATS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};

export default async function statsGet() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Acesso negado.');

    const getStats = STATS_GET();
    const response = await fetch(getStats.url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60, // revalida a cada 1 minuto
      },
    });

    if (!response.ok) throw new Error('Erro ao buscar os dados');

    const data = (await response.json()) as StatsData[];
    console.log(data);

    return { data, ok: true, error: '' };
  } catch (error) {
    console.log(error);
    return apiError(error);
  }
}
