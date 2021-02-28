import axios from "axios";

export default axios.create ({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBl0EkGz6H0rmY58C0llYRV9KuutOdvI80"
    }
})