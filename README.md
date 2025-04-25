# Node.js RESTful API for School Management System

This repository implements a REST API using **Node.js**, **Express.js**, and **MySQL** to manage school records. It supports inserting new school entries and retrieving all schools sorted by geographical proximity to a user-provided coordinate pair.

---

## 📌 Requirements

- Node.js >= 14.x
    
- MySQL >= 5.x
    
- Postman (for API testing and documentation)
    

---

## 🧱 Tech Stack

- **Backend**: Node.js, Express.js
    
- **Database**: MySQL
    
- **Validation**: Custom middleware
    
- **Testing**: Postman
    
- **Hosting**: Compatible with any Node.js environment (e.g., Render, Railway, EC2)
    

---

## 🗃️ Database Schema

Table: `school_management_system`

| Column | Type | Constraint |
| --- | --- | --- |
| id | INT | PRIMARY KEY |
| name | VARCHAR | NOT NULL, <= 50 |
| address | VARCHAR | NOT NULL, <= 100 |
| latitude | FLOAT | NOT NULL |
| longitude | FLOAT | NOT NULL |

> Ensure the database and table are created before using the API. 
  

---

## 📡 API Endpoints

### 1\. `POST /api/addSchool`

Adds a new school entry to the database.

**Payload:**

``` json
{
  "id": 1,
  "name": "Sample School",
  "address": "123 Main Street",
  "latitude": 12.9716,
  "longitude": 77.5946
}

 ```

### 🔹 List Schools

- **Endpoint:** `/listSchools`
    
- **Method:** `GET`
    
- **Content-Type:** `application/json`
    

#### Request Body:

```
jsonCopyEdit{
  "latitude": "10",
  "longitude": "87"
}

 ```
