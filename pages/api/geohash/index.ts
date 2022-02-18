import { NextApiRequest, NextApiResponse } from 'next'
import zipCodes from './data.json'
const handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> =
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const zipCode = req.query.zip as string
            const data = zipCodes.find((el) => el.zipCode === zipCode)
            return res.status(200).json(data)
        } catch (e) {
            return res.status(500).json({ error: 'Unexpected error.' })
        }
    }

export default handler
