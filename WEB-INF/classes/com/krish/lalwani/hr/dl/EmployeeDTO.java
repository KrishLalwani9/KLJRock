package com.krish.lalwani.hr.dl;
import java.math.*;
import java.util.*;
public class EmployeeDTO implements Comparable<EmployeeDTO>,java.io.Serializable
{
public String employeeId;
public String name;
public int designationCode;
public String designation;
public java.util.Date dateOfBirth;
public String gender;
public boolean isIndian;
public BigDecimal basicSalary;
public String panNumber;
public String aadharCardNumber;
public EmployeeDTO()
{
this.employeeId="";
this.name="";
this.designationCode=0;
this.designation="";
this.dateOfBirth=null;
this.gender="";
this.isIndian=false;
this.basicSalary=null;
this.panNumber="";
this.aadharCardNumber="";
}
public void setEmployeeId(java.lang.String employeeId)
{
this.employeeId=employeeId;
}
public java.lang.String getEmployeeId()
{
return this.employeeId;
}
public void setName(java.lang.String name)
{
this.name=name;
}
public java.lang.String getName()
{
return this.name;
}
public void setDesignationCode(int designationCode)
{
this.designationCode=designationCode;
}
public int getDesignationCode()
{
return this.designationCode;
}
public void setDesignation(java.lang.String designation)
{
this.designation=designation;
}
public java.lang.String getDesignation()
{
return this.designation;
}
public void setDateOfBirth(java.util.Date dateOfBirth)
{
this.dateOfBirth=dateOfBirth;
}
public java.util.Date getDateOfBirth()
{
return this.dateOfBirth;
}
public void setGender(java.lang.String gender)
{
this.gender=gender;
}
public java.lang.String getGender()
{
return this.gender;
}
public void setIsIndian(boolean isIndian)
{
this.isIndian=isIndian;
}
public boolean getIsIndian()
{
return this.isIndian;
}
public void setBasicSalary(java.math.BigDecimal basicSalary)
{
this.basicSalary=basicSalary;
}
public java.math.BigDecimal getBasicSalary()
{
return this.basicSalary;
}
public void setPANNumber(java.lang.String panNumber)
{
this.panNumber=panNumber;
}
public java.lang.String getPANNumber()
{
return this.panNumber;
}
public void setAadharCardNumber(java.lang.String aadharCardNumber)
{
this.aadharCardNumber=aadharCardNumber;
}
public java.lang.String getAadharCardNumber()
{
return this.aadharCardNumber;
}
public int hashCode()
{
return employeeId.hashCode();
}
public int compareTo(EmployeeDTO other)
{
return this.employeeId.compareToIgnoreCase(other.employeeId);
}
public boolean equals(Object object)
{
if(!(object instanceof EmployeeDTO)) return false;
EmployeeDTO employee=(EmployeeDTO)object;
return this.employeeId.equalsIgnoreCase(employee.employeeId);
}
}