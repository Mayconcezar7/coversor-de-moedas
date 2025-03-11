



function convertValues(){
    const selectMoeda = document.querySelector(".currency-select").value
    const inputValues = document.querySelector(".inputMoeda").value
    const valorMoeda = document.querySelector(".valor")
    const valorMoedaonvertida = document.querySelector(".valor-a-converte")

    const ValorDolarDia = 5.79
    const ValorEuroDia = 6.27

    



    if(selectMoeda == "dolar"){
        valorMoedaonvertida.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValues / ValorDolarDia)
    }

    if(selectMoeda == "euro"){
        valorMoedaonvertida.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValues / ValorEuroDia)
    }


    valorMoeda.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputValues)


}



function mudarImageText(){
    const moedaCoverter = document.querySelector(".moeda-a-coverter")
    const  imgmoeda = document.querySelector(".image-moeda")
    const selectMoedae = document.querySelector(".currency-select").value
    

    if(selectMoedae == "dolar"){

        moedaCoverter.innerHTML = "Dólar"
        imgmoeda.src = "./assents/estados-unidos.png"
        
    }

    if(selectMoedae == "euro"){

        moedaCoverter.innerHTML = "Euro"
        imgmoeda.src = "./assents/euro.png"
        
    }

    convertValues()
}














