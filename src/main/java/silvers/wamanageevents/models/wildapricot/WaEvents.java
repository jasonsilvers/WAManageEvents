package silvers.wamanageevents.models.wildapricot;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import silvers.wamanageevents.models.Event;

import java.util.List;

@Data
public class WaEvents {

    @JsonProperty("Events")
//    private List<WaEvent> events;
    private List<Event> events;
}
