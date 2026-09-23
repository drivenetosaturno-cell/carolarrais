export const whatsappNumber = "558821554554";
export const defaultMessage = "Olá, Carol! Conheci seu trabalho pelo site e gostaria de saber mais sobre seus serviços de identidade visual.";
export function whatsappLink(message = defaultMessage) {
  return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
}
