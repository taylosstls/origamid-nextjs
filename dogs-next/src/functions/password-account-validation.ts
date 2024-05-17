export function passwordValidation({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) {
  if (
    password.length < 8 ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password) ||
    !/[!@#$%^&*()-_=+{};:,<.>]/.test(password)
  ) {
    throw new Error(
      'Sua nova senha deve conter: Pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.'
    );
  }

  if (password !== confirmPassword) throw new Error('As senhas não coincidem');
}
