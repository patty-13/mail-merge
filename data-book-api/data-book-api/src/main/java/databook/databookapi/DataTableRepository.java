package databook.databookapi;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  DataTableRepository extends JpaRepository<DataTable,Long>
{


	
}
