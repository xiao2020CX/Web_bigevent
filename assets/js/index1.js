$(function(){
    getUserInfo()
})

function getUserInfo() {
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        // headers 就是请求头配置的对象
        headers:{
            Authorization:localStorage.getItem('token') || ''
        },
        success:function(res){
            console.log(res);
        }
    })
}