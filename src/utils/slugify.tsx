export function slugify(text: string): string {
  if (!text) return ""; // Proteção para evitar erros

  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Separa a letra do acento (ex: "ç" vira "c" + "¸")
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos (o "¸" do exemplo acima)
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/[^\w\-]+/g, "") // Remove todos os caracteres que não são palavras ou hífens
    .replace(/\-\-+/g, "-") // Substitui múltiplos hífens por um único
    .replace(/^-+/, "") // Remove hífens do início do texto
    .replace(/-+$/, ""); // Remove hífens do final do texto
}
