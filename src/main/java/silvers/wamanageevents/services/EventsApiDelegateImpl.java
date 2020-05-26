package silvers.wamanageevents.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import silvers.wamanageevents.api.EventsApiDelegate;
import silvers.wamanageevents.models.Event;
import silvers.wamanageevents.models.wildapricot.TokenResponse;
import silvers.wamanageevents.services.wildapricot.WADataService;

import java.util.List;

@Service
public class EventsApiDelegateImpl implements EventsApiDelegate {

    @Autowired
    WADataService waDataService;

    @Override
    public ResponseEntity<List<Event>> getEvents() {
        TokenResponse token = waDataService.GenerateNewAccessToken();
        var events = waDataService.getAllEvents(token.getAccess_token(), 257051);
        return ResponseEntity.ok(events);
    }

    @Override
    public ResponseEntity<Event> getEventById(String eventsId) {
        TokenResponse token = waDataService.GenerateNewAccessToken();
        var event = waDataService.getEventDetails(token.getAccess_token(), eventsId,257051);
        return ResponseEntity.ok(event);
    }
}
