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
    "AGRO / VEÍCULOS PESADOS", // Agrupamento de Calcário, Boi, Grão, Café
    "COMBUSTIVEIS", "VENDAS ONLINE", "ATACADOS", "CWS", 
    "CONTRATO DE MANUTENÇÃO", "FRIGORIFICOS", "MATERIAIS DE CONSTRUÇÃO", 
    "VENDA DE MOTORES", "LOCAÇÃO", "PNEU", "CONSÓRCIO"
  ],
  "LICITAÇÃO": [
    "AUTOMOVEIS", "ENERGIA", "BIONIO", "VENDA DE ATAS", 
    "SEGUROS", "CAMINHOES", "ONIBUS"
  ],
  "VEICULOS LEVES": [
    "CORRETORA SEGUROS", "CONSÓRCIO", "CARRO ELETRICO", "FIAT", 
    "BARTER", "JUINA", "MIT", "CARRO POR ASSINATURA", 
    "PEGEOOUT", "VENDAS ON-LINE", "CITROEN", 
    "CENTRAL SEMINOVOS", "LICITAÇÕES", "LOCADORA"
  ],
  "FINANCEIRO": [
    "DADOS / FLUXO CAIXA", // Agrupamento de Dados e Fluxo de Caixa
    "UZZIPAY", "BIONIO", "CARTÕES ADMINISTRATIVO", 
    "MESA DE CRÉDITO", "LINHAS DE CRÉDITO", "FUNDOS"
  ],
  "ENERGIA": [
    "GERADOR DIESEL", "SOLAR", "AMAZONAS PROJETO", "TÉRMICA", 
    "HIDRÁULICA", "P.P.P ILUMINAÇÃO PÚBLICA", "BATERIAS", 
    "SERVIÇOS", "GASPAR", "GERADORES", 
    "COMERCIALIZADORA", // Item clicável
    "MERCADO LIVRE"
  ],
  "PROJETOS": [
    "PROJETO 1", "PROJETO 2", "PROJETO 3", "PROJETO 4", 
    "PROJETO 5", "PROJETO 6", "PROJETO 7", "PROJETO 8"
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