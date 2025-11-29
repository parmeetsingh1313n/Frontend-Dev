const API_URL = 'http://localhost:3001/students';

export const studentService = {
    // Get all students
    getAllStudents: async () => {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch students');
        return await response.json();
    },

    // Get student by ID
    getStudentById: async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Failed to fetch student');
        return await response.json();
    },

    // Add new student
    addStudent: async (student) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        if (!response.ok) throw new Error('Failed to add student');
        return await response.json();
    },

    // Update student
    updateStudent: async (id, student) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        if (!response.ok) throw new Error('Failed to update student');
        return await response.json();
    },

    // Delete student
    deleteStudent: async (id) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete student');
        return await response.json();
    },

    // Calculate grade based on marks
    calculateGrade: (marks) => {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    },

    // Get performance feedback
    getPerformanceFeedback: (grade) => {
        const feedback = {
            'A': 'Excellent! Keep up the great work!',
            'B': 'Good job! You\'re doing well.',
            'C': 'Satisfactory. There\'s room for improvement.',
            'D': 'Needs improvement. Consider seeking help.',
            'F': 'Critical. Please meet with your advisor.'
        };
        return feedback[grade] || 'No feedback available';
    }
};