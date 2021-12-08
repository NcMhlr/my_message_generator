
const zitatObjekt = {
    arrKategorie: ['Leben','Arbeit','Familie'],
    arrAutor: ['Steve Jobs'],
    arrZitat: [['Vergeuden Sie nicht Ihre Zeit damit, das Leben eines anderen zu leben.','Steve Jobs','Leben'],['','','']],

zufallAusArray: (arr) => {
    const zufallsZahl = Math.floor(Math.random() * arr.length);
    return arr[zufallsZahl];
},

zufallZitat: () => {
    const zufallsZahl = Math.floor(Math.random() * 3) + 1;
    switch (zufallsZahl) {
        case 1:
            console.log(this.arrKategorie);
            return 'Ein zufälliges Zitat aus einer einer zufälligen Kategorie.';
        break;
        case 2:
            return 'Ein zufälliges Zitat eines zufälligen Autors.';
        break;
        case 3:
            return 'Ein zufälliges Zitat.';
        break;
    }
}



};





for(i=0;i < 5; i++){
console.log(zitatObjekt.zufallZitat());
zitatObjekt.zufallAusArray(zitatObjekt.arrKategorie)
};
