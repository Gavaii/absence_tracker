import { ApiRoutes } from "@/_shared/routes.helper"
import type { EventDTO } from "@/_shared/types/Event"
import useSWR from "swr"

export const useCalendarEvents = () => {
  const { data, error, isLoading } = useSWR<EventDTO[]>(ApiRoutes.EVENTS)

  return {
    events: data,
    isLoading,
    error
  }
}