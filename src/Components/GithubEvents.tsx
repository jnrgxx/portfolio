import { useEffect, useState } from "react";

type GithubUserEventsProps = {
    username: string;
};

type EventDetails = {
    id: string;
    type: string;
    date: string;
    repo: string;
    url: string;
    message: string;
};

const GithubUserEvents = ({ username }: GithubUserEventsProps) => {
    const [events, setEvents] = useState<EventDetails[]>([]);

    useEffect(() => {
        const fetchUserEvents = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/events/public`
                );

                if (!response.ok) throw new Error(`Github API error: ${response.status}`);

                const data: any[] = await response.json();

                if (!Array.isArray(data)) {
                  setEvents([]);
                  return;
                }
    
                const filteredEvents: EventDetails[] = data.slice(0, 1).map((event: any) => {
                    const eventDetails: EventDetails = {
                        id: String(event.id),
                        type: event.type,
                        date: new Date(event.created_at).toLocaleDateString(),
                        repo: event.repo.name ?? "unknown-repo",
                        url: `https://github.com/${event.repo.name ?? ""}`,
                        message: `Event ${event.type}`,
                    };
    
                    switch (event.type) {
                        case "CreateEvent":
                            eventDetails.message = `Created ${event.payload.ref_type}`;
                            break;
                        case "PushEvent":
                            eventDetails.message = `Pushed to ${event.repo.name}`;
                            break;
                        case "PullRequestEvent":
                            eventDetails.message = `Opened PR: ${event.payload.pull_request.title}`;
                            break;
                        case "WatchEvent":
                            eventDetails.message = `Starred ${event.repo.name}`;
                            break;
                        case "ForkEvent":
                            eventDetails.message = `Forked ${event.repo.name}`;
                            break;
                        // default:
                        //     eventDetails.message = `Event: ${event.type}`;
                    }
    
                    return eventDetails;
                });

                setEvents(filteredEvents);
            } catch (error) {
                console.error("Error fetchng user events:", error);
            }
        };
    fetchUserEvents();
}, [username]);

return (
  <div className="w-[90%] max-h-24 flex flex-col p-3 gap-1 bg-card relative overflow-hidden">

    {events.length > 0 ? (
      events.map(event => (
        <div key={event.id} className="flex flex-col items-start font-dm-mono">
          <p className="text-xxs text-sub mb-2">[ github ] :: latest activity</p>

          <p className="text-xxs text-start font-medium text-ink">{event.message}</p>

          <div className="absolute bottom-1 right-1 flex justify-between">
            <span className="text-xxs text-muted">{event.date}</span>
          </div>

          <img src="GitHub_Invertocat_Black.svg" className="z-0 absolute h-full opacity-10 -right-8 top-0" />
        </div>
      ))
    ) : (
      <p className="text-sm">Loading latest events...</p>
    )}
  </div>
);
};

export default GithubUserEvents;