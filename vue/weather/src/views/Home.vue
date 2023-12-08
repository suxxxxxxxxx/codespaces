<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ localTime }}</div>
            <div class="city">切换城市</div>
        </div>
        <div class="city-info">
            <div class="city-name">{{ weatherData.city }}</div>
            <p class="weather">{{weatherData.weather}}</p>
            <h2 class="temp">
                <em>{{ weatherData.temperature }}</em>*
            </h2>
            <div class="detail">
                <span>风力:{{weatherData.windPower}}级</span>|
                <span>风向：{{weatherData.windDirection}}风</span>|
                <span>空气湿度:{{weatherData.humidity}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
    data() {
        return {
            localTime: '0.00',
            weatherData: {},
        }
    },
    created() {
        setInterval(() => {
            this.localTime = new Date().toLocaleTimeString();
        }, 1000);
        this.initMap();

    },
    methods: {

        initMap() {
            let that = this;
            AMapLoader.load({
                key: 'e186d96c47651f5f186abc1e03a76a8c',
                version: '2.0',
                plugins: ['AMap.CitySearch'],
            }).then((AMap) => {
                AMap.plugin('AMap.CitySearch', function () {
                    var citySearch = new AMap.CitySearch()
                    citySearch.getLocalCity(function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            // 查询成功，result即为当前所在城市信息
                            console.log(result.city);
                            //加载天气查询插件
                            AMap.plugin('AMap.Weather', function () {
                                //创建天气查询实例
                                var weather = new AMap.Weather();

                                //执行实时天气信息查询
                                weather.getLive(result.city, function (err, data) {
                                    console.log(err, data);
                                    that.weatherData = data;
                                });
                            });
                        }
                    })
                })
            })
        }
    },
}
</script>

<style lang="css" scoped>
.container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color: #fff;
}

.nav {
    overflow: auto;
    padding: 10px;
}

.time {
    float: left;
}

.city {
    float: right;
}

.city-info {
    text-align: center;
}

.temp {
    font-size: 26px;
}

.temp em {
    font-style: normal;
    font-size: 34px;
}
</style>
