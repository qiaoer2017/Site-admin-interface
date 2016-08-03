/**
 * Created by qiaoer on 16/8/3.
 */
$(function () {
    var tip = $("#tip");
    $("input[type='submit']").click(function () {
        var userName = $.trim($("input[name='userName']").val());
        var password = $.trim($("input[name='password']").val());
        var verify = $.trim($("input[name='verify']").val());
        if ('' == userName) {
            tip.text("用户名不能为空");
            return;
        }
        if ('' == password) {
            tip.text("密码不能为空");
            return;
        }
        if ('' == verify) {
            tip.text("验证码不能为空");
            return;
        }
        tip.text("登录成功!");
    });
});