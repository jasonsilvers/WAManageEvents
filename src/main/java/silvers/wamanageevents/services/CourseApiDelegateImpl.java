package silvers.wamanageevents.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import silvers.wamanageevents.api.CoursesApiDelegate;
import silvers.wamanageevents.model.Course;
import silvers.wamanageevents.repositories.CourseRepository;
import silvers.wamanageevents.entities.CourseEntity;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseApiDelegateImpl implements CoursesApiDelegate {

    @Autowired
    CourseRepository courseRepository;

    @Override
    public ResponseEntity<List<Course>> getCourses() {

        List<CourseEntity> courseEntities = (List<CourseEntity>) courseRepository.findAll();
        ModelMapper modelMapper = new ModelMapper();
        List<Course> courses = courseEntities
                                .stream()
                                .map(courseEntity -> modelMapper.map(courseEntity, Course.class))
                                .collect(Collectors.toList());


        return ResponseEntity.ok(courses);
    }
}
