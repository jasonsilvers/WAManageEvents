package silvers.wamanageevents.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseEntity extends EntityWithUUID{

    private String name;
    private int workload;
    private short rate;
    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_course_teacher"))
    private TeacherEntity teacherEntity;


}
