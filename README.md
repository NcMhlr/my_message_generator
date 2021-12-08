# My_Message_Generator
## Generiert ein Zufalls Zitat.
### Programm_Ablauf

* Per Zufall eine Kategorie auswählen
    * in der Kategorie ein Zitat per Zufall auswählen


### Datenstruktur
-----------------

Zufallstypen: 
1. Zufällig nach Autor
2. Zufällig nach Kategorie
3. Zufall über alle einträge

Array Kategorie ['Sport', 'Medien', 'Tech']; usw.
Array Autor ['Steve Jobs', Barac Obama'] usw.
Array gesamt [['Zitattext', 'Autor', 'Kategorie'], ...]

1. Zufallsgenerator für Zufallstype 1 - 3

Wenn [1]  zufällig von Autor
* Per Zufall aus Array Autor einen Autor auswählen
* gesamt Array nach **Autor** filtern
* aus gefiltertem Array per Zufall ein Zitat des Autors auswählen.
* Ausgabe aller Entscheidungen in der Console.


Wenn [2] >> zufällig nach Kategorie
* per Zufall aus Array **Kategorie** eine Kategorie auswählen.
* gesamt Array nach Kategorie filtern
* aus gefiltertem Array per Zufall ein Zitat der Kategorie auswählen.
* Ausgabe aller Entscheidungen in der Console.

Wenn [3] >> zufällig über alle Zitate
* per Zufall aus Array ein Zitat auswählen
* Ausgabe aller Entscheidungen in der Console.
