class scrollApi{
    constructor(params) {
        this.params = params;
        if(this.params['time'] != NaN){
            this.changeClassTime(this.params['time']);
        } else {
            this.changeClassTime(750);
        }
    }

    changeClassTime(time){
        let stylesheet = document.styleSheets[0];
        stylesheet.insertRule(".scrollApiI{\n" +
            "    transition: "+time.toString()+"ms;\n" +
            "}", 0);
    }

    elements = new Array();

    init(){
        for(let i = 0; i < this.elements.length; i++){
            this.precheck(this.elements[i]);
        }
        window.addEventListener('scroll', e => {
            for(let i = 0; i < this.elements.length; i++){
                this.check(this.elements[i]);
            }
        });
    }

    addElement(element){
        this.elements.push(element);
    }

    precheck(element){
        let window_bottom = window.innerHeight;
        let position = element.getBoundingClientRect();
        if(position.top > 0 && window_bottom > position.bottom){
            element.classList.add("scrollApiI");
        } else {
            element.classList.add("scrollApiI");
            element.classList.add("scrollApiHidden");
        }

    }

    check(element){
        let window_bottom = window.innerHeight;
        let position = element.getBoundingClientRect();
        if(position.top > 0 && window_bottom > position.bottom){
            this.animate(element);
        }

    }

    animate(element){
        if(element.classList.contains("scrollApiHidden")){
            element.classList.remove("scrollApiHidden");
        }
        element.classList.add("scrollApiAnimated");
    }


}