# Smart Student Portal – End-to-End DevSecOps Security Project

A production-grade Student Portal designed to demonstrate complete DevSecOps security automation. The foundational architecture, security configurations, and DevSecOps pipelines have been successfully scaffolded.

---

## 🚀 What To Do Next: Step-By-Step Implementation Guide

The project structure is in place, but the business logic for the frontend and backend needs to be written. Follow these exact steps to complete the project and make it portfolio-ready.

### Step 1: Complete the Spring Boot Backend (Java)
Currently, your backend has the `pom.xml`, `Dockerfile`, and Core Security Classes (`JwtUtils.java` & `WebSecurityConfig.java`). You need to write the business logic.

1. **Create the Main Application Class:** Create `BackendApplication.java` inside `backend/src/main/java/com/studentportal/backend/` and annotate it with `@SpringBootApplication`.
2. **Create JPA Entities:** Map your Java classes to the Supabase tables defined in `db/init.sql`. You'll need:
   * `User.java`
   * `Student.java`
   * `Faculty.java`
3. **Create JPA Repositories:** Create interfaces extending `JpaRepository` for each entity (e.g., `UserRepository`, `StudentRepository`).
4. **Implement Auth Service:** Create `AuthService.java` to handle User Registration, Login, password hashing (using `BCrypt`), and returning the JWT token.
5. **Create REST Controllers:** 
   * `AuthController.java` (Login/Register endpoints)
   * `StudentController.java` (Get Profile, Update Profile, Search Students - protected by JWT).
6. **Configure `application.properties`:** Inside `backend/src/main/resources/`, link your database credentials:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/student_portal
   spring.datasource.username=postgres
   spring.datasource.password=SuperSecretPassword123!
   spring.jpa.hibernate.ddl-auto=validate
   jwt.secret=your_super_secret_jwt_key_that_is_at_least_256_bits_long_for_hs256
   jwt.expirationMs=86400000
   ```

### Step 2: Complete the React Frontend (TypeScript)
Your frontend has the Vite configuration, Tailwind CSS, and `Dockerfile`. Now you need to build the stunning UI.

1. **Configure ShadCN UI:** Run `npx shadcn-ui@latest init` in the `frontend/` directory to setup your component library. Select the `New York` style and a modern color scheme like `Slate` or `Zinc`.
2. **Setup React Router:** In `src/App.tsx`, setup your routes:
   * `/login`
   * `/register`
   * `/dashboard` (Protected)
   * `/profile` (Protected)
3. **Create the Auth Context:** Create `src/context/AuthContext.tsx` to store the JWT token in memory/localStorage and manage the user's logged-in state globally.
4. **Build the Pages:**
   * **Login/Register:** Create glassmorphism cards using Tailwind and Framer Motion for smooth entrance animations.
   * **Dashboard:** Build the premium UI. Use charts (e.g., `recharts`) to display student statistics. Add a modern sidebar navigation.
   * **Profile Management:** Create forms to allow students to edit their details.
5. **Connect Axios:** Create `src/api/axiosConfig.ts` to automatically attach the `Authorization: Bearer <token>` header to all outgoing requests.

### Step 3: Run and Test Locally using Docker
Before pushing code, ensure everything runs together.

1. Make sure Docker Desktop is running.
2. At the root of your project (where `docker-compose.yml` is located), run:
   ```bash
   docker-compose up -d --build
   ```
3. Test your services:
   * **Frontend:** Open `http://localhost:80`
   * **Backend:** Verify APIs using Postman or Swagger at `http://localhost:8080`
   * **Database:** Check PostgreSQL on `localhost:5432`
   * **SonarQube & Grafana:** Accessible on `localhost:9000` and `localhost:3000`.

### Step 4: Setup GitHub Repository & CI/CD Pipeline
To demonstrate the DevSecOps capabilities, you must push this code to GitHub. The pipeline (`.github/workflows/devsecops-pipeline.yml`) is already written!

1. Initialize git in your local project root:
   ```bash
   git init
   git add .
   git commit -m "Initial DevSecOps Setup"
   ```
2. Create a new repository on GitHub and push your code.
3. **Configure GitHub Secrets:** Go to your GitHub Repository Settings -> Secrets and variables -> Actions. Add the following secrets required by your pipeline:
   * `SNYK_TOKEN`: Sign up for Snyk, get your API token, and paste it here.
   * `SONAR_TOKEN` & `SONAR_HOST_URL`: If using SonarCloud, provide the credentials.
4. **Trigger the Pipeline:** Every time you push to the `main` branch or create a Pull Request, GitHub Actions will automatically run the 10-stage DevSecOps pipeline.
5. **Review Security Reports:** Watch the GitHub Actions tab to ensure your code passes SAST, Dependency Scanning, Secret Scanning, and Container Security (Trivy).

### Step 5: Final Documentation & Portfolio Polish
1. Once the pipeline is green, take screenshots of your beautiful Dashboard UI and the passing GitHub Actions pipeline.
2. Add these images to this `README.md` to make it stand out to recruiters and hiring managers.
3. Generate sample data in your database to ensure the dashboard charts and search functionalities look populated and complete during demonstrations.
