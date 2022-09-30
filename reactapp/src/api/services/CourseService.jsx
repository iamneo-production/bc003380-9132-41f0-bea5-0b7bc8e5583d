import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/course"

class CourseService
{
    addCourse(course)
    {
        return axios.post(USER_API_BASE_URL, course);
        
    }

    deleteCourse(courseId)
    {
        return axios.delete(USER_API_BASE_URL + `/${courseId}`);
    }
    
    updateCourse(course, courseId)
    {
        return axios.put(USER_API_BASE_URL + `/${courseId}`, course);
    }

    getCourseData()
    {
        return axios.get(USER_API_BASE_URL);
        
    }

    getSpecificCourseData(courseId)
    {
        return axios.get(USER_API_BASE_URL + `/${courseId}`)
    }
}

export default new CourseService();