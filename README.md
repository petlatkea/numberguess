# Numberguess

Dette er den færdige implementation af fælles-øvelsen fra første dag med DSA valgfaget.

Kig i commit-historikken for at følge progressionen:
1. Først lavede vi et fundament med HTML, CSS og JS filer
2. Så "begyndte vi med the end", og lavede HTML'en som den skulle se ud når spillet var i gang.
3. Efter at have lært lidt mere om event-drevet programmering, lavede vi en event-listener til knappen.
4. Og læste gættet fra input-feltet hver gang der blev trykket på knappen.
5. Og sammenlignede så det ```gæt``` med vores ```tal``` - og fulgte vores oprindelige pseudokode med simple console.log udskrifter
6. Dernæst lavede vi HTML output med ```.insertAdjacentHTML``` og 'template-strings' med 'backticks'.
7. I mangel af et while-loop, fjernede vi event-listeneren på knappen, hvis der bliver gættet rigtigt.
8. Og endelig erstattede vi det hardcodede "tilfældige" tal på 42 til en rigtig random værdi - og fjernede det ligeledes hardcodede HTML, så det nu er et rigtigt spil!

Kig i *improvements* branchen for at se hvordan koden kan forbedres endnu mere - så spillet bliver lidt "lækrere".