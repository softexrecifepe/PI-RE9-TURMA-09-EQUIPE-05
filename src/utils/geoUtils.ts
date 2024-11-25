// Função utilitária para calcular a distância entre dois CEPs
// Baseado na fórmula de Haversine (para calcular distâncias entre coordenadas geográficas)

// Mock de coordenadas de alguns CEPs (exemplo para testes)
const cepCoordenadas: { [cep: string]: { lat: number; lng: number } } = {
  "50030-150": { lat: -8.0631, lng: -34.8711 }, // Recife Antigo
  "51130-220": { lat: -8.1211, lng: -34.9049 }, // Boa Viagem
  "53020-310": { lat: -7.9945, lng: -34.8553 }, // Olinda
  "51020-900": { lat: -8.1152, lng: -34.8978 }, // Shopping Recife
};

// Função que retorna as coordenadas de um CEP
function getCoordenadasPorCEP(
  cep: string
): { lat: number; lng: number } | null {
  return cepCoordenadas[cep] || null;
}

// Fórmula de Haversine para calcular a distância em km
function calcularDistancia(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Raio da Terra em km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Retorna a distância em km
}

// Função principal: calcula a distância entre dois CEPs
export function calcularDistanciaEntreCEPs(cep1: string, cep2: string): number {
  const coords1 = getCoordenadasPorCEP(cep1);
  const coords2 = getCoordenadasPorCEP(cep2);

  if (!coords1 || !coords2) {
    console.warn(`CEP inválido ou não encontrado: ${cep1}, ${cep2}`);
    return Infinity; // Retorna um valor alto para indicar falha
  }

  return calcularDistancia(coords1.lat, coords1.lng, coords2.lat, coords2.lng);
}
