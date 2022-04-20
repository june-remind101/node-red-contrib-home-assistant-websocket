import{h as t,o as p,c as o,a as s,e,F as u,i as n,g as c}from"./app.3837ac65.js";import{_ as r}from"./first-automation_05.5953de36.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var k="/node-red-contrib-home-assistant-websocket/assets/sun-events_01.f1eb3e5b.png",q="/node-red-contrib-home-assistant-websocket/assets/sun-events_02.13a05f42.png";const i={},y=n('<h1 id="turn-light-on-off-with-sunset-sunrise" tabindex="-1"><a class="header-anchor" href="#turn-light-on-off-with-sunset-sunrise" aria-hidden="true">#</a> Turn Light On/Off with Sunset/Sunrise</h1><h2 id="option-1" tabindex="-1"><a class="header-anchor" href="#option-1" aria-hidden="true">#</a> Option 1</h2><p><img src="'+r+`" alt="screenshot"></p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;b74ada49.d7e408&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;server-state-changed&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;exposeToHomeAssistant&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;haConfig&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfilter&quot;</span><span class="token operator">:</span><span class="token string">&quot;sun.sun&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfiltertype&quot;</span><span class="token operator">:</span><span class="token string">&quot;exact&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputinitially&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;state_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;haltifstate&quot;</span><span class="token operator">:</span><span class="token string">&quot;above_horizon&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_compare&quot;</span><span class="token operator">:</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token property">&quot;output_only_on_state_change&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">244</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">784</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;1f467cbb.0c3983&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;da5ff3e0.cbb2a&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;1f467cbb.0c3983&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;api-call-service&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;debugenabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;service_domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_off&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;light.front_porch&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mergecontext&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mustacheAltTags&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">474</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">784</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;da5ff3e0.cbb2a&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;api-call-service&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;debugenabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;service_domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;light.front_porch&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mergecontext&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mustacheAltTags&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">474</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">832</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="option-2" tabindex="-1"><a class="header-anchor" href="#option-2" aria-hidden="true">#</a> Option 2</h2><p><img src="`+k+`" alt="screenshot"></p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;74a64f80.d2302&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;server-state-changed&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;exposeToHomeAssistant&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;haConfig&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfilter&quot;</span><span class="token operator">:</span><span class="token string">&quot;sun.sun&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityidfiltertype&quot;</span><span class="token operator">:</span><span class="token string">&quot;exact&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputinitially&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;state_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;haltifstate&quot;</span><span class="token operator">:</span><span class="token string">&quot;above_horizon&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;halt_if_compare&quot;</span><span class="token operator">:</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token property">&quot;output_only_on_state_change&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">404</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">832</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;ccb2f059.1d384&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;4a84490d.9930a8&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;ccb2f059.1d384&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;api-call-service&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;debugenabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;service_domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_off&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;light.front_porch&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mergecontext&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mustacheAltTags&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">794</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">832</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;4a84490d.9930a8&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;rules&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;t&quot;</span><span class="token operator">:</span><span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;p&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;pt&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;to&quot;</span><span class="token operator">:</span><span class="token string">&quot;{\\&quot;service\\&quot;: \\&quot;turn_on\\&quot;}&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;tot&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;action&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;property&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;from&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;to&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;reg&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">604</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">880</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;ccb2f059.1d384&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="option-3" tabindex="-1"><a class="header-anchor" href="#option-3" aria-hidden="true">#</a> Option 3</h2><p><strong>Required Nodes</strong></p>`,9),g={href:"https://flows.nodered.org/node/node-red-contrib-eztimer",target:"_blank",rel:"noopener noreferrer"},d=c("node-red-contrib-eztimer"),f=n('<p><img src="'+q+`" alt="screenshot"></p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;ccb2f059.1d384&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;api-call-service&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;debugenabled&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;service_domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token string">&quot;{{payload}}&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;entityId&quot;</span><span class="token operator">:</span><span class="token string">&quot;light.front_porch&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mergecontext&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;output_location_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;mustacheAltTags&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">644</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">832</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;1a6cb307.d3168d&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;eztimer&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;ffbd7f06.4a014&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;autoname&quot;</span><span class="token operator">:</span><span class="token string">&quot;sunset - sunrise&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;tag&quot;</span><span class="token operator">:</span><span class="token string">&quot;eztimer&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;suspended&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;sendEventsOnSuspend&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;timerType&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;startupMessage&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;ontype&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ontimesun&quot;</span><span class="token operator">:</span><span class="token string">&quot;sunset&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ontimetod&quot;</span><span class="token operator">:</span><span class="token string">&quot;17:00&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;onproperty&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;onvaluetype&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;onvalue&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_on&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;onoffset&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;onrandomoffset&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;onsuppressrepeats&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;offtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;offtimesun&quot;</span><span class="token operator">:</span><span class="token string">&quot;sunrise&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;offtimetod&quot;</span><span class="token operator">:</span><span class="token string">&quot;dusk&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;offduration&quot;</span><span class="token operator">:</span><span class="token string">&quot;00:01:00&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;offproperty&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;offvaluetype&quot;</span><span class="token operator">:</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;offvalue&quot;</span><span class="token operator">:</span><span class="token string">&quot;turn_off&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;offoffset&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;offrandomoffset&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;offsuppressrepeats&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;mon&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;tue&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;wed&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;thu&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;fri&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;sat&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;sun&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">288</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">832</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;ccb2f059.1d384&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div>`,2);function b(m,h){const a=t("ExternalLinkIcon");return p(),o(u,null,[y,s("ul",null,[s("li",null,[s("a",g,[d,e(a)])])]),f],64)}var w=l(i,[["render",b]]);export{w as default};
