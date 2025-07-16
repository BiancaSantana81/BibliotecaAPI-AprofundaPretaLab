import chalk from 'chalk';
import app from './infra/server/server';

app.listen(3000, () => {
    console.clear();

    console.log(chalk.bgMagentaBright.white.bold('\n 💜  Bem-vinda à minha biblioteca virtual! 📚  \n'));

    console.log(
      chalk.yellowBright(
        `“A educação como prática da liberdade afirma que o conhecimento pode servir à libertação.” — `
        + chalk.magenta('bell hooks') + '\n'
      )
    );

    console.log(
      chalk.green('Que o conhecimento sirva de instrumento para nós, mulheres negras. 🌿📖\n')
    );
});