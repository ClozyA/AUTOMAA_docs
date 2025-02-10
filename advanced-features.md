---
title: 进阶功能
description: AUTO_MAA 的高级配置指南
date: 2025-02-10
---

# 进阶功能

在了解完基础的用法后，您可以根据教程尝试配置以下功能。

## 代理成功消息推送

在 **通知** 选项中，您可以配置 **代理成功消息推送** 的渠道。

### ServerChan 方式推送

在 **v4.2.2-beta.2** 版本中，新增了 **ServerChan** 的推送方式。

#### 什么是 ServerChan？

「Server酱」，英文名「ServerChan」，是一款 **手机** 与 **服务器/智能设备** 之间的通信工具。它的主要作用是：

- 让服务器、路由器等设备推送消息到手机。
- 在这里，它用于 **Auto_MAA 代理成功后推送消息到手机**。

更多信息请查看：
- [Server酱·Turbo版](https://sct.ftqq.com/)
- [Server酱³ · 极简推送服务](https://sc3.ft07.com/)

::: warning 注意
Server酱官方在 2024 年推出了一种新的 App 推送渠道，与原来的 **Server酱·Turbo 版** （SCT）不同，并重新命名为 **Server酱³** （SC3）。
:::

在以下配置中，我们使用 **SCT** 代指 **Server酱·Turbo版**，**SC3** 代指 **Server酱³**。

## SendKey

SendKey 是 **Server酱** 平台对用户的认证方式。只有 **提供 SendKey**，Auto_MAA 才能将消息精准推送到您的设备。

### SCT 平台获取

- 前往 [SCT SendKey](https://sct.ftqq.com/sendkey)
- 获取 SendKey 并填写至 Auto_MAA

### SC3 平台获取

- 前往 [SC3 SendKey](https://sc3.ft07.com/sendkey)
- 获取 SendKey 并填写至 Auto_MAA

## ServerChanChannel 代码

**SC3 仅支持 App 推送**，因此 **仅 SCT 平台可填写 ServerChanChannel 代码**。

以下是 **可用消息渠道代码**，您需要填写 **对应的数字代码**。

| 渠道 | 代码 |
|------|------|
| 官方 Android 版·β | 98 |
| 企业微信应用消息 | 66 |
| 企业微信群机器人 | 1 |
| 钉钉群机器人 | 2 |
| 飞书群机器人 | 3 |
| Bark iOS | 8 |
| 测试号 | 0 |
| 自定义 | 88 |
| PushDeer | 18 |
| 方糖服务号 | 9 |

::: tip **多个渠道填写格式**
**多个渠道请用 `|` 分隔，格式如下：**
- ❌ `1 | 0 | 9`
- ✔️ `1|0|9`

如果未正确填写，系统将使用 **默认推送渠道**。
:::

## Tag 内容

该功能是 **SC3 平台的新特性**，仅适用于 **SC3**。

::: tip **Tag 填写格式**
**多个 Tag 请用 `|` 分隔**，格式如下：
- ❌ `AutoMAA | 代理情况`
- ✔️ `AutoMAA|代理情况`

若留空或填写不正确，则推送消息时不会携带 Tag 信息。
:::

## SMTP 邮件推送

除了 ServerChan，您还可以使用 **SMTP 电子邮件** 方式推送消息。

### SMTP 配置要求

| 配置项 | 说明                                    |
|------|---------------------------------------|
| SMTP 服务器 | 例如：smtp.gmail.com（Gmail）、smtp.qq.com（QQ 邮箱） |
| SMTP 端口 | 一般使用 465（常用）或 587                     |
| 发送邮箱 | 您的邮箱地址                                |
| 邮箱密码 | SMTP 授权码（部分邮箱可能需要开启 SMTP 服务）          |
| 收件人邮箱 | 需要接收通知的邮箱地址                           |


::: warning 注意
- 部分邮箱（如 Gmail、QQ 邮箱）可能需要 **开启 SMTP 服务** 并 **获取授权码**。
- 请不要直接使用 **邮箱密码** ，而是使用 **授权码** 。
  :::
