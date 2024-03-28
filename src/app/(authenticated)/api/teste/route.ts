import { createClientFromServer } from '@/config/supabase/server'

export async function GET() {

    const supabase = createClientFromServer()

    const { data, error } = await supabase.from('clientes_teste').select('*')
    console.log(data)
    if (error) {
        return new Response(JSON.stringify({
            error: error
        }), {
            status: 400,
        })
    }

    return new Response(JSON.stringify(data), {
        status: 200,
    });
}