const program = require('commander');
const { exec } = require('child_process'); 
const chalk = require('chalk'); 
program.name('chrome-killer').version('1.0.0').description('Kills all chrome processes');

program
     .option('-k --kill-all', 'Kill all chrome processes',false)
     .parse();

if(program.opts().killAll){
     //taskkill /F /IM chrome.exe /T
     exec('taskkill /F /IM chrome.exe /T', (error, stdout, stderr) => {
          if (error) {
            console.error(chalk.red(`exec error: ${error}`));
            return;
          }
          console.log(chalk.green(`stdout: ${stdout}`));
          if(stderr){
               console.error(chalk.redBright(`stderr: ${stderr}`));
          }
        });
} 
else {
     console.log(chalk.white("Chrome killer : Use with ") + chalk.redBright("-k ") + chalk.white("to ") + chalk.redBright("kill") +chalk.white(" all ") + chalk.yellow("Chrome Processes"));
}