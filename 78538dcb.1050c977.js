(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return c}));t(210),t(211),t(207),t(212),t(213),t(214);var a=t(208);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={id:"advanced-topics-key-bindings",title:"Key Bindings"},r=[{value:"Defaults",id:"defaults",children:[]},{value:"Customization",id:"customization",children:[]},{value:"Example",id:"example",children:[]}],d={rightToc:r},m="wrapper";function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(m,o({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Editor")," component offers flexibility to define custom key bindings\nfor your editor, via the ",Object(a.b)("inlineCode",{parentName:"p"},"keyBindingFn")," prop. This allows you to match key\ncommands to behaviors in your editor component."),Object(a.b)("h2",{id:"defaults"},"Defaults"),Object(a.b)("p",null,"The default key binding function is ",Object(a.b)("inlineCode",{parentName:"p"},"getDefaultKeyBinding"),"."),Object(a.b)("p",null,"Since the Draft framework maintains tight control over DOM rendering and\nbehavior, basic editing commands must be captured and routed through the key\nbinding system."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getDefaultKeyBinding")," maps known OS-level editor commands to ",Object(a.b)("inlineCode",{parentName:"p"},"DraftEditorCommand"),"\nstrings, which then correspond to behaviors within component handlers."),Object(a.b)("p",null,"For instance, ",Object(a.b)("inlineCode",{parentName:"p"},"Ctrl+Z")," (Win) and ",Object(a.b)("inlineCode",{parentName:"p"},"Cmd+Z")," (OSX) map to the ",Object(a.b)("inlineCode",{parentName:"p"},"'undo'")," command,\nwhich then routes our handler to perform an ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState.undo()"),"."),Object(a.b)("h2",{id:"customization"},"Customization"),Object(a.b)("p",null,"You may provide your own key binding function to supply custom command strings."),Object(a.b)("p",null,"It is recommended that your function use ",Object(a.b)("inlineCode",{parentName:"p"},"getDefaultKeyBinding")," as a\nfall-through case, so that your editor may benefit from default commands."),Object(a.b)("p",null,"With your custom command string, you may then implement the ",Object(a.b)("inlineCode",{parentName:"p"},"handleKeyCommand"),"\nprop function, which allows you to map that command string to your desired\nbehavior. If ",Object(a.b)("inlineCode",{parentName:"p"},"handleKeyCommand")," returns ",Object(a.b)("inlineCode",{parentName:"p"},"'handled'"),", the command is considered\nhandled. If it returns ",Object(a.b)("inlineCode",{parentName:"p"},"'not-handled'"),", the command will fall through."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,'Let\'s say we have an editor that should have a "Save" mechanism to periodically\nwrite your contents to the server as a draft copy.'),Object(a.b)("p",null,"First, let's define our key binding function:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"import {getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';\nconst {hasCommandModifier} = KeyBindingUtil;\n\nfunction myKeyBindingFn(e: SyntheticKeyboardEvent): string {\n  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {\n    return 'myeditor-save';\n  }\n  return getDefaultKeyBinding(e);\n}\n")),Object(a.b)("p",null,"Our function receives a key event, and we check whether it matches our criteria:\nit must be an ",Object(a.b)("inlineCode",{parentName:"p"},"S")," key, and it must have a command modifier, i.e. the command\nkey for OSX, or the control key otherwise."),Object(a.b)("p",null,"If the command is a match, return a string that names the command. Otherwise,\nfall through to the default key bindings."),Object(a.b)("p",null,"In our editor component, we can then make use of the command via the\n",Object(a.b)("inlineCode",{parentName:"p"},"handleKeyCommand")," prop:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"import {Editor} from 'draft-js';\nclass MyEditor extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.handleKeyCommand = this.handleKeyCommand.bind(this);\n  }\n  // ...\n\n  handleKeyCommand(command: string): DraftHandleValue {\n    if (command === 'myeditor-save') {\n      // Perform a request to save your contents, set\n      // a new `editorState`, etc.\n      return 'handled';\n    }\n    return 'not-handled';\n  }\n\n  render() {\n    return (\n      <Editor\n        editorState={this.state.editorState}\n        handleKeyCommand={this.handleKeyCommand}\n        keyBindingFn={myKeyBindingFn}\n        ...\n      />\n    );\n  }\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"'myeditor-save'")," command can be used for our custom behavior, and returning\n",Object(a.b)("inlineCode",{parentName:"p"},"'handled'")," instructs the editor that the command has been handled and no more work\nis required."),Object(a.b)("p",null,"By returning ",Object(a.b)("inlineCode",{parentName:"p"},"'not-handled'")," in all other cases, default commands are able to fall\nthrough to default handler behavior."))}c.isMDXComponent=!0}}]);