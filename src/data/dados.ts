// dados.ts

export const dadosHierarquicos: { [key: string]: string[] } = {
  // =========================================================
  // NÍVEL 1: Itens da Órbita Externa (7 itens)
  // =========================================================
  "AGRONEGÓCIOS": [
    "CRÉDITO DE CARBONO", "SOJA", "MILHO", "SILAGEM", "FÁBRICA", 
    "PARCERIAS", "SECADOR", "BOITEL", "CONFINAMENTO", "MANEJO FLORESTAL", 
    // SEPARAÇÃO SOLICITADA:
    "CRIA E RECRIA", 
    "GÉNETICA P.O", 
    "LOCAÇÃO TRANSPORTE"
  ],
  "VEÍCULOS PESADOS": [
    "AGRO / CÁLCARIO / BOI / GRÃO / CAFÉ", // Agrupamento de Calcário, Boi, Grão, Café
    "COMBUSTÍVEIS", "VENDAS ONLINE", "ATACADOS", "CWS", 
    "CONTRATO DE MANUTENÇÃO", "FRIGORÍFICOS", "MATERIAIS DE CONSTRUÇÃO", 
    "VENDA DE MOTORES", "LOCAÇÃO", "PNEU", "CONSÓRCIO"
  ],
  "LICITAÇÃO": [
    "AUTOMÓVEIS", "ENERGIA", "BIONIO", "VENDA DE ATAS", 
    "SEGUROS", "CAMINHÕES", "ÔNIBUS"
  ],
  "VEÍCULOS LEVES": [
    "CORRETORA SEGUROS", "CONSÓRCIO", "CARRO ELÉTRICO", "FIAT", 
    "BARTER", "JUINA", "MIT", "CARRO POR ASSINATURA", 
    "PEGEOUT", "VENDAS ON-LINE", "CITROËN", 
    "CENTRAL SEMINOVOS", "D` PASCHOAL", "LOCADORA"
  ],
  "FINANCEIRO": [
    "DADOS / FLUXO CAIXA", // Agrupamento de Dados e Fluxo de Caixa
    "UZZIPAY", "BIONIO", "CARTÕES ADMINISTRATIVO", 
    "MESA DE CRÉDITO", "LINHAS DE CRÉDITO", "FUNDOS"
  ],
  "ENERGIA": [
    "SOLAR", "AMAZONAS PROJETO", "TÉRMICA", 
    "HIDRÁULICA", "P.P.P ILUMINAÇÃO PÚBLICA", "BATERIAS", 
    "SERVIÇOS", "GASPAR", "GERADORES", 
    "COMERCIALIZADORA", // Item clicável
    "MERCADO LIVRE"
  ],
  "PROJETOS": [
    "INTRANET", "INDIQUE CERTO", "DATA CENTER", "FÁBRICA BIOINSUMO", 
    "BIOECONOMIA - FLORESTA", "VENDAS ON-LINE", "APP GRUPO", "UNIFICAÇÃO DE CADASTRO"
    , "RASTREABILIDADE / GADO / SOJA / RAÇÃO", "INTELIGENCIA ARTIFICIAL", "PROGRAMA DE FIDELIDADE"
    , "REDE SOCIAL - CLIENTE", "INCLUSÃO / PERTENCIMENTO"
  ],

  // =========================================================
  // NÍVEL 2 (e Subsequentes): Detalhes de Subitens clicáveis 
  // =========================================================
  
  "DADOS / FLUXO CAIXA": ["Indicadores", "Relatórios", "Dashboards", "Orçamento"],
  
  "AGRO / VEÍCULOS PESADOS": ["CALCÁRIO", "BOI", "GRÃO", "CAFÉ"],

  "COMERCIALIZADORA": ["Subitem Comercializadora 1", "Subitem Comercializadora 2"], 

  // Novos Detalhes (se necessário) - Por enquanto, CRIA E RECRIA e GÉNETICA P.O
  // não têm sub-níveis de detalhe, então não precisam de chaves aqui.
};