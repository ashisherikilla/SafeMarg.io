import axios from "axios"



const API = axios.create({

  baseURL:

    import.meta.env.VITE_API_URL ||

    "https://safemarg-io.onrender.com/api",


  headers: {

    "Content-Type": "application/json"

  }

})



/* request interceptor */

API.interceptors.request.use(

  (config) => {

    // future: attach auth token here

    // const token = localStorage.getItem("token")

    // if (token) {

    //   config.headers.Authorization = `Bearer ${token}`

    // }

    return config

  },

  (error) => Promise.reject(error)

)



/* response interceptor */

API.interceptors.response.use(

  (response) => response,

  (error) => {

    console.error(

      "API Error:",

      error.response?.data || error.message

    )

    return Promise.reject(error)

  }

)



export default API
