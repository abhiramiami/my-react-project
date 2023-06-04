import React, { Component } from "react";

export default class StudentManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      newStudentName: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      newStudentName: e.target.value,
    });
  };

  handleAddStudent = () => {
    const { newStudentName, students } = this.state;
    if (newStudentName.trim() === "") {
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: newStudentName,
    };

    this.setState({
      students: [...students, newStudent],
      newStudentName: "",
    });
  };

  handleDeleteStudent = (id) => {
    const { students } = this.state;
    const updatedStudents = students.filter((student) => student.id !== id);
    this.setState({
      students: updatedStudents,
    });
  };

  handleUpdateStudent = (id, newName) => {
    const { students } = this.state;
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          name: newName,
        };
      }
      return student;
    });

    this.setState({
      students: updatedStudents,
    });
  };

  render() {
    const { students, newStudentName } = this.state;

    return (
      <div>
        <div>
          <h2>Student Management</h2>
          <input
            type="text"
            value={newStudentName}
            onChange={this.handleInputChange}
            placeholder="Enter student name"
          />
          <button onClick={this.handleAddStudent}>Add Student</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => this.handleDeleteStudent(student.id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      const newName = prompt(
                        "Enter the updated name:",
                        student.name
                      );
                      if (newName) {
                        this.handleUpdateStudent(student.id, newName);
                      }
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
