import { AxiosInstance } from 'axios'
import { Feedback } from '@/types/feedback'
import { RequestErrors } from '@/types/errors'

type Create = {
  data: Feedback;
  errors: RequestErrors | null;
}

type CreatePayload = {
  type: string;
  text: string;
  fingerprint: string;
  apiKey: string;
  device: string;
  page: string;
}

export interface FeedbacksServiceInterface {
  create(create: CreatePayload): Promise<Create>;
}

export default function FeedbacksService (httpClient: AxiosInstance): FeedbacksServiceInterface {
  async function create (payload: CreatePayload): Promise<Create> {
    const response = await httpClient.post<Feedback>('/feedbacks', payload)
    let errors: RequestErrors | null = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    return {
      data: response.data,
      errors
    }
  }
  return {
    create
  }
}
