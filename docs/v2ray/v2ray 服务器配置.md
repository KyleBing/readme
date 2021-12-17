# v2ray 服务器安装

## 一、安装脚本 
```bash
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
```

或者直接使用文件内容
> [v2ray.sh](./v2ray.sh) <-


此脚本会自动安装以下文件：

- `/usr/bin/v2ray/v2ray`：V2Ray 程序；
- `/usr/bin/v2ray/v2ctl`：V2Ray 工具；
- `/etc/v2ray/config.json`：配置文件；
- `/usr/bin/v2ray/geoip.dat`：IP 数据文件
- `/usr/bin/v2ray/geosite.dat`：域名数据文件

配置文件在

```bash
 /usr/local/etc/v2ray/config.json 
```

但运行时的配置文件在 `/usr/local/etc/v2ray/config.json`

```bash
[root@b ~]# ps -aux | grep v2ray
nobody    1117  3.0  5.8 5262608 29936 ?       Ssl  12:17   0:01 /usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json
root      2354  0.0  0.4 112656  2116 pts/0    R+   12:18   0:00 grep --color=auto v2
```


## 二、配置文件内容


```js
{
  "inbounds": [{
    "port": 12345,
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
        "id": "12345678-1234-1234-1234-123456781234",
          "level": 0,
          "alterId": 0
        },{
          "id": "12345678-1234-1234-1234-123456781234",
          "level": 0,
          "alterId": 0
        }
      ]
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "settings": {}
  },{
    "protocol": "blackhole",
    "settings": {},
    "tag": "blocked"
  }],
  "routing": {
    "rules": [
      {
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "blocked"
      }
    ]
  }
}
```
