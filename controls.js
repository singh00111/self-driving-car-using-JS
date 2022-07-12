class Controls{
    constructor() {
        this.forward=false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        // on pressing key down this is the func you're going to call
        // => makes sure that this operator works only over the current object 
        // and isn't scoped to the particular function
        document.onkeydown = (event)=> {
            switch(event.key) {
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
            //console.table(this); // for debugging
        }

        // on pressing key up this is the func you're going to call
        document.onkeyup = (event)=> {
            switch(event.key) {
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }

            //console.table(this); // for debugging
        }
    }
}