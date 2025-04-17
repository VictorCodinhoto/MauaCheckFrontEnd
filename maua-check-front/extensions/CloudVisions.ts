import vision from '@google-cloud/vision';
// Caminho para sua chave JSON
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'maua-check-front/credentials/maua-check-daa86e656544.json'
  });
  
  // Exemplo de uso: detectar texto em uma imagem
  export default async function detectarTexto(caminhoImagem: string) {
    const [result] = await client.textDetection(caminhoImagem);
    const detections = result.textAnnotations;
    console.log('Texto detectado:');
    detections?.forEach(text => console.log(text.description));
  }
  
  detectarTexto('./teste.png');