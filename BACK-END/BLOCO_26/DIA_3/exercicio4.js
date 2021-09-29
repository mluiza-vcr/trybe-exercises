const fs = require('fs');

function writeMyFile(nomeArquivo, conteudoArquivo) {
  fs.writeFileSync(`/home/malucastelar/trybe-exercises/BACK-END/BLOCO_26/DIA_3/${nomeArquivo}`, conteudoArquivo);
  return 'ok';
}

module.exports = writeMyFile;