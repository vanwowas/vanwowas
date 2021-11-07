import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import ImageGrid from '../lib/components/ImageGrid'
import Page from '../lib/components/Page'

const InspirationPage: React.FC = () => {
    const AuthUser = useAuthUser()

    return (
        <Page user={AuthUser} withPadding>
            <ImageGrid
                images={[
                    'https://images.unsplash.com/photo-1592151450113-bdf5982da169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80',
                    'https://images.unsplash.com/photo-1569850402748-11f762e9be07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                    'https://images.unsplash.com/photo-1506057278219-795838d4c2dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                    'https://images.unsplash.com/photo-1521973289773-1d99478a9973?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80',
                    'https://images.unsplash.com/photo-1486330071120-ba4e79e49431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
                    'https://images.unsplash.com/photo-1512075735503-c265d3d40579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80',
                ]}
            />
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(InspirationPage)
