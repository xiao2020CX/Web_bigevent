// 注意 ：每次调用 $.get() 或者 $.post() 或者 $.ajax()  的时候
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax 提供的配置对象
$.ajaxPrefilter(function(option){
  option.url='http://ajax.frontend.itheima.net'+option.url
})