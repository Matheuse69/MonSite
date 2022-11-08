const prenom = prompt("Entrez votre prénom :");
//alert(`Bonjour, ${prenom}`);
function direBonjour(prenom) {
    // Ici, prenom est le paramètre de la fonction
    const message = `Bonjour, ${prenom} !`;
    return message;
  }
  
  // Ici, prenom est une variable utilisée comme argument
  //let prenom = "Baptiste";
  console.log(direBonjour(prenom)); // "Bonjour, Baptiste !"
 