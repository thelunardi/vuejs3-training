import mockAxios from 'axios'
import UserService from './users'

jest.mock('axios')

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return data from user logged', async () => {
    const results = {
      id: "eab759f8-f238-4ff9-ae91-ee1558982329",
      name: "Lele",
      email: "lele@lele.com",
      apiKey: "fcd5015c-10d3-4e9c-b395-ec7ed8850165",
      createdAt: 1599264000000
    }
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: { ...results }})
    })

    const response = await UserService(mockAxios).getMe()

    expect(response.data).toHaveProperty('id')
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toHaveProperty('apiKey')
    expect(response.data).toHaveProperty('createdAt')
  })

  it('should return a new api key', async () => {
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { apiKey: '123' }})
    })

    const response = await UserService(mockAxios).generateApiKey()

    expect(response.data).toHaveProperty('apiKey')
  })
})
