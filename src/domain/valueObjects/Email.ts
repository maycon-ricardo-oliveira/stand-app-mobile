class Email {
  public readonly email: string;

  constructor(email: string) {
    if (!this.validateEmail(email)) {
      throw new Error("Endereço de e-mail inválido");
    }
    this.email = email;
  }

  validateEmail(email: string): boolean {
    // Expressão regular simples para validar um endereço de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

}