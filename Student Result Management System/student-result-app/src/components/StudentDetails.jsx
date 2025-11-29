import { studentService } from '../services/studentService';

const StudentDetails = ({ student, onBack }) => {
    const getGradeColor = (grade) => {
        return `grade-${grade}`;
    };

    const getAttendanceStatus = (attendance) => {
        if (attendance >= 90) return { status: 'Excellent', color: 'var(--success)' };
        if (attendance >= 80) return { status: 'Good', color: 'var(--info)' };
        if (attendance >= 70) return { status: 'Average', color: 'var(--warning)' };
        return { status: 'Poor', color: 'var(--danger)' };
    };

    const attendanceInfo = getAttendanceStatus(student.attendance);

    return (
        <div className="student-details-container fade-in">
            <div className="details-header">
                <button onClick={onBack} className="btn btn-secondary">
                    <i className="ri-arrow-left-line"></i>
                    Back to List
                </button>
                <h1>Student Detailed Profile</h1>
            </div>

            <div className="details-content">
                <div className="profile-card slide-up">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="profile-info">
                            <h2>{student.name}</h2>
                            <p className="profile-section">
                                <i className="ri-group-line"></i>
                                Section {student.section}
                            </p>
                            <p className="profile-enrollment">
                                <i className="ri-calendar-line"></i>
                                Enrolled on {new Date(student.enrollmentDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                        <div
                            className={`profile-grade ${getGradeColor(student.grade)}`}
                        >
                            {student.grade}
                        </div>
                    </div>

                    <div className="details-grid">
                        <div className="detail-card">
                            <h3>
                                <i className="ri-contacts-line"></i>
                                Contact Information
                            </h3>
                            <div className="detail-item">
                                <span>
                                    <i className="ri-mail-line"></i>
                                    <strong>Email Address</strong>
                                </span>
                                <span>{student.email}</span>
                            </div>
                            <div className="detail-item">
                                <span>
                                    <i className="ri-phone-line"></i>
                                    <strong>Phone Number</strong>
                                </span>
                                <span>{student.phone}</span>
                            </div>
                        </div>

                        <div className="detail-card">
                            <h3>
                                <i className="ri-graduation-cap-line"></i>
                                Academic Performance
                            </h3>
                            <div className="detail-item">
                                <span>
                                    <i className="ri-line-chart-line"></i>
                                    <strong>Marks Obtained</strong>
                                </span>
                                <span className="marks-display">{student.marks}%</span>
                            </div>
                            <div className="detail-item">
                                <span>
                                    <i className="ri-medal-line"></i>
                                    <strong>Grade Awarded</strong>
                                </span>
                                <span
                                    className="grade-display"
                                    style={{
                                        color: 'white',
                                        background: `linear-gradient(135deg, var(--primary), var(--primary-light))`,
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontWeight: '700'
                                    }}
                                >
                                    {student.grade}
                                </span>
                            </div>
                            <div className="detail-item">
                                <span>
                                    <i className="ri-feedback-line"></i>
                                    <strong>Performance Feedback</strong>
                                </span>
                                <span>{studentService.getPerformanceFeedback(student.grade)}</span>
                            </div>
                        </div>

                        <div className="detail-card">
                            <h3>
                                <i className="ri-user-heart-line"></i>
                                Attendance Overview
                            </h3>
                            <div className="attendance-display">
                                <div
                                    className="attendance-circle"
                                    style={{
                                        background: `conic-gradient(${attendanceInfo.color} 0% ${student.attendance}%, var(--gray-300) ${student.attendance}% 100%)`
                                    }}
                                >
                                    <span className="attendance-percent">{student.attendance}%</span>
                                </div>
                                <div className="attendance-status">
                                    <div>
                                        <strong>Attendance Rate</strong>
                                    </div>
                                    <div style={{ color: attendanceInfo.color, fontWeight: '600' }}>
                                        {attendanceInfo.status}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="detail-card performance-chart">
                            <h3>
                                <i className="ri-bar-chart-line"></i>
                                Performance Analytics
                            </h3>
                            <div className="chart-container">
                                <div className="chart-item">
                                    <label>
                                        <i className="ri-line-chart-line"></i>
                                        Academic Marks
                                    </label>
                                    <div className="chart-bar">
                                        <div
                                            className="chart-fill"
                                            style={{
                                                width: `${student.marks}%`,
                                                background: `linear-gradient(135deg, var(--primary), var(--primary-light))`
                                            }}
                                        ></div>
                                    </div>
                                    <span>{student.marks}%</span>
                                </div>
                                <div className="chart-item">
                                    <label>
                                        <i className="ri-user-heart-line"></i>
                                        Attendance Rate
                                    </label>
                                    <div className="chart-bar">
                                        <div
                                            className="chart-fill"
                                            style={{
                                                width: `${student.attendance}%`,
                                                background: `linear-gradient(135deg, ${attendanceInfo.color}, ${attendanceInfo.color})`
                                            }}
                                        ></div>
                                    </div>
                                    <span>{student.attendance}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recommendations slide-up">
                    <h3>
                        <i className="ri-lightbulb-flash-line"></i>
                        Academic Recommendations
                    </h3>
                    <div className="recommendation-list">
                        {student.grade === 'A' && (
                            <p>
                                <i className="ri-star-fill" style={{ color: 'var(--warning)' }}></i>
                                Excellent performance! Consider advanced coursework or mentoring other students.
                            </p>
                        )}
                        {student.grade === 'B' && (
                            <p>
                                <i className="ri-thumb-up-fill" style={{ color: 'var(--info)' }}></i>
                                Good work! Focus on areas of improvement to reach the next level.
                            </p>
                        )}
                        {student.grade === 'C' && (
                            <p>
                                <i className="ri-user-voice-fill" style={{ color: 'var(--warning)' }}></i>
                                Consider additional study sessions and seek help from instructors.
                            </p>
                        )}
                        {(student.grade === 'D' || student.grade === 'F') && (
                            <p>
                                <i className="ri-alarm-warning-fill" style={{ color: 'var(--danger)' }}></i>
                                Immediate action required. Please schedule a meeting with academic advisor.
                            </p>
                        )}
                        {student.attendance < 80 && (
                            <p>
                                <i className="ri-user-heart-line" style={{ color: 'var(--info)' }}></i>
                                Improving attendance could significantly boost your academic performance.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;