# 使用文档

## 1 环境准备

确保您的系统中已经安装了Node.js和yarn。此外，确保您的数据库（MariaDB）已经配置好并启动。

## 2 安装依赖

在项目根目录下运行以下命令以安装依赖项：

```
yarn install
```

## 3 配置数据库连接

在`config/database.js`文件中，设置您的数据库连接参数。例如：

```javascript
module.exports = {
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysecretpw',
  database: 'railway',
  dialect: 'mariadb',
};
```

## 4 运行后端

在项目根目录下运行以下命令以启动后端：

```
yarn start
```

默认情况下，应用程序将在端口3000上运行，您可以在`app.js`文件中修改端口。


## 5 API接口文档

### 5.1 机车型号（locomotive_model）

#### 5.1.1 创建机车型号

**请求方法：** `POST /api/locomotive-models`

**请求参数：**

| 参数名                             | 类型   | 必选 | 描述                             |
| ---------------------------------- | ------ | ---- | -------------------------------- |
| model_name                         | String | 是   | 机车型号名称                     |
| axle_weight                        | Float  | 是   | 轴重                             |
| calculated_weight                  | Float  | 是   | 计算重量                         |
| max_starting_traction              | Float  | 是   | 最大启动牵引力                   |
| continuous_speed                   | Float  | 是   | 持续速度                         |
| continuous_traction                | Float  | 是   | 持续牵引力                       |
| max_speed                          | Float  | 是   | 最高速度                         |
| max_speed_traction                 | Float  | 是   | 最高速度时牵引力                 |
| limiting_slope_locomotive_resistance  | Float  | 是   | 限制坡道条件下机车单位运行基本阻力   |
| limiting_slope_freight_car_resistance  | Float  | 是   | 限制坡道条件下货车单位运行基本阻力   |
| max_speed_locomotive_resistance    | Float  | 是   | 最高时速条件下机车单位运行基本阻力 |
| max_speed_freight_car_resistance   | Float  | 是   | 最高时速条件下货车单位运行基本阻力 |

**响应体示例：**

```json
{
  "locomotiveModel": {
    "id": 1,
    "model_name": "Model 1",
    "axle_weight": 30,
    "calculated_weight": 1000,
    "max_starting_traction": 500,
    "continuous_speed": 90,
    "continuous_traction": 450,
    "max_speed": 120,
    "max_speed_traction": 400,
    "limiting_slope_locomotive_resistance": 0.1,
    "limiting_slope_freight_car_resistance": 0.15,
    "max_speed_locomotive_resistance": 0.2,
    "max_speed_freight_car_resistance": 0.25
  }
}
```

#### 5.1.2 获取所有机车型号

**请求方法：** `GET /api/locomotive-models`

**请求参数：** 无

**响应体示例：**

```json
{
  "locomotiveModels": [
    {
      "id": 1,
      "model_name": "Model 1",
      "axle_weight": 30,
      "calculated_weight": 1000,
      "max_starting_traction": 500,
      "continuous_speed": 90,
      "continuous_traction": 450,
      "max_speed": 120,
      "max_speed_traction": 400,
      "limiting_slope_locomotive_resistance": 0.1,
      "limiting_slope_freight_car_resistance": 0.15,
      "max_speed_locomotive_resistance": 0.2,
      "max_speed_freight_car_resistance": 0.25
    },
    {
      "id": 2,
      "model_name": "Model 2",
      "axle_weight": 35,
      "calculated_weight": 1100,
      "max_starting_traction": 550,
      "continuous_speed": 95,
      "continuous_traction": 475,
      "max_speed": 125,
      "max_speed_traction": 420,
      "limiting_slope_locomotive_resistance": 0.11,
      "limiting_slope_freight_car_resistance": 0.16,
      "max_speed_locomotive_resistance": 0.21,
      "max_speed_freight_car_resistance": 0.26
    }
  ]
}
```

#### 5.1.3 获取指定ID的机车型号

**请求方法：** `GET /api/locomotive-models/:id`

**请求参数：**

| 参数名 | 类型 | 必选 | 描述   |
| ------ | ---- | ---- | ------ |
| id     | Int  | 是   | 机车型号ID |

**响应体示例：**

```json
{
  "locomotiveModel": {
    "id": 1,
    "model_name": "Model 1",
    "axle_weight": 30,
    "calculated_weight": 1000,
    "max_starting_traction": 500,
    "continuous_speed": 90,
    "continuous_traction": 450,
    "max_speed": 120,
    "max_speed_traction": 400,
    "limiting_slope_locomotive_resistance": 0.1,
    "limiting_slope_freight_car_resistance": 0.15,
    "max_speed_locomotive_resistance": 0.2,
    "max_speed_freight_car_resistance": 0.25
  }
}
```

#### 5.1.4 更新指定ID的机车型号

**请求方法：** `PUT /api/locomotive-models/:id`

**请求参数：**

| 参数名                             | 类型   | 必选 | 描述                             |
| ---------------------------------- | ------ | ---- | -------------------------------- |
| id                                 | Int    | 是   | 机车型号ID                       |
| model_name                         | String | 否   | 机车型号名称                     |
| axle_weight                        | Float  | 否   | 轴重                             |
| calculated_weight                  | Float  | 否   | 计算重量                         |
| max_starting_traction              | Float  | 否   | 最大启动牵引力                   |
| continuous_speed                   | Float  | 否   | 持续速度                         |
| continuous_traction                | Float  | 否   | 持续牵引力                       |
| max_speed                          | Float  | 否   | 最高速度                         |
| max_speed_traction                 | Float  | 否   | 最高速度时牵引力                 |
| limiting_slope_locomotive_resistance  | Float  | 否   | 限制坡道条件下机车单位运行基本阻力   |
| limiting_slope_freight_car_resistance  | Float  | 否   | 限制坡道条件下货车单位运行基本阻力   |
| max_speed_locomotive_resistance    | Float  | 否   | 最高时速条件下机车单位运行基本阻力 |
| max_speed_freight_car_resistance   | Float  | 否   | 最高时速条件下货车单位运行基本阻力 |

**响应体示例：**

```json
{
  "locomotiveModel": {
    "id": 1,
    "model_name": "Model 1",
    "axle_weight": 30,
    "calculated_weight": 1000,
    "max_starting_traction": 500,
    "continuous_speed": 90,
    "continuous_traction": 450,
    "max_speed": 120,
    "max_speed_traction": 400,
    "limiting_slope_locomotive_resistance": 0.1,
    "limiting_slope_freight_car_resistance": 0.15,
    "max_speed_locomotive_resistance": 0.2,
    "max_speed_freight_car_resistance": 0.25
  }
}
```

#### 5.1.5 删除指定ID的机车型号

**请求方法：** `DELETE /api/locomotive-models/:id`

**请求参数：**

| 参数名 | 类型 | 必选 | 描述   |
| ------ | ---- | ---- | ------ |
| id     | Int  | 是   | 机车型号ID |

**响应体示例：**

```json
{
  "message": "Locomotive model deleted successfully."
}
```

抱歉，回答被截断了。请允许我继续上面的回答。

### 5.2 站点（station）

#### 5.2.1 创建站点

**请求方法：** `POST /api/stations`

**请求参数：**

| 参数名         | 类型   | 必选 | 描述         |
| -------------- | ------ | ---- | ------------ |
| name           | String | 是   | 站点名称     |
| altitude       | Float  | 是   | 站点海拔高度 |

**响应体示例：**

```json
{
  "station": {
    "id": 1,
    "name": "Station A",
    "altitude": 1000
  }
}
```

#### 5.2.2 获取所有站点

**请求方法：** `GET /api/stations`

**请求参数：** 无

**响应体示例：**

```json
{
  "stations": [
    {
      "id": 1,
      "name": "Station A",
      "altitude": 1000
    },
    {
      "id": 2,
      "name": "Station B",
      "altitude": 1200
    }
  ]
}
```

#### 5.2.3 获取指定ID的站点

**请求方法：** `GET /api/stations/:id`

**请求参数：**

| 参数名 | 类型 | 必选 | 描述   |
| ------ | ---- | ---- | ------ |
| id     | Int  | 是   | 站点ID |

**响应体示例：**

```json
{
  "station": {
    "id": 1,
    "name": "Station A",
    "altitude": 1000
  }
}
```

#### 5.2.4 更新指定ID的站点

**请求方法：** `PUT /api/stations/:id`

**请求参数：**

| 参数名         | 类型   | 必选 | 描述         |
| -------------- | ------ | ---- | ------------ |
| id             | Int    | 是   | 站点ID       |
| name           | String | 否   | 站点名称     |
| altitude       | Float  | 否   | 站点海拔高度 |

**响应体示例：**

抱歉，回答被截断了。请允许我继续上面的回答。

```json
{
  "station": {
    "id": 1,
    "name": "Station A",
    "altitude": 1000
  }
}
```

#### 5.2.5 删除指定ID的站点

**请求方法：** `DELETE /api/stations/:id`

**请求参数：**

| 参数名 | 类型 | 必选 | 描述   |
| ------ | ---- | ---- | ------ |
| id     | Int  | 是   | 站点ID |

**响应体示例：**

```json
{
  "message": "Station deleted successfully."
}
```

### 5.3 机车型号与站点海拔修正系数（model_station_altitude_coefficient）

#### 5.3.1 创建机车型号与站点海拔修正系数记录

**请求方法：** `POST /api/model-station-altitude-coefficients`

**请求参数：**

| 参数名                | 类型  | 必选 | 描述                               |
| --------------------- | ----- | ---- | ---------------------------------- |
| locomotive_model_id   | Int   | 是   | 机车型号ID（关联locomotive_model表） |
| station_id            | Int   | 是   | 站点ID（关联station表）             |
| altitude_coefficient  | Float | 是   | 海拔修正系数                       |

**响应体示例：**

```json
{
  "model_station_altitude_coefficient": {
    "id": 1,
    "locomotive_model_id": 1,
    "station_id": 1,
    "altitude_coefficient": 1.05
  }
}
```

#### 5.3.2 获取所有机车型号与站点海拔修正系数记录

**请求方法：** `GET /api/model-station-altitude-coefficients`

**请求参数：** 无

**响应体示例：**

```json
{
  "model_station_altitude_coefficients": [
    {
      "id": 1,
      "locomotive_model_id": 1,
      "station_id": 1,
      "altitude_coefficient": 1.05
    },
    {
      "id": 2,
      "locomotive_model_id": 1,
      "station_id": 2,
      "altitude_coefficient": 1.08
    }
  ]
}
```

#### 5.3.3 获取指定ID的机车型号与站点海拔修正系数记录

**请求方法：** `GET /api/model-station-altitude-coefficients/:id`

**请求参数：**

| 参数名 | 类型 | 必选 | 描述                              |
| ------ | ---- | ---- | --------------------------------- |
| id     | Int  | 是   | 机车型号与站点海拔修正系数记录的ID |

**响应体示例：**

```json
{
  "model_station_altitude_coefficient": {
    "id": 1,
    "locomotive_model_id": 1,
    "station_id": 1,
    "altitude_coefficient": 1.05
  }
}
```
抱歉，回答被截断了。请允许我继续上面的回答。

#### 5.3.4 更新指定ID的机车型号与站点海拔修正系数记录

**请求方法：** `PUT /api/model-station-altitude-coefficients/:id`

**请求参数：**

| 参数名                | 类型  | 必选 | 描述                               |
| --------------------- | ----- | ---- | ---------------------------------- |
| id                    | Int   | 是   | 机车型号与站点海拔修正系数记录的ID  |
| locomotive_model_id   | Int   | 否   | 机车型号ID（关联locomotive_model表） |
| station_id            | Int   | 否   | 站点ID（关联station表）             |
| altitude_coefficient  | Float | 否   | 海拔修正系数                       |

**响应体示例：**

```json
{
  "model_station_altitude_coefficient": {
    "id": 1,
    "locomotive_model_id": 1,
    "station_id": 1,
    "altitude_coefficient": 1.05
  }
}
```

#### 5.3.5 删除指定ID的机车型号与站点海拔修正系数记录

**请求方法：** `DELETE /api/model-station-altitude-coefficients/:id`

**请求参数：**

| 参数名 | 类型 | 必选 | 描述                              |
| ------ | ---- | ---- | --------------------------------- |
| id     | Int  | 是   | 机车型号与站点海拔修正系数记录的ID |

**响应体示例：**

```json
{
  "message": "Model station altitude coefficient deleted successfully."
}
```
### 6. 数据库结构
以下是本程序的MariaDB数据库结构，列出了每个数据表及其对应的字段：

- locomotive_models（机车型号）
    - id：唯一ID（整型，主键，自增）
    - model_name：机车型号名称（字符串，非空）
    - axle_weight：轴重（浮点型，非空）
    - calculated_weight：计算重量（浮点型，非空）
    - max_starting_traction：最大启动牵引力（浮点型，非空）
    - continuous_speed：持续速度（浮点型，非空）
    - continuous_traction：持续牵引力（浮点型，非空）
    - max_speed：最高速度（浮点型，非空）
    - max_speed_traction：最高速度时牵引力（浮点型，非空）
    - limiting_slope_locomotive_resistance：限制坡道条件下机车单位运行基本阻力（浮点型，非空）
    - limiting_slope_freight_car_resistance：限制坡道条件下货车单位运行基本阻力（浮点型，非空）
    - max_speed_locomotive_resistance：最高时速条件下机车单位运行基本阻力（浮点型，非空）
    - max_speed_freight_car_resistance：最高时速条件下货车单位运行基本阻力（浮点型，非空）

- stations（站点）
    - id：唯一ID（整型，主键，自增）
    - station_name：站点名称（字符串，非空）
    - altitude：海拔（浮点型，非空）

- model_station_altitude_coefficients（机车型号与站点海拔修正系数）
    - id：唯一ID（整型，主键，自增）
    - locomotive_model_id：机车型号ID（整型，外键，关联locomotive_model表的id）
    - station_id：站点ID（整型，外键，关联station表的id）
    - altitude_coefficient：海拔修正系数（浮点型，非空）

以上是本程序数据库的结构。在开发过程中，您可以根据这些信息轻松地了解数据库内部结构。

### 7. 注意事项

1. 请确保您的数据库已配置并运行，否则应用程序将无法启动。
2. 如需修改应用程序的运行端口，请在`app.js`文件中相应地修改`PORT`变量。
3. 在进行数据库操作时，请注意异常处理以避免潜在的错误。
