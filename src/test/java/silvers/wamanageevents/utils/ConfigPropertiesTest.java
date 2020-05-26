package silvers.wamanageevents.utils;

import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;


public class ConfigPropertiesTest {

    @Autowired
    private ConfigProperties configProperties;

    @Test
    public void getsValuesFromConfig() {
        assertThat(configProperties).isEqualTo("Mathematics");
    }

}