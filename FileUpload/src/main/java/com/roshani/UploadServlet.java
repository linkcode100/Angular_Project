package com.roshani;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileUpload.FileItem;

@WebServlet("/upload")
public class UploadServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request,HttpServletResponse response) {
		ServletFileUpload sf=new ServletFileUpload(new DiskFileitemFactory());
		List<FileItem> multifiles=sf.parseRequest(request);
		
		for(fileItem item: multifiles){
			ite.write(new file(""))
		}
	}
}
