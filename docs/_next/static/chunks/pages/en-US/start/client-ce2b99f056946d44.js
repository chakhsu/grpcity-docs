(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3386],{176:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en-US/start/client",function(){return e(3440)}])},3440:function(i,s,e){"use strict";e.r(s),e.d(s,{default:function(){return HOC},useTOC:function(){return useTOC}});var r=e(5893),n=e(7812),l=e(1054),t=e(8925),h=e(5192);function useTOC(i){return[{value:"Project Structure",id:"project-structure",depth:3},{value:"Initialization",id:"initialization",depth:3},{value:"Invocation and Start",id:"invocation-and-start",depth:3},{value:"Testing",id:"testing",depth:3}]}let a=(0,n.c)(function(i){let{toc:s=useTOC(i)}=i,e=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li",a:"a",hr:"hr"},(0,t.a)(),i.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Client Side"}),"\n",(0,r.jsx)(e.p,{children:"Developing the client-side is relatively simpler. Here, you can see how to easily make calls to two different gRPC servers."}),"\n",(0,r.jsx)(e.h3,{id:s[0].id,children:s[0].value}),"\n",(0,r.jsx)(e.pre,{icon:h.Fx,"data-language":"bash","data-filename":"Terminal","data-copy":"",children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"."})}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"├──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" loader.js"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"├──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" package-lock.json"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"├──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" package.json"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"├──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" proto"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"│"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"   └──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"│"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"       └──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" helloworld"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"│"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"           ├──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" model"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"│"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"           │"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"   └──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" message.proto"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"│"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"           └──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" service.proto"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"├──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" server.js"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"├──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" server2.js"})]}),"\n",(0,r.jsxs)(e.span,{"data-highlighted-line":"",children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"└──"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" client.js"})]})]})}),"\n",(0,r.jsxs)(e.p,{children:["We've already created ",(0,r.jsx)(e.code,{children:"client.js"})," in the original project."]}),"\n",(0,r.jsx)(e.h3,{id:s[1].id,children:s[1].value}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Step 1"}),": Import the ",(0,r.jsx)(e.code,{children:"loader.js"})," module, which we'll use in the subsequent development to bind methods with RPC and the server."]}),"\n",(0,r.jsx)(e.pre,{icon:h.Dr,"data-language":"js","data-filename":"./client.js","data-copy":"",children:(0,r.jsx)(e.code,{children:(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "./loader.js"'})]})})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Step 2"}),": Initialize the client, passing in the server name and address."]}),"\n",(0,r.jsx)(e.pre,{icon:h.Dr,"data-language":"js","data-filename":"./client.js","data-copy":"",children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" start"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" async"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"server1Addr"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"server2Addr"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    await"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"init"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,r.jsx)(e.span,{children:" "}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    await"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"initClients"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        services: {"})}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"            'test.helloworld.Greeter'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": server1Addr,"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"            'test.helloworld.Hellor'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": server2Addr"})]}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        }"})}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    })"})}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,r.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,r.jsxs)(e.p,{children:["We then add client-side logic for invoking the server and print the results in the ",(0,r.jsx)(e.code,{children:"start"})," method."]}),"\n",(0,r.jsxs)(e.p,{children:["After the ",(0,r.jsx)(e.code,{children:"client"})," sends a request, the result received includes three values: ",(0,r.jsx)(e.code,{children:"status"}),", ",(0,r.jsx)(e.code,{children:"metadata"}),", and ",(0,r.jsx)(e.code,{children:"response"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"status"}),": The server's state after execution."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"metadata"}),": Metadata information sent by the client and returned by the server."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"response"}),": The result returned by the server after processing."]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{icon:h.Dr,"data-language":"js","data-filename":"./client.js","data-copy":"",children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" start"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" async"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (server1Addr, server2Addr) {"})]}),"\n",(0,r.jsx)(e.span,{children:" "}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // ..."})}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // Loader init code"})}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // ...."})}),"\n",(0,r.jsx)(e.span,{children:" "}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // Server1"})}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // Greeter client"})}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    const server1Client "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"client"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'test.helloworld.Greeter'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    const greetResult "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" await"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" server1Client."}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"sayGreet"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({ name: "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'greeter'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" })"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    console.log("}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'server1Client.sayGreet'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", greetResult.response)"})]}),"\n",(0,r.jsx)(e.span,{children:" "}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // Server2"})}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // Hellor client"})}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    const server2Client "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"client"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'test.helloworld.Hellor'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    const hellorResult "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" await"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" server2Client."}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"sayHello"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({ name: "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'hellor'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" })"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    console.log("}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'server2Client.sayHello'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", hellorResult.response)"})]}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,r.jsx)(e.span,{children:" "}),"\n",(0,r.jsx)(e.span,{children:(0,r.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// Execute"})}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"start"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'127.0.0.1:9098'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'127.0.0.1:9099'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]})]})}),"\n",(0,r.jsx)(e.h3,{id:s[3].id,children:s[3].value}),"\n",(0,r.jsx)(e.p,{children:"In the previous server-side tutorial, we've already started two servers. So, executing the client is all that's needed to complete integration testing."}),"\n",(0,r.jsx)(e.pre,{icon:h.Fx,"data-language":"bash","data-filename":"Terminal","data-copy":"",children:(0,r.jsx)(e.code,{children:(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"node"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ./client.js"})]})})}),"\n",(0,r.jsx)(e.p,{children:"The results of the first execution are as follows:"}),"\n",(0,r.jsx)(e.pre,{icon:h.Fx,"data-language":"bash","data-filename":"Terminal","data-copy":"",children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"server1Client.sayGreet"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" {"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" message:"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'hello greeter by Greeter in server1',"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" count:"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" }"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"server2Client.sayHello"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" {"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" message:"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'hello hellor by Hellor in server2'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" }"})]})]})}),"\n",(0,r.jsx)(e.p,{children:"The results of the second execution are as follows:"}),"\n",(0,r.jsx)(e.pre,{icon:h.Fx,"data-language":"bash","data-filename":"Terminal","data-copy":"",children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"server1Client.sayGreet"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" {"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" message:"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'hello greeter by Greeter in server1',"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" count:"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 2"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" }"})]}),"\n",(0,r.jsxs)(e.span,{children:[(0,r.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"server2Client.sayHello"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" {"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" message:"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'hello hellor by Hellor in server2'"}),(0,r.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" }"})]})]})}),"\n",(0,r.jsxs)(e.p,{children:["We can see that both executions return results as expected, and the ",(0,r.jsx)(e.code,{children:"count"})," in the ",(0,r.jsx)(e.code,{children:"sayGreet"})," method accumulates to 2 after the second execution, indicating the successful completion of this client-to-server interaction loop."]}),"\n",(0,r.jsxs)(e.p,{children:["You can find the project repository for the Quick Start tutorial here: ",(0,r.jsx)(e.a,{href:"https://github.com/chakhsu/grpcity-basic-demo",children:"link"}),"."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"The introductory tutorial is now complete, and it should feel quite simple and user-friendly. Feel free to revisit and further your learning."})]})},"/en-US/start/client",{filePath:"pages/en-US/start/client.mdx",timestamp:1699236606e3,pageMap:l.v,frontMatter:{},title:"Client Side"},"undefined"==typeof RemoteContent?useTOC:RemoteContent.useTOC);function HOC(i){return a(i)}},1054:function(i,s,e){"use strict";e.d(s,{v:function(){return r}});let r=[{data:{index:"Home",start:"Get Started",guide:"User Guide",apis:"API"}},{name:"apis",route:"/en-US/apis",children:[{data:{grpcloader:"gRPC Loader",server:"Server","client-proxy":"Client Proxy"}},{name:"client-proxy",route:"/en-US/apis/client-proxy",frontMatter:{sidebar_label:"Client Proxy"}},{name:"grpcloader",route:"/en-US/apis/grpcloader",frontMatter:{sidebar_label:"Grpcloader"}},{name:"server",route:"/en-US/apis/server",frontMatter:{sidebar_label:"Server"}}]},{name:"apis",route:"/en-US/apis",frontMatter:{sidebar_label:"Apis"}},{name:"guide",route:"/en-US/guide",children:[{data:{loader:"Loader",config:"Config",server:"Server",client:"Client",metadata:"Metadata","stream-v2":"Stream v2",stream:"Stream",credentials:"Credentials",status:"Status",error:"Error",middleware:"Middleware",proto:"Proto"}},{name:"client",route:"/en-US/guide/client",frontMatter:{sidebar_label:"Client"}},{name:"config",route:"/en-US/guide/config",frontMatter:{sidebar_label:"Config"}},{name:"credentials",route:"/en-US/guide/credentials",frontMatter:{sidebar_label:"Credentials"}},{name:"error",route:"/en-US/guide/error",frontMatter:{sidebar_label:"Error"}},{name:"loader",route:"/en-US/guide/loader",frontMatter:{sidebar_label:"Loader"}},{name:"metadata",route:"/en-US/guide/metadata",frontMatter:{sidebar_label:"Metadata"}},{name:"middleware",route:"/en-US/guide/middleware",frontMatter:{sidebar_label:"Middleware"}},{name:"proto",route:"/en-US/guide/proto",frontMatter:{sidebar_label:"Proto"}},{name:"server",route:"/en-US/guide/server",frontMatter:{sidebar_label:"Server"}},{name:"status",route:"/en-US/guide/status",frontMatter:{sidebar_label:"Status"}},{name:"stream-v2",route:"/en-US/guide/stream-v2",frontMatter:{sidebar_label:"Stream V2"}},{name:"stream",route:"/en-US/guide/stream",frontMatter:{sidebar_label:"Stream"}}]},{name:"guide",route:"/en-US/guide",frontMatter:{sidebar_label:"Guide"}},{name:"index",route:"/en-US",frontMatter:{sidebar_label:"Index"}},{name:"start",route:"/en-US/start",children:[{data:{"proto-loader":"Proto Loader",server:"Server Side",client:"Client Side"}},{name:"client",route:"/en-US/start/client",frontMatter:{sidebar_label:"Client"}},{name:"proto-loader",route:"/en-US/start/proto-loader",frontMatter:{sidebar_label:"Proto Loader"}},{name:"server",route:"/en-US/start/server",frontMatter:{sidebar_label:"Server"}}]},{name:"start",route:"/en-US/start",frontMatter:{sidebar_label:"Start"}}]}},function(i){i.O(0,[7812,9774,2888,179],function(){return i(i.s=176)}),_N_E=i.O()}]);