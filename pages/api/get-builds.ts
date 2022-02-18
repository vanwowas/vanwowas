import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/db'
const handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> =
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const { price, ...place } = req.query
            const builds = await db.getBuilds(
                {
                    name: place.name as unknown as string,
                    lat: Number(place.lat as unknown as string),
                    lon: Number(place.lon as unknown as string),
                    zipCode: place.zip as unknown as string,
                },
                Number(price) as number
            )
            return res.status(200).json(builds)
        } catch (e) {
            return res.status(500).json({ error: 'Unexpected error.' })
        }
    }

export default handler
