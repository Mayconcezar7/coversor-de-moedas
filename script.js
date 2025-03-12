



function convertValues(){
    const selectMoeda = document.querySelector(".currency-select").value
    const inputValues = document.querySelector(".inputMoeda").value
    const valorMoeda = document.querySelector(".valor")
    const valorMoedaConvertida = document.querySelector(".valor-a-converte")

    const ValorDolarDia = 5.79
    const ValorEuroDia = 6.27
    const ValorLibraDia = 7.55
    const ValorBitcoinDia = 486.885

    



    if(selectMoeda == "dolar"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValues / ValorDolarDia)
    }

    if(selectMoeda == "euro"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValues / ValorEuroDia)
    }

    if(selectMoeda == "libra"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat('en-GB', { 
            style: 'currency', 
            currency: 'GBP' 
        }).format(inputValues/ValorLibraDia);
    }

    if(selectMoeda == "bitcoin"){
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'BTC',
            minimumFractionDigits: 8, // Bitcoin usa até 8 casas decimais
        }).format(inputValues/ValorBitcoinDia)
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

    if(selectMoedae == "libra"){

        moedaCoverter.innerHTML = "Libra"
        imgmoeda.src = "./assents/libra.png"
        
    }

    if(selectMoedae == "bitcoin"){

        moedaCoverter.innerHTML = "Bitcoin"
        imgmoeda.src = "./assents/bitcoin.png"
        
    }

    convertValues()
}














