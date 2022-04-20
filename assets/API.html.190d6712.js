import{h as r,o as d,c as n,a as e,e as o,F as l,g as t,i as s}from"./app.3837ac65.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const h={},p=e("h1",{id:"api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),t(" API")],-1),u=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),t(" Config")],-1),_={id:"protocol",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#protocol","aria-hidden":"true"},"#",-1),m=t(" Protocol "),g=s('<ul><li>Type: <code>string</code></li><li>Values: <code>websocket|http</code></li><li>Default: <code>websocket</code></li></ul><p>Protocol to use to access Home Assistant API.</p><h3 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> Method</h3><ul><li>Type: <code>string</code></li><li>Values: <code>get|post</code></li></ul><p>Type of method to use to access the HTTP endpoint.</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h3>',6),b=e("li",null,[t("Type: "),e("code",null,"string")],-1),y=t("Accepts "),x={href:"/guide/mustache-templates.md",target:"_blank",rel:"noopener noreferrer"},T=t("Mustache Templates"),k=e("p",null,"URL of the API endpoint.",-1),O=e("h3",{id:"params",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#params","aria-hidden":"true"},"#"),t(" Params")],-1),v=e("li",null,[t("Type: "),e("code",null,"Object")],-1),A=t("Accepts "),P={href:"/guide/mustache-templates.md",target:"_blank",rel:"noopener noreferrer"},V=t("Mustache Templates"),w=e("p",null,"A JSON object with key/value pairs that will be converted into URL parameters.",-1),I=e("h3",{id:"data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data","aria-hidden":"true"},"#"),t(" Data")],-1),N=e("li",null,[t("Type: "),e("code",null,"Object")],-1),j=t("Accepts "),B={href:"/guide/mustache-templates.md",target:"_blank",rel:"noopener noreferrer"},L=t("Mustache Templates"),S=t(" when the data type is JSON"),M=s('<p>JSON Object to send for WebSocket requests and HTTP posts.</p><h3 id="results" tabindex="-1"><a class="header-anchor" href="#results" aria-hidden="true">#</a> Results</h3><ul><li><p>Type: <code>string</code></p><p>Location to save the API results.</p></li></ul><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>All properties need to be under <code>msg.payload</code>.</p><h3 id="protocol-1" tabindex="-1"><a class="header-anchor" href="#protocol-1" aria-hidden="true">#</a> protocol</h3><ul><li>Type: <code>string</code></li><li>Values: <code>websocket|http</code></li></ul><p>Overrides or sets the protocol property of the config.</p><h3 id="method-1" tabindex="-1"><a class="header-anchor" href="#method-1" aria-hidden="true">#</a> method</h3><ul><li>Type: <code>string</code></li><li>Values: <code>get|post</code></li></ul><p>Overrides or sets the method property of the config.</p><h3 id="path-1" tabindex="-1"><a class="header-anchor" href="#path-1" aria-hidden="true">#</a> path</h3><ul><li>Type: <code>string</code></li></ul><p>Overrides or sets the path property of the config.</p><h3 id="data-1" tabindex="-1"><a class="header-anchor" href="#data-1" aria-hidden="true">#</a> data</h3><ul><li>Type: <code>Object|string</code></li></ul><p>Overrides or sets the data/params property of the config.</p><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h3><ul><li>Type: <code>string</code></li></ul><p>Overrides or sets the results property of the config.</p><h3 id="locationtype" tabindex="-1"><a class="header-anchor" href="#locationtype" aria-hidden="true">#</a> locationType</h3><ul><li>Type: <code>string</code></li><li>Values: <code>msg|flow|global</code></li></ul><p>Overrides or sets the results type property of the config.</p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>Value types:</p><ul><li><code>results</code>: results of the API request</li><li><code>config</code>: config properties of the node</li></ul><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>',27),R={href:"https://developers.home-assistant.io/docs/api/rest",target:"_blank",rel:"noopener noreferrer"},q=t("http api"),E={href:"https://developers.home-assistant.io/docs/api/websocket",target:"_blank",rel:"noopener noreferrer"},H=t("websocket api");function J(C,D){const i=r("Badge"),a=r("ExternalLinkIcon");return d(),n(l,null,[p,u,e("h3",_,[f,m,o(i,{text:"required"})]),g,e("ul",null,[b,e("li",null,[y,e("a",x,[T,o(a)])])]),k,O,e("ul",null,[v,e("li",null,[A,e("a",P,[V,o(a)])])]),w,I,e("ul",null,[N,e("li",null,[j,e("a",B,[L,o(a)]),S])]),M,e("ul",null,[e("li",null,[e("a",R,[q,o(a)])]),e("li",null,[e("a",E,[H,o(a)])])])],64)}var W=c(h,[["render",J]]);export{W as default};
