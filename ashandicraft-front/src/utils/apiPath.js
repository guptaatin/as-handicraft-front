/* ---------------baseurl for customer define---------------*/

const baseURL = "/users";


/* ---------------document baseurl for uploading files define---------------*/

// const documentUploadBaseUrl =  process.env.NODE_ENV &&  process.env.NODE_ENV !== 'development' ? '/api' : "http://localhost:4000";

/* ----------------component ApiPath starts------------------*/

const ApiPath = {
    createUser : `${baseURL}/createUser`,
}

/* --------------component ApiPath Ends-------------- */

/* -------------component ApiPath exported------------------*/

export default ApiPath;