import axios from 'axios'

export default{
    saveMessage: function(formData){
        return axios.post('/api/messages', formData)
    },
    getFaqs: function(){
        return axios.get('/api/faqs')
    }
}