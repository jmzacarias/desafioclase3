let cuadro = prompt ('¿De qué cuadro sos?');

while (cuadro != 'Boca') {
        
    switch (cuadro) {    

        case 'River':
            alert ('Gallina, sos de la B, seguí participando');
            break;
        
        case 'San Lorenzo':
            alert ('Cuervo, sos de la B, seguí participando');
            break;

        case 'Racing':
            alert ("Sos de la B, seguí participando");
            break;
        
        case 'Independiente':
            alert ('sos de la B, seguí participando');
            break;

        default:
            alert ('No existís');
            break;
    }
    cuadro = prompt ("Probá con otro");
}
alert ('Sos de primera, podés continuar')

