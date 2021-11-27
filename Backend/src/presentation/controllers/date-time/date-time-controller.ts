import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { CallServiceByHttp } from '@/domain/usecases'
import env from '@/main/config/env'

export class DateTimeController implements Controller {
  constructor (
    private readonly callServiceByHttp: CallServiceByHttp
  ) { }

  async handle (request: any): Promise<HttpResponse> {
    try {
      const { timeType } = request

      const dateTimeAPI = env.dateTimeAPI
      const uri = dateTimeAPI.replace(':timeType', timeType)

      const httpServiceParams = {
        uri: uri,
        method: 'GET'
      }

      const serviceHttpResponse = await this.callServiceByHttp.callService(httpServiceParams)

      return ok(serviceHttpResponse.data)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DateTimeController {
  export type Request = {
    timeType: string
  }
}
