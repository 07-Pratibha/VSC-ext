// const vscode = require('vscode');
// const { spawn } = require('child_process');
// const path = require('path');

// function activate(context) {
//   console.log('Congratulations, your extension "cliapp" is now active!');

//   let disposable = vscode.commands.registerCommand('cliapp.helloWorld', function () {
//     vscode.window.showInputBox({ prompt: 'Enter command' }).then((command) => {
//       if (!command) {
//         return;
//       }

//       const exePath = path.join(__dirname, 'try404.exe');

//       const child = spawn(exePath, [command], { cwd: __dirname });

//       child.stdout.on('data', (data) => {
//         const output = data.toString();
//         vscode.window.showInformationMessage(output);
//       });

//       child.stderr.on('data', (data) => {
//         const error = data.toString();
//         vscode.window.showErrorMessage(error);
//       });

//       child.on('error', (error) => {
//         vscode.window.showErrorMessage(error.message);
//       });

//       child.on('close', (code) => {
//         console.log(`Child process exited with code ${code}`);
//       });
//     });
//   });

//   context.subscriptions.push(disposable);
// }

// function deactivate() {}

// module.exports = {
//   activate,
//   deactivate
// };
















// command used: `api1`
const vscode = require('vscode');
const { spawn } = require('child_process');
const path = require('path');

function activate(context) {
  console.log('Congratulations, your extension "cliapp" is now active!');

  let disposable = vscode.commands.registerCommand('cliapp.helloWorld', function () {
    vscode.window.showInputBox({ prompt: 'Enter command' }).then((command) => {
      if (!command) {
        return;
      }

      const exePath = path.join(__dirname, 'try404.exe');
      const configPath = path.join(__dirname, 'config.yaml');

      const child = spawn(exePath, ['-config', configPath, '-api', command]);

      child.stdout.on('data', (data) => {
        const output = data.toString();
        vscode.window.showInformationMessage(output);
      });

	  child.stdout.pipe(process.stdout)

      child.stderr.on('data', (data) => {
        const error = data.toString();
        vscode.window.showErrorMessage(error);
      });

      child.on('error', (error) => {
        vscode.window.showErrorMessage(error.message);
      });

      child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
      });
    });
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};



