package databook.databookapi;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DataTableController {

private final DataTableRepository Datarepo;

DataTableController(DataTableRepository Datarepo)
{
	this.Datarepo =  Datarepo;
}

@CrossOrigin(origins = "http://localhost:4200")
@GetMapping("/data")
List<DataTable> all()
{
	return Datarepo.findAll();
}
@CrossOrigin(origins = "http://localhost:4200")
@PostMapping("/data")
DataTable newDataTable(@RequestBody DataTable newDataTable)
{
	return  Datarepo.save(newDataTable);
}
@CrossOrigin(origins = "http://localhost:4200")
@GetMapping("/data/{id}")
DataTable one(@PathVariable Long id)
{
	return Datarepo.findById(id).orElseThrow();
}
@CrossOrigin(origins = "http://localhost:4200")
@PutMapping("/data/{id}")
DataTable replaceDataTable(@RequestBody DataTable newDataTable, @PathVariable Long id) {

  return Datarepo.findById(id)
    .map(datatable -> {
      datatable.setFirstName(newDataTable.getFirstName());
      datatable.setLastName(newDataTable.getLastName());
      datatable.setCompanyName(newDataTable.getCompanyName());
      datatable.setAddressLine1(newDataTable.getAddressLine1());
      datatable.setAddressLine2(newDataTable.getAddressLine2());
      datatable.setCity(newDataTable.getCity());
      datatable.setZipCode(newDataTable.getZipCode());
      datatable.setCountry(newDataTable.getCountry());
      datatable.setPhone(newDataTable.getPhone());
      datatable.setEmail(newDataTable.getEmail());
      return Datarepo.save(datatable);
    })
    .orElseGet(() -> {
      newDataTable.setId(id);
      return Datarepo.save(newDataTable);
    });
}
@CrossOrigin(origins = "http://localhost:4200")
@DeleteMapping("/data/{id}")
void deleteEmployee(@PathVariable Long id) {
  Datarepo.deleteById(id);
}
}


