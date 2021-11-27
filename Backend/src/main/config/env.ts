import * as dotenv from 'dotenv'
dotenv.config()

export default {
  dateTimeAPI: process.env.DATETIMEAPI || '',
  port: process.env.PORT || '3000',
}
