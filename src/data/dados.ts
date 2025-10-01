export const dadosHierarquicos: { [key: string]: string[] } = {
  // Nível 1
  "CONSÓRCIO": ["Subitem 1", "Subitem 2", "Subitem 3", "Subitem 4", "Subitem 5", "Subitem 6"],
  "VEÍCULOS": ["Carros", "Motos", "Caminhões"],
  "ENERGIA": ["Solar", "Eólica", "Hidrelétrica"],
  "LOCADORA": ["Gestão de Frota", "Assinatura Mensal", "Aluguel Diário"],

  // Nível 2 (Detalhes dos subitens)
  "Subitem 1": ["Detalhe A", "Detalhe B", "Detalhe C"],
  "Carros": ["Sedan", "SUV", "Hatch"],
  "Gestão de Frota": ["Rastreamento", "Manutenção", "Seguro"],

  // Nível 3 (e assim por diante...)
  "Detalhe A": ["Info X", "Info Y"],
  "SUV": ["Compass", "T-Cross", "Creta"],

};