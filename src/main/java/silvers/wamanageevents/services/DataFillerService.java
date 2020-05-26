package silvers.wamanageevents.services;

import silvers.wamanageevents.repositories.CourseRepository;
import silvers.wamanageevents.repositories.TeacherRepository;
import silvers.wamanageevents.entities.CourseEntity;
import silvers.wamanageevents.entities.TeacherEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;

@Service
public class DataFillerService {
    private final CourseRepository courseRepository;
    private final TeacherRepository teacherRepository;

    public DataFillerService(CourseRepository courseRepository, TeacherRepository teacherRepository) {
        this.courseRepository = courseRepository;
        this.teacherRepository = teacherRepository;
    }
    @PostConstruct
    @Transactional
    public void fillData(){
        TeacherEntity pj = new TeacherEntity(
                "Professor Jirafales",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ruben2017.jpg/245px-Ruben2017.jpg",
                "jirafales@yahoo_.com"
        );
        TeacherEntity px = new TeacherEntity(
                "Professor X",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9uI1Cb-nQ2uJOph4_t96KRvLSMjczAKnHLJYi1nqWXagvqWc4",
                "director@xproject_.com"
        );

        TeacherEntity pt = new TeacherEntity(
                "Professor Boberson",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9uI1Cb-nQ2uJOph4_t96KRvLSMjczAKnHLJYi1nqWXagvqWc4",
                "bob@bob.com"
        );
        teacherRepository.save(pj);
        teacherRepository.save(px);
        teacherRepository.save(pt);
        // create courses
        CourseEntity mathematics = new CourseEntity("Mathematics", 20, (short) 10, pj);
        CourseEntity spanish = new CourseEntity("Spanish", 20, (short) 10, pj);
        CourseEntity dealingWithUnknown = new CourseEntity("Dealing with unknown", 10, (short) 100, pj);
        CourseEntity handlingYourMentalPower = new CourseEntity("Handling your mental power", 50, (short) 100, pj);
        CourseEntity introductionToPsychology = new CourseEntity("Introduction to psychology", 90, (short) 100, pj);
        courseRepository.save(mathematics);
        courseRepository.save(spanish);
        courseRepository.save(dealingWithUnknown);
        courseRepository.save(handlingYourMentalPower);
        courseRepository.save(introductionToPsychology);

    }
}
