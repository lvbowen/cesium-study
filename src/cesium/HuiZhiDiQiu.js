import React, { memo, useEffect } from 'react';
import * as Cesium from 'cesium';

window.CESIUM_BASE_URL = '/static/cesium/';

const HuiZhiDiQiu = () => {

    useEffect(() => {
        // Your access token can be found at: https://cesium.com/ion/tokens.
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NTM1NzcwOC1kNGViLTRkYzEtYWIzMi1lNTZhY2QxYTU0ZTEiLCJpZCI6MTE2NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1NTk1NTA3NDZ9.jJUlHfVSfbconwcBZ5l7rBR7WK-J2MITlIAsQBmQA3M';
        // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrainProvider: Cesium.createWorldTerrain()
        });
        // Add Cesium OSM Buildings, a global 3D buildings layer.
        const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
        // Fly the camera to San Francisco at the given longitude, latitude, and height.
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(121, 31.655, 40000),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-45.0),
            }
        });
    }, [])

    return (
        <div id="cesiumContainer"></div>
    )
}

export default HuiZhiDiQiu;