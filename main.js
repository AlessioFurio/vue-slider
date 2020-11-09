// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data

var app = new Vue({
    el: '#root',
    data: {
        imageIndex: 0,
        images: [
            "images/image1.jpg",
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg",
            "images/image5.jpg"
        ]
    },
    methods: {
        nextImage() {
            setInterval(() => {

                this.imageIndex += 1; // incremento di 1 l' indice corrente
                if(this.imageIndex >= this.images.length){
                    this.imageIndex = 0; // se l' indice supera images.length, lo porto a 0
                }
            }, 2000) // fine set interval
        }, // fine nextImage

        prevImage () { // funzione decremento per scorrere all' indietro lo slider
            this.imageIndex -=1; // decremento di 1 indice corrente
            if (this.imageIndex < 0) {
                this.imageIndex = this.images.length -1; //se l' indice e' minore di 0, gli assegno il valore di images.length - 1 per farlo ripartire dall' ultimo elemento presente nell' array
            }
        }, // fine prevImage

    }, // fine methods

    created() {
    this.nextImage()
    }, // fine created

}); // fine app
