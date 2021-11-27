import { makeCallServiceByHttp } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { DateTimeController } from '@/presentation/controllers'

export const makeDateTimeController = (): Controller => {
  const controller = new DateTimeController(makeCallServiceByHttp())
  return controller
}
