import { adaptRoute } from '@/main/adapters'
import {
  makeDateTimeController,
} from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/date-time/:timeType', adaptRoute(makeDateTimeController()))

  router.get('/', (req, res) => {
    res.json({ apiStatus: 'API Working !!' })
  })
}
