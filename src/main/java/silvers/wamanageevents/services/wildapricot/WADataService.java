package silvers.wamanageevents.services.wildapricot;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import silvers.wamanageevents.models.WaEvent;
import silvers.wamanageevents.models.wildapricot.TokenResponse;
import silvers.wamanageevents.models.wildapricot.WaEvents;
import silvers.wamanageevents.utils.RestTemplateResponseErrorHandler;

import java.nio.charset.Charset;
import java.util.List;


@Service
public class WADataService {

    private final String wildApricotApiUrl = "https://api.wildapricot.org/v2";
    private final String wildApricotTokenUrl = "https://oauth.wildapricot.org/auth/token";
    //TODO: Remove when checking in
    private final String apiKey = "jw9pvac9x8nwfzzdvlaa3yoj7erff9";

    private RestTemplate restTemplate;

    @Autowired
    public WADataService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder
                .errorHandler(new RestTemplateResponseErrorHandler()).build();
    }

    public TokenResponse GenerateNewAccessToken() {
        restTemplate = new RestTemplate();
        HttpHeaders headers = createAuthHeader(apiKey);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
        map.add("grant_type", "client_credentials");
        map.add("scope", "auto");
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);

        return restTemplate.postForObject(wildApricotTokenUrl, request, TokenResponse.class);
    }

    public List<WaEvent> getAllEvents(String accessToken, Integer accountId) {
        restTemplate = new RestTemplate();
        String uri = new String(wildApricotApiUrl + "/accounts/" + accountId + "/events");
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        var request = new HttpEntity(headers);
        ResponseEntity<WaEvents> response = restTemplate.exchange(uri,
                HttpMethod.GET,
                request,
                WaEvents.class
        );

        return response.getBody().getEvents();
    }

    public WaEvent getEventDetails(String accessToken, String eventId, Integer accountId) {
        restTemplate = new RestTemplate();
        String uri = new String(wildApricotApiUrl + "/accounts/" + accountId + "/events/" + eventId);
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        var request = new HttpEntity(headers);
        ResponseEntity<WaEvent> response = restTemplate.exchange(uri,
                HttpMethod.GET,
                request,
                WaEvent.class
        );

        return response.getBody();
    }

    private HttpHeaders createAuthHeader(String apiKey) {
        return new HttpHeaders() {{
            String auth = "APIKEY:" + apiKey;
            byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.defaultCharset()));
            String authHeader = "Basic " + new String(encodedAuth);
            set("Authorization", authHeader);
        }};
    }


}
