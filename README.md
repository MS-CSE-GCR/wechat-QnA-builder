### Deploy a wechat QnA public account backend to Azure
### It's codeless!

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)



##### Welcome to use the Wechat open account QnA backend. You need to finish the follow steps after you deploy the WebApp to Azure.

- Create your QnA App at <a target="_blank" href = "https://qnamaker.ai">https://qnamaker.ai</a>, and publish app to get the 'Ocp-Apim-Subscription-Key' and 'QnA-Maker-Key'.
- Create your WeChat open account <a target="_blank" href = "https://mp.weixin.qq.com">https://mp.weixin.qq.com</a>, and set yuor app token.
- Go to Azure portal <a target="_blank" href = "https://portal.azure.com">https://portal.azure.com</a>, and find this WebApp in the 'Application settings' tab create the following new "Application settings".
    - Wechat_Token='Your Wechat_Token'
    - Ocp_Apim_Subscription_Key='Your Ocp-Apim-Subscription-Key'
    - QnA_Maker_Key='Your QnA Maker Key'
- Done!



###### Azure webapp setting screenshot

![azure webapp setting screenshot](/appsetting.PNG)

###### Wechat setting screenshot

![wechat setting screenshot](/wechat.PNG)


For information about using this template, see [Deploy a web app linked to a GitHub repository](https://azure.microsoft.com/en-us/documentation/articles/app-service-web-arm-from-github-provision/).

