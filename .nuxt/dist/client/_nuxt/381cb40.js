"use strict";(self.webpackChunknuxt_app=self.webpackChunknuxt_app||[]).push([[520],{5520:(R,i,t)=>{t.r(i),t.d(i,{default:()=>y});var c=t(8885),e=t(1505),d=t(8159),s=t(835),a=t(202),_=t(9775);const h=(0,_.Q_)("user",{state:()=>({data:"",room:"",availableModal:!1,notAvailableModal:!1})}),v=(0,e._)("div",{class:"h-[20vh] flex items-center justify-between gap-[2vh] bg-blue-950 px-[4vw]"},[(0,e._)("h2",{class:"text-yellow-100 text-[4vh]"},"Riz Carlton"),(0,e._)("span",{class:"text-[#ffffff61] tracking-widest"},"BOOKING")],-1),f={class:"h-[80vh] w-screen max-[800px]:flex-col max-[800px]:gap-[5vh] flex items-center justify-center bg-blue-900"},m={class:"text-white"},p=(0,e._)("br",null,null,-1),x={class:"max-[800px]:flex-col max-[800px]:gap-[8vh] flex justify-evenly w-[40%] text-[#fffffc]",method:"POST"},b=[(0,e._)("option",{value:"TRV"},"The Riz Villa",-1),(0,e._)("option",{value:"TRO"},"The Royal Orchid",-1)],g=(0,e._)("div",{class:"h-full w-[75%] flex items-center pr-[10%] text-yellow-50"},[(0,e._)("span",null,"Your Room is Available")],-1),w=(0,e._)("div",{class:"h-full w-[75%] flex items-center pr-[10%] text-yellow-50"},[(0,e._)("span",null,"Sorry, Not Available")],-1),y={__name:"index",setup(k){const l=h();function n(){l.availableModal=!1,l.notAvailableModal=!1}async function S(){n();try{const o=await(0,c.i)("https://nuxtbooking.vercel.app/api/users",{method:"POST",body:{room:l.room},server:!1},"$P5ACEOm6eB");if(l.data=o,o.data._value==="ERR404"){alert("please select a room to check");return}o.data._value?l.availableModal=!0:l.notAvailableModal=!0}catch(o){console.log("\u{1F534}",o)}}return(o,u)=>{const r=(0,e.up)("UModal");return(0,e.wg)(),(0,e.iD)(e.HY,null,[v,(0,e._)("div",f,[(0,e._)("p",m,[(0,e.Uk)(" \u2192 \xA0 "+(0,d.zw)((0,s.SU)(l).room===""?"Please select a room":(0,s.SU)(l).room==="TRV"?"The Riz Villa":"The Royal Orchid")+" ",1),p]),(0,e._)("form",x,[(0,e.wy)((0,e._)("select",{class:"bg-inherit border-b-2","onUpdate:modelValue":u[0]||(u[0]=M=>(0,s.SU)(l).room=M)},b,512),[[a.bM,(0,s.SU)(l).room]]),(0,e._)("button",{class:"bg-blue-400 text-yellow-100 py-[2vh] px-[4vw] hover:bg-blue-500 hover:scale-[.9] duration-150 ease-in-out rounded-md",onClick:(0,a.iM)(S,["prevent"])}," Check ")]),(0,e.wy)((0,e.Wm)(a.uT,null,{default:(0,e.w5)(()=>[(0,e.Wm)(r,{class:"absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-green-500 right-0 top-[20vh] rounded-md flex justify-evenly"},{default:(0,e.w5)(()=>[(0,e._)("div",{class:"h-full w-[25%] flex items-center pl-[10%]"},[(0,e._)("img",{onClick:n,src:"/IcRoundDoneOutline.svg",class:"h-[40%]",alt:"done"})]),g]),_:1})]),_:1},512),[[a.F8,(0,s.SU)(l).availableModal]]),(0,e.wy)((0,e.Wm)(a.uT,null,{default:(0,e.w5)(()=>[(0,e.Wm)(r,{class:"absolute h-[10vh] max-[800px]:w-screen w-[40vw] bg-red-500 right-0 top-[20vh] rounded-md flex justify-evenly"},{default:(0,e.w5)(()=>[(0,e._)("div",{class:"h-full w-[25%] flex items-center pl-[10%]"},[(0,e._)("img",{onClick:n,src:"/closeIcon.svg",class:"h-[40%]",alt:"done"})]),w]),_:1})]),_:1},512),[[a.F8,(0,s.SU)(l).notAvailableModal]])])],64)}}}}}]);