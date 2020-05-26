package silvers.wamanageevents.utils;

import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@EnableConfigurationProperties(value = Config.class)
//@TestPropertySource("classpath:server-config-test.properties")
public class ConfigTest {

    @Autowired
    private Config config;

    @Test
    public void getsValuesFromConfig() {
        assertThat(config.getApis()).isEqualTo("Mathematics");
    }

}