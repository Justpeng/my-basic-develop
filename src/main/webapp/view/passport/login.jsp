<%--
  Created by IntelliJ IDEA.
  User: sysware.com
  Date: 2016/9/28
  Time: 14:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Just_web_login</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="/css/passport.css"/>
    <script src="/js/jquery2.4/jquery.js"></script>
    <script src="/js/verify.js"></script>
</head>

<body>
<div class="passport-wrapper">
    <%--<header id="header" class="passport-header">
        <div id="logo"><a href="http://doubleshare.com.cn" jktag="0001|0.1|91006"><img src="/images/logo.png"/></a></div>
    </header>	<!--feg-box-- -->--%>
    <script src="/js/sign.js"></script>
    <script src="/js/setcookie.js"></script>
    <div id="container">
        <div class="passport-sign">
            <div class="main-form main-form-sign">
                <div class="passport-tab" id="login-tabs">
                    <div class="tabs">
                        <ul>
                            <li class="active" jktag="0001|0.1|91004">登录</li>
                            <li jktag="0001|0.1|91001">手机动态码登录</li>
                        </ul>
                    </div>
                    <div class="tabbed">
                        <!-- tab-group -->
                        <div class="tab-group" style="display: block;">
                            <!-- form -->
                            <form class="passport-form passport-form-sign" id="login-form" action="/passport/login"
                                  method="post">
                                <input type='hidden' value='7' name='expire'/>
                                <input type='hidden' value='/passport/reg_phone' name='referer'/>

                                <div class="form-item">
                                    <div class="form-cont">
                                        <input type="text" name="uname" class="passport-txt xl w-full"
                                               tabindex="1" placeholder="手机 / 用户名 / 邮箱" />
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="form-cont">
                                        <input type="password" name="password" class="passport-txt xl w-full"
                                               tabindex="2" placeholder="输入6~32位密码" />
                                    </div>
                                </div>
                             <%--   <div class="form-item form-imgcode mb-25">
                                    <div class="form-cont">
                                        <div class="layout-inner">
                                            <input type="text" name="verify" class="passport-txt xl w-lg"
                                                   tabindex="3" placeholder="验证码" />
                                        </div>
                                        <div class="imgcode">
                                            <img src="/check/getVerifyCode" alt='验证码' class="verifyCode" jktag="0001|0.1|91002">
                                            <i class="passport-icon icon-refresh refreshCode" jktag="0001|0.1|91002"></i>
                                        </div>
                                    </div>
                                </div>--%>
                                <div class="form-item form-sevenday">
                                    <div class="form-cont clearfix">
                                        <label><input type="checkbox" class="passport-sevenday"/>7天内免登录</label>
                                        <a href="/passport/forget" class="forget-link" jktag="0001|0.1|91003">忘记密码</a>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="form-cont">
                                        <button type="button" id="login" class="passport-btn passport-btn-def xl w-full"
                                                tabindex="4" jktag="0001|0.1|91038" href="javascript:;">登录</button>
                                    </div>
                                </div>
                            </form>
                            <!-- form end -->
                        </div>
                        <!-- tab-group end -->
                        <!-- tab-group -->
                        <div class="tab-group">
                            <!-- form -->
                            <form class="passport-form passport-form-sign" id="fastlogin-form" action="/submit/login_phone"
                                  method="get">

                                <input type='hidden' value='http://passport.jikexueyuan.com/sso/reg_phone' name='referer'/>

                                <div class="form-item">
                                    <div class="form-cont">
                                        <input type="text" name="phone" class="passport-txt xl w-full"
                                               tabindex="1" placeholder="请输入手机号" />
                                    </div>
                                </div>
                                <div class="form-item form-imgcode">
                                    <div class="form-cont">
                                        <div class="layout-inner">
                                            <input type="text" name="verify" class="passport-txt xl w-lg"
                                                   tabindex="2" placeholder="验证码" />
                                        </div>
                                        <div class="imgcode">
                                            <img src="/sso/verify" alt='验证码' class="verifyCode" jktag="0001|0.1|91002">
                                            <i class="passport-icon icon-refresh refreshCode" jktag="0001|0.1|91002"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-item form-mcode mb-25">
                                    <div class="form-cont">
                                        <input type="text" name="verify_code" class="passport-txt xl w-full"
                                               tabindex="3" placeholder="动态码" />

                                        <div class="btn-getcode">
                                            <button type="button" class="passport-btn js-getcode" jktag="0001|0.1|91039">获取动态码</button>
                                        </div>
                                        <div class="passport-sms getVoice" style="display: none;">未收到短信？使用<a href="javascript:;" class="js-getvoice" jktag="0001|0.1|91045">语音动态码</a></div>
                                        <div class="passport-sms reVoice" style="display: none;"><span class="js-revoice"></span>，请注意接听来电</div>
                                    </div>
                                </div>
                                <div class="form-item form-rememb">
                                    <div class="form-cont">
                                        <label><input type="checkbox" class="rememb" id='remember'/>记住手机号</label>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="form-cont">
                                        <button type="button" id="fastlogin" class="passport-btn passport-btn-def xl w-full"
                                                tabindex="4" jktag="0001|0.1|91043" href="javascript:;">登录</button>
                                    </div>
                                </div>
                            </form>
                            <!-- form end -->
                        </div>
                        <!-- tab-group end -->
                    </div>
                </div>
            </div>
            <div class="aside">
                <div class="passport-goto">没有账号? <a href="/passport/reg_phone" tabindex="5" jktag="0001|0.1|91005">新用户注册</a></div>
                <div class="sendgift"></div>
                <div class="passport-third">
                    <header class="hd">
                        <div class="layout-inner">
                            <h3>合作方帐号登录</h3>
                        </div>
                    </header>
                    <div class="links">
                        <a href="/connect/qq" jktag="0001|0.1|91061"><i class="passport-icon icon-tencent"></i></a>
                        <a href="/connect/weibo" jktag="0001|0.1|91058"><i class="passport-icon icon-weibo"></i></a>
                        <a href="/connect/weixin" jktag="0001|0.1|91059"><i class="passport-icon icon-weixin"></i></a>
                        <a href="/connect/eoe" jktag="0001|0.1|91060"><i class="passport-icon icon-eoe"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    var _Sjkxy = [];
    _Sjkxy['jPro'] = 'passport';
    _Sjkxy['params'] = {posId:91000};
</script>	<!--feg-box end-->
<script type="text/javascript" src='http://e.jikexueyuan.com/static/js/growingio.js'></script>
</body>
</html>