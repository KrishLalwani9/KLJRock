package com.krish.lalwani.hr.dl;
import java.sql.*;
import java.io.*;
public class AdministratorDAO 
{
public AdministratorDTO getByUsername(String username) throws DAOException
{
try
{
Connection connection=DAOConnection.getConnection();
PreparedStatement preparedStatement=connection.prepareStatement("select * from administrator where uname=?");
preparedStatement.setString(1,username);
ResultSet resultSet=preparedStatement.executeQuery();
if(!resultSet.next())
{
resultSet.close();
preparedStatement.close();
connection.close();
throw new DAOException("Invalid Username : "+username);
}
AdministratorDTO administrator=new AdministratorDTO();
administrator.setUsername(resultSet.getString("uname").trim());
administrator.setPassword(resultSet.getString("pwd").trim());
resultSet.close();
preparedStatement.close();
connection.close();
return administrator;
}catch(SQLException sqlException)
{
throw new DAOException(sqlException.getMessage());
}
}
}