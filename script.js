const zitatObjekt = {
    arrKategorie: ['Leben', 'Zukunft'],
    arrAutor: ['Steve Jobs', 'Barak Obama'],
    arrZitat: [['Vergeuden Sie nicht Ihre Zeit damit, das Leben eines anderen zu leben.', 'Steve Jobs', 'Leben'],
        ['Dies ist nicht der Beginn vom Ende der Krise, sondern das Ende vom Beginn.', 'Barak Obama', 'Zukunft']],

    zufallAusArray(arr) {
        const zufallsZahl = Math.floor(Math.random() * arr.length);
        return arr[zufallsZahl];
    },

    filterArray(arr, source) {
        return filteredArray = arr.filter(e => {return e[2] === source});

    },

    zufallZitat() {
        const zufallsZahl = 1 //Math.floor(Math.random() * 3) + 1;
        switch (zufallsZahl) {
            case 1:
                const tempArr = this.filterArray(this.arrZitat, this.zufallAusArray(this.arrKategorie));
                //console.log(tempArr)
                const obj = this.zufallAusArray(tempArr);

                return {
                    description: 'Ein zufälliges Zitat aus einer einer zufälligen Kategorie.',
                    categorie: obj[2],
                    autor: obj[1],
                    zitat: obj[0],
                };
                break;
            case 2:



                return {
                    description: 'Ein zufälliges Zitat eines zufälligen Autors.',
                        categorie: 'noch nicht verfügbar',
                        autor: this.zufallAusArray(this.arrAutor),
                        zitat: ''
                };
                break;
            case 3:
                const obj2 = this.zufallAusArray(this.arrZitat)
                return {
                    description: 'Ein zufälliges Zitat.',
                        categorie: obj2[2],
                        autor: obj2[1],
                        zitat: obj2[0],
                }
                break;
        }
    }
};

for (i = 0; i < 5; i++) {
    const zitat = zitatObjekt.zufallZitat();
    console.log(zitat.description + '\nKategrie: ' + zitat.categorie + '\nAutor: ' + zitat.autor + '\nZitat: ' + zitat.zitat);
    console.log('--------------------------------------------------------------------------------');
    //console.log(zitatObjekt.zufallAusArray(zitatObjekt.arrKategorie));
};