// 将其它文件的字符输入到当前页面的方法,来自StackOverflow, 感谢🙇‍大佬
function printFile(file){
	var rawFile=new XMLHttpRequest();
	rawFile.open("GET",file,false);
	rawFile.send(null);
	return rawFile.responseText;
}