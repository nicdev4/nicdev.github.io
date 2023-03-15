class Spoiler{
    constructor() {
        this.elements = {}
        this.working = []
    }

    add(__button_id, __element_id){
        this.elements[__button_id] = __element_id
    }

    init(){
        for(let msv in this.elements){
            document.getElementById(this.elements[msv]).classList.add("hidden");
            document.getElementById(msv).addEventListener('click', () => {
                let e = document.getElementById(this.elements[msv]);
                if(e.classList.contains("hidden")){
                    e.classList.remove("hidden");
                } else {
                    e.classList.add("hidden");
                }
            })
        }
    }
}