import { Produtos, lista_objetos } from "./Produtos";

class Cards extends HTMLElement{
    constructor(){
        super(); /* herança com html element */
        const shadow = this.attachShadow({mode: "open"});
        this.build(shadow);
    }    

    build(shadow: ShadowRoot){
        lista_objetos.map((produto)=>{            /* função anonima*/ 
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            const h3 = document.createElement("h3");

            h1.innerText = produto.getDesc();
            h3.innerText = produto.getPreco().toString();

            div.append(h1, h3); /* colar o h1 e o h3 dentro da div */ 
            shadow.append(div); 
        });
    }
}

customElements.define("meus-cards", Cards);