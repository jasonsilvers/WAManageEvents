package silvers.wamanageevents.controllers;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

//@WebMvcTest(EventsController.class)
//public class EventsControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Test
//    void testShowEventsList() throws Exception {
//        ResultActions actions = mockMvc.perform(get("/events")
//                                        .accept(MediaType.APPLICATION_JSON))
//                                        .andExpect(jsonPath("$", hasSize(2)));
//
//    }
//}
