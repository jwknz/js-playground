Each folder has its own node_modules

To run these commands, use the `--prefix` flag.

Examples:

```
npm i --prefix js // runs the npm i for the js folder
npm run jest-test --prefix jest // runs npm run jest-test in jest folder
```

This is a project playground - so a bunch of extensions are used.

VSCODE Extension Recommendations are:

```
{
	"recommendations": [
    //Generic
    "kevinkyang.auto-comment-blocks",
    "aaron-bond.better-comments", 
    "humao.rest-client",
    "adisreyaj.swagger-snippets",
    "arjun.swagger-viewer",

    //Testing
    "hbenl.vscode-test-explorer",
    "rtbenfield.vscode-jest-test-adapter",

    //Javascript and React
    "auchenberg.vscode-browser-preview",
	  "msjsdiag.debugger-for-chrome", 
    "dsznajder.es7-react-js-snippets", 
    "orta.vscode-jest",
    "wallabyjs.quokka-vscode",
    "devzstudio.mern-snippets",
    "gurayyarar.expressjs-4-snippets",


    //Database
    "mtxr.sqltools",
    "formulahendry.vscode-mysql",
    "jakebathman.mysql-syntax",

    //.Net
    "ms-vscode.csharp"
	]
}
```