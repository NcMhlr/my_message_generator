
const zitatObjekt = {
    arrKategorie: ['Leben','Arbeit','Familie'],
    arrAutor: ['Steve Jobs','Barak Obama'],
    arrZitat: [['Vergeuden Sie nicht Ihre Zeit damit, das Leben eines anderen zu leben.','Steve Jobs','Leben'],['','','']],

zufallAusArray(arr) {
    const zufallsZahl = Math.floor(Math.random() * arr.length);
    return arr[zufallsZahl];
},

filterArray(arr, source) {

},

zufallZitat() {
    const zufallsZahl = Math.floor(Math.random() * 3) + 1;
    switch (zufallsZahl) {
        case 1:
            return {
            description: 'Ein zufälliges Zitat aus einer einer zufälligen Kategorie.',
            categorie: this.zufallAusArray(this.arrKategorie),
            autor: '',
            zitat: ''
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
            return 'Ein zufälliges Zitat.';
        break;
    }
}
};

for(i=0;i < 5; i++){
const zitat = zitatObjekt.zufallZitat();
console.log(zitat.description + ' ' + zitat.categorie + ' ' + zitat.autor);
//console.log(zitatObjekt.zufallAusArray(zitatObjekt.arrKategorie));
};
