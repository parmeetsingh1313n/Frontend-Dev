## 🎓 EduTrack - Student Results Management System
A modern, responsive React application for managing student academic records with beautiful UI and full CRUD functionality.

https://img.shields.io/badge/React-18.2.0-blue
https://img.shields.io/badge/Vite-5.0.0-purple
https://img.shields.io/badge/JSON_Server-0.17.4-green
https://img.shields.io/badge/License-MIT-yellow

##✨ Features
#🎯 Core Functionality
#📝 Add Students - Complete student profiles with academic details

#👀 View Students - Beautiful list view with performance metrics

#✏️ Edit Students - Update student information seamlessly

#🗑️ Delete Students - Remove student records with confirmation

#📊 View Details - Comprehensive student performance analytics

#🎨 User Experience
Modern Glass Morphism UI with stunning gradient backgrounds

Responsive Design that works on all devices

Smooth Animations and hover effects

Remix Icons for consistent visual language

Outfit Google Font for excellent readability

Real-time Performance Charts and analytics

#📊 Academic Features
Automatic Grade Calculation based on marks

Performance Analytics with visual progress bars

Attendance Tracking with status indicators

Academic Recommendations based on performance

Section-wise Organization (A, B, C, D)

#🛠 Technology Stack
Frontend: React 18 + Vite

Backend: JSON Server (REST API)

Styling: CSS3 with Glass Morphism effects

Icons: Remix Icons

Font: Outfit (Google Fonts)

Build Tool: Vite

##🚀 Quick Start
Prerequisites
Node.js (v16 or higher)

npm or yarn

Installation
Clone the repository

bash
git clone <your-repo-url>
cd student-result-app
Install dependencies

bash
npm install
Start the development servers

Terminal 1 - Backend (JSON Server)

bash
npm run server
Runs on: http://localhost:3001

Terminal 2 - Frontend (React App)

bash
npm run dev
Runs on: http://localhost:5173

Access the application
Open your browser and navigate to: http://localhost:5173

##📁 Project Structure
text
student-result-app/
├── db.json                 # JSON Server database
├── src/
│   ├── components/
│   │   ├── StudentList.jsx # Main student list with actions
│   │   ├── StudentForm.jsx # Add/Edit student form
│   │   └── StudentDetails.jsx # Student detail view
│   ├── services/
│   │   └── studentService.js # API service functions
│   ├── App.jsx            # Main application component
│   ├── App.css            # Styling with modern design
│   └── main.jsx           # React entry point
├── package.json           # Project dependencies
└── index.html            # HTML template
#🎮 How to Use
Loading Students
Click the "Load Students" button to fetch data from the server

View all students in a beautiful table layout with performance metrics

Adding a Student
Click "Add Student" button

Fill in the form with:

Full Name

Section (A, B, C, D)

Marks (0-100) - Grade auto-calculates

Email (GLA domain)

Phone Number

Attendance Percentage

Enrollment Date

Click "Add Student" to save

Editing a Student
Click the ✏️ Edit button on any student row

Modify the information in the form

Click "Update Student" to save changes

Viewing Details
Click the 👁️ View button on any student row

See comprehensive academic analytics including:

Performance charts

Attendance visualization

Grade analysis

Personalized recommendations

Deleting a Student
Click the 🗑️ Delete button on any student row

Confirm deletion in the popup dialog

##🎨 UI/UX Highlights
Design System
Color Palette: Beautiful cyan, aqua, and light blue gradients

Typography: Outfit font family for modern, clean appearance

Icons: Remix Icons for consistent visual language

Effects: Glass morphism, smooth animations, hover states

##Responsive Design
Desktop: Full-featured table view with all columns

Tablet: Optimized layout with adjusted spacing

Mobile: Stacked cards for easy touch interaction

##🔧 API Endpoints
The JSON Server provides these REST endpoints:

GET /students - Fetch all students

GET /students/:id - Fetch single student

POST /students - Create new student

PUT /students/:id - Update student

DELETE /students/:id - Delete student

##📊 Sample Data
The application comes with 15 sample Indian students featuring:

Authentic Indian names (Parmeet, Arjun, Shivanshu, etc.)

GLA University email addresses (@gla.ac.in)

Realistic academic performance data

Balanced distribution across sections and grades

##🚀 Available Scripts
bash
npm run dev          # Start development server
npm run server       # Start JSON Server backend
npm run build        # Build for production
npm run preview      # Preview production build
🛠 Customization
Adding New Fields
Update the form in StudentForm.jsx

Modify the table in StudentList.jsx

Update the details view in StudentDetails.jsx

Add validation in the service layer

Styling Changes
Modify CSS variables in :root section of App.css

Update color schemes, spacing, or animations

Customize component-specific styles

##🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

##📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

##🙏 Acknowledgments
React Team for the amazing framework

Vite for fast development experience

Remix Icons for beautiful icons

Google Fonts for Outfit font family

