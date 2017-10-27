;(function($){
    $(document).ready(function(){
        //表单验证
        function formValidation(){
            //帐号验证
             $("#d-login_account").on("blur",function(){//blur
                var val=$.trim($(this).val());//去掉字符开始和结束的空格
                if(val!=""){
                    $(this).prev().children("span").hide();
                    $(this).css("border","1px solid #BEBDBB");
                }else{
                    $(this).prev().children("span").show();
                    $(this).css("border","1px solid #e74c3c");
                }
            })
                       
            //密码验证
            $("#d-password").on("blur",function(){
                var val=$.trim($(this).val()),
                    reg=/^.{6,16}$/;
                if(reg.test(val)){
                    $(this).css("border","1px solid #BEBDBB");
                    $(this).prev().children("span").hide();
                }else{
                    $(this).css("border","1px solid #e74c3c");
                    $(this).prev().children("span").show();
                }
            })
             //手机号码验证
            $("#d-phone_num").on("blur",function(){//blur
                var val=$.trim($(this).val());//去掉字符开始和结束的空格
                reg=/^1[34578]\d{9}$/;
                if(reg.test(val)){
                    $(this).prev().children("span").hide();
                    $(this).css("border","1px solid #BEBDBB");
                }else{
                    $(this).prev().children("span").show();
                    $(this).css("border","1px solid #e74c3c");
                }
            })
            //图片验证码
            $("#d-image_verify_code").on("blur",function () {
            	var val=$.trim($(this).val());
            	reg=/1vRG/;
            	if(reg.test(val)){
            		$(".d-correct_imgcode span").hide();
            		$(this).css("border","1px solid #BEBDBB");
            	}
            	else{
            		$(".d-correct_imgcode span").show();
            		 $(this).css("border","1px solid #e74c3c");
            	}
            })
            //手机验证码
            $("#d-phone_verify_code").on("blur",function () {
            	var val=$.trim($(this).val());
            	reg=/^[0-9]\d{3}/;
            	if(reg.test(val)){
            		$(".d-correct_mescode span").hide();
            		$(this).css("border","1px solid #BEBDBB");
            	}
            	else{
            		$(".d-correct_mescode span").show();
            		 $(this).css("border","1px solid #e74c3c");
            	}
            })                 
        }
        formValidation();
        //点击登录按钮
       
    
        
    })
})(jQuery)
