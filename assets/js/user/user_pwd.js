$(function () {
    var form = layui.form

    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd: function (value) {
            if (value === $('[name=oldPwd]').val()) {
                return '新旧密码不能相同！'
            }
        },
        rePwd: function (value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码不一致'
            }
        }
    })
})
$('.layui-form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url: '/my/updatepwd',
        data: $(this).serialize(),
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('更新密码失败！')
            }
            layui.layer.msg('更新密码成功')
            // 重置表单   reset只能是在原生的DOM和BOM来进行调用
            // 使用jquery无法调用需要在后面加[0]转化为 原生的DOM 来使用reset方法
            $('.layui-form')[0].reset()
        }
    })
})
// [0]将jQuery对象转换成原生的js对象 然后利用DOM属性reset重置表单
// $('.layui-form')[0].reset()