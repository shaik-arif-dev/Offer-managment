## 💼 Offer Management & Cart Application

### ✅ How to Run

#### 🔧 Backend (Spring Boot)

1. **Navigate to the backend folder:**

   ```bash
   cd offerapi
   ```

2. **Build & Run the application:**

   * Using Maven:

     ```bash
     mvn spring-boot:run
     ```

   * Or using the compiled JAR:

     ```bash
     mvn clean install
     java -jar target/offerapi-0.0.1-SNAPSHOT.jar
     ```

3. **Backend will be available at:**
   `http://localhost:8080`

---

#### 🌐 Frontend (Angular)

1. **Navigate to the Angular app folder:**

   ```bash
   cd offerapp/offer-management-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   ng serve
   ```

4. **Frontend will be available at:**
   `http://localhost:4200`

---

### 📌 Assumptions Made

* The backend is a RESTful Spring Boot API exposing endpoints like:

  * `GET /offers` – to fetch all offers
  * `POST /offers` – to add a new offer
  * `PUT /offers/{id}` – to update an offer
  * `DELETE /offers/{id}` – to delete an offer
* Offer types include percentage-based and fixed amount discounts.
* Cart is hardcoded on the frontend and not stored server-side.

---

### 🧠 Approach

This application is built using Angular for the frontend and Spring Boot for the backend to demonstrate basic offer management and discount application logic. The frontend uses two tabs: one for CRUD operations on offers, and another for selecting and applying an offer to a predefined cart. The app fetches available offers from the backend, filters out non-applicable ones based on cart value, and dynamically updates the UI to reflect discounted totals. Modular components, simple Bootstrap styling, and clear state management make the app clean and extensible.

![image](https://github.com/user-attachments/assets/10ab63e4-8c11-44f1-92c3-6a13ea73cc09)

![image](https://github.com/user-attachments/assets/468067fa-ac4b-49c3-9546-85b9d4ac8506)


