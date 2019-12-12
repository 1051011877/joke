

function a(a){

		var name = document.getElementById("text").value;
		//alert(a);
		var e=[34,77,22,45,1,3,5,7];
		e.unshift("16");
		//冒泡排序
//  		for(var i=0;i<e.length;i++){
//			for(var j=0;j<(e.length-i-1);j++){
//				if (e[j] > e[j+1]) {        //相邻元素两两对比
//                	var temp = e[j+1];        //元素交换
//            	    e[j+1] = e[j];   			//j+1在前面说明把j+1改成了j
//        	        e[j] = temp;
//            }
//			}
//		}
		alert(e);
}


