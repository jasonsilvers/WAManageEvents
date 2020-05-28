import {useQuery, queryCache} from "react-query";
import {DefaultApi} from "../api";

interface EventQueryConfig {
    staleTime: number,
    cacheTime: number,
}

const eventQueryConfig: EventQueryConfig = {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60
}

function getEventsAsync() {
    const api = new DefaultApi();
    return api
        .getEvents()
        .then(response => Promise.resolve(response.data))
}

function getEventAsync(queryKey: any, {eventId}: any) {
    const api = new DefaultApi()
    return api
        .getEventById(eventId)
        .then(response => Promise.resolve(response.data))
}

function useEvents() {
    const result = useQuery('events', getEventsAsync);
    return {...result}
}

function useEvent(eventId: string) {
    const result = useQuery({
        queryKey: ['event', {eventId}],
        queryFn: getEventAsync,
        ...eventQueryConfig
    })

    return {...result}
}

export {useEvents, useEvent}