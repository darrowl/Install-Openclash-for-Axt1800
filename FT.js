/***********************************

> 更新時間：2023-03-06

[rewrite_local]

# ～ FT中文
^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.* url script-response-body https://raw.githubusercontent.com/darrowl/Install-Openclash-for-Axt1800/main/FT.js

[mitm] 

hostname=user.ftmailbox.cn

***********************************/






















$done({body: JSON.stringify({environment:"Production",receipt:{in_app:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2024-04-02 22:22:22 Etc/GMT",expires_date_ms:"1712088180000",expires_date_pst:"2024-04-02 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}]},latest_receipt_info:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2024-04-02 22:22:22 Etc/GMT",expires_date_ms:"1712088180000",expires_date_pst:"2024-04-02 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}],latest_receipt:"NA",pending_renewal_info:[{auto_renew_product_id:"com.ft.ftchinese.mobile.subscription.vip",product_id:"com.ft.ftchinese.mobile.subscription.vip",auto_renew_status:"0"}],status:0})});
