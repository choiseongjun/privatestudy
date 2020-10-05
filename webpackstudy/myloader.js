module.exports =function myloader(content){
    console.log('\n\n\myloader가 동작함',content)
    return content.replace('console.log(','alert(')
};