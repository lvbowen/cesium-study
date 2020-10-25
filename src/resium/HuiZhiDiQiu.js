import React, { memo, useEffect } from 'react';
import { Viewer, ImageryLayer } from 'resium';
// import * as Cesium from 'cesium';
import { ArcGisMapServerImageryProvider, WebMapTileServiceImageryProvider, WebMapServiceImageryProvider } from 'cesium';



const config = {
    id: "YL_VIEWER",
    full: false, // Same as style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} if it is true.
    // imageryProvider: new ArcGisMapServerImageryProvider({
    //     url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
    // }),
    // imageryProvider: false, // false默认图层移除，展示蓝球
    geocoder: false, // 一种位置搜索工具，可将相机带到查询的位置。默认情况下使用Bing Maps数据。
    homeButton: false, // 将查看器带回到默认视图。
    sceneModePicker: false, // 在3D，2D和Columbus View（CV）模式之间切换。
    baseLayerPicker: false, // 选择要在地球上显示的图像和地形。
    navigationHelpButton: false, // 显示默认的相机控件。
    animation: false, // 控制视图动画的播放速度。
    timeline: false, // 指示当前时间，并允许用户使用洗涤器跳至特定时间。
    fullscreenButton: false, // 使查看器全屏显示。
    scene3DOnly: true, // 每个几何实例仅将以3D渲染以节省GPU内存
    navigationInstructionsInitiallyVisible: false, // 如果导航说明最初应该可见，则为True；如果直到用户明确单击该按钮才显示，则为false
    showRenderLoopErrors: false, // 在发生渲染循环错误时，此小部件将自动向包含错误的用户显示HTML面板
    useBrowserRecommendedResolution: true, // 以浏览器建议的分辨率渲染并忽略
    shouldAnimate: false,
    selectionIndicator: false,
    resolutionScale: 0.9,
};

const HuiZhiDiQiu = () => {

    useEffect(() => {
        
    }, [])

    return (
       <Viewer {...config} style={{ width: '100%', height: '100%' }}>
           {/* <ImageryLayer
                imageryProvider={
                    new WebMapTileServiceImageryProvider({
                        url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix=%7BTileMatrix%7D&TileRow=%7BTileRow%7D&TileCol=%7BTileCol%7D&style=default&format=tiles&tk=9fb37f7d888b84de41af517302a0b55c",
                        layer: "tdtBasicLayer",
                        style: "default",
                        format: "image/jpeg",
                        tileMatrixSetID: "GoogleMapsCompatible",
                        show: false
                    })
                }
            /> */}
           <ImageryLayer
                imageryProvider={
                    new ArcGisMapServerImageryProvider({
                        url: "http://39.98.212.248:6080/arcgis/rest/services/zhangyue/guangdong/MapServer"
                    })
                }
            />
            <ImageryLayer
                imageryProvider={
                    new WebMapServiceImageryProvider({
                        url: 'http://47.92.104.54:8088/geoserver/ylgis/wms',
                        layers: 'guangdong_demo_heliu',
                        parameters: {
                            service: 'WMS',
                            format: 'image/png',
                            transparent: true,
                        }
                    })
                }
            />
       </Viewer>
    )
}

export default HuiZhiDiQiu;