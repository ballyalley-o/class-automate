import path from 'path'
import express, { Request, Response } from 'express'
// @constants
import { RESPONSE } from '@constants'
import { GLOBAL } from '@config'
import { PARAM } from '@routing'

const PROD_ENV = 'production'

const serverRoute = (app: any) => {
  if (GLOBAL.env === PROD_ENV) {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, PARAM.buildLoc)))
    app.get('*', (req: Request, res: Response) => res.sendFile(PARAM.buildView))
  } else {
    app.get(PARAM.home, RESPONSE.server)
  }
}

export default serverRoute