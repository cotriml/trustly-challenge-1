import { DateTimeController } from '@/presentation/controllers'
import { ok, serverError } from '@/presentation/helpers'
import { throwError } from '@/tests/domain/mocks'
import { CallServiceByHttpSpy } from '@/tests/presentation/mocks'

import env from '@/main/config/env'

const mockRequest = (): DateTimeController.Request => {
  return {
    timeType: 'utc'
  }
}

type SutTypes = {
  sut: DateTimeController
  callServiceByHttpSpy: CallServiceByHttpSpy
}

const makeSut = (): SutTypes => {
  const callServiceByHttpSpy = new CallServiceByHttpSpy()
  const sut = new DateTimeController(callServiceByHttpSpy)
  return {
    sut,
    callServiceByHttpSpy
  }
}

describe('DateTimeController', () => {
  test('Should call CallServiceByHttpSpy with correct values', async () => {
    const { sut, callServiceByHttpSpy } = makeSut()
    const request = mockRequest()
    const httpServiceParams = {
      uri: env.dateTimeAPI.replace(':timeType', request.timeType),
      method: 'GET'
    }
    await sut.handle(request)
    expect(callServiceByHttpSpy.params).toEqual(httpServiceParams)
  })

  test('Should return 500 if CallServiceByHttpSpy throws', async () => {
    const { sut, callServiceByHttpSpy } = makeSut()
    jest.spyOn(callServiceByHttpSpy, 'callService').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success ', async () => {
    const { sut, callServiceByHttpSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(callServiceByHttpSpy.result.data))
  })
})
