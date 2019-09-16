
var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: null,
            errorMessage: null,
            loading: false,
            imgSrc: null,
            validation: ""
        };
    },
    methods: { 
        fetchGif: function() {
            if (this.validation === "5"){
                this.loading = true;
                // get the user's input text from the DOM
                var searchQuery = this.tagValue; 
                // configure a few parameters to attach to our request
                var api_key = "dc6zaTOxFJmzC";
                var tag = "jackson 5 " + searchQuery; 
                fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                    .then(response => response.ok ? response.json() : Promise.reject(response))
                    .then(results => {
                        // if the response comes back successfully, the code in here will execute.
                        console.log("we received a response!");
                        this.imgSrc = results.data.image_url;
                        this.errorMessage = "";
                        this.loading = false;
                    })
                    .catch(err => {
                        // if something went wrong, the code in here will execute instead of the success function
                        this.loading = false;
                        this.errorMessage = 'Sorry, could not load GIF. Try again!';
                });
            } else {
                this.errorMessage = "No GIFS for you, Robot!";
                this.loading = false;
                this.imgSrc = ""
            }
        },
    },
});
