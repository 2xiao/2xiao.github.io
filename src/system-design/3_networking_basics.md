# 4. 网络基础

网络是系统设计中的一个关键概念，理解计算机如何通过网络进行通信是开发健壮软件解决方案的重要基础。本文将通过简单的类比和插图，深入探讨网络基础，包括 IP 地址、数据包、通信协议和端口等内容。

## 理解 IP 地址

### 什么是 IP 地址？

IP 地址（Internet Protocol 地址）用来唯一标识网络中的设备，就像邮政地址用来唯一标识一栋房子一样。计算机通过了解彼此的 IP 地址，在互联网中进行通信。

### IPv4 和 IPv6

IP 地址有两个版本：IPv4 和 IPv6。

- **IPv4**: 使用 32 位地址，可生成约 40 亿个唯一地址。IPv4 地址通常以点分十进制形式表示，例如：`192.168.1.1`，其中每部分的取值范围为 0 到 255。
- **IPv6**: 为了解决 IPv4 地址耗尽的问题，IPv6 使用 128 位地址，提供了一个更大的地址池。IPv6 地址以十六进制形式表示，用冒号分隔，例如：`2001:0db8:85a3:0000:0000:8a2e:0370:7334`。

#### IPv4 地址示意图：

```
+---------------------+
| 192 | 168 |  1 |  1 |
+---------------------+
  |     |     |     |
0-255 0-255 0-255 0-255
```

## 网络中的数据传输：IP 数据包

在网络上传输数据时，数据会被分解为较小的单元，称为**数据包**。每个数据包不仅包含要传输的数据，还包含描述数据的元数据，例如源 IP 地址和目标 IP 地址。

### Internet 协议（IP）

Internet 协议负责管理数据如何在网络中从一台设备发送到另一台设备。每个 IP 数据包的头部包含如下元数据：

- 源 IP 地址
- 目标 IP 地址
- 其他控制信息

#### 类比：邮寄信件

通过网络传输数据类似于邮寄信件：

- **信封** = 数据包
- **信封上的地址** = IP 地址
- **信封内的内容** = 要传输的数据

```
+-------------------------------+
|          IP 数据包             |
| +---------+-----------------+ |
| |   头部   |      数据       | |
| +---------+-----------------+ |
+-------------------------------+
  | 源IP地址     | 目标IP地址     |
  | 192.168.1.1 | 93.184.216.34 |
```

## 数据拆分：TCP 和 UDP

在传输较大的数据时，它们可能无法放入一个单独的数据包中。例如，邮寄一本书需要将其分拆为多个信封。类似地，我们使用如 TCP（传输控制协议）和 UDP（用户数据报协议）的协议来管理数据传输。

### TCP（传输控制协议）

TCP 确保数据可靠传输且顺序正确。它将数据拆分成数据包，分配序列号，并在目标端重新组装。

#### TCP 数据包示意图：

```
+------------------------------+
|          TCP 数据包           |
| +---------+----------------+ |
| | TCP头部  |      数据      | |
| +---------+----------------+ |
+------------------------------+
   | 序列号 |     数据       |
```

### UDP（用户数据报协议）

相比之下，UDP 在发送数据包时不需要建立连接，也不确保数据包按顺序到达。它的速度更快，但可靠性较低，适用于视频流等对速度要求更高的应用。

## 通信端口

端口是网络设备上的通信端点，就像房子的门用来打开特定的通信通道一样。常见的端口包括：

- **端口 80**: HTTP 流量的默认端口
- **端口 443**: HTTPS 流量的默认端口
- **端口 22**: 用于 SSH（安全外壳协议）

每台设备最多可以有 65,535 个端口（基于 16 位值），特定应用使用预定义的端口进行通信。

#### 端口示例：

```
+-------------------+
|      设备          |
| +---------------+ |
| |     端口       | |
| +---+---+---+---+ |
| |80 |443|22 |...| |
| +---+---+---+---+ |
+-------------------+
```

## 公网 IP 和私网 IP

- **公网 IP 地址**: 可通过互联网访问，通常用于需要公开访问的服务器。
- **私网 IP 地址**: 用于局域网（LAN），不能直接通过互联网访问。这些地址通常由路由器分配给家庭或办公室网络中的设备。

#### 公网和私网 IP 地址示例：

```
+-----------------------------+
|         互联网               |
| +-----------------------+   |
| |        公网 IP         |   |
| |      203.0.113.5      |   |
| +------------+----------+   |
|              |              |
+--------------+--------------+
               |
        +------+------+
        |    路由器    |
        +------+------+
               |
    +----------+---------+
    |     私网 IP 地址    |
    | +-------+--------+ |
    | | 192.168.0.2    | |
    | +-------+--------+ |
    | | 192.168.0.3    | |
    | +-------+--------+ |
    +--------------------+
```

## 本地主机和保留 IP

- **本地主机 (`127.0.0.1`)**: 是保留用于机器自我引用的特殊 IP 地址，常用于测试和开发环境。

#### 本地访问应用示例：

```shell
# 访问本地运行的应用程序
http://localhost:4200
# 或
http://127.0.0.1:4200
```
