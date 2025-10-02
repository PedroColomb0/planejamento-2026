// dados.ts

export const dadosHierarquicos: { [key: string]: string[] } = {
  // =========================================================
  // NÍVEL 1: Itens da Órbita Externa (7 itens)
  // =========================================================
  "AGRONEGÓCIOS": [
    "CRÉDITO DE CARBONO", "SOJA", "MILHO", "SILAGEM", "FÁBRICA", 
    "PARCERIAS", "SECADOR", "BOITEL", "CONFINAMENTO", "MANEJO FLORESTAL", 
    "CRIA E RECRIA GÉNETICA P.O", "LOCAÇÃO TRANSPORTE"
  ],
  "VEÍCULOS PESADOS": [
    "CALCÁRIO", "BOI", "GRÃO", "CAFÉ",
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
    "DADOS", // Clicável
    "FLUXO DE CAIXA",
    "UZZIPAY", "BIONIO", "CARTÕES ADMINISTRATIVO", 
    "MESA DE CRÉDITO", "LINHAS DE CRÉDITO", "FUNDOS"
  ],
  "ENERGIA": [
    "GERADOR DIESEL", "SOLAR", "AMAZONAS PROJETO", "TÉRMICA", 
    "HIDRÁULICA", "P.P.P ILUMINAÇÃO PUBLICA", "BATERIAS", 
    "SERVIÇOS", "GASPAR", "GERADORES", "COMERCIALIZADORA", "MERCADO LIVRE"
  ],
  "PROJETOS": [
    "PROJETO 1", "PROJETO 2", "PROJETO 3", "PROJETO 4", 
    "PROJETO 5", "PROJETO 6", "PROJETO 7", "PROJETO 8"
  ],

  // =========================================================
  // NÍVEL 2 (e Subsequentes): Detalhes de Subitens clicáveis
  // =========================================================
  
  // Detalhamento de DADOS (Exemplo de hierarquia profunda)
  "DADOS": ["Indicadores", "Relatórios", "Dashboards"],
};