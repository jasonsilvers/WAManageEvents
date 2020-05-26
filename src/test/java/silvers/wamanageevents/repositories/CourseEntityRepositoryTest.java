//package silvers.wamanageevents.repositories;
//
//import silvers.wamanageevents.entities.CourseEntity;
//import silvers.wamanageevents.entities.TeacherEntity;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//
//import org.springframework.test.context.junit4.SpringRunner;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@RunWith(SpringRunner.class)
//@DataJpaTest
//public class CourseEntityRepositoryTest {
//
//    @Autowired
//    private TestEntityManager entityManager;
//
//    @Autowired
//    private CourseRepository courseRepository;
//
//    @Autowired
//    private TeacherRepository teacherRepository;
//
//    @Test
//    public void testFindByName() {
//
//        TeacherEntity pj = new TeacherEntity(
//                "Professor Jirafales",
//                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ruben2017.jpg/245px-Ruben2017.jpg",
//                "jirafales@yahoo_.com"
//        );
//
////
////        Integer id = entityManager.persistAndGetId(pj, Integer.class);
//        entityManager.persist(pj);
//        entityManager.flush();
//
////        assertThat("test").isEqualTo("test");
//
//        CourseEntity mathematics = new CourseEntity("Mathematics", 20, (short) 10, pj);
//        entityManager.persist(mathematics);
//        entityManager.flush();
//        CourseEntity foundCourseEntity = courseRepository.findByName("Mathematics");
////
////        assertNotNull(mathematics);
//        assertThat(foundCourseEntity.getName()).isEqualTo("Mathematics");
//
//
//    }
//
//}