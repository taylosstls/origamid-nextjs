'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function logoutAccount() {
  cookies().delete('token');
  redirect('/login');
}
