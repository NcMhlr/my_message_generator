const zitatObjekt = {
    arrZitat: [
        ['Vergeuden Sie nicht Ihre Zeit damit, das Leben eines anderen zu leben.', 'Steve Jobs', 'Leben'],
        ['Dies ist nicht der Beginn vom Ende der Krise, sondern das Ende vom Beginn.', 'Barak Obama', 'Zukunft'],
        ['Nur tote Fische schwimmen mit dem Strom.', 'Indianer', 'Opportunismus'],
        ['Filmemacher sollten bedenken, dass man ihnen am Tag des Jüngsten Gerichts all ihre Filme wieder vorspielen wird.','Charlie Chaplin','Film'],
        ['Wer ständig glücklich sein möchte, muss sich oft verändern.','Konfuzius','Leben']
    ],

    // Random Type
    // 0 Random Quote from arrZitat
    // 1 Random Quote from Autor
    // 2 Random Quote from Category 
    randomQuoteBy() {
        const rndNumber = Math.floor(Math.random() * 3);
        return rndNumber;
    },

    // Random Element from an given Array
    randomElementFromArray(arr) {
        const rndNumber = Math.floor(Math.random() * arr.length);
        return arr[rndNumber];
    },

    // Filter method wich filters the Array by a given category or autor
    // if the type is 0 -> returned complete Array 
    filterArray(arr, source, type) {
            return filteredArray = arr.filter(e => {
                    return e[type] === source
                });
    },

    createTempArray(arr, type) {
        const tempArray = [];
            for(let e of arr){
                tempArray.push(e[type]);
            };
        return tempArray;
        },
    
    printMessage() {
        const randomNumber = this.randomQuoteBy();
        console.log(randomNumber);
        if(randomNumber < 1){
                // console.log(randomNumber);
                console.log(this.randomElementFromArray(this.arrZitat));
             }else{
                 //console.log(randomNumber);
                 console.log(this.createTempArray(this.arrZitat, randomNumber));
                 console.log(this.randomElementFromArray(this.filterArray(this.arrZitat, this.randomElementFromArray(this.createTempArray(this.arrZitat, randomNumber)), randomNumber)));
        }
    },
};


for (i = 0; i < 10; i++) {
    zitatObjekt.printMessage();
    //console.log(zitatObjekt.createTempArray(zitatObjekt.arrZitat, 2));
    
    //console.log(zitatObjekt.zufallAusArray(zitatObjekt.arrKategorie));
};