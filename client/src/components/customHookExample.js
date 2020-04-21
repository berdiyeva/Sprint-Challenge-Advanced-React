import axios from 'axios';

export default useFetch = async (requestType, endpoint, payload) => {

    let result;
    //need endpoint
    //type of request
    //payload?
    //axios
    //export

    if (requestType.toString().toUpperCase() === 'GET'){

        const response = await axios.get(endpoint)
        result = result.data
        // axios.get(endpoint)
        // .then(response => result = response.data)
        // .catch(err => console.log(err))
    }
    else if (requestType.toString().toUpperCase() === 'POST'){
        axios.get(endpoint, payload)
        .then(response => result = response.data)
        .catch(err => console.log(err))
    }
    else if (requestType.toString().toUpperCase() === 'PUT'){
        axios.get(endpoint, payload)
        .then(response => result = response.data)
        .catch(err => console.log(err))
    }
    
    console.log('result', result)    
    return [result]
}
