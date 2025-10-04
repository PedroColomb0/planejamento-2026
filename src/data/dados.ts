// data/dados.ts

export const dadosHierarquicos: { [key: string]: string[] } = {
  // =========================================================
  // NÍVEL 1: Itens da Órbita Externa (Agora serão 7 itens)
  // =========================================================
  "AGRONEGÓCIOS": [
    "CRÉDITO DE CARBONO", "SOJA", "MILHO", "SILAGEM", "FÁBRICA",
    "PARCERIAS", "SECADOR", "BOITEL", "CONFINAMENTO", "MANEJO FLORESTAL",
    "CRIA E RECRIA",
    "GÉNETICA P.O",
    "LOCAÇÃO TRANSPORTE"
  ],
  "VEÍCULOS PESADOS": [
    "AGRO|CÁLCARIO|BOI|GRÃO|CAFÉ", // <<< NOVO AJUSTE AQUI (5 palavras, 4 separadores)
    "COMBUSTÍVEIS", "E-COMMERCE", "ATACADOS", "CWS",
    "CONTRATO DE MANUTENÇÃO", "FRIGORÍFICOS", "MATERIAIS DE CONSTRUÇÃO",
    "VENDA DE MOTORES", "LOCAÇÃO", "PNEU", "CONSÓRCIO"
  ],
  "LICITAÇÃO": [ // ITEM AGORA TRATADO COMO NÍVEL 1
    "AUTOMÓVEIS", "ENERGIA", "GESTÃO MULTIBENEFÍCIOS","GESTÃO DE FROTA", "VENDA DE ATAS",
    "SEGUROS", "CAMINHÕES", "ÔNIBUS"
  ],
  "VEÍCULOS LEVES": [
    "CORRETORA SEGUROS", "CONSÓRCIO", "CARRO ELÉTRICO", "FIAT",
    "BARTER", "JUINA", "MIT", "CARRO POR ASSINATURA",
    "PEGEOUT", "E-COMMERCE", "CITROËN",
    "CENTRAL SEMINOVOS", "D` PASCHOAL", "LOCADORA"
  ],
  "SERVIÇOS FINANCEIROS": [
    "DADOS|FLUXO|CAIXA", // <<< ALTERADO: Usando '|' para formatação visual no DetalheItem
    "UZZIPAY", "GESTÃO MULTIBENEFÍCIOS", "GESTÃO DE FROTA",
    "MESA DE CRÉDITO", "LINHAS DE CRÉDITO", "FUNDOS"
  ],
  "ENERGIA": [
    "SOLAR", "AMAZONAS PROJETO", "TÉRMICA",
    "HIDRÁULICA", "P.P.P ILUMINAÇÃO PÚBLICA", "BATERIAS",
    "SERVIÇOS", "GASPAR", "GERADORES",
    "COMERCIALIZADORA",
    "MERCADO LIVRE"
  ],
  "CORPORATIVO": [
    "Subitem Corporativo 1", "Subitem Corporativo 2" // Exemplo. Ajuste conforme necessário.
  ],
  "PROJETOS": [ // A chave continua "PROJETOS" para consistência com o título condicional
    "INTRANET", "INDIQUE CERTO", "DATA LAKE", "FÁBRICA BIOINSUMO",
    "BIOECONOMIA - FLORESTA", "E-COMMERCE", "APP GRUPO", 
    "RASTREABILIDADE|GADO|SOJA|RAÇÃO", // <<< NOVO AJUSTE AQUI
    "INTELIGENCIA ARTIFICIAL", "PROGRAMA DE FIDELIDADE",
    "REDE SOCIAL - CLIENTE", "INCLUSÃO / PERTENCIMENTO",
  ],

  // =========================================================
  // NÍVEL 2 (e Subsequentes): Detalhes de Subitens clicáveis    
  // =========================================================
  
  "DADOS / FLUXO CAIXA": ["Indicadores", "Relatórios", "Dashboards", "Orçamento"], // <<< Mantido a chave para navegação
  
  "AGRO / VEÍCULOS PESADOS": ["CALCÁRIO", "BOI", "GRÃO", "CAFÉ"],

  "COMERCIALIZADORA": ["Subitem Comercializadora 1", "Subitem Comercializadora 2"],  
};