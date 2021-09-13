package databook.databookapi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Table_1")
public class DataTable 
{
	private @Id @GeneratedValue Long id;
	private String FirstName;
	private String LastName;
	private String CompanyName;
	private String AddressLine1;
	private String AddressLine2;
	private String City;
	private String ZipCode;
	private String Country;
	private String Phone;
	private String Email;
	
	public DataTable()
	{
		
	}
public  DataTable(String FirstName, String LastName, String CompanyName, String AddressLine1, String AddressLine2, String City, String ZipCode, String Country, String Phone, String Email)
{
	super();
	this.setFirstName(FirstName);
	this.setLastName(LastName);
	this.setCompanyName(CompanyName);
	this.setAddressLine1(AddressLine1);
	this.setAddressLine2(AddressLine2);
	this.setCity(City);
	this.setZipCode(ZipCode);
	this.setCountry(Country);
	this.setPhone(Phone);
	this.setEmail(Email);
}


public Long getId()
{
	return id;
}
public void setId(Long Id) {
	Id = id;
}

public String getFirstName() {
	return FirstName;
}


public void setFirstName(String firstName) {
	FirstName = firstName;
}


public String getLastName() {
	return LastName;
}


public void setLastName(String lastName) {
	LastName = lastName;
}


public String getCompanyName() {
	return CompanyName;
}


public void setCompanyName(String companyName) {
	CompanyName = companyName;
}


public String getAddressLine1() {
	return AddressLine1;
}


public void setAddressLine1(String addressLine1) {
	AddressLine1 = addressLine1;
}


public String getAddressLine2() {
	return AddressLine2;
}


public void setAddressLine2(String addressLine2) {
	AddressLine2 = addressLine2;
}


public String getCity() {
	return City;
}


public void setCity(String city) {
	City = city;
}


public String getZipCode() {
	return ZipCode;
}


public void setZipCode(String zipCode) {
	ZipCode = zipCode;
}


public String getCountry() {
	return Country;
}


public void setCountry(String country) {
	Country = country;
}


public String getPhone() {
	return Phone;
}


public void setPhone(String phone) {
	Phone = phone;
}


public String getEmail() {
	return Email;
}


public void setEmail(String email) {
	Email = email;
}
}