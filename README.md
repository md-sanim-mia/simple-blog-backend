 Project Overview
A backend system for a blogging platform with Admin and User roles, supporting secure authentication, role-based access control, and public APIs with search, sort, and filter functionalities.

 Technologies Used
TypeScript
Node.js
Express.js
MongoDB (Mongoose)
User Roles
Admin:
Created manually in the database
Can delete any blog
Can block/unblock users
Cannot update blogs
User:
Can register/login
Can create, update, delete their own blogs
 Authentication & Authorization
Authentication: Secure login system for users
Authorization: Role-based access control for Admin and User
Blogs
Create Blog: Logged-in users can create blogs.
Update Blog: Users can update their own blogs.
Delete Blog: Users can delete their own blogs.
View Blogs: Public API supports search, sort, and filter functionalities.
