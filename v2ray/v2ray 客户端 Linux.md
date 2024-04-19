# V2ray Linux 客户端使用

## 一、安装使用
1. 从 [https://github.com/v2ray/dist](https://github.com/v2ray/dist) 中下载 Linux 版本的 `v2ray-linux-64.zip`
2. 解压
3. 直接执行下面指令即可
    ```bash
    ./v2ray -config config.json 
    ```
    或者也可以直接使用这里的文件： 
    > [v2ray.sh](./v2ray.sh)

服务器端与客户端的启动方式是一样的，区别只在配置文件上


## 二、配置文件
以下是我 `Windows` 上的 `V2ray` 导出的配置，直接在 Linux 上加载即可。

> 在没有指定 `-config` 选项的时候，程序会默认去找同目录中的 `config.json` 文件

```json
{
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "tag": "socks",
      "port": 12345,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "allowTransparent": false
      }
    },
    {
      "tag": "http",
      "port": 12346,
      "listen": "127.0.0.1",
      "protocol": "http",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      },
      "settings": {
        "udp": false,
        "allowTransparent": false
      }
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "yourv2ray.address.com",
            "port": 12345,
            "users": [
              {
                "id": "12345678-1234-1234-1234-123456781234",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp"
      },
      "mux": {
        "enabled": false,
        "concurrency": -1
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {}
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "response": {
          "type": "http"
        }
      }
    }
  ],
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api"
      },
      {
        "type": "field",
        "outboundTag": "proxy",
        "domain": [
          "geosite:google"
        ]
      },
      {
        "type": "field",
        "outboundTag": "direct",
        "domain": [
          "domain:example-example.com",
          "domain:example-example2.com"
        ]
      },
      {
        "type": "field",
        "outboundTag": "block",
        "domain": [
          "geosite:category-ads-all"
        ]
      }
    ]
  }
}
```
