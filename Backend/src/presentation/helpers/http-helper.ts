import { ServerError } from '@/presentation/errors'
import { HttpResponse } from '@/presentation/protocols/http'

export const serverError = (error: any): HttpResponse => {
  let statusCode = 500
  let body = new ServerError(error.stack)

  if (error.isAxiosError) {
    statusCode = error.response.status
    body = error
  }

  return {
    statusCode,
    body
  }
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

