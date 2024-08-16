package com.krish.lalwani.hr.dl;
import java.sql.*;
public class DAOConnection
{
private DAOConnection(){}
public static Connection getConnection() throws DAOException
{
Connection connection=null;
try
{
Class.forName("com.mysql.cj.jdbc.Driver");
connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/kldb","kldbuser","kldbuser");
}catch(Exception exception)
{
throw new DAOException(exception.getMessage()+"Here is some serious problem *************************************");
}
return connection;
}
}