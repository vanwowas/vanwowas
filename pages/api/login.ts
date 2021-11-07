import { NextApiRequest, NextApiResponse } from 'next'
import { setAuthCookies } from 'next-firebase-auth'
import initAuth from '../../lib/firebase/initAuth'

initAuth()

const handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> =
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            await setAuthCookies(req, res)
        } catch (e) {
            console.log(e)
            return res.status(500).json({ error: 'Unexpected error.' })
        }
        return res.status(200).json({ success: true })
    }

export default handler
