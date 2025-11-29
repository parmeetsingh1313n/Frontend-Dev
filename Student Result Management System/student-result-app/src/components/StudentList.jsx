import { useState } from 'react';

const StudentList = ({
    students,
    onLoadStudents,
    onAddStudent,
    onEditStudent,
    onDeleteStudent,
    onViewDetails
}) => {
    const [loading, setLoading] = useState(false);

    const getGradeColor = (grade) => {
        return `grade-${grade}`;
    };

    const getPerformanceIcon = (grade) => {
        const icons = {
            'A': 'ri-trophy-fill',
            'B': 'ri-star-fill',
            'C': 'ri-user-voice-fill',
            'D': 'ri-error-warning-fill',
            'F': 'ri-alarm-warning-fill'
        };
        return icons[grade] || 'ri-question-fill';
    };

    const handleLoadStudents = async () => {
        setLoading(true);
        await onLoadStudents();
        setLoading(false);
    };

    return (
        <div className="student-list-container fade-in">
            <div className="list-header slide-up">
                <div className="list-header-content">
                    <h1>Student Results Dashboard</h1>
                    <p>Manage and track student academic performance</p>
                </div>
                <div className="header-actions">
                    <button
                        onClick={handleLoadStudents}
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        <i className="ri-refresh-line"></i>
                        {loading ? 'Loading...' : 'Load Students'}
                    </button>
                    <button onClick={onAddStudent} className="btn btn-success">
                        <i className="ri-user-add-line"></i>
                        Add Student
                    </button>
                </div>
            </div>

            {students.length === 0 ? (
                <div className="empty-state slide-up">
                    <div className="empty-icon">
                        <i className="ri-user-search-line"></i>
                    </div>
                    <h3>No Students Found</h3>
                    <p>Get started by loading sample data or adding a new student to the system.</p>
                    <button onClick={handleLoadStudents} className="btn btn-primary">
                        <i className="ri-database-2-line"></i>
                        Load Sample Data
                    </button>
                </div>
            ) : (
                <>
                    <div className="stats-grid slide-up">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="ri-group-line" style={{ color: 'var(--primary)' }}></i>
                            </div>
                            <span className="stat-number">{students.length}</span>
                            <span className="stat-label">Total Students</span>
                        </div>

                        <div className="stat-card success">
                            <div className="stat-icon">
                                <i className="ri-medal-line" style={{ color: 'var(--success)' }}></i>
                            </div>
                            <span className="stat-number">
                                {students.filter(s => s.grade === 'A').length}
                            </span>
                            <span className="stat-label">A Grades</span>
                        </div>

                        <div className="stat-card warning">
                            <div className="stat-icon">
                                <i className="ri-line-chart-line" style={{ color: 'var(--warning)' }}></i>
                            </div>
                            <span className="stat-number">
                                {Math.round(students.reduce((acc, s) => acc + s.marks, 0) / students.length)}%
                            </span>
                            <span className="stat-label">Average Marks</span>
                        </div>

                        <div className="stat-card danger">
                            <div className="stat-icon">
                                <i className="ri-alarm-warning-line" style={{ color: 'var(--danger)' }}></i>
                            </div>
                            <span className="stat-number">
                                {students.filter(s => s.grade === 'F').length}
                            </span>
                            <span className="stat-label">Need Help</span>
                        </div>
                    </div>

                    <div className="table-container slide-up">
                        <table className="students-table">
                            <thead>
                                <tr>
                                    <th>Student Information</th>
                                    <th>Academic Performance</th>
                                    <th>Progress</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="student-row">
                                        <td>
                                            <div className="student-info">
                                                <div className="student-avatar">
                                                    {student.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div className="student-details">
                                                    <div className="student-name">{student.name}</div>
                                                    <div className="student-contact">
                                                        <i className="ri-mail-line"></i> {student.email}
                                                    </div>
                                                    <div className="student-meta">
                                                        <i className="ri-group-line"></i> Section {student.section} •
                                                        <i className="ri-calendar-line"></i> {student.enrollmentDate}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="academic-info">
                                                <div className="marks-grade">
                                                    <span className="marks">{student.marks}%</span>
                                                    <span
                                                        className={`grade-badge ${getGradeColor(student.grade)}`}
                                                    >
                                                        {student.grade}
                                                    </span>
                                                </div>
                                                <div className="attendance">
                                                    <i className="ri-user-heart-line"></i>
                                                    {student.attendance}% Attendance
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="performance-meter">
                                                <i className={getPerformanceIcon(student.grade)}></i>
                                                <div className="performance-bar">
                                                    <div
                                                        className="performance-fill"
                                                        style={{
                                                            width: `${student.marks}%`,
                                                            background: `linear-gradient(135deg, var(--primary), var(--primary-light))`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button
                                                    onClick={() => onViewDetails(student)}
                                                    className="action-btn view"
                                                    title="View Details"
                                                >
                                                    <i className="ri-eye-line"></i>
                                                </button>
                                                <button
                                                    onClick={() => onEditStudent(student)}
                                                    className="action-btn edit"
                                                    title="Edit Student"
                                                >
                                                    <i className="ri-edit-line"></i>
                                                </button>
                                                <button
                                                    onClick={() => onDeleteStudent(student.id)}
                                                    className="action-btn delete"
                                                    title="Delete Student"
                                                >
                                                    <i className="ri-delete-bin-line"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default StudentList;