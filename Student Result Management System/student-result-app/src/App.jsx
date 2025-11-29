import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import StudentDetails from './components/StudentDetails';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { studentService } from './services/studentService';

function App() {
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadStudents = async () => {
    setLoading(true);
    try {
      const data = await studentService.getAllStudents();
      setStudents(data);
      alert(`✅ Successfully loaded ${data.length} students!`);
    } catch (error) {
      alert('❌ Error loading students: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setIsEditing(false);
    setCurrentView('form');
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setIsEditing(true);
    setCurrentView('form');
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setCurrentView('details');
  };

  const handleSaveStudent = async (studentData) => {
    try {
      if (isEditing && selectedStudent) {
        await studentService.updateStudent(selectedStudent.id, {
          ...studentData,
          id: selectedStudent.id
        });
        alert('✅ Student updated successfully!');
      } else {
        await studentService.addStudent(studentData);
        alert('✅ Student added successfully!');
      }
      setCurrentView('list');
    } catch (error) {
      alert('❌ Error saving student: ' + error.message);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    if (confirm('Are you sure you want to delete this student? This action cannot be undone.')) {
      try {
        await studentService.deleteStudent(studentId);
        alert('✅ Student deleted successfully!');
      } catch (error) {
        alert('❌ Error deleting student: ' + error.message);
      }
    }
  };

  const handleCancel = () => {
    setCurrentView('list');
    setSelectedStudent(null);
  };

  return (
    <div className="app">
      <div className="app-container">
        {currentView === 'list' && (
          <StudentList
            students={students}
            onLoadStudents={handleLoadStudents}
            onAddStudent={handleAddStudent}
            onEditStudent={handleEditStudent}
            onDeleteStudent={handleDeleteStudent}
            onViewDetails={handleViewDetails}
          />
        )}

        {currentView === 'form' && (
          <StudentForm
            student={selectedStudent}
            onSave={handleSaveStudent}
            onCancel={handleCancel}
            isEditing={isEditing}
          />
        )}

        {currentView === 'details' && selectedStudent && (
          <StudentDetails
            student={selectedStudent}
            onBack={handleCancel}
          />
        )}

        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Loading students data...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;