package silvers.wamanageevents.repositories;

import silvers.wamanageevents.entities.CourseEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CourseRepository extends CrudRepository<CourseEntity, UUID> {
    CourseEntity findByName(String name);
}
