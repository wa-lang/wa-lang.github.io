import{_ as e,c as l,o as t,a as s}from"./app.c203884c.js";const a="/st0014-a.jpg",n="/st0014-b.jpg",r="/st0014-c.jpg",d="/st0014-e.png",o="/st0014-f.png",i="/st0014-g.png",w=JSON.parse('{"title":"凹语言点亮 AVR 单片机","description":"","frontmatter":{},"headers":[{"level":3,"title":"安装凹语言","slug":"安装凹语言","link":"#安装凹语言","children":[]},{"level":3,"title":"安装 Arduino 开发环境","slug":"安装-arduino-开发环境","link":"#安装-arduino-开发环境","children":[]},{"level":3,"title":"安装 LLVM","slug":"安装-llvm","link":"#安装-llvm","children":[]},{"level":3,"title":"添加路径","slug":"添加路径","link":"#添加路径","children":[]},{"level":3,"title":"硬件信息","slug":"硬件信息","link":"#硬件信息","children":[]},{"level":3,"title":"接线方式","slug":"接线方式","link":"#接线方式","children":[]}],"relativePath":"smalltalk/st0014.md"}'),p={name:"smalltalk/st0014.md"},c=s('<h1 id="凹语言点亮-avr-单片机" tabindex="-1">凹语言点亮 AVR 单片机 <a class="header-anchor" href="#凹语言点亮-avr-单片机" aria-hidden="true">#</a></h1><ul><li>时间：2022-11-24</li><li>撰稿：史斌@凹语言</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0014.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0014.html</a></li></ul><p>目前凹语言已经成功运行在 Arduino 单片机平台上，下面是运行效果，一个四位计数器。</p><p><img src="'+a+`" alt="alt 0"></p><p>感兴趣的同学，可以参照我提供的步骤，来体验一下。</p><hr><h1 id="安装开发环境" tabindex="-1">安装开发环境 <a class="header-anchor" href="#安装开发环境" aria-hidden="true">#</a></h1><h3 id="安装凹语言" tabindex="-1">安装凹语言 <a class="header-anchor" href="#安装凹语言" aria-hidden="true">#</a></h3><p>推荐手动下载编译最新的版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">cd $HOME</span></span>
<span class="line"><span style="color:#d8dee9ff;">git clone https://gitee.com/wa-lang/wa.git</span></span>
<span class="line"><span style="color:#d8dee9ff;">cd wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">go build</span></span>
<span class="line"><span style="color:#d8dee9ff;">export PATH=$HOME/wa:$PATH</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h3 id="安装-arduino-开发环境" tabindex="-1">安装 Arduino 开发环境 <a class="header-anchor" href="#安装-arduino-开发环境" aria-hidden="true">#</a></h3><ul><li><a href="https://downloads.arduino.cc/arduino-1.8.19-windows.exe" target="_blank" rel="noreferrer">Windows 下载</a></li><li><a href="https://downloads.arduino.cc/arduino-1.8.19-macosx.zip" target="_blank" rel="noreferrer">MacOS 下载</a></li><li><a href="https://downloads.arduino.cc/arduino-1.8.19-linux64.tar.xz" target="_blank" rel="noreferrer">Linux 下载</a></li></ul><h3 id="安装-llvm" tabindex="-1">安装 LLVM <a class="header-anchor" href="#安装-llvm" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/llvm/llvm-project/releases/download/llvmorg-14.0.6/LLVM-14.0.6-win64.exe" target="_blank" rel="noreferrer">Windows 下载</a></li><li><a href="https://github.com/llvm/llvm-project/releases/download/llvmorg-14.0.6/clang+llvm-14.0.6-x86_64-apple-darwin.tar.xz" target="_blank" rel="noreferrer">MacOS 下载</a></li><li>Linux 安装方式</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">apt-get install llvm clang -y</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h3 id="添加路径" tabindex="-1">添加路径 <a class="header-anchor" href="#添加路径" aria-hidden="true">#</a></h3><p>安装完成后，需要把 LLVM 包里的 bin 目录，加入 PATH 环境变量。在 Linux 和 MacOS 上按照如下方式操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">export LLVM_PATH=...</span></span>
<span class="line"><span style="color:#d8dee9ff;">export PATH=$LLVM_PATH/bin:$PATH</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>Windows 上可以在 PowerShell 里添加，或者修改系统设置。</p><hr><h1 id="购买硬件和安装硬件" tabindex="-1">购买硬件和安装硬件 <a class="header-anchor" href="#购买硬件和安装硬件" aria-hidden="true">#</a></h1><h3 id="硬件信息" tabindex="-1">硬件信息 <a class="header-anchor" href="#硬件信息" aria-hidden="true">#</a></h3><ul><li><p>Arduino Uno 开发板</p><p><a href="https://detail.tmall.com/item.htm?spm=a230r.1.14.27.820a6558z3MTpC&amp;id=680267988615&amp;ns=1&amp;abbucket=13&amp;skuId=5049455218939" target="_blank" rel="noreferrer">arduino nano uno开发板套件 r3主板改进版ATmega328P 单片机模块-tmall.com天猫</a></p></li><li><p>四段数码管模块</p><p><a href="https://detail.tmall.com/item.htm?_u=j2lbgljge8f5&amp;id=621236815267" target="_blank" rel="noreferrer">0.4寸 四位数码管显示模块 74HC595驱动 4位数码管 兼容Arduino-tmall.com天猫</a></p></li></ul><h3 id="接线方式" tabindex="-1">接线方式 <a class="header-anchor" href="#接线方式" aria-hidden="true">#</a></h3><table><thead><tr><th>Arduino 板</th><th>数码管小板</th><th>颜色</th></tr></thead><tbody><tr><td>5V</td><td>VCC</td><td>绿</td></tr><tr><td>2</td><td>SCLK</td><td>黄</td></tr><tr><td>1</td><td>RCLK</td><td>橙</td></tr><tr><td>0</td><td>DIO</td><td>红</td></tr><tr><td>GND</td><td>GND</td><td>棕</td></tr></tbody></table><p><img src="`+a+'" alt="alt 1"><img src="'+n+'" alt="alt 2"><img src="'+r+`" alt="alt 3"></p><hr><h1 id="编译运行-demo-程序" tabindex="-1">编译运行 Demo 程序 <a class="header-anchor" href="#编译运行-demo-程序" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"># 需要预先安装 WA 和 LLVM，按照本文前面的操作指导进行。</span></span>
<span class="line"><span style="color:#d8dee9ff;">cd $HOME</span></span>
<span class="line"><span style="color:#d8dee9ff;">git clone https://gitee.com/wa-lang/wa-arduino.git</span></span>
<span class="line"><span style="color:#d8dee9ff;">cd $HOME/wa-arduino/4-digit_led/demo_wa/</span></span>
<span class="line"><span style="color:#d8dee9ff;">wa native --target=avr demo.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>将会在 <code>demo_wa/</code> 目录下生成一个子目录 <code>demo/</code>，里面包含了编译生成的 Arduino 工程。用 Arduino IDE 打开 <code>demo_wa/demo/demo.ino</code>，选择 Arduino Uno 开发板以及对应的 COM 端口，即可运行，看到四位数码管计数的效果。</p><p><img src="`+d+'" alt="alt 4"></p><hr><h1 id="编译流程" tabindex="-1">编译流程 <a class="header-anchor" href="#编译流程" aria-hidden="true">#</a></h1><p>wa source ---&gt; LLVM IR ---&gt; AVR assembly.</p><p>Arduino 开发板环境需要 Arduino 的 runtime 库才能正常运行，因此输出的是 Arduino 工程。包含一个简短的包装文件 <code>demo.ino</code>。</p><p><img src="'+o+'" alt="alt 5"></p><p>和从 <code>demo.wa</code> 翻译过来的 AVR 汇编程序 <code>demo.S</code>，这才是真正驱动数码管计数的功能代码。</p><p><img src="'+i+'" alt="alt 6"></p><hr><h1 id="未来的工作" tabindex="-1">未来的工作 <a class="header-anchor" href="#未来的工作" aria-hidden="true">#</a></h1><ul><li>wa 命令直接输出 AVR 的 HEX 文件</li><li>wa 命令集成 AVR 烧录工具 avrdude</li></ul>',41),h=[c];function u(f,m,g,_,b,v){return t(),l("div",null,h)}const k=e(p,[["render",u]]);export{w as __pageData,k as default};