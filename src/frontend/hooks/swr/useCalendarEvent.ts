import { ApiRoutes } from "src/shared/routes.helper"
import type { EventDTO } from "src/shared/types/Event"
import useSWR from "swr"

export const useCalendarEvents = () => {
  const { data, error, isLoading } = useSWR<EventDTO[]>(ApiRoutes.EVENTS)

  return {
    events: data,
    isLoading,
    error
  }
}