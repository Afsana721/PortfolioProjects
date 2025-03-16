# Express Session-Based Authentication App : 
*** Personal_Node_Dashboard ***

## **Overview**
This application is a **Node.js Express-based** authentication system that demonstrates:
- **User Registration & Login**
- **Session Management**
- **Middleware Usage**
- **MongoDB (Mongoose) for Persistence**
- **EJS for Views (Frontend)**
- **Serving Static Files (CSS, Images, JS)**

The app follows an **MVC structure** for clarity.

---

## **Features & Functionalities**
### **1. User Authentication**
✅ **Register New Users**  
✅ **Securely Hash Passwords** using `bcrypt`  
✅ **Login Users & Maintain Session**  
✅ **Logout & Destroy Session**  

### **2. Session Management**
✅ **Use `express-session` to store sessions**  
✅ **Save session data in MongoDB (`connect-mongo`)**  
✅ **Only allow access to dashboard when logged in**  

### **3. Middleware**
✅ **Custom Logging Middleware** (Logs method, path, time)  
✅ **Authentication Middleware** (Protect dashboard route)  

### **4. Static Files (Public Directory)**
✅ **Serve CSS, Images, and JS files**  
✅ **Use EJS for templating**  

---

## **Project Structure**
touch .gitignore
