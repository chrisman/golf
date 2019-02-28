const readline = require('readline');

readline
  .createInterface({
    input:process.stdin
  })
  .on('line', line => {
    const alphabet = 'AlfaBravoCharlieDeltaEchoFoxtrotGolfHotelIndiaJuliettKiloLimaMikeNovemberOscarPapaQuebecRomeoSierraTangoUniformVictorWhiskeyXrayYankeeZulu';

    const out = line
      // make an array of chars
      .split('')
      .map(char => {
        // Match the uppercased char followed by everything that is not another uppercase char
        // (Should match the word)
        const word = char.toUpperCase()+'[^A-Z]*'
        return alphabet.match(word)
      })
      // String.prototype.match returns a lotta junk
      // we just want the found match
      .map(match => match[0])

    console.log(out);
  });
