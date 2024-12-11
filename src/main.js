import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {createMarkup} from "./js/render-functions.js";
import {fetchImg} from "./js/pixabay-api.js";
const searchForm = document.querySelector(".search")
const btn = document.querySelector(".search-btn")
const search = document.querySelector(".search-bar")
const gallery = document.querySelector(".gallery")

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    gallery.innerHTML = `<span class="loader"></span>`;
    fetchImg(search.value.split(" ").join("+"))
            .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
                }
                
                
    return response.json();
     })
        .then((data) => {
            if (data.totalHits === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please, try again!",
                    position: "topRight",
                    color: "#ef4040",
                    messageColor: "#fafafb"
                })
                gallery.innerHTML = ``
                return
            }
            gallery.innerHTML = createMarkup(data.hits)
            
        })
        .then(() => {
            let lightbox = new SimpleLightbox(`.gallery a`, { captionsData: "alt", captionDelay: 250 })
            lightbox.on('show.simplelightbox', function () {
	
            });
            lightbox.refresh()
        })
    
    }
   
)
    