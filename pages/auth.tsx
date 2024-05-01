import React from 'react'
import { AuthPage } from '@/pages/Auth'
import { MetaLayout } from '@/widgets/MetaLayout'

const Auth = () => {
    return (
        <MetaLayout title="GLAMIFY - Войти или зарегистрироваться" noIndex={true}>
            <AuthPage />
        </MetaLayout>
    )
}

export default Auth
