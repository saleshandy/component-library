(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters=(__webpack_require__("./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/design-system.scss"),{actions:{argTypesRegex:"^on.*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/design-system.scss":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&display=swap);"]),exports.push([module.i,'*{font-family:"Inter",sans-serif}.shd-button{font-weight:400;font-size:.875rem;line-height:1.5rem;border-radius:.25rem;border:none;background:#0137fc;color:#fff;padding:.5rem 1rem}.shd-drag-and-drop{width:100%;height:100%;position:relative}.shd-drag-and-drop--overlay{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:.5rem;border:.0625rem dashed #3b82f6;background:rgba(255,255,255,.96);display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem}.shd-drag-and-drop--title{font-weight:600;font-size:1rem;line-height:1.5rem;text-align:center;color:#1f2937;margin:0}.shd-drag-and-drop--text{font-weight:400;font-size:.875rem;line-height:1.25rem;text-align:center;color:#6b7280;margin:0}.shd-drag-and-drop--solid{background:#f9fafb}',""]),module.exports=exports},"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/design-system.scss":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/design-system.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/button.stories.tsx":"./src/stories/button.stories.tsx","./stories/drag-and-drop.stories.tsx":"./src/stories/drag-and-drop.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),blocks=__webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.b,{title:"Components/Introduction",mdxType:"Meta"}),Object(esm.b)(blocks.a,{mdxType:"Description"},'# Saleshandy Design System\n\n<br />\n\nA Design System is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product.\n\n<br />\n\n## 🚀 Setting up the project\n\n<br />\n\n1️⃣ &nbsp; Install required dependencies →\n\n```\nnpm install\n```\n\n2️⃣ &nbsp; Run the compiler in watch mode, it watches for changes and auto compiles the code →\n\n```\nnpm start\n```\n\n3️⃣ &nbsp; Run the Storybook preview, it opens up the preview in browser at http://localhost:6006 →\n\n```\nnpm run storybook\n```\n\n4️⃣ &nbsp; Create project build, it compiles and generates static code in `dist` folder with minified js and css for production →\n\n```\nnpm run build\n```\n\n5️⃣ &nbsp; Create storybook build, it compiles and generates static storybook preview for deployment in `storybook-static` folder →\n\n```\nnpm run build-storybook\n```\n\n<br />\n\n## ⭐ Steps to add component in design system\n\n<br />\n\n1️⃣ &nbsp; Create folder with component name <span style="color:grey;font-size:12px;"><i>(sample folder structure shown below)</i></span>\n\n2️⃣ &nbsp; Define the component `jsx`, filename will be `component-name.tsx`\n\n3️⃣ &nbsp; Add styling to the component by creating a file with name, `_component-name.scss` in the `assets/scss` directory and import it in `design-system.scss` file with a help comment <span style="color:grey;font-size:12px;"><i>(as shown below)</i></span>\n\n```scss\n// Component-Name Styles\n@import \'./scss/component-name\';\n```\n\n4️⃣ &nbsp; Create an `index.tsx` entry file for component export\n\n5️⃣ &nbsp; Write the documentaion by creating a story file in the `stories` folder, filename will be `component-name.stories.tsx`\n\n<br />\n\n#### 📁 Sample Component Folder Structure →\n\n```\n\n├── src\n│   ├── button                  → folder with component name\n|   │   ├── button.spec.tsx     → component unit test file\n|   │   ├── button.tsx          → component jsx file\n|   |   └── index.ts            → component export index\n|   │\n|   ├── assets\n|   |   ├── scss\n|   |   |   └── components\n|   |   |       └── _button.scss    → component styling file (optional)\n|   |   └── design.system.scss  → import component scss in this file\n|   |\n│   └── index.ts                → import component jsx in this file\n│\n└── stories\n    └── button.stories.tsx      → component documentation in storybook\n\n```\n\n<br />\n\n## 🔗 Conventional Commits Referrence Docs\n\n<br />\n\n[Read more about conventional commit here](https://karma-runner.github.io/6.3/dev/git-commit-msg.html)\n\n<br />\n\n---\n\n<p style="color:grey;font-size:12px;text-align:right">📄 End Of README.md</p>\n'))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Components/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./src/stories/button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),constants=__webpack_require__("./src/utils/constants.ts"),classname_modifiers=__webpack_require__("./src/utils/classname-modifiers.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","size","variant","isFullWidth","disabled","isLoading","children","iconIdentifier","iconPlacement"],Button=react_default.a.forwardRef((function(_ref,ref){var className=_ref.className,size=_ref.size,variant=_ref.variant,isFullWidth=_ref.isFullWidth,disabled=_ref.disabled,isLoading=_ref.isLoading,children=_ref.children,iconIdentifier=_ref.iconIdentifier,iconPlacement=_ref.iconPlacement,rest=objectWithoutProperties_default()(_ref,_excluded),componentClasses=classnames_default()(constants.a.Button,Object(classname_modifiers.a)(constants.a.Button,variant),Object(classname_modifiers.a)(constants.a.Button,size),Object(classname_modifiers.b)(constants.a.Button,"disabled",disabled||isLoading),Object(classname_modifiers.b)(constants.a.Button,"loading",isLoading),Object(classname_modifiers.b)(constants.a.Button,"fullwidth",isFullWidth),className);return Object(jsx_runtime.jsx)("button",Object.assign({ref:ref,className:componentClasses,disabled:disabled||isLoading,type:"button"},rest,{children:isLoading?Object(jsx_runtime.jsx)("span",{children:"Loading.."}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["left"===iconPlacement&&Object(jsx_runtime.jsxs)("span",{children:["Icon Left ",iconIdentifier]}),children,"right"===iconPlacement&&Object(jsx_runtime.jsxs)("span",{children:["Icon Right ",iconIdentifier]})]})}))}));Button.displayName="Button",Button.propTypes={children:prop_types_default.a.node,variant:prop_types_default.a.oneOf(["secondary","primary","danger"]),size:prop_types_default.a.oneOf(["small","medium","large"]),isFullWidth:prop_types_default.a.bool,isLoading:prop_types_default.a.bool,iconIdentifier:prop_types_default.a.string,iconPlacement:prop_types_default.a.oneOf(["left","right"])},Button.defaultProps={variant:"secondary",size:"medium",isFullWidth:!1,isLoading:!1,iconIdentifier:""};try{Button.displayName="Button",Button.__docgenInfo={description:"Buttons allow users to take actions, and make choices, with a single tap.\n\nButtons communicate actions that users can take. They are typically placed throughout your UI, in places like:\n<br /> - Modal windows\n<br /> - Forms\n<br /> - Cards\n<br /> - Toolbars",displayName:"Button",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},iconIdentifier:{defaultValue:{value:""},description:"",name:"iconIdentifier",required:!1,type:{name:"string"}},iconPlacement:{defaultValue:null,description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Button",component:Button};var button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button,Object.assign({},args,{children:"Default"}))};button_stories_Template.displayName="Template";var Default=button_stories_Template.bind({});Default.args={disabled:!1,variant:"primary",size:"medium",isFullWidth:!1,isLoading:!1},Default.parameters=Object.assign({storySource:{source:"(args) => (\n  <Button {...args}>Default</Button>\n)"}},Default.parameters)},"./src/stories/drag-and-drop.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SolidBackground",(function(){return SolidBackground})),__webpack_require__.d(__webpack_exports__,"BlurredBackground",(function(){return BlurredBackground}));var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),react=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),classnames=(__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),upload_UploadIcon=function UploadIcon(){return Object(jsx_runtime.jsxs)("svg",{width:"74",height:"74",viewBox:"0 0 74 74",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(jsx_runtime.jsx)("circle",{cx:"37",cy:"37",r:"37",fill:"#EFF6FF",fillOpacity:"0.5"}),Object(jsx_runtime.jsx)("circle",{cx:"37",cy:"37",r:"27",fill:"#EFF6FF"}),Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M38.4322 31.0292C37.8264 30.919 37.2018 30.9174 36.5953 31.0242C35.9888 31.1311 35.416 31.3438 34.9094 31.6465C33.8858 32.2581 33.2055 33.1902 32.9757 34.2143L32 33.9953V34.9953C31.0035 34.9953 30.0562 35.3744 29.3646 36.036C28.6744 36.6961 28.2954 37.5817 28.2954 38.4953C28.2954 39.4088 28.6744 40.2945 29.3646 40.9546C30.0562 41.6162 31.0035 41.9953 32 41.9953C32.5522 41.9953 33 42.443 33 42.9953C33 43.5476 32.5522 43.9953 32 43.9953C30.501 43.9953 29.055 43.4261 27.9821 42.3999C26.9077 41.3722 26.2954 39.9687 26.2954 38.4953C26.2954 37.0219 26.9077 35.6184 27.9821 34.5907C28.8726 33.7389 30.02 33.2021 31.2415 33.0441C31.7196 31.7578 32.6549 30.6637 33.8836 29.9296C34.6048 29.4987 35.4085 29.2026 36.2482 29.0546C37.0879 28.9066 37.9512 28.9089 38.79 29.0614C39.6288 29.214 40.4305 29.5144 41.149 29.9493C41.8677 30.3842 42.4911 30.9466 42.9795 31.6086C43.468 32.271 43.8111 33.0195 43.9836 33.8123C44.0687 34.2033 44.1112 34.6 44.1111 34.9967C45.2643 35.0251 46.3642 35.4956 47.1819 36.3133C48.0259 37.1572 48.5 38.3018 48.5 39.4953C48.5 40.6888 48.0259 41.8334 47.1819 42.6773C46.338 43.5212 45.1934 43.9953 44 43.9953H43C42.4477 43.9953 42 43.5476 42 42.9953C42 42.443 42.4477 41.9953 43 41.9953H44C44.663 41.9953 45.2989 41.7319 45.7677 41.2631C46.2366 40.7942 46.5 40.1583 46.5 39.4953C46.5 38.8323 46.2366 38.1964 45.7677 37.7275C45.2989 37.2587 44.663 36.9953 44 36.9953H43C42.6963 36.9953 42.409 36.8573 42.2192 36.6202C42.0295 36.3831 41.9577 36.0726 42.0242 35.7763C42.1383 35.2683 42.14 34.746 42.0294 34.2375C41.9187 33.7287 41.6965 33.2385 41.37 32.7958C41.0432 32.3529 40.6177 31.9655 40.1134 31.6603C39.609 31.355 39.0379 31.1393 38.4322 31.0292Z",fill:"#1D4ED8"}),Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.2929 36.2929C36.6834 35.9024 37.3166 35.9024 37.7071 36.2929L40.7071 39.2929C41.0976 39.6834 41.0976 40.3166 40.7071 40.7071C40.3166 41.0976 39.6834 41.0976 39.2929 40.7071L37 38.4142L34.7071 40.7071C34.3166 41.0976 33.6834 41.0976 33.2929 40.7071C32.9024 40.3166 32.9024 39.6834 33.2929 39.2929L36.2929 36.2929Z",fill:"#1D4ED8"}),Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37 36C37.5523 36 38 36.4477 38 37V46C38 46.5523 37.5523 47 37 47C36.4477 47 36 46.5523 36 46V37C36 36.4477 36.4477 36 37 36Z",fill:"#1D4ED8"})]})};upload_UploadIcon.displayName="UploadIcon";try{upload_UploadIcon.displayName="UploadIcon",upload_UploadIcon.__docgenInfo={description:"",displayName:"UploadIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/svgs/upload.tsx#UploadIcon"]={docgenInfo:upload_UploadIcon.__docgenInfo,name:"UploadIcon",path:"src/svgs/upload.tsx#UploadIcon"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/utils/constants.ts"),classname_modifiers=__webpack_require__("./src/utils/classname-modifiers.ts"),_excluded=["title","description","dragging","isHidden","setDragging","handleDroppedFiles","backgroundVariant","className","children"],DragAndDrop=react_default.a.forwardRef((function(_ref,ref){var title=_ref.title,description=_ref.description,dragging=_ref.dragging,isHidden=_ref.isHidden,setDragging=_ref.setDragging,handleDroppedFiles=_ref.handleDroppedFiles,backgroundVariant=_ref.backgroundVariant,className=_ref.className,children=_ref.children,rest=objectWithoutProperties_default()(_ref,_excluded),componentClasses=classnames_default()(constants.a.DragAndDrop,className),componentOverlayClasses=classnames_default()(Object(classname_modifiers.a)(constants.a.DragAndDrop,"overlay"),Object(classname_modifiers.a)(constants.a.DragAndDrop,backgroundVariant)),dragCounter=0,overrideEventDefaults=function overrideEventDefaults(event){event.preventDefault(),event.stopPropagation()};return Object(jsx_runtime.jsxs)("div",Object.assign({ref:ref,onDrag:overrideEventDefaults,onDragStart:overrideEventDefaults,onDragEnd:overrideEventDefaults,onDragOver:overrideEventDefaults,onDragEnter:function onDragEnter(event){overrideEventDefaults(event),0===dragCounter&&(dragCounter+=1),event.dataTransfer.items&&event.dataTransfer.items.length>0&&setDragging(!0)},onDragLeave:function onDragLeave(event){overrideEventDefaults(event),dragCounter>0?dragCounter-=1:0===dragCounter&&setDragging(!1)},onDrop:function onDrop(event){overrideEventDefaults(event),setDragging(!1);var files=event.dataTransfer.files;handleDroppedFiles(files),event.dataTransfer.clearData()},className:componentClasses},rest,{children:[children,!isHidden&&dragging&&Object(jsx_runtime.jsxs)("div",{className:componentOverlayClasses,children:[Object(jsx_runtime.jsx)("div",{className:constants.a.DragAndDrop+"--icon",children:Object(jsx_runtime.jsx)(upload_UploadIcon,{})}),Object(jsx_runtime.jsx)("h2",{className:constants.a.DragAndDrop+"--title",children:title}),description&&Object(jsx_runtime.jsx)("p",{className:constants.a.DragAndDrop+"--text",children:description})]})]}))}));DragAndDrop.displayName="DragAndDrop",DragAndDrop.propTypes={children:prop_types_default.a.node,dragging:prop_types_default.a.bool.isRequired,setDragging:prop_types_default.a.func.isRequired,handleDroppedFiles:prop_types_default.a.func.isRequired,isHidden:prop_types_default.a.bool,title:prop_types_default.a.string,description:prop_types_default.a.string,backgroundVariant:prop_types_default.a.oneOf(["solid","blurred"])},DragAndDrop.defaultProps={backgroundVariant:"blurred"};try{DragAndDrop.displayName="DragAndDrop",DragAndDrop.__docgenInfo={description:"",displayName:"DragAndDrop",props:{dragging:{defaultValue:null,description:"",name:"dragging",required:!0,type:{name:"boolean"}},setDragging:{defaultValue:null,description:"",name:"setDragging",required:!0,type:{name:"(isDragging: boolean) => void"}},handleDroppedFiles:{defaultValue:null,description:"",name:"handleDroppedFiles",required:!0,type:{name:"(files: FileList) => void"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},backgroundVariant:{defaultValue:{value:"blurred"},description:"",name:"backgroundVariant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"blurred"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/drag-and-drop/drag-and-drop.tsx#DragAndDrop"]={docgenInfo:DragAndDrop.__docgenInfo,name:"DragAndDrop",path:"src/components/drag-and-drop/drag-and-drop.tsx#DragAndDrop"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Drag And Drop",component:DragAndDrop};var drag_and_drop_stories_Template=function Template(args){var _useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),dragging=_useState2[0],setDragging=_useState2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{style:{color:"grey",fontSize:"14px"},children:"Note: -"}),Object(jsx_runtime.jsxs)("p",{style:{color:"grey",fontSize:"14px"},children:["1. Below is a children component wrapped in ",Object(jsx_runtime.jsx)("code",{children:"DragAndDrag"})," ","component."]}),Object(jsx_runtime.jsx)("p",{style:{color:"grey",fontSize:"14px"},children:"2. Styles applied to DragAndDrop wrapper here, is just for showing the component is storybook doc and will not required in actual code."}),Object(jsx_runtime.jsx)("p",{style:{color:"grey",fontSize:"14px",marginBottom:"2rem"},children:"3. You can check the dropped files in console log."}),Object(jsx_runtime.jsx)(DragAndDrop,Object.assign({},args,{dragging:dragging,setDragging:setDragging,handleDroppedFiles:function handleDroppedFiles(files){console.log("files",files)},title:"Drop to upload your files",description:"You can upload images, docs, sheets, presentations, videos and zip files",style:{width:"800px",height:"300px",backgroundColor:"#d4d4d4",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:"8px",padding:"20px",textAlign:"center",fontSize:"14px"},children:Object(jsx_runtime.jsx)("p",{children:"Drag and Drop your files here"})}))]})},SolidBackground=drag_and_drop_stories_Template.bind({});SolidBackground.args={backgroundVariant:"solid"};var BlurredBackground=drag_and_drop_stories_Template.bind({});BlurredBackground.args={backgroundVariant:"blurred"},SolidBackground.parameters=Object.assign({storySource:{source:"(args) => {\n  const [dragging, setDragging] = useState(false);\n\n  const handleDroppedFiles = (files: FileList) => {\n    console.log('files', files);\n  };\n\n  return (\n    <>\n      <p style={{ color: 'grey', fontSize: '14px' }}>Note: -</p>\n      <p style={{ color: 'grey', fontSize: '14px' }}>\n        1. Below is a children component wrapped in <code>DragAndDrag</code>{' '}\n        component.\n      </p>\n      <p style={{ color: 'grey', fontSize: '14px' }}>\n        2. Styles applied to DragAndDrop wrapper here, is just for showing the\n        component is storybook doc and will not required in actual code.\n      </p>\n      <p style={{ color: 'grey', fontSize: '14px', marginBottom: '2rem' }}>\n        3. You can check the dropped files in console log.\n      </p>\n\n      <DragAndDrop\n        {...args}\n        dragging={dragging}\n        setDragging={setDragging}\n        handleDroppedFiles={handleDroppedFiles}\n        title=\"Drop to upload your files\"\n        description=\"You can upload images, docs, sheets, presentations, videos and zip files\"\n        // styles is just for showing the component is storybook doc\n        // and will not required in actual code\n        style={{\n          width: '800px',\n          height: '300px',\n          backgroundColor: '#d4d4d4',\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          flexDirection: 'column',\n          borderRadius: '8px',\n          padding: '20px',\n          textAlign: 'center',\n          fontSize: '14px',\n        }}\n      >\n        <p>Drag and Drop your files here</p>\n      </DragAndDrop>\n    </>\n  );\n}"}},SolidBackground.parameters),BlurredBackground.parameters=Object.assign({storySource:{source:"(args) => {\n  const [dragging, setDragging] = useState(false);\n\n  const handleDroppedFiles = (files: FileList) => {\n    console.log('files', files);\n  };\n\n  return (\n    <>\n      <p style={{ color: 'grey', fontSize: '14px' }}>Note: -</p>\n      <p style={{ color: 'grey', fontSize: '14px' }}>\n        1. Below is a children component wrapped in <code>DragAndDrag</code>{' '}\n        component.\n      </p>\n      <p style={{ color: 'grey', fontSize: '14px' }}>\n        2. Styles applied to DragAndDrop wrapper here, is just for showing the\n        component is storybook doc and will not required in actual code.\n      </p>\n      <p style={{ color: 'grey', fontSize: '14px', marginBottom: '2rem' }}>\n        3. You can check the dropped files in console log.\n      </p>\n\n      <DragAndDrop\n        {...args}\n        dragging={dragging}\n        setDragging={setDragging}\n        handleDroppedFiles={handleDroppedFiles}\n        title=\"Drop to upload your files\"\n        description=\"You can upload images, docs, sheets, presentations, videos and zip files\"\n        // styles is just for showing the component is storybook doc\n        // and will not required in actual code\n        style={{\n          width: '800px',\n          height: '300px',\n          backgroundColor: '#d4d4d4',\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          flexDirection: 'column',\n          borderRadius: '8px',\n          padding: '20px',\n          textAlign: 'center',\n          fontSize: '14px',\n        }}\n      >\n        <p>Drag and Drop your files here</p>\n      </DragAndDrop>\n    </>\n  );\n}"}},BlurredBackground.parameters)},"./src/utils/classname-modifiers.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getClassNameByModifier})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassNameByModifierBasedOnFlag}));var getClassNameByModifier=function getClassNameByModifier(base,modifier){return modifier?base+"--"+modifier:""},getClassNameByModifierBasedOnFlag=function getClassNameByModifierBasedOnFlag(base,modifier,flag){return flag?base+"--"+modifier:""}},"./src/utils/constants.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ComponentClassNames}));__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js");var ComponentClassNames={Button:"button",DragAndDrop:"drag-and-drop"};Object.keys(ComponentClassNames).forEach((function(component){ComponentClassNames[component]="shd-"+ComponentClassNames[component]}))},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);