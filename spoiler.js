class Spoiler{
    constructor() {
        this.elements = {}
        this.working = []
    }

    add(__button_id, __element_id){
        this.elements.push([__button_id, __element_id])
    }

    init(){
        for(let msv in this.elements){
            e.classList.add("hidden");
            document.getElementById(msv[0]).addEventListener('click', () => {
                let e = document.getElementById(msv[1]);
                if(e.classList.contains("hidden")){
                    e.classList.remove("hidden");
                } else {
                    e.classList.add("hidden");
                }
            })
        }
    }
}