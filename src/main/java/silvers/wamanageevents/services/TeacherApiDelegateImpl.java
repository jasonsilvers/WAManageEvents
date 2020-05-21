package silvers.wamanageevents.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import silvers.wamanageevents.api.TeachersApiDelegate;
import silvers.wamanageevents.model.Teacher;
import silvers.wamanageevents.repositories.TeacherRepository;
import silvers.wamanageevents.entities.TeacherEntity;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeacherApiDelegateImpl implements TeachersApiDelegate {

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public ResponseEntity<List<Teacher>> getTeachers() {
        List<TeacherEntity> teacherEntities = (List<TeacherEntity>) teacherRepository.findAll();
        ModelMapper modelMapper = new ModelMapper();
        List<Teacher> teachers = teacherEntities
                                    .stream()
                                    .map(teacherEntity -> modelMapper.map(teacherEntity, Teacher.class))
                                    .collect(Collectors.toList());

        return ResponseEntity.ok(teachers);

    }
}
