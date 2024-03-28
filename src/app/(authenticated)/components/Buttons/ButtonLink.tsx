import React from 'react'
import { useRouter } from 'next/navigation'


export default function ButtonLink({ link }) {
    const router = useRouter()
    return (
        <button className='bg-primary-dark hover:bg-primary py-2 px-4 text-white text-sm rounded-md' onClick={() => router.push(link)}>Acessar</button>

    )
}
