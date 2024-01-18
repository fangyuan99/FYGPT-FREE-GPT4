# FYGPT-FREE-GPT4
> ### ❗使用**copilot**使用GPT-4有风险😂，可能会导致**Github封号**，请自行注册**小号**，**小范围谨慎**使用!!!!!

一个使用`PandoraNext-TokensTool`和`copilot`的**免费GPT4网页**demo

### 如何使用？
1. 按照这个教程[🦄 【基础】教你部署tokensTool - tokensTool](https://apifox.com/apidoc/shared-40345b46-9c9c-45cc-b494-6a6a387a978f/doc-3430777)一键部署`PandoraNext`和`tokensTool`
2. 按照这个教程[🔥 【基础】tokensTool使用GPT-4(独享) - tokensTool](https://apifox.com/apidoc/shared-40345b46-9c9c-45cc-b494-6a6a387a978f/doc-3482396)获取`copilot`的`token`(学生可以~~**白嫖**~~，或者上某宝搞一个)
3. Fork本项目（点个star更好）并在[vercel](https://vercel.com)部署(**推荐**)
4. 填写vercel环境变量后，愉快的开始使用**FREE-GPT4**
5. 既然你能访问`github`，我默认你会访问谷歌，如果不能访问，请自己想办法，或者买一个域名解析到`vercel项目`

|   环境变量   | 说明                                                         |
| :----------: | :----------------------------------------------------------- |
|  VITE_TOKEN  | 必填，值为第1步搭建好的PandoraNext接口，默认为：http://ip:8081 ，或者是你反向代理到8081的自定义域名 |
| VITE_API_URL | 选填，你也可以在部署好之后手动填在input框里面                |

第三步也可以直接一键部署（不推荐,因为fork后~~**可能**~~会收到更新）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffangyuan99%2FFYGPT-FREE-GPT4&env=VITE_API_URL&project-name=FYGPT-FREE-GPT4&repository-name=FYGPT-FREE-GPT4)



### 后续开发计划

要是有人用的话再更新，目前仅自用

1. 优化左侧Markdown样式
2. 保存用户聊天记录
3. 总结，增加上下文
4. 增加网页设置，自定义程度提高
5. 以上计划不分先后，有时间再说...
