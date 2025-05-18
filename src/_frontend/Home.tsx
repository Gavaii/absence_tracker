import "./index.css";
import type { EventDTO } from "../_shared/types/Event";
import useSWR from "swr"
import { Card, CardContent } from "./components/ui/card";
import { ApiRoutes } from "@/_shared/routes.helper";
import { useCalendarEvents } from "./hooks/swr/useCalendarEvent";

export function Home() {
  const { events, isLoading, error } = useCalendarEvents();


  return (
    <Card className="bg-card/50 backdrop-blur-sm border-muted">
      <CardContent className="pt-6">
        <h1 className="text-5xl font-bold my-4 leading-tight">Absences</h1>

        {isLoading && <p>Loading …</p>}
        {error && <p className="text-red-600">{error.message}</p>}

        <ul className="space-y-2">
          {events?.map((ev) => (
            <li key={ev.id}>{/* render however you like */}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Home;
