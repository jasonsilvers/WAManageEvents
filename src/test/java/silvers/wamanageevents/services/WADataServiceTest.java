package silvers.wamanageevents.services;

import antlr.Token;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import silvers.wamanageevents.models.wildapricot.TokenResponse;
import silvers.wamanageevents.models.wildapricot.WaEvents;
import silvers.wamanageevents.services.wildapricot.WADataService;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WADataServiceTest {

   @Autowired
   WADataService waDataService;

    @Test
    public void returnsNewAccessToken() throws Exception {
        TokenResponse tokenResponse = waDataService.GenerateNewAccessToken();
        System.out.println(tokenResponse.getAccess_token());
        System.out.println(tokenResponse.getExpires_in());
        assertThat(tokenResponse.getAccess_token()).isNotNull();
        assertThat(tokenResponse.getExpires_in()).isNotNull();
    }

    @Test
    public void returnsListofEvents() throws Exception {
        TokenResponse tokenResponse = waDataService.GenerateNewAccessToken();
        System.out.println(tokenResponse.getAccess_token());
        var events = waDataService.getAllEvents(tokenResponse.getAccess_token(), 257051);
        events.forEach(e -> System.out.println(e.getName()));
        assertThat(events).hasSizeGreaterThan(2);
    }

    @Test
    public void returnEventDetails() throws Exception {
        TokenResponse tokenResponse = waDataService.GenerateNewAccessToken();
        System.out.println(tokenResponse.getAccess_token());
        var eventDetails = waDataService.getEventDetails(tokenResponse.getAccess_token(), "3234236", 257051);
        System.out.println(eventDetails);
        assertThat(eventDetails).isNotNull();
    }

    @Test
    public void returnsSingleEventDetails() throws Exception {

    }
}
