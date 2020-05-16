import axios from 'axios';

const URL = 'https://reqres.in/api/';

function getAllUser(){
    target = URL + 'users?page=2';
    axios.get(target)
        .then(res => {
            return res;
        })
}

export {getAllUser};