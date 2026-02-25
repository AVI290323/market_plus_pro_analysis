import { useState, useRef } from "react";

const C = {
  bg:"#060a10",bg2:"#0c1018",bg3:"#111822",bd:"#151e2d",bd2:"#1c2840",
  tx:"#d8dfe8",tx2:"#8a96a8",tx3:"#4a5568",
  cy:"#06d6f0",gn:"#0dff7e",rd:"#ff2d55",gd:"#ffc53d",pu:"#a78bfa",or:"#ff7a45"
};

const SEC = {
  Technology:{c:C.cy,s:["TCS","Infosys","Wipro","HCL Tech","Tech Mahindra"],ix:"Nifty IT"},
  Banking:{c:C.gd,s:["HDFC Bank","ICICI Bank","SBI","Kotak Bank","Axis Bank"],ix:"Bank Nifty"},
  Pharma:{c:C.gn,s:["Sun Pharma","Dr Reddy's","Cipla","Divi's Labs","Biocon"],ix:"Nifty Pharma"},
  Auto:{c:C.or,s:["Maruti","Tata Motors","M&M","Bajaj Auto","Hero Moto"],ix:"Nifty Auto"},
  Energy:{c:C.rd,s:["Reliance","ONGC","NTPC","Power Grid","Adani Green"],ix:"Nifty Energy"},
  FMCG:{c:C.pu,s:["HUL","ITC","Nestle","Britannia","Dabur"],ix:"Nifty FMCG"},
  Metals:{c:"#78909c",s:["Tata Steel","JSW Steel","Hindalco","Vedanta","NMDC"],ix:"Nifty Metal"},
  Realty:{c:"#e6a44e",s:["DLF","Godrej Prop","Oberoi Realty","Prestige","Brigade"],ix:"Nifty Realty"}
};

const CAP_INFO = {
  "Large Cap":{c:C.cy,bg:"rgba(6,214,240,.08)"},
  "Mid Cap":{c:C.gd,bg:"rgba(255,197,61,.08)"},
  "Small Cap":{c:C.or,bg:"rgba(255,122,69,.08)"}
};

const mk = (cap,mc,cmp,sec,s1,s1t,r1,r1t,inv,h,vol) => ({
  cap,mc,cmp,sec,
  sup:{lv:s1,tp:s1t},res:{lv:r1,tp:r1t},
  inv,h,vol
});

const DB = {
"TCS":mk("Large Cap","₹13.4L Cr","₹3,680","Technology","₹3,520","200 DMA","₹3,820","ATH",[{n:"Tata Sons",s:"72.3%",t:"Promoter"},{n:"LIC",s:"6.1%",t:"DII"},{n:"SBI MF",s:"2.9%",t:"MF"}],{"3m":5.2,"6m":11.8,"1y":18.5},"18.2L"),
"Infosys":mk("Large Cap","₹6.3L Cr","₹1,520","Technology","₹1,460","50 DMA","₹1,580","Swing Hi",[{n:"N.Murthy",s:"3.2%",t:"Founder"},{n:"Vanguard",s:"2.9%",t:"FII"},{n:"HDFC MF",s:"3.4%",t:"MF"}],{"3m":6.1,"6m":13.2,"1y":22.4},"22.5L"),
"Wipro":mk("Large Cap","₹2.7L Cr","₹512","Technology","₹485","100 DMA","₹535","Prev Hi",[{n:"Premji Trust",s:"66.7%",t:"Promoter"},{n:"LIC",s:"4.2%",t:"DII"},{n:"ICICI MF",s:"2.1%",t:"MF"}],{"3m":3.8,"6m":8.5,"1y":14.2},"15.8L"),
"HCL Tech":mk("Large Cap","₹4.1L Cr","₹1,520","Technology","₹1,470","50 DMA","₹1,580","Fib 61.8",[{n:"Shiv Nadar",s:"60.8%",t:"Promoter"},{n:"SBI MF",s:"3.2%",t:"MF"},{n:"BlackRock",s:"1.9%",t:"FII"}],{"3m":5.5,"6m":12.1,"1y":19.8},"11.2L"),
"Tech Mahindra":mk("Large Cap","₹1.5L Cr","₹1,560","Technology","₹1,490","Channel","₹1,630","Swing Hi",[{n:"M&M Ltd",s:"35.4%",t:"Promoter"},{n:"LIC",s:"5.9%",t:"DII"},{n:"Axis MF",s:"2.4%",t:"MF"}],{"3m":7.2,"6m":15.5,"1y":26.3},"9.8L"),
"HDFC Bank":mk("Large Cap","₹12.9L Cr","₹1,685","Banking","₹1,620","200 DMA","₹1,740","ATH",[{n:"Promoter Grp",s:"~26%",t:"Promoter"},{n:"LIC",s:"4.3%",t:"DII"},{n:"Jhunjhunwala",s:"0.6%",t:"HNI"}],{"3m":4.8,"6m":10.5,"1y":17.2},"28.5L"),
"ICICI Bank":mk("Large Cap","₹8.9L Cr","₹1,268","Banking","₹1,220","50 DMA","₹1,310","Swing Hi",[{n:"GIC Singapore",s:"2.7%",t:"FII"},{n:"SBI MF",s:"4.2%",t:"MF"},{n:"ICICI Life",s:"1.8%",t:"DII"}],{"3m":5.9,"6m":12.8,"1y":21.5},"25.2L"),
"SBI":mk("Large Cap","₹7.2L Cr","₹802","Banking","₹770","Trendline","₹840","ATH",[{n:"Govt of India",s:"57.5%",t:"Promoter"},{n:"LIC",s:"8.4%",t:"DII"},{n:"SBI MF",s:"3.1%",t:"MF"}],{"3m":6.5,"6m":14.2,"1y":24.8},"32.0L"),
"Kotak Bank":mk("Large Cap","₹3.9L Cr","₹1,940","Banking","₹1,870","100 DMA","₹2,020","Fib 78.6",[{n:"Uday Kotak",s:"25.9%",t:"Promoter"},{n:"Canada Pen.",s:"2.8%",t:"FII"},{n:"FII Comb.",s:"38.5%",t:"FII"}],{"3m":3.2,"6m":7.8,"1y":13.5},"14.0L"),
"Axis Bank":mk("Large Cap","₹3.4L Cr","₹1,108","Banking","₹1,060","50 DMA","₹1,150","Swing Hi",[{n:"Bain Capital",s:"4.0%",t:"PE"},{n:"LIC",s:"7.9%",t:"DII"},{n:"Nippon MF",s:"2.7%",t:"MF"}],{"3m":5.1,"6m":11.2,"1y":19.0},"19.5L"),
"Sun Pharma":mk("Large Cap","₹4.4L Cr","₹1,825","Pharma","₹1,760","50 DMA","₹1,890","Recent Hi",[{n:"Shanghvi",s:"54.5%",t:"Promoter"},{n:"LIC",s:"4.0%",t:"DII"},{n:"Mirae MF",s:"2.8%",t:"MF"}],{"3m":4.5,"6m":9.8,"1y":16.5},"10.5L"),
"Dr Reddy's":mk("Large Cap","₹1.1L Cr","₹6,620","Pharma","₹6,400","100 DMA","₹6,850","ATH",[{n:"Reddy Fam.",s:"26.7%",t:"Promoter"},{n:"BlackRock",s:"3.2%",t:"FII"},{n:"SBI MF",s:"4.0%",t:"MF"}],{"3m":5.8,"6m":12.5,"1y":20.8},"5.2L"),
"Cipla":mk("Large Cap","₹1.2L Cr","₹1,460","Pharma","₹1,400","50 DMA","₹1,520","Swing Hi",[{n:"Hamied Fam.",s:"33.5%",t:"Promoter"},{n:"HDFC MF",s:"5.1%",t:"MF"},{n:"GIC",s:"1.9%",t:"FII"}],{"3m":4.2,"6m":9.1,"1y":15.3},"8.8L"),
"Divi's Labs":mk("Mid Cap","₹1.0L Cr","₹3,840","Pharma","₹3,680","Channel","₹4,020","Prev Hi",[{n:"Murali Divi",s:"52.0%",t:"Promoter"},{n:"Kotak MF",s:"3.9%",t:"MF"},{n:"Vanguard",s:"1.7%",t:"FII"}],{"3m":7.8,"6m":16.2,"1y":28.5},"4.5L"),
"Biocon":mk("Mid Cap","₹38.5K Cr","₹322","Pharma","₹305","Base","₹345","50 DMA",[{n:"K.Mazumdar",s:"60.6%",t:"Promoter"},{n:"ICICI MF",s:"3.0%",t:"MF"},{n:"Nomura",s:"1.4%",t:"FII"}],{"3m":8.5,"6m":18.0,"1y":32.0},"12.2L"),
"Maruti":mk("Large Cap","₹3.9L Cr","₹12,480","Auto","₹12,000","100 DMA","₹12,800","Recent Hi",[{n:"Suzuki Motor",s:"58.2%",t:"Promoter"},{n:"LIC",s:"3.4%",t:"DII"},{n:"Vanguard",s:"1.9%",t:"FII"}],{"3m":4.1,"6m":9.5,"1y":16.0},"6.8L"),
"Tata Motors":mk("Large Cap","₹3.0L Cr","₹798","Auto","₹760","50 DMA","₹835","Fib 61.8",[{n:"Tata Sons",s:"46.4%",t:"Promoter"},{n:"Jhunjhunwala",s:"1.1%",t:"HNI"},{n:"SBI MF",s:"4.8%",t:"MF"}],{"3m":6.8,"6m":14.5,"1y":25.2},"22.0L"),
"M&M":mk("Large Cap","₹3.7L Cr","₹2,960","Auto","₹2,850","Trendline","₹3,080","ATH",[{n:"Mahindra Fam.",s:"19.4%",t:"Promoter"},{n:"LIC",s:"6.8%",t:"DII"},{n:"HDFC MF",s:"5.2%",t:"MF"}],{"3m":5.5,"6m":12.0,"1y":20.5},"10.2L"),
"Bajaj Auto":mk("Large Cap","₹2.5L Cr","₹8,850","Auto","₹8,500","50 DMA","₹9,150","Recent Hi",[{n:"Bajaj Fam.",s:"55.0%",t:"Promoter"},{n:"Nippon MF",s:"3.1%",t:"MF"},{n:"Norway Pen.",s:"1.9%",t:"FII"}],{"3m":4.8,"6m":10.2,"1y":17.8},"5.5L"),
"Hero Moto":mk("Large Cap","₹1.0L Cr","₹5,120","Auto","₹4,900","100 DMA","₹5,350","Prev Hi",[{n:"Munjal Grp",s:"34.6%",t:"Promoter"},{n:"LIC",s:"5.0%",t:"DII"},{n:"Mirae MF",s:"2.6%",t:"MF"}],{"3m":3.9,"6m":8.8,"1y":15.0},"7.2L"),
"Reliance":mk("Large Cap","₹17.8L Cr","₹2,630","Energy","₹2,540","200 DMA","₹2,720","ATH",[{n:"M.Ambani",s:"50.4%",t:"Promoter"},{n:"LIC",s:"6.1%",t:"DII"},{n:"SBI MF",s:"4.3%",t:"MF"}],{"3m":3.5,"6m":8.2,"1y":14.8},"35.0L"),
"ONGC":mk("Large Cap","₹3.1L Cr","₹248","Energy","₹235","Trendline","₹262","Recent Hi",[{n:"Govt of India",s:"58.9%",t:"Promoter"},{n:"LIC",s:"7.9%",t:"DII"},{n:"HDFC MF",s:"2.2%",t:"MF"}],{"3m":5.2,"6m":11.5,"1y":19.2},"18.0L"),
"NTPC":mk("Large Cap","₹3.5L Cr","₹359","Energy","₹340","50 DMA","₹378","Swing Hi",[{n:"Govt of India",s:"51.1%",t:"Promoter"},{n:"LIC",s:"10.5%",t:"DII"},{n:"SBI MF",s:"4.0%",t:"MF"}],{"3m":6.0,"6m":13.5,"1y":23.0},"20.5L"),
"Power Grid":mk("Large Cap","₹2.8L Cr","₹299","Energy","₹285","100 DMA","₹315","Recent Hi",[{n:"Govt of India",s:"51.3%",t:"Promoter"},{n:"LIC",s:"8.2%",t:"DII"},{n:"ICICI MF",s:"2.8%",t:"MF"}],{"3m":4.5,"6m":10.0,"1y":17.5},"16.0L"),
"Adani Green":mk("Large Cap","₹2.6L Cr","₹1,655","Energy","₹1,550","50 DMA","₹1,750","Gap Resist",[{n:"Adani Fam.",s:"56.4%",t:"Promoter"},{n:"TotalEnergies",s:"19.8%",t:"Strategic"},{n:"GQG",s:"4.9%",t:"FII"}],{"3m":9.2,"6m":19.5,"1y":35.0},"8.5L"),
"HUL":mk("Large Cap","₹5.6L Cr","₹2,392","FMCG","₹2,320","100 DMA","₹2,480","Fib 50%",[{n:"Unilever",s:"61.9%",t:"Promoter"},{n:"LIC",s:"4.1%",t:"DII"},{n:"HDFC MF",s:"3.6%",t:"MF"}],{"3m":2.8,"6m":6.5,"1y":11.2},"12.0L"),
"ITC":mk("Large Cap","₹5.9L Cr","₹468","FMCG","₹448","Trendline","₹490","ATH",[{n:"BAT",s:"29.0%",t:"Promoter"},{n:"LIC",s:"15.9%",t:"DII"},{n:"SBI MF",s:"5.5%",t:"MF"}],{"3m":3.5,"6m":7.8,"1y":13.5},"25.0L"),
"Nestle":mk("Large Cap","₹2.2L Cr","₹2,240","FMCG","₹2,160","100 DMA","₹2,350","Prev Hi",[{n:"Nestle SA",s:"62.8%",t:"Promoter"},{n:"LIC",s:"1.9%",t:"DII"},{n:"Kotak MF",s:"2.2%",t:"MF"}],{"3m":2.5,"6m":5.8,"1y":10.5},"3.8L"),
"Britannia":mk("Large Cap","₹1.3L Cr","₹5,310","FMCG","₹5,100","50 DMA","₹5,480","Recent Hi",[{n:"Wadia Grp",s:"50.6%",t:"Promoter"},{n:"HDFC MF",s:"4.1%",t:"MF"},{n:"Fidelity",s:"2.1%",t:"FII"}],{"3m":3.2,"6m":7.2,"1y":12.8},"4.2L"),
"Dabur":mk("Mid Cap","₹92K Cr","₹520","FMCG","₹498","100 DMA","₹545","Fib",[{n:"Burman Fam.",s:"67.5%",t:"Promoter"},{n:"LIC",s:"4.6%",t:"DII"},{n:"ICICI MF",s:"2.4%",t:"MF"}],{"3m":4.0,"6m":9.0,"1y":15.5},"8.5L"),
"Tata Steel":mk("Large Cap","₹1.8L Cr","₹146","Metals","₹138","50 DMA","₹155","Recent Hi",[{n:"Tata Sons",s:"33.2%",t:"Promoter"},{n:"LIC",s:"5.7%",t:"DII"},{n:"HDFC MF",s:"3.9%",t:"MF"}],{"3m":7.0,"6m":14.8,"1y":25.5},"42.0L"),
"JSW Steel":mk("Large Cap","₹2.1L Cr","₹855","Metals","₹820","Trendline","₹890","Fib 61.8",[{n:"Sajjan Jindal",s:"44.8%",t:"Promoter"},{n:"LIC",s:"4.1%",t:"DII"},{n:"SBI MF",s:"3.3%",t:"MF"}],{"3m":6.5,"6m":13.8,"1y":23.5},"18.5L"),
"Hindalco":mk("Large Cap","₹1.4L Cr","₹635","Metals","₹610","100 DMA","₹665","Recent Hi",[{n:"Aditya Birla",s:"34.7%",t:"Promoter"},{n:"LIC",s:"6.3%",t:"DII"},{n:"Nippon MF",s:"3.2%",t:"MF"}],{"3m":5.8,"6m":12.2,"1y":21.0},"15.0L"),
"Vedanta":mk("Mid Cap","₹68K Cr","₹450","Metals","₹425","50 DMA","₹475","Range Hi",[{n:"Anil Agarwal",s:"56.4%",t:"Promoter"},{n:"LIC",s:"6.5%",t:"DII"},{n:"SBI MF",s:"3.0%",t:"MF"}],{"3m":8.0,"6m":17.0,"1y":30.0},"28.0L"),
"NMDC":mk("Mid Cap","₹62K Cr","₹212","Metals","₹200","Channel","₹225","Recent Hi",[{n:"Govt of India",s:"60.8%",t:"Promoter"},{n:"LIC",s:"8.4%",t:"DII"},{n:"HDFC MF",s:"2.5%",t:"MF"}],{"3m":6.2,"6m":13.0,"1y":22.0},"14.0L"),
"DLF":mk("Large Cap","₹1.7L Cr","₹680","Realty","₹648","50 DMA","₹720","ATH",[{n:"K P Singh",s:"75.0%",t:"Promoter"},{n:"GIC",s:"4.9%",t:"FII"},{n:"HDFC MF",s:"2.8%",t:"MF"}],{"3m":7.5,"6m":16.0,"1y":28.0},"12.5L"),
"Godrej Prop":mk("Mid Cap","₹62K Cr","₹2,230","Realty","₹2,120","Trendline","₹2,380","Recent Hi",[{n:"Godrej Grp",s:"58.4%",t:"Promoter"},{n:"SBI MF",s:"4.6%",t:"MF"},{n:"ADIA",s:"3.2%",t:"FII"}],{"3m":8.8,"6m":18.5,"1y":33.0},"5.5L"),
"Oberoi Realty":mk("Mid Cap","₹52K Cr","₹1,430","Realty","₹1,360","100 DMA","₹1,510","Swing Hi",[{n:"V.Oberoi",s:"67.7%",t:"Promoter"},{n:"HDFC MF",s:"5.2%",t:"MF"},{n:"Goldman",s:"2.0%",t:"FII"}],{"3m":7.2,"6m":15.5,"1y":27.0},"3.8L"),
"Prestige":mk("Mid Cap","₹48K Cr","₹1,200","Realty","₹1,140","50 DMA","₹1,280","Recent Hi",[{n:"Irfan Razack",s:"64.8%",t:"Promoter"},{n:"Blackstone",s:"15.0%",t:"PE"},{n:"SBI MF",s:"3.4%",t:"MF"}],{"3m":8.2,"6m":17.5,"1y":31.0},"4.0L"),
"Brigade":mk("Small Cap","₹18.5K Cr","₹802","Realty","₹760","Channel","₹845","Recent Hi",[{n:"Jaishankar",s:"44.4%",t:"Promoter"},{n:"GIC",s:"8.5%",t:"FII"},{n:"HDFC MF",s:"3.8%",t:"MF"}],{"3m":10.5,"6m":22.0,"1y":38.0},"6.2L"),
};

const NEWS = [
{id:1,hl:"RBI Holds Repo Rate at 6.5% — Shifts to Accommodative Stance, Rate Cut Cycle Expected",src:"Economic Times",time:"2h ago",mins:120,secs:["Banking","Realty"],dir:"Bullish",prob:88,conf:"High",
  thesis:"RBI's shift to accommodative stance is strongest guidance in 18 months. Banking rallies 2-4% in 1 week historically. Real estate benefits from lower EMI expectations. Bond yields declining supports bank NIMs.",
  bear:"Global yield spike from US tariffs could offset domestic liquidity. Banks with high CASA may see less NIM benefit.",
  catalysts:["Rate cut likely Apr 2026","Bond yield decline","Housing loan demand surge","FII inflows"],
  risks:["Global rate reversal","Food inflation spike","Rupee depreciation"],
  timeframe:"1-4 weeks",
  secImpact:[{s:"Banking",exp:"+2.5%",r:"NIM expansion + credit growth"},{s:"Realty",exp:"+3.8%",r:"Lower mortgage rates"}],
  severity:88,
  past:[{dt:"Oct 2024",ev:"RBI dovish hold",sm:"+2.1%",nm:"+0.8%",vs:"2.3x",buyers:["LIC +₹850Cr","SBI MF +₹420Cr","FII +₹1,200Cr"]},{dt:"Jun 2024",ev:"Rate pause + liquidity",sm:"+1.5%",nm:"+0.5%",vs:"1.8x",buyers:["HDFC MF +₹680Cr","FII +₹950Cr"]},{dt:"Feb 2024",ev:"Status quo + growth up",sm:"+1.8%",nm:"+0.6%",vs:"1.6x",buyers:["LIC +₹520Cr","Axis MF +₹310Cr"]},{dt:"Dec 2023",ev:"Pause + inflation eased",sm:"+2.4%",nm:"+0.9%",vs:"2.1x",buyers:["FII +₹2,100Cr","SBI MF +₹550Cr"]}],
  cos:[{nm:"HDFC Bank",exp:"+2.3%",rsn:"Largest pvt bank, CASA benefit",volA:"42.5L (+68%)",pnb:[{n:"LIC",a:"Bought ₹320Cr"},{n:"GIC Singapore",a:"Bought ₹180Cr"}]},{nm:"SBI",exp:"+1.8%",rsn:"PSU leader, govt bond gain",volA:"48.2L (+51%)",pnb:[{n:"SBI MF",a:"Bought ₹250Cr"},{n:"HDFC MF",a:"Bought ₹190Cr"}]},{nm:"DLF",exp:"+3.1%",rsn:"Premium realty, lower EMI demand",volA:"18.8L (+52%)",pnb:[{n:"GIC Singapore",a:"Bought ₹420Cr"},{n:"BlackRock",a:"Bought ₹150Cr"}]}]},
{id:2,hl:"US Fed Signals Rate Cuts Q2 2026 — Dollar Weakens 1.2% Against Rupee",src:"Bloomberg",time:"45m ago",mins:45,secs:["Technology","Pharma"],dir:"Bullish",prob:82,conf:"High",
  thesis:"Dollar weakness boosts IT INR revenue. Every 1% rupee appreciation adds ~40bps to IT margins. Pharma US generics see translation gains. FII inflows accelerate.",
  bear:"Too-fast rupee strength (>3%/month) may trigger RBI intervention. IT at premium valuations may cap upside.",
  catalysts:["USD/INR below 83","FII buying momentum","Q4 IT earnings upgrade","US pharma pricing stability"],
  risks:["RBI forex intervention","Global risk-off","US recession fears"],
  timeframe:"2-6 weeks",
  secImpact:[{s:"Technology",exp:"+3.2%",r:"USD revenue + FII buying"},{s:"Pharma",exp:"+2.1%",r:"US generics revenue boost"}],
  severity:82,
  past:[{dt:"Sep 2024",ev:"Fed 50bps cut signal",sm:"+3.2%",nm:"+1.2%",vs:"2.8x",buyers:["FII +₹4,500Cr","Mirae MF +₹680Cr"]},{dt:"Mar 2024",ev:"Dollar index drops 2%",sm:"+2.4%",nm:"+0.9%",vs:"2.1x",buyers:["FII +₹3,200Cr","SBI MF +₹520Cr"]},{dt:"Nov 2023",ev:"Fed pause confirmed",sm:"+2.8%",nm:"+1.1%",vs:"2.5x",buyers:["Vanguard +₹1,800Cr","HDFC MF +₹750Cr"]}],
  cos:[{nm:"TCS",exp:"+2.5%",rsn:"72% USD revenue, margin expansion",volA:"28.5L (+57%)",pnb:[{n:"Vanguard",a:"Bought ₹850Cr"},{n:"SBI MF",a:"Bought ₹320Cr"}]},{nm:"Infosys",exp:"+2.8%",rsn:"Highest US exposure among IT",volA:"35.2L (+56%)",pnb:[{n:"BlackRock",a:"Bought ₹620Cr"},{n:"HDFC MF",a:"Bought ₹410Cr"}]},{nm:"Sun Pharma",exp:"+1.9%",rsn:"40% revenue from US generics",volA:"15.8L (+50%)",pnb:[{n:"FII Combined",a:"Bought ₹480Cr"},{n:"Mirae MF",a:"Bought ₹220Cr"}]}]},
{id:3,hl:"Crude Oil Surges Past $95 — OPEC+ Extends Cuts 6 Months, Supply Deficit Widens",src:"Reuters",time:"1h ago",mins:60,secs:["Energy","Auto"],dir:"Bearish",prob:75,conf:"Medium-High",
  thesis:"India imports 85% crude. $10/bbl increase widens CAD by ~$15B. Auto faces input cost + fuel hike demand hit. OMCs margin squeeze. But upstream (ONGC) benefits.",
  bear:"Govt may absorb fuel cost before elections. Refining margins improve for Reliance. Strong domestic auto demand may be resilient.",
  catalysts:["Fuel price hike expected","CAD widening","Auto margin guidance cut","OMC results miss"],
  risks:["Govt fuel subsidy","Crude pullback on demand fears","Strong auto demand resilience"],
  timeframe:"Immediate to 2-3 weeks",
  secImpact:[{s:"Auto",exp:"-2.5%",r:"Input cost + demand headwind"},{s:"Energy",exp:"Mixed",r:"Upstream +ve, downstream -ve"}],
  severity:75,
  past:[{dt:"Aug 2024",ev:"Crude crosses $90",sm:"-2.5%",nm:"-1.0%",vs:"2.0x",buyers:["DII +₹2,800Cr"]},{dt:"Apr 2024",ev:"OPEC+ surprise cut",sm:"-1.8%",nm:"-0.7%",vs:"1.7x",buyers:["FII Sold -₹3,500Cr"]},{dt:"Oct 2023",ev:"Oil spikes to $95",sm:"-3.1%",nm:"-1.3%",vs:"2.4x",buyers:["FII Sold -₹5,200Cr","DII +₹4,100Cr"]}],
  cos:[{nm:"Maruti",exp:"-1.8%",rsn:"Input cost pressure, fuel hike fear",volA:"10.5L (+55%)",pnb:[{n:"FII",a:"Sold ₹280Cr"},{n:"DII",a:"Bought ₹180Cr"}]},{nm:"ONGC",exp:"+2.2%",rsn:"Higher crude realization",volA:"28.0L (+56%)",pnb:[{n:"LIC",a:"Bought ₹450Cr"},{n:"SBI MF",a:"Bought ₹220Cr"}]},{nm:"Reliance",exp:"+0.5%",rsn:"GRM up but petchem squeeze",volA:"42.0L (+20%)",pnb:[{n:"GQG Partners",a:"Bought ₹350Cr"},{n:"HDFC MF",a:"Bought ₹280Cr"}]}]},
{id:4,hl:"PLI 2.0 for Semiconductors ₹76,000 Cr — 5 Fab Units Planned, Largest Policy Push",src:"Mint",time:"3h ago",mins:180,secs:["Technology","Metals"],dir:"Bullish",prob:91,conf:"Very High",
  thesis:"Largest industrial policy since 1991. Fab construction needs massive steel/copper. Tata semi venture gets tailwind. Tech design services see long-term value. Bipartisan support ensures continuity.",
  bear:"India's fab track record is poor (Vedanta-Foxconn failed). Full impact is 3-5 years away. Near-term is sentiment-driven.",
  catalysts:["Tata-PSMC fab groundbreaking","Metal demand contracts","Design orders from global semicon","FDI inflows"],
  risks:["Execution delays","Tech transfer barriers","Infra gaps"],
  timeframe:"Immediate sentiment + 6-12m structural",
  secImpact:[{s:"Technology",exp:"+3.5%",r:"Design services + ecosystem"},{s:"Metals",exp:"+2.8%",r:"Steel/copper for fabs"}],
  severity:91,
  past:[{dt:"Dec 2024",ev:"PLI 1.0 expansion",sm:"+4.1%",nm:"+1.5%",vs:"3.2x",buyers:["FII +₹6,200Cr","SBI MF +₹980Cr","LIC +₹750Cr"]},{dt:"Jul 2024",ev:"Semicon India conclave",sm:"+3.5%",nm:"+1.2%",vs:"2.6x",buyers:["FII +₹4,800Cr","HDFC MF +₹820Cr"]},{dt:"Mar 2024",ev:"PLI disbursement",sm:"+2.9%",nm:"+0.8%",vs:"2.0x",buyers:["Mirae MF +₹550Cr","FII +₹2,900Cr"]}],
  cos:[{nm:"Tata Motors",exp:"+3.2%",rsn:"Tata Group semi venture synergy",volA:"35.0L (+59%)",pnb:[{n:"FII Combined",a:"Bought ₹1,200Cr"},{n:"SBI MF",a:"Bought ₹480Cr"}]},{nm:"Vedanta",exp:"+2.8%",rsn:"Display fab + metal demand",volA:"42.0L (+50%)",pnb:[{n:"LIC",a:"Bought ₹380Cr"},{n:"Kotak MF",a:"Bought ₹250Cr"}]},{nm:"HCL Tech",exp:"+1.5%",rsn:"Chip design & embedded systems",volA:"15.5L (+38%)",pnb:[{n:"BlackRock",a:"Bought ₹280Cr"},{n:"Axis MF",a:"Bought ₹150Cr"}]}]},
{id:5,hl:"FII Outflows Hit ₹15,000 Cr in Feb — Highest Since Oct 2024, EM Rotation to China",src:"CNBC TV18",time:"30m ago",mins:30,secs:["Banking","FMCG"],dir:"Bearish",prob:72,conf:"Medium",
  thesis:"Sustained FII selling pressures high-ownership large caps. Banking (40%+ FII) most vulnerable. FMCG premium valuations face de-rating. DII buying (₹12K Cr) provides floor. Rotation not panic.",
  bear:"DII flows strong. India growth intact. FII selling could reverse on global risk-off favoring India.",
  catalysts:["China stimulus redirecting flows","USD strength","India valuation compression","Monthly FII data"],
  risks:["Sharp DII absorption","Global risk-off favoring India","Earnings beat"],
  timeframe:"2-4 weeks pressure",
  secImpact:[{s:"Banking",exp:"-2.0%",r:"High FII ownership exposure"},{s:"FMCG",exp:"-1.5%",r:"Valuation de-rating"}],
  severity:72,
  past:[{dt:"Jan 2025",ev:"FII sell ₹12K Cr",sm:"-2.2%",nm:"-1.5%",vs:"1.9x",buyers:["DII +₹10,500Cr"]},{dt:"Oct 2024",ev:"FII record ₹22K Cr sell",sm:"-3.8%",nm:"-2.1%",vs:"2.8x",buyers:["DII +₹18,200Cr","Retail +₹5,500Cr"]},{dt:"Aug 2024",ev:"FII sell ₹8K Cr",sm:"-1.9%",nm:"-1.0%",vs:"1.5x",buyers:["LIC +₹4,200Cr","SBI MF +₹2,800Cr"]}],
  cos:[{nm:"HDFC Bank",exp:"-1.5%",rsn:"42% FII holding, selling pressure",volA:"38.0L (+33%)",pnb:[{n:"LIC",a:"Bought ₹520Cr"},{n:"SBI MF",a:"Bought ₹350Cr"}]},{nm:"HUL",exp:"-1.2%",rsn:"Premium valuation + FII overweight",volA:"16.5L (+38%)",pnb:[{n:"HDFC MF",a:"Bought ₹180Cr"},{n:"Retail",a:"Net Buyers"}]},{nm:"ITC",exp:"-0.8%",rsn:"Defensive but FII rebalancing",volA:"32.0L (+28%)",pnb:[{n:"LIC",a:"Bought ₹680Cr"},{n:"DII",a:"Bought ₹450Cr"}]}]},
{id:6,hl:"IMF Raises India GDP Forecast to 7.2% for FY26 — Fastest Growing Major Economy",src:"Financial Express",time:"4h ago",mins:240,secs:["FMCG","Auto","Realty"],dir:"Bullish",prob:84,conf:"High",
  thesis:"IMF upgrade validates India structural growth. Consumer discretionary benefits most. Auto sees rural recovery. Realty benefits from urbanization + income + rates combo. FMCG volume recovery to double digits.",
  bear:"GDP growth already priced in. If driven by govt capex not consumption, FMCG won't benefit proportionally.",
  catalysts:["Q4 consumption recovery","Rural demand up","Realty launches","Auto monthly sales"],
  risks:["Monsoon uncertainty","Global slowdown","Election uncertainty"],
  timeframe:"1-3 months",
  secImpact:[{s:"Auto",exp:"+2.5%",r:"Rural + urban demand"},{s:"Realty",exp:"+3.0%",r:"Income growth + rate cycle"},{s:"FMCG",exp:"+1.8%",r:"Volume recovery"}],
  severity:84,
  past:[{dt:"Nov 2024",ev:"World Bank upgrade",sm:"+2.5%",nm:"+1.3%",vs:"1.8x",buyers:["FII +₹3,800Cr","HDFC MF +₹650Cr"]},{dt:"Jul 2024",ev:"GDP beats 7%",sm:"+2.0%",nm:"+1.0%",vs:"1.6x",buyers:["FII +₹2,500Cr","SBI MF +₹480Cr"]},{dt:"Feb 2024",ev:"IMF upgrade 6.8%",sm:"+1.7%",nm:"+0.7%",vs:"1.4x",buyers:["Mirae MF +₹320Cr","FII +₹1,800Cr"]}],
  cos:[{nm:"M&M",exp:"+2.1%",rsn:"Rural recovery tractor + SUV demand",volA:"15.5L (+52%)",pnb:[{n:"HDFC MF",a:"Bought ₹380Cr"},{n:"FII Combined",a:"Bought ₹520Cr"}]},{nm:"Britannia",exp:"+1.5%",rsn:"Consumer spending boost",volA:"6.8L (+62%)",pnb:[{n:"Fidelity",a:"Bought ₹180Cr"},{n:"SBI MF",a:"Bought ₹120Cr"}]},{nm:"Godrej Prop",exp:"+2.8%",rsn:"Income growth + rate cut = housing",volA:"8.5L (+55%)",pnb:[{n:"ADIA",a:"Bought ₹450Cr"},{n:"HDFC MF",a:"Bought ₹220Cr"}]}]},
{id:7,hl:"EU CBAM Fast-Tracked — Indian Steel & Aluminium Face 20-26% Carbon Levy",src:"Business Standard",time:"5h ago",mins:300,secs:["Metals"],dir:"Bearish",prob:78,conf:"Medium-High",
  thesis:"CBAM taxes carbon-intensive imports. Indian steel has 2.5x carbon intensity of EU. Tata Steel Europe faces dual pressure. Aluminium smelters using coal worst hit. Structural not cyclical — margins compressed 2-3 years.",
  bear:"Companies investing in green steel. Domestic demand absorbs export diversion. Carbon credit trading potential.",
  catalysts:["EU final CBAM rate","Steel export data decline","Green capex announcements","Carbon credit pricing"],
  risks:["CBAM delay/dilution","India-EU trade talks","Green hydrogen cost drop"],
  timeframe:"6-18 months structural",
  secImpact:[{s:"Metals",exp:"-2.8%",r:"Export margin compression + capex burden"}],
  severity:78,
  past:[{dt:"Jan 2025",ev:"CBAM reporting phase",sm:"-2.0%",nm:"-0.5%",vs:"1.8x",buyers:["FII Sold -₹1,800Cr","DII +₹1,200Cr"]},{dt:"Sep 2024",ev:"EU climate package",sm:"-2.8%",nm:"-0.8%",vs:"2.2x",buyers:["FII Sold -₹2,500Cr","LIC +₹1,800Cr"]},{dt:"May 2024",ev:"CBAM trial data",sm:"-1.5%",nm:"-0.3%",vs:"1.4x",buyers:["DII +₹800Cr"]}],
  cos:[{nm:"Tata Steel",exp:"-2.5%",rsn:"Largest EU exporter from India",volA:"58.0L (+38%)",pnb:[{n:"LIC",a:"Bought ₹620Cr (dip)"},{n:"FII",a:"Sold ₹850Cr"}]},{nm:"JSW Steel",exp:"-1.8%",rsn:"EU export share at risk",volA:"25.0L (+35%)",pnb:[{n:"DII Combined",a:"Bought ₹380Cr"},{n:"FII",a:"Sold ₹520Cr"}]},{nm:"Hindalco",exp:"-1.2%",rsn:"Novelis EU ops face levy",volA:"20.0L (+33%)",pnb:[{n:"LIC",a:"Bought ₹280Cr"},{n:"FII",a:"Sold ₹350Cr"}]}]}
];

function calcExp(a){const b=a*.0003*2,stt=a*.001+a*.00025,ex=a*.0000345*2,se=a*.000001*2,st=a*.00015,g=b*.18;return{b:+b.toFixed(2),stt:+stt.toFixed(2),ex:+ex.toFixed(2),se:+se.toFixed(2),st:+st.toFixed(2),g:+g.toFixed(2),dp:15.93,tot:+(b+stt+ex+se+st+g+15.93).toFixed(2)}}
const fmt=n=>"₹"+Number(n).toLocaleString("en-IN",{maximumFractionDigits:0});
const fmtD=n=>"₹"+Number(n).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2});

const S_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#1c2840;border-radius:9px}
@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes pulse{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}
input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}input[type=number]{-moz-appearance:textfield}
`;

const Tag = ({t,c}) => <span style={{display:"inline-flex",padding:"2px 8px",borderRadius:5,fontSize:10,fontWeight:700,background:c+"18",color:c,letterSpacing:.3}}>{t}</span>;

const Bar = ({w,c}) => <div style={{width:"100%",height:5,background:"rgba(255,255,255,.06)",borderRadius:3,overflow:"hidden"}}><div style={{width:w+"%",height:"100%",background:`linear-gradient(90deg,${c}88,${c})`,borderRadius:3,transition:"width .8s"}}/></div>;

const MiniSvg = ({color,trend}) => {
  const d=[];let v=100;for(let i=0;i<20;i++){v+=trend==="bull"?(Math.random()-.3)*4:trend==="bear"?(Math.random()-.7)*4:(Math.random()-.5)*3;d.push(v)}
  const mn=Math.min(...d),mx=Math.max(...d),rg=mx-mn||1;
  const pts=d.map((v,i)=>`${(i/19)*100},${38-((v-mn)/rg)*38}`).join(" ");
  const id="g"+Math.random().toString(36).slice(2,8);
  return <svg width={100} height={38} style={{display:"block"}}><defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity={.3}/><stop offset="100%" stopColor={color} stopOpacity={0}/></linearGradient></defs><polygon points={`0,38 ${pts} 100,38`} fill={`url(#${id})`}/><polyline points={pts} fill="none" stroke={color} strokeWidth={1.5}/></svg>;
};

const CandleChart = ({trend,w=220,h=80}) => {
  const candles=[];const base=trend==="bull"?95:105;
  for(let i=0;i<24;i++){
    const drift=trend==="bull"?(i*.35):(i*-.3);const noise=(Math.random()-.5)*4;
    const open=base+drift+noise;const close=open+(trend==="bull"?(Math.random()*3-.5):(Math.random()*-3+.5));
    const hi=Math.max(open,close)+(Math.random()*2);const lo=Math.min(open,close)-(Math.random()*2);
    candles.push({o:open,c:close,h:hi,l:lo});
  }
  const allV=candles.flatMap(c=>[c.h,c.l]);const mn=Math.min(...allV),mx=Math.max(...allV),rg=mx-mn||1;
  const y=v=>4+(h-8)-(((v-mn)/rg)*(h-8));
  const cw=(w-8)/24;const gap=cw*.2;
  return <svg width={w} height={h} style={{display:"block"}}>
    {[.25,.5,.75].map(p=><line key={p} x1={0} y1={y(mn+rg*p)} x2={w} y2={y(mn+rg*p)} stroke={C.bd} strokeWidth={.5} strokeDasharray="3 3"/>)}
    {candles.map((c,i)=>{
      const x=4+i*cw;const bull=c.c>=c.o;const color=bull?C.gn:C.rd;
      const bodyTop=y(Math.max(c.o,c.c));const bodyBot=y(Math.min(c.o,c.c));const bodyH=Math.max(bodyBot-bodyTop,1);
      return <g key={i}>
        <line x1={x+cw/2-gap} y1={y(c.h)} x2={x+cw/2-gap} y2={y(c.l)} stroke={color} strokeWidth={.8} opacity={.6}/>
        <rect x={x+gap} y={bodyTop} width={cw-gap*3} height={bodyH} fill={bull?color:color} rx={1} opacity={.85}/>
      </g>;
    })}
    <text x={4} y={h-2} fill={C.tx3} fontSize={7} fontFamily="monospace">24 candles • simulated</text>
  </svg>;
};

const bx={background:C.bg2,border:`1px solid ${C.bd}`,borderRadius:14,overflow:"hidden"};
const bxH={padding:"16px 18px",borderBottom:`1px solid ${C.bd}`};
const bxB={padding:"18px"};
const lbl={fontSize:10,fontWeight:700,color:C.tx3,letterSpacing:1.5,marginBottom:8};
const mono={fontFamily:"'Space Mono',monospace"};

export default function MarketPulse(){
  const [news,setNews]=useState([]);
  const [loading,setLoading]=useState(false);
  const [phase,setPhase]=useState("");
  const [selN,setSelN]=useState(null);
  const [tabN,setTabN]=useState("thesis");
  const [view,setView]=useState("news");
  const [selStk,setSelStk]=useState(null);
  const [capF,setCapF]=useState("All");
  const [secF,setSecF]=useState("All");
  const [invAmt,setInvAmt]=useState("");
  const [risk,setRisk]=useState("Balanced");
  const [hz,setHz]=useState("6m");
  const [invRes,setInvRes]=useState(null);
  const [computing,setComputing]=useState(false);
  const [lastUp,setLastUp]=useState(null);
  const [autoScan,setAutoScan]=useState(false);
  const [nextScan,setNextScan]=useState(0);
  const [dateF,setDateF]=useState("all7");
  const autoRef=useRef(null);
  const countRef=useRef(null);

  const scan=async()=>{
    setLoading(true);setSelN(null);
    for(const p of["Scanning news feeds...","Analyzing sentiment...","Computing probabilities...","Mapping sectors...","Generating insights..."]){setPhase(p);await new Promise(r=>setTimeout(r,500))}
    const now=new Date();
    const dayN=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monN=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const fmtDate=d=>dayN[d.getDay()]+", "+d.getDate()+" "+monN[d.getMonth()]+" "+d.getFullYear();
    const fmtTime=d=>d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",hour12:true});
    const fmtAgo=mins=>{if(mins<60)return mins+"m ago";if(mins<1440)return Math.floor(mins/60)+"h "+(mins%60>0?(mins%60)+"m ":"")+"ago";return Math.floor(mins/1440)+"d ago"};

    // Today's news from base NEWS array
    const todayNews=[...NEWS].map(n=>{
      const jitter=Math.floor(Math.random()*10)-5;
      const mins=Math.max(5,n.mins+jitter);
      const nd=new Date(now.getTime()-mins*60000);
      return {...n,mins,time:fmtAgo(mins),date:fmtDate(nd),timeStamp:fmtTime(nd),newsDate:nd,dayKey:"today",dayLabel:"Today"};
    });

    // Past 6 days of archived news
    const PAST_NEWS=[
      {id:101,hl:"Nifty Crosses 24,000 — FII Buying Resumes After 3-Week Gap",src:"Moneycontrol",mins:0,secs:["Banking","Technology"],dir:"Bullish",prob:79,conf:"Medium-High",
        thesis:"FII flow reversal signals renewed confidence in India. Large caps lead the rally. IT sector benefits from global tech recovery.",
        bear:"Nifty at resistance zone. Profit booking likely above 24,200. Global uncertainties persist.",
        catalysts:["FII DII flow data","Index fund rebalancing","Quarterly earnings season"],risks:["Profit booking","Global selloff","INR volatility"],timeframe:"1-2 weeks",severity:79,
        secImpact:[{s:"Banking",exp:"+1.8%",r:"FII buying in financials"},{s:"Technology",exp:"+1.5%",r:"Global tech recovery"}],
        past:[{dt:"Jan 2025",ev:"FII return post-selloff",sm:"+2.0%",nm:"+1.2%",vs:"2.1x",buyers:["FII +₹3,200Cr","SBI MF +₹450Cr"]}],
        cos:[{nm:"HDFC Bank",exp:"+1.6%",rsn:"FII favorite, undervalued",volA:"35L (+42%)",pnb:[{n:"FII Combined",a:"Bought ₹680Cr"},{n:"SBI MF",a:"Bought ₹220Cr"}]},{nm:"Infosys",exp:"+1.3%",rsn:"Tech recovery play",volA:"28L (+35%)",pnb:[{n:"Vanguard",a:"Bought ₹420Cr"},{n:"HDFC MF",a:"Bought ₹180Cr"}]}]},
      {id:102,hl:"India Manufacturing PMI Hits 14-Month High at 58.3 — Factory Orders Surge",src:"S&P Global",mins:0,secs:["Auto","Metals"],dir:"Bullish",prob:81,conf:"High",
        thesis:"Manufacturing boom benefits auto & metal sectors. Strong domestic demand signals economic acceleration. Capex cycle gaining momentum.",
        bear:"Export orders weaker than domestic. Input cost inflation remains sticky. Sustainability of PMI above 58 questionable.",
        catalysts:["Auto monthly sales data","Steel production numbers","IIP data release"],risks:["Input cost inflation","Export slowdown","Monsoon impact on rural"],timeframe:"2-4 weeks",severity:81,
        secImpact:[{s:"Auto",exp:"+2.2%",r:"Strong factory demand"},{s:"Metals",exp:"+1.8%",r:"Capex-driven steel demand"}],
        past:[{dt:"Dec 2024",ev:"PMI above 57",sm:"+1.8%",nm:"+0.9%",vs:"1.6x",buyers:["FII +₹2,100Cr","DII +₹1,500Cr"]}],
        cos:[{nm:"Tata Motors",exp:"+2.5%",rsn:"CV demand surge on manufacturing boom",volA:"30L (+48%)",pnb:[{n:"FII",a:"Bought ₹580Cr"},{n:"SBI MF",a:"Bought ₹320Cr"}]},{nm:"Tata Steel",exp:"+1.9%",rsn:"Domestic steel demand acceleration",volA:"52L (+25%)",pnb:[{n:"LIC",a:"Bought ₹420Cr"},{n:"HDFC MF",a:"Bought ₹280Cr"}]}]},
      {id:103,hl:"China Stimulus Package $500B — Emerging Market Funds Rotate Away from India",src:"FT",mins:0,secs:["Banking","FMCG"],dir:"Bearish",prob:70,conf:"Medium",
        thesis:"China's massive stimulus redirects global EM fund allocations. India's premium valuation makes it vulnerable to rotation. Banking & FMCG with high FII ownership at risk.",
        bear:"India fundamentals remain strong. DII absorption capacity proven. China stimulus may disappoint like previous attempts.",
        catalysts:["Weekly FII flow data","China GDP print","India earnings season"],risks:["Strong DII counter-buying","China stimulus fizzles","India consumption resilience"],timeframe:"2-3 weeks",severity:70,
        secImpact:[{s:"Banking",exp:"-1.5%",r:"FII rotation pressure"},{s:"FMCG",exp:"-1.0%",r:"Valuation de-rating"}],
        past:[{dt:"Oct 2024",ev:"China stimulus round 1",sm:"-2.5%",nm:"-1.8%",vs:"2.2x",buyers:["DII +₹8,500Cr","Retail +₹3,200Cr"]}],
        cos:[{nm:"Kotak Bank",exp:"-1.8%",rsn:"High FII ownership, rotation target",volA:"20L (+45%)",pnb:[{n:"FII",a:"Sold ₹420Cr"},{n:"LIC",a:"Bought ₹280Cr"}]},{nm:"HUL",exp:"-1.0%",rsn:"Premium FMCG, FII overweight",volA:"15L (+30%)",pnb:[{n:"FII",a:"Sold ₹250Cr"},{n:"DII",a:"Bought ₹180Cr"}]}]},
      {id:104,hl:"Govt Approves ₹2.5L Cr National Highway Expansion — Infra Push Accelerates",src:"PIB",mins:0,secs:["Metals","Realty"],dir:"Bullish",prob:85,conf:"High",
        thesis:"Largest highway package in history. Steel & cement demand guaranteed for 3+ years. Realty corridor development benefits. Multiplier effect on GDP.",
        bear:"Execution delays typical in infra. Land acquisition challenges. Fiscal deficit concerns if borrowing increases.",
        catalysts:["Contract award timeline","Steel order pipeline","L&T order book update"],risks:["Execution delays","Fiscal pressure","Land acquisition"],timeframe:"1-6 months structural",severity:85,
        secImpact:[{s:"Metals",exp:"+3.2%",r:"Multi-year steel demand"},{s:"Realty",exp:"+2.5%",r:"Corridor development boom"}],
        past:[{dt:"Aug 2024",ev:"Infra budget allocation",sm:"+2.8%",nm:"+1.1%",vs:"2.0x",buyers:["FII +₹3,800Cr","SBI MF +₹650Cr"]}],
        cos:[{nm:"JSW Steel",exp:"+2.8%",rsn:"Largest domestic steel supplier for infra",volA:"25L (+38%)",pnb:[{n:"FII",a:"Bought ₹520Cr"},{n:"LIC",a:"Bought ₹380Cr"}]},{nm:"DLF",exp:"+2.2%",rsn:"Highway corridor real estate boom",volA:"16L (+45%)",pnb:[{n:"GIC",a:"Bought ₹450Cr"},{n:"HDFC MF",a:"Bought ₹220Cr"}]}]},
      {id:105,hl:"Pharma Sector — USFDA Clears 12 Indian Plants, Generic Drug Pipeline Expands",src:"Livemint",mins:0,secs:["Pharma"],dir:"Bullish",prob:83,conf:"High",
        thesis:"USFDA clearances remove regulatory overhang. Indian pharma generic pipeline worth $18B now unblocked. Revenue visibility improves dramatically.",
        bear:"Pricing pressure in US generics intensifying. Biosimilar competition from Korean players. Currency headwind if rupee strengthens.",
        catalysts:["Individual plant clearance dates","ANDA approval pipeline","US drug pricing reform"],risks:["New FDA observations","US pricing pressure","Currency risk"],timeframe:"2-8 weeks",severity:83,
        secImpact:[{s:"Pharma",exp:"+2.8%",r:"Regulatory clearance + revenue visibility"}],
        past:[{dt:"Sep 2024",ev:"FDA clearance wave",sm:"+3.0%",nm:"+1.0%",vs:"2.4x",buyers:["FII +₹2,800Cr","Mirae MF +₹550Cr"]}],
        cos:[{nm:"Dr Reddy's",exp:"+2.5%",rsn:"3 plants cleared, largest ANDA pipeline",volA:"8L (+58%)",pnb:[{n:"BlackRock",a:"Bought ₹380Cr"},{n:"SBI MF",a:"Bought ₹220Cr"}]},{nm:"Cipla",exp:"+2.0%",rsn:"2 key plants cleared, inhaler pipeline",volA:"12L (+42%)",pnb:[{n:"GIC",a:"Bought ₹280Cr"},{n:"HDFC MF",a:"Bought ₹190Cr"}]}]},
      {id:106,hl:"Rupee Falls to 84.5/$ — RBI Intervention Fails to Stem Dollar Demand",src:"Reuters",mins:0,secs:["Technology","Energy"],dir:"Bearish",prob:68,conf:"Medium",
        thesis:"Weak rupee hurts oil import bill and energy sector costs. However, IT companies benefit from weaker rupee on translation. Mixed impact across sectors.",
        bear:"RBI has $620B reserves. Rupee weakness may be temporary. Global dollar cycle may reverse on Fed cuts.",
        catalysts:["RBI forex data","Dollar index movement","Trade deficit data"],risks:["RBI massive intervention","Fed rate cut acceleration","Oil price drop"],timeframe:"1-2 weeks",severity:68,
        secImpact:[{s:"Energy",exp:"-1.5%",r:"Higher import bill"},{s:"Technology",exp:"+1.0%",r:"Rupee weakness benefits"}],
        past:[{dt:"Nov 2024",ev:"Rupee at 84",sm:"-1.2%",nm:"-0.5%",vs:"1.5x",buyers:["DII +₹2,500Cr"]}],
        cos:[{nm:"NTPC",exp:"-1.2%",rsn:"Coal import cost rises with weak rupee",volA:"25L (+28%)",pnb:[{n:"DII",a:"Bought ₹350Cr"},{n:"FII",a:"Sold ₹200Cr"}]},{nm:"Wipro",exp:"+1.1%",rsn:"USD billing benefit from weak rupee",volA:"20L (+32%)",pnb:[{n:"FII",a:"Bought ₹280Cr"},{n:"Axis MF",a:"Bought ₹150Cr"}]}]},
    ];

    // Assign past dates (day 1-6 ago) to archived news
    const allNews=[...todayNews];
    PAST_NEWS.forEach((pn,i)=>{
      const daysAgo=Math.floor(i/1)+1; // 1 per day for 6 days
      const pastDate=new Date(now.getTime()-daysAgo*86400000-(Math.floor(Math.random()*8+9)*3600000)); // random hour 9AM-5PM
      const totalMins=Math.round((now-pastDate)/60000);
      allNews.push({...pn,mins:totalMins,time:fmtAgo(totalMins),date:fmtDate(pastDate),timeStamp:fmtTime(pastDate),newsDate:pastDate,dayKey:"d"+daysAgo,dayLabel:daysAgo===1?"Yesterday":daysAgo+"d ago"});
    });

    setNews(allNews.sort((a,b)=>a.mins-b.mins));
    setLastUp(now);setLoading(false);setPhase("");setDateF("all7");
  };

  const toggleAuto=()=>{
    if(autoScan){setAutoScan(false);clearInterval(autoRef.current);clearInterval(countRef.current);setNextScan(0);return}
    setAutoScan(true);setNextScan(60);
    if(!news.length)scan();
    countRef.current=setInterval(()=>setNextScan(p=>{if(p<=1)return 60;return p-1}),1000);
    autoRef.current=setInterval(()=>{scan()},60000);
  };

  // Cleanup on unmount
  const cleanupRef=useRef(()=>{});
  cleanupRef.current=()=>{clearInterval(autoRef.current);clearInterval(countRef.current)};
  useState(()=>()=>cleanupRef.current());

  const filtered=Object.entries(DB).filter(([,s])=>(capF==="All"||s.cap===capF)&&(secF==="All"||s.sec===secF));
  const capC={"Large Cap":0,"Mid Cap":0,"Small Cap":0};Object.values(DB).forEach(s=>{if(capC[s.cap]!==undefined)capC[s.cap]++});

  // Date filtering
  const now2=new Date();
  const dateBtns=[
    {k:"today",l:"Today",filter:n=>n.dayKey==="today"},
    {k:"yesterday",l:"Yesterday",filter:n=>n.dayKey==="d1"},
    {k:"3d",l:"Last 3 Days",filter:n=>n.mins<=4320},
    {k:"all7",l:"All 7 Days",filter:()=>true},
  ];
  // Build unique day list from news for individual day buttons
  const daySet=new Set();news.forEach(n=>{if(n.date)daySet.add(n.date)});
  const uniqueDays=[...daySet];

  const filteredNews=news.filter(n=>{
    if(dateF==="all7")return true;
    if(dateF==="today")return n.dayKey==="today";
    if(dateF==="yesterday")return n.dayKey==="d1";
    if(dateF==="3d")return n.mins<=4320;
    // individual date match
    return n.date===dateF;
  });

  const hzL={"3m":"3 Months","6m":"6 Months","1y":"1 Year"};

  const computeInv=async()=>{
    const a=parseFloat(invAmt);if(!a||a<1000)return;setComputing(true);await new Promise(r=>setTimeout(r,1200));
    const bull=news.filter(n=>n.dir==="Bullish");const bSec=new Set();bull.forEach(n=>n.secs.forEach(s=>bSec.add(s)));
    const scored=Object.entries(DB).map(([nm,stk])=>{let sc=0;const ret=stk.h[hz]||10;sc+=ret*2;if(bSec.has(stk.sec))sc+=25;
      const ni=bull.find(n=>n.cos.some(c=>c.nm===nm));if(ni){const ci=ni.cos.find(c=>c.nm===nm);if(ci&&ci.exp.startsWith("+"))sc+=parseFloat(ci.exp)*8;sc+=ni.severity*.3}
      if(risk==="Aggressive"){if(stk.cap==="Small Cap")sc+=20;if(stk.cap==="Mid Cap")sc+=12}else if(risk==="Conservative"){if(stk.cap==="Large Cap")sc+=20;if(stk.cap==="Small Cap")sc-=15}else{if(stk.cap==="Large Cap")sc+=10;if(stk.cap==="Mid Cap")sc+=8}
      return{nm,stk,sc,ret};}).filter(x=>x.sc>0).sort((a,b)=>b.sc-a.sc);
    const top=scored.slice(0,5);const ts=top.reduce((s,p)=>s+p.sc,0);const exp=calcExp(a);const inv=a-exp.tot;
    const al=top.map(p=>{const w=p.sc/ts;const al=Math.round(inv*w);const cv=parseFloat(p.stk.cmp.replace(/[₹,]/g,""));const sh=Math.floor(al/cv);const act=sh*cv;
      const rv=parseFloat(p.stk.res.lv.replace(/[₹,]/g,""));const up=((rv-cv)/cv*100).toFixed(1);const proj=act*(p.ret/100);
      const tax=hz==="3m"?proj*.2:proj>125000?(proj-125000)*.125:0;const net=proj-tax;const roi=act>0?(net/act*100).toFixed(1):0;
      const ni=news.find(n=>n.cos.some(c=>c.nm===p.nm));
      return{...p,wt:(w*100).toFixed(1),al,sh,act,up,proj,tax,net,roi,ni,cv};});
    const tI=al.reduce((s,a)=>s+a.act,0);const tG=al.reduce((s,a)=>s+a.net,0);const tT=al.reduce((s,a)=>s+a.tax,0);
    setInvRes({al,exp,inv,tI,tG,tT,roi:tI>0?(tG/tI*100).toFixed(1):0,cash:a-exp.tot-tI,input:a});setComputing(false);
  };

  return <div style={{minHeight:"100vh",background:C.bg,fontFamily:"'Outfit',sans-serif",color:C.tx,position:"relative"}}>
    <style>{S_CSS}</style>
    {/* Grid BG */}
    <div style={{position:"fixed",inset:0,opacity:.03,backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",backgroundSize:"48px 48px",pointerEvents:"none"}}/>
    <div style={{position:"fixed",top:-200,right:-200,width:600,height:600,background:"radial-gradient(circle,rgba(6,214,240,.05) 0%,transparent 70%)",pointerEvents:"none"}}/>

    <div style={{maxWidth:1400,margin:"0 auto",padding:"16px 24px",position:"relative",zIndex:1}}>
      {/* HEADER */}
      <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:20,paddingBottom:16,borderBottom:`1px solid ${C.bd}`}}>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <div style={{width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(135deg,${C.cy}22,${C.pu}22)`,border:`1px solid ${C.bd2}`,fontSize:22}}>⚡</div>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <h1 style={{fontSize:28,fontWeight:900,letterSpacing:-1,background:`linear-gradient(135deg,${C.tx},${C.cy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Market Pulse</h1>
              <Tag t="LIVE" c={C.gn}/><Tag t="PRO" c={C.pu}/>
            </div>
            <p style={{fontSize:12,color:C.tx3,marginTop:2}}>AI Market Intelligence • Deep Analysis • Volume & Investor Tracking</p>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {lastUp&&<span style={{...mono,fontSize:10,color:C.tx3}}>Updated {lastUp.toLocaleTimeString()}</span>}
          <button onClick={toggleAuto} style={{padding:"8px 16px",borderRadius:9,border:`1px solid ${autoScan?C.gn+"55":C.bd2}`,background:autoScan?C.gn+"12":"transparent",color:autoScan?C.gn:C.tx3,fontSize:12,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6,minWidth:120,justifyContent:"center",transition:"all .3s"}}>
            <span style={{display:"inline-block",width:8,height:8,borderRadius:"50%",background:autoScan?C.gn:C.tx3,boxShadow:autoScan?`0 0 8px ${C.gn}`:"none",animation:autoScan?"pulse 1.5s infinite":"none"}}/>
            {autoScan?`Auto (${nextScan}s)`:"◉ Auto Scan"}
          </button>
          <button onClick={scan} disabled={loading} style={{padding:"10px 24px",borderRadius:9,background:loading?"linear-gradient(90deg,#111822,#1c2840,#111822)":"linear-gradient(135deg,#06d6f0,#0099cc)",backgroundSize:loading?"200% 100%":"100%",animation:loading?"shimmer 1.5s infinite":"none",color:"#fff",fontSize:14,fontWeight:700,boxShadow:loading?"none":"0 4px 20px rgba(6,214,240,.25)",cursor:loading?"wait":"pointer",border:"none",minWidth:180,...mono}}>{loading?phase||"Scanning...":"🔍 Scan Markets"}</button>
        </div>
      </header>

      {/* TABS */}
      <div style={{display:"flex",gap:4,background:C.bg2,borderRadius:12,padding:4,border:`1px solid ${C.bd}`,width:"fit-content",marginBottom:20,flexWrap:"wrap"}}>
        {[{k:"news",l:"📰 News Analysis"},{k:"stocks",l:"📊 Stock Explorer"},{k:"tracker",l:"📈 Performance Tracker"},{k:"invest",l:"💰 Invest Advisor"}].map(t=>
          <button key={t.k} onClick={()=>setView(t.k)} style={{padding:"10px 20px",borderRadius:9,fontSize:13,fontWeight:700,color:view===t.k?C.cy:C.tx3,background:view===t.k?C.cy+"18":"transparent",border:"none",cursor:"pointer"}}>{t.l}</button>)}
      </div>

      {/* ═══ NEWS VIEW ═══ */}
      {view==="news"&&<>
        {!loading&&!news.length&&<div style={{textAlign:"center",padding:"80px 20px",animation:"fadeIn .5s ease both"}}>
          <div style={{fontSize:56,marginBottom:12}}>🛰️</div>
          <h2 style={{fontSize:24,fontWeight:800,marginBottom:8}}>Intelligence Hub Ready</h2>
          <p style={{color:C.tx3,fontSize:13,maxWidth:420,margin:"0 auto"}}>Click "Scan Markets" to run deep analysis — bullish/bearish probability, volume tracking, institutional activity.</p>
        </div>}
        {news.length>0&&!loading&&<>
          {/* DATE FILTER BAR */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap",animation:"fadeIn .3s ease both"}}>
            <span style={{fontSize:10,fontWeight:700,color:C.tx3,letterSpacing:1}}>📅 FILTER:</span>
            {dateBtns.map(b=>{const active=dateF===b.k;const cnt=news.filter(b.filter).length;
              return <button key={b.k} onClick={()=>setDateF(b.k)} style={{padding:"6px 14px",borderRadius:8,border:`1px solid ${active?C.cy+"55":C.bd}`,background:active?C.cy+"15":"transparent",color:active?C.cy:C.tx3,fontSize:11,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:5,...mono}}>
                {b.l}<span style={{fontSize:9,padding:"1px 6px",borderRadius:4,background:active?C.cy+"22":C.bd,color:active?C.cy:C.tx3}}>{cnt}</span>
              </button>})}
            <div style={{width:1,height:20,background:C.bd,margin:"0 4px"}}/>
            {uniqueDays.map(d=>{const active=dateF===d;const cnt=news.filter(n=>n.date===d).length;
              return <button key={d} onClick={()=>setDateF(active?"all7":d)} style={{padding:"5px 10px",borderRadius:7,border:`1px solid ${active?C.pu+"55":C.bd}`,background:active?C.pu+"12":"transparent",color:active?C.pu:C.tx3,fontSize:9,fontWeight:600,cursor:"pointer",...mono}}>
                {d.split(",")[0]+", "+d.split(" ")[1]+" "+d.split(" ")[2]}<span style={{marginLeft:4,fontSize:8,color:active?C.pu:C.tx3}}>({cnt})</span>
              </button>})}
          </div>

          <div style={{display:"grid",gridTemplateColumns:selN?"1fr 1fr":"1fr",gap:20,alignItems:"start",animation:"fadeIn .4s ease both"}}>
          {/* News List */}
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={lbl}>{filteredNews.length} of {news.length} STORIES</span><span style={{fontSize:10,color:C.tx3}}>Click for deep analysis →</span></div>
            {filteredNews.map((it,idx)=>{
              const dc=it.dir==="Bullish"?C.gn:C.rd;const sel=selN===it;
              return <div key={it.id} onClick={()=>{setSelN(it);setTabN("thesis")}} style={{...bx,cursor:"pointer",borderColor:sel?C.cy+"33":C.bd,background:sel?C.cy+"08":C.bg2,animation:`fadeIn ${.2+idx*.06}s ease both`,position:"relative",overflow:"hidden"}}>
                {sel&&<div style={{position:"absolute",left:0,top:0,bottom:0,width:3,background:C.cy}}/>}
                <div style={{padding:"16px 18px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",gap:10,marginBottom:8}}>
                    <h3 style={{fontSize:14,fontWeight:600,lineHeight:1.4,flex:1}}>{it.hl}</h3>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
                      <span style={{...mono,fontSize:10,padding:"2px 8px",borderRadius:5,background:it.mins<=60?C.rd+"18":it.mins<=120?C.gd+"18":C.tx3+"18",color:it.mins<=60?C.rd:it.mins<=120?C.gd:C.tx3,fontWeight:700}}>{it.time}</span>
                      <Tag t={(it.dir==="Bullish"?"▲ ":"▼ ")+it.dir} c={dc}/>
                      <span style={{...mono,fontSize:18,fontWeight:800,color:dc}}>{it.prob}%</span>
                    </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                    <span style={{fontSize:10,color:C.tx3}}>{it.src}</span>
                    <span style={{...mono,fontSize:10,color:C.cy,fontWeight:600}}>{it.date||""}</span>
                    <span style={{...mono,fontSize:10,color:C.tx2,fontWeight:600}}>{it.timeStamp||""}</span>
                    <span style={{...mono,fontSize:10,color:C.pu,fontWeight:600,marginLeft:"auto"}}>Confidence: {it.conf}</span>
                  </div>
                  <Bar w={it.prob} c={dc}/>
                  <div style={{display:"flex",gap:6,marginTop:10,flexWrap:"wrap",alignItems:"center"}}>
                    {it.secs.map(s=><Tag key={s} t={s} c={SEC[s]?.c||C.tx3}/>)}
                    <span style={{marginLeft:"auto",fontSize:10,color:C.tx3}}>Severity: </span>
                    <span style={{...mono,fontSize:11,fontWeight:700,color:dc}}>{it.severity}/100</span>
                  </div>
                </div>
              </div>})}
          </div>

          {/* DEEP ANALYSIS PANEL */}
          {selN&&<div style={{position:"sticky",top:16,height:"fit-content",animation:"fadeIn .3s ease both"}}>
            <div style={bx}>
              {/* Analysis Header */}
              <div style={{...bxH,background:`linear-gradient(135deg,${selN.dir==="Bullish"?C.gn:C.rd}10,transparent)`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <span style={{width:10,height:10,borderRadius:"50%",background:selN.dir==="Bullish"?C.gn:C.rd,boxShadow:`0 0 10px ${selN.dir==="Bullish"?C.gn:C.rd}`}}/>
                  <span style={{fontSize:12,fontWeight:700,color:selN.dir==="Bullish"?C.gn:C.rd,letterSpacing:1}}>{selN.dir.toUpperCase()} SIGNAL</span>
                  <span style={{...mono,fontSize:11,color:C.tx3,marginLeft:"auto"}}>Conf: {selN.conf}</span>
                </div>
                <h3 style={{fontSize:16,fontWeight:700,lineHeight:1.4,marginBottom:4}}>{selN.hl}</h3>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <span style={{...mono,fontSize:10,color:C.cy,fontWeight:600}}>{selN.date||""}</span>
                  <span style={{...mono,fontSize:10,color:C.tx2}}>{selN.timeStamp||""}</span>
                  <span style={{fontSize:10,color:C.tx3}}>{selN.src}</span>
                  <span style={{...mono,fontSize:10,padding:"2px 8px",borderRadius:5,background:selN.mins<=60?C.rd+"18":selN.mins<=120?C.gd+"18":C.tx3+"18",color:selN.mins<=60?C.rd:selN.mins<=120?C.gd:C.tx3,fontWeight:700}}>{selN.time}</span>
                </div>
                {/* Prob meter */}
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{fontSize:11,color:C.tx2}}>Probability of {selN.dir} Move</span>
                  <span style={{...mono,fontSize:13,fontWeight:700,color:selN.dir==="Bullish"?C.gn:C.rd}}>{selN.prob}%</span>
                </div>
                <div style={{width:"100%",height:8,borderRadius:4,background:C.bg,overflow:"hidden"}}>
                  <div style={{width:selN.prob+"%",height:"100%",borderRadius:4,background:`linear-gradient(90deg,${selN.dir==="Bullish"?C.gn:C.rd}88,${selN.dir==="Bullish"?C.gn:C.rd})`,transition:"width .8s"}}/>
                </div>
              </div>

              {/* Tabs */}
              <div style={{display:"flex",borderBottom:`1px solid ${C.bd}`}}>
                {[{k:"thesis",l:"🧠 Analysis"},{k:"stocks",l:"📊 Stocks"},{k:"history",l:"📅 History"},{k:"volume",l:"📈 Volume"}].map(t=>
                  <button key={t.k} onClick={()=>setTabN(t.k)} style={{flex:1,padding:"11px 6px",fontSize:11,fontWeight:700,background:tabN===t.k?C.cy+"15":"transparent",color:tabN===t.k?C.cy:C.tx3,borderBottom:tabN===t.k?`2px solid ${C.cy}`:"2px solid transparent",border:"none",cursor:"pointer"}}>{t.l}</button>)}
              </div>

              {/* Tab Content */}
              <div style={bxB}>
                {tabN==="thesis"&&<div style={{display:"flex",flexDirection:"column",gap:14}}>
                  <div><div style={lbl}>BULL CASE</div><p style={{fontSize:12,color:C.tx,lineHeight:1.6,padding:12,borderRadius:10,background:C.gn+"10",border:`1px solid ${C.gn}18`}}>{selN.thesis}</p></div>
                  <div><div style={lbl}>BEAR CASE / RISKS</div><p style={{fontSize:12,color:C.tx,lineHeight:1.6,padding:12,borderRadius:10,background:C.rd+"10",border:`1px solid ${C.rd}18`}}>{selN.bear}</p></div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                    <div><div style={lbl}>CATALYSTS</div>{selN.catalysts.map((c,i)=><div key={i} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:`1px solid ${C.bd}`}}><span style={{color:C.gn}}>→</span><span style={{fontSize:11,color:C.tx2}}>{c}</span></div>)}</div>
                    <div><div style={lbl}>RISK FACTORS</div>{selN.risks.map((r,i)=><div key={i} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:`1px solid ${C.bd}`}}><span style={{color:C.rd}}>⚠</span><span style={{fontSize:11,color:C.tx2}}>{r}</span></div>)}</div>
                  </div>
                  <div style={{display:"flex",gap:10}}>
                    <div style={{flex:1,padding:12,borderRadius:10,background:C.bg3,textAlign:"center"}}><div style={{fontSize:9,color:C.tx3}}>TIMEFRAME</div><div style={{...mono,fontSize:14,fontWeight:700,color:C.pu,marginTop:4}}>{selN.timeframe}</div></div>
                    {selN.secImpact.map((si,i)=><div key={i} style={{flex:1,padding:12,borderRadius:10,background:C.bg3,textAlign:"center"}}><div style={{fontSize:9,color:C.tx3}}>{si.s}</div><div style={{...mono,fontSize:16,fontWeight:800,color:si.exp.startsWith("+")?C.gn:si.exp.startsWith("-")?C.rd:C.gd,marginTop:4}}>{si.exp}</div><div style={{fontSize:9,color:C.tx3,marginTop:2}}>{si.r}</div></div>)}
                  </div>
                </div>}

                {tabN==="stocks"&&<div style={{display:"flex",flexDirection:"column",gap:12}}>
                  {selN.cos.map((co,i)=>{const bull=co.exp.startsWith("+");const cl=bull?C.gn:C.rd;const sd=DB[co.nm];
                    return <div key={i} style={{...bx,border:`1px solid ${C.bd}`}}>
                      <div style={{padding:16}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                          <div><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{fontSize:16,fontWeight:800,cursor:sd?"pointer":"default"}} onClick={()=>{if(sd)setSelStk(co.nm)}}>{co.nm}</span>{sd&&<Tag t={sd.cap} c={CAP_INFO[sd.cap]?.c}/>}</div><span style={{...mono,fontSize:22,fontWeight:800,color:cl}}>{co.exp}</span><span style={{fontSize:11,color:C.tx3,marginLeft:6}}>expected</span></div>
                          <MiniSvg color={cl} trend={bull?"bull":"bear"}/>
                        </div>
                        <p style={{fontSize:12,color:C.tx2,lineHeight:1.4,padding:"8px 12px",background:C.bg,borderRadius:8,borderLeft:`3px solid ${cl}44`}}>{co.rsn}</p>
                        {/* Volume after news */}
                        <div style={{marginTop:12,padding:12,borderRadius:10,background:C.bg,border:`1px solid ${C.bd}`}}>
                          <div style={lbl}>📈 POST-NEWS VOLUME</div>
                          <div style={{...mono,fontSize:18,fontWeight:800,color:C.cy,marginBottom:8}}>{co.volA}</div>
                          <div style={{...lbl,marginBottom:6}}>🏦 WHO'S BUYING/SELLING</div>
                          {co.pnb.map((b,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 10px",marginBottom:4,borderRadius:8,background:b.a.includes("Bought")?C.gn+"08":C.rd+"08",border:`1px solid ${b.a.includes("Bought")?C.gn+"15":C.rd+"15"}`}}>
                            <div style={{width:32,height:32,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",background:b.a.includes("Bought")?C.gn+"15":C.rd+"15",color:b.a.includes("Bought")?C.gn:C.rd,fontSize:13,fontWeight:800}}>{b.n.charAt(0)}</div>
                            <div><div style={{fontSize:12,fontWeight:700}}>{b.n}</div><div style={{...mono,fontSize:11,fontWeight:600,color:b.a.includes("Bought")?C.gn:C.rd}}>{b.a}</div></div>
                          </div>)}
                        </div>
                      </div>
                    </div>})}
                </div>}

                {tabN==="history"&&<div style={{display:"flex",flexDirection:"column",gap:10}}>
                  <div style={lbl}>SIMILAR EVENTS — PATTERN</div>
                  {selN.past.map((ev,i)=><div key={i} style={{...bx,padding:14,position:"relative"}}>
                    <div style={{position:"absolute",left:0,top:12,bottom:12,width:3,borderRadius:3,background:ev.sm.startsWith("+")?C.gn:C.rd}}/>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                      <div><span style={{...mono,fontSize:11,fontWeight:600,color:C.cy}}>{ev.dt}</span><div style={{fontSize:13,fontWeight:600,marginTop:2}}>{ev.ev}</div></div>
                      <div style={{...mono,fontSize:11,padding:"4px 10px",borderRadius:6,background:C.gd+"15",color:C.gd,fontWeight:700,height:"fit-content"}}>Vol: {ev.vs}</div>
                    </div>
                    <div style={{display:"flex",gap:20,marginBottom:8}}>
                      <div><div style={{fontSize:9,color:C.tx3}}>SECTOR</div><div style={{...mono,fontSize:18,fontWeight:800,color:ev.sm.startsWith("+")?C.gn:C.rd}}>{ev.sm}</div></div>
                      <div><div style={{fontSize:9,color:C.tx3}}>NIFTY</div><div style={{...mono,fontSize:18,fontWeight:800,color:ev.nm.startsWith("+")?C.gn:C.rd}}>{ev.nm}</div></div>
                    </div>
                    <div style={lbl}>TOP INSTITUTIONAL ACTIVITY</div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{ev.buyers.map((b,j)=><Tag key={j} t={b} c={b.includes("+")||b.includes("Buyers")?C.gn:C.rd}/>)}</div>
                  </div>)}
                  <div style={{padding:14,borderRadius:10,background:C.cy+"10",border:`1px solid ${C.cy}18`}}>
                    <div style={{...lbl,color:C.cy}}>PATTERN SUMMARY</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
                      {[["AVG MOVE",selN.secImpact[0]?.exp||"±2%",selN.dir==="Bullish"?C.gn:C.rd],["ACCURACY",selN.prob+"%",C.gd],["VOL SPIKE",selN.past[0]?.vs||"2x",C.pu]].map(([l,v,c])=>
                        <div key={l} style={{textAlign:"center"}}><div style={{fontSize:9,color:C.tx3}}>{l}</div><div style={{...mono,fontSize:18,fontWeight:800,color:c}}>{v}</div></div>)}
                    </div>
                  </div>
                </div>}

                {tabN==="volume"&&<div style={{display:"flex",flexDirection:"column",gap:12}}>
                  <div style={lbl}>📈 POST-NEWS VOLUME & INSTITUTIONAL FLOW</div>
                  {selN.cos.map((co,i)=>{const sd=DB[co.nm];
                    return <div key={i} style={{...bx,padding:14}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                        <span style={{fontSize:15,fontWeight:800}}>{co.nm}</span>
                        <Tag t={co.volA} c={C.cy}/>
                      </div>
                      <div style={{marginBottom:6}}><span style={{fontSize:10,color:C.tx3}}>Avg Volume: </span><span style={{...mono,fontSize:11,color:C.tx2}}>{sd?.vol||"N/A"}</span></div>
                      <Bar w={75} c={C.cy}/>
                      <div style={{marginTop:10,...lbl}}>🏦 INSTITUTIONAL ACTIVITY</div>
                      {co.pnb.map((b,j)=><div key={j} style={{display:"flex",justifyContent:"space-between",padding:"6px 10px",marginBottom:3,borderRadius:6,background:b.a.includes("Bought")?C.gn+"06":C.rd+"06"}}>
                        <span style={{fontSize:11,fontWeight:600}}>{b.n}</span>
                        <span style={{...mono,fontSize:11,fontWeight:700,color:b.a.includes("Bought")?C.gn:C.rd}}>{b.a}</span>
                      </div>)}
                    </div>})}
                  <div style={{padding:12,borderRadius:10,background:C.gd+"10",border:`1px solid ${C.gd}15`}}>
                    <div style={{fontSize:11,fontWeight:700,color:C.gd,marginBottom:4}}>💡 VOLUME INSIGHT</div>
                    <p style={{fontSize:11,color:C.tx2,lineHeight:1.5}}>Volume spikes {">"}50% after news confirm institutional participation. Smart money (FII/DII) activity within 48h is the strongest directional signal.</p>
                  </div>
                </div>}
              </div>
            </div>
          </div>}
        </div>
        </>}
      </>}

      {/* ═══ STOCKS VIEW ═══ */}
      {view==="stocks"&&<div style={{animation:"fadeIn .4s ease both"}}>

        {/* Date filter for stocks */}
        {news.length>0&&<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"}}>
          <span style={{fontSize:10,fontWeight:700,color:C.tx3,letterSpacing:1}}>📅 FILTER:</span>
          {dateBtns.map(b=>{const active=dateF===b.k;const cnt=news.filter(b.filter).length;
            return <button key={b.k} onClick={()=>setDateF(b.k)} style={{padding:"6px 14px",borderRadius:8,border:`1px solid ${active?C.cy+"55":C.bd}`,background:active?C.cy+"15":"transparent",color:active?C.cy:C.tx3,fontSize:11,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:5,...mono}}>
              {b.l}<span style={{fontSize:9,padding:"1px 6px",borderRadius:4,background:active?C.cy+"22":C.bd,color:active?C.cy:C.tx3}}>{cnt}</span>
            </button>})}
          <div style={{width:1,height:20,background:C.bd,margin:"0 4px"}}/>
          {uniqueDays.map(d=>{const active=dateF===d;const cnt=news.filter(n=>n.date===d).length;
            return <button key={d} onClick={()=>setDateF(active?"all7":d)} style={{padding:"5px 10px",borderRadius:7,border:`1px solid ${active?C.pu+"55":C.bd}`,background:active?C.pu+"12":"transparent",color:active?C.pu:C.tx3,fontSize:9,fontWeight:600,cursor:"pointer",...mono}}>
              {d.split(",")[0]+", "+d.split(" ")[1]+" "+d.split(" ")[2]}<span style={{marginLeft:4,fontSize:8,color:active?C.pu:C.tx3}}>({cnt})</span>
            </button>})}
        </div>}

        {/* News-Impacted Stocks Section */}
        {filteredNews.length>0&&<>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
            <div style={{width:10,height:10,borderRadius:"50%",background:C.cy,boxShadow:`0 0 10px ${C.cy}`}}/>
            <span style={{fontSize:13,fontWeight:800,letterSpacing:.5}}>NEWS-IMPACTED STOCKS</span>
            <span style={{fontSize:10,color:C.tx3}}>— {filteredNews.length} stories from {dateF==="all7"?"last 7 days":dateF==="today"?"today":dateF==="yesterday"?"yesterday":dateF==="3d"?"last 3 days":dateF}</span>
          </div>
          {filteredNews.map(ni=>{
            const dc=ni.dir==="Bullish"?C.gn:C.rd;const trend=ni.dir==="Bullish"?"bull":"bear";
            return <div key={ni.id} style={{marginBottom:20,animation:"fadeIn .4s ease both"}}>
              {/* News banner */}
              <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:"12px 12px 0 0",background:`linear-gradient(135deg,${dc}10,transparent)`,border:`1px solid ${dc}22`,borderBottom:"none",flexWrap:"wrap"}}>
                <span style={{...mono,fontSize:9,color:C.cy,fontWeight:600}}>{ni.date||""} {ni.timeStamp||""}</span>
                <span style={{...mono,fontSize:10,padding:"2px 8px",borderRadius:5,background:ni.mins<=60?C.rd+"18":ni.mins<=120?C.gd+"18":C.tx3+"18",color:ni.mins<=60?C.rd:ni.mins<=120?C.gd:C.tx3,fontWeight:700}}>{ni.time}</span>
                <Tag t={(ni.dir==="Bullish"?"▲ ":"▼ ")+ni.dir+" "+ni.prob+"%"} c={dc}/>
                <span style={{fontSize:12,fontWeight:600,flex:1}}>{ni.hl.length>80?ni.hl.slice(0,80)+"...":ni.hl}</span>
                <div style={{display:"flex",gap:4}}>{ni.secs.map(s=><Tag key={s} t={s} c={SEC[s]?.c||C.tx3}/>)}</div>
              </div>
              {/* Impacted stocks grid */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:0,border:`1px solid ${dc}22`,borderRadius:"0 0 12px 12px",overflow:"hidden"}}>
                {ni.cos.map((co,ci2)=>{
                  const sd=DB[co.nm];if(!sd)return null;
                  const capI=CAP_INFO[sd.cap];const sc=SEC[sd.sec]?.c||C.tx3;const bull=co.exp.startsWith("+");const cl=bull?C.gn:C.rd;
                  return <div key={co.nm} onClick={()=>setSelStk(co.nm)} style={{padding:"14px 16px",background:C.bg2,borderRight:ci2<ni.cos.length-1?`1px solid ${C.bd}`:"none",cursor:"pointer",position:"relative",transition:"all .2s"}}>
                    {/* Header row */}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                      <div>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                          <span style={{fontSize:17,fontWeight:800}}>{co.nm}</span>
                          <Tag t={sd.cap} c={capI.c}/>
                          <span style={{...mono,fontSize:14,fontWeight:800,color:cl}}>{co.exp}</span>
                        </div>
                        <div style={{display:"flex",gap:10,alignItems:"center"}}>
                          <span style={{...mono,fontSize:16,fontWeight:800,color:C.cy}}>{sd.cmp}</span>
                          <span style={{fontSize:10,color:C.tx3}}>{sd.mc}</span>
                        </div>
                      </div>
                      <div style={{textAlign:"right"}}>
                        <div style={{...mono,fontSize:10,color:C.tx3}}>Volume after</div>
                        <div style={{...mono,fontSize:13,fontWeight:700,color:C.cy}}>{co.volA}</div>
                      </div>
                    </div>
                    {/* Candle Chart */}
                    <div style={{margin:"6px 0 10px",padding:6,borderRadius:8,background:C.bg,border:`1px solid ${C.bd}`}}>
                      <CandleChart trend={trend} w={310} h={70}/>
                    </div>
                    {/* S/R + Reason */}
                    <div style={{display:"flex",gap:6,marginBottom:8}}>
                      <div style={{flex:1,padding:"5px 8px",borderRadius:6,background:C.gn+"10"}}><div style={{fontSize:7,color:C.tx3}}>SUPPORT</div><div style={{...mono,fontSize:11,fontWeight:700,color:C.gn}}>{sd.sup.lv}</div></div>
                      <div style={{flex:1,padding:"5px 8px",borderRadius:6,background:C.rd+"10"}}><div style={{fontSize:7,color:C.tx3}}>RESISTANCE</div><div style={{...mono,fontSize:11,fontWeight:700,color:C.rd}}>{sd.res.lv}</div></div>
                    </div>
                    <p style={{fontSize:10,color:C.tx2,lineHeight:1.4,padding:"6px 8px",borderRadius:6,background:C.bg,borderLeft:`2px solid ${cl}44`,margin:"0 0 8px"}}>{co.rsn}</p>
                    {/* Post-news buyers */}
                    <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                      {co.pnb.map((b,j)=><Tag key={j} t={b.n+": "+b.a} c={b.a.includes("Bought")?C.gn:C.rd}/>)}
                    </div>
                  </div>;
                })}
              </div>
            </div>;
          })}
        </>}

        {/* Separator */}
        {news.length>0&&<div style={{display:"flex",alignItems:"center",gap:12,margin:"24px 0 16px"}}>
          <div style={{flex:1,height:1,background:C.bd}}/>
          <span style={{fontSize:11,fontWeight:700,color:C.tx3,letterSpacing:1}}>ALL STOCKS</span>
          <div style={{flex:1,height:1,background:C.bd}}/>
        </div>}

        {/* Cap filter */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:16}}>
          {Object.entries(CAP_INFO).map(([cap,info])=><button key={cap} onClick={()=>setCapF(capF===cap?"All":cap)} style={{padding:16,borderRadius:12,textAlign:"left",border:`1px solid ${capF===cap?info.c+"44":C.bd}`,background:capF===cap?info.bg:C.bg2,cursor:"pointer"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:13,fontWeight:700,color:info.c}}>{cap}</span><span style={{...mono,fontSize:20,fontWeight:800}}>{capC[cap]}</span></div>
          </button>)}
        </div>
        {/* Sector filter */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
          {["All",...Object.keys(SEC)].map(n=><button key={n} onClick={()=>setSecF(n==="All"?"All":secF===n?"All":n)} style={{padding:"6px 14px",borderRadius:6,border:`1px solid ${(n==="All"?secF==="All":secF===n)?(n==="All"?C.cy:SEC[n]?.c||C.tx3)+"44":C.bd}`,background:(n==="All"?secF==="All":secF===n)?(n==="All"?C.cy:SEC[n]?.c||"")+"15":"transparent",color:(n==="All"?secF==="All":secF===n)?(n==="All"?C.cy:SEC[n]?.c):C.tx3,fontSize:11,fontWeight:600,cursor:"pointer"}}>{n}</button>)}
        </div>
        {/* Stock grid with candles */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:12}}>
          {filtered.map(([nm,stk],idx)=>{const ci=CAP_INFO[stk.cap];const sc=SEC[stk.sec]?.c||C.tx3;
            const newsHit=filteredNews.find(n=>n.cos.some(c=>c.nm===nm));const nhDir=newsHit?newsHit.dir:null;const nhExp=newsHit?.cos.find(c=>c.nm===nm)?.exp;
            return <div key={nm} onClick={()=>setSelStk(nm)} style={{...bx,cursor:"pointer",animation:`fadeIn ${.1+idx*.03}s ease both`}}>
              <div style={{padding:"16px 18px",position:"relative"}}>
                <div style={{position:"absolute",left:0,top:0,bottom:0,width:3,background:ci.c,opacity:.6}}/>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                      <span style={{fontSize:16,fontWeight:800}}>{nm}</span>
                      <Tag t={stk.cap} c={ci.c}/>
                      {nhDir&&<Tag t={(nhDir==="Bullish"?"▲":"▼")+" "+nhExp} c={nhDir==="Bullish"?C.gn:C.rd}/>}
                    </div>
                    <div style={{display:"flex",gap:10}}>
                      <span style={{...mono,fontSize:18,fontWeight:800,color:C.cy}}>{stk.cmp}</span>
                      <span style={{fontSize:10,color:C.tx3}}>{stk.mc}</span>
                    </div>
                  </div>
                  {newsHit&&<div style={{textAlign:"right"}}><div style={{fontSize:8,color:C.tx3}}>NEWS</div><Tag t={newsHit.secs[0]} c={SEC[newsHit.secs[0]]?.c||C.tx3}/></div>}
                </div>
                {/* Candle chart */}
                <div style={{margin:"4px 0 8px",padding:4,borderRadius:8,background:C.bg,border:`1px solid ${C.bd}`}}>
                  <CandleChart trend={nhDir==="Bullish"?"bull":nhDir==="Bearish"?"bear":"neutral"} w={300} h={60}/>
                </div>
                <div style={{display:"flex",gap:8,marginBottom:8}}>
                  <div style={{flex:1,padding:"5px 8px",borderRadius:6,background:C.gn+"10"}}><div style={{fontSize:7,color:C.tx3}}>SUPPORT</div><div style={{...mono,fontSize:11,fontWeight:700,color:C.gn}}>{stk.sup.lv}</div></div>
                  <div style={{flex:1,padding:"5px 8px",borderRadius:6,background:C.rd+"10"}}><div style={{fontSize:7,color:C.tx3}}>RESISTANCE</div><div style={{...mono,fontSize:11,fontWeight:700,color:C.rd}}>{stk.res.lv}</div></div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:6,fontSize:10}}>
                  <span style={{color:C.tx3}}>Vol:</span><span style={{...mono,color:C.tx2,fontWeight:600}}>{stk.vol}</span>
                  <span style={{color:C.tx3,marginLeft:4}}>Top:</span><span style={{color:C.gd,fontWeight:600}}>{stk.inv[0]?.n} {stk.inv[0]?.s}</span>
                  <span style={{marginLeft:"auto",color:sc,fontWeight:600}}>{stk.sec}</span>
                </div>
              </div>
            </div>})}
        </div>
      </div>}

      {/* ═══ INVEST ADVISOR ═══ */}
      {view==="invest"&&<div style={{animation:"fadeIn .4s ease both"}}>
        <div style={{...bx,marginBottom:20}}><div style={bxB}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(135deg,${C.gd}22,${C.gn}22)`,fontSize:22}}>💰</div>
            <div><h2 style={{fontSize:20,fontWeight:800,margin:0}}>Smart Investment Advisor</h2><p style={{fontSize:11,color:C.tx3,margin:0}}>AI picks stocks based on news impact, past patterns, volume & investors</p></div>
          </div>
          {!news.length?<div style={{padding:30,textAlign:"center",background:C.gd+"10",borderRadius:12}}><p style={{fontSize:13,color:C.gd,fontWeight:600}}>⚠️ Scan markets first to generate recommendations</p></div>:
          <>
            <div style={{marginBottom:18}}><div style={lbl}>INVESTMENT AMOUNT</div>
              <div style={{position:"relative"}}><span style={{...mono,position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:C.cy,fontWeight:800,fontSize:18}}>₹</span>
              <input type="number" value={invAmt} onChange={e=>setInvAmt(e.target.value)} placeholder="Enter amount..." style={{width:"100%",padding:"16px 16px 16px 38px",borderRadius:10,border:`1px solid ${C.bd2}`,background:C.bg,color:C.tx,fontSize:22,fontWeight:700,...mono}}/></div>
              <div style={{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}}>{[50000,100000,250000,500000,1000000].map(p=><button key={p} onClick={()=>setInvAmt(p+"")} style={{padding:"6px 14px",borderRadius:6,border:`1px solid ${invAmt==p?C.cy+"44":C.bd}`,background:invAmt==p?C.cy+"15":"transparent",color:invAmt==p?C.cy:C.tx3,fontSize:11,fontWeight:600,cursor:"pointer",...mono}}>{fmt(p)}</button>)}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:18}}>
              <div><div style={lbl}>RISK PROFILE</div><div style={{display:"flex",gap:6}}>{["Conservative","Balanced","Aggressive"].map(r=>{const cols={Conservative:C.cy,Balanced:C.gd,Aggressive:C.or};return <button key={r} onClick={()=>setRisk(r)} style={{flex:1,padding:"10px 6px",borderRadius:8,border:`1px solid ${risk===r?cols[r]+"44":C.bd}`,background:risk===r?cols[r]+"15":"transparent",color:risk===r?cols[r]:C.tx3,fontSize:11,fontWeight:700,cursor:"pointer"}}>{r}</button>})}</div></div>
              <div><div style={lbl}>TIME HORIZON</div><div style={{display:"flex",gap:6}}>{["3m","6m","1y"].map(h=><button key={h} onClick={()=>setHz(h)} style={{flex:1,padding:"10px 6px",borderRadius:8,border:`1px solid ${hz===h?C.pu+"44":C.bd}`,background:hz===h?C.pu+"15":"transparent",color:hz===h?C.pu:C.tx3,fontSize:11,fontWeight:700,cursor:"pointer"}}>{hzL[h]}</button>)}</div></div>
            </div>
            <button onClick={computeInv} disabled={computing||!invAmt||parseFloat(invAmt)<1000} style={{width:"100%",padding:14,borderRadius:10,background:computing?"linear-gradient(90deg,#111822,#1c2840,#111822)":"linear-gradient(135deg,#ffc53d,#e6a800)",backgroundSize:computing?"200% 100%":"100%",animation:computing?"shimmer 1.5s infinite":"none",color:computing?"#fff":C.bg,fontSize:15,fontWeight:800,cursor:computing?"wait":"pointer",boxShadow:computing?"none":"0 4px 20px rgba(255,197,61,.2)",border:"none"}}>{computing?"🧠 Computing portfolio...":"🚀 Generate Investment Plan"}</button>
          </>}
        </div></div>

        {invRes&&<div style={{animation:"fadeIn .4s ease both"}}>
          {/* Summary */}
          <div style={{...bx,marginBottom:16,background:`linear-gradient(135deg,${C.cy}06,${C.gd}04)`}}><div style={bxB}>
            <div style={lbl}>PORTFOLIO SUMMARY • {risk.toUpperCase()} • {hzL[hz].toUpperCase()}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:14}}>
              {[["Invested",fmt(invRes.input),C.tx],["Investable",fmt(invRes.inv),C.cy],["Projected Gain","+"+fmtD(invRes.tG),C.gn],["ROI","+"+invRes.roi+"%",parseFloat(invRes.roi)>15?C.gn:C.gd]].map(([l,v,c])=>
                <div key={l} style={{padding:12,borderRadius:10,background:C.bg2,border:`1px solid ${C.bd}`,textAlign:"center"}}><div style={{fontSize:9,color:C.tx3,marginBottom:4}}>{l}</div><div style={{...mono,fontSize:17,fontWeight:800,color:c}}>{v}</div></div>)}
            </div>
            <div style={{padding:10,borderRadius:8,background:C.or+"08",border:`1px solid ${C.or}15`}}>
              <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:11,fontWeight:700,color:C.or}}>Total Expenses + Tax</span><span style={{...mono,fontSize:13,fontWeight:800,color:C.or}}>{fmtD(invRes.exp.tot+invRes.tT)}</span></div>
            </div>
          </div></div>

          {/* Allocations */}
          <div style={lbl}>🏆 STOCK ALLOCATION</div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {invRes.al.map((a,idx)=>{const ci=CAP_INFO[a.stk.cap];const sc=SEC[a.stk.sec]?.c||C.tx3;
              return <div key={a.nm} style={{...bx,animation:`fadeIn ${.3+idx*.1}s ease both`}}>
                <div style={{padding:"16px 20px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                    <div><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{...mono,fontSize:12,fontWeight:800,color:C.gd,background:C.gd+"15",padding:"2px 8px",borderRadius:4}}>#{idx+1}</span>
                      <span style={{fontSize:18,fontWeight:800,cursor:"pointer"}} onClick={()=>setSelStk(a.nm)}>{a.nm}</span><Tag t={a.stk.cap} c={ci?.c}/><Tag t={a.stk.sec} c={sc}/></div>
                      <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
                        {[["CMP",a.stk.cmp,C.cy],["INVEST",fmt(a.act),C.tx],["SHARES",a.sh,C.pu],["WEIGHT",a.wt+"%",C.gd]].map(([l,v,c])=><div key={l}><div style={{fontSize:8,color:C.tx3}}>{l}</div><div style={{...mono,fontSize:14,fontWeight:700,color:c}}>{v}</div></div>)}
                      </div>
                    </div>
                    <div style={{textAlign:"right"}}><div style={{fontSize:8,color:C.tx3}}>ROI ({hzL[hz]})</div><div style={{...mono,fontSize:22,fontWeight:900,color:parseFloat(a.roi)>15?C.gn:C.gd}}>+{a.roi}%</div><div style={{...mono,fontSize:12,color:C.gn}}>+{fmtD(a.net)}</div></div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                    <div style={{padding:"6px 10px",borderRadius:6,background:C.gn+"10"}}><div style={{fontSize:8,color:C.tx3}}>SUPPORT</div><div style={{...mono,fontSize:12,fontWeight:700,color:C.gn}}>{a.stk.sup.lv}</div></div>
                    <div style={{padding:"6px 10px",borderRadius:6,background:C.rd+"10"}}><div style={{fontSize:8,color:C.tx3}}>RESISTANCE</div><div style={{...mono,fontSize:12,fontWeight:700,color:C.rd}}>{a.stk.res.lv}</div></div>
                    <div style={{padding:"6px 10px",borderRadius:6,background:C.gd+"10"}}><div style={{fontSize:8,color:C.tx3}}>TOP INVESTOR</div><div style={{fontSize:11,fontWeight:700,color:C.gd}}>{a.stk.inv[0]?.n}</div></div>
                  </div>
                  {a.ni&&<div style={{marginTop:10,padding:"8px 12px",borderRadius:8,background:C.cy+"10",border:`1px solid ${C.cy}15`,fontSize:11,color:C.tx2}}><span style={{fontWeight:700,color:C.cy}}>📰 </span>{a.ni.hl}</div>}
                </div>
              </div>})}
          </div>

          {/* Final */}
          <div style={{...bx,marginTop:16,background:`linear-gradient(135deg,${C.gn}06,${C.cy}04)`}}><div style={bxB}>
            <div style={{...lbl,color:C.gn}}>📈 PROJECTED OUTCOME — {hzL[hz].toUpperCase()}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
              {[["You Invest",fmt(invRes.input),C.tx],["Deductions","-"+fmtD(invRes.exp.tot+invRes.tT),C.or],["Net Gain","+"+fmtD(invRes.tG),C.gn],["Portfolio Value",fmt(Math.round(invRes.tI+invRes.tG)),C.cy]].map(([l,v,c])=>
                <div key={l} style={{textAlign:"center",padding:12,borderRadius:10,background:C.bg2,border:`1px solid ${C.bd}`}}><div style={{fontSize:9,color:C.tx3,marginBottom:4}}>{l}</div><div style={{...mono,fontSize:18,fontWeight:800,color:c}}>{v}</div></div>)}
            </div>
            <div style={{marginTop:12,padding:"10px 14px",borderRadius:10,background:C.gd+"10",border:`1px solid ${C.gd}12`,fontSize:11,color:C.tx2,lineHeight:1.6}}>
              💡 <strong style={{color:C.gd}}>AI Summary:</strong> Based on bullish catalysts across {[...new Set(invRes.al.map(a=>a.stk.sec))].join(", ")}, your {fmt(invRes.input)} across {invRes.al.length} stocks projects <strong style={{color:C.gn}}>+{invRes.roi}% ROI</strong> ({fmtD(invRes.tG)} net) over {hzL[hz].toLowerCase()}, after all expenses & tax.
            </div>
          </div></div>
        </div>}
      </div>}

      {/* ═══ PERFORMANCE TRACKER ═══ */}
      {view==="tracker"&&<div style={{animation:"fadeIn .4s ease both"}}>
        {!news.length?<div style={{textAlign:"center",padding:"80px 20px"}}><div style={{fontSize:56,marginBottom:12}}>📈</div><h2 style={{fontSize:24,fontWeight:800,marginBottom:8}}>Performance Tracker</h2><p style={{color:C.tx3,fontSize:13,maxWidth:420,margin:"0 auto"}}>Scan markets first. This panel tracks daily price performance of news-impacted stocks from the day news broke until a reversal event.</p></div>
        :<>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            <div style={{width:12,height:12,borderRadius:"50%",background:C.gn,boxShadow:`0 0 12px ${C.gn}`}}/>
            <span style={{fontSize:15,fontWeight:800}}>News Impact Performance Tracker</span>
            <Tag t="LIVE TRACKING" c={C.gn}/>
          </div>
          {/* Date filter for tracker */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"}}>
            <span style={{fontSize:10,fontWeight:700,color:C.tx3,letterSpacing:1}}>📅 FILTER:</span>
            {dateBtns.map(b=>{const active=dateF===b.k;const cnt=news.filter(b.filter).length;
              return <button key={b.k} onClick={()=>setDateF(b.k)} style={{padding:"6px 14px",borderRadius:8,border:`1px solid ${active?C.cy+"55":C.bd}`,background:active?C.cy+"15":"transparent",color:active?C.cy:C.tx3,fontSize:11,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:5,...mono}}>
                {b.l}<span style={{fontSize:9,padding:"1px 6px",borderRadius:4,background:active?C.cy+"22":C.bd,color:active?C.cy:C.tx3}}>{cnt}</span>
              </button>})}
            <div style={{width:1,height:20,background:C.bd,margin:"0 4px"}}/>
            {uniqueDays.map(d=>{const active=dateF===d;const cnt=news.filter(n=>n.date===d).length;
              return <button key={d} onClick={()=>setDateF(active?"all7":d)} style={{padding:"5px 10px",borderRadius:7,border:`1px solid ${active?C.pu+"55":C.bd}`,background:active?C.pu+"12":"transparent",color:active?C.pu:C.tx3,fontSize:9,fontWeight:600,cursor:"pointer",...mono}}>
                {d.split(",")[0]+", "+d.split(" ")[1]+" "+d.split(" ")[2]}<span style={{marginLeft:4,fontSize:8,color:active?C.pu:C.tx3}}>({cnt})</span>
              </button>})}
          </div>
          <p style={{fontSize:12,color:C.tx2,marginBottom:20,lineHeight:1.5}}>Showing {filteredNews.length} of {news.length} stories. Green phase = momentum holding. Red marker = reversal event. Track how long news impact lasts.</p>

          {filteredNews.map(ni=>{
            const dc=ni.dir==="Bullish"?C.gn:C.rd;const isBull=ni.dir==="Bullish";
            return <div key={ni.id} style={{marginBottom:24,animation:"fadeIn .4s ease both"}}>
              {/* News header */}
              <div style={{display:"flex",alignItems:"center",gap:8,padding:"12px 16px",borderRadius:"14px 14px 0 0",background:`linear-gradient(135deg,${dc}12,transparent)`,border:`1px solid ${dc}22`,borderBottom:"none",flexWrap:"wrap"}}>
                <span style={{...mono,fontSize:9,color:C.cy,fontWeight:600}}>{ni.date||""} {ni.timeStamp||""}</span>
                <Tag t={ni.time} c={ni.mins<=60?C.rd:ni.mins<=120?C.gd:C.tx3}/>
                <Tag t={(isBull?"▲ Bullish ":"▼ Bearish ")+ni.prob+"%"} c={dc}/>
                <span style={{fontSize:13,fontWeight:700,flex:1}}>{ni.hl.length>85?ni.hl.slice(0,85)+"...":ni.hl}</span>
                <span style={{fontSize:10,color:C.tx3}}>{ni.src}</span>
              </div>

              {/* Stocks tracking cards */}
              <div style={{border:`1px solid ${dc}22`,borderRadius:"0 0 14px 14px",overflow:"hidden",background:C.bg2}}>
                {ni.cos.map((co,ci2)=>{
                  const sd=DB[co.nm];if(!sd)return null;
                  const basePrice=parseFloat(sd.cmp.replace(/[₹,]/g,""));
                  const expPct=parseFloat(co.exp);
                  const isUp=co.exp.startsWith("+");

                  // Generate daily tracking data
                  const days=[];let price=basePrice;let phase="momentum";let reversalDay=-1;
                  const momentum=isBull?1:-1;const maxDays=14;
                  const reversalTriggerDay=Math.floor(4+Math.random()*6); // day 4-10
                  const reversalNews=isBull?
                    ["FII selling pressure emerged","Profit booking at resistance","Global risk-off sentiment","Sector rotation to defensives","Weak Q4 guidance from peer"][Math.floor(Math.random()*5)]:
                    ["DII buying at support levels","Govt stimulus announcement","Short covering rally","Oversold bounce triggered","Positive management commentary"][Math.floor(Math.random()*5)];

                  for(let d=0;d<maxDays;d++){
                    const isReversal=d>=reversalTriggerDay;
                    if(d===reversalTriggerDay){phase="reversal";reversalDay=d}
                    let dailyMove;
                    if(d===0) dailyMove=expPct*0.4;
                    else if(phase==="momentum") dailyMove=momentum*(0.3+Math.random()*0.8)+(Math.random()-.5)*.3;
                    else dailyMove=-momentum*(0.2+Math.random()*0.6)+(Math.random()-.5)*.2;
                    price=price*(1+dailyMove/100);
                    const fromBase=((price-basePrice)/basePrice*100).toFixed(2);
                    days.push({day:d,price:+price.toFixed(2),move:+dailyMove.toFixed(2),fromBase:+fromBase,phase:isReversal?"reversal":"momentum"});
                  }

                  const peakDay=days.reduce((best,d)=>isBull?(d.fromBase>best.fromBase?d:best):(d.fromBase<best.fromBase?d:best),days[0]);
                  const currentDay=days[days.length-1];
                  const totalGain=currentDay.fromBase;
                  const peakGain=peakDay.fromBase;

                  // SVG chart
                  const chartW=520,chartH=100,padL=45,padR=10,padT=10,padB=20;
                  const plotW=chartW-padL-padR,plotH=chartH-padT-padB;
                  const allPrices=days.map(d=>d.price);
                  const minP=Math.min(...allPrices)*0.998,maxP=Math.max(...allPrices)*1.002,rngP=maxP-minP||1;
                  const xScale=d=>(padL+(d/13)*plotW);
                  const yScale=p=>(padT+plotH-((p-minP)/rngP)*plotH);

                  return <div key={co.nm} style={{padding:"16px 20px",borderTop:ci2>0?`1px solid ${C.bd}`:"none"}}>
                    {/* Stock header */}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                      <div>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                          <span style={{fontSize:18,fontWeight:800,cursor:"pointer"}} onClick={()=>setSelStk(co.nm)}>{co.nm}</span>
                          <Tag t={sd.cap} c={CAP_INFO[sd.cap]?.c}/>
                          <Tag t={sd.sec} c={SEC[sd.sec]?.c||C.tx3}/>
                        </div>
                        <div style={{display:"flex",gap:14,alignItems:"center"}}>
                          <span style={{fontSize:10,color:C.tx3}}>Entry Price:</span>
                          <span style={{...mono,fontSize:14,fontWeight:700,color:C.cy}}>{sd.cmp}</span>
                          <span style={{fontSize:10,color:C.tx3}}>Expected:</span>
                          <span style={{...mono,fontSize:14,fontWeight:800,color:isUp?C.gn:C.rd}}>{co.exp}</span>
                        </div>
                      </div>
                      <div style={{display:"flex",gap:10}}>
                        <div style={{textAlign:"center",padding:"8px 14px",borderRadius:10,background:C.bg,border:`1px solid ${C.bd}`}}>
                          <div style={{fontSize:8,color:C.tx3}}>PEAK</div>
                          <div style={{...mono,fontSize:16,fontWeight:800,color:isBull?C.gn:C.rd}}>{peakGain>0?"+":""}{peakGain}%</div>
                          <div style={{fontSize:8,color:C.tx3}}>Day {peakDay.day+1}</div>
                        </div>
                        <div style={{textAlign:"center",padding:"8px 14px",borderRadius:10,background:C.bg,border:`1px solid ${C.bd}`}}>
                          <div style={{fontSize:8,color:C.tx3}}>CURRENT</div>
                          <div style={{...mono,fontSize:16,fontWeight:800,color:totalGain>=0?C.gn:C.rd}}>{totalGain>0?"+":""}{totalGain}%</div>
                          <div style={{fontSize:8,color:C.tx3}}>Day {maxDays}</div>
                        </div>
                        <div style={{textAlign:"center",padding:"8px 14px",borderRadius:10,background:reversalDay>=0?C.rd+"10":C.gn+"10",border:`1px solid ${reversalDay>=0?C.rd+"22":C.gn+"22"}`}}>
                          <div style={{fontSize:8,color:C.tx3}}>STATUS</div>
                          <div style={{fontSize:12,fontWeight:800,color:reversalDay>=0?C.rd:C.gn}}>{reversalDay>=0?"⚠ Reversed":"✓ Holding"}</div>
                          <div style={{fontSize:8,color:C.tx3}}>{reversalDay>=0?"Day "+(reversalDay+1):""}</div>
                        </div>
                      </div>
                    </div>

                    {/* Price chart SVG */}
                    <div style={{padding:8,borderRadius:10,background:C.bg,border:`1px solid ${C.bd}`,marginBottom:12}}>
                      <svg width={chartW} height={chartH} style={{display:"block",width:"100%",height:"auto"}} viewBox={`0 0 ${chartW} ${chartH}`}>
                        {/* Grid lines */}
                        {[0,.25,.5,.75,1].map(p=>{const y=padT+plotH*(1-p);return <g key={p}><line x1={padL} y1={y} x2={chartW-padR} y2={y} stroke={C.bd} strokeWidth={.5} strokeDasharray="3 3"/><text x={padL-4} y={y+3} textAnchor="end" fill={C.tx3} fontSize={7} fontFamily="monospace">{(minP+rngP*p).toFixed(0)}</text></g>})}
                        {/* Base price line */}
                        <line x1={padL} y1={yScale(basePrice)} x2={chartW-padR} y2={yScale(basePrice)} stroke={C.cy} strokeWidth={1} strokeDasharray="4 3" opacity={.5}/>
                        <text x={padL+2} y={yScale(basePrice)-4} fill={C.cy} fontSize={7} fontFamily="monospace">Entry {sd.cmp}</text>
                        {/* Momentum phase fill */}
                        {reversalDay>0&&<rect x={padL} y={padT} width={xScale(reversalDay)-padL} height={plotH} fill={isBull?C.gn:C.rd} opacity={.03} rx={4}/>}
                        {/* Reversal phase fill */}
                        {reversalDay>=0&&<rect x={xScale(reversalDay)} y={padT} width={chartW-padR-xScale(reversalDay)} height={plotH} fill={isBull?C.rd:C.gn} opacity={.05} rx={4}/>}
                        {/* Reversal marker */}
                        {reversalDay>=0&&<>
                          <line x1={xScale(reversalDay)} y1={padT} x2={xScale(reversalDay)} y2={padT+plotH} stroke={C.rd} strokeWidth={1.5} strokeDasharray="4 2"/>
                          <circle cx={xScale(reversalDay)} cy={padT+4} r={4} fill={C.rd}/>
                          <text x={xScale(reversalDay)+6} y={padT+8} fill={C.rd} fontSize={7} fontFamily="monospace">⚠ Reversal</text>
                        </>}
                        {/* Price line - momentum */}
                        <polyline points={days.filter(d=>d.day<=reversalDay||reversalDay<0).map(d=>`${xScale(d.day)},${yScale(d.price)}`).join(" ")} fill="none" stroke={isBull?C.gn:C.rd} strokeWidth={2}/>
                        {/* Price line - reversal */}
                        {reversalDay>=0&&<polyline points={days.filter(d=>d.day>=reversalDay).map(d=>`${xScale(d.day)},${yScale(d.price)}`).join(" ")} fill="none" stroke={isBull?C.rd:C.gn} strokeWidth={2} strokeDasharray="4 2"/>}
                        {/* Day dots */}
                        {days.map(d=><g key={d.day}>
                          <circle cx={xScale(d.day)} cy={yScale(d.price)} r={3} fill={d.phase==="momentum"?(isBull?C.gn:C.rd):(isBull?C.rd:C.gn)} stroke={C.bg} strokeWidth={1}/>
                          <text x={xScale(d.day)} y={padT+plotH+14} textAnchor="middle" fill={C.tx3} fontSize={6} fontFamily="monospace">D{d.day+1}</text>
                        </g>)}
                        {/* Peak marker */}
                        <circle cx={xScale(peakDay.day)} cy={yScale(peakDay.price)} r={5} fill="none" stroke={C.gd} strokeWidth={1.5}/>
                        <text x={xScale(peakDay.day)} y={yScale(peakDay.price)-8} textAnchor="middle" fill={C.gd} fontSize={7} fontFamily="monospace" fontWeight="bold">Peak</text>
                      </svg>
                    </div>

                    {/* Daily breakdown table */}
                    <div style={{marginBottom:10}}>
                      <div style={lbl}>DAY-BY-DAY PRICE TRACKER</div>
                      <div style={{display:"flex",gap:4,overflowX:"auto",paddingBottom:6}}>
                        {days.map(d=>{
                          const isRev=d.day===reversalDay;const clr=d.phase==="momentum"?(isBull?C.gn:C.rd):(isBull?C.rd:C.gn);
                          return <div key={d.day} style={{minWidth:62,padding:"8px 6px",borderRadius:8,background:isRev?C.rd+"15":C.bg,border:`1px solid ${isRev?C.rd+"44":C.bd}`,textAlign:"center",flexShrink:0}}>
                            <div style={{fontSize:8,fontWeight:700,color:isRev?C.rd:C.tx3}}>{isRev?"⚠ D"+(d.day+1):"Day "+(d.day+1)}</div>
                            <div style={{...mono,fontSize:12,fontWeight:700,color:C.tx,margin:"3px 0"}}>₹{d.price.toLocaleString("en-IN")}</div>
                            <div style={{...mono,fontSize:10,fontWeight:700,color:clr}}>{d.move>0?"+":""}{d.move}%</div>
                            <div style={{...mono,fontSize:9,color:d.fromBase>=0?C.gn:C.rd,marginTop:2}}>{d.fromBase>0?"+":""}{d.fromBase}%</div>
                          </div>;
                        })}
                      </div>
                    </div>

                    {/* Reversal event */}
                    {reversalDay>=0&&<div style={{padding:"10px 14px",borderRadius:10,background:C.rd+"08",border:`1px solid ${C.rd}18`,marginBottom:8}}>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        <span style={{fontSize:14}}>⚠️</span>
                        <div>
                          <div style={{fontSize:11,fontWeight:700,color:C.rd}}>REVERSAL EVENT — Day {reversalDay+1}</div>
                          <div style={{fontSize:11,color:C.tx2,marginTop:2}}>{reversalNews}</div>
                        </div>
                        <div style={{marginLeft:"auto",...mono,fontSize:13,fontWeight:800,color:C.rd}}>
                          {isBull?"Bearish":"Bullish"} reversal
                        </div>
                      </div>
                    </div>}

                    {/* Post-news investors */}
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      <span style={{fontSize:10,color:C.tx3,lineHeight:"22px"}}>Post-news:</span>
                      {co.pnb.map((b,j)=><Tag key={j} t={b.n+": "+b.a} c={b.a.includes("Bought")?C.gn:C.rd}/>)}
                    </div>
                  </div>;
                })}
              </div>
            </div>;
          })}

          {/* Summary card */}
          <div style={{...bx,marginTop:8,background:`linear-gradient(135deg,${C.cy}06,${C.pu}04)`}}>
            <div style={bxB}>
              <div style={{...lbl,color:C.cy}}>📊 OVERALL TRACKING SUMMARY</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>
                {filteredNews.flatMap(ni=>ni.cos.map(co=>{
                  const sd=DB[co.nm];if(!sd)return null;
                  const bp=parseFloat(sd.cmp.replace(/[₹,]/g,""));const ep=parseFloat(co.exp);
                  const actualPct=(ep*0.4+((Math.random()*2-0.5)*ep*0.3));const exceeded=Math.abs(actualPct)>Math.abs(ep);
                  return <div key={co.nm} style={{padding:"10px 14px",borderRadius:10,background:C.bg,border:`1px solid ${C.bd}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div><div style={{fontSize:13,fontWeight:700}}>{co.nm}</div><div style={{fontSize:10,color:C.tx3}}>Expected: <span style={{...mono,color:ep>=0?C.gn:C.rd,fontWeight:700}}>{co.exp}</span></div></div>
                    <div style={{textAlign:"right"}}>
                      <div style={{...mono,fontSize:15,fontWeight:800,color:actualPct>=0?C.gn:C.rd}}>{actualPct>0?"+":""}{actualPct.toFixed(1)}%</div>
                      <Tag t={exceeded?"Beat ✓":"In Progress"} c={exceeded?C.gn:C.gd}/>
                    </div>
                  </div>;
                })).filter(Boolean)}
              </div>
              <div style={{marginTop:12,padding:"10px 14px",borderRadius:10,background:C.gd+"10",border:`1px solid ${C.gd}15`,fontSize:11,color:C.tx2,lineHeight:1.5}}>
                💡 <strong style={{color:C.gd}}>How to read:</strong> Green line = price momentum in direction of news impact. Dashed red line = reversal phase after counter-event. Gold circle = peak price achieved. The day-by-day tracker shows cumulative return from entry. Watch for ⚠ reversal markers — that's your signal to reassess positions.
              </div>
            </div>
          </div>
        </>}
      </div>}

      {/* Footer */}
      <div style={{marginTop:40,padding:"16px 0",borderTop:`1px solid ${C.bd}`,textAlign:"center"}}>
        <p style={{fontSize:10,color:C.tx3}}>⚠️ Educational only. Not financial advice. Data is illustrative. Consult SEBI-registered advisor.</p>
      </div>
    </div>

    {/* Stock Modal */}
    {selStk&&DB[selStk]&&<div onClick={()=>setSelStk(null)} style={{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.75)",backdropFilter:"blur(12px)"}}>
      <div onClick={e=>e.stopPropagation()} style={{width:"min(660px,94vw)",maxHeight:"88vh",overflowY:"auto",background:C.bg2,border:`1px solid ${C.bd2}`,borderRadius:18,animation:"fadeIn .3s ease both"}}>
        {(()=>{const stk=DB[selStk];const ci=CAP_INFO[stk.cap];const tC={Promoter:C.cy,Founder:C.cy,FII:C.pu,MF:C.gd,DII:C.gn,HNI:C.or,PE:C.gd,Strategic:C.tx2};
          return <>
            <div style={{padding:"20px 24px",borderBottom:`1px solid ${C.bd}`,background:`linear-gradient(135deg,${ci.bg},transparent)`,display:"flex",justifyContent:"space-between"}}>
              <div><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}><span style={{fontSize:22,fontWeight:800}}>{selStk}</span><Tag t={stk.cap} c={ci.c}/></div>
                <div style={{display:"flex",gap:16,flexWrap:"wrap",fontSize:11,color:C.tx3}}>
                  <span>MCap: <span style={{color:C.tx2,fontWeight:600}}>{stk.mc}</span></span>
                  <span>CMP: <span style={{...mono,color:C.cy,fontWeight:700}}>{stk.cmp}</span></span>
                  <span>Vol: <span style={{...mono,color:C.tx2,fontWeight:600}}>{stk.vol}</span></span>
                </div></div>
              <button onClick={()=>setSelStk(null)} style={{width:32,height:32,borderRadius:8,border:`1px solid ${C.bd}`,background:C.bg,color:C.tx3,fontSize:16,cursor:"pointer"}}>✕</button>
            </div>
            <div style={{padding:24,display:"flex",flexDirection:"column",gap:16}}>
              <div style={{padding:"12px 16px",borderRadius:10,background:C.gn+"10",border:`1px solid ${C.gn}18`,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
                <div><span style={{fontSize:9,color:C.tx3}}>SUPPORT</span><div style={{...mono,fontSize:18,fontWeight:800,color:C.gn}}>{stk.sup.lv}</div></div>
                <div><span style={{fontSize:9,color:C.tx3}}>{stk.sup.tp}</span></div>
              </div>
              <div style={{padding:"12px 16px",borderRadius:10,background:C.rd+"10",border:`1px solid ${C.rd}18`,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
                <div><span style={{fontSize:9,color:C.tx3}}>RESISTANCE</span><div style={{...mono,fontSize:18,fontWeight:800,color:C.rd}}>{stk.res.lv}</div></div>
                <div><span style={{fontSize:9,color:C.tx3}}>{stk.res.tp}</span></div>
              </div>
              <div><div style={lbl}>👤 TOP INVESTORS</div>
                {stk.inv.map((inv,i)=>{const c=tC[inv.t]||C.tx3;
                  return <div key={i} style={{padding:"12px 16px",borderRadius:10,background:C.bg,border:`1px solid ${C.bd}`,marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <div style={{width:36,height:36,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",background:c+"15",color:c,fontSize:14,fontWeight:800}}>{inv.n.charAt(0)}</div>
                      <div><div style={{fontSize:13,fontWeight:700}}>{inv.n}</div><Tag t={inv.t} c={c}/></div>
                    </div>
                    <span style={{...mono,fontSize:16,fontWeight:800,color:c}}>{inv.s}</span>
                  </div>})}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
                {[["3M",stk.h["3m"]+"%",C.gn],["6M",stk.h["6m"]+"%",C.cy],["1Y",stk.h["1y"]+"%",C.gd]].map(([l,v,c])=>
                  <div key={l} style={{textAlign:"center",padding:12,borderRadius:10,background:C.bg,border:`1px solid ${C.bd}`}}><div style={{fontSize:9,color:C.tx3}}>{l} Return</div><div style={{...mono,fontSize:18,fontWeight:800,color:c,marginTop:4}}>+{v}</div></div>)}
              </div>
            </div>
          </>})()}
      </div>
    </div>}
  </div>;
}
