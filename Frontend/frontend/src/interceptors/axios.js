import axios from "axios";

axios.interceptors.response.use(res=>res, async error =>{
    if(error.response.status === 401){
   
        const refresh = JSON.parse(localStorage.getItem("user"))
       
       
        const response = await axios.post('http://127.0.0.1:8000/api/user/refresh/', refresh)
        
        if(response.status ===200){
           
            // localStorage.setItem("user",JSON.stringify(response.data.tokens))
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`

            return axios(error.config);
        }
            
        
    }

    return error;
})