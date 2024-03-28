'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClientFromServer } from '@/config/supabase/server'
import { message } from 'antd'


export async function loginSupabase(email: string, senha: string) {
    const supabase = createClientFromServer()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: email,
        password: senha
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log(error)
        message.error('Erro ao tentar fazer login!')
        // redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function singUpSupabase(email: string, senha: string) {
    const supabase = createClientFromServer()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: email,
        password: senha
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}