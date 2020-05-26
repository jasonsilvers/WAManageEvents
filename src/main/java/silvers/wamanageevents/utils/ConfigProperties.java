package silvers.wamanageevents.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@ConfigurationProperties(prefix = "my")
public class Config {

    private List<Apis> apis = new ArrayList<>();

    public List<Apis> getApis() {
        return apis;
    }

    public void setApis(List<Apis> apis) {
        this.apis = apis;
    }
}

class Apis {
    private String auth;
    private String resource;
}
