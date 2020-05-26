package silvers.wamanageevents.services;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.hasSize;

public class WADataService {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void returnsListofActiveEvents() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/events")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)));
    }
}
