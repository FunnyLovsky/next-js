import React from 'react'
import { AuthPage } from '@/pages/Auth'
import { MetaLayout } from '@/widgets/MetaLayout'
import { SuspenseWrapper } from '@/app/providers/router'

const Auth = () => {
    return (
        <MetaLayout title="GLAMIFY - Войти или зарегистрироваться" noIndex={true}>
            <SuspenseWrapper>
                <AuthPage />
            </SuspenseWrapper>
        </MetaLayout>
    )
}

export default Auth
