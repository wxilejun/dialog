var showbutton = document.getElementById('buttonshow');
showbutton.addEventListener('click' , showalert , false);
function showalert(){
    // 对话框标题
    var alerttitle = document.getElementById('alert-title');
    // 设置标题
    alerttitle.innerHTML = "对话框";
    
    // 对话框内容
    var alertneirong = document.getElementById('alert-neirong');
    // 设置内容
    alertneirong.innerHTML = '对话框内容';

    // 对话框按钮
    var alertdismiss = document.getElementById('alert-dismiss');
    // 设置内容
    alertdismiss.innerHTML = '确定';

    var alertdiv = document.getElementById('alert-dialog');
    alertdiv.style.display = 'block';
}

function dismiss(){
    var alertdiv = document.getElementById('alert-dialog');
    alertdiv.style.display = 'none';
}