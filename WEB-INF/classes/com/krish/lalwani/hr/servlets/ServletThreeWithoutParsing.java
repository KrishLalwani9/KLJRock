package com.krish.lalwani.hr.servlets;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import com.google.gson.*;
public class ServletThreeWithoutParsing extends HttpServlet
{
public void doPost(HttpServletRequest request,HttpServletResponse response)
{
try
{
PrintWriter pw=response.getWriter();
response.setContentType("application/json");
response.setCharacterEncoding("utf-8");
System.out.println(request.getParameter("firstName"));
Gson gson=new Gson();
Customer c=new Customer();
c.firstName=request.getParameter("firstName");
c.lastName=request.getParameter("lastName");
c.age=Integer.parseInt(request.getParameter("age"));
pw.print(gson.toJson(c));
pw.flush();
}catch(Exception exception)
{
try
{				       
response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
}catch(IOException ioException) // checked Exception ServletException
{
//do Nothing
}
}
}
public void doGet(HttpServletRequest request,HttpServletResponse response)
{
try
{
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
}catch(IOException ioException)
{
//do Nothing
}
}
}