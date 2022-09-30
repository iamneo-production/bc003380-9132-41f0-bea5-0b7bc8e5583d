import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/student"

class StudentService
{
    addStudent(student)
    {
        return axios.post(USER_API_BASE_URL, student);
    }

    deleteStudent(studentId)
    {
        return axios.delete(USER_API_BASE_URL + `/${studentId}`);
    }
    
    updateStudent(student, studentId)
    {
        return axios.put(USER_API_BASE_URL + `/${studentId}`, student);
    }

    getStudentData()
    {
        return axios.get(USER_API_BASE_URL);
    }

    getSpecificStudentData(studentId)
    {
        return axios.get(USER_API_BASE_URL + `/${studentId}`)
    }
}

export default new StudentService();