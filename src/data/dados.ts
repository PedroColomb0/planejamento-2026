// data/dados.ts (Código atualizado)

export const dadosHierarquicos: { [key: string]: string[] } = {
  // =========================================================
  // NÍVEL 1: Itens da Órbita Externa (Agora serão 6 itens)
  // =========================================================
  "AGRONEGÓCIOS": [
    "CRÉDITO DE CARBONO", "SOJA", "MILHO", "SILAGEM", "FÁBRICA", 
    "PARCERIAS", "SECADOR", "BOITEL", "CONFINAMENTO", "MANEJO FLORESTAL", 
    "CRIA E RECRIA", 
    "GÉNETICA P.O", 
    "LOCAÇÃO TRANSPORTE"
  ],
  "VEÍCULOS PESADOS": [
    "AGRO / CÁLCARIO / BOI / GRÃO / CAFÉ",
    "COMBUSTÍVEIS", "E-COMMERCE", "ATACADOS", "CWS", 
    "CONTRATO DE MANUTENÇÃO", "FRIGORÍFICOS", "MATERIAIS DE CONSTRUÇÃO", 
    "VENDA DE MOTORES", "LOCAÇÃO", "PNEU", "CONSÓRCIO"
  ],
  "LICITAÇÃO": [
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
    "DADOS / FLUXO CAIXA",
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
  "PROJETOS": [ // A chave continua "PROJETOS"
    "INTRANET", "INDIQUE CERTO", "DATA LAKE", "FÁBRICA BIOINSUMO", 
    "BIOECONOMIA - FLORESTA", "E-COMMERCE", "APP GRUPO", "RASTREABILIDADE / GADO / SOJA / RAÇÃO", "INTELIGENCIA ARTIFICIAL", "PROGRAMA DE FIDELIDADE",
    "REDE SOCIAL - CLIENTE", "INCLUSÃO / PERTENCIMENTO",
    "LICITAÇÃO" // <-- ALTERAÇÃO AQUI: Adicionado para navegar para os detalhes de Licitação
  ],

  // =========================================================
  // NÍVEL 2 (e Subsequentes): Detalhes de Subitens clicáveis  
  // =========================================================
  
  "DADOS / FLUXO CAIXA": ["Indicadores", "Relatórios", "Dashboards", "Orçamento"],
  
  "AGRO / VEÍCULOS PESADOS": ["CALCÁRIO", "BOI", "GRÃO", "CAFÉ"],

  "COMERCIALIZADORA": ["Subitem Comercializadora 1", "Subitem Comercializadora 2"], 
};