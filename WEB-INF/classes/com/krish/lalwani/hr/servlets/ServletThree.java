package com.krish.lalwani.hr.servlets;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import com.google.gson.*;
public class ServletThree extends HttpServlet
{
public void doPost(HttpServletRequest request,HttpServletResponse response)
{
try
{
PrintWriter pw=response.getWriter();
response.setContentType("application/json");
response.setCharacterEncoding("utf-8");
BufferedReader br=request.getReader();
StringBuffer b=new StringBuffer();
String s;
while(true)
{
s=br.readLine();
if(s==null) break;
b.append(s);
}
String rowData=b.toString();
Gson gson=new Gson();
Customer c=gson.fromJson(rowData,Customer.class);
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