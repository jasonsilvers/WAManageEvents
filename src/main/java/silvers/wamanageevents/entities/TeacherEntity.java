package silvers.wamanageevents.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeacherEntity extends EntityWithUUID {
    private String name;
    private String pictureUrl;
    private String email;
}
