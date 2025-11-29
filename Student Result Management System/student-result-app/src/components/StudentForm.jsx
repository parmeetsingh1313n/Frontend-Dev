import { useState } from 'react';
import { studentService } from '../services/studentService';

const StudentForm = ({ student, onSave, onCancel, isEditing = false }) => {
    const [formData, setFormData] = useState({
        name: student?.name || '',
        section: student?.section || 'A',
        marks: student?.marks || '',
        email: student?.email || '',
        phone: student?.phone || '',
        attendance: student?.attendance || '',
        enrollmentDate: student?.enrollmentDate || ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.section) newErrors.section = 'Section is required';
        if (!formData.marks || formData.marks < 0 || formData.marks > 100)
            newErrors.marks = 'Marks must be between 0 and 100';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Valid email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.attendance || formData.attendance < 0 || formData.attendance > 100)
            newErrors.attendance = 'Attendance must be between 0 and 100';
        if (!formData.enrollmentDate) newErrors.enrollmentDate = 'Enrollment date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        if (name === 'marks' && value >= 0 && value <= 100) {
            const grade = studentService.calculateGrade(Number(value));
            setFormData(prev => ({
                ...prev,
                grade
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const studentData = {
            ...formData,
            marks: Number(formData.marks),
            attendance: Number(formData.attendance),
            grade: studentService.calculateGrade(Number(formData.marks))
        };

        onSave(studentData);
    };

    return (
        <div className="form-container fade-in">
            <div className="form-header slide-up">
                <h2>
                    <i className={isEditing ? 'ri-user-settings-line' : 'ri-user-add-line'}></i>
                    {isEditing ? 'Edit Student Profile' : 'Add New Student'}
                </h2>
                <p>
                    {isEditing
                        ? 'Update student information and academic details'
                        : 'Create a new student record with academic information'
                    }
                </p>
            </div>

            <form onSubmit={handleSubmit} className="student-form slide-up">
                <div className="form-grid">
                    <div className="form-group full-width">
                        <label>
                            <i className="ri-user-line"></i>
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            placeholder="Enter student's full name"
                        />
                        {errors.name && (
                            <span className="error-text">
                                <i className="ri-error-warning-line"></i>
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>
                            <i className="ri-group-line"></i>
                            Section *
                        </label>
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className={errors.section ? 'error' : ''}
                        >
                            <option value="A">Section A</option>
                            <option value="B">Section B</option>
                            <option value="C">Section C</option>
                            <option value="D">Section D</option>
                        </select>
                        {errors.section && (
                            <span className="error-text">
                                <i className="ri-error-warning-line"></i>
                                {errors.section}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>
                            <i className="ri-calendar-line"></i>
                            Enrollment Date *
                        </label>
                        <input
                            type="date"
                            name="enrollmentDate"
                            value={formData.enrollmentDate}
                            onChange={handleChange}
                            className={errors.enrollmentDate ? 'error' : ''}
                        />
                        {errors.enrollmentDate && (
                            <span className="error-text">
                                <i className="ri-error-warning-line"></i>
                                {errors.enrollmentDate}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>
                            <i className="ri-line-chart-line"></i>
                            Marks (0-100) *
                        </label>
                        <input
                            type="number"
                            name="marks"
                            value={formData.marks}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className={errors.marks ? 'error' : ''}
                            placeholder="Enter marks"
                        />
                        {errors.marks && (
                            <span className="error-text">
                                <i className="ri-error-warning-line"></i>
                                {errors.marks}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>
                            <i className="ri-medal-line"></i>
                            Calculated Grade
                        </label>
                        <input
                            type="text"
                            value={studentService.calculateGrade(Number(formData.marks))}
                            readOnly
                            className="grade-display"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            <i className="ri-user-heart-line"></i>
                            Attendance % *
                        </label>
                        <input
                            type="number"
                            name="attendance"
                            value={formData.attendance}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className={errors.attendance ? 'error' : ''}
                            placeholder="0-100"
                        />
                        {errors.attendance && (
                            <span className="error-text">
                                <i className="ri-error-warning-line"></i>
                                {errors.attendance}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>
                            <i className="ri-mail-line"></i>
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            placeholder="student@email.com"
                        />
                        {errors.email && (
                            <span className="error-text">
                                <i className="ri-error-warning-line"></i>
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>
                            <i className="ri-phone-line"></i>
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                            placeholder="+1-555-0123"
                        />
                        {errors.phone && (
                            <span className="error-text">
                                <i className="ri-error-warning-line"></i>
                                {errors.phone}
                            </span>
                        )}
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        <i className={isEditing ? 'ri-save-line' : 'ri-user-add-line'}></i>
                        {isEditing ? 'Update Student' : 'Add Student'}
                    </button>
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                        <i className="ri-close-line"></i>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;