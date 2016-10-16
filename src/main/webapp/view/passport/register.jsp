<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2016/9/28
  Time: 21:48
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":" +request.getServerPort() +"/"+path;
    request.setAttribute("basePath",basePath);
%>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Just_web注册</title>
    <link rel="icon" href="/images/python.png" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="/css/passport.css"/>
    <script src="/js/jquery2.4/jquery.js"></script>
    <script src="/js/verify.js"></script>
</head>


<body>
<div class="passport-wrapper">
 <%--   <header id="header" class="passport-header">
        <div id="logo"><a href="http://doublesharejust.com.cn" jktag="0001|0.1|91006"><img src="/images/logo.png"/></a></div>
    </header>	<!--feg-box-- -->--%>
    <script src="/js/sign.js"></script>
    <script src="/js/setcookie.js"></script>
    <div id="container">
        <div class="passport-sign">
            <div class="main-form">
                <h2>新用户注册</h2>
                <p></p>
                <!-- form -->
                <form class="passport-form passport-form-sign" id="register-form" action="/passport/submit_reg_phone" method="post">
                    <input type='hidden' value='http://doubleshare.com.cn' name='referer'/>
                    <div class="form-item">
                        <div class="form-cont">
                            <input type="text" name="phone" class="passport-txt xl w-full" tabindex="1" autocomplete="off" placeholder="请输入手机号" />
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="form-cont">
                            <input type="password" name="password" class="passport-txt xl w-full" tabindex="2" autocomplete="off" placeholder="输入6~32位密码" />
                            <ul class="passport-safely" id="safely">
                                <li class="danger">弱</li>
                                <li class="general">中</li>
                                <li class="safe">高</li>
                            </ul>
                        </div>
                    </div>
                   <div class="form-item form-imgcode">
                        <div class="form-cont">
                            <div class="layout-inner">
                                <input type="text" name="verify" class="passport-txt xl w-lg" tabindex="3" autocomplete="off" placeholder="验证码" />
                            </div>
                            <div class="imgcode">
                                <img src="/check/getVerifyCode" alt='验证码'  class="verifyCode" jktag="0001|0.1|91023" />
                                <i class="passport-icon icon-refresh refreshCode" jktag="0001|0.1|91023"></i>
                            </div>
                        </div>
                    </div>
                    <div class="form-item form-mcode mb-25">
                        <div class="form-cont">
                            <input type="text" name="verify_code" class="passport-txt xl w-full" tabindex="4" autocomplete="off" placeholder="动态码" />
                            <div class="btn-getcode">
                                <button type="button" class="passport-btn js-getcode" jktag="0001|0.1|91024">获取动态码</button>
                            </div>
                            <div class="passport-sms getVoice" style="display: none;">未收到短信？使用<a href="javascript:;" class="js-getvoice" jktag="0001|0.1|91044">语音动态码</a></div>
                            <div class="passport-sms reVoice" style="display: none;"><span class="js-revoice"></span>，请注意接听来电</div>
                        </div>
                    </div>
                    <div class="form-item form-treaty">
                        <div class="form-cont">
                            <input type="checkbox" name="treaty" checked="checked" value="treaty"/>
                            <span>同意</span><a href="/view/help/service.jsp" target="_blank" class="treaty">用户协议</a>
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="form-cont">
                            <button type="button" name="register" id="register" class="passport-btn passport-btn-def xl w-full" tabindex="5" jktag="0001|0.1|91026" href="javascript:;">注册</button>
                        </div>
                    </div>
                </form>
                <!-- form end -->
            </div>
            <div class="aside">
                <div class="passport-goto mg-b100">已有帐号 <a href="/passport/to_login" tabindex="6" jktag="0001|0.1|91040">直接登录</a></div>
                <div class="passport-third">
                    <header class="hd">
                        <div class="layout-inner">
                            <h3>合作方帐号登录</h3>
                        </div>
                    </header>
                    <div class="links">
                        <a href="/connect/qq" jktag="0001|0.1|91053"><i class="passport-icon icon-tencent"></i></a>
                        <a href="/connect/weibo" jktag="0001|0.1|91054"><i class="passport-icon icon-weibo"></i></a>
                        <a href="/connect/weixin" jktag="0001|0.1|91055"><i class="passport-icon icon-weixin"></i></a>
                        <a href="/connect/eoe" jktag="0001|0.1|91056"><i class="passport-icon icon-eoe"></i></a>
                    </div>
                </div>
                <div class="passport-ad" id="reg-ad01"></div>
            </div>
        </div>
    </div>
</div>
<!-- wrapper end -->
<script type="text/javascript">
    var _Sjkxy = [];
    _Sjkxy['jPro'] = 'passport';
    _Sjkxy['params'] = {posId:910003, po:77000};
</script>
<script type="text/javascript" src="http://cbjs.baidu.com/js/m.js"></script>
<script type="text/javascript">
    BAIDU_CLB_fillSlotAsync('1170455', 'reg-ad01');
</script>
<!--feg-box end-->
<script type="text/javascript" src='http://e.jikexueyuan.com/static/js/growingio.js'></script>
</body>
</html>
