/**
 * Module dependencies
 */
const vscode = require('vscode');

function activate(context) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');

        // Counts character selection length
        let editor = vscode.window.activeTextEditor;
        if(!editor) {
            return; // No open text editor
        }
        let selection = editor.selection;
        let text = editor.document.getText(selection);
        vscode.window.showInformationMessage(`Selected characters ${text.length}`);

        

    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
