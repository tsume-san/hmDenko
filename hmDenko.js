/*
 * hmDenko
 *
 * powered by tsumesan
 * copyright 2015 hogemix laboratory all rights reserved.
 *
 */
function hmDenko(){

	var denkoCharArr = [];
	denkoCharArr["a"] = ["00000","00110","00001","01111","11111"];
	denkoCharArr["b"] = ["10000","10000","11110","10001","11111"];
	denkoCharArr["c"] = ["00000","01111","10000","10000","01111"];
	denkoCharArr["d"] = ["00001","00001","01111","10001","11111"];
	denkoCharArr["e"] = ["00000","01110","11111","10000","01110"];
	denkoCharArr["f"] = ["00110","00100","11111","00100","00100"];
	denkoCharArr["g"] = ["00000","01111","11111","00001","11110"];
	denkoCharArr["h"] = ["10000","10000","11110","10001","10001"];
	denkoCharArr["i"] = ["00100","00000","01100","00100","01110"];
	denkoCharArr["j"] = ["00100","00000","00100","00100","01000"];
	denkoCharArr["k"] = ["10000","10010","10100","11010","10001"];
	denkoCharArr["l"] = ["01100","00100","00100","00100","00110"];
	denkoCharArr["m"] = ["00000","11010","10101","10101","10101"];
	denkoCharArr["n"] = ["00000","11110","10001","10001","10001"];
	denkoCharArr["o"] = ["00000","01110","10001","10001","01110"];
	denkoCharArr["p"] = ["00000","01110","10001","11110","10000"];
	denkoCharArr["q"] = ["00000","01110","10001","01111","00001"];
	denkoCharArr["r"] = ["00000","01000","01011","01100","01000"];
	denkoCharArr["s"] = ["00000","00111","01110","00001","01110"];
	denkoCharArr["t"] = ["00100","01110","00100","00100","00111"];
	denkoCharArr["u"] = ["00000","10001","10001","10001","01111"];
	denkoCharArr["v"] = ["00000","10001","10001","01010","00100"];
	denkoCharArr["w"] = ["00000","10001","10101","10101","01010"];
	denkoCharArr["x"] = ["00000","11001","00110","01100","10011"];
	denkoCharArr["y"] = ["00000","10001","01010","00100","01000"];
	denkoCharArr["z"] = ["00000","11110","00100","01000","11111"];
	denkoCharArr["A"] = ["11111","10001","11111","10001","10001"];
	denkoCharArr["B"] = ["11110","10001","11110","10001","11111"];
	denkoCharArr["C"] = ["01110","10001","10000","10001","01110"];
	denkoCharArr["D"] = ["11110","10001","10001","10001","11111"];
	denkoCharArr["E"] = ["11111","10000","11111","10000","11111"];
	denkoCharArr["F"] = ["11111","10000","11111","10000","10000"];
	denkoCharArr["G"] = ["11111","10000","10111","10001","11111"];
	denkoCharArr["H"] = ["10001","10001","11111","10001","10001"];
	denkoCharArr["I"] = ["11111","00100","00100","00100","11111"];
	denkoCharArr["J"] = ["11111","00100","00100","00100","11100"];
	denkoCharArr["K"] = ["10001","10010","10100","11010","10001"];
	denkoCharArr["L"] = ["10000","10000","10000","10000","11111"];
	denkoCharArr["M"] = ["11011","10101","10001","10001","10001"];
	denkoCharArr["N"] = ["10001","11001","10101","10011","10001"];
	denkoCharArr["O"] = ["01110","10001","10001","10001","01110"];
	denkoCharArr["P"] = ["11111","10001","11111","10000","10000"];
	denkoCharArr["Q"] = ["01110","10001","10101","10011","01111"];
	denkoCharArr["R"] = ["11111","10001","11111","10010","10001"];
	denkoCharArr["S"] = ["01111","10000","01110","00001","11110"];
	denkoCharArr["T"] = ["11111","00100","00100","00100","00100"];
	denkoCharArr["U"] = ["10001","10001","10001","10001","11111"];
	denkoCharArr["V"] = ["10001","10001","01010","01010","00100"];
	denkoCharArr["W"] = ["10001","10001","10001","10101","11011"];
	denkoCharArr["X"] = ["10001","01010","00100","01010","10001"];
	denkoCharArr["Y"] = ["10001","01010","00100","00100","00100"];
	denkoCharArr["Z"] = ["11111","00010","00100","01000","11111"];
	denkoCharArr["0"] = ["11111","10001","10001","10001","11111"];
	denkoCharArr["1"] = ["11100","00100","00100","00100","11111"];
	denkoCharArr["2"] = ["11111","00001","11111","10000","11111"];
	denkoCharArr["3"] = ["11111","00001","11111","00001","11111"];
	denkoCharArr["4"] = ["10001","10001","11111","00001","00001"];
	denkoCharArr["5"] = ["11111","10000","11111","00001","11111"];
	denkoCharArr["6"] = ["11111","10000","11111","10001","11111"];
	denkoCharArr["7"] = ["11111","00001","00001","00001","00001"];
	denkoCharArr["8"] = ["11111","10001","11111","10001","11111"];
	denkoCharArr["9"] = ["11111","10001","11111","00001","11111"];
	denkoCharArr[" "] = ["00000","00000","00000","00000","00000"];
	denkoCharArr["_"] = ["00000","00000","00000","00000","11111"];
	denkoCharArr["|"] = ["00100","00100","00100","00100","00100"];
	denkoCharArr["!"] = ["00100","00100","00100","00000","00100"];
	denkoCharArr["?"] = ["11110","00001","00110","00000","00100"];
	denkoCharArr["@"] = ["01110","10011","10101","10111","01000"];
	denkoCharArr["+"] = ["00100","00100","11111","00100","00100"];
	denkoCharArr["-"] = ["00000","00000","11111","00000","00000"];
	denkoCharArr["/"] = ["00001","00010","00100","01000","10000"];
	denkoCharArr["\\"] = ["10000","01000","00100","00010","00001"];
	denkoCharArr["*"] = ["10001","01010","11111","01010","10001"];
	denkoCharArr["="] = ["00000","11111","00000","11111","00000"];
	denkoCharArr["%"] = ["11001","11010","00100","01011","10011"];
	denkoCharArr["#"] = ["01010","11111","01010","11111","01010"];
	denkoCharArr[":"] = ["00000","00100","00000","00100","00000"];
	denkoCharArr[";"] = ["00000","00100","00000","00100","00100"];
	denkoCharArr["."] = ["00000","00000","00000","00000","00100"];
	denkoCharArr[","] = ["00000","00000","00000","01000","00100"];
	denkoCharArr["("] = ["00010","00100","00100","00100","00010"];
	denkoCharArr[")"] = ["01000","00100","00100","00100","01000"];
	denkoCharArr["["] = ["00110","00100","00100","00100","00110"];
	denkoCharArr["]"] = ["01100","00100","00100","00100","01100"];
	denkoCharArr["{"] = ["00110","00100","01100","00100","00110"];
	denkoCharArr["}"] = ["01100","00100","00110","00100","01100"];
	denkoCharArr["<"] = ["00010","00100","01000","00100","00010"];
	denkoCharArr[">"] = ["01000","00100","00010","00100","01000"];
	denkoCharArr["\""] = ["10100","10100","00000","00000","00000"];
	denkoCharArr["'"] = ["01000","01000","00000","00000","00000"];
	denkoCharArr["`"] = ["01000","00100","00000","00000","00000"];
	denkoCharArr["$"] = ["01111","10100","01110","00101","11110"];
	denkoCharArr["&"] = ["01100","10010","01000","10101","01110"];
	denkoCharArr["^"] = ["00100","01010","00000","00000","00000"];
	denkoCharArr["~"] = ["00101","01010","00000","00000","00000"];

	this.str;
	this.margin;
	this.fillElem;
	this.spaceElem;
	this.parentElem;
	this.colLenLimit;
	this.leed;
	this.resultSave;
	this.strSave; 

	hmDenko.prototype.lightUp = function(){

		const OMAJINAI     = 5;
		var resultBit      = [];
		var resultTmp      = [];
		var result         = [];
		var parentElemEnd  = "";

		if(this.strSave != this.str){

			this.strSave = this.str;
			for(i=0; i<this.str.length; i++){
				for(j=0; j<OMAJINAI; j++){
					if(i == 0){
						resultBit[j] = "";
					}
					if(null == this.str.charAt(i).match(/([a-z]|[A-Z]|[0-9]|[ -/:-@\[-\`\{-\~])/)){
						var tmpChar = "?";
					}else{
						var tmpChar = this.str.charAt(i);
					}
					resultBit[j] += denkoCharArr[tmpChar][j];
					for(l=0; l<this.margin; l++){
						resultBit[j] += "0";
					}
				}
			}

			if(resultBit[0].length < this.colLenLimit){
				var paddingLen = this.colLenLimit - resultBit[0].length
				for(i=0; i<OMAJINAI; i++){
					for(j=0; j<paddingLen; j++){
						resultBit[i] += 0;
					}
				}
			}

			this.resultSave = resultBit;
		}

		if(this.leed != 0){
			for(i=0; i<OMAJINAI; i++){
				if(this.leed > 0){
					var moveStr = this.resultSave[i].substr(0, this.leed);
					var stayStr = this.resultSave[i].substr(this.leed - this.resultSave[i].length);
					this.resultSave[i] = stayStr + moveStr;
				}else if(this.leed < 0){
					var stayStr = this.resultSave[i].substr(0, (this.resultSave[i].length + this.leed));
					var moveStr = moveStr = this.resultSave[i].substr(this.leed);
					this.resultSave[i] = moveStr + stayStr;
				}
			}
		}

		if(this.resultSave[0].length > this.colLenLimit){
			for(i=0; i<OMAJINAI; i++){
				resultTmp[i] = this.resultSave[i].substr(0, (this.colLenLimit));
			}
		}else{
			resultTmp = this.resultSave;
		}

		if(this.parentElem != "" || this.parentElem != "undefined"){
			parentElemEnd = (this.parentElem.match(/^<.* /)[0].trim()+">").replace("<","</");
		}else{
			parentElemEnd = "";
		}

		for(i=0; i<OMAJINAI; i++){
			result[i] = this.parentElem;
			for(j=0; j<this.colLenLimit; j++){
				switch(resultTmp[i].charAt(j)){
					case "0":
						result[i] += this.spaceElem;
						break;
					case "1":
						result[i] += this.fillElem;
						break;
				}
			}
			result[i] += parentElemEnd;
		}

		return result;
	}
}
