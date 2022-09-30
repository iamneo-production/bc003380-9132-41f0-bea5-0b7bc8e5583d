import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/institute"

class InstituteService
{
    addInstitute(institute)
    {
        return axios.post(USER_API_BASE_URL, institute);
    }

    deleteInstitute(instituteId)
    {
        return axios.delete(USER_API_BASE_URL + `/${instituteId}`);
    }
    
    updateInstitute(institute, instituteId)
    {
        return axios.put(USER_API_BASE_URL + `/${instituteId}`, institute);
    }

    getInstituteData()
    {
        return axios.get(USER_API_BASE_URL);
    }

    getSpecificInstituteData(instituteId)
    {
        return axios.get(USER_API_BASE_URL + `/${instituteId}`)
    }
}

export default new InstituteService();