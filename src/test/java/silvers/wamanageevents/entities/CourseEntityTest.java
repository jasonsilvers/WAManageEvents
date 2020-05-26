package silvers.wamanageevents.entities;

import org.junit.Test;
import org.modelmapper.ModelMapper;
//import silvers.wamanageevents.model.Course;

import static org.assertj.core.api.Assertions.assertThat;

public class CourseEntityTest {

    private static final ModelMapper modelMapper = new ModelMapper();

    @Test
    public void checkCourseMapping() {
        CourseEntity courseEntity = new CourseEntity();
        courseEntity.setName("Math");
        courseEntity.setRate((short) 323423);
        courseEntity.setWorkload(34243);

//        Course course = modelMapper.map(courseEntity, Course.class);
//
//        assertThat(courseEntity.getId()).isEqualTo(course.getId());
//        assertThat(courseEntity.getName()).isEqualTo(course.getName());
//        assertThat(courseEntity.getRate()).isEqualTo(course.getRate().shortValue());
//        assertThat(courseEntity.getWorkload()).isEqualTo(course.getWorkload());

    }

}