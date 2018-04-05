// CLASSE SIMPLE

class Dog {
  // nom: string

  constructor(nom) {
    this.nom = nom;
  }

  jappe() {
    return `Waf waf waf, Je suis ${this.nom}`;
  }
}

export default Dog
