webpackJsonp([49593498941915],{285:function(n,a){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Create",doc:2,section:2,type:"doc"},fields:{slug:"/create"}}},{node:{frontmatter:{title:"Express",doc:3,section:3,type:"doc"},fields:{slug:"/express"}}},{node:{frontmatter:{title:"Extensibility",doc:4,section:1,type:"doc"},fields:{slug:"/extensibility"}}},{node:{frontmatter:{title:"FAQ",doc:5,section:1,type:"doc"},fields:{slug:"/faq"}}},{node:{frontmatter:{title:"Generators",doc:3,section:1,type:"doc"},fields:{slug:"/generators"}}},{node:{frontmatter:{title:"Quick Start",doc:1,section:1,type:"doc"},fields:{slug:"/quick-start"}}},{node:{frontmatter:{title:"Packages",doc:1,section:2,type:"doc"},fields:{slug:"/packages"}}},{node:{frontmatter:{title:"React Native",doc:2,section:3,type:"doc"},fields:{slug:"/react-native"}}},{node:{frontmatter:{title:"Redux",doc:1,section:3,type:"doc"},fields:{slug:"/redux"}}},{node:{frontmatter:{title:"Standalone",doc:2,section:2,type:"doc"},fields:{slug:"/standalone"}}},{node:{frontmatter:{title:"Templates",doc:2,section:1,type:"doc"},fields:{slug:"/templates"}}}]},postBySlug:{html:'<p>A <code>hygen</code> template is a header of a markdown-like frontmatter and a body of an ejs templating engine.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>                            &lt;<span class="token punctuation">---</span><span class="token punctuation">-</span><span class="token punctuation">-</span> frontmatter section\n<span class="token key atrule">to</span><span class="token punctuation">:</span> app/emails/&lt;%= name %<span class="token punctuation">></span>.html\n<span class="token punctuation">---</span>\n\nHello &lt;%= name %<span class="token punctuation">></span><span class="token punctuation">,</span>\n&lt;%= message %<span class="token punctuation">></span>                 &lt;<span class="token punctuation">---</span><span class="token punctuation">-</span><span class="token punctuation">-</span> body<span class="token punctuation">,</span> ejs\n(version &lt;%= version %<span class="token punctuation">></span>)\n</code></pre>\n      </div>\n<h2 id="frontmatter"><a href="#frontmatter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Frontmatter</h2>\n<p>The frontmatter is delimited by a matching <code>---</code> top and bottom with <code>yaml</code> in it, where we define the template metadata.</p>\n<p>Templates are also rendered, so if we have this in the file <code>_templates/mailer/campaign/emails.ejs.t</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="gatsby-highlight-code-line"><span class="token punctuation">---</span>\n</span><span class="token key atrule">to</span><span class="token punctuation">:</span> app/&lt;%=section%<span class="token punctuation">></span>/emails.js\n<span class="token key atrule">foo</span><span class="token punctuation">:</span> &lt;%= bar %<span class="token punctuation">></span>\n<span class="gatsby-highlight-code-line"><span class="token punctuation">---</span>\n</span></code></pre>\n      </div>\n<p>And this command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ hygen mailer campaign --section weekend --bar ping</code></pre>\n      </div>\n<p>It builds this frontmatter, behind the scenes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> app/weekend/emails.js\n<span class="token key atrule">foo</span><span class="token punctuation">:</span> ping\n<span class="token punctuation">---</span>\n</code></pre>\n      </div>\n<div class="custom-block-info"><h6 id="frontmatter-cleans-up-our-act"><a href="#frontmatter-cleans-up-our-act" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Frontmatter cleans up our act</h6><p>While other generator engines use the file names, folder structure, or arbitrary configuration files to store metadata, <code>hygen</code> uses the frontmatter.</p><p>This makes templating and generators clean and maintainable and meta data lives directly in the template it refers to.</p></div>\n<h2 id="template-body"><a href="#template-body" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Template Body</h2>\n<p>Let\'s recall how a template looks like. Templates bodies are <a href="https://github.com/tj/ejs">ejs</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>\nto<span class="token punctuation">:</span> app<span class="token operator">/</span>workers<span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">%=</span>name<span class="token operator">%</span><span class="token operator">></span><span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">-</span>\n\n<span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> Name <span class="token operator">%</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// your code here!</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In <code>hygen</code>, the variable <code>name</code> is blessed, because you can get a capitalized version of it for free, by saying <code>Name</code>. There will be a growing list of variables that are special, where you get \'free\' version of them to save some time, but currently it\'s only that one.</p>\n<p>If we wanted to capitalize some other variable then we could do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>\nto<span class="token punctuation">:</span> app<span class="token operator">/</span>workers<span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">%=</span>name<span class="token operator">%</span><span class="token operator">></span><span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">-</span>\n<span class="gatsby-highlight-code-line"><span class="token operator">&lt;</span><span class="token operator">%</span>\n</span><span class="gatsby-highlight-code-line"> Message <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</span><span class="gatsby-highlight-code-line"><span class="token operator">%</span><span class="token operator">></span>\n</span>\n<span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> Name <span class="token operator">%</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"&lt;%= Message %>"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="helpers-and-inflections"><a href="#helpers-and-inflections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Helpers and Inflections</h2>\n<p>You can also use the built-in helpers by accessing <code>h</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> Name <span class="token operator">%</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">        <span class="token keyword">return</span> <span class="token string">"&lt;%= h.capitalize(message) %>"</span>\n</span>    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The special helper object <code>h</code> also hosts <em>inflections</em>. With these you can pluralize, singularize and more:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// example: <%= h.inflection.pluralize(name) %>\n\npluralize( str, plural )\nsingularize( str, singular )\ninflect( str, count, singular, plural )\ncamelize( str, low_first_letter )\nunderscore( str, all_upper_case )\nhumanize( str, low_first_letter )\ncapitalize( str )\ndasherize( str )\ntitleize( str )\ndemodulize( str )\ntableize( str )\nclassify( str )\nforeign_key( str, drop_id_ubar )\nordinalize( str )\ntransform( str, arr )</code></pre>\n      </div>\n<p>You can see the full list <a href="https://github.com/dreamerslab/node.inflection">here</a>. With time, we\'ll add more utilities onto <code>h</code>.</p>\n<h2 id="change-case-helpers"><a href="#change-case-helpers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Change case helpers</h2>\n<p><code>hygen</code> provides ability to semantic case changing with <code>change-case</code> library, it\'s simple to use and very easy to understand:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// example: &lt;%= h.changeCase.camel(name) %></span>\n\n<span class="token function">camel</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">constant</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">dot</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">header</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">isLower</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">isUpper</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">lower</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">lcFirst</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">no</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">param</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">pascal</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">path</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">sentence</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">snake</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">swap</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">title</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n<span class="token function">upper</span><span class="token punctuation">(</span> str <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>There is a usecase for react based components generation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> components/&lt;%= name %<span class="token punctuation">></span>/index.jsx\n<span class="token punctuation">---</span>\nimport React from \'react\'\n\nexport const &lt;%= name %<span class="token punctuation">></span> = (<span class="token punctuation">{</span> children <span class="token punctuation">}</span>) =<span class="token punctuation">></span> (\n  &lt;div className="&lt;%= h.changeCase.paramCase(name) %<span class="token punctuation">></span>"<span class="token punctuation">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span>&lt;/div<span class="token punctuation">></span>"\n)\n</code></pre>\n      </div>\n<p>With name <code>HelloWorld</code> will be compiled to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">HelloWorld</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"hello-world"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>"\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>You can see the full list <a href="https://github.com/blakeembrey/change-case">here</a>.</p>\n<h2 id="local-variables"><a href="#local-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Local Variables</h2>\n<p>As we saw earlier, any CLI argument or prompt parameter automatically becomes a local variable in your templates.</p>\n<p>There are two ways to refer to variables:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Hello <span class="token operator">&lt;</span><span class="token operator">%=</span> message <span class="token operator">%</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>This way refers to the <code>message</code> CLI argument or prompt parameter, in its bare form. This also means this parameter cannot be optional (otherwise a reference error is thrown).</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Hello <span class="token operator">&lt;</span><span class="token operator">%=</span> locals<span class="token punctuation">.</span>message <span class="token operator">%</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>This way refers to the <code>message</code> CLI argument or prompt parameter, through the <code>locals</code> object. This is great if you want to check a variable for existance before using it like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token keyword">if</span><span class="token punctuation">(</span>locals<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token operator">-</span><span class="token operator">%</span><span class="token operator">></span>\n    message<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> message <span class="token operator">%</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span> <span class="token operator">-</span><span class="token operator">%</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>There\'s a small gem here, in the form of <code>-%></code>. This will slurp the last newline, so that the <code>if(..){</code> clause won\'t generate garbage newlines into our final output.</p>\n<p>For more of how <code>EJS</code> works <a href="https://github.com/mde/ejs">take a look here</a>.</p>\n<h2 id="predefined-variables"><a href="#predefined-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Predefined Variables</h2>\n<p>If you look at the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>hygen component new:story</code></pre>\n      </div>\n<p><code>hygen</code> will break it up for you and place certain values in special variables that are automatically available in your templates:</p>\n<table>\n<thead>\n<tr>\n<th>Variable</th>\n<th>Content</th>\n<th>Example</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>templates</code></td>\n<td>Templates path (absolute)</td>\n<td>/User/.../project/\n_\ntemplates</td>\n</tr>\n<tr>\n<td><code>actionfolder</code></td>\n<td>Action path</td>\n<td>/.../component/new</td>\n</tr>\n<tr>\n<td><code>generator</code></td>\n<td>Generator name</td>\n<td><code>component</code></td>\n</tr>\n<tr>\n<td><code>action</code></td>\n<td>Action name</td>\n<td><code>new</code></td>\n</tr>\n<tr>\n<td><code>subaction</code></td>\n<td>Sub-action name</td>\n<td><code>story</code></td>\n</tr>\n<tr>\n<td><code>cwd</code></td>\n<td>Process working directory</td>\n<td>/User/.../project</td>\n</tr>\n</tbody>\n</table>\n<p>For example to use <code>actionfolder</code> say:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">%=</span> actionfolder <span class="token operator">%</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="addition"><a href="#addition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Addition</h2>\n<p>By default templates are \'added\' to your project as a new target file. By specifying a <code>to:</code> frontmatter property, we\'re telling <code>hygen</code> where to put it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> app/index.js\n<span class="token punctuation">---</span>\nconsole.log(\'this is index<span class="token tag">!\')</span>\n</code></pre>\n      </div>\n<p>If a target file already exists, and you don\'t want to overwrite it, you can use <code>unless_exists</code> (here\'s the <a href="https://github.com/jondot/hygen/pull/27">pull request</a> for more).</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> app/index.js\n<span class="token key atrule">unless_exists</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token punctuation">---</span>\nwill not render if target exists\n</code></pre>\n      </div>\n<h2 id="injection"><a href="#injection" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Injection</h2>\n<p>You can also choose to inject a template <em>into</em> an existing target file.</p>\n<p>For this to work, you need to use <code>inject: true</code> with the accompanied inject-specific props.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="gatsby-highlight-code-line"><span class="token key atrule">inject</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</span><span class="token key atrule">to</span><span class="token punctuation">:</span> package.json\n<span class="token key atrule">after</span><span class="token punctuation">:</span> dependencies\n<span class="token key atrule">skip_if</span><span class="token punctuation">:</span> react<span class="token punctuation">-</span>native<span class="token punctuation">-</span>fs\n<span class="token punctuation">---</span>\n"react<span class="token punctuation">-</span>native<span class="token punctuation">-</span>fs"<span class="token punctuation">:</span><span class="token string">"*"</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>The new props to notice here are <code>after</code> and <code>skip_if</code>. This template will add the <code>react-native-fs</code> dependency into a <code>package.json</code> file, but it will not add it twice (because of <code>skip_if</code>).</p>\n<div class="custom-block-info"><h6 id="regular-expressions-everywhere-promote-flexibility"><a href="#regular-expressions-everywhere-promote-flexibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Regular expressions everywhere promote flexibility</h6><p>In <code>after: dependencies</code>, \'dependencies\' is actually a regular expression, so it\'ll find the <code>"dependencies":{</code> block in a <code>package.json</code> file</p></div>\n<p>Here are the available properties for an <code>inject: true</code> template:</p>\n<ul>\n<li><code>before</code> or <code>after</code> which contain a regular expression of text to locate. The inject line will appear <code>before</code> or <code>after</code> the located line.</li>\n<li><code>prepend</code> or <code>append</code>, when true, add a line to start or end of file respectively.</li>\n<li><code>at_line</code> which contains a line number will add a line at this exact line number.</li>\n</ul>\n<p>In almost all cases you want to ensure you\'re not injecting content twice:</p>\n<ul>\n<li><code>skip_if</code> which contains a regular expression / text. If exists, injection is skipped.</li>\n</ul>\n<p>Let\'s see how these play out in the <a href="/redux">Redux</a> use case.</p>\n<h2 id="shell"><a href="#shell" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shell</h2>\n<p>Shell actions give you the ability to trigger any shell commands. You can do things such as:</p>\n<ul>\n<li>Copy a resource or an asset from a template into a target folder</li>\n<li>Pipe the output of a template into a shell command</li>\n<li>Perform any other side-effect - touch files, restart processes, trigger a <code>yarn install</code> or what have you.</li>\n</ul>\n<p>Here\'s how to pipe a generator\'s output into a shell command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">sh</span><span class="token punctuation">:</span> <span class="token string">"mkdir -p &lt;%= cwd %>/given/app/shell &amp;&amp; cat > &lt;%= cwd %>/given/app/shell/hello.piped"</span>\n<span class="token punctuation">---</span>\nhello<span class="token punctuation">,</span> this was piped!\n</code></pre>\n      </div>\n<p>Using just the <code>sh:</code> property, <code>hygen</code> will understand this is a shell action. Note that you have the <code>cwd</code> variable pre-available to you to indicate the current working directory.</p>\n<p>This generator will <em>pipe</em> its output into the shell command, so you can assume it happens - note that <code>cat</code> is expecting someone to give it <code>STDIN</code>.</p>\n<p>Some times you want to run a generator and just invoke an additional command. This means the shell action can be added to what ever action you wanted to perform (inject or addition).</p>\n<p>Here\'s a common task: add a dependency and then run <code>yarn install</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">inject</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> package.json\n<span class="token key atrule">after</span><span class="token punctuation">:</span> dependencies\n<span class="token key atrule">skip_if</span><span class="token punctuation">:</span> lodash\n<span class="token key atrule">sh</span><span class="token punctuation">:</span> cd &lt;%= cwd %<span class="token punctuation">></span> &amp;&amp; yarn install\n<span class="token punctuation">---</span>\n"lodash"<span class="token punctuation">:</span><span class="token string">"*"</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<h2 id="conditional-rendering"><a href="#conditional-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conditional Rendering</h2>\n<p>If you\'d like to render a certain template based on the value of a variable, then you can do something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">"&lt;%= message ? \'where/to/render\' : null %>"</span>\n<span class="token punctuation">---</span>\nconditionally rendering template\n</code></pre>\n      </div>\n<p>When <code>hygen</code> meets a <code>to:</code> value that is <code>null</code>, it will skip the output of that template, meaning it won\'t get rendered at all.</p>\n<p>Next up, we\'ll move on to <a href="/generators">generators</a>.</p>',timeToRead:7,excerpt:"A  hygen  template is a header of a markdown-like frontmatter and a body of an ejs templating engine. Frontmatter The frontmatter is…",frontmatter:{title:"Templates"},fields:{slug:"/templates"}}},pathContext:{slug:"/templates"}}}});
//# sourceMappingURL=path---templates-850a81352bcd8c23f703.js.map