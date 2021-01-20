var axios = require('axios'),
moment = require('moment');
module.exports = async username => {
if(!username) throw Error('Username not found')
var data = await axios.get(`https://api.github.com/users/${username}`)
return {
    name:data.data.name,
    login:data.data.login,
    joined:moment(data.data.created_at).format("DD MMMM YYYY")
}
}