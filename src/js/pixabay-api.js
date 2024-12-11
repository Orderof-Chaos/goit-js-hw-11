
const search = document.querySelector(".search-bar")
export
    function fetchImg(request) {
   return  fetch(`https://pixabay.com/api/?key=47546528-1d373426d359327bdc7f920b1&q=${request}&image_type=photo`)
     
        
};
