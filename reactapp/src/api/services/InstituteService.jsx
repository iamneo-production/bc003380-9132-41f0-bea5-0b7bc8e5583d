import axios from 'axios';
//const USER_API_BASE_URL = "https://8080-affcebcbafebbafffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/institute"
const USER_API_BASE_URL = "*"

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
