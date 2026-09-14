/* ==========================================================================
   CONFIGURAÇÃO CENTRALIZADA — HIDRATEX
   --------------------------------------------------------------------------
   Altere aqui as informações da empresa em um único lugar.
   ========================================================================== */

const CONFIG = {

  /* Nome e identidade ---------------------------------------------------- */
  empresa: "Hidratex",
  logoNome: "Hidratex",
  tagline: "Construção e Hidráulica",
  slogan: "Soluções completas em construção civil e serviços hidráulicos",

  /* Contato -------------------------------------------------------------- */
  whatsapp: "5500000000000",       // Formato: 55 + DDD + número (somente dígitos)
  telefone: "",                    // Ex.: (00) 00000-0000
  email: "",                       // Ex.: contato@hidratex.com.br

  /* Localização ---------------------------------------------------------- */
  cidade: "",                      // Ex.: Curitiba
  endereco: "",                    // Ex.: Rua Exemplo, 123 - Bairro
  atendimento: "",                 // Ex.: Curitiba e Região Metropolitana

  /* Funcionamento -------------------------------------------------------- */
  horario: "",                     // Ex.: Seg a Sex: 08h às 18h

  /* Redes Sociais -------------------------------------------------------- */
  instagram: "",
  facebook: "",

  /* Mensagens do WhatsApp ------------------------------------------------ */
  mensagemPadrao: "Olá! Gostaria de solicitar um orçamento com a Hidratex.",
  mensagemConstrucao: "Olá! Gostaria de solicitar um orçamento para construção civil com a Hidratex.",
  mensagemHidraulica: "Olá! Gostaria de solicitar um orçamento para serviços hidráulicos com a Hidratex.",
  mensagemReforma: "Olá! Gostaria de solicitar um orçamento para reforma com a Hidratex.",
  mensagemManutencao: "Olá! Gostaria de solicitar um orçamento para manutenção com a Hidratex."
};

/* ==========================================================================
   PORTFÓLIO — OBRAS REALIZADAS
   --------------------------------------------------------------------------
   Para adicionar/alterar uma obra, edite um item abaixo.
   - tag: categoria exibida no cartão
   - titulo: nome da obra
   - descricao: resumo curto
   - imagem: foto principal (capa)
   - imagens: lista de fotos da galeria lightbox
   - categoria: palavra-chave usada na mensagem do WhatsApp
   ========================================================================== */

const PORTFOLIO = [
  // IMAGENS DE TESTE (Unsplash). Substitua por fotos reais.
  {
    tag: "Construção",
    titulo: "Construção Residencial",
    descricao: "Obra residencial executada com qualidade e acabamento premium.",
    imagem: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Construcao"
  },
  {
    tag: "Hidráulica",
    titulo: "Instalação Hidráulica Completa",
    descricao: "Sistema hidráulico completo com redes de água e esgoto.",
    imagem: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Hidraulica"
  },
  {
    tag: "Reforma",
    titulo: "Reforma de Banheiro",
    descricao: "Reforma completa com revestimentos novos e novas tubulações.",
    imagem: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Reforma"
  },
  {
    tag: "Manutenção",
    titulo: "Manutenção Predial",
    descricao: "Serviço de manutenção preventiva e corretiva em edifício.",
    imagem: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Manutencao"
  }
];
