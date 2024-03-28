import { createClient } from '@/config/supabase/server';
import { supabase } from '@/config/supabase/supabase';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
