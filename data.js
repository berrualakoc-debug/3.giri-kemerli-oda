var APP_DATA = {
  "scenes": [
    {
      "id": "0-jpg2",
      "name": "jpg2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.008417086482371161,
        "pitch": 0.27414036683735254,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.4683916167739426,
          "pitch": 0.28700710751473224,
          "rotation": 1.5707963267948966,
          "target": "1-jpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-jpg",
      "name": "jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.14641569537291943,
        "pitch": 0.3164131437237181,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.087238793783328,
          "pitch": 0.8673362032475325,
          "rotation": 0.7853981633974483,
          "target": "0-jpg2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
